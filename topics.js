// ===== Home topic hubs & original reference tables (written from standard literature; citations per item) =====
window.TOPICS=[
{id:'crrt',icon:'🩸',t:'CRRT',sub:'Continuous renal replacement therapy',
 sum:`<p>CRRT provides slow, continuous solute and fluid removal and is preferred in haemodynamically unstable patients or those with raised intracranial pressure. Clearance is by <b>diffusion</b> (dialysate, CVVHD), <b>convection</b> (replacement fluid, CVVH) or both (CVVHDF).</p>
<ul><li><b>Indications:</b> refractory hyperkalaemia, metabolic acidosis, fluid overload, uraemic complications, dialysable toxins.</li>
<li><b>Dose:</b> deliver 20–25 mL/kg/h effluent (KDIGO 2012); prescribe slightly higher to cover downtime.</li>
<li><b>Access:</b> KDIGO order of preference — right internal jugular, femoral, left internal jugular; ultrasound guided.</li>
<li><b>Anticoagulation:</b> regional citrate is first line if no contraindication; otherwise heparin or none.</li>
<li><b>Timing:</b> no benefit from routine accelerated start without urgent indications (STARRT-AKI, NEJM 2020; AKIKI 2).</li></ul>`,
 refs:'KDIGO AKI Guideline 2012; STARRT-AKI Investigators NEJM 2020; Gaudry S et al. (AKIKI 2) Lancet 2021',
 calcs:['crrtdose','kdigo','rifle','cg','ckdepi21','fwd','kdef','urr','ktv'],cls:['crrt','aki_bundle','hyperk','aki_c'],tables:['rrt_ind','rrt_mod','citrate']},
{id:'hdf',icon:'🔁',t:'HDF (Hemodiafiltration)',sub:'Diffusion + convection — CVVHDF in ICU',
 sum:`<p>Haemodiafiltration combines diffusive clearance (small solutes such as urea and potassium) with convective clearance (larger “middle molecules”, e.g. β2-microglobulin, cytokines). In the ICU it is delivered continuously as <b>CVVHDF</b>.</p>
<ul><li>Effluent = dialysate + replacement + net ultrafiltration; target dose as for CRRT (20–25 mL/kg/h delivered).</li>
<li><b>Pre-dilution</b> replacement prolongs filter life but reduces efficiency; <b>post-dilution</b> is more efficient but raises filtration fraction — keep FF below ~20–25%.</li>
<li>Adjust antibiotic doses for the total effluent rate.</li></ul>`,
 refs:'KDIGO AKI 2012; Neri M et al. Nomenclature for renal replacement therapy, Crit Care 2016',
 calcs:['crrtdose','kdigo','cg'],cls:['crrt','aki_bundle'],tables:['rrt_mod','citrate']},
{id:'ohdf',icon:'💧',t:'Online HDF',sub:'Online hemodiafiltration (intermittent)',
 sum:`<p><b>Online HDF</b> is intermittent haemodiafiltration in which large volumes of sterile, non-pyrogenic substitution fluid are produced “online” from ultrapure dialysate by the machine.</p>
<ul><li><b>Convection volume</b> (substitution + net UF) is the key dose measure; high-volume post-dilution HDF targets ≥23 L per session (CONVINCE).</li>
<li>CONVINCE (NEJM 2023) showed lower all-cause mortality with high-dose HDF vs high-flux haemodialysis in kidney failure.</li>
<li>Requires ultrapure water/dialysate quality (ISO 23500 standards) and good vascular access (blood flow typically ≥350 mL/min).</li>
<li>In ICU AKI, continuous modalities (CVVHDF) or SLED are used more often; online HDF mainly serves chronic dialysis patients.</li></ul>`,
 refs:'Blankestijn PJ et al. (CONVINCE) NEJM 2023; Maduell F et al. (ESHOL) J Am Soc Nephrol 2013; ISO 23500 (dialysis fluid quality)',
 calcs:['ohdf_conv','urr','ktv','crrtdose'],cls:['crrt'],tables:['rrt_mod']},
{id:'th',icon:'❄️',t:'Therapeutic hypothermia',sub:'Post-arrest temperature control & accidental hypothermia',
 sum:`<p>After cardiac arrest, current guidance focuses on <b>temperature control</b>: actively prevent fever (≤37.5–37.7 °C) for at least 72 h in patients who remain comatose. AHA allows a target of 32–37.5 °C; TTM2 (NEJM 2021) found no benefit of 33 °C over normothermia with fever prevention.</p>
<ul><li>Use a feedback-controlled device and continuous core temperature (oesophageal/bladder).</li>
<li>Treat shivering stepwise (BSAS); avoid hypotension (MAP ≥65), hypoxaemia and hyperoxia (SpO2 92–98%), keep PaCO2 normal.</li>
<li>Multimodal neuroprognostication no earlier than 72 h after ROSC/normothermia.</li></ul>`,
 refs:'Nolan JP et al. ERC–ESICM post-resuscitation guidelines 2021; Perman SM et al. AHA 2023 focused update; Dankiewicz J et al. (TTM2) NEJM 2021',
 calcs:['bsas','hypoth','gcs','four'],cls:['tth','acls'],tables:['postarrest']},
{id:'extub',icon:'🫁',t:'Extubation',sub:'SAT/SBT, readiness & post-extubation support',
 sum:`<p>Screen daily for liberation: pair a spontaneous awakening trial (SAT) with a spontaneous breathing trial (SBT). Conduct the initial SBT with modest inspiratory pressure (5–8 cmH2O) rather than T-piece or CPAP (ATS/ACCP 2017).</p>
<ul><li>High-risk patients: extubate to NIV or high-flow nasal oxygen.</li>
<li>Cuff-leak test in patients at risk of post-extubation stridor; if absent, give systemic steroids ≥4 h before extubation.</li>
<li>Protocolised minimisation of sedation and early mobilisation shorten ventilation time.</li></ul>`,
 refs:'Schmidt GA et al. ATS/ACCP 2017; Girard TD et al. Lancet 2008; Rochwerg B et al. ERS/ATS NIV 2017',
 calcs:['wean','satfail','sbtfail','rsbi','rass','cpot','fourat'],cls:['extub','abcdef','nippv','cam'],tables:['ext_risk']},
{id:'intub',icon:'🩺',t:'Intubation',sub:'Airway assessment, RSI drugs, difficult airway',
 sum:`<p>Tracheal intubation in the critically ill carries a high risk of hypoxaemia, hypotension and cardiac arrest. Prepare, pre-oxygenate and plan for failure.</p>
<ul><li>Predict difficulty (MACOCHA), use a checklist and a verbalised Plan A–D (DAS 2018).</li>
<li>Pre-oxygenate with NIV or high-flow oxygen in hypoxaemic patients; have a vasopressor ready.</li>
<li>Video laryngoscopy increases first-attempt success (DEVICE, NEJM 2023); confirm with waveform capnography.</li></ul>`,
 refs:'Higgs A et al. Br J Anaesth 2018; Prekker ME et al. (DEVICE) NEJM 2023; Russotto V et al. (INTUBE) JAMA 2021',
 calcs:['macocha','mallampati','lemon','cormack','moans','rsi','pbw','weights','ett'],cls:['intub'],tables:['rsi_drugs','vent_init']},
{id:'scales',icon:'📊',t:'All scales, criteria & syndromes',sub:'Every score, calculator and criteria set'},
{id:'charts',icon:'🗂️',t:'Charts',sub:'Quick reference tables'},
{id:'scd',icon:'🦵',t:'SCD',sub:'Sequential compression devices / VTE prophylaxis',
 sum:`<p><b>Sequential compression devices</b> (intermittent pneumatic compression) provide mechanical VTE prophylaxis. Pharmacological prophylaxis (LMWH or UFH) is preferred in most critically ill patients; IPC is used when anticoagulants are contraindicated (bleeding risk) and switched to drugs once safe.</p>
<ul><li>Adding IPC to pharmacological prophylaxis did not reduce proximal DVT (PREVENT trial, NEJM 2019).</li>
<li>After stroke, IPC reduced DVT; graduated compression stockings alone are not recommended (CLOTS 3).</li>
<li>Check fit and skin each shift; aim for near-continuous use.</li></ul>
<p class="muted">Looking for sickle cell disease? Search “sickle” in the disease list.</p>`,
 refs:'Arabi YM et al. (PREVENT) NEJM 2019; CLOTS 3 Lancet 2013; Schünemann HJ et al. ASH 2018',
 calcs:['padua','caprini','improve_vte','improve_bleed','wells_dvt','wells_pe','geneva_r','4ts'],cls:['vte_scd'],tables:['anticoag_rev']},
{id:'abx',icon:'💊',t:'Antibiotic criteria',sub:'Sepsis, stewardship, MDR risk & duration',
 sum:`<p>Give antimicrobials within 1 h for probable sepsis or septic shock; for possible sepsis without shock, rapidly assess and give within 3 h if concern persists (SSC 2021). Take cultures first if it does not delay treatment.</p>
<ul><li>Base empiric choice on source, local antibiogram and MDR risk factors.</li>
<li>Optimise PK/PD: loading doses, extended/continuous β-lactam infusion, therapeutic drug monitoring.</li>
<li>Review at 48–72 h: de-escalate, switch to oral, stop if not infection; prefer shorter courses where evidence supports.</li></ul>`,
 refs:'Evans L et al. SSC 2021; Kalil AC et al. IDSA/ATS HAP/VAP 2016; CDC Core Elements 2019',
 calcs:['qsofa','sofa','sirs','cpis','curb65','psi_n','mascc','pitt','vanco','amino','cg'],cls:['abx_timeout','sep1','sepsis3','neutropenic','vap'],tables:['abx_dur','mdr_risk']}
];
const _RT=(id,t,cat,ref,head,rows,note)=>({id,t,cat,ref,head,rows,note});
window.REFTABLES=[
_RT('vaso','Vasopressors & inotropes — usual adult dose ranges','Hemodynamics','Evans L et al. SSC 2021; Overgaard CB, Džavík V. Circulation 2008; Khanna A et al. (ATHOS-3) NEJM 2017; product labeling',
 ['Drug','Usual range','Notes'],[
 ['Norepinephrine','0.01–0.5 µg/kg/min (higher in refractory shock)','First-line in septic shock; peripheral short-term use acceptable'],
 ['Vasopressin','0.03 U/min (up to 0.04)','Add when norepinephrine ~0.25–0.5 µg/kg/min'],
 ['Epinephrine','0.01–0.5 µg/kg/min','Second agent; raises lactate (β2)'],
 ['Phenylephrine','0.5–5 µg/kg/min','Pure α1; reflex bradycardia'],
 ['Dopamine','2–20 µg/kg/min','More arrhythmias than norepinephrine (SOAP II)'],
 ['Dobutamine','2–20 µg/kg/min','Inotrope for low output with adequate MAP'],
 ['Milrinone','0.125–0.75 µg/kg/min','Inodilator; reduce in renal impairment'],
 ['Angiotensin II','Start 20 ng/kg/min; max 80 (first 3 h), then ≤40','Refractory vasodilatory shock']],'Titrate to MAP ≥65 mmHg (individualise). Doses vary between references — check local protocol.'),
_RT('vent_init','Initial ventilator settings (adult)','Respiratory','ARDS Network NEJM 2000; Fan E et al. ATS/ESICM/SCCM 2017; GOLD 2025',
 ['Setting','Typical start','Adjust for'],[
 ['Mode','Volume-control assist-control','Pressure modes acceptable if VT monitored'],
 ['Tidal volume','6–8 mL/kg PBW','ARDS: 6 mL/kg (4–8), Pplat ≤30'],
 ['Respiratory rate','14–20 /min','Metabolic acidosis: higher; obstructive disease: lower'],
 ['PEEP','5 cmH2O','ARDS: per PEEP/FiO2 table'],
 ['FiO2','1.0 then titrate','SpO2 92–96% (ARDS 88–95%, hypercapnic COPD 88–92%)'],
 ['I:E / flow','1:2, ~60 L/min','Asthma/COPD: 1:3–1:5, high flow; watch auto-PEEP'],
 ['Safety limits','Pplat ≤30, ΔP ≤15 cmH2O','Check ABG 20–30 min after changes']]),
_RT('peep','ARDSNet PEEP/FiO2 table (lower PEEP)','Respiratory','ARDS Network. NEJM 2000 (ARMA protocol)',
 ['FiO2','0.3','0.4','0.5','0.6','0.7','0.8','0.9','1.0'],[['PEEP (cmH2O)','5','5–8','8–10','10','10–14','14','14–18','18–24']],'Higher-PEEP table (ALVEOLI) may be used for moderate–severe ARDS.'),
_RT('lytes','Electrolyte replacement — typical adult ICU protocol','Electrolytes','Kraft MD et al. Am J Health Syst Pharm 2005; UK Renal Association/UKKA hyperkalaemia 2020; standard ICU practice',
 ['Electrolyte','Level','Typical replacement'],[
 ['Potassium','3.0–3.4 mmol/L','20–40 mmol (oral or IV ≤10–20 mmol/h peripheral)'],
 ['Potassium','<3.0 mmol/L','40–60 mmol IV via central line ≤20 mmol/h with ECG; recheck'],
 ['Magnesium','1.0–1.5 mg/dL (0.4–0.6 mmol/L)','MgSO4 2–4 g IV over 2–4 h'],
 ['Magnesium','<1.0 mg/dL (<0.4 mmol/L)','MgSO4 4–8 g IV over 4–12 h (2 g over 10–15 min if arrhythmia)'],
 ['Phosphate','1.0–2.0 mg/dL (0.32–0.65 mmol/L)','0.16–0.32 mmol/kg IV over 4–6 h'],
 ['Phosphate','<1.0 mg/dL (<0.32 mmol/L)','0.32–0.64 mmol/kg IV over 8–12 h'],
 ['Ionised calcium','<1.0 mmol/L or symptomatic','Calcium gluconate 10% 10–20 mL (1–2 g) IV over 10 min, then infusion if needed'],
 ['Glucose','<70 mg/dL (3.9 mmol/L)','Dextrose 50% 25–50 mL IV (or 10% 150–250 mL); recheck in 15 min']],'Halve doses / avoid K and phosphate in renal impairment unless on RRT. Recheck levels after replacement.'),
_RT('sed','Sedation & analgesia infusions — usual adult ranges','Sedation / Pain','Barr J et al. PAD guideline, Crit Care Med 2013; Devlin JW et al. PADIS 2018',
 ['Drug','Loading','Maintenance'],[
 ['Propofol','(usually none) 5 µg/kg/min start','5–50 µg/kg/min (0.3–3 mg/kg/h); watch triglycerides, PRIS'],
 ['Dexmedetomidine','Avoid bolus in unstable patients','0.2–1.4 µg/kg/h'],
 ['Midazolam','0.01–0.05 mg/kg','0.02–0.1 mg/kg/h; accumulates in renal failure'],
 ['Fentanyl','1–2 µg/kg','0.7–10 µg/kg/h'],
 ['Morphine','2–4 mg','2–30 mg/h; active metabolite accumulates in AKI'],
 ['Hydromorphone','0.2–0.6 mg','0.5–3 mg/h'],
 ['Ketamine (analgesic)','0.1–0.5 mg/kg','0.05–0.4 mg/kg/h']],'Analgesia-first, light sedation (RASS 0 to −2) unless deeper sedation is indicated.'),
_RT('rsi_drugs','RSI drug doses (adult)','Airway','Higgs A et al. Br J Anaesth 2018; product labeling; Tran DTT et al. Cochrane 2015 (rocuronium vs succinylcholine)',
 ['Drug','Dose','Comment'],[
 ['Ketamine','1–2 mg/kg IV','Haemodynamically favourable; reduce in shock (0.5–1 mg/kg)'],
 ['Etomidate','0.2–0.3 mg/kg IV','Haemodynamically stable; transient adrenal suppression'],
 ['Propofol','1–2.5 mg/kg IV','Hypotension — reduce dose in shock/elderly'],
 ['Fentanyl (adjunct)','1–3 µg/kg IV','Blunts pressor response'],
 ['Rocuronium','1.0–1.2 mg/kg IV','Reversible with sugammadex 16 mg/kg'],
 ['Succinylcholine','1–1.5 mg/kg IV','Avoid in hyperkalaemia, burns/crush >24–48 h, neuromuscular disease, MH'],
 ['Push-dose vasopressor','Phenylephrine 50–200 µg / epinephrine 10–20 µg','Have ready before induction']]),
_RT('rrt_ind','Indications for urgent RRT','Renal','KDIGO AKI 2012; Gaudry S et al. Lancet 2021; STARRT-AKI NEJM 2020',
 ['Indication','Typical threshold'],[
 ['Hyperkalaemia','K ≥6.5 mmol/L or ECG changes refractory to medical therapy'],
 ['Metabolic acidosis','pH <7.15–7.20 despite treatment'],
 ['Fluid overload','Pulmonary oedema / hypoxaemia unresponsive to diuretics'],
 ['Uraemia','Encephalopathy, pericarditis, bleeding; BUN >112 mg/dL (40 mmol/L urea) for ≥72 h (AKIKI 2)'],
 ['Intoxication','Dialysable toxin (e.g. methanol, ethylene glycol, lithium, salicylate) — see EXTRIP'],
 ['Oliguria/anuria','Prolonged, with rising creatinine (no fixed threshold)']],'Mnemonic: AEIOU — Acidosis, Electrolytes, Intoxication, Overload, Uraemia.'),
_RT('rrt_mod','RRT modalities compared','Renal','Neri M et al. Crit Care 2016; KDIGO 2012; Tandukar S, Palevsky PM. Chest 2019',
 ['Modality','Clearance','Typical setting / use'],[
 ['IHD','Diffusion','3–5 h sessions; stable patients; rapid K/toxin removal'],
 ['SLED / PIRRT','Diffusion (± convection)','6–12 h/day; Qb 150–200, Qd 100–300 mL/min; alternative to CRRT'],
 ['CVVH','Convection','Replacement pre/post filter; middle-molecule clearance'],
 ['CVVHD','Diffusion','Dialysate counter-current; lower filtration fraction'],
 ['CVVHDF','Diffusion + convection','Most common ICU CRRT; dose 20–25 mL/kg/h delivered'],
 ['SCUF','Ultrafiltration only','Fluid removal (e.g. refractory heart failure)'],
 ['Online HDF','Diffusion + high-volume convection','Intermittent; ultrapure substitution fluid; convection ≥23 L/session']]),
_RT('citrate','Regional citrate anticoagulation — monitoring targets','Renal','KDIGO AKI 2012 (5.3); Schneider AG et al. Crit Care 2017; Khadzhynov D et al. Crit Care 2014',
 ['Parameter','Target / action'],[
 ['Post-filter ionised Ca','0.25–0.35 mmol/L (adjust citrate dose)'],
 ['Systemic ionised Ca','1.0–1.2 mmol/L (adjust calcium infusion)'],
 ['Total Ca / ionised Ca ratio','>2.5 suggests citrate accumulation — reduce citrate/blood flow, review liver function & lactate'],
 ['Metabolic alkalosis','Reduce citrate/blood flow or increase dialysate/replacement'],
 ['Sampling','Every 6 h initially (systemic and post-filter)']]),
_RT('postarrest','Post-cardiac-arrest care targets','Cardiac arrest','Nolan JP et al. ERC–ESICM 2021; Perman SM et al. AHA 2023',
 ['Domain','Target'],[
 ['Oxygenation','SpO2 92–98% (avoid hypoxaemia and hyperoxia)'],
 ['Ventilation','PaCO2 35–45 mmHg; lung-protective VT 6–8 mL/kg PBW'],
 ['Blood pressure','MAP >65 mmHg; avoid hypotension'],
 ['Temperature','Prevent fever (>37.7 °C) for ≥72 h in comatose patients'],
 ['Glucose','140–180 mg/dL (7.8–10 mmol/L); avoid hypoglycaemia'],
 ['Coronary','Emergent angiography for STEMI or suspected cardiac cause with instability'],
 ['Seizures','EEG for clinical seizures; treat; no routine prophylaxis'],
 ['Prognosis','Multimodal, not before 72 h after ROSC']]),
_RT('ext_risk','High risk of extubation failure','Respiratory','Thille AW et al. Am J Respir Crit Care Med 2013/2016; Hernández G et al. JAMA 2016; Schmidt GA et al. ATS/ACCP 2017',
 ['Risk factor','Consider'],[
 ['Age >65 years','Prophylactic NIV or HFNC'],
 ['Underlying chronic heart or lung disease (incl. COPD)','NIV immediately after extubation'],
 ['Hypercapnia at end of SBT (PaCO2 >45 mmHg)','NIV'],
 ['Ventilation >7 days / failed previous SBTs','NIV/HFNC; consider tracheostomy if repeated failure'],
 ['Weak cough, copious secretions','Physiotherapy; caution — high risk'],
 ['BMI >30','NIV'],
 ['Absent cuff leak / stridor risk','Steroids ≥4 h before extubation; airway plan']]),
_RT('anticoag_rev','Anticoagulant reversal (major bleeding)','Hematology','Tomaselli GF et al. ACC Expert Consensus, J Am Coll Cardiol 2020; product labeling',
 ['Agent','Reversal'],[
 ['Warfarin (VKA)','Vitamin K 5–10 mg IV + 4F-PCC (25–50 U/kg by INR) or FFP if PCC unavailable'],
 ['Dabigatran','Idarucizumab 5 g IV; consider HD; PCC if unavailable'],
 ['Apixaban / rivaroxaban / edoxaban','Andexanet alfa or 4F-PCC 50 U/kg'],
 ['Unfractionated heparin','Protamine 1 mg per 100 U given in previous 2–3 h (max 50 mg)'],
 ['Enoxaparin','Protamine 1 mg per 1 mg enoxaparin if <8 h (partial reversal)'],
 ['Antiplatelets','Platelet transfusion selectively; desmopressin in some settings']]),
_RT('abx_dur','Antibiotic durations — common ICU infections (with adequate source control & response)','Infection','Metlay JP et al. IDSA/ATS CAP 2019; Kalil AC et al. HAP/VAP 2016; Yahav D et al. Clin Infect Dis 2019; Sawyer RG et al. (STOP-IT) NEJM 2015; Pappas PG et al. IDSA candidiasis 2016; Liu C et al. IDSA MRSA 2011',
 ['Infection','Usual duration'],[
 ['Community-acquired pneumonia','≥5 days (clinically stable ≥48 h)'],
 ['HAP / VAP','7 days'],
 ['Uncomplicated Gram-negative bacteraemia','7 days'],
 ['Complicated intra-abdominal infection (source controlled)','~4 days'],
 ['Pyelonephritis / complicated UTI','5–7 days (fluoroquinolone) or 7–14 days'],
 ['Cellulitis','5–6 days'],
 ['S. aureus bacteraemia (uncomplicated)','≥14 days IV from first negative culture'],
 ['S. aureus bacteraemia (complicated)','4–6 weeks'],
 ['Candidaemia','14 days after first negative culture and symptom resolution'],
 ['Bacterial meningitis','Meningococcus 7 d; pneumococcus 10–14 d; Listeria ≥21 d']],'Individualise for immunosuppression, undrained foci, endocarditis or osteomyelitis.'),
_RT('mdr_risk','Risk factors for MDR pathogens (HAP/VAP)','Infection','Kalil AC et al. IDSA/ATS HAP/VAP guideline, Clin Infect Dis 2016',
 ['Risk factor','Applies to'],[
 ['IV antibiotics within previous 90 days','MDR in HAP and VAP'],
 ['Septic shock at time of VAP','MDR VAP'],
 ['ARDS preceding VAP','MDR VAP'],
 ['≥5 days hospitalisation before VAP','MDR VAP'],
 ['Acute RRT before VAP onset','MDR VAP'],
 ['Unit MRSA prevalence >10–20% or unknown','Add MRSA cover'],
 ['Unit Gram-negative resistance >10% to a monotherapy agent','Double Gram-negative cover']]),
_RT('norms','Normal haemodynamic & oxygenation values (adult)','Hemodynamics','Standard physiology references (e.g. Pinsky MR, Vincent JL. Intensive Care Med 2005)',
 ['Parameter','Normal'],[
 ['Cardiac index','2.5–4.0 L/min/m²'],['SVR','800–1200 dyn·s/cm⁵'],['PVR','<250 dyn·s/cm⁵ (<3 Wood units)'],['CVP','2–8 mmHg'],['PAWP','6–12 mmHg'],['Mean PAP','<20 mmHg'],['ScvO2 / SvO2','≥70% / ≥65%'],['Lactate','<2 mmol/L'],['DO2I','500–600 mL/min/m²'],['Pv–aCO2 gap','≤6 mmHg']])
];
