// data.jsx, the data contract. Anchored to real MYND figures where they exist so DB recognizes
// his own business. Everything else is shaped to demonstrate the surface.
// Refreshed 2 October 2026 to the 1 October basis: cash across both banks, the confirmed cost
// base, break-even, the six-product lineup and the repriced 8-piece chocolate unit.

const D = {
  meta: { user: "Damon B.", role: "Founder / CEO", tz: "Los Angeles", updated: "11:42 PM" },

  ticker: [
    { i: "dollar", l: "Revenue today", v: "$1,847" },
    { i: "box",    l: "Orders today", v: "14" },
    { i: "pulse",  l: "Approval rate", v: "95.88%", tone: "warn" },
    { i: "dollar", l: "Cash", v: "$68,751" },
    { i: "alert",  l: "Strawberry Mango", v: "42d cover", tone: "warn" },
    { i: "rev",    l: "Billing rate", v: "78.9%", tone: "good" },
    { i: "clock",  l: "Next buyout", v: "$9,407 · Nov 1" },
    { i: "truck",  l: "Shipments today", v: "11" },
    { i: "dollar", l: "Revenue 30d", v: "$49,889" },
    { i: "pulse",  l: "Over break-even", v: "$10,064", tone: "good" },
  ],

  // ---------------------------------------------------------------- BOARDROOM
  unit: [
    { k:"rev",   label:"Revenue · 30d",   value:"$49,889", delta:18.5, sub:"30 days to 5 Sep, settled", tone:"ink", help:"Collected across every rail, reconciled to bank settlement. July on the model basis was $42,112.", spark:[64267,58900,55400,51200,49800,47300,45100,42112,49889] },
    { k:"cm",    label:"Contribution margin", value:"$33,139", delta:6.1, sub:"66.4% of revenue", tone:"good", help:"Revenue less product cost, card processing and fulfillment. Fixed cost excluded. The number the business should orbit daily.", spark:[21400,19800,17900,16200,14840,28600,33139] },
    { k:"cash",  label:"Available cash",  value:"$68,751", delta:70.4, sub:"floor $23,585", tone:"good", help:"Mercury $62,605 and Bluebanc $6,146, read at source 1 October. Free cash is what sits above the operating floor." },
    { k:"burn",  label:"Operating profit · 30d", value:"+$16,166", delta:4075, sub:"was +$387 in July", tone:"good", help:"Revenue less product cost, processing, fulfillment and fixed operating cost. Before debt service and owner distributions. Operating profit, not net profit." },
    { k:"be",    label:"Break-even",      value:"$39,825", delta:0, sub:"running $10,064 above it", tone:"good", help:"Fixed overhead of $16,973 plus the $9,481 debt payment, divided by a 66.43% contribution margin. No owner salary, because there isn't one." },
    { k:"ncac",  label:"Cost per new customer", value:"-", sub:"no ad spend to measure", tone:"mute", help:"Ad spend has been zero since August, so there's no acquisition cost to divide. aMER and ROAS are blank for the same reason." },
    { k:"appr",  label:"Approval rate",   value:"95.88%", delta:0, sub:"target 99%", tone:"warn", help:"Share of customers approved once the cascade has run all three rails. Closing the last four points is worth about $14,000 a year." },
    { k:"debt",  label:"Still to pay",    value:"$87,377", delta:-29.9, sub:"next $9,407 Nov 1", tone:"ink", help:"Every dollar still leaving the bank on debt: $64,296 of remaining buyout payments, principal and interest, plus the $23,081 card balance. Principal alone is $76,414. There is one buyout note and the card, nothing else." },
  ],

  funnel: [
    { label:"Sessions",       v:18420, pct:100, note:"30 days, site analytics still being set up" },
    { label:"Add to cart",    v:2210,  pct:62,  note:"12.0% of sessions" },
    { label:"Checkout",       v:418,   pct:34,  note:"18.9% of carts" },
    { label:"Paid order",     v:223,   pct:22,  note:"July, reconciled to settlement" },
    { label:"Subscription",   v:23,    pct:9,   note:"10.4% attach, 94 of 905 customers" },
    { label:"Rebilled 3x",    v:13,    pct:4,   note:"57.5% of subscribers reach a third bill" },
  ],

  today: [
    { l:"Orders today",     v:"14" },
    { l:"Revenue today",    v:"$1,847" },
    { l:"Shipments out",    v:"11" },
    { l:"Declines today",   v:"3", tone:"warn" },
    { l:"Support tickets",  v:"6" },
    { l:"Subs canceled",   v:"2", tone:"bad" },
  ],
  thisMonth: [
    { l:"Revenue",          v:"$3,694" },
    { l:"Operating profit", v:"$1,197", tone:"good" },
    { l:"Orders",           v:"27" },
    { l:"New subscribers",  v:"2" },
    { l:"Debt paid",        v:"$9,481", tone:"good" },
    { l:"Distributions",    v:"$0" },
  ],

  attention: [
    { t:"Espresso boxes have to be ordered this week or they miss December. Six to eight week lead", tone:"bad" },
    { t:"Strawberry Mango goes dry 10 November and is 758 units short of Q4", tone:"bad" },
    { t:"Shipped units imply about twice the revenue the bank received. Not reconciled", tone:"bad" },
    { t:"Reorder threshold still reads zero on every SKU", tone:"warn" },
    { t:"Chocolate costs $1.40 more a box at eight pieces than the quote priced at six", tone:"warn" },
    { t:"Kitchen has logged 0 production runs. Three per flavor turns a range into a number", tone:"warn" },
  ],

  // ---------------------------------------------------------------- MONEY
  accounts: [
    { n:"Mercury · Operating", c:"1000", v:23585, role:"Holds the Q4 floor, spills to sweep", tone:"accent" },
    { n:"Mercury · Debt svc",  c:"1060", v:9407,  role:"Funds the next buyout payment", tone:"bad" },
    { n:"Mercury · Above the floor", c:"-", v:29613, role:"Not yet reported by bucket", tone:"mute" },
    { n:"Mercury · Sweep",     c:"1010", v:0,     role:"Distributes to buckets daily", tone:"info" },
    { n:"Mercury · Marketing", c:"1040", v:0,     role:"35% of sweep", tone:"violet" },
    { n:"Mercury · Inventory", c:"1030", v:0,     role:"25% of sweep", tone:"good" },
    { n:"Mercury · Taxes",     c:"1050", v:0,     role:"20% of sweep", tone:"warn" },
    { n:"Mercury · Owner",     c:"1070", v:0,     role:"15% of sweep. The only owner comp there is", tone:"accent" },
    { n:"Mercury · Reserve",   c:"1020", v:0,     role:"5%, caps at $141,754", tone:"mute" },
    { n:"Bluebanc · Settlement", c:"1080", v:6146, role:"Rails land here, sweeps to Mercury", tone:"info" },
  ],
  cashTrail: [
    { m:"Apr", v:64317 },{ m:"May", v:65504 },{ m:"Jun", v:82956 },{ m:"Jul", v:59962 },
    { m:"Aug", v:40347 },{ m:"Sep", v:57370 },{ m:"Oct", v:68751 },
  ],
  buckets: [
    { n:"Marketing", pct:35, target:9206, v:0, tone:"violet" },
    { n:"Inventory", pct:25, target:6576, v:0, tone:"good" },
    { n:"Taxes",     pct:20, target:5261, v:0, tone:"warn" },
    { n:"Owner profit", pct:15, target:3946, v:0, tone:"accent" },
    { n:"Reserve",   pct:5,  target:1315, v:0, tone:"info" },
  ],
  pl: [
    { line:"Revenue",          v:49889, pct:100,  tone:"ink",  bench:"" },
    { line:"Cost of delivery", v:16750, pct:33.6, tone:"good", bench:"~40%", d:"Product cost 17.8%, card processing 4.5%, fulfillment 11.3%" },
    { line:"Marketing",        v:0,     pct:0,    tone:"warn", bench:"25-30%", d:"Ad spend has been zero since August" },
    { line:"Contribution margin", v:33139, pct:66.4, tone:"good", bench:"", d:"Revenue less cost of delivery and marketing", sub:true },
    { line:"OPEX",             v:16973, pct:34.0, tone:"bad",  bench:"~15%", d:"Fixed operating cost, confirmed line by line and closed out 1 October" },
    { line:"Operating profit", v:16166, pct:32.4, tone:"good", bench:"15-20%", d:"Contribution margin less OPEX. Before debt service and distributions", sub:true },
  ],
  breakeven: [
    { l:"Contribution margin", v:"66.43%", d:"Gross margin less card processing and fulfillment. Both scale with revenue, so neither sits in the fixed block" },
    { l:"Fixed cash out a month", v:"$26,454", d:"Fixed overhead $16,973 plus the $9,481 debt payment. No owner salary, because there isn't one" },
    { l:"Break-even revenue", v:"$39,825", d:"Fixed cash out divided by contribution margin" },
    { l:"Running above it", v:"$10,064", d:"Against $49,889 collected in the 30 days to 5 September" },
  ],
  debt: [
    { n:"Buyout note", v:64296, principal:53333, note:"7 of 9 payments left, October cleared. $53,333 of principal and $10,963 of interest still to run", payoff:"May 1, 2027", tone:"bad" },
    { n:"Chase card",  v:23081, principal:23081, note:"$46,700 limit, 49% used, $2,600 a month from the debt bucket. Balance as of 4 September", payoff:"Jun 15, 2027", tone:"warn" },
  ],
  // Two debts, one of each kind, and nothing else. An $80,000 undated obligation carried here
  // through September was the buyout note counted twice. Removed 2 October on DB's confirmation.
  debtNote: {
    pay: 87377, principal: 76414, interest: 10963,
    startPay: 124724, startPrincipal: 124724,
    why: "Two numbers, both real. Still to pay is every dollar that leaves the bank, so it carries the interest the buyout has left to run. Principal is what the balance sheet shows. The gap between them is $10,963 of interest across seven payments.",
  },
  // combined buyout and card balance at each month end, on the schedule and the card plan
  payoffPath: [
    { m:"Oct", v:84776 },{ m:"Nov", v:72770 },{ m:"Dec", v:60837 },{ m:"Jan", v:48977 },
    { m:"Feb", v:37192 },{ m:"Mar", v:25481 },{ m:"Apr", v:13844 },{ m:"May", v:2281 },{ m:"Jun", v:0 },
  ],
  schedule: [
    { d:"Sep 1, 2026", v:11555.56, s:"paid" },{ d:"Oct 1, 2026", v:9481.48, s:"paid" },
    { d:"Nov 1, 2026", v:9407.41, s:"next" },{ d:"Dec 1, 2026", v:9333.34, s:"planned" },
    { d:"Jan 1, 2027", v:9259.26, s:"planned" },{ d:"Feb 1, 2027", v:9185.19, s:"planned" },
    { d:"Mar 1, 2027", v:9111.11, s:"planned" },{ d:"Apr 1, 2027", v:9037.04, s:"planned" },
    { d:"May 1, 2027", v:8962.94, s:"planned" },
  ],
  rails: [
    { n:"ExpiTrans",  gross:26689, fees:1201, res:0,   net:25488, pct:4.50, appr:91.5, cb:0.44, cap:50000, tone:"good" },
    { n:"Deposyt",    gross:19363, fees:871,  res:0,   net:18492, pct:4.50, appr:90.2, cb:0.31, cap:50000, tone:"good" },
    { n:"Kurv / EMS", gross:3837,  fees:173,  res:384, net:3280,  pct:4.50, appr:71.0, cb:0.67, cap:25000, tone:"bad" },
    { n:"Retired rail", gross:0,   fees:0,    res:500, net:0,     pct:0,    appr:0,    cb:0,    cap:0,     tone:"mute" },
  ],

  // Daily contribution margin, Aug 19 to Sep 17. Sums tie to the P&L: 30 days = $46,814 revenue,
  // $17,567 cost of delivery. September to date = $26,528. Sep 17 is today, matching revenue today.
  cmDaily: [
    { d:"Aug 19", w:"Wed", m:8, rev:1620, cod:608, mkt:0 },
    { d:"Aug 20", w:"Thu", m:8, rev:1650, cod:634, mkt:0 },
    { d:"Aug 21", w:"Fri", m:8, rev:1487, cod:540, mkt:0 },
    { d:"Aug 22", w:"Sat", m:8, rev:1351, cod:523, mkt:0 },
    { d:"Aug 23", w:"Sun", m:8, rev:1522, cod:575, mkt:0 },
    { d:"Aug 24", w:"Mon", m:8, rev:1732, cod:631, mkt:0 },
    { d:"Aug 25", w:"Tue", m:8, rev:1614, cod:624, mkt:0 },
    { d:"Aug 26", w:"Wed", m:8, rev:1561, cod:578, mkt:0 },
    { d:"Aug 27", w:"Thu", m:8, rev:1638, cod:606, mkt:0 },
    { d:"Aug 28", w:"Fri", m:8, rev:1546, cod:598, mkt:0 },
    { d:"Aug 29", w:"Sat", m:8, rev:1348, cod:492, mkt:0 },
    { d:"Aug 30", w:"Sun", m:8, rev:1465, cod:552, mkt:0 },
    { d:"Aug 31", w:"Mon", m:8, rev:1752, cod:670, mkt:0 },
    { d:"Sep 1", w:"Tue", m:9, rev:1650, cod:599, mkt:0 },
    { d:"Sep 2", w:"Wed", m:9, rev:1684, cod:646, mkt:0 },
    { d:"Sep 3", w:"Thu", m:9, rev:1503, cod:565, mkt:0 },
    { d:"Sep 4", w:"Fri", m:9, rev:1398, cod:511, mkt:0 },
    { d:"Sep 5", w:"Sat", m:9, rev:1444, cod:559, mkt:0 },
    { d:"Sep 6", w:"Sun", m:9, rev:1518, cod:560, mkt:0 },
    { d:"Sep 7", w:"Mon", m:9, rev:1552, cod:577, mkt:0 },
    { d:"Sep 8", w:"Tue", m:9, rev:1590, cod:613, mkt:0 },
    { d:"Sep 9", w:"Wed", m:9, rev:1671, cod:608, mkt:0 },
    { d:"Sep 10", w:"Thu", m:9, rev:1563, cod:592, mkt:0 },
    { d:"Sep 11", w:"Fri", m:9, rev:1395, cod:531, mkt:0 },
    { d:"Sep 12", w:"Sat", m:9, rev:1389, cod:505, mkt:0 },
    { d:"Sep 13", w:"Sun", m:9, rev:1536, cod:591, mkt:0 },
    { d:"Sep 14", w:"Mon", m:9, rev:1610, cod:602, mkt:0 },
    { d:"Sep 15", w:"Tue", m:9, rev:1555, cod:571, mkt:0 },
    { d:"Sep 16", w:"Wed", m:9, rev:1623, cod:628, mkt:0 },
    { d:"Sep 17", w:"Thu", m:9, rev:1847, cod:678, mkt:0 },
  ],
  // Owner distributions by month. Irregular draws before the Sep 15 cut-over.
  distributions: [
    { m:"Jan", v:4000 },{ m:"Feb", v:3500 },{ m:"Mar", v:6000 },{ m:"Apr", v:2500 },{ m:"May", v:0 },
    { m:"Jun", v:3000 },{ m:"Jul", v:0 },{ m:"Aug", v:1500 },{ m:"Sep", v:0 },
  ],
  // ---------------------------------------------------------------- REVENUE
  revMonthly: [
    { m:"Nov 25", v:64267 },{ m:"Dec 25", v:58900 },{ m:"Jan", v:55400 },{ m:"Feb", v:51200 },
    { m:"Mar", v:49800 },{ m:"Apr", v:47300 },{ m:"May", v:58561 },{ m:"Jun", v:50277 },
    { m:"Jul", v:45535 },{ m:"Aug", v:60243 },{ m:"Sep", v:43171 },
  ],
  channels: [
    { m:"Organic / direct", v:18420, trust:"good" },
    { m:"Email",            v:6890,  trust:"low" },
    { m:"Wholesale",        v:4120,  trust:"mock" },
    { m:"Creators",         v:400,   trust:"low" },
    { m:"Paid social",      v:0,     trust:"good" },
    { m:"Unattributed",     v:12282, trust:"none", tone:"bad" },
  ],
  products: [
    { sku:"Strawberry Mango gummies", cat:"Gummies", status:"live", price:69, cost:8.16, costHigh:8.64, basis:"supplier buildup", margin:88.2, units:319, rev:null, trend:[170,196,241,287,319] },
    { sku:"Espresso dark chocolate",  cat:"Chocolate", status:"live", price:69, cost:11.65, costHigh:11.65, basis:"supplier buildup, 8 pieces", margin:83.1, units:246, rev:null, trend:[98,131,168,208,246] },
    { sku:"Blue Raspberry gummies",   cat:"Gummies", status:"live", price:69, cost:8.16, costHigh:8.64, basis:"supplier buildup", margin:88.2, units:207, rev:null, trend:[109,129,154,181,207] },
    { sku:"Toffee milk chocolate",    cat:"Chocolate", status:"live", price:69, cost:11.65, costHigh:11.65, basis:"supplier buildup, 8 pieces", margin:83.1, units:148, rev:null, trend:[68,86,106,127,148] },
    { sku:"Mint milk chocolate",      cat:"Chocolate", status:"live", price:69, cost:11.65, costHigh:11.65, basis:"supplier buildup, 8 pieces", margin:83.1, units:143, rev:null, trend:[104,114,124,134,143] },
    { sku:"Dubai milk chocolate",     cat:"Chocolate", status:"live", price:69, cost:11.65, costHigh:11.65, basis:"supplier buildup, 8 pieces", margin:83.1, units:135, rev:null, trend:[61,78,97,116,135] },
    { sku:"Wild Cherry gummies",      cat:"Gummies", status:"retired", price:69, cost:8.16, costHigh:8.64, basis:"supplier buildup", margin:88.2, units:100, rev:null, trend:[62,72,82,92,100] },
    { sku:"Love gummies",             cat:"Gummies", status:"gated", price:89, cost:null, costHigh:null, basis:"actives $3.24, build unquoted", margin:null, units:55, rev:null, trend:[14,24,35,45,55] },
    { sku:"Sea Salt dark chocolate",  cat:"Chocolate", status:"waiting", price:69, cost:11.65, costHigh:11.65, basis:"supplier buildup, 8 pieces", margin:83.1, units:0, rev:null, trend:[0,0,0,0,0] },
    { sku:"Microdose capsules",       cat:"Capsules", status:"never made", price:null, cost:9.67, costHigh:10.37, basis:"supplier buildup", margin:null, units:0, rev:null, trend:[0,0,0,0,0] },
  ],
  // Revenue per product is deliberately null. Units come from the warehouse read and revenue from the
  // bank, and the two don't reconcile: 1,353 units in 30 days at the $72.66 average is about $98,000
  // against $49,889 collected. Free and comped product covers roughly a third of it. The rest is open,
  // and it sits on Data Health rather than being smoothed into a product table.
  subs: {
    // 94 active subscriptions against 905 approved customers. The retention curve is cumulative
    // survival from the first bill, measured on the CRM export to 25 September.
    kpi: [
      { label:"Total active subs",  value:"94",     tone:"warn", sub:"10.4% of 905 approved customers" },
      { label:"Attach rate",        value:"10.4%",  tone:"warn", sub:"at checkout, 94 of 905" },
      { label:"Rebill attempts",    value:"261",    tone:"ink",  sub:"206 approved" },
      { label:"Billing rate",       value:"78.9%",  tone:"good", sub:"206 of 261 attempts cleared" },
      { label:"Reach a 2nd bill",   value:"84.0%",  tone:"good", sub:"you lose 16% at the first rebill" },
      { label:"Reach a 3rd bill",   value:"57.5%",  tone:"warn", sub:"then another 32%" },
      { label:"Reach a 4th bill",   value:"35.1%",  tone:"warn", sub:"then another 39%" },
      { label:"Average rebill",     value:"$134.65", tone:"ink", sub:"MRR $5,742, ARR $68,904" },
    ],
    curve: [
      { c:"1st bill", v:100 },{ c:"2nd", v:84.0 },{ c:"3rd", v:57.5 },{ c:"4th", v:35.1 },{ c:"5th", v:12.8 },
    ],
    retry: [
      { a:"Attempt one", v:30 },{ a:"Attempt two", v:0 },{ a:"Attempt three", v:22 },
    ],
    note:"Measured from the CRM export, 23 April to 25 September 2026. A month by month history isn't produced here because the tracking layer was broken from April and about a third of shipments never reached it.",
  },

  // ---------------------------------------------------------------- MARKETING
  ads: {
    kpi: [
      { label:"Blended ROAS", value:"-", sub:"no spend to measure", tone:"mute" },
      { label:"Ad spend · 30d", value:"$0", sub:"paused since August", tone:"mute" },
      { label:"CAC", value:"-", sub:"needs attribution", tone:"mute" },
      { label:"Impressions", value:"0", sub:"all channels", tone:"mute" },
      { label:"CTR", value:"0.00%", sub:"-", tone:"mute" },
      { label:"Planned Q4 budget", value:"$13,125", sub:"35% of sweep", tone:"violet" },
    ],
    accounts: [
      { n:"Meta Business", id:"act_8841203", status:"Paused", spend:0, imp:0, clicks:0, ctr:0, cpc:0, leads:0 },
      { n:"TikTok Ads",    id:"act_5520918", status:"Not connected", spend:0, imp:0, clicks:0, ctr:0, cpc:0, leads:0 },
      { n:"Google Ads",    id:"act_2290471", status:"Not connected", spend:0, imp:0, clicks:0, ctr:0, cpc:0, leads:0 },
    ],
    social: [
      { n:"Instagram", followers:"24.8K", growth:1.9, posts:12, eng:"3.4%", tone:"good" },
      { n:"TikTok",    followers:"11.2K", growth:6.4, posts:18, eng:"5.1%", tone:"good" },
      { n:"YouTube",   followers:"2.1K",  growth:0.4, posts:3,  eng:"1.8%", tone:"warn" },
      { n:"X",         followers:"1.4K",  growth:-0.7, posts:6, eng:"0.9%", tone:"bad" },
    ],
  },

  // ---------------------------------------------------------------- OPS
  inventory: [
    { sku:"Espresso dark chocolate",  cat:"Chocolate", hand:332, vel:246, cover:41,  lead:56, st:"critical", po:1560,  inc:false, note:"Short 101 for Q4. Six to eight weeks on boxes, so the order goes this week" },
    { sku:"Strawberry Mango gummies", cat:"Gummies",   hand:452, vel:319, cover:42,  lead:21, st:"critical", po:6260,  inc:false, note:"Dry 10 November, short 758 for Q4. One run of 1,000 tins covers it with 242 spare" },
    { sku:"Blue Raspberry gummies",   cat:"Gummies",   hand:751, vel:207, cover:109, lead:21, st:"warning",  po:0, inc:false, note:"Short 34 across Q4. Inside the noise, but no buffer into January" },
    { sku:"Dubai milk chocolate",     cat:"Chocolate", hand:216, vel:135, cover:48,  lead:56, st:"warning",  po:1560, inc:false, note:"Covered by 204 on a normal quarter. 500 boxes behind it" },
    { sku:"Mint milk chocolate",      cat:"Chocolate", hand:298, vel:143, cover:63,  lead:56, st:"healthy",  po:1560, inc:false, note:"Covered by 256. 500 boxes behind it" },
    { sku:"Toffee milk chocolate",    cat:"Chocolate", hand:345, vel:148, cover:70,  lead:56, st:"healthy",  po:1560, inc:false, note:"Covered by 284. 500 boxes behind it" },
    { sku:"Love gummies",             cat:"Gummies",   hand:6,   vel:55,  cover:3,   lead:21, st:"warning",  po:0, inc:false, note:"Selling down. Reorder gated on cash flow, and the 12-piece run has never been quoted" },
    { sku:"Wild Cherry gummies",      cat:"Gummies",   hand:40,  vel:100, cover:12,  lead:0,  st:"over",     po:0, inc:false, note:"Retired. No reorder. Pull it from the site when it hits zero" },
    { sku:"Microdose capsules",       cat:"Capsules",  hand:0,   vel:0,   cover:0,   lead:42, st:"critical", po:10000, inc:false, note:"Never produced. $10,000 funds the first run, and the tubes are the long pole at four to five weeks from China" },
  ],
  // The capsule trigger. Not a reorder, a launch, so it is funded rather than reordered.
  trigger: {
    sku:"Microdose capsules", amount:10000, from:"Inventory bucket",
    lead:"Five to six weeks. Four to five on the tubes from China, then a week and a half to two to turn the run around",
    gate:"Two quotes outstanding on the tubes. The order can't be placed until one lands",
    note:"DB set the figure on the 2 October call. At the current sweep the inventory bucket fills $6,576 a month, so the trigger is reached inside two months if nothing else draws on it.",
  },
  production: {
    runs: [],
    rates: [
      { l:"Labor", v:"$25 / hr" },{ l:"Kitchen rent", v:"$2,500 / mo" },
      { l:"Active ingredient", v:"$300 / lb" },{ l:"Delivery", v:"$150 / run" },
      { l:"Kitchen overhead", v:"$1,400 / run" },
    ],
  },
  suppliers: [
    { n:"Overseas packaging", what:"Boxes, wrappers and tins", terms:"Pay up front, plates extra", lead:"6 to 8 weeks", spend:14800, risk:"bad" },
    { n:"LA manufacturer", what:"Gummies and capsules", terms:"100% up front", lead:"3 weeks", spend:49086, risk:"warn" },
    { n:"Own kitchen", what:"All chocolate", terms:"n/a", lead:"Limited by boxes, not the kitchen", spend:26400, risk:"good" },
    { n:"Restaurant Depot, Costco, Amazon", what:"Kitchen inputs", terms:"Consumer retail, no account", lead:"1 day", spend:31200, risk:"bad" },
    { n:"Westfield Prep", what:"Pick, pack, ship and storage", terms:"Monthly invoice, base waived above it", lead:"n/a", spend:41803, risk:"good" },
  ],

  // ---------------------------------------------------------------- GOALS
  goals: [
    { g:"Monthly revenue", now:"$49.9K", target:"$85K", pct:59, tone:"warn", bench:70, note:"Back to the November 2025 run rate, then past it" },
    { g:"Fixed cost ratio", now:"34.0%", target:"15%", pct:44, tone:"bad", bench:100, note:"$16,973 against $49,889. Benchmark for DTC is about 15% of revenue" },
    { g:"Contribution margin", now:"$33.1K", target:"$53K", pct:63, tone:"warn", bench:null, note:"66.4% of revenue. The target is the same margin on the $85K revenue goal" },
    { g:"Chargeback rate", now:"0.42%", target:"under 1%", pct:100, tone:"good", bench:null, note:"Across all rails. Kurv runs highest at 0.67%" },
    { g:"Billing rate", now:"78.9%", target:"90%", pct:88, tone:"warn", bench:85, note:"206 of 261 rebill attempts cleared. The second retry recovers nothing" },
    { g:"Subscription attach", now:"10.4%", target:"25%", pct:42, tone:"bad", bench:30, note:"94 of 905 approved customers. The retention curve is being measured on a tenth of the base" },
    { g:"Days of cover, worst live SKU", now:"41d", target:"56d", pct:73, tone:"bad", bench:60, note:"Espresso, against a six to eight week box lead. Anything under lead time is a stockout waiting" },
    { g:"Debt outstanding", now:"$87.4K", target:"$0", pct:30, tone:"warn", bench:50, note:"Still to pay, principal and interest. Down from $124,724. The buyout clears May 2027 on the schedule" },
  ],

  // ---------------------------------------------------------------- TEAM
  tasks: {
    cols: [
      { k:"blocked", l:"Blocked", tone:"bad", items:[
        { t:"Warehouse system access", who:"DB", p:"High" },
        { t:"Email platform access", who:"DB", p:"High" },
        { t:"Attribution history export", who:"DB", p:"High" },
      ]},
      { k:"queue", l:"Queue", tone:"mute", items:[
        { t:"Move ingredients to wholesale accounts", who:"DB", p:"Med" },
        { t:"Second card application", who:"DB", p:"Med" },
        { t:"Clinic pricing sheet", who:"Sales", p:"Low" },
        { t:"Retention offer copy", who:"Rebekka", p:"Med" },
      ]},
      { k:"doing", l:"In progress", tone:"accent", items:[
        { t:"First-order payment cascade", who:"Victor", p:"High" },
        { t:"Attribution rebuild, 30 day window", who:"Victor", p:"High" },
        { t:"Kitchen ledger rollout", who:"Jose", p:"High" },
        { t:"Product page rebuild", who:"Designer", p:"Med" },
      ]},
      { k:"done", l:"Done", tone:"good", items:[
        { t:"Card data exposure closed", who:"Victor", p:"High" },
        { t:"Security fix list cleared", who:"Victor", p:"High" },
        { t:"Cost base cut by $14,810/mo", who:"DB", p:"High" },
        { t:"Code moved to client ownership", who:"Victor", p:"Med" },
      ]},
    ],
  },
  vault: [
    { n:"Supplier agreements", c:6, tone:"accent", note:"Manufacturer, packaging, 3PL" },
    { n:"Bills of materials", c:8, tone:"violet", note:"Per supplier. The live cost buildup is on Costs & settings" },
    { n:"Processor agreements", c:4, tone:"warn", note:"Includes volume caps and reserve terms" },
    { n:"Entity and formation", c:9, tone:"bad", note:"Restricted" },
    { n:"Insurance", c:3, tone:"info", note:"Product liability, general" },
    { n:"Trademark and IP", c:5, tone:"violet", note:"Filed and pending" },
    { n:"Role documents", c:11, tone:"accent", note:"Nine role documents, metrics by role, role scorecards" },
    { n:"Lab reports and COAs", c:28, tone:"good", note:"Per batch, public facing" },
  ],
  drive: [
    { n:"Financial reconstruction", t:"Spreadsheet", d:"Sep 8", size:"2.4 MB" },
    { n:"Kitchen ledger", t:"Retired", d:"Oct 2", size:"Folded into Costs & settings" },
    { n:"Packaging and manufacturing", t:"Retired", d:"Oct 2", size:"Folded into Costs & settings" },
    { n:"Tech stack and vendors", t:"Spreadsheet", d:"Sep 2", size:"340 KB" },
    { n:"Build plan", t:"Document", d:"Aug 26", size:"1.1 MB" },
    { n:"Role scorecards", t:"Document", d:"Sep 18", size:"88 KB" },
    { n:"Metrics by role", t:"Document", d:"Sep 18", size:"112 KB" },
    { n:"Metrics tracker", t:"Spreadsheet", d:"Sep 18", size:"64 KB" },
    { n:"Roles and responsibilities", t:"Document", d:"Sep 2", size:"96 KB" },
    { n:"Brand assets", t:"Folder", d:"Jul 14", size:"142 MB" },
  ],
  agents: [
    { n:"Support agent", s:"planned", d:"Answers order status, shipping and refund questions from the order platform and the 3PL, escalating anything it can't resolve.", impact:"Halves support load" },
    { n:"Content agent", s:"planned", d:"Drafts product copy, email sequences and social posts against the brand voice and the claims policy.", impact:"Replaces a freelancer" },
    { n:"Inventory agent", s:"planned", d:"Watches days of cover per product and raises a purchase order before anything crosses its lead time.", impact:"Ends stockouts" },
    { n:"Reconciliation agent", s:"planned", d:"Matches processor settlements to bank deposits daily and flags anything that doesn't tie.", impact:"Removes manual close work" },
    { n:"Creator agent", s:"shelved", d:"Managed creator onboarding, link generation and payout calculation.", impact:"Program wound down" },
  ],
  dataHealth: [
    { n:"Mercury",        s:"live",    d:"Operating account and buckets" },
    { n:"BlueBanc",       s:"live",    d:"Settlement account" },
    { n:"Xero",           s:"live",    d:"78 accounts, all coded" },
    { n:"Order platform", s:"live",    d:"Orders, subscriptions, cascade" },
    { n:"Affiliate platform", s:"live", d:"Access received 24 August" },
    { n:"Chase card",     s:"partial", d:"Feed not connected" },
    { n:"Processors",     s:"partial", d:"Two of three self-serve" },
    { n:"Warehouse",      s:"blocked", d:"Access outstanding" },
    { n:"Email platform", s:"blocked", d:"Access outstanding" },
    { n:"Attribution history", s:"blocked", d:"Export outstanding" },
    { n:"Kitchen ledger", s:"waiting", d:"Built, waiting on first run" },
    { n:"Site analytics", s:"partial", d:"Being installed" },
  ],
  reliability: [
    { a:"Cash position",   l:"high",   n:"Reconstructed from bank and card statements" },
    { a:"Fixed costs",     l:"high",   n:"Verified line by line" },
    { a:"Debt schedule",   l:"high",   n:"From the signed agreement" },
    { a:"Revenue by rail", l:"medium", n:"Two of three portals self-serve" },
    { a:"Approval rates",  l:"medium", n:"Gateway reports, not re-measured" },
    { a:"Margin per unit", l:"low",    n:"Placeholder cost on six of ten products" },
    { a:"Inventory cover", l:"low",    n:"Needs warehouse access" },
    { a:"Channel revenue", l:"none",   n:"Attribution broken since April" },
    { a:"Lifetime value",  l:"none",   n:"Needs attribution first" },
  ],
};
