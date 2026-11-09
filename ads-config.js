// ===== Google AdSense configuration — the ONLY file to edit to turn ads on =====
// 1. Paste your AdSense publisher client ID, e.g. "ca-pub-1234567890123456".
//    Leave it "" to switch ads off completely (no script is loaded, no space is reserved).
// 2. In AdSense → Ads → By ad unit → Display ads, create responsive units and paste their
//    numeric "data-ad-slot" IDs below. A slot left "" is simply not shown.
// 3. Keep "Auto ads" OFF for this site in AdSense so ads never appear inside checklists or patient cases.
// 4. Also update /ads.txt at the domain root: google.com, pub-XXXXXXXXXXXXXXXX, DIRECT, f08c47fec0942fa0
window.ADS_CONFIG={
  ADSENSE_CLIENT:"",          // e.g. "ca-pub-1234567890123456"
  SLOTS:{
    home:"",                  // banner at the bottom of the home screen
    calc:"",                  // below a calculator result (calculator pages)
    disease:""                // on disease pages, after the tool list
  },
  TEST_MODE:false             // true = adds data-adtest="on" (for local testing only)
};
