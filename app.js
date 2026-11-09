const $=s=>document.querySelector(s);const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const TOP=window.TOPICS||[];const RT=window.REFTABLES||[];const RTM={};RT.forEach(t=>RTM[t.id]=t);const CALC={};CALCS.forEach(c=>CALC[c.id]=c);
const LS={get:(k,d)=>{try{return JSON.parse(localStorage.getItem(k))??d}catch(e){return d}},set:(k,v)=>{try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}};
function fav(key,title){const f=LS.get('fav',[]);const i=f.findIndex(x=>x.k===key);if(i>=0)f.splice(i,1);else f.unshift({k:key,t:title});LS.set('fav',f);render()}
function isFav(k){return LS.get('fav',[]).some(x=>x.k===k)}
function recent(key,title){let r=LS.get('rec',[]).filter(x=>x.k!==key);r.unshift({k:key,t:title});LS.set('rec',r.slice(0,12))}
function star(k,t){return `<button class="star" onclick="fav('${k}','${esc(t).replace(/'/g,"\\'")}')">${isFav(k)?'★':'☆'}</button>`}
function link(k,t){return `<a href="#${k}">${esc(t)}</a>`}
function adSlot(name){return window.ADS&&ADS.slot?ADS.slot(name):''}
function tableHTML(t,open){return `<details class="card rt" ${open?'open':''}><summary>📋 <b>${esc(t.t)}</b> <span class="tag">${esc(t.cat)}</span></summary><div class="tw"><table><thead><tr>${t.head.map(h=>`<th>${esc(h)}</th>`).join('')}</tr></thead><tbody>${t.rows.map(r=>`<tr>${r.map(c=>`<td>${esc(c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>${t.note?`<div class="note">${esc(t.note)}</div>`:''}<div class="cite">Sources: ${esc(t.ref)} ${star('table/'+t.id,t.t)}</div></details>`}
let calcHTML=function(c){return ''};let calcValue=function(){};let resetCalc=function(){};
function calc(id){const c=CALC[id];const r=calcValue(id);const out=$('#r_'+id);try{if(c.type==='pts'){out.innerHTML=(r.miss?`<span class="muted">${r.miss} item(s) not selected · </span>`:'')+'<b>Total: '+r.t+'</b><br>'+esc(c.interp(r.t))}else{const s=c.f(r.v);out.innerHTML=/NaN|Infinity/.test(s)?'<span class="muted">Fill in the required fields…</span><br>'+esc(s.replace(/NaN|Infinity/g,'–')):esc(s)}}catch(e){out.textContent='Fill in the fields…'}}
const VIEWS={
topic(id){const t=TOP.find(x=>x.id===id);if(!t)return '<p>Not found.</p>';recent('topic/'+id,t.t);if(id==='scales')return VIEWS.scales();if(id==='charts')return VIEWS.charts();
 return `<h2>${t.icon} ${esc(t.t)} ${star('topic/'+id,t.t)}</h2><p class="muted">${esc(t.sub)}</p><div class="card key">${t.sum||''}<div class="cite">Key sources: ${esc(t.refs||'')}</div></div>
 ${(t.cls||[]).length?'<h3>Checklists & criteria</h3>'+t.cls.filter(x=>CLM[x]).map(x=>`<a class="row" href="#cl/${x}">${CLM[x].kind==='criteria'?'🔎':'✅'} <b>${esc(CLM[x].name)}</b></a>`).join(''):''}
 ${(t.calcs||[]).length?'<h3>Calculators</h3>'+t.calcs.filter(c=>CALC[c]).map(c=>`<details class="card"><summary>🧮 ${esc(CALC[c].name)}</summary>${calcHTML(CALC[c])}</details>`).join(''):''}
 ${(t.tables||[]).length?'<h3>Reference tables</h3>'+t.tables.filter(x=>RTM[x]).map(x=>tableHTML(RTM[x])).join(''):''}`},
scales(){const cats=[...new Set([...CALCS.map(c=>c.cat),...CLS.filter(c=>c.kind==='criteria').map(c=>c.cat)])].sort();
 return `<h2>📊 All scales, scores, criteria & syndromes</h2><p class="muted">${CALCS.length} interactive calculators + ${CLS.filter(c=>c.kind==='criteria').length} auto-evaluating criteria sets, each with its published source.</p>
 <input id="sf" class="filter" placeholder="Filter scales… (e.g. sepsis, GCS, ARDS)" oninput="filterList('#scl .row',this.value,'#scat')"><select id="scat" class="filter" onchange="filterList('#scl .row',$('#sf').value,'#scat')"><option value="">All categories</option>${cats.map(c=>`<option>${esc(c)}</option>`).join('')}</select>
 <div id="scl">${CALCS.map(c=>`<a class="row" data-cat="${esc(c.cat)}" href="#calc/${c.id}">🧮 <b>${esc(c.name)}</b> <span class="tag">${esc(c.cat)}</span><span class="cite">${esc(c.ref)}</span></a>`).join('')}
 ${CLS.filter(c=>c.kind==='criteria').map(c=>`<a class="row" data-cat="${esc(c.cat)}" href="#cl/${c.id}">🔎 <b>${esc(c.name)}</b> <span class="tag">${esc(c.cat)}</span><span class="cite">${esc(c.ref)}</span></a>`).join('')}</div>`},
charts(){const cats=[...new Set(RT.map(r=>r.cat))];return `<h2>🗂️ Charts — quick reference tables (${RT.length})</h2><p class="muted">Original summary tables compiled from the cited guidelines and trials. Verify against current local protocols.</p>
 <input id="cf" class="filter" placeholder="Filter charts…" oninput="filterList('#chl .rt',this.value,'#ccat')"><select id="ccat" class="filter" onchange="filterList('#chl .rt',$('#cf').value,'#ccat')"><option value="">All</option>${cats.map(c=>`<option>${esc(c)}</option>`).join('')}</select>
 <div id="chl">${RT.map(t=>tableHTML(t).replace('<details class="card rt"',`<details class="card rt" data-cat="${esc(t.cat)}"`)).join('')}</div>`},
table(id){const t=RTM[id];if(!t)return '<p>Not found.</p>';recent('table/'+id,t.t);return tableHTML(t,true)+'<p>'+link('topic/charts','← All charts')+'</p>'},
calc(id){const c=CALC[id];if(!c)return '<p>Not found.</p>';recent('calc/'+id,c.name);return calcHTML(c)+adSlot('calc')+'<p>'+link('calcs','← All calculators')+'</p>'}
};
function filterList(sel,q,cat){const c=$(cat).value;q=q.toLowerCase();document.querySelectorAll(sel).forEach(r=>{r.style.display=(r.textContent.toLowerCase().includes(q)&&(!c||r.dataset.cat===c))?'':'none'})}
function render(){const h=location.hash.slice(1)||'home';const [v,...a]=h.split('/');const f=VIEWS[v]||VIEWS.home;let html;try{html=f(a.join('/'))}catch(e){html='<p>Not found.</p>';console.error(e)}$('#main').innerHTML=html;$('#back').style.visibility=h==='home'?'hidden':'visible';document.body.dataset.view=v||'home';if(window.ADS&&ADS.fill)ADS.fill()}
window.addEventListener('hashchange',()=>{render();scrollTo(0,0)});
document.addEventListener('DOMContentLoaded',()=>{render()});
if('serviceWorker' in navigator&&/^https?:/.test(location.protocol)&&!window.SINGLE_FILE)navigator.serviceWorker.register('sw.js').catch(e=>console.warn('SW',e));
