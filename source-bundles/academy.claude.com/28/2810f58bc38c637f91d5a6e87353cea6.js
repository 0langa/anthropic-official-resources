import{r as e}from"../../../../../../rolldown-runtime-kx061hj1.js";import{Gp as t,Jp as n}from"../../../../../../content-de-meta-e63dco2m.js";import"../../../../../../loader-badrgb4q.js";import{d as r,f as i,i as a,n as o,p as s,u as c}from"../../../../../../WidgetCopy-ygvf5zib.js";import{It as l}from"../../../../../../index-is564huz.js";import{t as u}from"../../../../../../escapeHtml-omytz2o5.js";var d=e(n(),1),f="/assets/v1/apple-book-b017t6xj.png",p="/assets/v1/chat-question-fdyqoa2l.png",m="/assets/v1/checklist-emi8umvn.png",h="/assets/v1/compass-fo5is3he.png",g="/assets/v1/diligence-shield-g9wv5si8.png",_="/assets/v1/flowers-n8or8ecw.png",v="/assets/v1/hands-description-ebo73skd.png",y="/assets/v1/hands-discernment-n60pief6.png",b="/assets/v1/hands-nodescurve-fkcr1519.png",x="/assets/v1/keypad-lock-nldbezh4.png",S="/assets/v1/lightbulb-i8rjix70.png",C="/assets/v1/lightning-ef5gdxem.png",w="/assets/v1/shapes-bkuhe0qf.png",T=t(),E=`@import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;1,400&family=Poppins:ital,wght@0,400;0,500;0,600;0,700;1,600;1,700&display=swap');
.cw-deck { --olive:#788C5D; --olive-deep:#5E7049; --olive-soft:#B7C29E; --forest:#3D4A33; --clay:#A86E4F; --clay-deep:#8C5639; --ink:#141413; --ink-2:#3D3D3A; --ink-3:#73726C; --ink-4:#7A7870; --paper:#FAF9F6; --oat:#E8E6DD; --border:rgba(20,20,19,0.10); --red:#9B3D2E; --card-sh:0 1px 4px rgba(20,20,19,0.07); --ac:var(--olive); --f-head:'Poppins',var(--font-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif); --f-body:'Lora',var(--font-claude-response,'anthropic-serif',Georgia,serif); font-family:var(--f-body); background:var(--paper); color:var(--ink); -webkit-font-smoothing:antialiased; box-sizing:border-box; width:100%; padding:14px 20px 12px; margin:20px 0 22px; border-radius:12px; }
.cw-deck * { box-sizing:border-box; margin:0; padding:0; }
.cw-deck strong, .cw-deck b { font-size:inherit !important; font-weight:700 !important; }
.cw-deck em, .cw-deck i { font-size:inherit !important; font-style:italic !important; font-weight:inherit !important; }

/* top bar */
.cw-deck .cw-bar { display:flex; flex-wrap:wrap; align-items:center; gap:10px; margin-bottom:8px; }
.cw-deck .cw-bar .sec { font-family:var(--f-head) !important; font-size:10.5px !important; font-weight:700 !important; letter-spacing:0.11em; text-transform:uppercase; color:var(--olive-deep) !important; }
.cw-deck .cw-bar .right { margin-left:auto; display:flex; align-items:center; gap:10px; }
.cw-deck select.cw-jump { font-family:var(--f-head) !important; font-size:12px !important; color:var(--ink-2) !important; background:#fff; border:1px solid var(--border); border-radius:8px; padding:5px 8px; max-width:190px; }
.cw-deck .cw-count { font-family:var(--f-head) !important; font-size:12px !important; font-weight:600 !important; color:var(--ink-3) !important; white-space:nowrap; display:flex; align-items:center; gap:5px; }
.cw-deck .cw-numin { width:38px; font-family:var(--f-head) !important; font-size:12px !important; font-weight:600 !important; color:var(--ink-2) !important; text-align:center; border:1px solid var(--border); border-radius:6px; padding:3px 4px; background:#fff; }
.cw-deck .cw-numin:focus { outline:none; border-color:var(--olive); }

/* stage: every slide is the same fixed size */
.cw-deck .cw-stage { position:relative; height:520px; border-radius:14px; overflow:hidden; border:1px solid var(--border); }
.cw-deck .cw-slide { position:absolute; inset:0; display:none; flex-direction:column; padding:20px 34px; overflow:auto; }
.cw-deck .cw-slide.is-active { display:flex; }
.cw-deck .head { flex:0 0 auto; margin-bottom:14px; }
.cw-deck .grow { flex:1 1 auto; display:flex; flex-direction:column; justify-content:center; gap:13px; min-height:0; }
.cw-deck .hero .grow { justify-content:center; gap:9px; }

/* type */
.cw-deck .eyebrow { display:flex; align-items:center; gap:8px; font-family:var(--f-head) !important; font-size:12px !important; font-weight:700 !important; letter-spacing:0.12em; text-transform:uppercase; color:var(--olive-deep) !important; margin-bottom:13px !important; }
.cw-deck .stitle { font-family:var(--f-head) !important; font-weight:700 !important; font-size:34px !important; line-height:1.16 !important; letter-spacing:-0.015em; color:var(--ink) !important; }
.cw-deck .head .stitle { margin-bottom:2px !important; }
.cw-deck .stitle.big { font-size:46px !important; line-height:1.12 !important; }
.cw-deck .stitle.it { font-style:italic !important; }
.cw-deck .lead { font-family:var(--f-body) !important; font-size:21px !important; line-height:1.45 !important; color:var(--ink-2) !important; }
.cw-deck .body p { font-family:var(--f-body) !important; font-size:18px !important; line-height:1.55 !important; color:var(--ink-2) !important; margin-bottom:13px !important; }
.cw-deck .body p:last-child { margin-bottom:0 !important; }
.cw-deck .kicker { font-family:var(--f-head) !important; font-weight:500 !important; font-size:22px !important; line-height:1.3 !important; color:var(--ink) !important; }
.cw-deck .quote { font-family:var(--f-body) !important; font-size:30px !important; line-height:1.3 !important; color:var(--ink) !important; letter-spacing:-0.01em; }
.cw-deck .hero-sub { font-family:var(--f-body) !important; font-size:18px !important; color:var(--ink-3) !important; line-height:1.5 !important; max-width:56ch; }

.cw-deck ul.l { list-style:none !important; display:flex; flex-direction:column; gap:13px; }
.cw-deck ul.l li { position:relative; padding-left:22px; font-family:var(--f-body) !important; font-size:18px !important; line-height:1.5 !important; color:var(--ink-2) !important; }
.cw-deck ul.l li:before { content:""; position:absolute; left:2px; top:9px; width:8px; height:8px; border-radius:50%; background:var(--ac); }
.cw-deck .hl { color:var(--ac) !important; font-weight:700 !important; }

/* icons + number badges */
.cw-deck .ic { width:22px; height:22px; flex:0 0 auto; display:block; }
.cw-deck .eyebrow .ic { width:16px; height:16px; }
.cw-deck .nb { width:40px; height:40px; border-radius:50%; background:var(--ac); color:var(--paper) !important; display:flex; align-items:center; justify-content:center; font-family:var(--f-head) !important; font-weight:600 !important; font-size:18px !important; flex:0 0 auto; }
.cw-deck .iconwrap { width:42px; height:42px; border-radius:11px; background:var(--ac); color:var(--paper); display:flex; align-items:center; justify-content:center; flex:0 0 auto; }

/* numbered rows (agenda, diligence) */
.cw-deck .rows { display:flex; flex-direction:column; gap:11px; }
.cw-deck .nrow { display:flex; align-items:center; gap:14px; background:#fff; box-shadow:var(--card-sh); border-radius:11px; padding:12px 16px; }
.cw-deck .nrow .nt { font-family:var(--f-body) !important; font-size:16.5px !important; line-height:1.45 !important; color:var(--ink-2) !important; }
.cw-deck .nrow .nt b { color:var(--ink) !important; }

/* stats */
.cw-deck .stats { display:grid; grid-template-columns:1fr 1fr; gap:13px; }
.cw-deck .stat { background:#fff; box-shadow:var(--card-sh); border-radius:12px; padding:15px 17px; display:flex; align-items:center; gap:14px; }
.cw-deck .stat .n { font-family:var(--f-head) !important; font-weight:700 !important; font-size:36px !important; line-height:1 !important; color:var(--forest) !important; flex:0 0 auto; }
.cw-deck .stat .t { font-family:var(--f-body) !important; font-size:14px !important; line-height:1.4 !important; color:var(--ink-2) !important; }

/* card grids */
.cw-deck .grid2 { display:grid; grid-template-columns:1fr 1fr; gap:13px; }
.cw-deck .grid3 { display:grid; grid-template-columns:repeat(3,1fr); gap:12px; }
.cw-deck .card { background:#fff; box-shadow:var(--card-sh); border-radius:12px; padding:16px 18px; display:flex; flex-direction:column; gap:6px; }
.cw-deck .card .ch.sans { font-family:var(--f-head) !important; font-weight:700 !important; font-size:20px !important; line-height:1.15 !important; }
.cw-deck .cardicon { color:var(--ink); margin-bottom:8px; }
.cw-deck .cardicon svg { width:42px; height:42px; display:block; }
.cw-deck .card .chrow { display:flex; align-items:center; gap:9px; }
.cw-deck .card .ch { font-family:var(--f-body) !important; font-weight:600 !important; font-size:17px !important; color:var(--ink) !important; line-height:1.2 !important; }
.cw-deck .card .cp { font-family:var(--f-body) !important; font-size:14px !important; line-height:1.5 !important; color:var(--ink-2) !important; }
.cw-deck .card .cnum { font-family:var(--f-head) !important; font-weight:700 !important; font-size:24px !important; color:var(--ac) !important; line-height:1 !important; }
.cw-deck .card .ico-accent { color:var(--ac); }

/* prompt example cards */
.cw-deck .pcards { display:grid; grid-template-columns:1fr 1fr; gap:12px; }
.cw-deck .pcard { background:#fff; box-shadow:var(--card-sh); border-top:3px solid var(--ac); border-radius:10px; padding:13px 15px; }
.cw-deck .pcard .pb { font-family:var(--f-head) !important; font-size:11px !important; font-weight:700 !important; letter-spacing:0.06em; text-transform:uppercase; color:var(--ac) !important; margin-bottom:6px !important; }
.cw-deck .pcard .pt { font-family:var(--f-body) !important; font-size:13px !important; line-height:1.5 !important; color:var(--ink-2) !important; font-style:italic; }

/* myth-reality rows */
.cw-deck .mr { display:flex; flex-direction:column; gap:10px; }
.cw-deck .mrow { display:grid; grid-template-columns:0.8fr 1.55fr; box-shadow:var(--card-sh); border-radius:10px; overflow:hidden; }
.cw-deck .mrow .m { background:#fff; padding:12px 15px; font-family:var(--f-body) !important; font-size:13px !important; line-height:1.4 !important; color:var(--ink) !important; font-style:italic; display:flex; flex-direction:column; justify-content:center; }
.cw-deck .mrow .r { background:var(--oat); padding:12px 15px; font-family:var(--f-body) !important; font-size:13px !important; line-height:1.4 !important; color:var(--ink-2) !important; }
.cw-deck .mrow .tagm { display:block; font-family:var(--f-head) !important; font-style:normal; font-size:9.5px !important; font-weight:700 !important; letter-spacing:0.08em; text-transform:uppercase; color:var(--clay) !important; margin-bottom:2px !important; }
.cw-deck .mrow .tagr { display:block; font-family:var(--f-head) !important; font-size:9.5px !important; font-weight:700 !important; letter-spacing:0.08em; text-transform:uppercase; color:var(--olive-deep) !important; margin-bottom:2px !important; }

/* 4D cards + matrix quads */
.cw-deck .fourd { display:grid; grid-template-columns:1fr 1fr; gap:12px; }
.cw-deck .dcard { border-radius:12px; padding:15px 17px; color:var(--paper); display:flex; flex-direction:column; gap:5px; }
.cw-deck .dcard .dnum { font-family:var(--f-head) !important; font-size:11px !important; font-weight:700 !important; letter-spacing:0.1em; color:rgba(255,255,255,0.7) !important; }
.cw-deck .dcard .dh { font-family:var(--f-body) !important; font-weight:600 !important; font-size:19px !important; color:var(--paper) !important; }
.cw-deck .dcard .dq { font-family:var(--f-body) !important; font-size:13.5px !important; line-height:1.4 !important; color:rgba(255,255,255,0.9) !important; }
.cw-deck .dcard.d1 { background:var(--olive); } .cw-deck .dcard.d2 { background:var(--olive-deep); }
.cw-deck .dcard.d3 { background:var(--forest); } .cw-deck .dcard.d4 { background:#2A2E24; }
.cw-deck .quad { display:grid; grid-template-columns:1fr 1fr; gap:11px; }
.cw-deck .q { border-radius:12px; padding:14px 16px; color:var(--paper); display:flex; flex-direction:column; gap:4px; }
.cw-deck .q .qh { font-family:var(--f-body) !important; font-weight:600 !important; font-size:16.5px !important; color:var(--paper) !important; line-height:1.15 !important; }
.cw-deck .q .qd { font-family:var(--f-body) !important; font-size:12.5px !important; line-height:1.4 !important; color:rgba(255,255,255,0.9) !important; }
.cw-deck .q.q1 { background:var(--olive); } .cw-deck .q.q2 { background:var(--clay); }
.cw-deck .q.q3 { background:var(--olive-soft); } .cw-deck .q.q3 .qh,.cw-deck .q.q3 .qd { color:var(--ink) !important; }
.cw-deck .q.q4 { background:var(--forest); }

/* loop diagram */
.cw-deck .loopwrap { display:flex; flex-direction:column; align-items:center; gap:14px; }
.cw-deck .loopfig { width:100%; max-width:600px; height:auto; }
.cw-deck .loopfig text { font-family:var(--f-head); }
.cw-deck .loopfig .lbl { fill:#fff; font-weight:600; }
.cw-deck .loopfig .lbl-dim { fill:var(--ink-3); font-weight:600; }
.cw-deck .loopcap { font-family:var(--f-body) !important; font-size:15px !important; line-height:1.5 !important; color:var(--ink-3) !important; text-align:center; max-width:60ch; }

/* CHECK rows */
.cw-deck .checks { display:flex; flex-direction:column; gap:9px; }
.cw-deck .crow { display:flex; align-items:center; gap:13px; background:#fff; box-shadow:var(--card-sh); border-radius:11px; padding:10px 15px; }
.cw-deck .crow .cl { width:32px; height:32px; border-radius:8px; background:var(--olive); color:var(--paper) !important; display:flex; align-items:center; justify-content:center; font-family:var(--f-head) !important; font-weight:700 !important; font-size:17px !important; flex:0 0 auto; }
.cw-deck .crow .ct { font-family:var(--f-body) !important; font-size:14.5px !important; line-height:1.45 !important; color:var(--ink-2) !important; }
.cw-deck .crow .ct b { color:var(--ink) !important; }

/* exercise card */
.cw-deck .excards { display:flex; flex-direction:column; gap:12px; }
.cw-deck .ex { background:#fff; box-shadow:var(--card-sh); border-left:4px solid var(--ac); border-radius:0 11px 11px 0; padding:14px 17px; }
.cw-deck .ex .en { display:flex; align-items:center; gap:10px; font-family:var(--f-body) !important; font-weight:600 !important; font-size:17px !important; color:var(--ink) !important; margin-bottom:6px !important; line-height:1.2 !important; }
.cw-deck .ex .enum { width:27px; height:27px; border-radius:50%; background:var(--ac); color:var(--paper) !important; display:flex; align-items:center; justify-content:center; font-size:13px !important; flex:0 0 auto; font-family:var(--f-head) !important; font-weight:700 !important; }
.cw-deck .ex .ed { font-family:var(--f-body) !important; font-size:14px !important; line-height:1.5 !important; color:var(--ink-2) !important; margin-bottom:7px !important; }
.cw-deck .ex .edisc { font-family:var(--f-body) !important; font-size:13px !important; line-height:1.45 !important; color:var(--olive-deep) !important; font-style:italic; }

/* delegation discussion (slide 35) */
.cw-deck .bigq { font-family:var(--f-body) !important; font-weight:500 !important; font-size:30px !important; line-height:1.25 !important; letter-spacing:-0.01em; color:var(--ink) !important; text-align:center; }
.cw-deck .qcap { font-family:var(--f-body) !important; font-size:16px !important; line-height:1.5 !important; color:var(--ink-3) !important; text-align:center; max-width:62ch; align-self:center; }
.cw-deck .starters { display:grid; grid-template-columns:1fr 1fr 1fr; gap:9px; }
.cw-deck .starter { display:flex; align-items:center; gap:9px; background:#fff; box-shadow:var(--card-sh); border-radius:10px; padding:11px 13px; font-family:var(--f-body) !important; font-size:14px !important; line-height:1.35 !important; color:var(--ink-2) !important; }
.cw-deck .starter:before { content:""; width:8px; height:8px; border-radius:50%; background:var(--ac); flex:0 0 auto; }
.cw-deck .qnote { font-family:var(--f-head) !important; font-size:12.5px !important; color:var(--ink-4) !important; text-align:center; }

/* 4D framework flow + boxes (slide 15) */
.cw-deck .fwflow { width:100%; max-width:580px; align-self:center; height:auto; }
.cw-deck .fwlegend { display:flex; justify-content:center; flex-wrap:wrap; gap:24px; }
.cw-deck .fwlegend .lg { display:flex; align-items:center; gap:8px; font-family:var(--f-body) !important; font-size:12.5px !important; color:var(--ink-2) !important; }
.cw-deck .fwlegend .lg .sw { width:13px; height:13px; border-radius:4px; flex:0 0 auto; }
.cw-deck .dexp { display:grid; grid-template-columns:repeat(4,1fr); gap:12px; }
.cw-deck .dexp .db { background:var(--oat); border-radius:12px; padding:14px 13px; text-align:center; }
.cw-deck .dexp .db .dbh { font-family:var(--f-head) !important; font-weight:700 !important; font-size:15px !important; color:var(--ink) !important; margin-bottom:7px !important; }
.cw-deck .dexp .db .dbq { font-family:var(--f-body) !important; font-size:12.5px !important; line-height:1.4 !important; color:var(--ink-2) !important; }

/* prompts (slide 17) */
.cw-deck .pgrid { display:grid; grid-template-columns:repeat(4,1fr); gap:14px; }
.cw-deck .pcol { display:flex; flex-direction:column; }
.cw-deck .picon { background:var(--oat); border-radius:12px; height:82px; display:flex; align-items:center; justify-content:center; color:var(--ink); margin-bottom:11px; }
.cw-deck .picon svg { width:44px; height:44px; }
.cw-deck .pgrade { font-family:var(--f-head) !important; font-weight:700 !important; font-size:14px !important; color:var(--ink) !important; text-align:center; margin-bottom:9px !important; }
.cw-deck ul.pbul { list-style:none !important; display:flex; flex-direction:column; gap:6px; }
.cw-deck ul.pbul li { position:relative; padding-left:13px; font-family:var(--f-body) !important; font-size:11px !important; line-height:1.3 !important; color:var(--ink-2) !important; }
.cw-deck ul.pbul li:before { content:""; position:absolute; left:0; top:6px; width:5px; height:5px; border-radius:50%; background:var(--ink-3); }

/* great description (slide 18) */
.cw-deck .gd { display:grid; grid-template-columns:1fr 1.05fr; gap:32px; flex:1; width:100%; align-items:stretch; }
.cw-deck .gd-left { display:flex; flex-direction:column; justify-content:center; gap:14px; }
.cw-deck .gd-title { font-family:var(--f-head) !important; font-weight:700 !important; font-size:42px !important; line-height:1.04 !important; letter-spacing:-0.02em; color:var(--ink) !important; }
.cw-deck .gd-sub { font-family:var(--f-head) !important; font-weight:700 !important; font-style:italic; font-size:20px !important; line-height:1.2 !important; color:var(--ink) !important; }
.cw-deck .gd-right { display:flex; flex-direction:column; justify-content:center; gap:15px; }
.cw-deck .gdrow { display:flex; align-items:center; gap:14px; }
.cw-deck .gdrow .gdi { width:40px; flex:0 0 auto; color:var(--ink); display:flex; align-items:center; justify-content:center; }
.cw-deck .gdrow .gdi svg { width:38px; height:38px; }
.cw-deck .gdrow .gdh { font-family:var(--f-head) !important; font-weight:700 !important; font-size:17px !important; color:var(--ink) !important; line-height:1.15 !important; margin-bottom:1px !important; }
.cw-deck .gdrow .gdd { font-family:var(--f-body) !important; font-size:14px !important; line-height:1.35 !important; color:var(--ink-2) !important; }

/* check every time (slide 21) */
.cw-deck .ck2 { display:grid; grid-template-columns:1fr 0.92fr; gap:34px; flex:1; align-items:center; width:100%; }
.cw-deck .ck-left { display:flex; flex-direction:column; gap:14px; }
.cw-deck ul.ck-bullets { list-style:none !important; display:flex; flex-direction:column; gap:7px; }
.cw-deck ul.ck-bullets li { position:relative; padding-left:20px; font-family:var(--f-body) !important; font-size:16px !important; line-height:1.4 !important; color:var(--ink) !important; }
.cw-deck ul.ck-bullets li:before { content:""; position:absolute; left:2px; top:8px; width:6px; height:6px; border-radius:50%; background:var(--ink); }
.cw-deck .ck-note { font-family:var(--f-body) !important; font-size:15px !important; line-height:1.5 !important; color:var(--ink-2) !important; }
.cw-deck .ck-bold { font-family:var(--f-head) !important; font-weight:700 !important; font-size:20px !important; line-height:1.25 !important; color:var(--ink) !important; }
.cw-deck .claybox { background:#C18064; border-radius:22px; aspect-ratio:1/1; max-height:430px; width:100%; display:flex; align-items:center; justify-content:center; color:#fff; margin-left:auto; }
.cw-deck .claybox svg { width:52%; height:52%; }

/* already skilled (slide 22) */
.cw-deck .oatcards { display:grid; grid-template-columns:1fr 1fr; gap:18px; align-items:stretch; }
.cw-deck .oatcard { background:var(--oat); border-radius:16px; padding:20px; display:flex; flex-direction:column; align-items:center; text-align:center; gap:10px; justify-content:center; }
.cw-deck .oatcard .oi { color:var(--ink); }
.cw-deck .oatcard .oi svg { width:46px; height:46px; }
.cw-deck .oatcard .oh { font-family:var(--f-head) !important; font-weight:700 !important; font-size:18px !important; color:var(--ink) !important; }
.cw-deck .oatcard .ob { font-family:var(--f-body) !important; font-size:14.5px !important; line-height:1.5 !important; color:var(--ink-2) !important; }

/* sky exercise slides (24-29) */
.cw-deck .s-sky { background:#759AC8 !important; }
.cw-deck .s-sky .eyebrow, .cw-deck .darkbg .eyebrow { color:rgba(255,255,255,0.82) !important; }
.cw-deck .s-sky .stitle { color:#FFFFFF !important; }
.cw-deck .s-sky .gradeband { font-family:var(--f-head) !important; font-weight:700 !important; font-size:19px !important; color:#FFFFFF !important; margin-bottom:4px !important; }
.cw-deck .s-sky .hero-sub { color:rgba(255,255,255,0.92) !important; }
.cw-deck .s-sky .nrow .nt { color:var(--ink-2) !important; }
.cw-deck .xcards { display:grid; grid-template-columns:1fr 1fr; gap:16px; align-items:stretch; }
.cw-deck .xcard { background:#fff; border-radius:16px; padding:18px 20px; display:flex; flex-direction:column; }
.cw-deck .xcard .xlabel { font-family:var(--f-body) !important; font-size:13px !important; color:var(--ink-3) !important; margin-bottom:12px !important; }
.cw-deck .xcard .xname { font-family:var(--f-head) !important; font-weight:500 !important; font-size:18px !important; color:var(--ink) !important; margin-bottom:9px !important; }
.cw-deck .xcard .xbody { font-family:var(--f-body) !important; font-size:14px !important; line-height:1.5 !important; color:var(--ink-2) !important; }
.cw-deck .xcard .xdiscern { margin-top:auto; padding-top:16px; font-family:var(--f-body) !important; font-weight:700 !important; font-size:13.5px !important; line-height:1.45 !important; color:#3F6699 !important; }
.cw-deck .xcard .xdiscern em { font-style:italic; }
.cw-deck .qcols { display:grid; grid-template-columns:1fr 1fr; gap:46px; }
.cw-deck .qcol .qn { font-family:var(--f-head) !important; font-weight:700 !important; font-size:46px !important; line-height:1 !important; color:#fff !important; margin-bottom:14px !important; }
.cw-deck .qcol .qq { font-family:var(--f-head) !important; font-weight:400 !important; font-size:23px !important; line-height:1.35 !important; color:#fff !important; }

/* dimmed 4D boxes (slide 34) */
.cw-deck .dexp .db.dim { background:#EFEEE8; }
.cw-deck .dexp .db.dim .dbh, .cw-deck .dexp .db.dim .dbq { color:#9A998F !important; }

/* delegation band header + cards (slide 35) */
.cw-deck .bandhead { background:#788C5D; margin:-34px -40px 0; padding:24px 40px; }
.cw-deck .bandhead .eyebrow { color:rgba(255,255,255,0.82) !important; margin-bottom:8px !important; }
.cw-deck .bandhead .stitle { color:#fff !important; }
.cw-deck .delg-intro { font-family:var(--f-body) !important; font-size:17px !important; line-height:1.45 !important; color:var(--ink-2) !important; }
.cw-deck .delg-q { font-family:var(--f-head) !important; font-weight:700 !important; font-size:18px !important; color:var(--ink) !important; }
.cw-deck .delg-cards { display:grid; grid-template-columns:1fr 1fr; gap:12px; }
.cw-deck .delg-card { background:#fff; box-shadow:var(--card-sh); border-left:4px solid var(--olive); border-radius:0 10px 10px 0; padding:14px 16px; font-family:var(--f-body) !important; font-size:15px !important; color:var(--ink) !important; line-height:1.35 !important; }

/* delegation matrix detailed (slide 36) */
.cw-deck .mx { display:grid; grid-template-columns:1fr 1fr; gap:12px; }
.cw-deck .mxq { border-radius:12px; overflow:hidden; box-shadow:var(--card-sh); background:#fff; }
.cw-deck .mxq .mxh { padding:9px 14px; font-family:var(--f-head) !important; font-weight:700 !important; font-size:13px !important; }
.cw-deck .mxq.top .mxh { background:#788C5D; color:#fff !important; }
.cw-deck .mxq.bot .mxh { background:#E1E5D3; color:#5E7049 !important; }
.cw-deck .mxq .mxb { padding:9px 14px 11px; }
.cw-deck .mxq .mxlabel { font-family:var(--f-head) !important; font-weight:700 !important; font-size:14px !important; color:var(--olive-deep) !important; margin-bottom:6px !important; }
.cw-deck .mxq ul.mxl { list-style:none !important; display:flex; flex-direction:column; gap:3px; }
.cw-deck .mxq ul.mxl li { position:relative; padding-left:14px; font-family:var(--f-body) !important; font-size:13px !important; color:var(--ink-2) !important; line-height:1.35 !important; }
.cw-deck .mxq ul.mxl li:before { content:""; position:absolute; left:2px; top:7px; width:4px; height:4px; border-radius:50%; background:var(--ink-3); }
.cw-deck .mxtask { background:#788C5D; border-radius:12px; padding:13px 16px; text-align:center; font-family:var(--f-head) !important; font-weight:700 !important; font-size:15px !important; color:#fff !important; }
.cw-deck .mxsub { font-family:var(--f-body) !important; font-style:italic; font-size:14px !important; color:var(--ink-3) !important; }
.cw-deck .mxq .mxb.mxdrop { min-height:44px; }
.cw-deck .mxbank { display:flex; align-items:flex-start; gap:10px; }
.cw-deck .mxbanklabel { font-family:var(--f-head) !important; font-weight:700 !important; font-size:12.5px !important; color:var(--olive-deep) !important; white-space:nowrap; padding-top:6px; }
.cw-deck ul.mxchips { display:grid; grid-template-columns:1fr 1fr; gap:4px 20px; list-style:none !important; margin:0; padding:0; }
.cw-deck ul.mxchips li { position:relative; padding-left:15px; font-family:var(--f-body) !important; font-size:13px !important; color:var(--ink) !important; line-height:1.35 !important; }
.cw-deck ul.mxchips li:before { content:""; position:absolute; left:3px; top:7px; width:4px; height:4px; border-radius:50%; background:var(--olive); }

/* one question one practice (slide 37) */
.cw-deck .oneq { display:grid; grid-template-columns:1fr 1fr; gap:18px; flex:1; align-items:stretch; }
.cw-deck .oneqcard { background:#fff; box-shadow:var(--card-sh); border-radius:16px; padding:24px; display:flex; flex-direction:column; gap:10px; justify-content:center; }
.cw-deck .oneqcard .oqi { color:var(--ink); }
.cw-deck .oneqcard .oqi svg { width:44px; height:44px; }
.cw-deck .oneqcard .oqh { font-family:var(--f-head) !important; font-weight:700 !important; font-size:24px !important; color:var(--ink) !important; }
.cw-deck .oneqcard .oqb { font-family:var(--f-body) !important; font-size:16px !important; line-height:1.5 !important; color:var(--ink-2) !important; }

/* big quote (slide 33) */
.cw-deck .qmark { font-family:var(--f-head) !important; font-weight:700 !important; font-style:italic; font-size:84px !important; line-height:0.6 !important; color:#fff !important; margin-bottom:24px !important; }
.cw-deck .qbig { font-family:var(--f-head) !important; font-weight:700 !important; font-size:37px !important; line-height:1.18 !important; letter-spacing:-0.01em; color:#fff !important; margin-bottom:18px !important; }
.cw-deck .qattr { font-family:var(--f-body) !important; font-style:italic; font-size:17px !important; color:rgba(255,255,255,0.6) !important; }

/* numbered cards (slide 41) */
.cw-deck .numcards { display:flex; flex-direction:column; gap:13px; }
.cw-deck .numcard { display:flex; gap:18px; align-items:flex-start; background:#fff; box-shadow:var(--card-sh); border-radius:14px; padding:16px 22px; }
.cw-deck .numcard .ncn { font-family:var(--f-head) !important; font-weight:700 !important; font-size:30px !important; color:var(--ink) !important; line-height:1 !important; flex:0 0 auto; min-width:44px; }
.cw-deck .numcard .nct { font-family:var(--f-head) !important; font-weight:700 !important; font-size:17px !important; color:var(--ink) !important; margin-bottom:3px !important; }
.cw-deck .numcard .ncd { font-family:var(--f-body) !important; font-size:14.5px !important; line-height:1.45 !important; color:var(--ink-2) !important; }

/* PII quiz (slide 43) */
.cw-deck .piiq-eye { font-family:var(--f-body) !important; text-transform:none !important; letter-spacing:0 !important; font-weight:400 !important; font-size:15px !important; color:rgba(255,255,255,0.82) !important; }
.cw-deck .piiq-t { font-family:var(--f-head) !important; font-weight:700 !important; font-size:46px !important; line-height:1 !important; color:#fff !important; }
.cw-deck .piiq-m { font-family:var(--f-head) !important; font-weight:700 !important; font-size:33px !important; line-height:1.15 !important; color:#fff !important; max-width:28ch; }
.cw-deck .piiq-g { font-family:var(--f-head) !important; font-weight:700 !important; font-size:30px !important; line-height:1.3 !important; color:#fff !important; }

/* goals review (slide 52) */
.cw-deck .markcard { background:#fff; box-shadow:var(--card-sh); border-radius:14px; padding:18px 16px; text-align:center; }
.cw-deck .markcard .mk { font-size:26px !important; color:var(--ink) !important; margin-bottom:8px !important; line-height:1 !important; }
.cw-deck .markcard .mkt { font-family:var(--f-body) !important; font-size:14px !important; line-height:1.4 !important; color:var(--ink-2) !important; }
.cw-deck .markcard .mkt b { font-family:var(--f-head) !important; font-weight:700 !important; color:var(--ink) !important; display:block; margin-bottom:2px; }
.cw-deck .goalslabel { font-family:var(--f-body) !important; font-style:italic; font-size:15px !important; color:var(--ink-3) !important; }
.cw-deck .goalgrid { display:grid; grid-template-columns:1fr 1fr; gap:10px; }
.cw-deck .goalpill { background:#fff; box-shadow:var(--card-sh); border-radius:10px; padding:12px 16px; font-family:var(--f-body) !important; font-size:15px !important; color:var(--ink) !important; }

/* limitations videos (slide 20) */
.cw-deck .vids { display:grid; grid-template-columns:repeat(3,1fr); gap:14px; }
.cw-deck .vid .vembed { position:relative; display:block; width:100%; aspect-ratio:16/9; border-radius:10px; overflow:hidden; background:#000; border:0; padding:0; cursor:pointer; }
.cw-deck .vid .vembed iframe { position:absolute; inset:0; width:100%; height:100%; border:0; }
.cw-deck .vid .vthumb { position:absolute; inset:0; background-size:cover; background-position:center; }
.cw-deck .vid .vplay { position:absolute; inset:0; display:flex; align-items:center; justify-content:center; }
.cw-deck .vid .vplay svg { width:48px; height:34px; filter:drop-shadow(0 1px 3px rgba(0,0,0,0.45)); }
.cw-deck .vid .vcap { font-family:var(--f-body) !important; font-size:13px !important; line-height:1.45 !important; color:var(--ink-2) !important; margin-top:9px; }
.cw-deck .vid .vcap b { color:var(--ink) !important; }

/* literacy vs fluency (slide 11) */
.cw-deck .lvf { flex:1; display:grid; grid-template-columns:1fr 1fr; gap:32px; width:100%; align-items:stretch; }
.cw-deck .lvf-left { display:flex; flex-direction:column; justify-content:center; }
.cw-deck .lvf-stmt { font-family:var(--f-head) !important; font-weight:500 !important; font-style:italic; font-size:40px !important; line-height:1.07 !important; letter-spacing:-0.015em; color:var(--ink) !important; }
.cw-deck .lvf-right { display:flex; flex-direction:column; justify-content:center; gap:22px; }
.cw-deck .ask .asklabel { font-family:var(--f-body) !important; font-size:16px !important; color:var(--ink-3) !important; margin-bottom:4px !important; }
.cw-deck .ask .askq { font-family:var(--f-head) !important; font-weight:500 !important; font-size:24px !important; line-height:1.18 !important; color:var(--ink) !important; }

/* warm up (slide 7) */
.cw-deck .conf2 { display:grid; grid-template-columns:1fr 1fr; gap:22px; align-items:start; }
.cw-deck .confbox { background:var(--oat); border-radius:14px; padding:16px 19px; }
.cw-deck .confh { font-family:var(--f-body) !important; font-weight:600 !important; font-size:18px !important; color:var(--ink) !important; margin-bottom:11px !important; line-height:1.2 !important; }
.cw-deck ul.sqlist { list-style:none !important; display:flex; flex-direction:column; gap:9px; }
.cw-deck ul.sqlist li { position:relative; padding-left:21px; font-family:var(--f-body) !important; font-size:13.5px !important; line-height:1.4 !important; color:var(--ink-2) !important; }
.cw-deck ul.sqlist li:before { content:""; position:absolute; left:1px; top:5px; width:9px; height:9px; border-radius:2px; background:var(--olive); }
.cw-deck .steps { display:flex; flex-direction:column; gap:13px; }
.cw-deck .step { display:flex; gap:12px; align-items:flex-start; }
.cw-deck .step .sn { width:34px; height:34px; border-radius:50%; background:var(--olive); color:#fff !important; font-family:var(--f-head) !important; font-weight:600 !important; font-size:15px !important; display:flex; align-items:center; justify-content:center; flex:0 0 auto; }
.cw-deck .step .sb { font-family:var(--f-body) !important; font-weight:700 !important; font-size:14px !important; color:var(--ink) !important; line-height:1.3 !important; }
.cw-deck .step .stime { font-family:var(--f-body) !important; font-style:italic; font-size:12.5px !important; color:var(--olive-deep) !important; margin-top:2px !important; }
.cw-deck .confrule { height:1px; background:var(--border); margin:13px 0 11px; }
.cw-deck .confgoal { font-family:var(--f-body) !important; font-style:italic; font-size:14px !important; line-height:1.4 !important; color:var(--ink-2) !important; }
.cw-deck .debrief { font-family:var(--f-head) !important; font-weight:700 !important; font-size:21px !important; line-height:1.18 !important; letter-spacing:-0.01em; color:var(--ink) !important; text-align:center; margin-top:6px; }

.cw-deck .pill { display:inline-block; font-family:var(--f-head) !important; font-size:11.5px !important; font-weight:700 !important; letter-spacing:0.04em; color:var(--paper) !important; background:var(--ac); border-radius:999px; padding:6px 14px; margin-bottom:14px; align-self:flex-start; }

/* editable facilitator */
.cw-deck .fac { display:flex; flex-direction:column; gap:12px; }
.cw-deck input.fac-name, .cw-deck textarea.fac-bio { width:100%; color:var(--ink) !important; background:#fff; border:1.5px solid var(--border); border-radius:10px; padding:12px 14px; line-height:1.5 !important; }
.cw-deck input.fac-name { font-family:var(--f-head) !important; font-size:16px !important; font-weight:600 !important; }
.cw-deck textarea.fac-bio { font-family:var(--f-body) !important; font-size:15px !important; height:140px; min-height:140px; resize:vertical; }
.cw-deck input.fac-name:focus, .cw-deck textarea.fac-bio:focus { outline:none; border-color:var(--olive); box-shadow:0 0 0 2px rgba(120,140,93,0.18); }
.cw-deck .fac-note { font-family:var(--f-head) !important; font-size:11.5px !important; color:var(--ink-3) !important; }

/* section backgrounds */
.cw-deck .s-welcome { --ac:var(--olive); background:#FAF9F6; }
.cw-deck .s-opening { --ac:var(--clay); background:#FAF9F6; }
.cw-deck .s-guiding { --ac:var(--clay); background:#FAF9F6; }
.cw-deck .s-why { --ac:var(--olive-deep); background:#FAF9F6; }
.cw-deck .s-framework { --ac:var(--forest); background:#FAF9F6; }
.cw-deck .s-inner { --ac:var(--olive); background:#FAF9F6; }
.cw-deck .s-outer { --ac:var(--forest); background:#FAF9F6; }
.cw-deck .s-close { --ac:var(--clay-deep); background:#FAF9F6; }
.cw-deck .s-title { --ac:var(--olive-soft); }

/* hero / divider slides (light text on color) */
.cw-deck .hero { justify-content:center; }
.cw-deck .hero .eyebrow { color:rgba(255,255,255,0.72) !important; }
.cw-deck .hero .stitle, .cw-deck .hero .kicker, .cw-deck .hero .quote { color:var(--paper) !important; }
.cw-deck .hero .hero-sub, .cw-deck .hero .body p, .cw-deck .hero .lead { color:rgba(255,255,255,0.86) !important; }
.cw-deck .hero .pill { background:rgba(255,255,255,0.18); color:var(--paper) !important; }
.cw-deck .bg-forest { background:linear-gradient(135deg,#3D4A33,#262B20) !important; }
.cw-deck .bg-olive { background:linear-gradient(135deg,#788C5D,#566A41) !important; }
.cw-deck .bg-ink { background:linear-gradient(135deg,#26271F,#14140F) !important; }
.cw-deck .bg-clay { background:linear-gradient(135deg,#A86E4F,#7E4E33) !important; }

/* nav */
.cw-deck .cw-nav { display:flex; align-items:center; gap:12px; margin-top:10px; }
.cw-deck .cw-prog { flex:1; height:5px; background:var(--oat); border-radius:999px; overflow:hidden; }
.cw-deck .cw-prog .fill { height:100%; width:0; background:var(--olive); transition:width .2s ease; }
.cw-deck .cw-pn { font-family:var(--font-ui,sans-serif) !important; font-size:13.5px !important; font-weight:600 !important; color:var(--paper) !important; background:var(--forest); border:none; border-radius:9px; padding:10px 18px; cursor:pointer; line-height:1.1 !important; }
.cw-deck .cw-pn:hover { background:#2f3a27; }
.cw-deck .cw-pn:disabled { background:#C9C8C1; cursor:default; }

.cw-deck .s-title .cw-foot{display:none!important;}
.cw-deck .dsource{font-family:var(--f-body)!important;font-size:11px!important;line-height:1.45!important;color:var(--ink-3)!important;margin-top:12px;}
.cw-deck .dsource a{color:var(--ink-3)!important;text-decoration:underline;}
.cw-deck .ck-left{align-items:flex-start;text-align:left;}
.cw-deck ul.ck-bullets{text-align:left;}
.cw-deck .s-close .grid3{gap:16px;}
.cw-deck .s-close .grid3 .cardicon svg{width:34px;height:34px;}
.cw-deck .s-close .grid3 .card{padding:15px 16px 17px;}
.cw-deck .mxlead{font-family:var(--f-body)!important;font-size:14px!important;line-height:1.5!important;color:var(--ink-2)!important;}
.cw-deck .mxlead .mxmins{font-style:italic;color:var(--ink-3)!important;}
@media (max-width:600px) {
  .cw-deck { padding:18px 14px 16px; }
  .cw-deck .cw-stage { height:auto; min-height:520px; }
  .cw-deck .cw-slide { position:relative; }
  .cw-deck .cw-slide:not(.is-active) { display:none; }
  .cw-deck .stats, .cw-deck .grid2, .cw-deck .grid3, .cw-deck .pcards, .cw-deck .quad, .cw-deck .fourd, .cw-deck .starters, .cw-deck .conf2, .cw-deck .lvf, .cw-deck .gd, .cw-deck .ck2, .cw-deck .oatcards, .cw-deck .xcards, .cw-deck .vids, .cw-deck .qcols, .cw-deck .delg-cards, .cw-deck .mx, .cw-deck .oneq, .cw-deck .goalgrid { grid-template-columns:1fr; }
  .cw-deck .pgrid, .cw-deck .dexp { grid-template-columns:1fr 1fr; }
  .cw-deck .lvf-stmt { font-size:26px !important; } .cw-deck .gd-title { font-size:30px !important; }
  .cw-deck .mrow { grid-template-columns:1fr; }
  .cw-deck .mrow .m { border-right:none; border-bottom:1px solid var(--border); }
  .cw-deck .stitle { font-size:26px !important; } .cw-deck .stitle.big { font-size:32px !important; }
  .cw-deck .quote { font-size:22px !important; } .cw-deck .bigq { font-size:23px !important; } .cw-deck .lead { font-size:18px !important; } .cw-deck .body p, .cw-deck ul.l li { font-size:16px !important; }
}
.cw-deck .cw-pdfwrap{text-align:center;margin-top:18px;}
.cw-deck .cw-pdf{font-family:var(--f-head)!important;font-size:13.5px!important;font-weight:600!important;color:var(--paper)!important;background:var(--forest);border:none;border-radius:9px;padding:11px 22px;cursor:pointer;line-height:1.1!important;}
.cw-deck .cw-pdf:hover{background:#2f3a27;}
.cw-deck .cw-html{background:#fff!important;color:var(--ink-2)!important;border:1.5px solid var(--border)!important;margin-left:8px;}
.cw-deck .cw-html:hover{border-color:var(--olive)!important;background:#fff!important;}
.cw-deck .cw-pdfnote{font-family:var(--f-head)!important;font-size:11.5px!important;color:var(--ink-3)!important;margin-top:8px;}
.cw-deck .cw-foot{position:absolute;left:34px;bottom:5px;font-family:var(--f-head)!important;font-size:10.5px!important;font-weight:700!important;letter-spacing:0.08em;text-transform:uppercase;color:var(--olive-deep)!important;pointer-events:none;}
.cw-deck .cw-slide.hero .cw-foot,.cw-deck .cw-slide.s-sky .cw-foot,.cw-deck .cw-slide.darkbg .cw-foot{color:rgba(255,255,255,0.72)!important;}

.cw-deck .pico{display:block;object-fit:contain;background-position:center;background-repeat:no-repeat;background-size:contain;box-sizing:border-box;}
.cw-deck .cardicon .pico{width:42px;height:42px;margin:0 auto;}
.cw-deck .picon .pico{width:54px;height:54px;margin:0 auto;}
.cw-deck .gdi .pico{width:34px;height:34px;}
.cw-deck .oi .pico{width:48px;height:48px;}
.cw-deck .oqi .pico{width:46px;height:46px;}
.cw-deck .claybox .pico{width:100%;height:100%;padding:16%;}
.cw-deck .markcard .mk .pico{width:40px;height:40px;margin:0 auto;}`,D=`.ttapp, .ttapp *{box-sizing:border-box;}
.ttapp{position:relative;display:flex;flex-direction:column;padding:14px 12px;background:#faf9f5;border-radius:14px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;color:#141413;}
.tttoolbar{flex:0 0 auto;display:flex;flex-wrap:wrap;gap:10px;align-items:center;margin-bottom:5px;}
.ttstage-area{flex:1 1 auto;min-height:0;position:relative;display:flex;flex-direction:column;align-items:center;justify-content:flex-start;gap:6px;overflow:hidden;}
.deckscaler{flex:0 0 auto;overflow:hidden;}
.deckscaler .cw-deck{width:900px!important;margin:0!important;transform-origin:top left;}
.ttbtn{font-size:13px;font-weight:600;color:#3D4A33;background:#fff;border:1.5px solid #3D4A33;border-radius:9px;padding:9px 15px;cursor:pointer;line-height:1;display:inline-flex;align-items:center;gap:6px;}
.ttbtn:hover{background:#3D4A33;color:#fff;} .ttbtn.on{background:#3D4A33;color:#fff;} .ttbtn.solid{background:#3D4A33;color:#fff;}
.ttsp{flex:1 1 auto;}
.ttdl{position:relative;}
.ttdlmenu{position:absolute;right:0;top:calc(100% + 8px);background:#fff;border:1px solid rgba(20,20,19,.15);border-radius:10px;box-shadow:0 8px 24px rgba(20,20,19,.15);padding:7px;display:none;flex-direction:column;gap:2px;min-width:210px;z-index:40;}
.ttdl.open .ttdlmenu{display:flex;}
.ttdlmenu button{font-size:13px;color:#3D4A33;background:none;border:none;text-align:left;padding:9px 12px;border-radius:7px;cursor:pointer;display:block;width:100%;}
.ttdlmenu button:hover{background:#F0EEE6;}
.ttdlmenu .lbl{font-size:10px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#8A897F;padding:8px 12px 3px;}
.ttnotes{flex:0 0 auto;width:100%;max-width:900px;height:132px;overflow:auto;background:#fff;border:1px solid rgba(20,20,19,.12);border-left:5px solid #788C5D;border-radius:12px;padding:11px 16px;}
.ttnotes-h{font-size:10.5px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#5E7049;margin-bottom:7px;}
.ttnotes-b{font-size:12.5px;line-height:1.5;color:#3D3D3A;}
.ttnotes-b a{color:#5E7049;font-weight:600;text-decoration:underline;}
.ttnotes-b .ttnl{position:relative;padding-left:14px;margin-bottom:5px;}
.ttnotes-b .ttnl:last-child{margin-bottom:0;}
.ttnotes-b .ttnl:before{content:"";position:absolute;left:2px;top:9px;width:4px;height:4px;border-radius:50%;background:#9CA984;}
.ttnotes-b .ttlead{font-weight:700;color:#5E7049;}
.cw-deck .cw-pdfwrap{display:none;}`,O=`body{margin:0;background:#e9e7df;padding:20px 14px;}
.cw-deck .cw-pdfwrap{display:none;}
@media print{
  @page{size:760px 548px;margin:0;}
  body{margin:0;padding:0;background:#fff;}
  *{-webkit-print-color-adjust:exact !important;print-color-adjust:exact !important;box-shadow:none !important;}
  .cw-bar{display:none !important;}
  .cw-deck{margin:0 !important;padding:0 !important;background:#fff;width:760px !important;border-radius:0 !important;}
  .cw-stage{position:static !important;height:auto !important;overflow:visible !important;border:none !important;border-radius:0 !important;}
  .cw-slide{position:relative !important;display:flex !important;width:760px !important;height:548px !important;inset:auto !important;page-break-after:always;break-after:page;border-radius:0 !important;overflow:hidden !important;}
  .cw-slide:last-child{page-break-after:auto;break-after:auto;}
  .cw-deck .card,.cw-deck .nrow,.cw-deck .stat,.cw-deck .crow,.cw-deck .numcard,.cw-deck .delg-card,.cw-deck .starter,.cw-deck .pcol,.cw-deck .xcard,.cw-deck .markcard,.cw-deck .goalpill,.cw-deck .oneqcard,.cw-deck .mxq,.cw-deck .mrow,.cw-deck .oatcard{border:1px solid rgba(20,20,19,0.12) !important;}
}`,k=`body{margin:0;background:#e9e7df;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;color:#141413;}
.hwrap{max-width:850px;margin:0 auto;padding:26px 18px;}
.fg-phead{margin-bottom:20px;padding-bottom:14px;border-bottom:2px solid #3D4A33;}
.fg-phead .fgb{font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#788C5D;}
.fg-phead .fgt{font-size:23px;font-weight:700;margin-top:5px;line-height:1.15;}
.fg-phead .fgs{font-size:15px;color:#3D3D3A;margin-top:2px;}
.hrow{display:grid;grid-template-columns:266px 1fr;gap:22px;align-items:start;padding:16px 0;border-bottom:1px solid #e0ded5;}
.hmini{width:266px;height:192px;overflow:hidden;border:1px solid rgba(20,20,19,.15);border-radius:8px;background:#FAF9F6;position:relative;}
.hmini .cw-deck{width:760px!important;margin:0!important;padding:0!important;background:transparent!important;border-radius:0!important;transform:scale(.35);transform-origin:top left;}
.hmini .cw-deck .cw-slide{position:relative!important;display:flex!important;width:760px!important;height:548px!important;margin:0!important;inset:auto!important;}
.hkhead{display:flex;align-items:baseline;gap:9px;margin-bottom:7px;}
.hnum{font-weight:700;font-size:12px;color:#fff;background:#788C5D;border-radius:6px;padding:2px 8px;}
.htitle{font-weight:700;font-size:16px;}
ul.hpts{margin:0;padding-left:18px;} ul.hpts li{font-size:14px;line-height:1.5;color:#3D3D3A;margin-bottom:3px;}
.hkp a{color:#5E7049;font-weight:600;} .hact a{color:#5E7049;font-weight:600;}
.hact{background:#F0EEE6;border-radius:7px;padding:8px 11px;margin-top:9px;font-size:13.5px;line-height:1.5;color:#3D3D3A;}
.hact b{font-size:10px;letter-spacing:.06em;text-transform:uppercase;color:#5E7049;margin-right:6px;}
.htip{font-size:12.5px;font-style:italic;color:#73726C;margin-top:7px;}
@media print{ *{-webkit-print-color-adjust:exact !important;print-color-adjust:exact !important;} .hrow{break-inside:avoid;page-break-inside:avoid;} .fg-phead{page-break-after:avoid;} @page{margin:0;} .hwrap{padding:14mm;} }`;function A(e){return JSON.stringify(e).replaceAll("<","\\u003c").replaceAll("\u2028","\\u2028").replaceAll("\u2029","\\u2029")}function ee(e){return`var CWDECKSELF=document.currentScript;var CWL=${A(e)};(function(){
  var root = document.querySelector('.cw-deck');
  if (!root || root.dataset.cwInit) return;
  root.dataset.cwInit = '1';

  var slides = [].slice.call(root.querySelectorAll('.cw-slide'));
  var total = slides.length;
  var idx = 0;
  var prevBtn = root.querySelector('[data-prev]');
  var nextBtn = root.querySelector('[data-next]');
  var numin = root.querySelector('[data-numin]');
  var totalEl = root.querySelector('[data-total]');
  var fillEl = root.querySelector('[data-fill]');
  var jump = root.querySelector('[data-jump]');
  var stage = root.querySelector('[data-stage]');

  /* jump menu: first slide of each section */
  function firstSec(name){ for(var i=0;i<slides.length;i++){ if(slides[i].getAttribute('data-sec')===name) return i; } return -1; }
  var ph = document.createElement('option'); ph.value=''; ph.textContent=CWL.jumpPlaceholder; ph.selected=true; jump.appendChild(ph);
  [[CWL.jumpWelcome,0],[CWL.jumpInner,firstSec('inner')],[CWL.jumpOuter,firstSec('outer')],[CWL.jumpClose,firstSec('close')]].forEach(function(a){
    if(a[1]>=0){ var o=document.createElement('option'); o.value=a[1]; o.textContent=a[0]; jump.appendChild(o); }
  });

  function show(n){
    idx = Math.max(0, Math.min(total-1, n));
    slides.forEach(function(s,i){ s.classList.toggle('is-active', i===idx); });
    if(numin) numin.value = idx+1; if(totalEl) totalEl.textContent = total;
    fillEl.style.width = ((idx+1)/total*100)+'%';
    prevBtn.disabled = (idx===0);
    nextBtn.disabled = (idx===total-1);
    jump.value='';
    if (slides[idx]) slides[idx].scrollTop = 0;
  }
  prevBtn.addEventListener('click', function(){ show(idx-1); });
  nextBtn.addEventListener('click', function(){ show(idx+1); });
  jump.addEventListener('change', function(){ if (jump.value!=='') show(parseInt(jump.value,10)); });
  function goNum(){ var v=parseInt(numin.value,10); if(!isNaN(v)){ show(v-1); } else { numin.value=idx+1; } }
  if(numin){ numin.addEventListener('keydown', function(e){ if(e.key==='Enter'){ e.preventDefault(); goNum(); numin.blur(); } }); numin.addEventListener('change', goNum); }
  root.setAttribute('tabindex','0');
  root.addEventListener('keydown', function(e){
    var tag = (e.target && e.target.tagName) ? e.target.tagName.toLowerCase() : '';
    if (tag==='select' || tag==='input' || tag==='textarea') return;
    if (e.key==='ArrowLeft'){ e.preventDefault(); show(idx-1); }
    else if (e.key==='ArrowRight'){ e.preventDefault(); show(idx+1); }
  });

  /* editable facilitator slide (autosave) */
  var FAC='cw-deck-fac-v1';
  var facData={};
  try { facData = JSON.parse(localStorage.getItem(FAC)||'{}')||{}; } catch(e){ facData={}; }
  var facFields=[].slice.call(root.querySelectorAll('[data-fac]'));
  var facNote=root.querySelector('[data-fac-note]');
  facFields.forEach(function(f){
    var k=f.getAttribute('data-fac'); if(k in facData) f.value=facData[k];
    f.addEventListener('input', function(){
      facData[k]=f.value;
      try { localStorage.setItem(FAC, JSON.stringify(facData)); if(facNote) facNote.textContent=CWL.facSaved; }
      catch(e){ if(facNote) facNote.textContent=CWL.facUnavailable; }
    });
  });

  /* click-to-play video thumbnails (slide 20) */
  [].slice.call(root.querySelectorAll('.vembed[data-yt]')).forEach(function(b){
    b.addEventListener('click', function(){
      var id=b.getAttribute('data-yt');
      var f=document.createElement('iframe');
      f.src='https://www.youtube.com/embed/'+id+'?autoplay=1&rel=0';
      f.title=b.getAttribute('aria-label')||'video';
      f.setAttribute('allow','autoplay; encrypted-media; picture-in-picture; fullscreen');
      f.setAttribute('allowfullscreen','');
      b.innerHTML=''; b.appendChild(f);
    }, {once:true});
  });

  var pdfBtn=root.querySelector('[data-pdf]');
  if(pdfBtn){pdfBtn.addEventListener('click',function(){
    var st=[].slice.call(document.querySelectorAll('style')).filter(function(s){return s.textContent.indexOf('.cw-deck')>-1;}).map(function(s){return s.textContent;}).join('\\n');
    var stageNode=root.querySelector('[data-stage]');
    var clone=stageNode.cloneNode(true);
    var liveF=[].slice.call(stageNode.querySelectorAll('input,textarea'));
    var clF=[].slice.call(clone.querySelectorAll('input,textarea'));
    liveF.forEach(function(el,i){var c=clF[i];if(!c)return;if(el.tagName.toLowerCase()==='textarea'){c.textContent=el.value;}else{c.setAttribute('value',el.value);}});
    var stage=clone.innerHTML;
    var w=window.open('','_blank');
    if(!w){alert(CWL.popups);return;}
    w.document.write('<!doctype html><html><head><meta charset="utf-8"><title>'+CWL.printTitleHtml+'</title><style>'+st+' *{-webkit-print-color-adjust:exact;print-color-adjust:exact;box-shadow:none!important;} @page{size:760px 548px;margin:0;} body{margin:0;background:#fff;} .cw-deck{margin:0;padding:0;background:#fff;width:760px;} .cw-stage{position:static!important;height:auto!important;overflow:visible!important;border:none!important;border-radius:0!important;} .cw-slide{position:relative!important;display:flex!important;width:760px!important;height:548px!important;page-break-after:always;break-after:page;border-radius:0!important;overflow:hidden!important;} .cw-deck .card,.cw-deck .nrow,.cw-deck .stat,.cw-deck .crow,.cw-deck .numcard,.cw-deck .delg-card,.cw-deck .starter,.cw-deck .pcol,.cw-deck .xcard,.cw-deck .markcard,.cw-deck .goalpill,.cw-deck .oneqcard,.cw-deck .mxq,.cw-deck .mrow{border:1px solid rgba(20,20,19,0.12)!important;}</style></head><body><div class="cw-deck"><div class="cw-stage">'+stage+'</div></div></body></html>');
    w.document.close();setTimeout(function(){try{w.focus();w.print();}catch(e){}},700);
  });}

  slides.forEach(function(s){var f=document.createElement('div');f.className='cw-foot';f.textContent=CWL.foot;s.appendChild(f);});

  var htmlBtn=root.querySelector('[data-html]');
  if(htmlBtn){htmlBtn.addEventListener('click',function(){
    var st=[].slice.call(document.querySelectorAll('style')).filter(function(s){return s.textContent.indexOf('.cw-deck')>-1;}).map(function(s){return s.textContent;}).join('\\n');
    var dclone=root.cloneNode(true);dclone.removeAttribute('data-cw-init');var doc='<!doctype html><html lang="'+CWL.lang+'"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>'+CWL.rehtmlTitleHtml+'</title><style>body{margin:0;background:#e9e7df;padding:24px 16px;}'+st+'</style></head><body>'+dclone.outerHTML+'<script>'+(CWDECKSELF?CWDECKSELF.textContent:'')+'<\\/script></body></html>';
    var blob=new Blob([doc],{type:'text/html'});var a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='AIF-pK12-Train-the-Trainer-deck.html';document.body.appendChild(a);a.click();a.remove();setTimeout(function(){URL.revokeObjectURL(a.href);},3000);
  });}

  show(0);
})();`}var j="cw-deck-fac-v1",M=900,N={ferpa:"https://studentprivacy.ed.gov/",coppa:"https://www.ftc.gov/business-guidance/privacy-security/childrens-privacy",hipaa:"https://www.hhs.gov/hipaa/index.html"};function P(e,t){return e.rich(t,{},e=>t=>Object.hasOwn(N,e)?(0,T.jsx)("a",{href:N[e],target:"_blank",rel:"noopener",children:t}):(0,T.jsx)("span",{className:"ttlead",children:t}))}function F(){try{let e=JSON.parse(localStorage.getItem(j)??"{}");if(e&&typeof e=="object")return e}catch{}return{}}function I({copy:e}){let[t,n]=(0,d.useState)(F),[r,i]=(0,d.useState)("initial"),a=e=>{n(e);try{localStorage.setItem(j,JSON.stringify(e)),i("saved")}catch{i("unavailable")}};return(0,T.jsxs)("div",{className:"fac",children:[(0,T.jsx)("input",{className:"fac-name",type:"text","data-fac":"name",placeholder:e("fac.name.placeholder"),value:t.name??"",onChange:e=>a({...t,name:e.target.value})}),(0,T.jsx)("textarea",{className:"fac-bio","data-fac":"bio",placeholder:e("fac.bio.placeholder"),value:t.bio??"",onChange:e=>a({...t,bio:e.target.value})}),(0,T.jsx)("div",{className:"fac-note","data-fac-note":!0,children:e(`fac.note.${r}`)})]})}function L({id:e,label:t}){let[n,r]=(0,d.useState)(!1);return(0,T.jsx)("button",{className:"vembed",type:"button","aria-label":t,"data-yt":e,onClick:()=>r(!0),children:n?(0,T.jsx)("iframe",{src:"https://www.youtube.com/embed/"+e+"?autoplay=1&rel=0",title:t,allow:"autoplay; encrypted-media; picture-in-picture; fullscreen",allowFullScreen:!0}):(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)("span",{className:"vthumb",style:{backgroundImage:"url('https://i.ytimg.com/vi/"+e+"/hqdefault.jpg')"}}),(0,T.jsx)("span",{className:"vplay",children:(0,T.jsxs)("svg",{viewBox:"0 0 68 48",children:[(0,T.jsx)("path",{d:"M66.5 7.5a8 8 0 00-5.6-5.7C56 0.5 34 0.5 34 0.5s-22 0-26.9 1.3A8 8 0 001.5 7.5 83 83 0 000 24a83 83 0 001.5 16.5 8 8 0 005.6 5.7C12 47.5 34 47.5 34 47.5s22 0 26.9-1.3a8 8 0 005.6-5.7A83 83 0 0068 24a83 83 0 00-1.5-16.5z",fill:"#FF0000"}),(0,T.jsx)("path",{d:"M27 34l18-10-18-10z",fill:"#fff"})]})})]})})}function R({lines:e}){return(0,T.jsx)(T.Fragment,{children:e.slice(0,6).map((e,t)=>(0,T.jsx)("div",{className:"ttnl",children:e},t))})}function z(e,t,n=""){return e.pattern(t).split(s).map((r,i)=>{if(i%2==0)return u(r);if(r===n)return"";let a=u(e(`${t}.${r}`));return Object.hasOwn(N,r)?`<a href="${N[r]}" target="_blank" rel="noopener">${a}</a>`:a}).join("").trim()}async function B(e,t){let n=t.get(e);if(n)return n;let r=await(await fetch(e)).blob(),i=await new Promise((e,t)=>{let n=new FileReader;n.onload=()=>e(String(n.result)),n.onerror=()=>t(n.error??Error("read failed")),n.readAsDataURL(r)});return t.set(e,i),i}async function V(e){let t=new Map,n=Array.from(e.querySelectorAll("img"));await Promise.all(n.map(async e=>{let n=e.getAttribute("src");if(!(!n||n.startsWith("data:")))try{e.setAttribute("src",await B(new URL(n,window.location.href).href,t))}catch{}}))}function te(e){let t=e.cloneNode(!0);t.style.transform="";let n=Array.from(e.querySelectorAll("input, textarea")),r=Array.from(t.querySelectorAll("input, textarea"));return n.forEach((e,t)=>{let n=r[t];n&&(e instanceof HTMLTextAreaElement?n.textContent=e.value:e instanceof HTMLInputElement&&n.setAttribute("value",e.value))}),t.querySelector("[data-jump]")?.replaceChildren(),t.querySelectorAll(".cw-foot").forEach(e=>e.remove()),t}async function H(e,t,n){let r=te(e);await V(r);let i={lang:n,jumpPlaceholder:t("jump.placeholder"),jumpWelcome:t("jump.welcome"),jumpInner:t("jump.inner"),jumpOuter:t("jump.outer"),jumpClose:t("jump.close"),facSaved:t("fac.note.saved"),facUnavailable:t("fac.note.unavailable"),popups:t("doc.print.popups"),printTitleHtml:u(t("doc.print.title")),rehtmlTitleHtml:u(t("doc.rehtml.title")),foot:t("foot")};return`<!doctype html><html lang="${n}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>`+u(t("doc.title"))+"</title><style>"+E+"</style><style>"+O+'</style></head><body><div style="max-width:900px;margin:0 auto;">'+r.outerHTML+"</div><script>"+ee(i)+"<\/script></body></html>"}async function U(e,t,n){let r=Array.from(e.querySelectorAll(".cw-slide")).map((e,n)=>{let r=e.cloneNode(!0);r.classList.add("is-active");let i=$[n],a=e.querySelector(".stitle")?.textContent?.trim()??(i?t(`sec.${i.sec}`):""),o=t.keys(`s${n+1}.note`),s=e=>t.has(`${e}.activity`),c=e=>t.has(`${e}.tip`),l=o.filter(e=>!s(e)&&!c(e)),d=o.find(s),f=o.find(c);return'<div class="hrow"><div class="hmini"><div class="cw-deck">'+r.outerHTML+'</div></div><div class="hkp"><div class="hkhead"><span class="hnum">'+String(n+1)+'</span><span class="htitle">'+u(a)+'</span></div><ul class="hpts">'+l.map(e=>"<li>"+z(t,e)+"</li>").join("")+"</ul>"+(d?'<div class="hact"><b>'+u(t("guide.activity"))+"</b>"+z(t,d,"activity")+"</div>":"")+(f?'<div class="htip">'+z(t,f)+"</div>":"")+"</div></div>"}),i=document.createElement("div");return i.innerHTML=r.join(""),await V(i),`<!doctype html><html lang="${n}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>`+u(t("doc.title"))+"</title><style>"+E+"</style><style>"+k+'</style></head><body><div class="hwrap"><div class="fg-phead"><div class="fgb">'+u(t("guide.brand"))+'</div><div class="fgt">'+u(t("guide.title"))+'</div><div class="fgs">'+u(t("guide.subtitle"))+"</div></div>"+i.innerHTML+"</div></body></html>"}function W(e,t){let n=URL.createObjectURL(new Blob([e],{type:"text/html"})),r=document.createElement("a");r.href=n,r.download=t,document.body.appendChild(r),r.click(),setTimeout(()=>{r.remove(),URL.revokeObjectURL(n)},150)}function G(e){let t=document.createElement("iframe");t.style.cssText="position:fixed;right:0;bottom:0;width:0;height:0;border:0;",document.body.appendChild(t);let n=t.contentWindow?.document;if(!n){t.remove();return}n.open(),n.write(e),n.close(),setTimeout(()=>{t.contentWindow?.focus(),t.contentWindow?.print(),setTimeout(()=>t.remove(),1500)},600)}function K(e,t){return(0,T.jsxs)("div",{className:"head",children:[(0,T.jsx)("div",{className:"eyebrow",children:e(`${t}.eyebrow`)}),(0,T.jsx)("div",{className:"stitle",children:e(`${t}.stitle`)})]})}function q(e,t){return(0,T.jsxs)("div",{className:"head",children:[(0,T.jsx)("div",{className:"eyebrow",children:e(`${t}.eyebrow`)}),(0,T.jsx)("div",{className:"gradeband",children:e(`${t}.band`)}),(0,T.jsx)("div",{className:"stitle",children:e(`${t}.stitle`)})]})}function J(e,t){return(0,T.jsxs)(T.Fragment,{children:[q(e,t),(0,T.jsx)("div",{className:"grow",children:(0,T.jsx)("div",{className:"xcards",children:e.keys(`${t}.ex`,".name").map(t=>(0,T.jsxs)("div",{className:"xcard",children:[(0,T.jsx)("div",{className:"xlabel",children:e(`${t}.label`)}),(0,T.jsx)("div",{className:"xname",children:e(`${t}.name`)}),(0,T.jsx)("div",{className:"xbody",children:e(`${t}.body`)}),(0,T.jsx)("div",{className:"xdiscern",children:e.rich(`${t}.discern`,{lead:a})})]},t))})})]})}function Y(e,t){return(0,T.jsx)("div",{className:"rows",children:e.keys(`${t}.row`).map((t,n)=>(0,T.jsxs)("div",{className:"nrow",children:[(0,T.jsx)("span",{className:"nb",children:n+1}),(0,T.jsx)("span",{className:"nt",children:e.rich(t,{lead:o})})]},t))})}function X(e,t,n){let r=e.keys(`${t}.d`,".h");return(0,T.jsx)("div",{className:"dexp",children:r.map((t,i)=>(0,T.jsxs)("div",{className:"db"+(n&&i>0&&i<r.length-1?" dim":""),children:[(0,T.jsx)("div",{className:"dbh",children:e(`${t}.h`)}),(0,T.jsx)("div",{className:"dbq",children:e(`${t}.q`)})]},t))})}function Z(e,t,n){return(0,T.jsx)("div",{className:"grid3",children:e.keys(`${t}.card`,".h").map((t,r)=>(0,T.jsxs)("div",{className:"card",children:[(0,T.jsx)("div",{className:"cardicon",children:(0,T.jsx)("img",{className:"pico",src:l(n,r),alt:""})}),(0,T.jsx)("div",{className:"ch sans",children:e(`${t}.h`)}),(0,T.jsx)("div",{className:"cp",children:e.rich(`${t}.p`,{},()=>c)})]},t))})}var ne=[f,C,x],re=[_,S,w,C],ie=[_,S,w,C,w],ae=["005JLRt3gXI","nvbq39yVYRk","RnOWJoHU_NY"],oe=[v,y],se=["top","top","bot","bot"],Q=[h,g],ce=[f,m,S],le=[m,S,p],ue={pew:"https://www.pewresearch.org/internet/2026/02/24/how-teens-use-and-view-ai/",rand:"https://www.rand.org/pubs/research_reports/RRA956-21.html",gallup:"https://news.gallup.com/poll/691967/three-teachers-weekly-saving-six-weeks-year.aspx"},$=[{sec:"title",cls:"hero bg-forest s-title",body:e=>(0,T.jsx)(T.Fragment,{children:(0,T.jsxs)("div",{className:"grow",children:[(0,T.jsx)("div",{className:"pill",children:e("s1.pill")}),(0,T.jsx)("div",{className:"stitle big",children:e("s1.stitle")}),(0,T.jsx)("div",{className:"kicker",children:e("s1.kicker")})]})})},{sec:"welcome",cls:"s-welcome",body:e=>(0,T.jsxs)(T.Fragment,{children:[K(e,"s2"),(0,T.jsxs)("div",{className:"grow",children:[(0,T.jsx)("div",{className:"lead",children:e("s2.lead")}),(0,T.jsx)("ul",{className:"l",children:e.seq("s2.li").map((e,t)=>(0,T.jsx)("li",{children:e},t))})]})]})},{sec:"welcome",cls:"s-welcome",body:e=>(0,T.jsxs)(T.Fragment,{children:[K(e,"s3"),(0,T.jsx)("div",{className:"grow",children:(0,T.jsx)(I,{copy:e})})]})},{sec:"welcome",cls:"s-welcome",body:e=>(0,T.jsx)(T.Fragment,{children:(0,T.jsxs)("div",{className:"grow",children:[(0,T.jsx)("div",{className:"eyebrow",children:e("s4.eyebrow")}),(0,T.jsx)("div",{className:"stitle big it",children:e("s4.stitle")}),(0,T.jsx)("div",{className:"body",style:{marginTop:"8px"},children:(0,T.jsx)("p",{children:e("s4.p")})})]})})},{sec:"welcome",cls:"s-welcome",body:e=>(0,T.jsxs)(T.Fragment,{children:[K(e,"s5"),(0,T.jsx)("div",{className:"grow",children:(0,T.jsx)("div",{className:"grid3",children:e.keys("s5.card",".h").map(t=>(0,T.jsxs)("div",{className:"card",children:[(0,T.jsx)("div",{className:"ch",children:e(`${t}.h`)}),(0,T.jsx)("div",{className:"cp",children:e(`${t}.p`)})]},t))})})]})},{sec:"welcome",cls:"s-welcome",body:e=>(0,T.jsxs)(T.Fragment,{children:[K(e,"s6"),(0,T.jsx)("div",{className:"grow",children:Y(e,"s6")})]})},{sec:"opening",cls:"s-opening",body:e=>(0,T.jsxs)(T.Fragment,{children:[K(e,"s7"),(0,T.jsxs)("div",{className:"grow",style:{gap:"16px"},children:[(0,T.jsxs)("div",{className:"conf2",children:[(0,T.jsxs)("div",{className:"confbox",children:[(0,T.jsx)("div",{className:"confh",children:e("s7.have")}),(0,T.jsx)("ul",{className:"sqlist",children:e.seq("s7.q").map((e,t)=>(0,T.jsx)("li",{children:e},t))})]}),(0,T.jsxs)("div",{className:"confturn",children:[(0,T.jsx)("div",{className:"confh",children:e("s7.turn")}),(0,T.jsx)("div",{className:"steps",children:e.keys("s7.step",".b").map((t,n)=>(0,T.jsxs)("div",{className:"step",children:[(0,T.jsx)("span",{className:"sn",children:n+1}),(0,T.jsxs)("div",{children:[(0,T.jsx)("div",{className:"sb",children:e(`${t}.b`)}),(0,T.jsx)("div",{className:"stime",children:e(`${t}.time`)})]})]},t))}),(0,T.jsx)("div",{className:"confrule"}),(0,T.jsx)("div",{className:"confgoal",children:e("s7.goal")})]})]}),(0,T.jsx)("div",{className:"debrief",children:e("s7.debrief")})]})]})},{sec:"guiding",cls:"s-guiding",body:e=>(0,T.jsxs)(T.Fragment,{children:[K(e,"s8"),(0,T.jsx)("div",{className:"grow",children:Z(e,"s8",ne)})]})},{sec:"why",cls:"s-why",body:e=>(0,T.jsxs)(T.Fragment,{children:[K(e,"s9"),(0,T.jsxs)("div",{className:"grow",children:[(0,T.jsx)("div",{className:"stats",children:e.keys("s9.stat",".n").map(t=>(0,T.jsxs)("div",{className:"stat",children:[(0,T.jsx)("div",{className:"n",children:e(`${t}.n`)}),(0,T.jsx)("div",{className:"t",children:e(`${t}.t`)})]},t))}),(0,T.jsx)("div",{className:"body",children:(0,T.jsx)("p",{children:e("s9.p")})}),(0,T.jsx)("div",{className:"dsource",children:e.rich("s9.sources",{},e=>t=>(0,T.jsx)("a",{href:ue[e],target:"_blank",rel:"noopener",children:t}))})]})]})},{sec:"why",cls:"s-why",body:e=>(0,T.jsxs)(T.Fragment,{children:[K(e,"s10"),(0,T.jsx)("div",{className:"grow",children:(0,T.jsxs)("div",{className:"lvf",children:[(0,T.jsx)("div",{className:"lvf-left",children:(0,T.jsx)("div",{className:"lvf-stmt",children:e("s10.stmt")})}),(0,T.jsx)("div",{className:"lvf-right",children:e.keys("s10.ask",".q").map(t=>(0,T.jsxs)("div",{className:"ask",children:[(0,T.jsx)("div",{className:"asklabel",children:e(`${t}.label`)}),(0,T.jsx)("div",{className:"askq",children:e(`${t}.q`)})]},t))})]})})]})},{sec:"why",cls:"s-why",body:e=>(0,T.jsxs)(T.Fragment,{children:[K(e,"s11"),(0,T.jsx)("div",{className:"grow",children:(0,T.jsx)("div",{className:"mr",children:e.keys("s11.myth",".m").map(t=>(0,T.jsxs)("div",{className:"mrow",children:[(0,T.jsxs)("div",{className:"m",children:[(0,T.jsx)("span",{className:"tagm",children:e("s11.tag.myth")}),e(`${t}.m`)]}),(0,T.jsxs)("div",{className:"r",children:[(0,T.jsx)("span",{className:"tagr",children:e("s11.tag.reality")}),e(`${t}.r`)]})]},t))})})]})},{sec:"framework",cls:"hero bg-forest s-framework",body:e=>(0,T.jsx)(T.Fragment,{children:(0,T.jsxs)("div",{className:"grow",children:[(0,T.jsx)("div",{className:"eyebrow",children:e("s12.eyebrow")}),(0,T.jsx)("div",{className:"stitle big",children:e("s12.stitle")})]})})},{sec:"framework",cls:"hero bg-olive s-framework",body:e=>(0,T.jsx)(T.Fragment,{children:(0,T.jsxs)("div",{className:"grow",children:[(0,T.jsx)("div",{className:"eyebrow",children:e("s13.eyebrow")}),(0,T.jsx)("div",{className:"stitle big",children:e("s13.stitle")}),(0,T.jsx)("div",{className:"hero-sub",children:e("s13.sub")})]})})},{sec:"framework",cls:"s-framework",body:e=>(0,T.jsxs)(T.Fragment,{children:[K(e,"s14"),(0,T.jsxs)("div",{className:"grow",style:{gap:"16px"},children:[(0,T.jsxs)("svg",{className:"fwflow",viewBox:"0 0 680 168",role:"img","aria-label":e("s14.flow.aria"),children:[(0,T.jsx)("defs",{children:(0,T.jsx)("marker",{id:"fa",markerWidth:"9",markerHeight:"9",refX:"5",refY:"3",orient:"auto",children:(0,T.jsx)("path",{d:"M0,0 L6,3 L0,6 Z",fill:"#3D4A33"})})}),(0,T.jsx)("path",{d:"M95 52 C 205 14, 475 14, 585 52",fill:"none",stroke:"#3D4A33",strokeWidth:"2.2",markerEnd:"url(#fa)"}),(0,T.jsx)("path",{d:"M585 120 C 475 156, 205 156, 95 120",fill:"none",stroke:"#3D4A33",strokeWidth:"2.2",markerEnd:"url(#fa)"}),(0,T.jsx)("path",{d:"M264 52 C 322 32, 358 32, 416 52",fill:"none",stroke:"#3D4A33",strokeWidth:"2",markerEnd:"url(#fa)"}),(0,T.jsx)("path",{d:"M416 120 C 358 140, 322 140, 264 120",fill:"none",stroke:"#3D4A33",strokeWidth:"2",markerEnd:"url(#fa)"}),(0,T.jsx)("rect",{x:"20",y:"62",width:"148",height:"48",rx:"11",fill:"#CAD3BE"}),(0,T.jsx)("text",{x:"94",y:"91",textAnchor:"middle",fontSize:"15",fontWeight:"600",fill:"#2A2E24",children:e("s14.d1.h")}),(0,T.jsx)("rect",{x:"184",y:"62",width:"148",height:"48",rx:"11",fill:"#788C5D"}),(0,T.jsx)("text",{x:"258",y:"91",textAnchor:"middle",fontSize:"15",fontWeight:"600",fill:"#FFFFFF",children:e("s14.d2.h")}),(0,T.jsx)("rect",{x:"348",y:"62",width:"148",height:"48",rx:"11",fill:"#788C5D"}),(0,T.jsx)("text",{x:"422",y:"91",textAnchor:"middle",fontSize:"15",fontWeight:"600",fill:"#FFFFFF",children:e("s14.d3.h")}),(0,T.jsx)("rect",{x:"512",y:"62",width:"148",height:"48",rx:"11",fill:"#CAD3BE"}),(0,T.jsx)("text",{x:"586",y:"91",textAnchor:"middle",fontSize:"15",fontWeight:"600",fill:"#2A2E24",children:e("s14.d4.h")})]}),X(e,"s14",!1)]})]})},{sec:"inner",cls:"hero bg-olive s-inner",body:e=>(0,T.jsx)(T.Fragment,{children:(0,T.jsxs)("div",{className:"grow",children:[(0,T.jsx)("div",{className:"eyebrow",children:e("s15.eyebrow")}),(0,T.jsx)("div",{className:"stitle big",children:e("s15.stitle")}),(0,T.jsx)("div",{className:"hero-sub",children:e("s15.sub")})]})})},{sec:"inner",cls:"s-inner",body:e=>(0,T.jsxs)(T.Fragment,{children:[K(e,"s16"),(0,T.jsx)("div",{className:"grow",children:(0,T.jsx)("div",{className:"pgrid",children:e.keys("s16.col",".grade").map((t,n)=>(0,T.jsxs)("div",{className:"pcol",children:[(0,T.jsx)("div",{className:"picon",children:(0,T.jsx)("img",{className:"pico",src:l(re,n),alt:""})}),(0,T.jsx)("div",{className:"pgrade",children:e(`${t}.grade`)}),(0,T.jsx)("ul",{className:"pbul",children:e.seq(`${t}.li`).map((e,t)=>(0,T.jsx)("li",{children:e},t))})]},t))})})]})},{sec:"inner",cls:"s-inner",body:e=>(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)("div",{className:"head",children:(0,T.jsx)("div",{className:"eyebrow",children:e("s17.eyebrow")})}),(0,T.jsx)("div",{className:"grow",children:(0,T.jsxs)("div",{className:"gd",children:[(0,T.jsxs)("div",{className:"gd-left",children:[(0,T.jsx)("div",{className:"gd-title",children:e("s17.title")}),(0,T.jsx)("div",{className:"gd-sub",children:e("s17.sub")})]}),(0,T.jsx)("div",{className:"gd-right",children:e.keys("s17.row",".h").map((t,n)=>(0,T.jsxs)("div",{className:"gdrow",children:[(0,T.jsx)("span",{className:"gdi",children:(0,T.jsx)("img",{className:"pico",src:l(ie,n),alt:""})}),(0,T.jsxs)("div",{children:[(0,T.jsx)("div",{className:"gdh",children:e(`${t}.h`)}),(0,T.jsx)("div",{className:"gdd",children:e(`${t}.d`)})]})]},t))})]})})]})},{sec:"inner",cls:"s-inner",body:e=>(0,T.jsxs)(T.Fragment,{children:[K(e,"s18"),(0,T.jsx)("div",{className:"grow",children:(0,T.jsx)("div",{className:"checks",children:e.keys("s18.row",".letter").map(t=>(0,T.jsxs)("div",{className:"crow",children:[(0,T.jsx)("span",{className:"cl",children:e(`${t}.letter`)}),(0,T.jsx)("span",{className:"ct",children:e.rich(`${t}.t`,{lead:o})})]},t))})})]})},{sec:"inner",cls:"s-inner",body:e=>(0,T.jsxs)(T.Fragment,{children:[K(e,"s19"),(0,T.jsx)("div",{className:"grow",children:(0,T.jsx)("div",{className:"vids",children:e.keys("s19.vid",".aria").map((t,n)=>(0,T.jsxs)("div",{className:"vid",children:[(0,T.jsx)(L,{id:l(ae,n),label:e(`${t}.aria`)}),(0,T.jsx)("div",{className:"vcap",children:e.rich(`${t}.cap`,{lead:o})})]},t))})})]})},{sec:"inner",cls:"s-inner",body:e=>(0,T.jsxs)(T.Fragment,{children:[K(e,"s20"),(0,T.jsx)("div",{className:"grow",children:(0,T.jsxs)("div",{className:"ck2",children:[(0,T.jsxs)("div",{className:"ck-left",children:[(0,T.jsx)("ul",{className:"ck-bullets",children:e.seq("s20.li").map((e,t)=>(0,T.jsx)("li",{children:e},t))}),(0,T.jsx)("div",{className:"ck-note",children:e("s20.note")}),(0,T.jsx)("div",{className:"ck-bold",children:e("s20.bold")})]}),(0,T.jsx)("div",{className:"claybox",children:(0,T.jsx)("img",{className:"pico",src:b,alt:""})})]})})]})},{sec:"inner",cls:"s-inner",body:e=>(0,T.jsxs)(T.Fragment,{children:[K(e,"s21"),(0,T.jsx)("div",{className:"grow",children:(0,T.jsx)("div",{className:"oatcards",children:e.keys("s21.card",".h").map((t,n)=>(0,T.jsxs)("div",{className:"oatcard",children:[(0,T.jsx)("div",{className:"oi",children:(0,T.jsx)("img",{className:"pico",src:l(oe,n),alt:""})}),(0,T.jsx)("div",{className:"oh",children:e(`${t}.h`)}),(0,T.jsx)("div",{className:"ob",children:e(`${t}.p`)})]},t))})})]})},{sec:"inner",cls:"s-inner",body:e=>(0,T.jsxs)(T.Fragment,{children:[K(e,"s22"),(0,T.jsx)("div",{className:"grow",children:Y(e,"s22")})]})},{sec:"inner",cls:"hero s-sky",body:e=>(0,T.jsx)(T.Fragment,{children:(0,T.jsxs)("div",{className:"grow",children:[(0,T.jsx)("div",{className:"eyebrow",children:e("s23.eyebrow")}),(0,T.jsx)("div",{className:"stitle big",children:e("s23.stitle")}),(0,T.jsx)("div",{className:"hero-sub",children:e("s23.sub")})]})})},{sec:"inner",cls:"s-sky",body:e=>J(e,"s24")},{sec:"inner",cls:"s-sky",body:e=>J(e,"s25")},{sec:"inner",cls:"s-sky",body:e=>J(e,"s26")},{sec:"inner",cls:"s-sky",body:e=>J(e,"s27")},{sec:"inner",cls:"s-sky",body:e=>(0,T.jsxs)(T.Fragment,{children:[q(e,"s28"),(0,T.jsx)("div",{className:"grow",children:(0,T.jsx)("div",{className:"qcols",children:e.keys("s28.q",".q").map(t=>(0,T.jsxs)("div",{className:"qcol",children:[(0,T.jsx)("div",{className:"qn",children:e(`${t}.n`)}),(0,T.jsx)("div",{className:"qq",children:e(`${t}.q`)})]},t))})})]})},{sec:"framework",cls:"hero bg-forest s-framework",body:e=>(0,T.jsx)(T.Fragment,{children:(0,T.jsxs)("div",{className:"grow",children:[(0,T.jsx)("div",{className:"eyebrow",children:e("s29.eyebrow")}),(0,T.jsx)("div",{className:"stitle big",children:e("s29.stitle")}),(0,T.jsx)("div",{className:"hero-sub",children:e("s29.sub")})]})})},{sec:"outer",cls:"s-outer",body:e=>(0,T.jsxs)(T.Fragment,{children:[K(e,"s30"),(0,T.jsx)("div",{className:"grow",children:(0,T.jsx)("div",{className:"lead",children:e("s30.lead")})})]})},{sec:"outer",cls:"hero bg-forest s-outer",body:e=>(0,T.jsx)(T.Fragment,{children:(0,T.jsxs)("div",{className:"grow",children:[(0,T.jsx)("div",{className:"eyebrow",children:e("s31.eyebrow")}),(0,T.jsx)("div",{className:"stitle big",children:e("s31.stitle")}),(0,T.jsx)("div",{className:"hero-sub",children:e("s31.sub")})]})})},{sec:"outer",cls:"hero s-outer",style:{background:"#1A1A18"},body:e=>(0,T.jsx)(T.Fragment,{children:(0,T.jsxs)("div",{className:"grow",style:{gap:"0"},children:[(0,T.jsx)("div",{className:"qmark",children:e("s32.qmark")}),(0,T.jsx)("div",{className:"qbig",children:e("s32.quote")})]})})},{sec:"outer",cls:"s-outer",body:e=>(0,T.jsxs)(T.Fragment,{children:[K(e,"s33"),(0,T.jsxs)("div",{className:"grow",style:{gap:"16px"},children:[(0,T.jsxs)("svg",{className:"fwflow",viewBox:"0 0 680 168",role:"img","aria-label":e("s33.flow.aria"),children:[(0,T.jsxs)("defs",{children:[(0,T.jsx)("marker",{id:"fb",markerWidth:"9",markerHeight:"9",refX:"5",refY:"3",orient:"auto",children:(0,T.jsx)("path",{d:"M0,0 L6,3 L0,6 Z",fill:"#3D4A33"})}),(0,T.jsx)("marker",{id:"fbg",markerWidth:"9",markerHeight:"9",refX:"5",refY:"3",orient:"auto",children:(0,T.jsx)("path",{d:"M0,0 L6,3 L0,6 Z",fill:"#C9C8C1"})})]}),(0,T.jsx)("path",{d:"M95 52 C 205 14, 475 14, 585 52",fill:"none",stroke:"#3D4A33",strokeWidth:"2.4",markerEnd:"url(#fb)"}),(0,T.jsx)("path",{d:"M585 120 C 475 156, 205 156, 95 120",fill:"none",stroke:"#3D4A33",strokeWidth:"2.4",markerEnd:"url(#fb)"}),(0,T.jsx)("path",{d:"M264 52 C 322 32, 358 32, 416 52",fill:"none",stroke:"#C9C8C1",strokeWidth:"2",markerEnd:"url(#fbg)"}),(0,T.jsx)("path",{d:"M416 120 C 358 140, 322 140, 264 120",fill:"none",stroke:"#C9C8C1",strokeWidth:"2",markerEnd:"url(#fbg)"}),(0,T.jsx)("rect",{x:"20",y:"62",width:"148",height:"48",rx:"11",fill:"#788C5D"}),(0,T.jsx)("text",{x:"94",y:"91",textAnchor:"middle",fontSize:"15",fontWeight:"600",fill:"#FFFFFF",children:e("s33.d1.h")}),(0,T.jsx)("rect",{x:"184",y:"62",width:"148",height:"48",rx:"11",fill:"#E7E6DF"}),(0,T.jsx)("text",{x:"258",y:"91",textAnchor:"middle",fontSize:"15",fontWeight:"600",fill:"#9A998F",children:e("s33.d2.h")}),(0,T.jsx)("rect",{x:"348",y:"62",width:"148",height:"48",rx:"11",fill:"#E7E6DF"}),(0,T.jsx)("text",{x:"422",y:"91",textAnchor:"middle",fontSize:"15",fontWeight:"600",fill:"#9A998F",children:e("s33.d3.h")}),(0,T.jsx)("rect",{x:"512",y:"62",width:"148",height:"48",rx:"11",fill:"#788C5D"}),(0,T.jsx)("text",{x:"586",y:"91",textAnchor:"middle",fontSize:"15",fontWeight:"600",fill:"#FFFFFF",children:e("s33.d4.h")})]}),X(e,"s33",!0)]})]})},{sec:"outer",cls:"s-outer",body:e=>(0,T.jsxs)(T.Fragment,{children:[K(e,"s34"),(0,T.jsxs)("div",{className:"grow",style:{justifyContent:"flex-start",gap:"9px",paddingBottom:"20px"},children:[(0,T.jsx)("div",{className:"mxlead",children:e.rich("s34.lead",{impact:c,risk:c,mins:e=>(0,T.jsx)("span",{className:"mxmins",children:e})})}),(0,T.jsx)("div",{className:"mx",children:e.keys("s34.quad",".h").map((t,n)=>(0,T.jsxs)("div",{className:"mxq "+l(se,n),children:[(0,T.jsx)("div",{className:"mxh",children:e(`${t}.h`)}),(0,T.jsx)("div",{className:"mxb mxdrop",children:(0,T.jsx)("div",{className:"mxlabel",children:e(`${t}.label`)})})]},t))}),(0,T.jsxs)("div",{className:"mxbank",children:[(0,T.jsx)("div",{className:"mxbanklabel",children:e("s34.bank")}),(0,T.jsx)("ul",{className:"mxchips",children:e.seq("s34.task").map((e,t)=>(0,T.jsx)("li",{children:e},t))})]}),(0,T.jsx)("div",{className:"mxtask",children:e("s34.groupTask")})]})]})},{sec:"outer",cls:"s-outer",body:e=>(0,T.jsxs)(T.Fragment,{children:[K(e,"s35"),(0,T.jsx)("div",{className:"grow",children:(0,T.jsx)("div",{className:"oneq",children:e.keys("s35.card",".h").map((t,n)=>(0,T.jsxs)("div",{className:"oneqcard",children:[(0,T.jsx)("div",{className:"oqi",children:(0,T.jsx)("img",{className:"pico",src:l(Q,n),alt:""})}),(0,T.jsx)("div",{className:"oqh",children:e(`${t}.h`)}),(0,T.jsx)("div",{className:"oqb",children:e.rich(`${t}.p`,{stress:a})})]},t))})})]})},{sec:"outer",cls:"hero bg-forest s-outer",body:e=>(0,T.jsx)(T.Fragment,{children:(0,T.jsxs)("div",{className:"grow",children:[(0,T.jsx)("div",{className:"eyebrow",children:e("s36.eyebrow")}),(0,T.jsx)("div",{className:"stitle big",children:e("s36.stitle")}),(0,T.jsx)("div",{className:"hero-sub",children:e("s36.sub")})]})})},{sec:"outer",cls:"s-outer",body:e=>(0,T.jsxs)(T.Fragment,{children:[K(e,"s37"),(0,T.jsxs)("div",{className:"grow",style:{gap:"16px"},children:[(0,T.jsx)("div",{className:"lead",children:e("s37.lead")}),(0,T.jsx)("div",{className:"grid3",children:e.keys("s37.card",".h").map((t,n)=>(0,T.jsxs)("div",{className:"card",children:[(0,T.jsx)("div",{className:"cnum",children:String(n+1).padStart(2,"0")}),(0,T.jsx)("div",{className:"ch",children:e(`${t}.h`)}),(0,T.jsx)("div",{className:"cp",children:e(`${t}.p`)})]},t))})]})]})},{sec:"outer",cls:"s-outer",body:e=>(0,T.jsxs)(T.Fragment,{children:[K(e,"s38"),(0,T.jsx)("div",{className:"grow",style:{justifyContent:"flex-start",gap:"0"},children:(0,T.jsx)("div",{className:"numcards",children:e.keys("s38.card",".t").map((t,n)=>(0,T.jsxs)("div",{className:"numcard",children:[(0,T.jsx)("div",{className:"ncn",children:String(n+1).padStart(2,"0")}),(0,T.jsxs)("div",{children:[(0,T.jsx)("div",{className:"nct",children:e(`${t}.t`)}),(0,T.jsx)("div",{className:"ncd",children:e(`${t}.d`)})]})]},t))})})]})},{sec:"outer",cls:"s-outer",body:e=>(0,T.jsxs)(T.Fragment,{children:[K(e,"s39"),(0,T.jsx)("div",{className:"grow",children:(0,T.jsx)("div",{className:"rows",children:e.seq("s39.row").map((e,t)=>(0,T.jsxs)("div",{className:"nrow",children:[(0,T.jsx)("span",{className:"nb",children:t+1}),(0,T.jsx)("span",{className:"nt",children:e})]},t))})})]})},{sec:"outer",cls:"s-outer darkbg",style:{background:"#141413"},body:e=>(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)("div",{className:"head",children:(0,T.jsx)("div",{className:"eyebrow piiq-eye",children:e("s40.eyebrow")})}),(0,T.jsxs)("div",{className:"grow",style:{justifyContent:"center",alignItems:"center",textAlign:"center",gap:"22px"},children:[(0,T.jsx)("div",{className:"piiq-t",children:e("s40.t")}),(0,T.jsx)("div",{className:"piiq-m",children:e("s40.m")}),(0,T.jsx)("div",{className:"piiq-g",children:e.rich("s40.go",{br:(0,T.jsx)("br",{})})})]})]})},{sec:"outer",cls:"hero s-sky",body:e=>(0,T.jsx)(T.Fragment,{children:(0,T.jsxs)("div",{className:"grow",children:[(0,T.jsx)("div",{className:"eyebrow",children:e("s41.eyebrow")}),(0,T.jsx)("div",{className:"stitle big",children:e("s41.stitle")}),(0,T.jsx)("div",{className:"hero-sub",children:e("s41.sub")})]})})},{sec:"outer",cls:"s-sky",body:e=>J(e,"s42")},{sec:"outer",cls:"s-sky",body:e=>J(e,"s43")},{sec:"outer",cls:"s-sky",body:e=>J(e,"s44")},{sec:"outer",cls:"s-sky",body:e=>J(e,"s45")},{sec:"close",cls:"hero s-close",style:{background:"#7C8C62"},body:e=>(0,T.jsx)(T.Fragment,{children:(0,T.jsxs)("div",{className:"grow",children:[(0,T.jsx)("div",{className:"eyebrow",children:e("s46.eyebrow")}),(0,T.jsx)("div",{className:"stitle big it",children:e("s46.stitle")}),(0,T.jsx)("div",{className:"hero-sub",children:e.rich("s46.sub",{stress:a})})]})})},{sec:"close",cls:"s-close",body:e=>(0,T.jsx)(T.Fragment,{children:(0,T.jsxs)("div",{className:"grow",children:[(0,T.jsx)("div",{className:"eyebrow",children:e("s47.eyebrow")}),(0,T.jsx)("div",{className:"stitle big it",children:e("s47.stitle")}),(0,T.jsx)("div",{className:"body",style:{marginTop:"8px"},children:(0,T.jsx)("p",{children:e("s47.p")})})]})})},{sec:"close",cls:"s-close",body:e=>(0,T.jsxs)(T.Fragment,{children:[K(e,"s48"),(0,T.jsx)("div",{className:"grow",children:Z(e,"s48",ce)})]})},{sec:"close",cls:"s-close",body:e=>(0,T.jsxs)(T.Fragment,{children:[K(e,"s49"),(0,T.jsxs)("div",{className:"grow",style:{justifyContent:"flex-start",gap:"16px"},children:[(0,T.jsx)("div",{className:"grid3",children:e.keys("s49.mark",".t").map((t,n)=>(0,T.jsxs)("div",{className:"markcard",children:[(0,T.jsx)("div",{className:"mk",children:(0,T.jsx)("img",{className:"pico",src:l(le,n),alt:""})}),(0,T.jsx)("div",{className:"mkt",children:e.rich(`${t}.t`,{lead:o})})]},t))}),(0,T.jsx)("div",{className:"goalslabel",children:e("s49.goalsLabel")}),(0,T.jsx)("div",{className:"goalgrid",children:e.seq("s49.goal").map((e,t)=>(0,T.jsx)("div",{className:"goalpill",children:e},t))})]})]})},{sec:"thanks",cls:"hero bg-forest s-title",body:e=>(0,T.jsx)(T.Fragment,{children:(0,T.jsxs)("div",{className:"grow",children:[(0,T.jsx)("div",{className:"pill",children:e("s50.pill")}),(0,T.jsx)("div",{className:"stitle big",children:e("s50.stitle")}),(0,T.jsx)("div",{className:"hero-sub",children:e("s50.sub")})]})})}],de=[{key:"jump.welcome",sec:"title"},{key:"jump.inner",sec:"inner"},{key:"jump.outer",sec:"outer"},{key:"jump.close",sec:"close"}];function fe(){let e=r(),t=i(),[n,a]=(0,d.useState)(0),[o,s]=(0,d.useState)("1"),[c,l]=(0,d.useState)(!0),[u,f]=(0,d.useState)(!1),[p,m]=(0,d.useState)({scale:1,w:M,h:0}),h=(0,d.useRef)(null),g=(0,d.useRef)(null),_=(0,d.useMemo)(()=>$.map(t=>t.body(e)),[e]),v=$.length,y=e=>{let t=Math.max(0,Math.min(v-1,e));a(t),s(String(t+1));let n=g.current?.querySelectorAll(".cw-slide")[t];n&&(n.scrollTop=0)};(0,d.useEffect)(()=>{let e=h.current,t=g.current;if(!e||!t)return;let n=()=>{let n=Math.min(e.clientWidth/M,1);m({scale:n,w:Math.round(M*n),h:Math.round(t.offsetHeight*n)})};n();let r=new ResizeObserver(n);return r.observe(e),()=>r.disconnect()},[]),(0,d.useEffect)(()=>{if(!u)return;let e=()=>f(!1);return document.addEventListener("click",e),()=>document.removeEventListener("click",e)},[u]);let b=()=>{let e=parseInt(o,10);isNaN(e)?s(String(n+1)):y(e-1)},x=e=>{let t=e.target instanceof HTMLElement?e.target.tagName.toLowerCase():"";t!=="select"&&t!=="input"&&t!=="textarea"&&(e.key==="ArrowLeft"?(e.preventDefault(),y(n-1)):e.key==="ArrowRight"&&(e.preventDefault(),y(n+1)))},S=e=>{g.current&&e(g.current)},C=de.map(({key:e,sec:t})=>({key:e,n:$.findIndex(e=>e.sec===t)}));return(0,T.jsxs)("div",{className:"not-prose",children:[(0,T.jsx)("style",{dangerouslySetInnerHTML:{__html:E+`
`+D}}),(0,T.jsxs)("div",{className:"ttapp",children:[(0,T.jsxs)("div",{className:"tttoolbar",children:[(0,T.jsx)("button",{className:"ttbtn"+(c?" on":""),type:"button",onClick:()=>l(e=>!e),children:e("toolbar.notes")}),(0,T.jsx)("span",{className:"ttsp"}),(0,T.jsxs)("div",{className:"ttdl"+(u?" open":""),children:[(0,T.jsx)("button",{className:"ttbtn solid",type:"button","aria-expanded":u,onClick:e=>{e.stopPropagation(),f(e=>!e)},children:e("toolbar.download")}),(0,T.jsxs)("div",{className:"ttdlmenu",children:[(0,T.jsx)("div",{className:"lbl",children:e("dl.deck")}),(0,T.jsx)("button",{type:"button",onClick:()=>S(n=>{H(n,e,t).then(G)}),children:e("dl.deckPdf")}),(0,T.jsx)("button",{type:"button",onClick:()=>S(n=>{H(n,e,t).then(e=>W(e,"Train-the-Trainer-Deck.html"))}),children:e("dl.deckHtml")}),(0,T.jsx)("div",{className:"lbl",children:e("dl.guide")}),(0,T.jsx)("button",{type:"button",onClick:()=>S(n=>{U(n,e,t).then(G)}),children:e("dl.guidePdf")}),(0,T.jsx)("button",{type:"button",onClick:()=>S(n=>{U(n,e,t).then(e=>W(e,"Facilitator-Guide.html"))}),children:e("dl.guideHtml")})]})]})]}),(0,T.jsxs)("div",{className:"ttstage-area",ref:h,children:[(0,T.jsx)("div",{className:"deckscaler",style:p.h>0?{width:p.w,height:p.h}:void 0,children:(0,T.jsxs)("div",{className:"cw-deck",ref:g,tabIndex:0,onKeyDown:x,style:{transform:"scale("+String(p.scale)+")"},children:[(0,T.jsxs)("div",{className:"cw-bar",children:[(0,T.jsx)("button",{className:"cw-pn",type:"button","data-prev":!0,disabled:n===0,onClick:()=>y(n-1),children:e("nav.back")}),(0,T.jsx)("button",{className:"cw-pn",type:"button","data-next":!0,disabled:n===v-1,onClick:()=>y(n+1),children:e("nav.next")}),(0,T.jsx)("div",{className:"cw-prog",children:(0,T.jsx)("div",{className:"fill","data-fill":!0,style:{width:String((n+1)/v*100)+"%"}})}),(0,T.jsxs)("div",{className:"right",children:[(0,T.jsxs)("select",{className:"cw-jump","data-jump":!0,"aria-label":e("jump.aria"),value:"",onChange:e=>{e.target.value!==""&&y(parseInt(e.target.value,10))},children:[(0,T.jsx)("option",{value:"",children:e("jump.placeholder")}),C.filter(({n:e})=>e>=0).map(({key:t,n})=>(0,T.jsx)("option",{value:n,children:e(t)},t))]}),(0,T.jsx)("span",{className:"cw-count",children:e.rich("count.of",{current:(0,T.jsx)("input",{className:"cw-numin","data-numin":!0,type:"text",inputMode:"numeric","aria-label":e("count.aria"),value:o,onChange:e=>s(e.target.value),onBlur:b,onKeyDown:e=>{e.key==="Enter"&&(e.preventDefault(),b(),e.currentTarget.blur())}}),total:(0,T.jsx)("span",{"data-total":!0,children:v})})})]})]}),(0,T.jsx)("div",{className:"cw-stage","data-stage":!0,children:$.map((t,r)=>(0,T.jsxs)("div",{className:"cw-slide "+t.cls+(r===n?" is-active":""),style:t.style,"data-sec":t.sec,children:[_[r],(0,T.jsx)("div",{className:"cw-foot",children:e("foot")})]},r))}),(0,T.jsxs)("div",{className:"cw-pdfwrap",children:[(0,T.jsx)("button",{className:"cw-pdf",type:"button","data-pdf":!0,children:e("pdf.slides")}),(0,T.jsx)("button",{className:"cw-pdf cw-html",type:"button","data-html":!0,children:e("pdf.html")}),(0,T.jsx)("div",{className:"cw-pdfnote",children:e("pdf.note")})]})]})}),c?(0,T.jsxs)("div",{className:"ttnotes",children:[(0,T.jsx)("div",{className:"ttnotes-h",children:e("notes.heading")}),(0,T.jsx)("div",{className:"ttnotes-b","data-notes-body":!0,children:(0,T.jsx)(R,{lines:e.keys(`s${n+1}.note`).map(t=>P(e,t))})})]}):null]})]})]})}export{fe as default};