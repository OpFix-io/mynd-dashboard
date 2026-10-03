(function(){

/* ==== data.jsx ==== */
// data.jsx, the data contract. Anchored to real MYND figures where they exist so DB recognizes
// his own business. Everything else is shaped to demonstrate the surface.
// Refreshed 2 October 2026 to the 1 October basis: cash across both banks, the confirmed cost
// base, break-even, the six-product lineup and the repriced 8-piece chocolate unit.

const D = {
  meta: {
    user: "Damon B.",
    role: "Founder / CEO",
    tz: "Los Angeles",
    updated: "11:42 PM"
  },
  ticker: [{
    i: "dollar",
    l: "Revenue today",
    v: "$1,847"
  }, {
    i: "box",
    l: "Orders today",
    v: "14"
  }, {
    i: "pulse",
    l: "Approval rate",
    v: "95.88%",
    tone: "warn"
  }, {
    i: "dollar",
    l: "Cash",
    v: "$68,751"
  }, {
    i: "alert",
    l: "Strawberry Mango",
    v: "42d cover",
    tone: "warn"
  }, {
    i: "rev",
    l: "Billing rate",
    v: "78.9%",
    tone: "good"
  }, {
    i: "clock",
    l: "Next buyout",
    v: "$9,407 · Nov 1"
  }, {
    i: "truck",
    l: "Shipments today",
    v: "11"
  }, {
    i: "dollar",
    l: "Revenue 30d",
    v: "$49,889"
  }, {
    i: "pulse",
    l: "Over break-even",
    v: "$10,064",
    tone: "good"
  }],
  // ---------------------------------------------------------------- BOARDROOM
  unit: [{
    k: "rev",
    label: "Revenue · 30d",
    value: "$49,889",
    delta: 18.5,
    sub: "30 days to 5 Sep, settled",
    tone: "ink",
    help: "Collected across every rail, reconciled to bank settlement. July on the model basis was $42,112.",
    spark: [64267, 58900, 55400, 51200, 49800, 47300, 45100, 42112, 49889]
  }, {
    k: "cm",
    label: "Contribution margin",
    value: "$33,139",
    delta: 6.1,
    sub: "66.4% of revenue",
    tone: "good",
    help: "Revenue less product cost, card processing and fulfillment. Fixed cost excluded. The number the business should orbit daily.",
    spark: [21400, 19800, 17900, 16200, 14840, 28600, 33139]
  }, {
    k: "cash",
    label: "Available cash",
    value: "$68,751",
    delta: 70.4,
    sub: "floor $23,585",
    tone: "good",
    help: "Mercury $62,605 and Bluebanc $6,146, read at source 1 October. Free cash is what sits above the operating floor."
  }, {
    k: "burn",
    label: "Operating profit · 30d",
    value: "+$16,166",
    delta: 4075,
    sub: "was +$387 in July",
    tone: "good",
    help: "Revenue less product cost, processing, fulfillment and fixed operating cost. Before debt service and owner distributions. Operating profit, not net profit."
  }, {
    k: "be",
    label: "Break-even",
    value: "$39,825",
    delta: 0,
    sub: "running $10,064 above it",
    tone: "good",
    help: "Fixed overhead of $16,973 plus the $9,481 debt payment, divided by a 66.43% contribution margin. No owner salary, because there isn't one."
  }, {
    k: "ncac",
    label: "Cost per new customer",
    value: "-",
    sub: "no ad spend to measure",
    tone: "mute",
    help: "Ad spend has been zero since August, so there's no acquisition cost to divide. aMER and ROAS are blank for the same reason."
  }, {
    k: "appr",
    label: "Approval rate",
    value: "95.88%",
    delta: 0,
    sub: "target 99%",
    tone: "warn",
    help: "Share of customers approved once the cascade has run all three rails. Closing the last four points is worth about $14,000 a year."
  }, {
    k: "debt",
    label: "Still to pay",
    value: "$87,377",
    delta: -29.9,
    sub: "next $9,407 Nov 1",
    tone: "ink",
    help: "Every dollar still leaving the bank on debt: $64,296 of remaining buyout payments, principal and interest, plus the $23,081 card balance. Principal alone is $76,414. There is one buyout note and the card, nothing else."
  }],
  funnel: [{
    label: "Sessions",
    v: 18420,
    pct: 100,
    note: "30 days, site analytics still being set up"
  }, {
    label: "Add to cart",
    v: 2210,
    pct: 62,
    note: "12.0% of sessions"
  }, {
    label: "Checkout",
    v: 418,
    pct: 34,
    note: "18.9% of carts"
  }, {
    label: "Paid order",
    v: 223,
    pct: 22,
    note: "July, reconciled to settlement"
  }, {
    label: "Subscription",
    v: 23,
    pct: 9,
    note: "10.4% attach, 94 of 905 customers"
  }, {
    label: "Rebilled 3x",
    v: 13,
    pct: 4,
    note: "57.5% of subscribers reach a third bill"
  }],
  today: [{
    l: "Orders today",
    v: "14"
  }, {
    l: "Revenue today",
    v: "$1,847"
  }, {
    l: "Shipments out",
    v: "11"
  }, {
    l: "Declines today",
    v: "3",
    tone: "warn"
  }, {
    l: "Support tickets",
    v: "6"
  }, {
    l: "Subs canceled",
    v: "2",
    tone: "bad"
  }],
  thisMonth: [{
    l: "Revenue",
    v: "$3,694"
  }, {
    l: "Operating profit",
    v: "$1,197",
    tone: "good"
  }, {
    l: "Orders",
    v: "27"
  }, {
    l: "New subscribers",
    v: "2"
  }, {
    l: "Debt paid",
    v: "$9,481",
    tone: "good"
  }, {
    l: "Distributions",
    v: "$0"
  }],
  attention: [{
    t: "Espresso boxes have to be ordered this week or they miss December. Six to eight week lead",
    tone: "bad"
  }, {
    t: "Strawberry Mango goes dry 10 November and is 758 units short of Q4",
    tone: "bad"
  }, {
    t: "Shipped units imply about twice the revenue the bank received. Not reconciled",
    tone: "bad"
  }, {
    t: "Reorder threshold still reads zero on every SKU",
    tone: "warn"
  }, {
    t: "Chocolate costs $1.40 more a box at eight pieces than the quote priced at six",
    tone: "warn"
  }, {
    t: "Kitchen has logged 0 production runs. Three per flavor turns a range into a number",
    tone: "warn"
  }],
  // ---------------------------------------------------------------- MONEY
  accounts: [{
    n: "Mercury · Operating",
    c: "1000",
    v: 23585,
    role: "Holds the Q4 floor, spills to sweep",
    tone: "accent"
  }, {
    n: "Mercury · Debt svc",
    c: "1060",
    v: 9407,
    role: "Funds the next buyout payment",
    tone: "bad"
  }, {
    n: "Mercury · Above the floor",
    c: "-",
    v: 29613,
    role: "Not yet reported by bucket",
    tone: "mute"
  }, {
    n: "Mercury · Sweep",
    c: "1010",
    v: 0,
    role: "Distributes to buckets daily",
    tone: "info"
  }, {
    n: "Mercury · Marketing",
    c: "1040",
    v: 0,
    role: "35% of sweep",
    tone: "violet"
  }, {
    n: "Mercury · Inventory",
    c: "1030",
    v: 0,
    role: "25% of sweep",
    tone: "good"
  }, {
    n: "Mercury · Taxes",
    c: "1050",
    v: 0,
    role: "20% of sweep",
    tone: "warn"
  }, {
    n: "Mercury · Owner",
    c: "1070",
    v: 0,
    role: "15% of sweep. The only owner comp there is",
    tone: "accent"
  }, {
    n: "Mercury · Reserve",
    c: "1020",
    v: 0,
    role: "5%, caps at $141,754",
    tone: "mute"
  }, {
    n: "Bluebanc · Settlement",
    c: "1080",
    v: 6146,
    role: "Rails land here, sweeps to Mercury",
    tone: "info"
  }],
  cashTrail: [{
    m: "Apr",
    v: 64317
  }, {
    m: "May",
    v: 65504
  }, {
    m: "Jun",
    v: 82956
  }, {
    m: "Jul",
    v: 59962
  }, {
    m: "Aug",
    v: 40347
  }, {
    m: "Sep",
    v: 57370
  }, {
    m: "Oct",
    v: 68751
  }],
  buckets: [{
    n: "Marketing",
    pct: 35,
    target: 9206,
    v: 0,
    tone: "violet"
  }, {
    n: "Inventory",
    pct: 25,
    target: 6576,
    v: 0,
    tone: "good"
  }, {
    n: "Taxes",
    pct: 20,
    target: 5261,
    v: 0,
    tone: "warn"
  }, {
    n: "Owner profit",
    pct: 15,
    target: 3946,
    v: 0,
    tone: "accent"
  }, {
    n: "Reserve",
    pct: 5,
    target: 1315,
    v: 0,
    tone: "info"
  }],
  pl: [{
    line: "Revenue",
    v: 49889,
    pct: 100,
    tone: "ink",
    bench: ""
  }, {
    line: "Cost of delivery",
    v: 16750,
    pct: 33.6,
    tone: "good",
    bench: "~40%",
    d: "Product cost 17.8%, card processing 4.5%, fulfillment 11.3%"
  }, {
    line: "Marketing",
    v: 0,
    pct: 0,
    tone: "warn",
    bench: "25-30%",
    d: "Ad spend has been zero since August"
  }, {
    line: "Contribution margin",
    v: 33139,
    pct: 66.4,
    tone: "good",
    bench: "",
    d: "Revenue less cost of delivery and marketing",
    sub: true
  }, {
    line: "OPEX",
    v: 16973,
    pct: 34.0,
    tone: "bad",
    bench: "~15%",
    d: "Fixed operating cost, confirmed line by line and closed out 1 October"
  }, {
    line: "Operating profit",
    v: 16166,
    pct: 32.4,
    tone: "good",
    bench: "15-20%",
    d: "Contribution margin less OPEX. Before debt service and distributions",
    sub: true
  }],
  breakeven: [{
    l: "Contribution margin",
    v: "66.43%",
    d: "Gross margin less card processing and fulfillment. Both scale with revenue, so neither sits in the fixed block"
  }, {
    l: "Fixed cash out a month",
    v: "$26,454",
    d: "Fixed overhead $16,973 plus the $9,481 debt payment. No owner salary, because there isn't one"
  }, {
    l: "Break-even revenue",
    v: "$39,825",
    d: "Fixed cash out divided by contribution margin"
  }, {
    l: "Running above it",
    v: "$10,064",
    d: "Against $49,889 collected in the 30 days to 5 September"
  }],
  debt: [{
    n: "Buyout note",
    v: 64296,
    principal: 53333,
    note: "7 of 9 payments left, October cleared. $53,333 of principal and $10,963 of interest still to run",
    payoff: "May 1, 2027",
    tone: "bad"
  }, {
    n: "Chase card",
    v: 23081,
    principal: 23081,
    note: "$46,700 limit, 49% used, $2,600 a month from the debt bucket. Balance as of 4 September",
    payoff: "Jun 15, 2027",
    tone: "warn"
  }],
  // Two debts, one of each kind, and nothing else. An $80,000 undated obligation carried here
  // through September was the buyout note counted twice. Removed 2 October on DB's confirmation.
  debtNote: {
    pay: 87377,
    principal: 76414,
    interest: 10963,
    startPay: 124724,
    startPrincipal: 124724,
    why: "Two numbers, both real. Still to pay is every dollar that leaves the bank, so it carries the interest the buyout has left to run. Principal is what the balance sheet shows. The gap between them is $10,963 of interest across seven payments."
  },
  // combined buyout and card balance at each month end, on the schedule and the card plan
  payoffPath: [{
    m: "Oct",
    v: 84776
  }, {
    m: "Nov",
    v: 72770
  }, {
    m: "Dec",
    v: 60837
  }, {
    m: "Jan",
    v: 48977
  }, {
    m: "Feb",
    v: 37192
  }, {
    m: "Mar",
    v: 25481
  }, {
    m: "Apr",
    v: 13844
  }, {
    m: "May",
    v: 2281
  }, {
    m: "Jun",
    v: 0
  }],
  schedule: [{
    d: "Sep 1, 2026",
    v: 11555.56,
    s: "paid"
  }, {
    d: "Oct 1, 2026",
    v: 9481.48,
    s: "paid"
  }, {
    d: "Nov 1, 2026",
    v: 9407.41,
    s: "next"
  }, {
    d: "Dec 1, 2026",
    v: 9333.34,
    s: "planned"
  }, {
    d: "Jan 1, 2027",
    v: 9259.26,
    s: "planned"
  }, {
    d: "Feb 1, 2027",
    v: 9185.19,
    s: "planned"
  }, {
    d: "Mar 1, 2027",
    v: 9111.11,
    s: "planned"
  }, {
    d: "Apr 1, 2027",
    v: 9037.04,
    s: "planned"
  }, {
    d: "May 1, 2027",
    v: 8962.94,
    s: "planned"
  }],
  rails: [{
    n: "ExpiTrans",
    gross: 26689,
    fees: 1201,
    res: 0,
    net: 25488,
    pct: 4.50,
    appr: 91.5,
    cb: 0.44,
    cap: 50000,
    tone: "good"
  }, {
    n: "Deposyt",
    gross: 19363,
    fees: 871,
    res: 0,
    net: 18492,
    pct: 4.50,
    appr: 90.2,
    cb: 0.31,
    cap: 50000,
    tone: "good"
  }, {
    n: "Kurv / EMS",
    gross: 3837,
    fees: 173,
    res: 384,
    net: 3280,
    pct: 4.50,
    appr: 71.0,
    cb: 0.67,
    cap: 25000,
    tone: "bad"
  }, {
    n: "Retired rail",
    gross: 0,
    fees: 0,
    res: 500,
    net: 0,
    pct: 0,
    appr: 0,
    cb: 0,
    cap: 0,
    tone: "mute"
  }],
  // Daily contribution margin, Aug 19 to Sep 17. Sums tie to the P&L: 30 days = $46,814 revenue,
  // $17,567 cost of delivery. September to date = $26,528. Sep 17 is today, matching revenue today.
  cmDaily: [{
    d: "Aug 19",
    w: "Wed",
    m: 8,
    rev: 1620,
    cod: 608,
    mkt: 0
  }, {
    d: "Aug 20",
    w: "Thu",
    m: 8,
    rev: 1650,
    cod: 634,
    mkt: 0
  }, {
    d: "Aug 21",
    w: "Fri",
    m: 8,
    rev: 1487,
    cod: 540,
    mkt: 0
  }, {
    d: "Aug 22",
    w: "Sat",
    m: 8,
    rev: 1351,
    cod: 523,
    mkt: 0
  }, {
    d: "Aug 23",
    w: "Sun",
    m: 8,
    rev: 1522,
    cod: 575,
    mkt: 0
  }, {
    d: "Aug 24",
    w: "Mon",
    m: 8,
    rev: 1732,
    cod: 631,
    mkt: 0
  }, {
    d: "Aug 25",
    w: "Tue",
    m: 8,
    rev: 1614,
    cod: 624,
    mkt: 0
  }, {
    d: "Aug 26",
    w: "Wed",
    m: 8,
    rev: 1561,
    cod: 578,
    mkt: 0
  }, {
    d: "Aug 27",
    w: "Thu",
    m: 8,
    rev: 1638,
    cod: 606,
    mkt: 0
  }, {
    d: "Aug 28",
    w: "Fri",
    m: 8,
    rev: 1546,
    cod: 598,
    mkt: 0
  }, {
    d: "Aug 29",
    w: "Sat",
    m: 8,
    rev: 1348,
    cod: 492,
    mkt: 0
  }, {
    d: "Aug 30",
    w: "Sun",
    m: 8,
    rev: 1465,
    cod: 552,
    mkt: 0
  }, {
    d: "Aug 31",
    w: "Mon",
    m: 8,
    rev: 1752,
    cod: 670,
    mkt: 0
  }, {
    d: "Sep 1",
    w: "Tue",
    m: 9,
    rev: 1650,
    cod: 599,
    mkt: 0
  }, {
    d: "Sep 2",
    w: "Wed",
    m: 9,
    rev: 1684,
    cod: 646,
    mkt: 0
  }, {
    d: "Sep 3",
    w: "Thu",
    m: 9,
    rev: 1503,
    cod: 565,
    mkt: 0
  }, {
    d: "Sep 4",
    w: "Fri",
    m: 9,
    rev: 1398,
    cod: 511,
    mkt: 0
  }, {
    d: "Sep 5",
    w: "Sat",
    m: 9,
    rev: 1444,
    cod: 559,
    mkt: 0
  }, {
    d: "Sep 6",
    w: "Sun",
    m: 9,
    rev: 1518,
    cod: 560,
    mkt: 0
  }, {
    d: "Sep 7",
    w: "Mon",
    m: 9,
    rev: 1552,
    cod: 577,
    mkt: 0
  }, {
    d: "Sep 8",
    w: "Tue",
    m: 9,
    rev: 1590,
    cod: 613,
    mkt: 0
  }, {
    d: "Sep 9",
    w: "Wed",
    m: 9,
    rev: 1671,
    cod: 608,
    mkt: 0
  }, {
    d: "Sep 10",
    w: "Thu",
    m: 9,
    rev: 1563,
    cod: 592,
    mkt: 0
  }, {
    d: "Sep 11",
    w: "Fri",
    m: 9,
    rev: 1395,
    cod: 531,
    mkt: 0
  }, {
    d: "Sep 12",
    w: "Sat",
    m: 9,
    rev: 1389,
    cod: 505,
    mkt: 0
  }, {
    d: "Sep 13",
    w: "Sun",
    m: 9,
    rev: 1536,
    cod: 591,
    mkt: 0
  }, {
    d: "Sep 14",
    w: "Mon",
    m: 9,
    rev: 1610,
    cod: 602,
    mkt: 0
  }, {
    d: "Sep 15",
    w: "Tue",
    m: 9,
    rev: 1555,
    cod: 571,
    mkt: 0
  }, {
    d: "Sep 16",
    w: "Wed",
    m: 9,
    rev: 1623,
    cod: 628,
    mkt: 0
  }, {
    d: "Sep 17",
    w: "Thu",
    m: 9,
    rev: 1847,
    cod: 678,
    mkt: 0
  }],
  // Owner distributions by month. Irregular draws before the Sep 15 cut-over.
  distributions: [{
    m: "Jan",
    v: 4000
  }, {
    m: "Feb",
    v: 3500
  }, {
    m: "Mar",
    v: 6000
  }, {
    m: "Apr",
    v: 2500
  }, {
    m: "May",
    v: 0
  }, {
    m: "Jun",
    v: 3000
  }, {
    m: "Jul",
    v: 0
  }, {
    m: "Aug",
    v: 1500
  }, {
    m: "Sep",
    v: 0
  }],
  // ---------------------------------------------------------------- REVENUE
  revMonthly: [{
    m: "Nov 25",
    v: 64267
  }, {
    m: "Dec 25",
    v: 58900
  }, {
    m: "Jan",
    v: 55400
  }, {
    m: "Feb",
    v: 51200
  }, {
    m: "Mar",
    v: 49800
  }, {
    m: "Apr",
    v: 47300
  }, {
    m: "May",
    v: 58561
  }, {
    m: "Jun",
    v: 50277
  }, {
    m: "Jul",
    v: 45535
  }, {
    m: "Aug",
    v: 60243
  }, {
    m: "Sep",
    v: 43171
  }],
  channels: [{
    m: "Organic / direct",
    v: 18420,
    trust: "good"
  }, {
    m: "Email",
    v: 6890,
    trust: "low"
  }, {
    m: "Wholesale",
    v: 4120,
    trust: "mock"
  }, {
    m: "Creators",
    v: 400,
    trust: "low"
  }, {
    m: "Paid social",
    v: 0,
    trust: "good"
  }, {
    m: "Unattributed",
    v: 12282,
    trust: "none",
    tone: "bad"
  }],
  products: [{
    sku: "Strawberry Mango gummies",
    cat: "Gummies",
    status: "live",
    price: 69,
    cost: 8.16,
    costHigh: 8.64,
    basis: "supplier buildup",
    margin: 88.2,
    units: 319,
    rev: null,
    trend: [170, 196, 241, 287, 319]
  }, {
    sku: "Espresso dark chocolate",
    cat: "Chocolate",
    status: "live",
    price: 69,
    cost: 11.65,
    costHigh: 11.65,
    basis: "supplier buildup, 8 pieces",
    margin: 83.1,
    units: 246,
    rev: null,
    trend: [98, 131, 168, 208, 246]
  }, {
    sku: "Blue Raspberry gummies",
    cat: "Gummies",
    status: "live",
    price: 69,
    cost: 8.16,
    costHigh: 8.64,
    basis: "supplier buildup",
    margin: 88.2,
    units: 207,
    rev: null,
    trend: [109, 129, 154, 181, 207]
  }, {
    sku: "Toffee milk chocolate",
    cat: "Chocolate",
    status: "live",
    price: 69,
    cost: 11.65,
    costHigh: 11.65,
    basis: "supplier buildup, 8 pieces",
    margin: 83.1,
    units: 148,
    rev: null,
    trend: [68, 86, 106, 127, 148]
  }, {
    sku: "Mint milk chocolate",
    cat: "Chocolate",
    status: "live",
    price: 69,
    cost: 11.65,
    costHigh: 11.65,
    basis: "supplier buildup, 8 pieces",
    margin: 83.1,
    units: 143,
    rev: null,
    trend: [104, 114, 124, 134, 143]
  }, {
    sku: "Dubai milk chocolate",
    cat: "Chocolate",
    status: "live",
    price: 69,
    cost: 11.65,
    costHigh: 11.65,
    basis: "supplier buildup, 8 pieces",
    margin: 83.1,
    units: 135,
    rev: null,
    trend: [61, 78, 97, 116, 135]
  }, {
    sku: "Wild Cherry gummies",
    cat: "Gummies",
    status: "retired",
    price: 69,
    cost: 8.16,
    costHigh: 8.64,
    basis: "supplier buildup",
    margin: 88.2,
    units: 100,
    rev: null,
    trend: [62, 72, 82, 92, 100]
  }, {
    sku: "Love gummies",
    cat: "Gummies",
    status: "gated",
    price: 89,
    cost: null,
    costHigh: null,
    basis: "actives $3.24, build unquoted",
    margin: null,
    units: 55,
    rev: null,
    trend: [14, 24, 35, 45, 55]
  }, {
    sku: "Sea Salt dark chocolate",
    cat: "Chocolate",
    status: "waiting",
    price: 69,
    cost: 11.65,
    costHigh: 11.65,
    basis: "supplier buildup, 8 pieces",
    margin: 83.1,
    units: 0,
    rev: null,
    trend: [0, 0, 0, 0, 0]
  }, {
    sku: "Microdose capsules",
    cat: "Capsules",
    status: "never made",
    price: null,
    cost: 9.67,
    costHigh: 10.37,
    basis: "supplier buildup",
    margin: null,
    units: 0,
    rev: null,
    trend: [0, 0, 0, 0, 0]
  }],
  // Revenue per product is deliberately null. Units come from the warehouse read and revenue from the
  // bank, and the two don't reconcile: 1,353 units in 30 days at the $72.66 average is about $98,000
  // against $49,889 collected. Free and comped product covers roughly a third of it. The rest is open,
  // and it sits on Data Health rather than being smoothed into a product table.
  subs: {
    // 94 active subscriptions against 905 approved customers. The retention curve is cumulative
    // survival from the first bill, measured on the CRM export to 25 September.
    kpi: [{
      label: "Total active subs",
      value: "94",
      tone: "warn",
      sub: "10.4% of 905 approved customers"
    }, {
      label: "Attach rate",
      value: "10.4%",
      tone: "warn",
      sub: "at checkout, 94 of 905"
    }, {
      label: "Rebill attempts",
      value: "261",
      tone: "ink",
      sub: "206 approved"
    }, {
      label: "Billing rate",
      value: "78.9%",
      tone: "good",
      sub: "206 of 261 attempts cleared"
    }, {
      label: "Reach a 2nd bill",
      value: "84.0%",
      tone: "good",
      sub: "you lose 16% at the first rebill"
    }, {
      label: "Reach a 3rd bill",
      value: "57.5%",
      tone: "warn",
      sub: "then another 32%"
    }, {
      label: "Reach a 4th bill",
      value: "35.1%",
      tone: "warn",
      sub: "then another 39%"
    }, {
      label: "Average rebill",
      value: "$134.65",
      tone: "ink",
      sub: "MRR $5,742, ARR $68,904"
    }],
    curve: [{
      c: "1st bill",
      v: 100
    }, {
      c: "2nd",
      v: 84.0
    }, {
      c: "3rd",
      v: 57.5
    }, {
      c: "4th",
      v: 35.1
    }, {
      c: "5th",
      v: 12.8
    }],
    retry: [{
      a: "Attempt one",
      v: 30
    }, {
      a: "Attempt two",
      v: 0
    }, {
      a: "Attempt three",
      v: 22
    }],
    note: "Measured from the CRM export, 23 April to 25 September 2026. A month by month history isn't produced here because the tracking layer was broken from April and about a third of shipments never reached it."
  },
  // ---------------------------------------------------------------- MARKETING
  ads: {
    kpi: [{
      label: "Blended ROAS",
      value: "-",
      sub: "no spend to measure",
      tone: "mute"
    }, {
      label: "Ad spend · 30d",
      value: "$0",
      sub: "paused since August",
      tone: "mute"
    }, {
      label: "CAC",
      value: "-",
      sub: "needs attribution",
      tone: "mute"
    }, {
      label: "Impressions",
      value: "0",
      sub: "all channels",
      tone: "mute"
    }, {
      label: "CTR",
      value: "0.00%",
      sub: "-",
      tone: "mute"
    }, {
      label: "Planned Q4 budget",
      value: "$13,125",
      sub: "35% of sweep",
      tone: "violet"
    }],
    accounts: [{
      n: "Meta Business",
      id: "act_8841203",
      status: "Paused",
      spend: 0,
      imp: 0,
      clicks: 0,
      ctr: 0,
      cpc: 0,
      leads: 0
    }, {
      n: "TikTok Ads",
      id: "act_5520918",
      status: "Not connected",
      spend: 0,
      imp: 0,
      clicks: 0,
      ctr: 0,
      cpc: 0,
      leads: 0
    }, {
      n: "Google Ads",
      id: "act_2290471",
      status: "Not connected",
      spend: 0,
      imp: 0,
      clicks: 0,
      ctr: 0,
      cpc: 0,
      leads: 0
    }],
    social: [{
      n: "Instagram",
      followers: "24.8K",
      growth: 1.9,
      posts: 12,
      eng: "3.4%",
      tone: "good"
    }, {
      n: "TikTok",
      followers: "11.2K",
      growth: 6.4,
      posts: 18,
      eng: "5.1%",
      tone: "good"
    }, {
      n: "YouTube",
      followers: "2.1K",
      growth: 0.4,
      posts: 3,
      eng: "1.8%",
      tone: "warn"
    }, {
      n: "X",
      followers: "1.4K",
      growth: -0.7,
      posts: 6,
      eng: "0.9%",
      tone: "bad"
    }]
  },
  // ---------------------------------------------------------------- OPS
  inventory: [{
    sku: "Espresso dark chocolate",
    cat: "Chocolate",
    hand: 332,
    vel: 246,
    cover: 41,
    lead: 56,
    st: "critical",
    po: 1560,
    inc: false,
    note: "Short 101 for Q4. Six to eight weeks on boxes, so the order goes this week"
  }, {
    sku: "Strawberry Mango gummies",
    cat: "Gummies",
    hand: 452,
    vel: 319,
    cover: 42,
    lead: 21,
    st: "critical",
    po: 6260,
    inc: false,
    note: "Dry 10 November, short 758 for Q4. One run of 1,000 tins covers it with 242 spare"
  }, {
    sku: "Blue Raspberry gummies",
    cat: "Gummies",
    hand: 751,
    vel: 207,
    cover: 109,
    lead: 21,
    st: "warning",
    po: 0,
    inc: false,
    note: "Short 34 across Q4. Inside the noise, but no buffer into January"
  }, {
    sku: "Dubai milk chocolate",
    cat: "Chocolate",
    hand: 216,
    vel: 135,
    cover: 48,
    lead: 56,
    st: "warning",
    po: 1560,
    inc: false,
    note: "Covered by 204 on a normal quarter. 500 boxes behind it"
  }, {
    sku: "Mint milk chocolate",
    cat: "Chocolate",
    hand: 298,
    vel: 143,
    cover: 63,
    lead: 56,
    st: "healthy",
    po: 1560,
    inc: false,
    note: "Covered by 256. 500 boxes behind it"
  }, {
    sku: "Toffee milk chocolate",
    cat: "Chocolate",
    hand: 345,
    vel: 148,
    cover: 70,
    lead: 56,
    st: "healthy",
    po: 1560,
    inc: false,
    note: "Covered by 284. 500 boxes behind it"
  }, {
    sku: "Love gummies",
    cat: "Gummies",
    hand: 6,
    vel: 55,
    cover: 3,
    lead: 21,
    st: "warning",
    po: 0,
    inc: false,
    note: "Selling down. Reorder gated on cash flow, and the 12-piece run has never been quoted"
  }, {
    sku: "Wild Cherry gummies",
    cat: "Gummies",
    hand: 40,
    vel: 100,
    cover: 12,
    lead: 0,
    st: "over",
    po: 0,
    inc: false,
    note: "Retired. No reorder. Pull it from the site when it hits zero"
  }, {
    sku: "Microdose capsules",
    cat: "Capsules",
    hand: 0,
    vel: 0,
    cover: 0,
    lead: 42,
    st: "critical",
    po: 10000,
    inc: false,
    note: "Never produced. $10,000 funds the first run, and the tubes are the long pole at four to five weeks from China"
  }],
  // Redline alerts. The reorder point per SKU, where the alert goes, and who handles
  // the supplier message. The warehouse system is the system of record until this is wired.
  alerts: {
    live: false,
    channels: [{
      n: "Email to DB",
      on: true,
      note: "The alert itself. Goes to the inbox he actually reads"
    }, {
      n: "Slack, tagged",
      on: true,
      note: "Same alert in the channel, so it isn't only in one place"
    }, {
      n: "Supplier message",
      on: false,
      note: "Drafted, not sent. WhatsApp for packaging, email for the manufacturer. Somebody reviews it before it goes"
    }, {
      n: "Phone",
      on: false,
      note: "DB's call. He didn't think it was necessary"
    }],
    rows: [{
      sku: "Espresso dark chocolate",
      hand: 332,
      redline: 574,
      lead: 56,
      what: "2,000 boxes, $1,560",
      to: "China, to identify"
    }, {
      sku: "Toffee milk chocolate",
      hand: 345,
      redline: 345,
      lead: 56,
      what: "2,000 boxes, $1,560",
      to: "China, to identify"
    }, {
      sku: "Mint milk chocolate",
      hand: 298,
      redline: 334,
      lead: 56,
      what: "2,000 boxes, $1,560",
      to: "China, to identify"
    }, {
      sku: "Dubai milk chocolate",
      hand: 216,
      redline: 315,
      lead: 56,
      what: "2,000 boxes, $1,560",
      to: "China, to identify"
    }, {
      sku: "Strawberry Mango gummies",
      hand: 452,
      redline: 319,
      lead: 21,
      what: "1,000 tins filled, $6,260",
      to: "LA manufacturer"
    }, {
      sku: "Blue Raspberry gummies",
      hand: 751,
      redline: 207,
      lead: 21,
      what: "1,000 tins filled, $6,260",
      to: "LA manufacturer"
    }],
    note: "Redlines are set at the lead time plus a week of buffer: 70 days of sales on chocolate against a six to eight week box lead, 30 days on gummies against three weeks of production. Nothing fires yet. The threshold field in the warehouse system still reads zero on every SKU, and that's where the alert has to be set for it to be real."
  },
  // The capsule trigger. Not a reorder, a launch, so it is funded rather than reordered.
  trigger: {
    sku: "Microdose capsules",
    amount: 10000,
    from: "Inventory bucket",
    lead: "Five to six weeks. Four to five on the tubes from China, then a week and a half to two to turn the run around",
    gate: "Two quotes outstanding on the tubes. The order can't be placed until one lands",
    note: "DB set the figure on the 2 October call. At the current sweep the inventory bucket fills $6,576 a month, so the trigger is reached inside two months if nothing else draws on it."
  },
  production: {
    runs: [],
    rates: [{
      l: "Labor",
      v: "$25 / hr"
    }, {
      l: "Kitchen rent",
      v: "$2,500 / mo"
    }, {
      l: "Active ingredient",
      v: "$300 / lb"
    }, {
      l: "Delivery",
      v: "$150 / run"
    }, {
      l: "Kitchen overhead",
      v: "$1,400 / run"
    }]
  },
  suppliers: [{
    n: "Overseas packaging",
    what: "Boxes, wrappers and tins",
    terms: "Pay up front, plates extra",
    lead: "6 to 8 weeks",
    spend: 14800,
    risk: "bad"
  }, {
    n: "LA manufacturer",
    what: "Gummies and capsules",
    terms: "100% up front",
    lead: "3 weeks",
    spend: 49086,
    risk: "warn"
  }, {
    n: "Own kitchen",
    what: "All chocolate",
    terms: "n/a",
    lead: "Limited by boxes, not the kitchen",
    spend: 26400,
    risk: "good"
  }, {
    n: "Restaurant Depot, Costco, Amazon",
    what: "Kitchen inputs",
    terms: "Consumer retail, no account",
    lead: "1 day",
    spend: 31200,
    risk: "bad"
  }, {
    n: "Westfield Prep",
    what: "Pick, pack, ship and storage",
    terms: "Monthly invoice, base waived above it",
    lead: "n/a",
    spend: 41803,
    risk: "good"
  }],
  // ---------------------------------------------------------------- GOALS
  goals: [{
    g: "Monthly revenue",
    now: "$49.9K",
    target: "$85K",
    pct: 59,
    tone: "warn",
    bench: 70,
    note: "Back to the November 2025 run rate, then past it"
  }, {
    g: "Fixed cost ratio",
    now: "34.0%",
    target: "15%",
    pct: 44,
    tone: "bad",
    bench: 100,
    note: "$16,973 against $49,889. Benchmark for DTC is about 15% of revenue"
  }, {
    g: "Contribution margin",
    now: "$33.1K",
    target: "$53K",
    pct: 63,
    tone: "warn",
    bench: null,
    note: "66.4% of revenue. The target is the same margin on the $85K revenue goal"
  }, {
    g: "Chargeback rate",
    now: "0.42%",
    target: "under 1%",
    pct: 100,
    tone: "good",
    bench: null,
    note: "Across all rails. Kurv runs highest at 0.67%"
  }, {
    g: "Billing rate",
    now: "78.9%",
    target: "90%",
    pct: 88,
    tone: "warn",
    bench: 85,
    note: "206 of 261 rebill attempts cleared. The second retry recovers nothing"
  }, {
    g: "Subscription attach",
    now: "10.4%",
    target: "25%",
    pct: 42,
    tone: "bad",
    bench: 30,
    note: "94 of 905 approved customers. The retention curve is being measured on a tenth of the base"
  }, {
    g: "Days of cover, worst live SKU",
    now: "41d",
    target: "56d",
    pct: 73,
    tone: "bad",
    bench: 60,
    note: "Espresso, against a six to eight week box lead. Anything under lead time is a stockout waiting"
  }, {
    g: "Debt outstanding",
    now: "$87.4K",
    target: "$0",
    pct: 30,
    tone: "warn",
    bench: 50,
    note: "Still to pay, principal and interest. Down from $124,724. The buyout clears May 2027 on the schedule"
  }],
  // ---------------------------------------------------------------- TEAM
  tasks: {
    cols: [{
      k: "blocked",
      l: "Blocked",
      tone: "bad",
      items: [{
        t: "Warehouse system access",
        who: "DB",
        p: "High"
      }, {
        t: "Email platform access",
        who: "DB",
        p: "High"
      }, {
        t: "Attribution history export",
        who: "DB",
        p: "High"
      }]
    }, {
      k: "queue",
      l: "Queue",
      tone: "mute",
      items: [{
        t: "Move ingredients to wholesale accounts",
        who: "DB",
        p: "Med"
      }, {
        t: "Second card application",
        who: "DB",
        p: "Med"
      }, {
        t: "Clinic pricing sheet",
        who: "Sales",
        p: "Low"
      }, {
        t: "Retention offer copy",
        who: "Rebekka",
        p: "Med"
      }]
    }, {
      k: "doing",
      l: "In progress",
      tone: "accent",
      items: [{
        t: "First-order payment cascade",
        who: "Victor",
        p: "High"
      }, {
        t: "Attribution rebuild, 30 day window",
        who: "Victor",
        p: "High"
      }, {
        t: "Kitchen ledger rollout",
        who: "Jose",
        p: "High"
      }, {
        t: "Product page rebuild",
        who: "Designer",
        p: "Med"
      }]
    }, {
      k: "done",
      l: "Done",
      tone: "good",
      items: [{
        t: "Card data exposure closed",
        who: "Victor",
        p: "High"
      }, {
        t: "Security fix list cleared",
        who: "Victor",
        p: "High"
      }, {
        t: "Cost base cut by $14,810/mo",
        who: "DB",
        p: "High"
      }, {
        t: "Code moved to client ownership",
        who: "Victor",
        p: "Med"
      }]
    }]
  },
  vault: [{
    n: "Supplier agreements",
    c: 6,
    tone: "accent",
    note: "Manufacturer, packaging, 3PL"
  }, {
    n: "Bills of materials",
    c: 8,
    tone: "violet",
    note: "Per supplier. The live cost buildup is on Costs & settings"
  }, {
    n: "Processor agreements",
    c: 4,
    tone: "warn",
    note: "Includes volume caps and reserve terms"
  }, {
    n: "Entity and formation",
    c: 9,
    tone: "bad",
    note: "Restricted"
  }, {
    n: "Insurance",
    c: 3,
    tone: "info",
    note: "Product liability, general"
  }, {
    n: "Trademark and IP",
    c: 5,
    tone: "violet",
    note: "Filed and pending"
  }, {
    n: "Role documents",
    c: 11,
    tone: "accent",
    note: "Nine role documents, metrics by role, role scorecards"
  }, {
    n: "Lab reports and COAs",
    c: 28,
    tone: "good",
    note: "Per batch, public facing"
  }],
  drive: [{
    n: "Financial reconstruction",
    t: "Spreadsheet",
    d: "Sep 8",
    size: "2.4 MB"
  }, {
    n: "Kitchen ledger",
    t: "Retired",
    d: "Oct 2",
    size: "Folded into Costs & settings"
  }, {
    n: "Packaging and manufacturing",
    t: "Retired",
    d: "Oct 2",
    size: "Folded into Costs & settings"
  }, {
    n: "Tech stack and vendors",
    t: "Spreadsheet",
    d: "Sep 2",
    size: "340 KB"
  }, {
    n: "Build plan",
    t: "Document",
    d: "Aug 26",
    size: "1.1 MB"
  }, {
    n: "Role scorecards",
    t: "Document",
    d: "Sep 18",
    size: "88 KB"
  }, {
    n: "Metrics by role",
    t: "Document",
    d: "Sep 18",
    size: "112 KB"
  }, {
    n: "Metrics tracker",
    t: "Spreadsheet",
    d: "Sep 18",
    size: "64 KB"
  }, {
    n: "Roles and responsibilities",
    t: "Document",
    d: "Sep 2",
    size: "96 KB"
  }, {
    n: "Brand assets",
    t: "Folder",
    d: "Jul 14",
    size: "142 MB"
  }],
  agents: [{
    n: "Support agent",
    s: "planned",
    d: "Answers order status, shipping and refund questions from the order platform and the 3PL, escalating anything it can't resolve.",
    impact: "Halves support load"
  }, {
    n: "Content agent",
    s: "planned",
    d: "Drafts product copy, email sequences and social posts against the brand voice and the claims policy.",
    impact: "Replaces a freelancer"
  }, {
    n: "Inventory agent",
    s: "planned",
    d: "Watches days of cover per product and raises a purchase order before anything crosses its lead time.",
    impact: "Ends stockouts"
  }, {
    n: "Reconciliation agent",
    s: "planned",
    d: "Matches processor settlements to bank deposits daily and flags anything that doesn't tie.",
    impact: "Removes manual close work"
  }, {
    n: "Creator agent",
    s: "shelved",
    d: "Managed creator onboarding, link generation and payout calculation.",
    impact: "Program wound down"
  }],
  dataHealth: [{
    n: "Mercury",
    s: "live",
    d: "Operating account and buckets"
  }, {
    n: "BlueBanc",
    s: "live",
    d: "Settlement account"
  }, {
    n: "Xero",
    s: "live",
    d: "78 accounts, all coded"
  }, {
    n: "Order platform",
    s: "live",
    d: "Orders, subscriptions, cascade"
  }, {
    n: "Affiliate platform",
    s: "live",
    d: "Access received 24 August"
  }, {
    n: "Chase card",
    s: "partial",
    d: "Feed not connected"
  }, {
    n: "Processors",
    s: "partial",
    d: "Two of three self-serve"
  }, {
    n: "Warehouse",
    s: "blocked",
    d: "Access outstanding"
  }, {
    n: "Email platform",
    s: "blocked",
    d: "Access outstanding"
  }, {
    n: "Attribution history",
    s: "blocked",
    d: "Export outstanding"
  }, {
    n: "Kitchen ledger",
    s: "waiting",
    d: "Built, waiting on first run"
  }, {
    n: "Site analytics",
    s: "partial",
    d: "Being installed"
  }],
  reliability: [{
    a: "Cash position",
    l: "high",
    n: "Reconstructed from bank and card statements"
  }, {
    a: "Fixed costs",
    l: "high",
    n: "Verified line by line"
  }, {
    a: "Debt schedule",
    l: "high",
    n: "From the signed agreement"
  }, {
    a: "Revenue by rail",
    l: "medium",
    n: "Two of three portals self-serve"
  }, {
    a: "Approval rates",
    l: "medium",
    n: "Gateway reports, not re-measured"
  }, {
    a: "Margin per unit",
    l: "low",
    n: "Placeholder cost on six of ten products"
  }, {
    a: "Inventory cover",
    l: "low",
    n: "Needs warehouse access"
  }, {
    a: "Channel revenue",
    l: "none",
    n: "Attribution broken since April"
  }, {
    a: "Lifetime value",
    l: "none",
    n: "Needs attribution first"
  }]
};

/* ==== data2.jsx ==== */
// data2.jsx - added for the second pass. Marketing performance, LTV by cohort,
// retention, and the customer-centric operations reframe.

const D2 = {
  // ---------------------------------------------------------------- MARKETING
  mkt: {
    note: "Where the ad money goes and what it brings back. Meta carries most of it. Spend is paused today, so this is the shape the surface takes once it turns back on.",
    headline: [{
      label: "Ad spend · 30d",
      value: "$0",
      sub: "paused since August",
      tone: "mute"
    }, {
      label: "Blended ROAS",
      value: "-",
      sub: "no spend to measure",
      tone: "mute",
      help: "Revenue attributed to ads divided by ad spend."
    }, {
      label: "Blended CAC",
      value: "-",
      sub: "needs attribution",
      tone: "mute",
      help: "What it costs to acquire one paying customer, across all paid channels."
    }, {
      label: "CAC ceiling",
      value: "$58",
      sub: "derived from 90-day contribution",
      tone: "warn",
      help: "The most you can pay for a customer and still be profitable inside 90 days."
    }, {
      label: "Planned Q4 budget",
      value: "$13,125",
      sub: "35% of the sweep",
      tone: "violet"
    }, {
      label: "Channels live",
      value: "1 of 4",
      sub: "Meta only",
      tone: "warn"
    }],
    channels: [{
      n: "Meta",
      status: "Paused",
      share: "Primary",
      spend: 0,
      imp: 0,
      clicks: 0,
      ctr: 0,
      cpc: 0,
      cpm: 0,
      conv: 0,
      cpa: 0,
      roas: 0,
      tone: "info",
      note: "Where most of the budget goes. Ad buyer confirmed the data comes out of the box."
    }, {
      n: "Google",
      status: "Not connected",
      share: "Secondary",
      spend: 0,
      imp: 0,
      clicks: 0,
      ctr: 0,
      cpc: 0,
      cpm: 0,
      conv: 0,
      cpa: 0,
      roas: 0,
      tone: "mute",
      note: "Possible. Not committed."
    }, {
      n: "AppLovin",
      status: "Not connected",
      share: "Secondary",
      spend: 0,
      imp: 0,
      clicks: 0,
      ctr: 0,
      cpc: 0,
      cpm: 0,
      conv: 0,
      cpa: 0,
      roas: 0,
      tone: "mute",
      note: "Possible. Not committed."
    }, {
      n: "Organic",
      status: "Live",
      share: "Small",
      spend: 0,
      imp: 0,
      clicks: 0,
      ctr: 0,
      cpc: 0,
      cpm: 0,
      conv: 0,
      cpa: 0,
      roas: 0,
      tone: "good",
      note: "Small percentage of total. No spend against it."
    }],
    // shape only, populates when spend resumes
    trend: [{
      m: "Apr",
      spend: 8400,
      rev: 31200
    }, {
      m: "May",
      spend: 7900,
      rev: 27600
    }, {
      m: "Jun",
      spend: 6200,
      rev: 21400
    }, {
      m: "Jul",
      spend: 3000,
      rev: 11800
    }, {
      m: "Aug",
      spend: 0,
      rev: 0
    }, {
      m: "Sep",
      spend: 0,
      rev: 0
    }],
    creative: [{
      n: "Bundle offer, static",
      spend: 0,
      imp: 0,
      ctr: 0,
      cpa: 0,
      st: "paused"
    }, {
      n: "Single unit, video",
      spend: 0,
      imp: 0,
      ctr: 0,
      cpa: 0,
      st: "paused"
    }, {
      n: "Founder story, UGC",
      spend: 0,
      imp: 0,
      ctr: 0,
      cpa: 0,
      st: "paused"
    }, {
      n: "Subscription offer",
      spend: 0,
      imp: 0,
      ctr: 0,
      cpa: 0,
      st: "draft"
    }]
  },
  // ---------------------------------------------------------------- LTV / CAC CEILING
  ltv: {
    note: "The number that tells you what you can afford to pay for a customer. Contribution based, not revenue based, because at 90% product margin a revenue figure flatters a break-even business.",
    windows: ["First order", "30 days", "90 days", "180 days"],
    // by product category
    byCategory: [{
      n: "Chocolate",
      first: 41.2,
      d30: 58.4,
      d90: 79.1,
      d180: 96.4,
      ceiling: 79,
      profitAt: "First order",
      tone: "good"
    }, {
      n: "Gummies",
      first: 38.8,
      d30: 54.2,
      d90: 71.6,
      d180: 84.2,
      ceiling: 72,
      profitAt: "First order",
      tone: "good"
    }, {
      n: "Capsules",
      first: null,
      d30: null,
      d90: null,
      d180: null,
      ceiling: null,
      profitAt: "Not produced",
      tone: "mute"
    }, {
      n: "Bundle",
      first: 52.6,
      d30: 81.4,
      d90: 118.2,
      d180: 146.8,
      ceiling: 118,
      profitAt: "First order",
      tone: "good"
    }],
    // by coupon / offer
    byCoupon: [{
      n: "No coupon",
      first: 48.1,
      d30: 66.2,
      d90: 88.4,
      d180: 106.2,
      ceiling: 88,
      profitAt: "First order",
      tone: "good"
    }, {
      n: "WELCOME15",
      first: 31.4,
      d30: 49.8,
      d90: 71.2,
      d180: 88.6,
      ceiling: 71,
      profitAt: "First order",
      tone: "good"
    }, {
      n: "SAVE25",
      first: 18.2,
      d30: 34.1,
      d90: 54.8,
      d180: 71.4,
      ceiling: 55,
      profitAt: "30 days",
      tone: "warn"
    }, {
      n: "BOGO",
      first: -4.6,
      d30: 14.2,
      d90: 36.8,
      d180: 52.1,
      ceiling: 37,
      profitAt: "90 days",
      tone: "bad"
    }, {
      n: "FREESHIP",
      first: 39.8,
      d30: 57.1,
      d90: 76.4,
      d180: 92.8,
      ceiling: 76,
      profitAt: "First order",
      tone: "good"
    }],
    cohorts: [{
      c: "Mar 2026",
      n: 318,
      first: 44.2,
      d30: 61.8,
      d90: 82.4,
      d180: 99.1
    }, {
      c: "Apr 2026",
      n: 287,
      first: 42.8,
      d30: 59.4,
      d90: 78.2,
      d180: 94.6
    }, {
      c: "May 2026",
      n: 341,
      first: 45.6,
      d30: 63.1,
      d90: 81.8,
      d180: null
    }, {
      c: "Jun 2026",
      n: 296,
      first: 41.9,
      d30: 57.2,
      d90: 74.6,
      d180: null
    }, {
      c: "Jul 2026",
      n: 264,
      first: 43.4,
      d30: 60.8,
      d90: null,
      d180: null
    }, {
      c: "Aug 2026",
      n: 302,
      first: 46.1,
      d30: null,
      d90: null,
      d180: null
    }]
  },
  // ---------------------------------------------------------------- RETENTION
  retention: {
    note: "How much of the money comes from people who already bought. The cheapest revenue in the business, and the least measured.",
    kpi: [{
      label: "Revenue from existing",
      value: "38.4%",
      sub: "of the 30 day total",
      tone: "warn",
      delta: 2.1,
      help: "Any order from a customer who has bought before."
    }, {
      label: "Revenue from new",
      value: "61.6%",
      sub: "first-time buyers",
      tone: "ink",
      delta: -2.1
    }, {
      label: "Email revenue",
      value: "$6,890",
      sub: "14.7% of total",
      tone: "info",
      delta: 8.4
    }, {
      label: "Referral code usage",
      value: "112",
      sub: "4.2% of orders",
      tone: "warn",
      delta: 14.2
    }, {
      label: "Repeat rate",
      value: "22.8%",
      sub: "bought more than once",
      tone: "warn",
      delta: 1.4
    }, {
      label: "Time to second order",
      value: "41 days",
      sub: "median",
      tone: "ink",
      delta: -6.2
    }],
    split: [{
      m: "Apr",
      existing: 34.1,
      neu: 65.9
    }, {
      m: "May",
      existing: 35.2,
      neu: 64.8
    }, {
      m: "Jun",
      existing: 36.0,
      neu: 64.0
    }, {
      m: "Jul",
      existing: 36.3,
      neu: 63.7
    }, {
      m: "Aug",
      existing: 37.6,
      neu: 62.4
    }, {
      m: "Sep",
      existing: 38.4,
      neu: 61.6
    }],
    emailTrend: [{
      m: "Apr",
      v: 4820
    }, {
      m: "May",
      v: 5240
    }, {
      m: "Jun",
      v: 5910
    }, {
      m: "Jul",
      v: 6120
    }, {
      m: "Aug",
      v: 6350
    }, {
      m: "Sep",
      v: 6890
    }],
    referralTrend: [{
      m: "Apr",
      v: 64
    }, {
      m: "May",
      v: 71
    }, {
      m: "Jun",
      v: 83
    }, {
      m: "Jul",
      v: 91
    }, {
      m: "Aug",
      v: 98
    }, {
      m: "Sep",
      v: 112
    }],
    sources: [{
      m: "Email flows",
      v: 4210,
      tone: "info"
    }, {
      m: "Email campaigns",
      v: 2680,
      tone: "info"
    }, {
      m: "Referral codes",
      v: 3840,
      tone: "violet"
    }, {
      m: "Subscription rebills",
      v: 5120,
      tone: "good"
    }, {
      m: "Direct repeat",
      v: 2110,
      tone: "accent"
    }]
  },
  // ---------------------------------------------------------------- OPS, CUSTOMER CENTRIC
  ops: {
    note: "Things that delight customers and turn into money. Problems live underneath, not on top.",
    kpi: [{
      label: "Order to doorstep",
      value: "4.2 days",
      sub: "median, end to end",
      tone: "good",
      delta: -8.1,
      help: "From the moment they pay to the moment it arrives."
    }, {
      label: "Shipped same day",
      value: "78%",
      sub: "target 90%",
      tone: "warn",
      delta: 4.2
    }, {
      label: "In stock when wanted",
      value: "91%",
      sub: "of attempted orders",
      tone: "warn",
      delta: -2.4,
      help: "Orders that didn't hit an out-of-stock product."
    }, {
      label: "Arrived undamaged",
      value: "98.6%",
      sub: "of delivered orders",
      tone: "good",
      delta: 0.4
    }, {
      label: "Reship rate",
      value: "2.1%",
      sub: "26 of 348 July",
      tone: "warn",
      delta: -0.6
    }, {
      label: "Support response",
      value: "6.4 hrs",
      sub: "target under 4",
      tone: "bad",
      delta: -12.1
    }],
    deliver: [{
      m: "Apr",
      v: 5.1
    }, {
      m: "May",
      v: 4.9
    }, {
      m: "Jun",
      v: 4.7
    }, {
      m: "Jul",
      v: 4.5
    }, {
      m: "Aug",
      v: 4.4
    }, {
      m: "Sep",
      v: 4.2
    }],
    friction: [{
      n: "Out of stock at checkout",
      count: 31,
      cost: 2139,
      tone: "bad",
      fix: "Days of cover alerts before the reorder window"
    }, {
      n: "Late shipment, over 2 days",
      count: 24,
      cost: 0,
      tone: "warn",
      fix: "3PL cutoff time and same-day rules"
    }, {
      n: "Damaged on arrival",
      count: 5,
      cost: 345,
      tone: "warn",
      fix: "Packaging review with the supplier"
    }, {
      n: "Support waited over 24 hrs",
      count: 18,
      cost: 0,
      tone: "bad",
      fix: "First response target and an owner"
    }, {
      n: "Rebill failed silently",
      count: 42,
      cost: 2898,
      tone: "bad",
      fix: "Retry rebuild and card updater"
    }],
    // cost trend moved here from Products & Margin
    costTrend: [{
      n: "Espresso dark chocolate",
      cur: 11.65,
      prev: 10.25,
      basis: "supplier buildup"
    }, {
      n: "Mint milk chocolate",
      cur: 11.65,
      prev: 10.25,
      basis: "supplier buildup"
    }, {
      n: "Toffee milk chocolate",
      cur: 11.65,
      prev: 10.25,
      basis: "supplier buildup"
    }, {
      n: "Dubai milk chocolate",
      cur: 11.65,
      prev: 10.25,
      basis: "supplier buildup"
    }, {
      n: "Strawberry Mango gummies",
      cur: 8.16,
      prev: 8.16,
      basis: "supplier buildup"
    }, {
      n: "Blue Raspberry gummies",
      cur: 8.16,
      prev: 8.16,
      basis: "supplier buildup"
    }, {
      n: "Microdose capsules",
      cur: 10.37,
      prev: 8.37,
      basis: "supplier buildup"
    }, {
      n: "Love gummies",
      cur: null,
      prev: null,
      basis: "unquoted"
    }],
    costSeries: [{
      m: "Apr",
      v: 7.21
    }, {
      m: "May",
      v: 7.08
    }, {
      m: "Jun",
      v: 6.97
    }, {
      m: "Jul",
      v: 6.94
    }, {
      m: "Aug",
      v: 6.88
    }, {
      m: "Sep",
      v: 6.84
    }]
  },
  // ---------------------------------------------------------------- FULFILLMENT (moved)
  fulfillment: {
    shipments: {
      total: 348,
      onPlatform: 223,
      invisible: 125,
      pct: 35.9
    },
    breakdown: [{
      m: "Wholesale",
      v: 48,
      tone: "info"
    }, {
      m: "Samples",
      v: 34,
      tone: "warn"
    }, {
      m: "Reships",
      v: 26,
      tone: "warn"
    }, {
      m: "Comps",
      v: 17,
      tone: "bad"
    }]
  }
};

/* ==== data3.jsx ==== */
// data3.jsx - folded from DB's growth intelligence reference.
// Data model taken, layout ours.

const D3 = {
  defs: {
    netRev: "Net revenue = sales less discounts less refunds plus shipping, excluding tax.",
    profit: "Contribution profit. Fixed overhead excluded.",
    sep: "MER and aMER are blended and unattributed. ROAS is per channel and attributed. Kept deliberately separate."
  },
  // ---------------------------------------------------------------- LIVE BLOCK
  live: {
    day: "Thursday, Sep 17",
    elapsed: 81,
    head: [{
      label: "Total ad spend",
      value: "$4,411",
      delta: -5.0,
      sub: "vs pace",
      tone: "ink",
      good: true,
      help: "Spend so far today across every paid channel."
    }, {
      label: "New customer orders",
      value: "123",
      delta: -6.0,
      sub: "vs pace",
      tone: "ink",
      help: "First-time buyers only. Returning orders are excluded."
    }, {
      label: "New customer revenue",
      value: "$8,019",
      delta: -5.9,
      sub: "vs pace",
      tone: "ink",
      help: "Net revenue from first-time buyers today."
    }, {
      label: "aMER",
      value: "1.82x",
      sub: "new customer rev / spend",
      tone: "good",
      help: "Acquisition MER. New customer revenue divided by total ad spend. The number that says whether acquisition pays."
    }, {
      label: "MER",
      value: "3.87x",
      sub: "total rev / spend",
      tone: "good",
      help: "Blended and unattributed. All revenue divided by all spend."
    }, {
      label: "Blended nCAC",
      value: "$35.86",
      sub: "spend / new order",
      tone: "warn",
      help: "What one new customer costs today, blended across channels."
    }],
    channels: [{
      n: "Meta",
      spend: 2034,
      rev: 6283,
      roas: 3.09,
      tone: "info"
    }, {
      n: "Google",
      spend: 1346,
      rev: 4255,
      roas: 3.16,
      tone: "warn"
    }, {
      n: "AppLovin",
      spend: 1031,
      rev: 2500,
      roas: 2.43,
      tone: "violet"
    }, {
      n: "Organic",
      spend: null,
      rev: 4029,
      roas: null,
      tone: "mute",
      note: "revenue only"
    }],
    metrics: [{
      label: "% new customer revenue",
      value: "47.0%",
      help: "Share of today's revenue from first-time buyers."
    }, {
      label: "NAOV",
      value: "$65.19",
      help: "New customer average order value."
    }, {
      label: "Total ROAS",
      value: "3.87x"
    }, {
      label: "Total orders",
      value: "217"
    }, {
      label: "New revenue",
      value: "$8,019"
    }, {
      label: "Returning revenue",
      value: "$9,048"
    }]
  },
  // ---------------------------------------------------------------- DAILY TRACKER
  daily: {
    rows: [{
      d: "Sep 1",
      w: "Tue",
      spend: 7342,
      dS: null,
      ord: 220,
      dO: null,
      nc: 14980,
      amer: 2.04,
      mer: 3.69,
      nNew: 220,
      $new: 14980,
      nRet: 147,
      $ret: 12099,
      tot: 367,
      ncrev: 55.3,
      naov: 68.09,
      ncac: 33.37,
      roas: 3.05,
      rev: 27079,
      gm: 18033,
      profit: 6904
    }, {
      d: "Sep 2",
      w: "Wed",
      spend: 6507,
      dS: -11.4,
      ord: 176,
      dO: -20.0,
      nc: 13252,
      amer: 2.04,
      mer: 3.51,
      nNew: 176,
      $new: 13252,
      nRet: 97,
      $ret: 9603,
      tot: 273,
      ncrev: 58.0,
      naov: 75.30,
      ncac: 36.97,
      roas: 2.82,
      rev: 22855,
      gm: 15343,
      profit: 5783
    }, {
      d: "Sep 3",
      w: "Thu",
      spend: 6565,
      dS: 0.9,
      ord: 151,
      dO: -14.2,
      nc: 11401,
      amer: 1.74,
      mer: 3.92,
      nNew: 151,
      $new: 11401,
      nRet: 173,
      $ret: 14350,
      tot: 324,
      ncrev: 44.3,
      naov: 75.50,
      ncac: 43.48,
      roas: 3.39,
      rev: 25751,
      gm: 16797,
      profit: 6562
    }, {
      d: "Sep 4",
      w: "Fri",
      spend: 7297,
      dS: 11.2,
      ord: 215,
      dO: 42.4,
      nc: 14920,
      amer: 2.04,
      mer: 4.13,
      nNew: 215,
      $new: 14920,
      nRet: 152,
      $ret: 15181,
      tot: 367,
      ncrev: 49.6,
      naov: 69.40,
      ncac: 33.94,
      roas: 3.45,
      rev: 30101,
      gm: 20118,
      profit: 8836
    }, {
      d: "Sep 5",
      w: "Sat",
      spend: 4610,
      dS: -36.8,
      ord: 111,
      dO: -48.4,
      nc: 8014,
      amer: 1.74,
      mer: 3.61,
      nNew: 111,
      $new: 8014,
      nRet: 87,
      $ret: 8650,
      tot: 198,
      ncrev: 48.1,
      naov: 72.20,
      ncac: 41.53,
      roas: 2.86,
      rev: 16664,
      gm: 10498,
      profit: 3751
    }, {
      d: "Sep 6",
      w: "Sun",
      spend: 5429,
      dS: 17.8,
      ord: 136,
      dO: 22.5,
      nc: 9365,
      amer: 1.72,
      mer: 3.61,
      nNew: 136,
      $new: 9365,
      nRet: 126,
      $ret: 10224,
      tot: 262,
      ncrev: 47.8,
      naov: 68.86,
      ncac: 39.92,
      roas: 2.96,
      rev: 19589,
      gm: 12715,
      profit: 4478
    }, {
      d: "Sep 7",
      w: "Mon",
      spend: 6186,
      dS: 13.9,
      ord: 194,
      dO: 42.6,
      nc: 12644,
      amer: 2.04,
      mer: 3.56,
      nNew: 194,
      $new: 12644,
      nRet: 110,
      $ret: 9403,
      tot: 304,
      ncrev: 57.4,
      naov: 65.18,
      ncac: 31.89,
      roas: 3.04,
      rev: 22047,
      gm: 13786,
      profit: 4736
    }, {
      d: "Sep 8",
      w: "Tue",
      spend: 7625,
      dS: 23.3,
      ord: 216,
      dO: 11.3,
      nc: 13429,
      amer: 1.76,
      mer: 3.65,
      nNew: 216,
      $new: 13429,
      nRet: 181,
      $ret: 14425,
      tot: 397,
      ncrev: 48.2,
      naov: 62.17,
      ncac: 35.30,
      roas: 3.01,
      rev: 27854,
      gm: 18041,
      profit: 6570
    }, {
      d: "Sep 9",
      w: "Wed",
      spend: 6900,
      dS: -9.5,
      ord: 226,
      dO: 4.6,
      nc: 15516,
      amer: 2.25,
      mer: 3.98,
      nNew: 226,
      $new: 15516,
      nRet: 153,
      $ret: 11977,
      tot: 379,
      ncrev: 56.4,
      naov: 68.65,
      ncac: 30.53,
      roas: 3.16,
      rev: 27493,
      gm: 17130,
      profit: 6538
    }, {
      d: "Sep 10",
      w: "Thu",
      spend: 6077,
      dS: -11.9,
      ord: 156,
      dO: -31.0,
      nc: 11762,
      amer: 1.94,
      mer: 3.89,
      nNew: 156,
      $new: 11762,
      nRet: 135,
      $ret: 11873,
      tot: 291,
      ncrev: 49.8,
      naov: 75.40,
      ncac: 38.96,
      roas: 3.13,
      rev: 23635,
      gm: 15517,
      profit: 6106
    }, {
      d: "Sep 11",
      w: "Fri",
      spend: 6723,
      dS: 10.6,
      ord: 202,
      dO: 29.5,
      nc: 12820,
      amer: 1.91,
      mer: 3.57,
      nNew: 202,
      $new: 12820,
      nRet: 134,
      $ret: 11183,
      tot: 336,
      ncrev: 53.4,
      naov: 63.47,
      ncac: 33.28,
      roas: 2.89,
      rev: 24003,
      gm: 15745,
      profit: 5815
    }, {
      d: "Sep 12",
      w: "Sat",
      spend: 5411,
      dS: -19.5,
      ord: 126,
      dO: -37.6,
      nc: 9684,
      amer: 1.79,
      mer: 3.75,
      nNew: 126,
      $new: 9684,
      nRet: 128,
      $ret: 10601,
      tot: 254,
      ncrev: 47.7,
      naov: 76.86,
      ncac: 42.94,
      roas: 3.10,
      rev: 20285,
      gm: 12828,
      profit: 4539
    }, {
      d: "Sep 13",
      w: "Sun",
      spend: 4856,
      dS: -10.3,
      ord: 121,
      dO: -4.0,
      nc: 8865,
      amer: 1.83,
      mer: 4.04,
      nNew: 121,
      $new: 8865,
      nRet: 112,
      $ret: 10742,
      tot: 233,
      ncrev: 45.2,
      naov: 73.26,
      ncac: 40.13,
      roas: 3.51,
      rev: 19607,
      gm: 13020,
      profit: 5814
    }, {
      d: "Sep 14",
      w: "Mon",
      spend: 6243,
      dS: 28.6,
      ord: 156,
      dO: 28.9,
      nc: 11978,
      amer: 1.92,
      mer: 3.40,
      nNew: 156,
      $new: 11978,
      nRet: 99,
      $ret: 9251,
      tot: 255,
      ncrev: 56.4,
      naov: 76.78,
      ncac: 40.02,
      roas: 2.87,
      rev: 21229,
      gm: 13664,
      profit: 4711
    }, {
      d: "Sep 15",
      w: "Tue",
      spend: 5746,
      dS: -8.0,
      ord: 162,
      dO: 3.8,
      nc: 10550,
      amer: 1.84,
      mer: 3.98,
      nNew: 162,
      $new: 10550,
      nRet: 128,
      $ret: 12327,
      tot: 290,
      ncrev: 46.1,
      naov: 65.12,
      ncac: 35.47,
      roas: 3.03,
      rev: 22877,
      gm: 15355,
      profit: 6433
    }],
    totals: {
      spend: 93517,
      ord: 2568,
      nc: 179180,
      amer: 1.92,
      mer: 3.75,
      nNew: 2568,
      $new: 179180,
      nRet: 1962,
      $ret: 171889,
      tot: 4530,
      ncrev: 51.0,
      naov: 69.77,
      ncac: 36.42,
      roas: 3.09,
      rev: 351069,
      gm: 228588,
      profit: 87574
    },
    forecast: {
      spend: 187034,
      ord: 5136,
      nc: 358360,
      amer: 1.92,
      mer: 3.75,
      nNew: 5136,
      $new: 358360,
      nRet: 3924,
      $ret: 343778,
      tot: 9060,
      ncrev: 51.0,
      naov: 69.77,
      ncac: 36.42,
      roas: 3.09,
      rev: 702138,
      gm: 457177,
      profit: 175149
    },
    target: {
      spend: 210000,
      ord: 5600,
      nc: 470000,
      $new: 470000,
      rev: 1020000,
      profit: 250000
    },
    reqDay: {
      spend: 7766,
      ord: 202,
      nc: 19388,
      $new: 19388,
      rev: 44595,
      profit: 10828
    },
    channels: [{
      n: "Meta",
      spend: 47465,
      fcst: 50049,
      rev: 143111,
      roas: 3.02,
      tone: "info"
    }, {
      n: "Google",
      spend: 28496,
      fcst: 30008,
      rev: 106201,
      roas: 3.73,
      tone: "warn"
    }, {
      n: "AppLovin",
      spend: 17556,
      fcst: 18167,
      rev: 39258,
      roas: 2.24,
      tone: "violet"
    }, {
      n: "Organic",
      spend: null,
      fcst: null,
      rev: 62499,
      roas: null,
      tone: "mute"
    }]
  },
  // ---------------------------------------------------------------- COHORT LTV
  cohort: {
    def: "A cohort is the product and coupon on a customer's first order, never reassigned. LTV is cumulative net revenue per acquired customer, by days since that customer's own first order.",
    basis: "LTV basis is net revenue only, one curve per cohort. Windows are rolling days from each customer's first order at 30, 60, 90, 180 and 365, and include every later order across any product, not just repeats of the cohort product.",
    marks: ["Day 0", "M1", "M2", "M3", "M6", "M12"],
    byProduct: {
      head: [{
        label: "Blended first-order AOV",
        value: "$35.84",
        sub: "20,700 customers"
      }, {
        label: "Blended M12 LTV",
        value: "$161.97",
        sub: "4.52x first-order value"
      }, {
        label: "Top M12 cohort",
        value: "Capsules",
        sub: "$289.30 per customer",
        tone: "warn"
      }, {
        label: "Best LTV multiple",
        value: "6.55x",
        sub: "Capsules",
        tone: "good"
      }],
      rows: [{
        n: "Dubai Chocolate",
        c: 5240,
        aov: 42.50,
        m1: 54.10,
        m2: 74.60,
        m3: 92.30,
        m6: 128.70,
        m12: 171.40,
        x: 4.03,
        tone: "info"
      }, {
        n: "Capsules",
        c: 2890,
        aov: 44.20,
        m1: 62.40,
        m2: 96.10,
        m3: 128.70,
        m6: 198.50,
        m12: 289.30,
        x: 6.55,
        tone: "warn"
      }, {
        n: "Strawberry Mango Gummies",
        c: 3050,
        aov: 27.40,
        m1: 36.20,
        m2: 52.10,
        m3: 66.40,
        m6: 95.30,
        m12: 132.60,
        x: 4.84,
        tone: "good"
      }, {
        n: "Blue Raspberry Gummies",
        c: 2470,
        aov: 26.10,
        m1: 34.00,
        m2: 49.20,
        m3: 62.50,
        m6: 88.10,
        m12: 121.70,
        x: 4.66,
        tone: "violet"
      }, {
        n: "Espresso Chocolate",
        c: 1640,
        aov: 35.60,
        m1: 47.30,
        m2: 68.40,
        m3: 87.20,
        m6: 126.90,
        m12: 172.10,
        x: 4.83,
        tone: "bad"
      }, {
        n: "Toffee Chocolate",
        c: 1780,
        aov: 33.80,
        m1: 43.10,
        m2: 60.20,
        m3: 74.60,
        m6: 101.30,
        m12: 134.80,
        x: 3.99,
        tone: "good"
      }, {
        n: "Mint Chocolate",
        c: 2110,
        aov: 31.20,
        m1: 40.40,
        m2: 56.30,
        m3: 69.10,
        m6: 96.20,
        m12: 128.50,
        x: 4.12,
        tone: "accent"
      }, {
        n: "Love Gummies",
        c: 1520,
        aov: 38.90,
        m1: 43.20,
        m2: 51.40,
        m3: 57.60,
        m6: 68.30,
        m12: 79.10,
        x: 2.03,
        tone: "bad"
      }]
    },
    byCoupon: {
      head: [{
        label: "Blended first-order AOV",
        value: "$57.79",
        sub: "12,640 customers"
      }, {
        label: "Blended M12 LTV",
        value: "$190.32",
        sub: "3.29x first-order value"
      }, {
        label: "Top M12 cohort",
        value: "No coupon",
        sub: "$231.80 per customer",
        tone: "info"
      }, {
        label: "Best LTV multiple",
        value: "3.58x",
        sub: "WELCOME15",
        tone: "good"
      }],
      rows: [{
        n: "No coupon",
        c: 5210,
        aov: 68.70,
        m1: 82.40,
        m2: 108.90,
        m3: 131.20,
        m6: 176.50,
        m12: 231.80,
        x: 3.37,
        tone: "info"
      }, {
        n: "WELCOME15",
        c: 4380,
        aov: 54.10,
        m1: 66.80,
        m2: 89.70,
        m3: 108.40,
        m6: 148.20,
        m12: 193.60,
        x: 3.58,
        tone: "warn"
      }, {
        n: "SAVE25",
        c: 1930,
        aov: 47.30,
        m1: 55.20,
        m2: 71.60,
        m3: 84.90,
        m6: 106.10,
        m12: 128.40,
        x: 2.71,
        tone: "good"
      }, {
        n: "BOGO Launch",
        c: 1120,
        aov: 39.60,
        m1: 44.80,
        m2: 56.30,
        m3: 64.70,
        m6: 78.90,
        m12: 91.20,
        x: 2.30,
        tone: "violet"
      }]
    },
    aovByCategory: [{
      n: "Chocolates",
      aov: 37.80,
      c: 10770,
      x: 4.16,
      tone: "info"
    }, {
      n: "Gummies",
      aov: 26.82,
      c: 5520,
      x: 4.76,
      tone: "warn"
    }, {
      n: "Love Gummies",
      aov: 38.90,
      c: 1520,
      x: 2.03,
      tone: "good"
    }, {
      n: "Capsules",
      aov: 44.20,
      c: 2890,
      x: 6.55,
      tone: "violet"
    }]
  }
};

/* ==== data4.jsx ==== */
// data4.jsx, sub-tab views. Modeled, shaped to demonstrate the surface.
// Cash forecast, transactions, reorders, stock movements, boardroom insights
// and sync status.

const D4 = {
  // ---------------------------------------------------------------- CASH FORECAST
  // Thirteen weeks from the current balance. Inflows net of fees and reserve.
  forecast: {
    open: 68751,
    floor: 23585,
    weeks: [{
      w: "Sep 21",
      inn: 10840,
      fixed: 3240,
      variable: 1510,
      debt: 0
    }, {
      w: "Sep 28",
      inn: 10620,
      fixed: 3240,
      variable: 1480,
      debt: 9481,
      note: "Buyout Oct 1"
    }, {
      w: "Oct 5",
      inn: 11050,
      fixed: 3310,
      variable: 1540,
      debt: 0
    }, {
      w: "Oct 12",
      inn: 11230,
      fixed: 3240,
      variable: 9800,
      debt: 0,
      note: "Dubai Chocolate reorder, first half"
    }, {
      w: "Oct 19",
      inn: 11410,
      fixed: 3240,
      variable: 1590,
      debt: 0
    }, {
      w: "Oct 26",
      inn: 11380,
      fixed: 3240,
      variable: 1580,
      debt: 9407,
      note: "Buyout Nov 1"
    }, {
      w: "Nov 2",
      inn: 11720,
      fixed: 3310,
      variable: 1630,
      debt: 0
    }, {
      w: "Nov 9",
      inn: 11940,
      fixed: 3240,
      variable: 9800,
      debt: 0,
      note: "Dubai Chocolate reorder, second half"
    }, {
      w: "Nov 16",
      inn: 12260,
      fixed: 3240,
      variable: 1710,
      debt: 0
    }, {
      w: "Nov 23",
      inn: 13480,
      fixed: 3240,
      variable: 1880,
      debt: 0,
      note: "Holiday week"
    }, {
      w: "Nov 30",
      inn: 12910,
      fixed: 3310,
      variable: 1800,
      debt: 9333,
      note: "Buyout Dec 1"
    }, {
      w: "Dec 7",
      inn: 12640,
      fixed: 3240,
      variable: 1760,
      debt: 0
    }, {
      w: "Dec 14",
      inn: 12420,
      fixed: 3240,
      variable: 1730,
      debt: 0
    }]
  },
  // ---------------------------------------------------------------- TRANSACTIONS
  transactions: [{
    d: "Sep 17",
    desc: "Rail A settlement",
    acct: "BlueBanc · Settlement",
    cat: "Sales",
    amt: 1624,
    st: "matched"
  }, {
    d: "Sep 17",
    desc: "Sweep to operating",
    acct: "Mercury · Operating",
    cat: "Transfer",
    amt: 4800,
    st: "matched"
  }, {
    d: "Sep 16",
    desc: "Rail B settlement",
    acct: "BlueBanc · Settlement",
    cat: "Sales",
    amt: 1138,
    st: "matched"
  }, {
    d: "Sep 16",
    desc: "3PL monthly invoice",
    acct: "Mercury · Operating",
    cat: "Fulfillment",
    amt: -1890,
    st: "matched"
  }, {
    d: "Sep 16",
    desc: "Email platform",
    acct: "Chase card",
    cat: "Software",
    amt: -350,
    st: "review"
  }, {
    d: "Sep 15",
    desc: "Rail C settlement",
    acct: "BlueBanc · Settlement",
    cat: "Sales",
    amt: 612,
    st: "matched"
  }, {
    d: "Sep 15",
    desc: "Rail C reserve hold",
    acct: "BlueBanc · Settlement",
    cat: "Processing",
    amt: -61,
    st: "matched"
  }, {
    d: "Sep 15",
    desc: "Payroll",
    acct: "Mercury · Operating",
    cat: "Payroll",
    amt: -4210,
    st: "matched"
  }, {
    d: "Sep 14",
    desc: "Packaging supplier",
    acct: "Chase card",
    cat: "Cost of goods",
    amt: -1480,
    st: "matched"
  }, {
    d: "Sep 14",
    desc: "Refund, order 48213",
    acct: "BlueBanc · Settlement",
    cat: "Refunds",
    amt: -69,
    st: "matched"
  }, {
    d: "Sep 13",
    desc: "Ingredient run",
    acct: "Chase card",
    cat: "Cost of goods",
    amt: -2340,
    st: "review"
  }, {
    d: "Sep 12",
    desc: "Kitchen rent",
    acct: "Mercury · Operating",
    cat: "Rent",
    amt: -2200,
    st: "matched"
  }, {
    d: "Sep 12",
    desc: "Wholesale invoice paid",
    acct: "Mercury · Operating",
    cat: "Sales",
    amt: 1380,
    st: "matched"
  }, {
    d: "Sep 11",
    desc: "Unknown debit",
    acct: "BlueBanc · Settlement",
    cat: "Uncategorized",
    amt: -214,
    st: "open"
  }],
  // ---------------------------------------------------------------- REORDERS
  // cost comes from D.inventory[].po so both tabs agree; qty = cost / unit
  reorders: [{
    sku: "Espresso dark chocolate",
    cover: 41,
    lead: 56,
    qty: 2000,
    unit: 0.78,
    supplier: "Overseas packaging",
    st: "late",
    note: "Boxes, not bars. Short 101 for Q4 and the lead is six to eight weeks."
  }, {
    sku: "Strawberry Mango gummies",
    cover: 42,
    lead: 21,
    qty: 1000,
    unit: 6.26,
    supplier: "LA manufacturer",
    st: "late",
    note: "A fill, not a build. You already own the tins, so this is the manufacturer's charge to fill them."
  }, {
    sku: "Mint, Toffee and Dubai boxes",
    cover: 63,
    lead: 56,
    qty: 6000,
    unit: 0.78,
    supplier: "Overseas packaging",
    st: "soon",
    note: "Covered on a normal Q4. This is promo insurance, not a shortfall."
  }, {
    sku: "Love gummies",
    cover: 3,
    lead: 21,
    qty: null,
    unit: null,
    supplier: "LA manufacturer",
    st: "blocked",
    note: "Reorder gated on cash flow, and a 12-piece cardbox run has never been quoted."
  }, {
    sku: "Blue Raspberry gummies",
    cover: 109,
    lead: 21,
    qty: 0,
    unit: 6.26,
    supplier: "LA manufacturer",
    st: "ok"
  }, {
    sku: "Microdose capsules",
    cover: 0,
    lead: 42,
    qty: 1000,
    unit: 10.00,
    supplier: "China, to identify",
    st: "blocked",
    note: "A launch, not a reorder. $10,000 funds the first run and two tube quotes are still outstanding."
  }],
  // ---------------------------------------------------------------- MOVEMENTS
  movements: [{
    d: "Sep 17",
    sku: "Dubai Chocolate",
    type: "Shipped",
    qty: -38,
    where: "3PL",
    logged: true
  }, {
    d: "Sep 17",
    sku: "Toffee milk chocolate",
    type: "Shipped",
    qty: -24,
    where: "3PL",
    logged: true
  }, {
    d: "Sep 16",
    sku: "Strawberry Mango Gummies",
    type: "Shipped",
    qty: -31,
    where: "3PL",
    logged: true
  }, {
    d: "Sep 16",
    sku: "Dubai Chocolate",
    type: "Wholesale",
    qty: -48,
    where: "3PL",
    logged: false
  }, {
    d: "Sep 15",
    sku: "Mint Chocolate",
    type: "Sample",
    qty: -12,
    where: "Kitchen",
    logged: false
  }, {
    d: "Sep 15",
    sku: "Blue Raspberry Gummies",
    type: "Received",
    qty: 1200,
    where: "3PL",
    logged: true
  }, {
    d: "Sep 14",
    sku: "Dubai Chocolate",
    type: "Reship",
    qty: -6,
    where: "3PL",
    logged: false
  }, {
    d: "Sep 13",
    sku: "Toffee Chocolate",
    type: "Comp",
    qty: -4,
    where: "Kitchen",
    logged: false
  }, {
    d: "Sep 12",
    sku: "Mint milk chocolate",
    type: "Received",
    qty: 1180,
    where: "3PL",
    logged: true
  }, {
    d: "Sep 12",
    sku: "Dubai milk chocolate",
    type: "Adjustment",
    qty: -40,
    where: "3PL",
    logged: true,
    note: "Count variance"
  }, {
    d: "Sep 11",
    sku: "Espresso Chocolate",
    type: "Shipped",
    qty: -19,
    where: "3PL",
    logged: true
  }, {
    d: "Sep 10",
    sku: "Strawberry Mango Gummies",
    type: "Sample",
    qty: -20,
    where: "3PL",
    logged: false
  }],
  // ---------------------------------------------------------------- INSIGHTS
  insights: [{
    tone: "bad",
    title: "Retention is the leak, not acquisition",
    num: "30 to 3",
    sub: "subscriptions to third rebill",
    why: "You pay full price for every customer and keep about one in ten past the third rebill. More traffic makes that number bigger, not better.",
    go: "subs",
    cta: "Subscriptions"
  }, {
    tone: "bad",
    title: "Dubai Chocolate runs out before a reorder can land",
    num: "8 of 21",
    sub: "days of cover against lead time",
    why: "Your best seller stocks out in about two weeks unless the run is already moving. The reorder costs more than the free cash above the floor.",
    go: "inventory",
    cta: "Inventory"
  }, {
    tone: "warn",
    title: "The basket shrank, the volume didn't",
    num: "$195 to $121",
    sub: "revenue per shipment since November",
    why: "Shipments held flat while revenue fell a third. That's a basket and mix problem, and it has a different fix from a demand problem.",
    go: "revenue",
    cta: "Revenue"
  }, {
    tone: "warn",
    title: "Fixed costs are double the benchmark",
    num: "34% vs 15%",
    sub: "of revenue",
    why: "About $9,500 a month of gap. It's the largest lever left on the cost side and it doesn't depend on selling more.",
    go: "pl",
    cta: "Profit and loss"
  }, {
    tone: "warn",
    title: "Declines cost more than they look",
    num: "95.88%",
    sub: "approval against a 99% target",
    why: "The last four points are about $14,000 a year of orders customers already tried to pay for.",
    go: "rails",
    cta: "Payment rails"
  }, {
    tone: "good",
    title: "Rebills are recovering",
    num: "27% to 78.9%",
    sub: "billing rate, July to September",
    why: "Credentials are restored. The retry rebuild closes most of the rest before any retention offer needs to run.",
    go: "subs",
    cta: "Subscriptions"
  }],
  // ---------------------------------------------------------------- SYNC STATUS
  sync: [{
    n: "Mercury",
    last: "2 min ago",
    every: "15 min",
    s: "live"
  }, {
    n: "BlueBanc",
    last: "2 min ago",
    every: "15 min",
    s: "live"
  }, {
    n: "Xero",
    last: "1 hr ago",
    every: "hourly",
    s: "live"
  }, {
    n: "Order platform",
    last: "4 min ago",
    every: "5 min",
    s: "live"
  }, {
    n: "Affiliate platform",
    last: "12 min ago",
    every: "15 min",
    s: "live"
  }, {
    n: "Chase card",
    last: "Sep 5",
    every: "manual",
    s: "partial"
  }, {
    n: "Processors",
    last: "6 hr ago",
    every: "daily",
    s: "partial"
  }, {
    n: "Warehouse",
    last: "Never",
    every: "hourly",
    s: "blocked"
  }, {
    n: "Email platform",
    last: "Never",
    every: "hourly",
    s: "blocked"
  }, {
    n: "Attribution history",
    last: "Never",
    every: "once",
    s: "blocked"
  }, {
    n: "Kitchen ledger",
    last: "Never",
    every: "per run",
    s: "waiting"
  }, {
    n: "Site analytics",
    last: "3 hr ago",
    every: "hourly",
    s: "partial"
  }]
};

/* ==== data5.jsx ==== */
// data5.jsx, the team layer. Seats, scorecards and the weekly score log.
// Folded from the MYND role documents, Metrics by role, Role scorecards and
// the Metrics tracker, September 18, 2026. Every seat is scored on every
// metric it's held to, not just the primary one. Targets, cadence, sources and
// status logic match the Metrics tracker. Sample history is modeled.

const WEEKS = ["Sep 21", "Sep 28", "Oct 5", "Oct 12", "Oct 19", "Oct 26", "Nov 2", "Nov 9", "Nov 16", "Nov 23", "Nov 30", "Dec 7", "Dec 14", "Dec 21", "Dec 28", "Jan 4", "Jan 11", "Jan 18", "Jan 25", "Feb 1", "Feb 8", "Feb 15", "Feb 22", "Mar 1", "Mar 8", "Mar 15"];

// Seat-level context. measure and need describe the primary number.
// unit on metrics: "n" count, "h" hours, "pct" percent, "usd" dollars, "rate" units per dollar, "yes" 1 or 0
const SEATS = [{
  id: "founder",
  seat: "Founder and Owner",
  short: "Founder",
  who: "DB",
  reports: null,
  line: "Set direction, hold the relationships only an owner can hold, and get out of the way of everything else.",
  manages: "Direction, money movement, processors, outside advisors",
  not: "The day to day. That's the COO.",
  measure: "Measurable",
  need: "Decision log, already running",
  doc: "09 Founder and Owner"
}, {
  id: "coo",
  seat: "Chief Operating Officer",
  short: "COO",
  who: "Open",
  open: true,
  reports: "founder",
  line: "Run the day to day so the business works without the owner in the middle of every task.",
  manages: "Suppliers and manufacturers, the warehouse, day to day coordination",
  not: "Recipes, code or brand direction.",
  measure: "Needs 30 days",
  need: "Somebody in the seat, then 30 days of history",
  doc: "01 Chief Operating Officer"
}, {
  id: "content",
  seat: "Content and Brand Lead",
  short: "Content and Brand",
  who: "Rebekka",
  reports: "founder",
  line: "Own the brand and make the outside teams work as one.",
  manages: "The email and SMS agency, the creator VA, brand review",
  not: "What gets built or when. Paid advertising.",
  measure: "Needs attribution",
  need: "Channel revenue, blocked until attribution is rebuilt",
  doc: "02 Content and Brand Lead"
}, {
  id: "dev",
  seat: "Developer",
  short: "Developer",
  who: "Victor",
  reports: "founder",
  line: "Ship the features that let customers do more for themselves and let the business earn more per customer.",
  manages: "The codebase and the three repositories",
  not: "Brand, copy or what the offer is. Takes work only from the owner.",
  measure: "Needs roadmap",
  need: "A written roadmap to ship against",
  doc: "03 Developer"
}, {
  id: "support",
  seat: "Customer Support",
  short: "Support",
  who: "S.J.",
  reports: "founder",
  moving: "coo",
  line: "Get customer problems resolved fast, and make sure nothing sits waiting.",
  manages: "The support inbox and every open customer issue",
  not: "Refund policy, pricing or anything that changes the offer.",
  measure: "Needs build",
  need: "Resolution timestamps out of the support tool",
  doc: "04 Customer Support"
}, {
  id: "wholesale",
  seat: "Wholesale and Clinic Sales",
  short: "Wholesale",
  who: "Clinic channel",
  reports: "founder",
  line: "Open and hold wholesale accounts, so revenue stops depending only on direct consumers.",
  manages: "The wholesale pipeline and every account in it",
  not: "Pricing, terms, or placing orders with the warehouse.",
  measure: "Measurable",
  need: "Activity log, already running",
  doc: "05 Wholesale and Clinic Sales"
}, {
  id: "kitchen",
  seat: "Kitchen and Production",
  short: "Kitchen",
  who: "Jose",
  reports: "founder",
  moving: "coo",
  line: "Make the product, on schedule, at a cost the business can measure.",
  manages: "The kitchen, the production schedule, ingredient ordering for a run",
  not: "What gets made or how much. That comes from the reorder plan.",
  measure: "Needs three runs",
  need: "Logged runs per product",
  doc: "06 Kitchen and Production"
}, {
  id: "warehouse",
  seat: "Fulfillment and the Warehouse",
  short: "Warehouse",
  who: "Owned by the COO",
  reports: "coo",
  relationship: true,
  line: "The warehouse ships what customers order, accurately and on time, and the numbers prove it.",
  manages: "A relationship, not a person. The COO owns it. The owner handles anything financial.",
  not: "Customer communication or what gets reordered.",
  measure: "Needs access",
  need: "Order and inventory accuracy from their system",
  doc: "07 Fulfillment and the Warehouse"
}, {
  id: "ea",
  seat: "Executive Assistant",
  short: "Assistant",
  who: "Assistant",
  reports: "founder",
  line: "Take the small work off the owner, then turn it into something that runs without either of you.",
  manages: "The owner's inbox, vendor admin, whatever is being handed over",
  not: "Banking, payments or spend decisions.",
  measure: "Needs build",
  need: "A simple count of what moved each week",
  doc: "08 Executive Assistant"
}];

// Every metric each seat is held to. Generated from the same spec as the Metrics tracker.
// kind: max (at or under), min (at or over), up (rising), down (flat or falling), yes (1 yes, 0 no)
const METRICS = [{
  seat: "founder",
  id: "f_dec",
  name: "Decisions routed through him each week",
  primary: true,
  kind: "max",
  v: 5,
  target: "Under 5",
  unit: "n",
  cadence: "Weekly",
  source: "Decision log"
}, {
  seat: "founder",
  id: "f_xfer",
  name: "Functions transferred and holding",
  primary: false,
  kind: "up",
  v: null,
  target: "Rising",
  unit: "n",
  cadence: "Monthly",
  source: "Transfer log"
}, {
  seat: "founder",
  id: "f_growth",
  name: "Share of week on growth",
  primary: false,
  kind: "up",
  v: null,
  target: "Rising from 10%",
  unit: "pct",
  cadence: "Monthly",
  source: "Self report"
}, {
  seat: "coo",
  id: "c_dec",
  name: "Operational decisions closed without the owner",
  primary: true,
  kind: "up",
  v: null,
  target: "Rising. Baseline at 30 days",
  unit: "n",
  cadence: "Weekly",
  source: "Decision log"
}, {
  seat: "coo",
  id: "c_lead",
  name: "Products under lead time",
  primary: false,
  kind: "max",
  v: 0,
  target: "Zero",
  unit: "n",
  cadence: "Weekly",
  source: "Inventory system"
}, {
  seat: "coo",
  id: "c_reorder",
  name: "Reorders placed inside lead time",
  primary: false,
  kind: "min",
  v: 100,
  target: "100%",
  unit: "pct",
  cadence: "Monthly",
  source: "Purchase log"
}, {
  seat: "coo",
  id: "c_late",
  name: "Liabilities paid late",
  primary: false,
  kind: "max",
  v: 0,
  target: "Zero",
  unit: "n",
  cadence: "Monthly",
  source: "Accounting"
}, {
  seat: "content",
  id: "b_rev",
  name: "Revenue from organic social",
  primary: true,
  kind: "up",
  v: null,
  target: "Profitable",
  unit: "usd",
  cadence: "Monthly",
  source: "Attribution, once rebuilt"
}, {
  seat: "content",
  id: "b_review",
  name: "Published without brand review",
  primary: false,
  kind: "max",
  v: 0,
  target: "Zero",
  unit: "n",
  cadence: "Weekly",
  source: "Publishing log"
}, {
  seat: "content",
  id: "b_mismatch",
  name: "Site and email mismatches",
  primary: false,
  kind: "max",
  v: 0,
  target: "Zero",
  unit: "n",
  cadence: "Monthly",
  source: "Incident note"
}, {
  seat: "content",
  id: "b_va",
  name: "Creator VA system documented",
  primary: false,
  kind: "yes",
  v: 1,
  target: "Yes",
  unit: "yes",
  cadence: "Monthly",
  source: "The document"
}, {
  seat: "dev",
  id: "d_road",
  name: "Roadmap items shipped each week",
  primary: true,
  kind: "up",
  v: null,
  target: "Per roadmap",
  unit: "n",
  cadence: "Weekly",
  source: "Roadmap"
}, {
  seat: "dev",
  id: "d_bugs",
  name: "Customer-blocking bugs open over a day",
  primary: false,
  kind: "max",
  v: 0,
  target: "Zero",
  unit: "n",
  cadence: "Daily",
  source: "Issue list"
}, {
  seat: "dev",
  id: "d_handover",
  name: "Handover document current",
  primary: false,
  kind: "yes",
  v: 1,
  target: "Yes",
  unit: "yes",
  cadence: "Monthly",
  source: "The document"
}, {
  seat: "support",
  id: "s_resolve",
  name: "Time to resolve, median hours",
  primary: true,
  kind: "max",
  v: 24,
  target: "Under 24 hours",
  unit: "h",
  cadence: "Weekly",
  source: "Support tool"
}, {
  seat: "support",
  id: "s_reply",
  name: "Time to first reply, median hours",
  primary: false,
  kind: "max",
  v: 24,
  target: "Under 1 business day, scored at 24 hours",
  unit: "h",
  cadence: "Weekly",
  source: "Support tool"
}, {
  seat: "support",
  id: "s_open",
  name: "Issues open past a day",
  primary: false,
  kind: "max",
  v: 0,
  target: "Zero",
  unit: "n",
  cadence: "Daily",
  source: "Support tool"
}, {
  seat: "support",
  id: "s_repeat",
  name: "Repeat questions turned into written answers",
  primary: false,
  kind: "up",
  v: null,
  target: "Rising",
  unit: "n",
  cadence: "Monthly",
  source: "Site content"
}, {
  seat: "wholesale",
  id: "w_out",
  name: "Outbound activity per day",
  primary: true,
  kind: "min",
  v: 10,
  target: "10 or more a day",
  unit: "n",
  cadence: "Daily",
  source: "Activity log"
}, {
  seat: "wholesale",
  id: "w_inbound",
  name: "Inbound answered same day",
  primary: false,
  kind: "min",
  v: 100,
  target: "100%",
  unit: "pct",
  cadence: "Weekly",
  source: "Inbox"
}, {
  seat: "wholesale",
  id: "w_opened",
  name: "Accounts opened",
  primary: false,
  kind: "up",
  v: null,
  target: "Rising",
  unit: "n",
  cadence: "Monthly",
  source: "Order records"
}, {
  seat: "wholesale",
  id: "w_reorder",
  name: "Accounts reordering on pattern",
  primary: false,
  kind: "up",
  v: null,
  target: "Rising",
  unit: "pct",
  cadence: "Monthly",
  source: "Order records"
}, {
  seat: "kitchen",
  id: "k_output",
  name: "Output per dollar",
  primary: true,
  kind: "up",
  v: null,
  target: "Measured, then rising",
  unit: "rate",
  cadence: "Per run",
  source: "Run log"
}, {
  seat: "kitchen",
  id: "k_logged",
  name: "Runs logged with all three fields",
  primary: false,
  kind: "min",
  v: 100,
  target: "100%",
  unit: "pct",
  cadence: "Monthly",
  source: "Run log"
}, {
  seat: "kitchen",
  id: "k_sched",
  name: "Runs completed on schedule",
  primary: false,
  kind: "min",
  v: 100,
  target: "100%",
  unit: "pct",
  cadence: "Monthly",
  source: "Production schedule"
}, {
  seat: "kitchen",
  id: "k_costed",
  name: "Products with a measured cost",
  primary: false,
  kind: "min",
  v: 10,
  target: "All 10",
  unit: "n",
  cadence: "Monthly",
  source: "Run log"
}, {
  seat: "warehouse",
  id: "h_order",
  name: "Order accuracy",
  primary: true,
  kind: "min",
  v: 99.5,
  target: "99.5% or better",
  unit: "pct",
  cadence: "Monthly",
  source: "Warehouse system"
}, {
  seat: "warehouse",
  id: "h_inv",
  name: "Inventory accuracy",
  primary: false,
  kind: "min",
  v: 98,
  target: "98 to 99%",
  unit: "pct",
  cadence: "Monthly",
  source: "Warehouse system"
}, {
  seat: "warehouse",
  id: "h_freight",
  name: "Freight as a share of revenue",
  primary: false,
  kind: "down",
  v: null,
  target: "Flat or falling",
  unit: "pct",
  cadence: "Monthly",
  source: "Warehouse invoices"
}, {
  seat: "warehouse",
  id: "h_unrec",
  name: "Orders that never reached the platform",
  primary: false,
  kind: "max",
  v: 0,
  target: "Zero",
  unit: "n",
  cadence: "Monthly",
  source: "Reconciliation"
}, {
  seat: "ea",
  id: "e_tasks",
  name: "Tasks taken off the owner each week",
  primary: true,
  kind: "up",
  v: null,
  target: "Rising",
  unit: "n",
  cadence: "Weekly",
  source: "Transfer log"
}, {
  seat: "ea",
  id: "e_doc",
  name: "Handed-over tasks with a written version",
  primary: false,
  kind: "min",
  v: 100,
  target: "100%",
  unit: "pct",
  cadence: "Monthly",
  source: "Task notes"
}, {
  seat: "ea",
  id: "e_cred",
  name: "Credential list current",
  primary: false,
  kind: "yes",
  v: 1,
  target: "Yes",
  unit: "yes",
  cadence: "Monthly",
  source: "The list"
}];

// Modeled twelve weeks per metric. Gaps are real states: not built yet, or read monthly or per run.
const SAMPLE_LOG = {
  f_dec: [14, 14, 13, 12, 12, 11, 10, 9, 9, 8, 7, 7],
  f_xfer: [null, null, 1, null, null, null, 2, null, null, null, 3, null],
  f_growth: [null, null, 10, null, null, null, 14, null, null, null, 18, null],
  c_dec: [3, 5, 6, 8, 9, 11, 12, 14, 15, 17, 18, 20],
  c_lead: [3, 3, 2, 2, 3, 2, 2, 1, 2, 2, 2, 2],
  c_reorder: [null, null, 50, null, null, null, 67, null, null, null, 75, null],
  c_late: [null, null, 1, null, null, null, 0, null, null, null, 0, null],
  b_rev: [null, null, null, null, null, null, 1240, null, null, null, 1610, null],
  b_review: [2, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1],
  b_mismatch: [null, null, 1, null, null, null, 0, null, null, null, 0, null],
  b_va: [null, null, 0, null, null, null, 0, null, null, null, 0, null],
  d_road: [null, null, 2, 3, 1, 3, 4, 3, 2, 4, 3, 4],
  d_bugs: [1, 0, 0, 2, 0, 0, 1, 0, 0, 0, 0, 0],
  d_handover: [null, null, 0, null, null, null, 0, null, null, null, 1, null],
  s_resolve: [null, null, 31, 28, 26, 22, 20, 19, 21, 18, 17, 16],
  s_reply: [null, null, 20, 18, 16, 15, 14, 15, 14, 13, 14, 14],
  s_open: [null, null, 4, 3, 3, 2, 2, 3, 2, 2, 2, 2],
  s_repeat: [null, null, 2, null, null, null, 4, null, null, null, 6, null],
  w_out: [10, 9, 11, 12, 8, 10, 11, 12, 13, 12, 14, 13],
  w_inbound: [100, 100, 0, 100, 100, 100, 0, 100, 100, 0, 100, 100],
  w_opened: [null, null, 0, null, null, null, 1, null, null, null, 2, null],
  w_reorder: [null, null, null, null, null, null, 50, null, null, null, 50, null],
  k_output: [null, 0.52, null, 0.55, null, 0.54, null, 0.58, null, 0.61, null, 0.6],
  k_logged: [null, null, 50, null, null, null, 67, null, null, null, 83, null],
  k_sched: [null, null, 100, null, null, null, 100, null, null, null, 50, null],
  k_costed: [null, null, 1, null, null, null, 3, null, null, null, 3, null],
  h_order: [null, null, null, null, null, null, 99.1, null, null, null, 99.6, null],
  h_inv: [null, null, null, null, null, null, 97.2, null, null, null, 98.4, null],
  h_freight: [null, null, null, null, null, null, 11.8, null, null, null, 11.2, null],
  h_unrec: [null, null, null, null, null, null, 9, null, null, null, 6, null],
  e_tasks: [4, 6, 5, 7, 8, 8, 9, 11, 10, 12, 12, 13],
  e_doc: [null, null, 50, null, null, null, 60, null, null, null, 70, null],
  e_cred: [null, null, 1, null, null, null, 1, null, null, null, 1, null]
};

// What moves off the owner, in order, and where each one is in the three-step
// transfer: watch him do it, do it with him watching, do it alone.
const TRANSFERS = [{
  f: "Reordering product",
  stage: "First",
  to: "COO",
  step: 2
}, {
  f: "Tracking every consumable",
  stage: "First",
  to: "COO",
  step: 1
}, {
  f: "Supplier coordination",
  stage: "First",
  to: "COO",
  step: 1
}, {
  f: "Invoicing and paying liabilities",
  stage: "Next",
  to: "COO",
  step: 0
}, {
  f: "Manufacturer runs and their problems",
  stage: "Next",
  to: "COO",
  step: 0
}, {
  f: "Lab testing and what comes back",
  stage: "Next",
  to: "COO",
  step: 0
}, {
  f: "Reorders and wholesale orders with the warehouse",
  stage: "Next",
  to: "COO",
  step: 0
}, {
  f: "Wholesale inquiries from the site",
  stage: "Next",
  to: "Wholesale",
  step: 0
}, {
  f: "Vendor communication",
  stage: "Held",
  to: "Owner, for control",
  step: null
}];
const TRANSFER_STEPS = ["Not started", "Watched him do it", "Done with him watching", "Done alone, written"];
const OWNER = {
  only: ["Move money", "Pay the card", "Communicate with the payment processors and the broker", "Communicate with outside advisors"],
  choice: ["Packaging and brand design", "Deal structure", "Setting up anything new, before it runs"],
  quote: "Nothing really. Everything can be hired for."
};

/* ==== data6.jsx ==== */
// data6.jsx, the cost layer. Extracted from MYND_Packaging_and_Manufacturing.xlsx on 2 October 2026,
// which this page retires. Figures are the workbook's own, read from the file rather than retyped.
// Tables carry their workbook label, header and rows so the fold-in is faithful and auditable.

const COST = {
  "asOf": "1 October 2026",
  "source": "Source: supplier workbook MYND_PKG_MFG, read 1 October 2026, and the MYND kitchen ledger built 22 August 2026, folded in 1 October. Product lineup, packaging counts and the kitchen rent correction from DB, 30 September and 1 October 2026. Nothing on any tab is a formula-free typed figure except Inputs, the two logs and Ledger.",
  "kpi": [{
    "k": "gtin",
    "label": "Gummy tin, landed",
    "value": "$8.16",
    "sub": "at the minimum run",
    "tone": "ink",
    "help": "Everything it costs to put a sellable tin on the shelf. Falls to $7.81 at five times the run."
  }, {
    "k": "ginv",
    "label": "Gummy tin, invoiced",
    "value": "$6.14",
    "sub": "what the manufacturer bills",
    "tone": "info",
    "help": "Landed cost less the tin, wrapper and lab test, which you buy separately. A batch wire divides down to this."
  }, {
    "k": "gmar",
    "label": "Gummy margin at $69",
    "value": "88.2%",
    "sub": "on the hybrid build",
    "tone": "good",
    "help": "Retail price less landed cost, over retail price."
  }, {
    "k": "cbox",
    "label": "Chocolate box, landed",
    "value": "$11.65",
    "sub": "extract-only recipe",
    "tone": "warn",
    "help": "Eight pieces, confirmed by DB. The supplier quote priced six, so the actives and wrapper lines are repriced here. Up $1.40 from the 6-piece figure."
  }, {
    "k": "chyb",
    "label": "Chocolate box, hybrid",
    "value": "$10.54",
    "sub": "fruit carries half the dose",
    "tone": "warn",
    "help": "Both recipes are costed. Fruit carries half the dose at a fraction of extract's price a gram, which is $1.11 a box cheaper."
  }, {
    "k": "cmar",
    "label": "Chocolate margin at $69",
    "value": "83.1%",
    "sub": "extract-only, 84.7% hybrid",
    "tone": "warn",
    "help": "Down about 2 points from the 6-piece costing. Four of six live products sit on this line."
  }, {
    "k": "cap",
    "label": "Capsule bottle, landed",
    "value": "$10.37",
    "sub": "never produced",
    "tone": "mute",
    "help": "The supplier Total read $8.37, which left out $1.50 of bottle and $0.50 of packing labor."
  }, {
    "k": "kov",
    "label": "Kitchen overhead a run",
    "value": "$1,400",
    "sub": "rent and one delivery",
    "tone": "violet",
    "help": "Rent over runs a month plus one delivery. About $0.93 a box at a 1,500-box run."
  }],
  "sheets": {
    "Inputs": {
      "title": "Inputs",
      "sub": "The only tab you type in. Yellow cells feed every calculation in this workbook. Each one carries its source.",
      "blocks": [{
        "kind": "table",
        "label": "Product build",
        "head": ["Spec", "Gummy tin", "Chocolate box", "Capsule bottle", "Source and note"],
        "rows": [{
          "c": ["Pieces a unit", 8, 8, 30, "Confirmed by DB. Chocolate is 8, which the supplier quote priced as 6, so the actives and wrapper lines are repriced here"]
        }, {
          "c": ["Weight a piece, grams", 4.5, 5, 0.7, "Supplier quote. Capsule is 700 mg of fill"]
        }, {
          "c": ["Target actives a piece, grams", 0.00275, 0.005, 0, "Supplier quote. Capsules dose by ingredient, not by extract"]
        }, {
          "c": ["Retail price a unit", 69, 69, "not set", "MYND price list. Capsules not priced yet"]
        }],
        "notes": [],
        "fmt": ["txt", "num", "num", "num", "txt"]
      }, {
        "kind": "table",
        "label": "Actives, potency",
        "head": ["Input", "Gummies", "Chocolate", null, "Source and note"],
        "rows": [{
          "c": ["Extract potency", 0.044, 0.043, null, "Supplier assay. 44 and 43 mg a gram"]
        }, {
          "c": ["Temperature haircut", 0.2, 0, null, "Gummies lose 20% of actives to cook temperature. Chocolate isn't cooked that hot"]
        }, {
          "c": ["Fruit potency", 0.009, 0.009, null, "Supplier assay, 9 mg a gram"]
        }],
        "notes": [],
        "fmt": ["txt", "pct", "pct", "txt", "txt"]
      }, {
        "kind": "table",
        "label": "Actives, price",
        "head": ["Input", "Low volume", "Mid volume", "High volume", "Source and note"],
        "rows": [{
          "c": ["Extract $/g, gummies", 6, 5.75, 5.5, "Under 5 kg, over 5 kg, over 10 kg"]
        }, {
          "c": ["Extract $/g, chocolate", 5.75, 5.5, 5.25, "Same bands, different supplier price"]
        }, {
          "c": ["Fruit $/lb, gummies", 350, 325, 300, "Over 10 lb, over 100 lb, over 200 lb. Grind is extra"]
        }, {
          "c": ["Fruit $/lb, chocolate", 300, 275, 275, "Over 10 lb, over 100 lb. No third band quoted"]
        }, {
          "c": ["Grind $/lb", 20, 20, 20, "Added to every fruit band"]
        }, {
          "c": ["Grams in a pound", 453.592, null, null, "Fixed conversion"]
        }],
        "notes": [],
        "fmt": ["txt", "usd", "usd", "usd", "txt"]
      }, {
        "kind": "table",
        "label": "Gummy cost, per tin",
        "head": ["Input", "8,000 a SKU", "16,000", "40,000", "Source and note"],
        "rows": [{
          "c": ["Packaging, wrap and tin", 1.9, 1.85, 1.75, "Supplier quote by volume band"]
        }, {
          "c": ["Other ingredients", 0.24, 0.24, 0.24, "Gelatin, sugar, flavor, color"]
        }, {
          "c": ["Manufacturing labor", 1.75, 1.75, 1.65, "Supplier quote"]
        }, {
          "c": ["Packing labor", 0.71, 0.71, 0.71, "Supplier quote"]
        }, {
          "c": ["Lab testing a tin", 0.12, 0.06, 0.02, "Two COAs a batch at $122, spread over the run"]
        }, {
          "c": ["Communications and admin", 0.17, 0.17, 0.17, "Supplier line item"]
        }, {
          "c": ["Waste a flavor, pieces", 113, null, null, "Supplier note says 100 to 200 gummies a flavor run. 113 is what the original sheet's 16,225-piece figure implies"]
        }],
        "notes": [],
        "fmt": ["txt", "usd", "usd", "usd", "txt"]
      }, {
        "kind": "table",
        "label": "Chocolate cost, per box",
        "head": ["Input", "1,500 boxes", "4,500", "9,000", "Source and note"],
        "rows": [{
          "c": ["Chocolate, grams a box", 27, 27, 27, "Scratch figure on the supplier sheet. Conflicts with the 22 kg batch line"]
        }, {
          "c": ["Chocolate $/kg", 21.9, 21.9, 21.9, "Derived from the quoted $0.59 a box at 27 grams. Confirm against Restaurant Depot pricing"]
        }, {
          "c": ["Cocoa butter, grams a box", 2.9, 2.9, 2.9, "Scratch figure. Conflicts with the 40 kg batch line"]
        }, {
          "c": ["Cocoa butter $/kg", 41.4, 41.4, 41.4, "Derived from the quoted $0.12 a box at 2.9 grams"]
        }, {
          "c": ["Wrapper a piece", 0.03, 0.03, 0.025, "Packaging quote"]
        }, {
          "c": ["Box", 0.78, 0.78, 0.73, "Packaging quote"]
        }, {
          "c": ["Manufacturing labor", 4.12, 3.92, 3.9, "Supplier quote"]
        }, {
          "c": ["Packing labor", 0.2, 0.2, 0.17, "Supplier quote"]
        }, {
          "c": ["Supplier fee", 0.25, 0.2, 0.15, "Supplier quote"]
        }],
        "notes": [],
        "fmt": ["txt", "txt", "txt", "txt", "txt"]
      }, {
        "kind": "table",
        "label": "Capsule cost, per bottle of 30",
        "head": ["Input", "Config A", "Config B", null, "Source and note"],
        "rows": [{
          "c": ["Fruit", 2.44, 2.44, null, "100 mg a capsule at $0.81 a gram"]
        }, {
          "c": ["Lion's Mane", 0.46, 0.55, null, "250 mg a capsule. Config B uses more"]
        }, {
          "c": ["Magnesium L-threonate", 1.5, 1.5, null, "200 mg a capsule"]
        }, {
          "c": ["L-theanine", 0.03, 0.03, null, "50 mg a capsule"]
        }, {
          "c": ["Encapsulation labor", 3.94, 3.15, null, "Supplier quote. Includes grind, encapsulate and the capsule shell"]
        }, {
          "c": ["Bottle, lid and label", 1.5, 1.5, null, "Left out of the supplier Total. Confirm whether the quote already includes it"]
        }, {
          "c": ["Packing labor", 0.5, 0.5, null, "Left out of the supplier Total"]
        }],
        "notes": [],
        "fmt": ["txt", "usd", "usd", "txt", "txt"]
      }, {
        "kind": "table",
        "label": "Packaging orders",
        "head": ["Item", "Minimum order", "Price a unit", "Plates, one off", "Shipping and tariffs"],
        "rows": [{
          "c": ["Wrappers", 25000, 0.03, 400, 0]
        }, {
          "c": ["Mylar bags", 2000, 0.23, 400, 0]
        }, {
          "c": ["Boxes", 2000, 0.78, 0, 0]
        }],
        "notes": ["Shipping and tariffs read $1 on the original sheet, which is a placeholder rather than a cost. They're set to zero here so the totals don't pretend to be complete. Enter the real quote and the Materials tab updates.", "Plates are a one-time etching cost per design. They don't repeat on a reorder of the same artwork."],
        "fmt": ["txt", "num", "usd", "usd0", "usd0"]
      }, {
        "kind": "table",
        "label": "Kitchen rates",
        "head": ["Rate", "Value", null, null, "Source and note"],
        "rows": [{
          "c": ["Labor rate an hour", 25, null, null, "What the kitchen costs per hour of production time"]
        }, {
          "c": ["Kitchen rent and utilities a month", 2500, null, null, "Corrected from $2,200 by DB, 30 Sep 2026"]
        }, {
          "c": ["Delivery, kitchen to warehouse, a run", 150, null, null, "Confirmed 18 Aug 2026"]
        }, {
          "c": ["Runs a month, planned", 2, null, null, "Sets how much rent lands on a run. Replace with the real count once three runs are logged"]
        }, {
          "c": ["Active ingredient a pound", 300, null, null, "Supplied 12 Aug 2026. This is the fruit price. An extract build runs far higher and needs its own rate"]
        }, {
          "c": ["Kitchen overhead a run", 1400, null, null, "Rent divided by runs a month, plus one delivery. Calculated, not typed"],
          "b": true
        }],
        "notes": ["These five rates came from the kitchen ledger built 22 August. The ledger collected rent and delivery and never put them into cost per unit. Run log now does, through the line above."],
        "fmt": ["txt", "usd", "txt", "txt", "txt"]
      }]
    },
    "Formulation": {
      "title": "Formulation",
      "sub": "How much extract and fruit go into a piece, worked back from the dose. Change the dose target or a potency on Inputs and these move.",
      "blocks": [{
        "kind": "table",
        "label": "Effective potency after processing",
        "head": ["Measure", "Gummies", "Chocolate", null, "How it's worked out"],
        "rows": [{
          "c": ["Extract potency as supplied", 0.044, 0.043, null, "Supplier assay"]
        }, {
          "c": ["Lost to cook temperature", 0.2, 0, null, "Gummies are cooked, chocolate is tempered at a lower heat"]
        }, {
          "c": ["Extract potency that counts", 0.0352, 0.043, null, "Potency as supplied, less the loss"],
          "b": true
        }, {
          "c": ["Fruit potency that counts", 0.0072, 0.009, null, "Same treatment"],
          "b": true
        }],
        "notes": [],
        "fmt": ["txt", "pct", "pct", "txt", "txt"]
      }, {
        "kind": "table",
        "label": "The hybrid build, extract plus fruit",
        "head": ["Measure", "Gummies", "Chocolate", null, "How it's worked out"],
        "rows": [{
          "c": ["Share of the dose carried by extract", 0.615, 0.5, null, "A formulation choice. The rest comes from fruit, so the two always add to 100%"]
        }, {
          "c": ["Dose target a piece, grams", 0.00275, 0.005, null, "From Inputs"]
        }, {
          "c": ["Dose from extract, grams", 0.001691, 0.0025, null, "Target times the extract share"]
        }, {
          "c": ["Dose from fruit, grams", 0.001059, 0.0025, null, "The remainder"]
        }, {
          "c": ["Extract a piece, grams", 0.048047, 0.05814, null, "Dose from extract, divided by the potency that counts"],
          "b": true
        }, {
          "c": ["Fruit a piece, grams", 0.147049, 0.277778, null, "Dose from fruit, divided by the fruit potency that counts"],
          "b": true
        }, {
          "c": ["Total actives a piece, grams", 0.195095, 0.335917, null, "The two added"]
        }, {
          "c": ["Check: dose delivered a piece", 0.00275, 0.005, null, "Should equal the dose target two rows up. If it doesn't, a potency is wrong"]
        }],
        "notes": [],
        "fmt": ["txt", "pct", "pct", "txt", "txt"]
      }, {
        "kind": "table",
        "label": "The extract-only build",
        "head": ["Measure", "Gummies", "Chocolate", null, "How it's worked out"],
        "rows": [{
          "c": ["Extract a piece, grams", 0.078125, 0.116279, null, "Whole dose from extract, divided by the potency that counts"],
          "b": true
        }, {
          "c": ["Fruit a piece, grams", 0, 0, null, "None by definition"]
        }],
        "notes": ["The hybrid build is cheaper because fruit carries part of the dose at a fraction of extract's price a gram. The trade is volume: fruit is bulkier, and the supplier caps it at about 150 mg of fruit a gummy.", "Maximum suggested load is 150 mg of fruit a gummy. Anything above that needs a reformulation conversation, not a spreadsheet change."],
        "fmt": ["txt", "txt", "txt", "txt", "txt"]
      }]
    },
    "Cost per unit": {
      "title": "Cost per unit",
      "sub": "What one tin, one box and one bottle cost to make. The extract and fruit prices step down by the weight you order, not by the piece count, so each column resolves its own band.",
      "blocks": [{
        "kind": "table",
        "label": "Gummy tin, what the run looks like",
        "head": ["Measure", "Minimum run", "Double", "Five times", "Extract only, minimum", "How it's worked out"],
        "rows": [{
          "c": ["Minimum order a flavor, pieces", 8000, 16000, 40000, 8000, "Supplier minimum. No half batches"]
        }, {
          "c": ["Flavors in the run", 2, 2, 2, 2, "Strawberry Mango and Blue Raspberry"]
        }, {
          "c": ["Pieces to produce", 16226, 32226, 80226, 16226, "Order, times flavors, plus the waste allowance"]
        }, {
          "c": ["Extract needed, kg", 0.779609, 1.548359, 3.854609, 1.267656, "Sets which extract price band applies"]
        }, {
          "c": ["Fruit needed, lb", 5.260258, 10.447249, 26.008223, 0, "Sets which fruit price band applies"]
        }, {
          "c": ["Extract price a gram, band applied", 6, 6, 6, 6, "Under 5 kg, 5 to 10 kg, over 10 kg"],
          "b": true
        }, {
          "c": ["Fruit price a pound, band applied", 370, 370, 370, 370, "Includes grind. Under 100 lb, 100 to 200 lb, over 200 lb"],
          "b": true
        }],
        "notes": [],
        "fmt": ["txt", "num", "num", "num", "num", "txt"]
      }, {
        "kind": "table",
        "label": "Gummy tin, cost a tin",
        "head": ["Cost line", "Minimum run", "Double", "Five times", "Extract only", "What it covers"],
        "rows": [{
          "c": ["Extract", 2.30625, 2.30625, 2.30625, 3.75, "Grams a piece, times pieces a tin, times the band price"]
        }, {
          "c": ["Fruit", 0.959593, 0.959593, 0.959593, 0, "Fruit plus grind, converted from pounds"]
        }, {
          "c": ["Packaging, wrap and tin", 1.9, 1.85, 1.75, 1.9, "Supplier quote by band"]
        }, {
          "c": ["Other ingredients", 0.24, 0.24, 0.24, 0.24, "Gelatin, sugar, flavor, color"]
        }, {
          "c": ["Manufacturing labor", 1.75, 1.75, 1.65, 1.75, "Supplier quote"]
        }, {
          "c": ["Packing labor", 0.71, 0.71, 0.71, 0.71, "Supplier quote"]
        }, {
          "c": ["Lab testing", 0.12, 0.06, 0.02, 0.12, "Two COAs a batch, spread over the run"]
        }, {
          "c": ["Communications and admin", 0.17, 0.17, 0.17, 0.17, "Supplier line item"]
        }, {
          "c": ["Landed cost a tin", 8.155843, 8.045843, 7.805843, 8.64, "Everything it costs to put a sellable tin on the shelf"],
          "b": true
        }, {
          "c": ["Invoice cost a tin", 6.135843, 6.135843, 6.035843, 6.62, "Landed cost less packaging and labs, which the manufacturer doesn't bill. This is what a batch wire divides down to"]
        }, {
          "c": ["Gross margin at $69", 0.881799, 0.883394, 0.886872, 0.874783, "Retail price less landed cost, over retail price"],
          "b": true
        }, {
          "c": ["Manufacturer invoice, whole run", 12271.686797, 24543.373595, 60358.433987, 13240, "Invoice cost a tin, times tins in the run"],
          "b": true
        }],
        "notes": ["The actives price holds at the lowest band across all three run sizes because even a five-times run needs under 4 kg of extract and under 30 lb of fruit. The next step down arrives at 10 kg, which is roughly a 100,000-piece order a flavor."],
        "fmt": ["txt", "usd", "usd", "usd", "usd", "txt"]
      }, {
        "kind": "table",
        "label": "Chocolate box, what the run looks like",
        "head": ["Measure", "Minimum run", "Three times", "Six times", "Hybrid, minimum", "How it's worked out"],
        "rows": [{
          "c": ["Boxes a run", 1500, 4500, 9000, 1500, "Kitchen batch size, one flavor at a time"]
        }, {
          "c": ["Pieces to produce", 12000, 36000, 72000, 12000, "Boxes, times pieces a box"]
        }, {
          "c": ["Extract needed, kg", 1.395349, 4.186047, 8.372093, 0.697674, "Sets which extract price band applies"]
        }, {
          "c": ["Fruit needed, lb", 0, 0, 0, 7.348748, "Hybrid build only"]
        }, {
          "c": ["Extract price a gram, band applied", 5.75, 5.75, 5.5, 5.75, "Under 5 kg, 5 to 10 kg, over 10 kg"],
          "b": true
        }, {
          "c": ["Fruit price a pound, band applied", 320, 320, 320, 320, "Includes grind. Two bands quoted"],
          "b": true
        }],
        "notes": [],
        "fmt": ["txt", "num", "num", "num", "num", "txt"]
      }, {
        "kind": "table",
        "label": "Chocolate box, cost a box",
        "head": ["Cost line", "Minimum run", "Three times", "Six times", "Hybrid, minimum", "What it covers"],
        "rows": [{
          "c": ["Extract", 5.348837, 5.348837, 5.116279, 2.674419, "Grams a piece, times pieces a box, times the band price"]
        }, {
          "c": ["Fruit", 0, 0, 0, 1.567733, "Hybrid build only"]
        }, {
          "c": ["Chocolate", 0.5913, 0.5913, 0.5913, 0.5913, "Grams a box at the price a kilo"]
        }, {
          "c": ["Cocoa butter", 0.12006, 0.12006, 0.12006, 0.12006, "Grams a box at the price a kilo"]
        }, {
          "c": ["Wrappers", 0.24, 0.24, 0.2, 0.24, "One wrapper a piece"]
        }, {
          "c": ["Box", 0.78, 0.78, 0.73, 0.78, "Packaging quote"]
        }, {
          "c": ["Manufacturing labor", 4.12, 3.92, 3.9, 4.12, "Supplier quote"]
        }, {
          "c": ["Packing labor", 0.2, 0.2, 0.17, 0.2, "Supplier quote"]
        }, {
          "c": ["Supplier fee", 0.25, 0.2, 0.15, 0.25, "Supplier quote"]
        }, {
          "c": ["Landed cost a box", 11.650197, 11.400197, 10.977639, 10.543512, "Everything it costs to put a sellable box on the shelf"],
          "b": true
        }, {
          "c": ["Gross margin at $69", 0.831157, 0.83478, 0.840904, 0.847195, "Retail price less landed cost, over retail price"],
          "b": true
        }],
        "notes": ["The extract price steps down at the six-times run, where the order crosses 5 kg. That's the only volume break the chocolate side reaches.", "Eight pieces, confirmed by DB on 2 October. The supplier quote priced six, so the actives and wrapper lines are repriced here and a box costs about $1.40 more than the quote implied. Both recipes are costed and both are live options: extract-only carries the whole dose on extract, the hybrid lets fruit carry half of it at a fraction of the price a gram.", "The chocolate and cocoa butter prices a kilo are worked back from the quoted cost a box. They need checking against what the kitchen actually pays, because the batch quantities on the supplier sheet don't agree with them. One other gap: the supplier sheet reads $9.41 a box on the hybrid build and this tool reads $9.42, because it adds the extract and fruit lines before rounding where the sheet rounded each line first. The cent is rounding, not a disagreement, and client assets carry the sourced $9.41."],
        "fmt": ["txt", "usd", "usd", "usd", "usd", "txt"]
      }, {
        "kind": "table",
        "label": "Capsule bottle, 30 count",
        "head": ["Cost line", "Config A", "Config B", null, null, "What it covers"],
        "rows": [{
          "c": ["Fruit", 2.44, 2.44]
        }, {
          "c": ["Lion's Mane", 0.46, 0.55]
        }, {
          "c": ["Magnesium L-threonate", 1.5, 1.5]
        }, {
          "c": ["L-theanine", 0.03, 0.03]
        }, {
          "c": ["Encapsulation labor", 3.94, 3.15]
        }, {
          "c": ["Bottle, lid and label", 1.5, 1.5]
        }, {
          "c": ["Packing labor", 0.5, 0.5]
        }, {
          "c": ["Landed cost a bottle", 10.37, 9.67, null, null, "The supplier Total read $8.37 and $7.67, which left out the last two lines"],
          "b": true
        }, {
          "c": ["What the supplier called Total", 8.37, 7.67, null, null, "Ingredients plus encapsulation labor only"]
        }, {
          "c": ["Understated by", 2, 2, null, null, "Exactly the bottle and the packing labor, on both configurations"],
          "b": true
        }],
        "notes": ["Capsules have never been produced and have no retail price, so there's no margin line. Confirm with the manufacturer whether their quote already includes the bottle before treating $10.37 as settled."],
        "fmt": ["txt", "usd", "usd", "txt", "txt", "txt"]
      }, {
        "kind": "table",
        "label": "What the kitchen actually produced, by flavor",
        "head": ["Flavor", "Runs logged", "Units good", "Cost a unit, logged", "Quoted cost a box", "How far apart"],
        "rows": [{
          "c": ["Mint milk chocolate", 0, 0, null, 10.543512, "No runs logged yet"]
        }, {
          "c": ["Toffee milk chocolate", 0, 0, null, 10.543512, "No runs logged yet"]
        }, {
          "c": ["Dubai milk chocolate", 0, 0, null, 10.543512, "No runs logged yet"]
        }, {
          "c": ["Espresso dark chocolate", 0, 0, null, 10.543512, "No runs logged yet"]
        }, {
          "c": ["Sea Salt dark chocolate", 0, 0, null, 10.543512, "No runs logged yet"]
        }, {
          "c": ["All flavors", 0, 0, null, 10.543512],
          "b": true
        }],
        "notes": ["These fill themselves from Run log. Until a flavor has three logged runs its number is an anecdote, which is what the last column says. The quoted figure beside each one is the hybrid build at the minimum run, so a gap reads as a real difference rather than a spec difference.", "Logged cost a unit carries everything tied to that run: ingredients, the actives entered on the run line, labor, kitchen overhead, and any packaging logged against it on Purchase log. The quoted column always includes the box and the wrapper, so log packaging on the run that consumes it or the two columns aren't measuring the same thing."],
        "fmt": ["txt", "num", "num", "usd", "usd", "txt"]
      }]
    },
    "Volume and batch": {
      "title": "Volume and batch",
      "sub": "What an order of each size buys and what it costs. Tins and boxes are shown both for the whole run and per flavor, because the original sheet mixed the two.",
      "blocks": [{
        "kind": "table",
        "label": "Gummies, two flavors a run",
        "head": ["Measure", "Minimum run", "Double", "Five times", null, "How it's worked out"],
        "rows": [{
          "c": ["Minimum order a flavor, pieces", 8000, 16000, 40000, null, "Set on Cost per unit"]
        }, {
          "c": ["Flavors in the run", 2, 2, 2, null, "Strawberry Mango and Blue Raspberry"]
        }, {
          "c": ["Pieces ordered", 16000, 32000, 80000, null, "Minimum a flavor, times flavors"]
        }, {
          "c": ["Pieces to produce", 16226, 32226, 80226, null, "Includes the waste allowance the supplier bakes in"]
        }, {
          "c": ["Tins, whole run", 2000, 4000, 10000, null, "Pieces ordered, divided by pieces a tin"],
          "b": true
        }, {
          "c": ["Tins a flavor", 1000, 2000, 5000, null, "This is the number to compare against stock on hand"],
          "b": true
        }, {
          "c": ["Extract needed, kg", 0.779609, 1.548359, 3.854609, null, "Drives the extract price band"]
        }, {
          "c": ["Fruit needed, lb", 5.260258, 10.447249, 26.008223, null, "Drives the fruit price band"]
        }, {
          "c": ["Landed cost a tin", 8.155843, 8.045843, 7.805843, null, "Hybrid build"]
        }, {
          "c": ["Invoice cost a tin", 6.135843, 6.135843, 6.035843, null, "What the manufacturer bills"]
        }, {
          "c": ["Manufacturer invoice, whole run", 12271.686797, 24543.373595, 60358.433987, null, "This is the wire"],
          "b": true
        }, {
          "c": ["Landed value, whole run", 16311.686797, 32183.373595, 78058.433987, null, "Includes packaging and labs bought separately"]
        }, {
          "c": ["Retail value, whole run", 138000, 276000, 690000, null, "Every tin sold at $69"],
          "b": true
        }],
        "notes": ["The minimum run is 1,000 tins a flavor, not 2,000. The original sheet showed 2,000 in a row labeled Total tins, which was the whole two-flavor run, directly beneath a row labeled per SKU. Reading one as the other is how a run gets ordered at twice the size.", "The original sheet added waste to its piece count but not to its tin count, so the two rows described different runs. Here waste is a separate line and tins are worked from pieces ordered."],
        "fmt": ["txt", "num", "num", "num", "txt", "txt"]
      }, {
        "kind": "table",
        "label": "Chocolate, one flavor a run",
        "head": ["Measure", "Minimum run", "Three times", "Six times", null, "How it's worked out"],
        "rows": [{
          "c": ["Boxes a run", 1500, 4500, 9000, null, "Set on Cost per unit"]
        }, {
          "c": ["Pieces to produce", 12000, 36000, 72000, null, "Boxes, times pieces a box"]
        }, {
          "c": ["Extract needed, kg", 1.395349, 4.186047, 8.372093, null, "Drives the extract price band"]
        }, {
          "c": ["Chocolate needed, kg", 40.5, 121.5, 243, null, "Grams a box, times boxes"]
        }, {
          "c": ["Cocoa butter needed, kg", 4.35, 13.05, 26.1, null, "Grams a box, times boxes"]
        }, {
          "c": ["Landed cost a box", 11.650197, 11.400197, 10.977639, null, "Extract-only build"]
        }, {
          "c": ["Landed value, whole run", 17475.295814, 51300.887442, 98798.751628, null, "Cost a box, times boxes"]
        }, {
          "c": ["Retail value, whole run", 103500, 310500, 621000, null, "Every box sold at $69"],
          "b": true
        }],
        "notes": ["Chocolate runs one flavor at a time in your own kitchen, so there's no two-flavor minimum and no outside invoice. The constraint is boxes on hand, not a supplier minimum."],
        "fmt": ["txt", "num", "num", "num", "txt", "txt"]
      }]
    },
    "Materials": {
      "title": "Materials and suppliers",
      "sub": "One deduplicated list. The old workbook carried two copies that disagreed; this is built from the newer one, with its corrections applied. Retired products are left out.",
      "blocks": [{
        "kind": "table",
        "label": "Packaging orders",
        "head": ["Item", "Minimum order", "Price a unit", "Plates, one off", "Order subtotal", "Total with plates"],
        "rows": [{
          "c": ["Wrappers", 25000, 0.03, 400, 750, 1150]
        }, {
          "c": ["Mylar bags", 2000, 0.23, 400, 460, 860]
        }, {
          "c": ["Boxes", 2000, 0.78, 0, 1560, 1560]
        }],
        "notes": ["Plates are a one-time etching cost a design, so a reorder of the same artwork drops them. Shipping and tariffs aren't in these totals because they have never been quoted; the original sheet carried $1, which is a placeholder.", "Lead time on wrappers, tins and boxes is six to eight weeks. That's the longest lead in the business and it sets the chocolate reorder point."],
        "fmt": ["txt", "num", "usd", "usd0", "usd0", "usd0"]
      }, {
        "kind": "table",
        "label": "Ingredients and packaging by product",
        "head": ["Product", "Item", "Minimum purchase", "Cost", "Supplier", "Lead time"],
        "rows": [{
          "c": ["Mint milk chocolate", "Milk chocolate", "2 cases, 10 blocks", "$469.95 a case", "Restaurant Depot", "1 day"],
          "b": true
        }, {
          "c": [null, "Coconut oil", "4 tubs", "$17.99 each", "Costco", "1 day"]
        }, {
          "c": [null, "Sugar", "25 lb", "$23.99", "Restaurant Depot", "1 day"]
        }, {
          "c": [null, "Cocoa butter", "4 lb", "$104.48", "Amazon", "1 day"]
        }, {
          "c": [null, "Vanilla extract", null, null, null, "1 day"]
        }, {
          "c": [null, "Soy lecithin", null, null, null, "1 day"]
        }, {
          "c": [null, "Mint pieces", "1 case", "$94.49", "Restaurant Depot", "1 day"]
        }, {
          "c": [null, "Bar wrapper", "1,000", "$80.00", "To identify", "1 week"]
        }, {
          "c": [null, "Mint bar box", "2,000", "$0.78 a box", "China, to identify", "6 to 8 weeks"]
        }, {
          "c": ["Toffee milk chocolate", "Toffee pieces", "1 case", "$177.59", "Restaurant Depot", "1 day"],
          "b": true
        }, {
          "c": [null, "Milk chocolate", "2 cases, 10 blocks", "$469.95 a case", "Restaurant Depot", "1 day"]
        }, {
          "c": [null, "Toffee bar box", "2,000", "$0.78 a box", "China, to identify", "6 to 8 weeks"]
        }, {
          "c": ["Dubai milk chocolate", "Milk chocolate", "2 cases, 10 blocks", "$469.95 a case", "Restaurant Depot", "1 day"],
          "b": true
        }, {
          "c": [null, "Organic pistachios", "1.5 lb pack", "$20.99", "Costco", "1 day"]
        }, {
          "c": [null, "Kataifi dough", null, null, "Party supply store", "1 day"]
        }, {
          "c": [null, "Organic butter", null, null, "Party supply store", "1 day"]
        }, {
          "c": [null, "Pistachio paste", null, null, "Party supply store", "1 day"]
        }, {
          "c": [null, "Tahini", null, null, "Party supply store", "1 day"]
        }, {
          "c": [null, "Coconut oil", "4 tubs", "$17.99 each", "Costco", "1 day"]
        }, {
          "c": [null, "Dubai bar box", "2,000", "$0.78 a box", "China, to identify", "6 to 8 weeks"]
        }, {
          "c": ["Espresso dark chocolate", "Dark chocolate", "1 case", "$459.95", "Restaurant Depot", "1 day"],
          "b": true
        }, {
          "c": [null, "Instant coffee", "4", "$16.39 each", "Restaurant Depot", "1 day"]
        }, {
          "c": [null, "Cocoa nibs", "4 lb pack", "$35.99 each", "Amazon or party supply", "1 day"]
        }, {
          "c": [null, "Espresso bar box", "2,000", "$0.78 a box", "China, to identify", "6 to 8 weeks"]
        }, {
          "c": ["Strawberry Mango gummies", "Production run", "8,000 pieces a flavor", "See Volume and batch", "OPM", "3 weeks"],
          "b": true
        }, {
          "c": [null, "Wrappers", "25,000", "$0.03 each", "China, to identify", "6 to 8 weeks"]
        }, {
          "c": [null, "Tins", "2,000", "Held, 2,000 a flavor", "China, to identify", "6 to 8 weeks"]
        }, {
          "c": ["Blue Raspberry gummies", "Production run", "8,000 pieces a flavor", "See Volume and batch", "OPM", "3 weeks"],
          "b": true
        }, {
          "c": [null, "Wrappers", "25,000", "$0.03 each", "China, to identify", "6 to 8 weeks"]
        }, {
          "c": [null, "Tins", "2,000", "Held, 2,000 a flavor", "China, to identify", "6 to 8 weeks"]
        }],
        "notes": [],
        "fmt": ["txt", "txt", "txt", "txt", "txt", "txt"]
      }, {
        "kind": "table",
        "label": "Planned, not in production",
        "head": ["Product", "Item", "Minimum purchase", "Cost", "Supplier", "Lead time"],
        "rows": [{
          "c": ["Sea Salt dark chocolate", "80% dark chocolate", "1 case of 10", "$15.12", "Restaurant Depot", "1 day"],
          "b": true
        }, {
          "c": [null, "Maldon sea salt", "2 tubs", "$9.86 each", "Restaurant Depot", "1 day"]
        }, {
          "c": [null, "Coconut oil", "4 lb pack", "$35.99 each", "Amazon", "1 day"]
        }, {
          "c": [null, "Black cocoa powder", null, null, "To identify", "1 day"]
        }, {
          "c": [null, "Sea Salt bar box", "2,000", "Held, 2,000 boxes", "China, to identify", "Already held"]
        }, {
          "c": ["Microdose capsules", "Capsules", null, "See Cost per unit", "China, to identify", "6 to 8 weeks"],
          "b": true
        }, {
          "c": [null, "Production", null, "See Cost per unit", "OPM", "2 weeks"]
        }, {
          "c": [null, "Bottle, lid and label", null, "$1.50 a bottle", "China, to identify", "6 to 8 weeks"]
        }, {
          "c": ["Love gummies", "MUD", null, "$10,000 a kg", "SW", "2 to 4 weeks"],
          "b": true
        }, {
          "c": [null, "Production", "8,000 pieces a flavor", "See Volume and batch", "OPM", "3 weeks"]
        }, {
          "c": [null, "Packaging", null, null, "China, to identify", "6 to 8 weeks"]
        }],
        "notes": ["Corrections carried over from the newer ingredient list: the Dubai bar uses milk chocolate, not white. The Sea Salt bar uses 80% dark chocolate, not Maca. Both were open questions on the older copy.", "Sea Salt waits on the slowest milk chocolate selling through. Its 2,000 boxes are already paid for and held. Capsules and Love gummies wait on cash flow."],
        "fmt": ["txt", "txt", "txt", "txt", "txt", "txt"]
      }, {
        "kind": "table",
        "label": "Shipping materials",
        "head": ["Item", "Minimum purchase", "Cost", "Supplier", "Lead time"],
        "rows": [{
          "c": ["Small box", "10 packs of 25", "Free", "USPS", "On hand"]
        }, {
          "c": ["Medium box 1", "5 packs of 10", "Free", "USPS", "On hand"]
        }, {
          "c": ["Medium box 2", "5 packs of 10", "Free", "USPS", "On hand"]
        }, {
          "c": ["Large box", "1 pack of 10", "Free", "USPS", "On hand"]
        }, {
          "c": ["Tape", "1 pack of 6", "$16.95", "Amazon", "1 day"]
        }, {
          "c": ["Freezer packs", "1 case of 96", "$49.50", "Amazon", "1 day"]
        }, {
          "c": ["Radiant barrier bags", "50", "$67.00", "To identify", "1 week"]
        }, {
          "c": ["Shipping labels", "1 pack of 4 rolls", "$32.99", "Amazon", "1 day"]
        }, {
          "c": ["Branded boxes", null, null, "China, to identify", "6 to 8 weeks"]
        }],
        "notes": [],
        "fmt": ["txt", "txt", "txt", "txt", "txt"]
      }]
    },
    "3PL": {
      "title": "3PL rates",
      "sub": "Pick, pack, ship and storage at Westfield Prep. The base is waived once the services billed in a month exceed it.",
      "blocks": [{
        "kind": "table",
        "label": "Monthly base",
        "head": null,
        "rows": [{
          "c": ["Base cost a month", 300, null, null, null, "Waived if the sum of all services exceeds it, so it's a floor rather than an extra charge"]
        }],
        "notes": [],
        "fmt": ["txt", "usd0", "txt", "txt", "txt", "txt"]
      }, {
        "kind": "table",
        "label": "Storage",
        "head": ["Tier", "0 to 499", "500 to 1,999", "2,000 to 4,999", "5,000 to 9,999", "What it covers"],
        "rows": [{
          "c": ["Tier 1, a piece a month", 0.25, 0.2, 0.18, 0.15, "Finished goods and active raw materials, converted to equivalent units"]
        }, {
          "c": ["Tier 2, a square foot a month", 2.75, null, null, null, "Packaging and non-active raw materials. Calculated on four cubic feet, one square foot by four feet high"]
        }],
        "notes": [],
        "fmt": ["txt", "usd", "usd", "usd", "usd", "txt"]
      }, {
        "kind": "table",
        "label": "Order handling",
        "head": ["Fee", "Small", "Medium", "Large", "Extra large", "Note"],
        "rows": [{
          "c": ["Receiving", 0, 0, 0, 0, "No charge"]
        }, {
          "c": ["Returns", 10, 10, 10, 10, "A flat fee an order"]
        }, {
          "c": ["Packing, flat", 7, 10, null, null, "Small and medium are flat fees"]
        }, {
          "c": ["Packing, percent of value", null, null, 0.02, 0.02, "Large and extra large are charged on the sales value of the goods"]
        }],
        "notes": ["The original sheet put $7, $10, 0.02 and 0.02 on one row, which reads as four dollar figures. The last two are percentages. They're split onto separate rows here so the row has one unit."],
        "fmt": ["txt", "usd0", "usd0", "usd0", "usd0", "txt"]
      }, {
        "kind": "table",
        "label": "Packing materials",
        "head": ["Item", "Cost each", "Dimensions"],
        "rows": [{
          "c": ["Mailer 1", 1.1, "10 x 8 x 1.5"]
        }, {
          "c": ["Mailer 2", 1.3, "15 x 11 x 3"]
        }, {
          "c": ["Box 1", 2, "8 x 8 x 8"]
        }, {
          "c": ["Box 2", 2.5, "12 x 12 x 12"]
        }, {
          "c": ["Ice pack", 1]
        }, {
          "c": ["Liners, box 1", 7]
        }, {
          "c": ["Liners, box 2", 12]
        }],
        "notes": [],
        "fmt": ["txt", "usd", "txt"]
      }, {
        "kind": "table",
        "label": "How an order is sized",
        "head": ["Size", "What it means"],
        "rows": [{
          "c": ["Small", "Fits mailer 1, up to 10 gummy tins or equivalent combinations, to be verified"],
          "b": true
        }, {
          "c": ["Medium", "Bigger than mailer 1, plus every order needing ice, but smaller than box 1"],
          "b": true
        }, {
          "c": ["Large", "5 to 15 lb"],
          "b": true
        }, {
          "c": ["Extra large", "15 to 25 lb"],
          "b": true
        }],
        "notes": [],
        "fmt": ["txt", "txt"]
      }, {
        "kind": "table",
        "label": "Standing terms",
        "head": null,
        "rows": [{
          "c": ["Billing", "Base cost at the start of the month, adjusted at month end for the final invoice"],
          "b": true
        }, {
          "c": ["Labels", "Labels and packing list are sent by you by secure email. Ship days are Monday to Wednesday, plus Thursday for expedited"],
          "b": true
        }, {
          "c": ["Cut-off", "Same-day shipping closes at 10am Pacific"],
          "b": true
        }, {
          "c": ["Courier", "UPS exclusively"],
          "b": true
        }, {
          "c": ["Setup", "Weight, dimensions, ice and liner need configuring per package on the shipping platform"],
          "b": true
        }],
        "notes": [],
        "fmt": ["txt", "txt"]
      }]
    },
    "Ledger": {
      "title": "Manufacturer ledger",
      "sub": "Every invoice matched to the wire that paid it. Add new rows at the bottom of each table and the balance updates.",
      "blocks": [{
        "kind": "table",
        "label": "Invoices",
        "head": ["Invoice", "What for", "Amount", "Date", "Status", "Note"],
        "rows": [{
          "c": ["12000", "Three COAs", 345, "12 Dec 2025", "Paid", "Lab testing"]
        }, {
          "c": ["12001", "R&D, labs and shipping", 517, "21 Apr 2026", "Paid", "Cleared on the 5 May wire"]
        }, {
          "c": ["12002", "2,000 tin batch", 10804, "31 Dec 2025", "Paid", "First production run"]
        }, {
          "c": ["12002R1", "2,000 tins plus 600s", 1338, "21 Apr 2026", "Paid", "First run, modified. Cleared on the 5 May wire"]
        }, {
          "c": ["9500", "Packaging", 4825, "31 Dec 2025", "Paid", "First packaging order"]
        }, {
          "c": ["9500R1", "Packaging", 8781, "17 Apr 2026", "Paid", "Second packaging order, modified"]
        }, {
          "c": ["Invoiced in total", null, 26610],
          "b": true
        }],
        "notes": [],
        "fmt": ["txt", "txt", "usd0", "txt", "txt", "txt"]
      }, {
        "kind": "table",
        "label": "Payments out",
        "head": ["Date", "Method", "Amount", "Against"],
        "rows": [{
          "c": ["2 Dec 2025", "Wire", 345, "12000"]
        }, {
          "c": ["31 Dec 2025", "Wire", 10804, "12002"]
        }, {
          "c": ["31 Dec 2025", "Wire", 4825, "9500"]
        }, {
          "c": ["21 Apr 2026", "Wire", 8781, "9500R1"]
        }, {
          "c": ["5 May 2026", "Wire", 1855, "12001 and 12002R1"]
        }, {
          "c": ["Paid in total", null, 26610],
          "b": true
        }, {
          "c": ["Balance owing", null, 0],
          "b": true
        }],
        "notes": ["The original sheet still flagged 12001 and 12002R1 as unpaid. The 5 May wire of $1,855 is exactly those two added together, so they cleared and the status column was stale.", "Three invoices carry December dates a year ahead of the April entries around them. They're read here as December 2025, which is the only reading that puts them before the wires that paid them."],
        "fmt": ["txt", "txt", "usd0", "txt"]
      }, {
        "kind": "table",
        "label": "Other charges in the account",
        "head": ["Date", "What for", "Amount"],
        "rows": [{
          "c": ["15 Jan 2026", "50-piece samples", 200]
        }, {
          "c": ["18 Jan 2026", "Lab testing", 122]
        }, {
          "c": ["15 Jan 2026", "Shipping samples", 35]
        }, {
          "c": ["5 Apr 2026", "Shipping tins from Arizona", 20]
        }, {
          "c": ["10 Apr 2026", "R&D capsules", 120]
        }, {
          "c": ["12 Apr 2026", "Shipping R&D capsules", 20]
        }, {
          "c": ["Small charges in total", null, 517],
          "b": true
        }],
        "notes": [],
        "fmt": ["txt", "txt", "usd0"]
      }, {
        "kind": "table",
        "label": "Open wrapper claim",
        "head": ["Measure", "Value"],
        "rows": [{
          "c": ["Wrappers bought", 40000]
        }, {
          "c": ["Cost", 1440]
        }, {
          "c": ["Freight", 150]
        }, {
          "c": ["Total", 1590],
          "b": true
        }, {
          "c": ["Cost a wrapper", 0.03975]
        }, {
          "c": ["Wrappers to be credited", 4000]
        }, {
          "c": ["Credit value", 159],
          "b": true
        }, {
          "c": ["Freight owed to the supplier", 150]
        }],
        "notes": ["The offer on the table is 2,000 Strawberry Mango wrappers, 2,000 Blue Raspberry, and the credit above. Against it you owe $150 of freight to the 3PL, so the two roughly cancel. Confirm before treating either as settled."],
        "fmt": ["txt", "num"]
      }]
    }
  },
  "finds": [["A capsule bottle costs $2.00 more than the sheet said", "The Total added ingredients and capsule labor but left out $1.50 of packaging and $0.50 of packing labor. Both configurations were understated by exactly $2.00 (Capsules tab, the Total row)", "Real landed cost is $10.37 and $9.67. Repriced on Cost per unit"], ["The tin count was never ambiguous", "8,000 pieces a flavor across two flavors is 16,000 pieces, which at 8 a tin is 2,000 tins for the whole run and 1,000 a flavor. The sheet showed the total and the per-flavor figure in the same table without labeling either (Gummies tab, the MOQ ladder)", "Both are now labeled on Volume and batch"], ["The three batch prices never disagreed", "$12,271 is what the manufacturer invoices for a 2,000-tin run. $6.14 is that divided by tins. $8.16 is the full cost per tin including packaging and labs, which the manufacturer doesn't bill. Three different things, all labeled as cost (Gummies tab, rows 43, 44 and 46)", "Separated into invoice cost and landed cost"], ["The chocolate batch inputs look transposed", "It states 22 kg of chocolate and 40 kg of cocoa butter for 1,500 boxes. The per-unit costing implies 27 g of chocolate and 2.9 g of cocoa butter a box, which is 40.5 kg and 4.3 kg. The two figures appear to have been swapped (Chocolate tab, rows 10 and 11)", "Confirm with the kitchen before the next run"], ["The quote priced a different unit than MYND sells", "Six wrappers a box and 1,500 boxes from 9,000 pieces both said 6 pieces. DB confirmed 8 on 2 October, so the actives and wrapper lines are repriced here (Chocolate tab, rows 33 and 36)", "A box costs $1.40 more at eight pieces. Both recipes are costed: $11.65 extract-only and $10.54 hybrid"], ["The kitchen ledger collected rent and delivery and never used them", "Rent and the delivery run were typed into Setup, but cost per unit added only ingredients, actives and labor. Kitchen overhead was never in the number (Kitchen ledger Setup, against its Run Log)", "Run log now allocates rent and delivery per run, so cost per unit carries them"], ["The kitchen ledger priced products the kitchen doesn't make", "Ten products including gummies, capsules and a Matcha flavor nobody has mentioned. Chocolate is the only thing made in the kitchen (Kitchen ledger Setup, the product list)", "Cut to the four live chocolate flavors plus Sea Salt, which is tested and waiting"], ["Packaging shipping is a placeholder", "All three lines carry $1, which isn't a shipping cost. The note says it depends on 5, 15 or 30 day speed (Packaging tab, the Shipping column)", "Quote it and enter the real figure on Inputs"], ["The hybrid gummy ratio adds to 101%", "0.62 extract plus 0.39 fruit. One of the two is a rounding artifact (Gummies tab, rows 16 and 17)", "Formulation now derives both from the dose target, so they always add to 100%"], ["Two ingredient lists disagreed", "The second copy answers questions left in the first: milk chocolate not white in the Dubai bar, and 80% dark chocolate not Maca in the Sea Salt bar (Consumables and Consumables 2)", "Materials is built from the second copy. The first is retired"], ["Another brand's products were mixed in", "A list of bars, stickers and white boxes belonging to a different brand, costed alongside MYND's own (The older ingredient list)", "Left out. It doesn't belong in MYND's cost model"]],
  "opens": [["What does the g on a chocolate box mean?", "DB", "The sheet labels a box 6g and the spec says 4g, but a 6-piece box carried 0.70 g of extract, so the label isn't grams of extract. Piece count is settled and priced. The dose label isn't"], ["Is it 22 kg of chocolate and 40 kg of cocoa butter, or the other way round?", "The kitchen", "Changes the cost of a box"], ["What does packaging shipping actually cost at each speed?", "The packaging supplier", "Adds to every packaging order"], ["Does the capsule quote include the bottle and lid?", "The manufacturer", "Decides whether $1.50 of packaging is double counted"], ["Is the 4,000 remedial wrapper claim settled?", "The wrapper supplier", "$159 of credit and $150 of freight"], ["How many runs does the kitchen actually do in a month?", "The kitchen", "Sets how much rent lands on each run, and nothing has been logged yet to check the planned two against"]],
  "steps": [["Buy something", "Log it in Purchase log the day you buy it, and photograph the receipt. No receipt, mark it NO and say why", "A receipt is the only thing separating a cost from a claim"], ["Run a batch", "Log it in Run log the same day. Give it a run ID, record units started, units good and units wasted", "A run reconstructed from memory a week later is a guess with a date on it"], ["Tie them together", "Put the run ID on each purchase line it paid for. One purchase can cover several runs, so split it across lines", "Anything untied goes in as UNALLOCATED and shows up on Reconciliation"], ["Read the numbers", "Cost per unit fills itself. Reconciliation shows anything unallocated or missing a receipt", "Three runs a product turns a range into a number"]],
  "kitchen": {
    "products": ["Mint milk chocolate", "Toffee milk chocolate", "Dubai milk chocolate", "Espresso dark chocolate", "Sea Salt dark chocolate"],
    "why": "Only chocolate is made in the kitchen. Gummies and capsules go through the manufacturer, so they're costed on Unit cost and invoiced on the Ledger.",
    "purchaseCols": ["Purchase ID", "Date bought", "Vendor", "Category", "What was bought", "Qty", "Unit", "Amount", "Receipt?", "Run ID", "Notes"],
    "runCols": ["Run ID", "Date", "Flavor", "Active used, lb", "Labor hrs", "Units started", "Units good", "Units wasted", "Yield %", "Ingredient cost", "Active cost", "Labor cost", "Kitchen overhead", "Total cost", "Cost a good unit"],
    "categories": ["Ingredients", "Active ingredient", "Packaging", "Labels", "Supplies", "Delivery", "Other"],
    "rules": [["Log it the day it happens", "A run reconstructed from memory a week later is a guess with a date on it"], ["No receipt, no reimbursement", "A receipt is the only thing separating a cost from a claim"], ["Every purchase gets a run ID", "Anything untied goes in as unallocated and shows on Reconciliation"], ["Three runs before you trust it", "One run is an anecdote. The status column says which you're looking at"]],
    "recon": [["Total purchases logged", "$0.00", "Everything on the purchase log"], ["Allocated to a run", "$0.00", "Tied to a batch that happened"], ["Unallocated", "$0.00", "Money spent that nothing came out of yet. Chase it"], ["Purchases with no receipt", "0", "Count of lines. Should be zero"], ["Value with no receipt", "$0.00", "Claimed cost with nothing behind it"], ["Runs logged", "0", "Rows carrying a date"], ["Units good", "0", "What reached the warehouse"], ["Units wasted", "0", "Shrink, trim, tempering and QC"], ["Overall yield", "Not measured", "Good units against units started"], ["Waste as a share of output", "Not measured", "Track it or it gets absorbed into cost a unit"], ["Blended cost a good unit", "Not measured", "Across every flavor logged, including kitchen overhead"]],
    "empty": "Nothing is logged yet, so every figure reads zero. That's the honest state, not a loading error. The first logged run is the first time any of it means anything."
  },
  "changeLog": [["2 Oct 2026", "OpFix", "Cost layer folded in", "The packaging and manufacturing workbook was retired into this page. Every rate below is now the single editable copy."], ["1 Oct 2026", "OpFix", "Capsule bottle $8.37 to $10.37", "The supplier Total left out $1.50 of bottle and $0.50 of packing labor. Both configurations were understated by exactly $2.00."], ["1 Oct 2026", "OpFix", "Kitchen overhead added, $1,400 a run", "Rent and delivery were collected and never reached cost per unit. About $0.93 a box at a 1,500-box run."], ["1 Oct 2026", "DB", "Lineup cut to six products", "Mint, Dubai, Toffee and Espresso chocolate, Strawberry Mango and Blue Raspberry gummies. Capsules and Sea Salt wait on cash flow."], ["1 Oct 2026", "DB", "Gummy production lead 3 weeks", "Confirmed with the manufacturer. The supplier workbook said two weeks and was out of date."], ["1 Oct 2026", "DB", "Tins held, 2,000 a flavor", "Four thousand in all, paid for and sitting with the manufacturer. A run uses 1,000 a flavor."], ["30 Sep 2026", "DB", "Kitchen rent $2,200 to $2,500", "Corrected on the cost confirmation call."], ["30 Sep 2026", "DB", "Chocolate unit is 8 pieces at 4g", "The supplier quote prices a 6-piece box at 6g, so the built cost stays indicative until the unit he sells is priced."]],
  "love": {
    "spec": [["Pieces a unit", 12], ["Packaging", "Cardbox, individual wraps"], ["Weight a piece", "2.5 to 4.5 g"], ["Shape", "Flat cube"]],
    "routes": [["MUD", "27 mg a piece", "1.00", "$10,000 a kg", "$3.24", "The route the source costs. 27 mg across 12 pieces is 0.324 g a unit"], ["Extract equivalent", "167 mg a piece", "0.041", "$6,000 a kg", "$12.02", "Same gross weight, far lower purity, so it needs 6x the mass"], ["Fruit only", "167 mg a piece", "0.008", "$800 a kg", "$1.60", "Cheapest a gram and the weakest. Delivers about 1.3 mg against MUD's 27"]],
    "unquoted": ["12-piece cardbox and individual wraps", "A manufacturer quote for a 12-piece run", "Minimum order quantities", "Production timelines"],
    "note": "Love's actives are $3.24 a unit on the MUD route, against $2.31 for a gummy tin. The $10,000 a kilo figure reads prohibitive and isn't: the dose is 27 mg a piece. What gates the reorder is a quote for a 12-piece cardbox run, which nobody has. Borrowing the tin's $8.16 would be wrong on piece count, packaging and actives."
  },
  "lineup": [["Mint milk chocolate", "Chocolate", "Live", "Kitchen", "$10.54 to $11.65"], ["Toffee milk chocolate", "Chocolate", "Live", "Kitchen", "$10.54 to $11.65"], ["Dubai milk chocolate", "Chocolate", "Live", "Kitchen", "$10.54 to $11.65"], ["Espresso dark chocolate", "Chocolate", "Live", "Kitchen", "$10.54 to $11.65"], ["Strawberry Mango gummies", "Gummies", "Live", "Manufacturer", "$8.16 to $8.64"], ["Blue Raspberry gummies", "Gummies", "Live", "Manufacturer", "$8.16 to $8.64"], ["Love gummies", "Gummies", "Reorder gated on cash flow", "Manufacturer", "Actives $3.24. Build unquoted"], ["Wild Cherry gummies", "Gummies", "Retired", "Manufacturer", "$8.16, for remaining sales"], ["Sea Salt dark chocolate", "Chocolate", "Tested, waiting on stock", "Kitchen", "$10.54 to $11.65"], ["Microdose capsules", "Capsules", "Never produced", "Manufacturer", "$9.67 to $10.37"]]
};

/* ==== period.jsx ==== */
// period.jsx, the period selector engine.
// The mock stores flow figures at 30 days. This rescales them to the selected
// window. Balances, rates, targets and monthly trends don't move.
// In the live build this file goes away: the reporting layer returns each
// window directly from the data contract.

const PERIOD_BASE = JSON.parse(JSON.stringify({
  D,
  D2,
  D3
}));
const PERIOD_TODAY = 17; // Sep 17, matches D3.live.day
const PERIOD_DAYS = {
  "1 day": 1,
  "7 days": 7,
  "30 days": 30,
  "90 days": 90,
  "MTD": PERIOD_TODAY
};
const PERIOD = {
  label: "30 days",
  short: "30d",
  days: 30,
  custom: false
};
const pRound = v => Math.round(v);
const pMoney = (s, f) => typeof s !== "string" ? s : s.replace(/([+-]?)\$([\d,]+(?:\.\d+)?)/, (m, sg, n) => sg + "$" + pRound(parseFloat(n.replace(/,/g, "")) * f).toLocaleString("en-US"));
const pCount = (s, f) => typeof s !== "string" ? s : s.replace(/^([\d,]+)$/, (m, n) => pRound(parseFloat(n.replace(/,/g, "")) * f).toLocaleString("en-US"));
const p30 = (s, short) => typeof s !== "string" ? s : s.replace(/30d\b/g, short).replace(/30 day/g, short === "1d" ? "1 day" : short.replace("d", " day"));
function periodShort(label, days) {
  return {
    "1 day": "1d",
    "7 days": "7d",
    "30 days": "30d",
    "90 days": "90d",
    "MTD": "MTD"
  }[label] || days + "d";
}
function applyPeriod(label, customDays) {
  const days = label === "Custom" ? Math.max(1, customDays || 30) : PERIOD_DAYS[label];
  const short = periodShort(label, days);
  const f = days / 30;
  Object.assign(PERIOD, {
    label: label === "Custom" ? days + (days === 1 ? " day" : " days") : label,
    short,
    days,
    custom: label === "Custom"
  });

  // restore the 30 day base every time, then scale
  const base = JSON.parse(JSON.stringify(PERIOD_BASE));
  Object.keys(base.D).forEach(k => {
    D[k] = base.D[k];
  });
  Object.keys(base.D2).forEach(k => {
    D2[k] = base.D2[k];
  });
  Object.keys(base.D3).forEach(k => {
    D3[k] = base.D3[k];
  });
  if (days === 30 && label !== "Custom") return;

  // Boardroom tiles
  D.unit.forEach(u => {
    if (u.k === "rev") {
      u.value = pMoney(u.value, f);
      u.label = "Revenue · " + short;
    }
    if (u.k === "cm") {
      u.value = pMoney(u.value, f);
    }
    if (u.k === "burn") {
      u.value = pMoney(u.value, f);
      u.label = "Operating profit · " + short;
      u.sub = "30 day " + PERIOD_BASE.D.unit.find(x => x.k === "burn").value;
    }
  });
  D.funnel.forEach(r => {
    r.v = pRound(r.v * f);
    if (r.note === "30 days") r.note = PERIOD.label;
  });

  // Money. Up to 30 days, revenue, cost of delivery and marketing come from the daily
  // contribution table so the P&L, the tiles and the daily rows agree to the dollar.
  D.pl.forEach(r => {
    r.v = pRound(r.v * f);
  });
  if (days <= D.cmDaily.length) {
    const rows = label === "MTD" ? D.cmDaily.filter(r => r.m === 9) : D.cmDaily.slice(-days);
    const rev = rows.reduce((a, r) => a + r.rev, 0),
      cod = rows.reduce((a, r) => a + r.cod, 0),
      mkt = rows.reduce((a, r) => a + r.mkt, 0);
    const opex = pRound(PERIOD_BASE.D.pl.find(r => r.line === "OPEX").v * rows.length / 30);
    const cm = rev - cod - mkt,
      op = cm - opex;
    const set = {
      "Revenue": rev,
      "Cost of delivery": cod,
      "Marketing": mkt,
      "Contribution margin": cm,
      "OPEX": opex,
      "Operating profit": op
    };
    D.pl.forEach(r => {
      r.v = set[r.line];
      r.pct = rev ? +(r.v / rev * 100).toFixed(1) : 0;
      if (r.line === "Revenue") r.pct = 100;
    });
    D.unit.forEach(u => {
      if (u.k === "rev") u.value = fmt.usd(rev);
      if (u.k === "cm") {
        u.value = fmt.usd(cm);
        u.sub = fmt.pct(cm / rev * 100) + " of revenue";
      }
      if (u.k === "burn") u.value = (op >= 0 ? "+" : "-") + fmt.usd(Math.abs(op));
    });
  }
  D.rails.forEach(r => {
    r.g30 = r.gross;
    ["gross", "fees", "net"].forEach(k => {
      r[k] = pRound(r[k] * f);
    });
  });

  // Revenue
  D.channels.forEach(r => {
    r.v = pRound(r.v * f);
  });
  D.products.forEach(r => {
    r.units = pRound(r.units * f);
    r.rev = pRound(r.rev * f);
  });

  // Retention
  D2.retention.kpi.forEach(k => {
    if (k.label === "Email revenue") k.value = pMoney(k.value, f);
    if (k.label === "Referral code usage") k.value = pCount(k.value, f);
    k.sub = p30(k.sub, short);
  });
  D2.retention.sources.forEach(r => {
    r.v = pRound(r.v * f);
  });

  // Customer experience friction
  D2.ops.friction.forEach(r => {
    r.count = pRound(r.count * f);
    r.cost = pRound(r.cost * f);
  });

  // Marketing labels
  D2.mkt.headline.forEach(k => {
    k.label = p30(k.label, short);
  });
  D.ads.kpi.forEach(k => {
    k.label = p30(k.label, short);
  });

  // Daily tracker: keep the last N days on record, recompute the footer
  const rows = D3.daily.rows;
  const keep = label === "MTD" ? rows : rows.slice(-Math.min(days, rows.length));
  D3.daily.rows = keep;
  const sum = k => keep.reduce((s, r) => s + (r[k] || 0), 0);
  const t = {};
  ["spend", "ord", "nc", "nNew", "$new", "nRet", "$ret", "tot", "rev", "gm", "profit"].forEach(k => {
    t[k] = sum(k);
  });
  t.amer = t.nc / t.spend;
  t.mer = t.rev / t.spend;
  t.ncrev = t.$new / t.rev * 100;
  t.naov = t.$new / t.nNew;
  t.ncac = t.spend / t.nNew;
  t.roas = keep.reduce((s, r) => s + r.roas * r.spend, 0) / t.spend;
  const cf = t.spend / PERIOD_BASE.D3.daily.totals.spend;
  D3.daily.totals = t;
  D3.daily.channels.forEach(c => {
    if (c.spend != null) {
      c.spend = pRound(c.spend * cf);
      c.fcst = pRound(c.fcst * cf);
    }
    c.rev = pRound(c.rev * cf);
  });
}
function PeriodNote() {
  const rows = D3.daily.rows.length;
  const txt = PERIOD.days === 30 && !PERIOD.custom ? null : `Showing ${PERIOD.label}. Flow figures follow the period. Balances, rates and monthly trends don't.` + (PERIOD.days > rows ? ` The daily tracker has ${rows} days on record.` : "");
  return txt ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 11,
      color: "var(--ink-mute)",
      margin: "-8px 0 16px"
    }
  }, txt) : null;
}
function CustomRange({
  from,
  to,
  onChange
}) {
  const box = {
    background: "var(--surface-3)",
    border: "1px solid var(--rule)",
    borderRadius: "var(--r-sm)",
    color: "var(--ink)",
    padding: "5px 8px",
    fontSize: 11.5,
    colorScheme: "inherit"
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 7,
      fontSize: 11.5,
      color: "var(--ink-mute)"
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "date",
    value: from,
    max: to,
    onChange: e => onChange(e.target.value, to),
    style: box,
    "aria-label": "From"
  }), "to", /*#__PURE__*/React.createElement("input", {
    type: "date",
    value: to,
    min: from,
    max: "2026-09-17",
    onChange: e => onChange(from, e.target.value),
    style: box,
    "aria-label": "To"
  }));
}
function rangeDays(from, to) {
  const a = new Date(from + "T00:00:00"),
    b = new Date(to + "T00:00:00");
  return Math.max(1, Math.round((b - a) / 864e5) + 1);
}

/* ==== ui.jsx ==== */
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// ui.jsx, primitives. Pure SVG charts, no chart library.
const {
  useState,
  useEffect,
  useRef,
  useMemo
} = React;
const fmt = {
  usd: (n, d = 0) => n == null ? "-" : "$" + Number(n).toLocaleString("en-US", {
    minimumFractionDigits: d,
    maximumFractionDigits: d
  }),
  k: n => {
    if (n == null) return "-";
    const a = Math.abs(n);
    if (a >= 1e6) return (n < 0 ? "-$" : "$") + (Math.abs(n) / 1e6).toFixed(2) + "M";
    if (a >= 1000) return (n < 0 ? "-$" : "$") + (Math.abs(n) / 1000).toFixed(a >= 10000 ? 0 : 1) + "K";
    return (n < 0 ? "-$" : "$") + Math.abs(Math.round(n));
  },
  pct: (n, d = 1) => n == null ? "-" : Number(n).toFixed(d) + "%",
  n: n => n == null ? "-" : Number(n).toLocaleString("en-US")
};
const T = t => ({
  good: "var(--good)",
  warn: "var(--warn)",
  bad: "var(--bad)",
  info: "var(--info)",
  accent: "var(--accent)",
  violet: "var(--violet)",
  mute: "var(--ink-mute)",
  ink: "var(--ink)"
})[t] || "var(--ink)";
const TT = t => ({
  good: "var(--good-tint)",
  warn: "var(--warn-tint)",
  bad: "var(--bad-tint)",
  info: "var(--info-tint)",
  accent: "var(--accent-tint)",
  violet: "var(--violet-tint)"
})[t] || "var(--surface-3)";
function Help({
  text
}) {
  if (!text) return null;
  return /*#__PURE__*/React.createElement("span", {
    className: "help"
  }, "?", /*#__PURE__*/React.createElement("span", {
    className: "hb"
  }, text));
}
function SecLabel({
  icon,
  children,
  help,
  right
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "sec-label",
    style: {
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, icon && /*#__PURE__*/React.createElement(Ico, {
    n: icon,
    s: 13
  }), children, /*#__PURE__*/React.createElement(Help, {
    text: help
  })), right && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10.5,
      fontWeight: 400,
      letterSpacing: 0,
      textTransform: "none",
      color: "var(--ink-mute)"
    }
  }, right));
}
function Card({
  children,
  style,
  pad = 18,
  hover,
  ...r
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: "card" + (hover ? " card-h" : ""),
    style: {
      padding: pad,
      ...style
    }
  }, r), children);
}
function G({
  c = 4,
  gap = 11,
  children,
  style,
  name
}) {
  return /*#__PURE__*/React.createElement("div", {
    "data-g": name || String(c),
    style: {
      display: "grid",
      gridTemplateColumns: `repeat(${c},minmax(0,1fr))`,
      gap,
      ...style
    }
  }, children);
}
function Seg({
  options,
  value,
  onChange,
  style,
  className
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "seg" + (className ? " " + className : ""),
    style: style
  }, options.map(o => {
    const v = typeof o === "string" ? o : o.v;
    const l = typeof o === "string" ? o : o.l;
    return /*#__PURE__*/React.createElement("button", {
      key: v,
      "data-on": value === v,
      onClick: () => onChange && onChange(v)
    }, l);
  }));
}
function Badge({
  children,
  tone = "mute",
  solid,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 4,
      background: solid ? T(tone) : TT(tone),
      color: solid ? "#fff" : T(tone),
      border: solid ? "none" : `1px solid ${T(tone)}2E`,
      borderRadius: 999,
      padding: "2px 8px",
      fontSize: 10.5,
      fontWeight: 650,
      whiteSpace: "nowrap",
      letterSpacing: "0.01em",
      ...style
    }
  }, children);
}
function Spark({
  data,
  tone = "accent",
  h = 30,
  fill = true
}) {
  const lo = Math.min(...data),
    hi = Math.max(...data),
    r = hi - lo || 1;
  const pts = data.map((v, i) => `${i / (data.length - 1) * 100},${28 - (v - lo) / r * 26}`).join(" ");
  const id = useMemo(() => "s" + Math.random().toString(36).slice(2, 7), []);
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 100 30",
    preserveAspectRatio: "none",
    style: {
      width: "100%",
      height: h,
      overflow: "visible"
    }
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: id,
    x1: "0",
    y1: "0",
    x2: "0",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: T(tone),
    stopOpacity: "0.28"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: T(tone),
    stopOpacity: "0"
  }))), fill && /*#__PURE__*/React.createElement("polygon", {
    points: `0,30 ${pts} 100,30`,
    fill: `url(#${id})`
  }), /*#__PURE__*/React.createElement("polyline", {
    points: pts,
    fill: "none",
    stroke: T(tone),
    strokeWidth: "1.6",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    vectorEffect: "non-scaling-stroke"
  }));
}
function KPI({
  label,
  value,
  sub,
  delta,
  deltaUnit = "%",
  invert,
  tone = "ink",
  help,
  spark,
  sparkTone,
  onClick,
  badge
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "kpi" + (onClick ? " kpi-click" : ""),
    onClick: onClick
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6,
      fontSize: 10,
      fontWeight: 700,
      letterSpacing: "0.07em",
      textTransform: "uppercase",
      color: "var(--ink-mute)",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, label, /*#__PURE__*/React.createElement(Help, {
    text: help
  })), badge), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 7,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "kpi-val",
    style: {
      fontSize: 23,
      fontWeight: 600,
      color: T(tone),
      lineHeight: 1.05
    }
  }, value), delta != null && delta !== 0 && /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      fontSize: 10.5,
      fontWeight: 650,
      color: delta > 0 !== !!invert ? "var(--good)" : "var(--bad)"
    }
  }, delta > 0 ? "\u2197" : "\u2198", Math.abs(delta), deltaUnit)), sub && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: "var(--ink-mute)"
    }
  }, sub), spark && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 2
    }
  }, /*#__PURE__*/React.createElement(Spark, {
    data: spark,
    tone: sparkTone || tone,
    h: 26
  })));
}
function Bar({
  pct,
  tone = "accent",
  h = 5,
  style,
  track = true
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      height: h,
      borderRadius: 99,
      background: track ? "var(--surface-3)" : "transparent",
      overflow: "hidden",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: Math.max(0, Math.min(100, pct || 0)) + "%",
      height: "100%",
      borderRadius: 99,
      background: T(tone),
      transition: "width 700ms cubic-bezier(.22,.68,0,1)"
    }
  }));
}

/* funnel row: two-tone bar with count and share */
function FunnelRow({
  label,
  value,
  share,
  pct,
  a = "accent",
  b = "good",
  split = 0.55,
  note
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 13
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      marginBottom: 5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10.5,
      fontWeight: 700,
      letterSpacing: "0.07em",
      textTransform: "uppercase",
      color: "var(--ink-mute)"
    }
  }, label), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      fontSize: 14,
      fontWeight: 600
    }
  }, fmt.n(value)), note && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10.5,
      color: "var(--ink-mute)",
      marginLeft: 7
    }
  }, note))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      height: 9,
      borderRadius: 99,
      overflow: "hidden",
      background: "var(--surface-3)",
      width: pct + "%",
      minWidth: "3%",
      transition: "width 700ms cubic-bezier(.22,.68,0,1)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: split * 100 + "%",
      background: T(a)
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      background: T(b)
    }
  })));
}
function BarChart({
  data,
  h = 150,
  tone = "accent",
  vf = fmt.k,
  axis = true
}) {
  const max = Math.max(...data.map(d => Math.abs(d.v))) || 1;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      gap: 5,
      height: h,
      borderBottom: "1px solid var(--rule)"
    }
  }, data.map((d, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      height: "100%"
    },
    title: `${d.m}: ${vf(d.v)}`
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: Math.abs(d.v) / max * 100 + "%",
      background: T(d.tone || tone),
      borderRadius: "3px 3px 0 0",
      minHeight: 2,
      opacity: d.dim ? 0.35 : 1,
      transition: "height 700ms cubic-bezier(.22,.68,0,1)"
    }
  })))), axis && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 5,
      marginTop: 6
    }
  }, data.map((d, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      flex: 1,
      textAlign: "center",
      fontSize: 9.5,
      color: "var(--ink-mute)"
    }
  }, d.m))));
}
function HBars({
  data,
  vf = fmt.k,
  tone = "accent",
  labelW = 150,
  showPct
}) {
  const max = Math.max(...data.map(d => Math.abs(d.v))) || 1;
  const tot = data.reduce((s, d) => s + Math.abs(d.v), 0) || 1;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 9
    }
  }, data.map((d, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "grid",
      gridTemplateColumns: `${labelW}px 1fr auto`,
      gap: 11,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: "var(--ink-soft)",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, d.m), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-3)",
      borderRadius: 4,
      height: 16,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: Math.abs(d.v) / max * 100 + "%",
      height: "100%",
      background: T(d.tone || tone),
      borderRadius: 4,
      transition: "width 700ms cubic-bezier(.22,.68,0,1)"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: "right",
      whiteSpace: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      fontSize: 12,
      fontWeight: 600
    }
  }, vf(d.v)), showPct && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      color: "var(--ink-mute)",
      marginLeft: 6
    }
  }, (Math.abs(d.v) / tot * 100).toFixed(0), "%")))));
}
function Line({
  data,
  h = 170,
  tone = "good",
  vf = v => v,
  target,
  tLabel,
  yMin,
  yMax
}) {
  const vals = data.map(d => d.v);
  const lo = yMin != null ? yMin : Math.min(...vals, target ?? Infinity) * 0.9;
  const hi = yMax != null ? yMax : Math.max(...vals, target ?? -Infinity) * 1.08;
  const X = i => i / (data.length - 1) * 100,
    Y = v => 100 - (v - lo) / (hi - lo) * 100;
  const pts = vals.map((v, i) => `${X(i)},${Y(v)}`).join(" ");
  const id = useMemo(() => "l" + Math.random().toString(36).slice(2, 7), []);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: h
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 100 100",
    preserveAspectRatio: "none",
    style: {
      width: "100%",
      height: "100%",
      overflow: "visible"
    }
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: id,
    x1: "0",
    y1: "0",
    x2: "0",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: T(tone),
    stopOpacity: "0.22"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: T(tone),
    stopOpacity: "0"
  }))), [0, 25, 50, 75, 100].map(g => /*#__PURE__*/React.createElement("line", {
    key: g,
    x1: "0",
    y1: g,
    x2: "100",
    y2: g,
    stroke: "var(--rule-soft)",
    strokeWidth: "0.4",
    vectorEffect: "non-scaling-stroke"
  })), target != null && /*#__PURE__*/React.createElement("line", {
    x1: "0",
    y1: Y(target),
    x2: "100",
    y2: Y(target),
    stroke: "var(--warn)",
    strokeWidth: "1",
    strokeDasharray: "3 3",
    vectorEffect: "non-scaling-stroke"
  }), /*#__PURE__*/React.createElement("polygon", {
    points: `0,100 ${pts} 100,100`,
    fill: `url(#${id})`
  }), /*#__PURE__*/React.createElement("polyline", {
    points: pts,
    fill: "none",
    stroke: T(tone),
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    vectorEffect: "non-scaling-stroke"
  })), vals.map((v, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      position: "absolute",
      left: X(i) + "%",
      top: Y(v) + "%",
      width: 7,
      height: 7,
      borderRadius: 99,
      transform: "translate(-50%,-50%)",
      background: "var(--surface)",
      border: `1.6px solid ${T(tone)}`
    }
  })), target != null && tLabel && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      right: 0,
      top: Y(target) + "%",
      transform: "translateY(-130%)",
      fontSize: 9.5,
      color: "var(--warn)",
      fontWeight: 600
    }
  }, tLabel)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      marginTop: 7
    }
  }, data.map((d, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      flex: 1,
      textAlign: "center",
      fontSize: 9.5,
      color: "var(--ink-mute)"
    }
  }, d.m))));
}
function Donut({
  v,
  max = 100,
  size = 104,
  sw = 9,
  tone = "accent",
  label,
  sub
}) {
  const r = (size - sw) / 2,
    c = 2 * Math.PI * r,
    p = Math.max(0, Math.min(1, v / max));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: size,
      height: size,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    style: {
      transform: "rotate(-90deg)"
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: size / 2,
    cy: size / 2,
    r: r,
    fill: "none",
    stroke: "var(--surface-3)",
    strokeWidth: sw
  }), /*#__PURE__*/React.createElement("circle", {
    cx: size / 2,
    cy: size / 2,
    r: r,
    fill: "none",
    stroke: T(tone),
    strokeWidth: sw,
    strokeLinecap: "round",
    strokeDasharray: `${c * p} ${c}`,
    style: {
      transition: "stroke-dasharray 800ms cubic-bezier(.22,.68,0,1)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--display)",
      fontSize: size / 5,
      fontWeight: 600,
      letterSpacing: "-0.02em"
    }
  }, label), sub && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 9.5,
      color: "var(--ink-mute)"
    }
  }, sub)));
}

/* goal row: current vs target with a benchmark marker */
function GoalRow({
  label,
  now,
  target,
  unit = "",
  pct,
  tone,
  note,
  bench,
  trend
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "13px 0",
      borderBottom: "1px solid var(--rule-soft)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      gap: 12,
      marginBottom: 7,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 500
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: T(tone)
    }
  }, now, unit), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: "var(--ink-mute)"
    }
  }, "target ", target, unit))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, trend ? /*#__PURE__*/React.createElement(Spark, {
    data: trend,
    tone: tone,
    h: 26
  }) : /*#__PURE__*/React.createElement(Bar, {
    pct: pct,
    tone: tone,
    h: 7
  }), bench != null && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: bench + "%",
      top: -2,
      bottom: -2,
      width: 2,
      background: "var(--ink-soft)",
      borderRadius: 2
    },
    title: "benchmark"
  })), note && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 10.5,
      color: "var(--ink-mute)",
      marginTop: 6
    }
  }, note));
}
function Note({
  children,
  tone = "info",
  icon = "i"
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      alignItems: "flex-start",
      background: TT(tone),
      border: `1px solid ${T(tone)}26`,
      borderRadius: "var(--r-md)",
      padding: "13px 15px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 16,
      height: 16,
      borderRadius: 99,
      background: T(tone),
      color: "#fff",
      fontSize: 10,
      fontWeight: 800,
      display: "grid",
      placeItems: "center",
      flexShrink: 0,
      marginTop: 1
    }
  }, icon), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 12.5,
      color: "var(--ink-soft)",
      lineHeight: 1.55
    }
  }, children));
}
function PageHead({
  title,
  sub,
  right,
  meta
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      gap: 18,
      flexWrap: "wrap",
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0,
      flex: "1 1 300px"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 23,
      marginBottom: 5
    }
  }, title), sub && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      color: "var(--ink-soft)"
    }
  }, sub), meta && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 11,
      color: "var(--ink-mute)",
      marginTop: 5
    }
  }, meta)), right);
}
function Empty({
  title,
  note,
  tag = "Planned"
}) {
  return /*#__PURE__*/React.createElement(Card, {
    pad: 34,
    style: {
      borderStyle: "dashed",
      background: "transparent",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "mute",
    style: {
      marginBottom: 12
    }
  }, tag), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 16,
      marginBottom: 7
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 12.5,
      color: "var(--ink-soft)",
      maxWidth: 460,
      margin: "0 auto",
      lineHeight: 1.6
    }
  }, note));
}
function Avatar({
  name,
  size = 26,
  tone = "accent"
}) {
  const init = name.split(" ").map(w => w[0]).slice(0, 2).join("").toUpperCase();
  return /*#__PURE__*/React.createElement("span", {
    style: {
      width: size,
      height: size,
      borderRadius: 99,
      background: TT(tone),
      color: T(tone),
      display: "grid",
      placeItems: "center",
      fontSize: size * 0.38,
      fontWeight: 700,
      flexShrink: 0
    }
  }, init);
}
function Ico({
  n,
  s = 15
}) {
  const p = {
    home: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M3 10.5L12 3l9 7.5"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M5.5 9.5V21h13V9.5"
    })),
    exec: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
      x: "3",
      y: "3",
      width: "7",
      height: "7",
      rx: "1.5"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "14",
      y: "3",
      width: "7",
      height: "7",
      rx: "1.5"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "3",
      y: "14",
      width: "7",
      height: "7",
      rx: "1.5"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "14",
      y: "14",
      width: "7",
      height: "7",
      rx: "1.5"
    })),
    money: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
      x: "2.5",
      y: "6",
      width: "19",
      height: "13",
      rx: "2.5"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M2.5 10.5h19M17 15h.01"
    })),
    rev: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M3 17l6-6 4 4 8-8"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M15 7h6v6"
    })),
    mkt: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M3 11l16-7v16L3 13z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M7 12.5V19"
    })),
    ops: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M21 8l-9-5-9 5 9 5 9-5z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M3 8v8l9 5 9-5V8"
    })),
    agents: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
      x: "4",
      y: "7",
      width: "16",
      height: "12",
      rx: "3"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12 3v4M9 12h.01M15 12h.01M9.5 16h5"
    })),
    team: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "9",
      cy: "8",
      r: "3"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M2.5 20c0-3.5 2.9-5.8 6.5-5.8s6.5 2.3 6.5 5.8"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M16.5 5.6a3 3 0 010 5.3M18.5 20c0-2.3-.8-4.2-2.2-5.4"
    })),
    admin: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "3"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M19.4 15a1.6 1.6 0 00.3 1.8l.1.1a2 2 0 11-2.8 2.8l-.1-.1a1.6 1.6 0 00-1.8-.3 1.6 1.6 0 00-1 1.5V21a2 2 0 11-4 0v-.1A1.6 1.6 0 007 19.4a1.6 1.6 0 00-1.8.3l-.1.1a2 2 0 11-2.8-2.8l.1-.1a1.6 1.6 0 00.3-1.8 1.6 1.6 0 00-1.5-1H1a2 2 0 110-4h.1A1.6 1.6 0 002.6 7a1.6 1.6 0 00-.3-1.8l-.1-.1a2 2 0 112.8-2.8l.1.1a1.6 1.6 0 001.8.3H7a1.6 1.6 0 001-1.5V1a2 2 0 114 0v.1a1.6 1.6 0 001 1.5 1.6 1.6 0 001.8-.3l.1-.1a2 2 0 112.8 2.8l-.1.1a1.6 1.6 0 00-.3 1.8V7a1.6 1.6 0 001.5 1H21a2 2 0 110 4h-.1a1.6 1.6 0 00-1.5 1z"
    })),
    dollar: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M12 2v20M17 6.5C17 4.6 14.8 3.5 12 3.5S7 4.6 7 6.5s2 2.8 5 3.5 5 1.6 5 3.5-2.2 3-5 3-5-1.1-5-3"
    })),
    funnel: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M3 4h18l-7 8v7l-4 2v-9z"
    })),
    pulse: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M2.5 12h4L9 5l4 14 2.5-7h6"
    })),
    box: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M21 8l-9-5-9 5 9 5 9-5z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M3 8v8l9 5 9-5V8"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12 13v8"
    })),
    alert: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M12 3l9.5 17H2.5z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12 9.5v4M12 17h.01"
    })),
    target: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "9"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "5"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "1.3"
    })),
    chart: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M5 20V10M12 20V4M19 20v-7"
    })),
    lock: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
      x: "4",
      y: "10",
      width: "16",
      height: "11",
      rx: "2.5"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M8 10V7a4 4 0 018 0v3"
    })),
    clock: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "9"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12 7v5.5l3.5 2"
    })),
    bell: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M18 8.5a6 6 0 10-12 0c0 6-2.5 7.5-2.5 7.5h17S18 14.5 18 8.5z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M13.7 20a2 2 0 01-3.4 0"
    })),
    search: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "11",
      cy: "11",
      r: "7"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M20 20l-4-4"
    })),
    menu: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M3 6h18M3 12h18M3 18h18"
    })),
    chev: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M9 6l6 6-6 6"
    })),
    user: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "8",
      r: "4"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M4 21c0-4 3.6-7 8-7s8 3 8 7"
    })),
    file: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M14 3v5h5"
    })),
    truck: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
      x: "1.5",
      y: "6.5",
      width: "13",
      height: "9",
      rx: "1.5"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M14.5 9.5h4l3 3v3h-7z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "6",
      cy: "18",
      r: "2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "18",
      cy: "18",
      r: "2"
    })),
    factory: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M3 21V10l5.5 3.5V10L14 13.5V7l7 4v10z"
    }))
  }[n];
  return /*#__PURE__*/React.createElement("svg", {
    width: s,
    height: s,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.7",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      flexShrink: 0
    }
  }, p);
}

/* ==== pages-1.jsx ==== */
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// pages-1.jsx, Boardroom, Goals, Org, Project Board, Money pages

/* ============================== BOARDROOM ============================== */
function Boardroom({
  go,
  period
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "page-in"
  }, /*#__PURE__*/React.createElement(PageHead, {
    title: "Boardroom",
    sub: `The whole business in one view · ${period}`,
    meta: "Live across cash, revenue, margin, subscriptions, inventory and the team."
  }), /*#__PURE__*/React.createElement(SecLabel, {
    icon: "dollar",
    help: "The eight numbers that describe whether this business is working."
  }, "Unit economics \xB7 ", period), /*#__PURE__*/React.createElement(G, {
    c: 4,
    name: "4",
    style: {
      marginBottom: 26
    }
  }, D.unit.map(u => /*#__PURE__*/React.createElement(KPI, _extends({
    key: u.k
  }, u, {
    onClick: () => go(u.k === "cash" || u.k === "debt" ? "cash" : u.k === "cm" || u.k === "burn" ? "pl" : u.k === "appr" ? "rails" : "revenue")
  })))), /*#__PURE__*/React.createElement(SecLabel, {
    icon: "alert",
    help: "Things worth a look. Not a task list, just what the numbers are flagging.",
    right: "6 items"
  }, "Action and watch items"), /*#__PURE__*/React.createElement(Card, {
    pad: 18,
    style: {
      marginBottom: 26
    }
  }, D.attention.map((a, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      gap: 11,
      alignItems: "flex-start",
      padding: "10px 0",
      borderBottom: i < D.attention.length - 1 ? "1px solid var(--rule-soft)" : "none"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot",
    style: {
      background: T(a.tone),
      marginTop: 7
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      color: "var(--ink-soft)"
    }
  }, a.t)))), /*#__PURE__*/React.createElement(SecLabel, {
    icon: "funnel",
    help: "Where people fall out between landing on the site and rebilling a third time.",
    right: `${PERIOD.label} window · site to third rebill`
  }, "The funnel \xB7 ", period), /*#__PURE__*/React.createElement(Card, {
    style: {
      marginBottom: 26
    },
    pad: 20
  }, D.funnel.map((f, i) => /*#__PURE__*/React.createElement(FunnelRow, {
    key: f.label,
    label: f.label,
    value: f.v,
    pct: f.pct,
    note: f.note,
    a: i < 3 ? "accent" : i < 5 ? "warn" : "bad",
    b: i < 3 ? "info" : i < 5 ? "warn" : "bad",
    split: 0.62
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 16,
      marginTop: 6,
      paddingTop: 13,
      borderTop: "1px solid var(--rule-soft)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: "var(--ink-mute)"
    }
  }, "The steep drop is between paid order and subscription. Attach at 10.4% is where the compounding is lost."))), /*#__PURE__*/React.createElement(G, {
    c: 2,
    name: "2",
    gap: 16,
    style: {
      marginBottom: 26
    }
  }, /*#__PURE__*/React.createElement(Card, {
    pad: 20
  }, /*#__PURE__*/React.createElement(SecLabel, {
    icon: "pulse",
    right: "live"
  }, "Today on the floor"), /*#__PURE__*/React.createElement(G, {
    c: 3,
    gap: 14
  }, D.today.map(t => /*#__PURE__*/React.createElement("div", {
    key: t.l
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      fontWeight: 700,
      letterSpacing: "0.06em",
      textTransform: "uppercase",
      color: "var(--ink-mute)",
      marginBottom: 3
    }
  }, t.l), /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 19,
      fontWeight: 600,
      color: T(t.tone || "ink")
    }
  }, t.v))))), /*#__PURE__*/React.createElement(Card, {
    pad: 20
  }, /*#__PURE__*/React.createElement(SecLabel, {
    icon: "chart",
    right: "September, through the 17th"
  }, "This month"), /*#__PURE__*/React.createElement(G, {
    c: 3,
    gap: 14
  }, D.thisMonth.map(t => /*#__PURE__*/React.createElement("div", {
    key: t.l
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      fontWeight: 700,
      letterSpacing: "0.06em",
      textTransform: "uppercase",
      color: "var(--ink-mute)",
      marginBottom: 3
    }
  }, t.l), /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 19,
      fontWeight: 600,
      color: T(t.tone || "ink")
    }
  }, t.v)))))), /*#__PURE__*/React.createElement(G, {
    c: 2,
    name: "2h",
    gap: 16,
    style: {
      gridTemplateColumns: "1.5fr 1fr",
      marginBottom: 26
    }
  }, /*#__PURE__*/React.createElement(Card, {
    pad: 20
  }, /*#__PURE__*/React.createElement(DistributionsTrend, {
    h: 168
  })), /*#__PURE__*/React.createElement(Card, {
    pad: 20
  }, /*#__PURE__*/React.createElement(SecLabel, {
    icon: "money",
    right: "Mercury + BlueBanc"
  }, "Cash position"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 20,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(Donut, {
    v: 68751,
    max: 141754,
    size: 96,
    tone: "good",
    label: "$68.8K",
    sub: "on hand"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10,
      minWidth: 0
    }
  }, [["Operating floor", "$23,585", "accent"], ["Free above floor", "$45,166", "good"], ["Card headroom", "$23,619", "info"]].map(([l, v, t]) => /*#__PURE__*/React.createElement("div", {
    key: l
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9.5,
      fontWeight: 700,
      letterSpacing: "0.06em",
      textTransform: "uppercase",
      color: "var(--ink-mute)"
    }
  }, l), /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 15,
      fontWeight: 600,
      color: T(t)
    }
  }, v))))), /*#__PURE__*/React.createElement(Line, {
    data: D.cashTrail,
    h: 90,
    tone: "warn"
  }))));
}

/* owner distributions by month, used on the Boardroom and Financials */
function DistributionsTrend({
  h = 150
}) {
  const d = D.distributions,
    ytd = d.reduce((a, r) => a + r.v, 0);
  const paid = d.filter(r => r.v > 0).length;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SecLabel, {
    icon: "money",
    right: `${fmt.usd(ytd)} this year`,
    help: "What you've taken out of the business as owner, by month. Before the Sep 15 cut-over these were draws taken whenever cash allowed. From the cut-over, the Owner profit bucket takes 15% of every sweep."
  }, "Distributions trend"), /*#__PURE__*/React.createElement(BarChart, {
    data: d.map((r, i) => ({
      ...r,
      tone: i === d.length - 1 ? "accent" : r.v ? "violet" : "info"
    })),
    h: h
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 11.5,
      color: "var(--ink-mute)",
      marginTop: 12
    }
  }, paid, " of ", d.length, " months paid anything, and no two the same. September is month to date. From the cut-over the Owner profit bucket fills on every sweep, so this line should steady."));
}

/* decision velocity: decisions made plus tasks completed each week, read from the score log */
function velocityGoal() {
  const ids = ["f_dec", "c_dec", "e_tasks"];
  const rows = ids.map(id => scoreRow(id));
  const weekly = WEEKS.map((w, i) => rows.every(r => r[i] == null) ? null : rows.reduce((a, r) => a + (r[i] || 0), 0));
  const vals = weekly.filter(v => v != null);
  const now = vals.length ? vals[vals.length - 1] : null,
    first = vals.length ? vals[0] : null;
  return {
    g: "Decision velocity",
    now: now == null ? "not logged" : `${now} a week`,
    target: "rising, set after 30 days",
    pct: 0,
    tone: now == null ? "mute" : now > first ? "good" : "warn",
    bench: null,
    trend: vals.length > 1 ? vals : null,
    note: now == null ? "Decisions made plus tasks completed each week, from the decision and transfer logs" : `Decisions made by the owner and the COO, plus tasks completed, each week. ${first} in the first week logged`
  };
}

/* ============================== GOALS ============================== */
function Goals({
  period
}) {
  const [kept, setKept] = useState(() => D.goals.map((_, i) => i));
  const [adding, setAdding] = useState(false);
  const [draft, setDraft] = useState({
    g: "",
    now: "",
    target: ""
  });
  const [extra, setExtra] = useState([]);
  const [keptVel, setKeptVel] = useState(true);
  const all = [...D.goals.filter((_, i) => kept.includes(i)), velocityGoal(), ...extra].filter(g => g.g !== "Decision velocity" || keptVel);
  const hit = all.filter(g => g.pct >= 90).length;
  return /*#__PURE__*/React.createElement("div", {
    className: "page-in"
  }, /*#__PURE__*/React.createElement(PageHead, {
    title: "Goals and targets",
    sub: "Where every number sits against where it should sit.",
    meta: "Nine to start. Delete the ones you aren't sure about, add the ones you want.",
    right: /*#__PURE__*/React.createElement("button", {
      onClick: () => setAdding(a => !a),
      style: {
        border: "1px solid var(--rule)",
        background: adding ? "var(--accent)" : "var(--surface-3)",
        color: adding ? "#fff" : "var(--ink-soft)",
        borderRadius: "var(--r-pill)",
        padding: "6px 14px",
        fontSize: 12,
        fontWeight: 600,
        cursor: "pointer"
      }
    }, adding ? "Cancel" : "+ Add a goal")
  }), adding && /*#__PURE__*/React.createElement(Card, {
    pad: 16,
    style: {
      marginBottom: 18,
      borderColor: "var(--accent)"
    }
  }, /*#__PURE__*/React.createElement(G, {
    c: 4,
    gap: 10
  }, [["g", "What are you measuring"], ["now", "Where it sits now"], ["target", "Where it should be"]].map(([k, ph]) => /*#__PURE__*/React.createElement("input", {
    key: k,
    value: draft[k],
    placeholder: ph,
    onChange: e => setDraft(d => ({
      ...d,
      [k]: e.target.value
    })),
    style: {
      background: "var(--surface-3)",
      border: "1px solid var(--rule)",
      borderRadius: "var(--r-sm)",
      padding: "8px 11px",
      color: "var(--ink)",
      fontSize: 12.5,
      fontFamily: "inherit",
      outline: "none"
    }
  })), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      if (!draft.g) return;
      setExtra(x => [...x, {
        ...draft,
        pct: 50,
        tone: "warn",
        bench: null,
        note: "Added by you"
      }]);
      setDraft({
        g: "",
        now: "",
        target: ""
      });
      setAdding(false);
    },
    style: {
      border: "none",
      background: "var(--accent)",
      color: "#fff",
      borderRadius: "var(--r-sm)",
      padding: "8px 14px",
      fontSize: 12.5,
      fontWeight: 600,
      cursor: "pointer"
    }
  }, "Add"))), /*#__PURE__*/React.createElement(G, {
    c: 4,
    style: {
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement(KPI, {
    label: "Goals tracked",
    value: String(all.length),
    tone: "ink",
    sub: `${D.goals.length - kept.length + (keptVel ? 0 : 1)} removed`
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "On target",
    value: `${hit} of ${all.length}`,
    tone: hit > 4 ? "good" : "warn",
    sub: "at or above 90%"
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Furthest behind",
    value: "Cycle-3 retention",
    tone: "bad",
    sub: "11% against a 45% target"
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Already ahead",
    value: "Chargebacks",
    tone: "good",
    sub: "0.42% against under 1%"
  })), /*#__PURE__*/React.createElement(Card, {
    pad: 22
  }, /*#__PURE__*/React.createElement(SecLabel, {
    icon: "target",
    help: "Current against target. The gray marker is the industry benchmark, not your target."
  }, "Scorecard"), all.map((g, i) => {
    const orig = D.goals.indexOf(g);
    return /*#__PURE__*/React.createElement("div", {
      key: g.g,
      style: {
        position: "relative"
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => orig >= 0 ? setKept(k => k.filter(x => x !== orig)) : g.g === "Decision velocity" ? setKeptVel(false) : setExtra(x => x.filter(y => y.g !== g.g)),
      title: "Remove this goal",
      style: {
        position: "absolute",
        right: 0,
        top: 13,
        width: 20,
        height: 20,
        border: "1px solid var(--rule)",
        background: "transparent",
        color: "var(--ink-mute)",
        borderRadius: 5,
        cursor: "pointer",
        fontSize: 12,
        lineHeight: 1,
        padding: 0,
        display: "grid",
        placeItems: "center"
      }
    }, "\xD7"), /*#__PURE__*/React.createElement("div", {
      style: {
        paddingRight: 30
      }
    }, /*#__PURE__*/React.createElement(GoalRow, {
      label: g.g,
      now: g.now,
      target: g.target,
      pct: g.pct,
      tone: g.tone,
      note: g.note,
      bench: g.bench,
      trend: g.trend
    })));
  }), all.length === 0 && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 12.5,
      color: "var(--ink-mute)",
      padding: "18px 0"
    }
  }, "All goals removed. Add the ones you actually want to run against.")));
}

/* ============================== PROJECT BOARD ============================== */
function Board() {
  const [open, setOpen] = useState(null);
  return /*#__PURE__*/React.createElement("div", {
    className: "page-in"
  }, /*#__PURE__*/React.createElement(PageHead, {
    title: "Project board",
    sub: "What's moving, what's stuck, and who has it.",
    right: /*#__PURE__*/React.createElement(Seg, {
      options: [{
        v: "all",
        l: "All"
      }, {
        v: "mine",
        l: "Mine"
      }],
      value: "all",
      onChange: () => {}
    })
  }), /*#__PURE__*/React.createElement(G, {
    c: 4,
    gap: 13
  }, D.tasks.cols.map(col => /*#__PURE__*/React.createElement("div", {
    key: col.k
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 4px 10px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 7,
      fontSize: 11.5,
      fontWeight: 700,
      letterSpacing: "0.05em",
      textTransform: "uppercase",
      color: T(col.tone)
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot",
    style: {
      background: T(col.tone)
    }
  }), col.l), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: "var(--ink-mute)"
    }
  }, col.items.length)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, col.items.map((it, i) => {
    const id = col.k + i,
      isOpen = open === id;
    return /*#__PURE__*/React.createElement(Card, {
      key: id,
      pad: 13,
      hover: true,
      onClick: () => setOpen(isOpen ? null : id),
      style: {
        cursor: "pointer",
        borderLeft: `3px solid ${T(col.tone)}`
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12.5,
        fontWeight: 500,
        marginBottom: 8,
        lineHeight: 1.4
      }
    }, it.t), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 6,
        fontSize: 11,
        color: "var(--ink-mute)"
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      name: it.who,
      size: 18,
      tone: "mute"
    }), it.who), /*#__PURE__*/React.createElement(Badge, {
      tone: it.p === "High" ? "bad" : it.p === "Med" ? "warn" : "mute"
    }, it.p)), isOpen && /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 11,
        color: "var(--ink-soft)",
        marginTop: 10,
        paddingTop: 10,
        borderTop: "1px solid var(--rule-soft)"
      }
    }, "Opened 4 days ago. No blockers recorded. Click again to collapse."));
  }))))));
}

/* ============================== CASH ============================== */
function Cash() {
  const [v, setV] = useState("buckets");
  return /*#__PURE__*/React.createElement("div", {
    className: "page-in"
  }, /*#__PURE__*/React.createElement(PageHead, {
    title: "Cash and buckets",
    sub: "What's spendable, and where every dollar routes on the way in.",
    right: /*#__PURE__*/React.createElement(Seg, {
      options: [{
        v: "buckets",
        l: "Buckets"
      }, {
        v: "accounts",
        l: "Accounts"
      }, {
        v: "flow",
        l: "Waterfall"
      }],
      value: v,
      onChange: setV
    })
  }), /*#__PURE__*/React.createElement(G, {
    c: 4,
    style: {
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement(KPI, {
    label: "Cash on hand",
    value: "$68,751",
    tone: "ink",
    sub: "two banks",
    delta: 70.4,
    help: "Mercury $62,605 and Bluebanc $6,146, read at source 1 October."
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Operating floor",
    value: "$23,585",
    tone: "accent",
    sub: "1.25x the Q4 base",
    help: "Fixed overhead plus card processing, times 1.25 for Q4. It rises to $28,302 from January."
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Free above floor",
    value: "$17,847",
    tone: "good",
    sub: "what buckets can take"
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Card headroom",
    value: "$23,619",
    tone: "info",
    sub: "49% utilized",
    delta: 4623
  })), v === "buckets" && /*#__PURE__*/React.createElement(G, {
    c: 5,
    name: "5",
    gap: 13,
    style: {
      marginBottom: 24
    }
  }, D.buckets.map(b => /*#__PURE__*/React.createElement(Card, {
    key: b.n,
    pad: 16,
    hover: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13.5,
      fontWeight: 600
    }
  }, b.n), /*#__PURE__*/React.createElement(Badge, {
    tone: b.tone
  }, b.pct, "%")), /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 19,
      fontWeight: 600,
      color: T(b.tone)
    }
  }, fmt.usd(b.v)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "var(--ink-mute)",
      marginBottom: 9
    }
  }, "of ", fmt.usd(b.target)), /*#__PURE__*/React.createElement(Bar, {
    pct: b.v / b.target * 100,
    tone: b.tone
  })))), v === "accounts" && /*#__PURE__*/React.createElement(Card, {
    pad: 0,
    style: {
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "scroll-x"
  }, /*#__PURE__*/React.createElement("table", {
    className: "tbl"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Account"), /*#__PURE__*/React.createElement("th", null, "Code"), /*#__PURE__*/React.createElement("th", null, "What it does"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Balance"), /*#__PURE__*/React.createElement("th", null, "Share"))), /*#__PURE__*/React.createElement("tbody", null, D.accounts.map(a => /*#__PURE__*/React.createElement("tr", {
    key: a.n
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      fontWeight: 600
    }
  }, a.n), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      color: "var(--ink-mute)"
    }
  }, a.c), /*#__PURE__*/React.createElement("td", {
    style: {
      color: "var(--ink-soft)",
      fontSize: 12
    }
  }, a.role), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right",
      fontWeight: 600,
      color: a.v ? T(a.tone) : "var(--ink-mute)"
    }
  }, fmt.usd(a.v)), /*#__PURE__*/React.createElement("td", {
    style: {
      width: 130
    }
  }, /*#__PURE__*/React.createElement(Bar, {
    pct: a.v / 68751 * 100,
    tone: a.tone
  })))))))), v === "flow" && /*#__PURE__*/React.createElement(Card, {
    pad: 24,
    style: {
      marginBottom: 24
    }
  }, [{
    l: "Money settles in",
    v: "$49,889",
    t: "info",
    d: "All three rails land in Bluebanc, then sweep to Mercury"
  }, {
    l: "Operating fills to the floor",
    v: "$23,585",
    t: "accent",
    d: "Rent, payroll, software, support"
  }, {
    l: "Everything above sweeps",
    v: "$24,314",
    t: "good",
    d: "Splits five ways on the percentages you set"
  }].map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr auto",
      gap: 16,
      alignItems: "center",
      padding: "15px 17px",
      background: TT(r.t),
      borderRadius: "var(--r-md)",
      border: `1px solid ${T(r.t)}26`
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      fontWeight: 600,
      marginBottom: 3
    }
  }, r.l), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: "var(--ink-soft)"
    }
  }, r.d)), /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      fontSize: 17,
      fontWeight: 600,
      color: T(r.t)
    }
  }, r.v)), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      color: "var(--ink-mute)",
      padding: "5px 0"
    }
  }, "\u2193"))), /*#__PURE__*/React.createElement(G, {
    c: 5,
    name: "5",
    gap: 9
  }, D.buckets.map(b => /*#__PURE__*/React.createElement("div", {
    key: b.n,
    style: {
      padding: "13px 11px",
      background: "var(--surface-3)",
      borderRadius: "var(--r-md)",
      border: "1px solid var(--rule)",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      fontWeight: 700,
      letterSpacing: "0.05em",
      textTransform: "uppercase",
      color: "var(--ink-mute)",
      marginBottom: 5
    }
  }, b.n), /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 16,
      fontWeight: 600,
      color: T(b.tone)
    }
  }, b.pct, "%"), /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 10.5,
      color: "var(--ink-mute)",
      marginTop: 3
    }
  }, fmt.usd(b.target)))))), /*#__PURE__*/React.createElement(G, {
    c: 2,
    name: "2h",
    gap: 16,
    style: {
      gridTemplateColumns: "1.3fr 1fr"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    pad: 20
  }, /*#__PURE__*/React.createElement(SecLabel, {
    icon: "chart",
    right: "seven months"
  }, "Cash trail"), /*#__PURE__*/React.createElement(Line, {
    data: D.cashTrail,
    h: 170,
    tone: "warn",
    vf: fmt.k
  })), /*#__PURE__*/React.createElement(Card, {
    pad: 20
  }, /*#__PURE__*/React.createElement(SecLabel, {
    icon: "clock",
    right: "next 30 days"
  }, "Committed outflows"), [["Next 7 days", 6420, "warn", "Rent, software, support"], ["8 to 14 days", 3100, "info", "3PL invoice, ingredients"], ["15 to 30 days", 9481, "bad", "Buyout payment Oct 1"]].map(([l, v, t, d]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5
    }
  }, l), /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: T(t)
    }
  }, fmt.usd(v))), /*#__PURE__*/React.createElement(Bar, {
    pct: v / 19001 * 100,
    tone: t
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 10.5,
      color: "var(--ink-mute)",
      marginTop: 4
    }
  }, d))))));
}

/* ============================== P&L ============================== */
function PL() {
  return /*#__PURE__*/React.createElement("div", {
    className: "page-in"
  }, /*#__PURE__*/React.createElement(PageHead, {
    title: "Profit and loss",
    sub: "The whole P&L on one page, against where a healthy DTC business sits.",
    meta: "Revenue less cost of delivery and marketing is contribution margin. Less fixed operating cost is operating profit. Debt service and distributions come after."
  }), /*#__PURE__*/React.createElement(Card, {
    pad: 0,
    style: {
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "scroll-x"
  }, /*#__PURE__*/React.createElement("table", {
    className: "tbl"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Line"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Amount"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "% of revenue"), /*#__PURE__*/React.createElement("th", null, "Against benchmark"), /*#__PURE__*/React.createElement("th", null, "Benchmark"), /*#__PURE__*/React.createElement("th", null, "What's in it"))), /*#__PURE__*/React.createElement("tbody", null, D.pl.map(r => /*#__PURE__*/React.createElement("tr", {
    key: r.line,
    style: {
      background: r.sub ? "var(--surface-3)" : undefined
    }
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      fontWeight: r.sub ? 700 : 500
    }
  }, r.line), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right",
      fontWeight: r.sub ? 700 : 400
    }
  }, fmt.usd(r.v)), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right",
      fontWeight: 600,
      color: T(r.tone)
    }
  }, r.pct ? fmt.pct(r.pct) : "-"), /*#__PURE__*/React.createElement("td", {
    style: {
      width: 150
    }
  }, r.bench && /*#__PURE__*/React.createElement(Bar, {
    pct: Math.min(r.pct * 2, 100),
    tone: r.tone
  })), /*#__PURE__*/React.createElement("td", {
    style: {
      color: "var(--ink-mute)",
      fontSize: 12
    }
  }, r.bench || "-"), /*#__PURE__*/React.createElement("td", {
    style: {
      color: "var(--ink-soft)",
      fontSize: 12
    }
  }, r.d || "-"))))))), /*#__PURE__*/React.createElement(Note, {
    tone: "bad",
    icon: "!"
  }, "Your fixed operating cost is 30% of revenue. A healthy DTC business runs near 15%. That gap is about $7,000 a month and it's the largest single lever left on the cost side."), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 24
    }
  }), /*#__PURE__*/React.createElement(CMDaily, null), /*#__PURE__*/React.createElement(G, {
    c: 1,
    gap: 16
  }, /*#__PURE__*/React.createElement(Card, {
    pad: 20
  }, /*#__PURE__*/React.createElement(SecLabel, {
    icon: "chart",
    right: "exact dollars, with share of revenue",
    help: "Bars are the dollar amount of fixed operating cost each month. The row underneath is that amount as a share of the month's revenue. A healthy DTC business runs near 15%."
  }, "Fixed cost, monthly"), /*#__PURE__*/React.createElement(BarChart, {
    data: FIXED.map(r => ({
      m: r.m,
      v: r.v,
      tone: fixedTone(r.pct),
      dim: r.proj
    })),
    h: 175
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      marginTop: 8
    }
  }, FIXED.map(r => /*#__PURE__*/React.createElement("span", {
    key: r.m,
    style: {
      flex: 1,
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      display: "block",
      fontSize: 13,
      fontWeight: 600
    }
  }, fmt.usd(r.v)), /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      display: "block",
      fontSize: 11.5,
      fontWeight: 600,
      color: T(fixedTone(r.pct))
    }
  }, r.pct.toFixed(1), "% of revenue")))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 11.5,
      color: "var(--ink-mute)",
      marginTop: 11
    }
  }, "Exact dollars each month, with the share of that month's revenue under it. The benchmark is about 15%. September is the last 30 days. October is projected once email moves, against September's revenue."))));
}

/* fixed cost by month, dollars and share of that month's revenue */
const FIXED = [{
  m: "Jun",
  v: 28860,
  rev: 43900,
  tone: "bad"
}, {
  m: "Jul",
  v: 28860,
  rev: 42112,
  tone: "bad"
}, {
  m: "Aug",
  v: 21400,
  rev: 60243,
  tone: "warn"
}, {
  m: "Sep",
  v: 16973,
  rev: 43171,
  tone: "good"
}, {
  m: "Oct",
  v: 16973,
  rev: 49889,
  tone: "good",
  proj: true
}].map(r => ({
  ...r,
  pct: r.v / r.rev * 100
}));
const fixedTone = p => p > 25 ? "bad" : p > 15 ? "warn" : "good";

/* daily contribution margin, follows the period selector */
function CMDaily() {
  const all = D.cmDaily;
  const rows = (PERIOD.label === "MTD" ? all.filter(r => r.m === 9) : all.slice(-Math.min(PERIOD.days, all.length))).slice().reverse();
  const t = rows.reduce((a, r) => ({
    rev: a.rev + r.rev,
    cod: a.cod + r.cod,
    mkt: a.mkt + r.mkt
  }), {
    rev: 0,
    cod: 0,
    mkt: 0
  });
  const cm = r => r.rev - r.cod - r.mkt;
  let run = 0;
  const cum = {};
  all.forEach(r => {
    run = (r.d === "Sep 1" ? 0 : run) + cm(r);
    cum[r.d] = run;
  });
  const short = PERIOD.days > all.length;
  return /*#__PURE__*/React.createElement(Card, {
    pad: 0,
    style: {
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "18px 18px 4px"
    }
  }, /*#__PURE__*/React.createElement(SecLabel, {
    icon: "rev",
    right: `${rows.length} ${rows.length === 1 ? "day" : "days"}${short ? `, all ${all.length} on record` : ""} · newest first`,
    help: "Revenue less cost of delivery and marketing, every day. Fixed costs are left out on purpose, so this is the number each day's sales actually earned."
  }, "Contribution margin, daily")), /*#__PURE__*/React.createElement("div", {
    className: "scroll-x",
    style: {
      maxHeight: 420,
      overflowY: "auto"
    }
  }, /*#__PURE__*/React.createElement("table", {
    className: "tbl"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Date"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Revenue"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Cost of delivery"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Marketing"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Contribution margin"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Margin"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Month to date"))), /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      background: "var(--surface-3)"
    }
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      fontWeight: 700
    }
  }, "Total"), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right",
      fontWeight: 700
    }
  }, fmt.usd(t.rev)), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right",
      fontWeight: 700
    }
  }, "-", fmt.usd(t.cod)), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right",
      fontWeight: 700
    }
  }, t.mkt ? "-" + fmt.usd(t.mkt) : "$0"), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right",
      fontWeight: 700,
      color: "var(--good)"
    }
  }, fmt.usd(t.rev - t.cod - t.mkt)), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right",
      fontWeight: 700
    }
  }, fmt.pct((t.rev - t.cod - t.mkt) / t.rev * 100)), /*#__PURE__*/React.createElement("td", null)), rows.map(r => /*#__PURE__*/React.createElement("tr", {
    key: r.d
  }, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600
    }
  }, r.d), " ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10.5,
      color: r.w === "Sat" || r.w === "Sun" ? "var(--accent)" : "var(--ink-mute)"
    }
  }, r.w)), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, fmt.usd(r.rev)), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right",
      color: "var(--ink-soft)"
    }
  }, "-", fmt.usd(r.cod)), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right",
      color: "var(--ink-mute)"
    }
  }, r.mkt ? "-" + fmt.usd(r.mkt) : "$0"), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right",
      fontWeight: 600,
      color: "var(--good)"
    }
  }, fmt.usd(cm(r))), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right",
      color: "var(--ink-soft)"
    }
  }, fmt.pct(cm(r) / r.rev * 100)), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right",
      color: "var(--ink-soft)"
    }
  }, fmt.usd(cum[r.d]))))))));
}

/* ============================== DEBT ============================== */
function Debt() {
  return /*#__PURE__*/React.createElement("div", {
    className: "page-in"
  }, /*#__PURE__*/React.createElement(PageHead, {
    title: "Debt and obligations",
    sub: "What's owed, to whom, and when it lands."
  }), /*#__PURE__*/React.createElement(G, {
    c: 4,
    style: {
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement(KPI, {
    label: "Still to pay",
    value: "$87,377",
    tone: "ink",
    delta: -29.9,
    sub: "principal and interest",
    help: "Every dollar still leaving the bank. Principal alone is $76,414, and the $10,963 gap is interest the buyout has left to run."
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Next payment",
    value: "$9,407",
    tone: "warn",
    sub: "Nov 1 \xB7 from debt bucket"
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Paid off by",
    value: "Jun 15, 2027",
    tone: "good",
    sub: "buyout May 1 \xB7 card Jun 15",
    help: "The date the buyout note and the card both reach zero, on the payment schedule and the card plan."
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Card utilization",
    value: "49%",
    tone: "warn",
    sub: "$23,081 of $46,700"
  })), /*#__PURE__*/React.createElement(G, {
    c: 2,
    name: "2h",
    gap: 16,
    style: {
      gridTemplateColumns: "1fr 1.3fr"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    pad: 20
  }, /*#__PURE__*/React.createElement(SecLabel, {
    icon: "money"
  }, "What you owe"), D.debt.map(d => /*#__PURE__*/React.createElement("div", {
    key: d.n,
    style: {
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13
    }
  }, d.n), /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: T(d.tone)
    }
  }, fmt.usd(d.v))), /*#__PURE__*/React.createElement(Bar, {
    pct: d.v / 87377 * 100,
    tone: d.tone
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 10.5,
      color: "var(--ink-mute)",
      marginTop: 5
    }
  }, d.note), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 11,
      marginTop: 3
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ink-mute)"
    }
  }, "Paid off by "), /*#__PURE__*/React.createElement("b", {
    className: "mono",
    style: {
      color: d.payoff === "No date set" ? "var(--ink-mute)" : "var(--ink)"
    }
  }, d.payoff))))), /*#__PURE__*/React.createElement(Card, {
    pad: 0
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "18px 18px 0"
    }
  }, /*#__PURE__*/React.createElement(SecLabel, {
    icon: "clock"
  }, "Buyout schedule")), /*#__PURE__*/React.createElement("div", {
    className: "scroll-x"
  }, /*#__PURE__*/React.createElement("table", {
    className: "tbl"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Date"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Amount"), /*#__PURE__*/React.createElement("th", null, "Status"), /*#__PURE__*/React.createElement("th", null, "Funded from"))), /*#__PURE__*/React.createElement("tbody", null, D.schedule.map(s => /*#__PURE__*/React.createElement("tr", {
    key: s.d,
    style: {
      opacity: s.s === "planned" ? 0.6 : 1
    }
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      fontWeight: s.s === "next" ? 600 : 400
    }
  }, s.d), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, fmt.usd(s.v, 2)), /*#__PURE__*/React.createElement("td", null, s.s === "paid" ? /*#__PURE__*/React.createElement(Badge, {
    tone: "good"
  }, "Paid") : s.s === "next" ? /*#__PURE__*/React.createElement(Badge, {
    tone: "warn",
    solid: true
  }, "Next") : /*#__PURE__*/React.createElement(Badge, {
    tone: "mute"
  }, "Planned")), /*#__PURE__*/React.createElement("td", {
    style: {
      fontSize: 11.5,
      color: "var(--ink-mute)"
    }
  }, "Debt service bucket")))))))), /*#__PURE__*/React.createElement(Card, {
    pad: 20,
    style: {
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(SecLabel, {
    icon: "money",
    right: "two numbers, both real"
  }, "How to read what you owe"), /*#__PURE__*/React.createElement(G, {
    c: 3,
    gap: 12,
    style: {
      marginTop: 4,
      marginBottom: 14
    }
  }, [["Still to pay", "$87,377", "Every dollar that leaves the bank. Buyout payments plus the card balance", "ink"], ["Principal outstanding", "$76,414", "What the balance sheet shows. $53,333 on the buyout, $23,081 on the card", "accent"], ["Interest still to run", "$10,963", "The gap between the two, across seven buyout payments", "warn"]].map(([l, v, d, t]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      background: "var(--surface-3)",
      borderRadius: "var(--r-md)",
      padding: "13px 15px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10.5,
      color: "var(--ink-mute)",
      marginBottom: 4
    }
  }, l), /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 19,
      fontWeight: 650,
      color: T(t),
      marginBottom: 5
    }
  }, v), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 11,
      color: "var(--ink-soft)",
      lineHeight: 1.45
    }
  }, d)))), /*#__PURE__*/React.createElement(Note, {
    tone: "info",
    icon: "i"
  }, "Two debts and nothing else: the buyout note and the card. An $80,000 undated obligation carried on this page through September was the buyout counted a second time, and it came off on 2 October. Nothing was paid down to remove it, so the drop against the old figure is a correction rather than progress.")), /*#__PURE__*/React.createElement(Card, {
    pad: 20,
    style: {
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(SecLabel, {
    icon: "clock",
    right: "buyout and card, month end",
    help: "What's left on the buyout note and the card after each month's payments."
  }, "Road to zero"), /*#__PURE__*/React.createElement(Line, {
    data: D.payoffPath,
    h: 180,
    tone: "good",
    vf: fmt.k,
    yMin: 0
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 11.5,
      color: "var(--ink-mute)",
      marginTop: 12
    }
  }, "$87,377 still to pay across both. The buyout clears May 1, 2027 and the card on June 15, 2027 at $2,600 a month. Anything extra onto the card pulls that date in.")));
}

/* ============================== RAILS ============================== */
function Rails() {
  const tg = D.rails.reduce((s, r) => s + r.gross, 0),
    tf = D.rails.reduce((s, r) => s + r.fees, 0),
    tr = D.rails.reduce((s, r) => s + r.res, 0);
  return /*#__PURE__*/React.createElement("div", {
    className: "page-in"
  }, /*#__PURE__*/React.createElement(PageHead, {
    title: "Payment rails",
    sub: "All four processors, gross in, fees out, net to bank.",
    meta: "Nothing hides inside a deposit."
  }), /*#__PURE__*/React.createElement(G, {
    c: 4,
    style: {
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement(KPI, {
    label: "Gross",
    value: fmt.usd(tg),
    tone: "ink",
    sub: PERIOD.label + ", all rails"
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Processing cost",
    value: fmt.usd(tf),
    tone: "bad",
    sub: fmt.pct(tf / tg * 100, 2) + " all in",
    help: "Against a 1.5% discount rate. The gap is interchange."
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Held in reserve",
    value: fmt.usd(tr),
    tone: "warn",
    sub: "never released"
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Net to bank",
    value: fmt.usd(tg - tf - tr),
    tone: "good",
    sub: "what actually lands"
  })), /*#__PURE__*/React.createElement(Card, {
    pad: 0,
    style: {
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "scroll-x"
  }, /*#__PURE__*/React.createElement("table", {
    className: "tbl"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Rail"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Gross"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Fees"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Reserve"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Net"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "All in"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Approval"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Chargeback"), /*#__PURE__*/React.createElement("th", null, "Volume against cap"))), /*#__PURE__*/React.createElement("tbody", null, D.rails.map(r => /*#__PURE__*/React.createElement("tr", {
    key: r.n
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      fontWeight: 600
    }
  }, r.n), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, fmt.usd(r.gross)), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right",
      color: "var(--bad)"
    }
  }, r.fees ? "-" + fmt.usd(r.fees) : "-"), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right",
      color: r.res ? "var(--warn)" : "var(--ink-mute)"
    }
  }, r.res ? "-" + fmt.usd(r.res) : "-"), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right",
      fontWeight: 600
    }
  }, fmt.usd(r.net)), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right",
      color: r.pct > 4.5 ? "var(--bad)" : "var(--warn)"
    }
  }, r.pct ? fmt.pct(r.pct, 2) : "-"), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right",
      color: r.appr >= 95 ? "var(--good)" : r.appr >= 92 ? "var(--warn)" : r.appr ? "var(--bad)" : "var(--ink-mute)"
    }
  }, r.appr ? fmt.pct(r.appr) : "-"), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, r.cb ? fmt.pct(r.cb, 2) : "-"), /*#__PURE__*/React.createElement("td", {
    style: {
      width: 150
    }
  }, r.cap ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Bar, {
    pct: (r.g30 || r.gross) / r.cap * 100,
    tone: (r.g30 || r.gross) / r.cap > 0.8 ? "bad" : (r.g30 || r.gross) / r.cap > 0.6 ? "warn" : "good"
  }), /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      fontSize: 9.5,
      color: "var(--ink-mute)"
    }
  }, fmt.k(r.g30 || r.gross), " of ", fmt.k(r.cap), " \xB7 30d")) : /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ink-mute)",
      fontSize: 11
    }
  }, "-")))))))), /*#__PURE__*/React.createElement(Note, {
    tone: "warn",
    icon: "!"
  }, "The Kurv rail is capped at $25,000 in any 30 day period, contractual, with termination rights on breach. Across all rails you top out near $125,000 a month. A $3M run rate needs about $250,000."));
}

/* ==== pages-2.jsx ==== */
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// pages-2.jsx, Revenue, Products, Subscriptions, Wholesale, Attribution, Ads,
// Social, Inventory, Production, Suppliers, Agents, Vault, Drive, Data Health

/* ============================== REVENUE ============================== */
function Revenue() {
  return /*#__PURE__*/React.createElement("div", {
    className: "page-in"
  }, /*#__PURE__*/React.createElement(PageHead, {
    title: "Revenue",
    sub: "Where the money comes from, and how much of it you can actually attribute."
  }), /*#__PURE__*/React.createElement(G, {
    c: 4,
    style: {
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement(KPI, {
    label: D.unit[0].label,
    value: D.unit[0].value,
    tone: "ink",
    delta: -4.1,
    spark: D.revMonthly.map(r => r.v)
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Orders",
    value: fmt.n(D.funnel[3].v),
    tone: "ink",
    sub: "on platform",
    delta: 1.8
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Average order",
    value: "$189",
    tone: "ink",
    delta: 2.1,
    help: "Revenue over orders that touched the platform."
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Unattributed",
    value: "26.2%",
    tone: "bad",
    sub: fmt.usd(D.channels[5].v) + " of revenue",
    help: "Orders without an affiliate land on an internal test account."
  })), /*#__PURE__*/React.createElement(G, {
    c: 2,
    name: "2h",
    gap: 16,
    style: {
      gridTemplateColumns: "1.4fr 1fr",
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement(Card, {
    pad: 20
  }, /*#__PURE__*/React.createElement(SecLabel, {
    icon: "rev",
    right: "nine months"
  }, "Monthly revenue"), /*#__PURE__*/React.createElement(BarChart, {
    data: D.revMonthly.map((r, i) => ({
      ...r,
      tone: i === 8 ? "accent" : "info"
    })),
    h: 185
  })), /*#__PURE__*/React.createElement(Card, {
    pad: 20
  }, /*#__PURE__*/React.createElement(SecLabel, {
    icon: "funnel",
    help: "Three of these can't be trusted until attribution is rebuilt."
  }, "By channel"), /*#__PURE__*/React.createElement(HBars, {
    data: D.channels,
    labelW: 120,
    showPct: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      paddingTop: 12,
      borderTop: "1px solid var(--rule-soft)",
      display: "flex",
      gap: 12,
      flexWrap: "wrap"
    }
  }, [["good", "Trusted"], ["mock", "Shape only"], ["none", "Not usable"]].map(([k, l]) => /*#__PURE__*/React.createElement("span", {
    key: k,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      fontSize: 10.5,
      color: "var(--ink-mute)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot",
    style: {
      background: T(k === "good" ? "good" : k === "mock" ? "info" : "bad")
    }
  }), l))))), /*#__PURE__*/React.createElement(Note, {
    tone: "info",
    icon: "i"
  }, "Shipments and fulfillment moved to Operations, where they belong. Retention now sits in its own page under Revenue."));
}

/* ============================== SUBSCRIPTIONS ============================== */
function Subs() {
  const s = D.subs;
  const cell = {
    textAlign: "right"
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "page-in"
  }, /*#__PURE__*/React.createElement(PageHead, {
    title: "Subscriptions",
    sub: "How many you have, how many cleared their last bill, and how far down the curve they get.",
    meta: "CRM export, 23 April to 25 September 2026. 94 active subscriptions against 905 approved customers."
  }), /*#__PURE__*/React.createElement(G, {
    c: 4,
    style: {
      marginBottom: 14
    }
  }, s.kpi.slice(0, 4).map(k => /*#__PURE__*/React.createElement(KPI, _extends({
    key: k.label
  }, k)))), /*#__PURE__*/React.createElement(G, {
    c: 4,
    style: {
      marginBottom: 24
    }
  }, s.kpi.slice(4).map(k => /*#__PURE__*/React.createElement(KPI, _extends({
    key: k.label
  }, k)))), /*#__PURE__*/React.createElement(G, {
    c: 2,
    gap: 14,
    style: {
      marginBottom: 20
    },
    name: "two"
  }, /*#__PURE__*/React.createElement(Card, {
    pad: 20
  }, /*#__PURE__*/React.createElement(SecLabel, {
    icon: "pulse",
    right: "cumulative survival"
  }, "How far subscribers get"), /*#__PURE__*/React.createElement(Line, {
    data: s.curve.map(c => ({
      m: c.c,
      v: c.v
    })),
    tone: "warn",
    vf: v => v + "%",
    yMin: 0,
    yMax: 100,
    h: 190
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 11.5,
      color: "var(--ink-mute)",
      marginTop: 12
    }
  }, "Cycle to cycle you lose 16% at the first rebill, then 32%, then 39%, then 64%. Average subscriber life is about 2.9 billing cycles, which is an early reading on young cohorts.")), /*#__PURE__*/React.createElement(Card, {
    pad: 20
  }, /*#__PURE__*/React.createElement(SecLabel, {
    icon: "rev",
    right: "of failed rebills"
  }, "What the retries recover"), /*#__PURE__*/React.createElement(BarChart, {
    data: s.retry.map(r => ({
      m: r.a,
      v: r.v
    })),
    tone: "good",
    vf: v => v + "%",
    h: 190
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 11.5,
      color: "var(--ink-mute)",
      marginTop: 12
    }
  }, "The second attempt recovers nothing, which points at spacing rather than the card. 261 attempts, 206 approved, 78.9% billing rate."))), /*#__PURE__*/React.createElement(Card, {
    pad: 0,
    style: {
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "18px 18px 4px"
    }
  }, /*#__PURE__*/React.createElement(SecLabel, {
    icon: "rev",
    right: "cumulative"
  }, "The retention curve")), /*#__PURE__*/React.createElement("div", {
    className: "scroll-x"
  }, /*#__PURE__*/React.createElement("table", {
    className: "tbl"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Bill"), /*#__PURE__*/React.createElement("th", {
    style: cell
  }, "Still active"), /*#__PURE__*/React.createElement("th", {
    style: cell
  }, "Lost that cycle"), /*#__PURE__*/React.createElement("th", null, "What it means"))), /*#__PURE__*/React.createElement("tbody", null, s.curve.map((r, i) => {
    const prev = i === 0 ? null : s.curve[i - 1].v;
    const lost = prev == null ? null : (prev - r.v) / prev * 100;
    return /*#__PURE__*/React.createElement("tr", {
      key: r.c
    }, /*#__PURE__*/React.createElement("td", {
      style: {
        fontWeight: 600
      }
    }, r.c), /*#__PURE__*/React.createElement("td", {
      className: "num",
      style: cell
    }, r.v.toFixed(1), "%"), /*#__PURE__*/React.createElement("td", {
      className: "num",
      style: {
        ...cell,
        color: lost == null ? "var(--ink-mute)" : "var(--bad)"
      }
    }, lost == null ? "-" : lost.toFixed(0) + "%"), /*#__PURE__*/React.createElement("td", {
      style: {
        color: "var(--ink-mute)",
        fontSize: 11.5
      }
    }, i === 0 ? "Everyone who started a subscription" : i === 1 ? "The first rebill is where the biggest single share goes" : i === 4 ? "About 1 in 8 of the original cohort is still paying" : "Cumulative survival from the first bill, not a monthly rate"));
  }))))), /*#__PURE__*/React.createElement(Note, {
    tone: "info",
    icon: "i"
  }, s.note), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 14
    }
  }), /*#__PURE__*/React.createElement(Note, {
    tone: "warn",
    icon: "!"
  }, "Attach is the first lever, not retention. At 10.4% only 94 of 905 approved customers ever start a subscription, so the curve is being measured on a tenth of the base. Offer testing and cancellation reasons get added once you've decided what you'd act on."));
}

/* ============================== WHOLESALE ============================== */
function Wholesale() {
  const accounts = [{
    n: "Clinic A · Los Angeles",
    st: "Active",
    orders: 4,
    rev: 2840,
    last: "Aug 28"
  }, {
    n: "Clinic B · Phoenix",
    st: "Active",
    orders: 2,
    rev: 980,
    last: "Sep 2"
  }, {
    n: "Clinic C · Denver",
    st: "Trial",
    orders: 1,
    rev: 300,
    last: "Aug 14"
  }, {
    n: "Retailer · Portland",
    st: "Pitched",
    orders: 0,
    rev: 0,
    last: "-"
  }, {
    n: "Clinic D · Austin",
    st: "Pitched",
    orders: 0,
    rev: 0,
    last: "-"
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "page-in"
  }, /*#__PURE__*/React.createElement(PageHead, {
    title: "Wholesale and clinics",
    sub: "The emerging channel. Commission-only rep, cold outbound.",
    meta: "Wholesale orders never touch the order platform, which is why they're invisible in revenue."
  }), /*#__PURE__*/React.createElement(G, {
    c: 4,
    style: {
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement(KPI, {
    label: "Active accounts",
    value: "2",
    tone: "warn",
    sub: "of 5 in pipeline"
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Wholesale revenue",
    value: fmt.usd(D.channels[2].v),
    tone: "ink",
    sub: PERIOD.label,
    delta: 12.4
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Share of revenue",
    value: "8.8%",
    tone: "ink"
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Rep commission",
    value: "Commission only",
    tone: "mute",
    sub: "no base"
  })), /*#__PURE__*/React.createElement(Card, {
    pad: 0,
    style: {
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "scroll-x"
  }, /*#__PURE__*/React.createElement("table", {
    className: "tbl"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Account"), /*#__PURE__*/React.createElement("th", null, "Status"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Orders"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Revenue"), /*#__PURE__*/React.createElement("th", null, "Last order"))), /*#__PURE__*/React.createElement("tbody", null, accounts.map(a => /*#__PURE__*/React.createElement("tr", {
    key: a.n
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      fontWeight: 600
    }
  }, a.n), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(Badge, {
    tone: a.st === "Active" ? "good" : a.st === "Trial" ? "warn" : "mute"
  }, a.st)), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, a.orders || "-"), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, a.rev ? fmt.usd(a.rev) : "-"), /*#__PURE__*/React.createElement("td", {
    style: {
      color: "var(--ink-mute)"
    }
  }, a.last))))))), /*#__PURE__*/React.createElement(Note, {
    tone: "warn",
    icon: "!"
  }, "Wholesale ships straight from the warehouse without an order record, so it never reconciles against revenue and it silently consumes stock the inventory system thinks you still have."));
}

/* ============================== ATTRIBUTION ============================== */
function Attribution() {
  return /*#__PURE__*/React.createElement("div", {
    className: "page-in"
  }, /*#__PURE__*/React.createElement(PageHead, {
    title: "Attribution",
    sub: "Which channel earned which order.",
    meta: "Currently the weakest system in the business."
  }), /*#__PURE__*/React.createElement(Card, {
    pad: 26,
    style: {
      borderColor: "var(--bad)",
      background: "var(--bad-tint)",
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 15,
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 34,
      height: 34,
      borderRadius: 9,
      background: "var(--bad)",
      display: "grid",
      placeItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Ico, {
    n: "alert",
    s: 18
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 16,
      marginBottom: 7
    }
  }, "Attribution has been broken since April"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      color: "var(--ink-soft)",
      lineHeight: 1.6,
      maxWidth: 700
    }
  }, "The tracking tag fires on page load, so any order without an affiliate link defaults to an internal test account. Stored affiliate IDs never expire either. That means every channel number you have looked at since April is wrong. Not just creator numbers. All of them."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 9,
      marginTop: 14,
      flexWrap: "wrap"
    }
  }, ["Cost per customer", "Lifetime value", "Channel ROAS", "Creator payouts", "Campaign performance"].map(f => /*#__PURE__*/React.createElement(Badge, {
    key: f,
    tone: "bad"
  }, f)))))), /*#__PURE__*/React.createElement(G, {
    c: 4,
    style: {
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement(KPI, {
    label: "Orders unattributed",
    value: "26.2%",
    tone: "bad",
    sub: "landing on a test account"
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Attribution window",
    value: "30 days",
    tone: "good",
    sub: "set, not yet built"
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Stored IDs expiring",
    value: "No",
    tone: "bad",
    sub: "credit never lapses"
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Fix lands",
    value: "Phase 3",
    tone: "warn",
    sub: "prerequisite for all channel reporting"
  })), /*#__PURE__*/React.createElement(Card, {
    pad: 20
  }, /*#__PURE__*/React.createElement(SecLabel, {
    icon: "funnel"
  }, "What each channel claims, and what we can prove"), /*#__PURE__*/React.createElement(HBars, {
    data: D.channels,
    labelW: 140,
    showPct: true
  })));
}

/* ============================== ADS ============================== */
function Ads() {
  return /*#__PURE__*/React.createElement("div", {
    className: "page-in"
  }, /*#__PURE__*/React.createElement(PageHead, {
    title: "Ads",
    sub: "Paid acquisition across every platform.",
    meta: "Spend has been paused since August. The Q4 plan turns it back on."
  }), /*#__PURE__*/React.createElement(G, {
    c: 6,
    name: "6",
    style: {
      marginBottom: 24
    }
  }, D.ads.kpi.map(k => /*#__PURE__*/React.createElement(KPI, _extends({
    key: k.label
  }, k)))), /*#__PURE__*/React.createElement(SecLabel, {
    icon: "mkt",
    right: "3 accounts"
  }, "Ad accounts"), /*#__PURE__*/React.createElement(Card, {
    pad: 0,
    style: {
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "scroll-x"
  }, /*#__PURE__*/React.createElement("table", {
    className: "tbl"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Account"), /*#__PURE__*/React.createElement("th", null, "ID"), /*#__PURE__*/React.createElement("th", null, "Status"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Spend"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Impressions"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Clicks"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "CTR"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "CPC"))), /*#__PURE__*/React.createElement("tbody", null, D.ads.accounts.map(a => /*#__PURE__*/React.createElement("tr", {
    key: a.n
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      fontWeight: 600
    }
  }, a.n), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      color: "var(--ink-mute)"
    }
  }, a.id), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(Badge, {
    tone: a.status === "Paused" ? "warn" : "mute"
  }, a.status)), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, fmt.usd(a.spend)), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, fmt.n(a.imp)), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, fmt.n(a.clicks)), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, fmt.pct(a.ctr, 2)), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, fmt.usd(a.cpc)))))))), /*#__PURE__*/React.createElement(Note, {
    tone: "warn",
    icon: "!"
  }, "Before spend turns back on you need a cost-per-customer ceiling that finance sets and marketing can't move. That number can't be computed until attribution is rebuilt, which makes the rebuild a prerequisite for the Q4 budget rather than a parallel task."));
}

/* ============================== SOCIAL ============================== */
function Social() {
  return /*#__PURE__*/React.createElement("div", {
    className: "page-in"
  }, /*#__PURE__*/React.createElement(PageHead, {
    title: "Social",
    sub: "Organic reach and engagement across every platform."
  }), /*#__PURE__*/React.createElement(G, {
    c: 4,
    style: {
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement(KPI, {
    label: "Total following",
    value: "39.5K",
    tone: "ink",
    delta: 2.4
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Posts \xB7 30d",
    value: "39",
    tone: "ink"
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Best performer",
    value: "TikTok",
    tone: "good",
    sub: "5.1% engagement"
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Attributed revenue",
    value: "-",
    tone: "mute",
    sub: "needs attribution"
  })), /*#__PURE__*/React.createElement(Card, {
    pad: 0
  }, /*#__PURE__*/React.createElement("div", {
    className: "scroll-x"
  }, /*#__PURE__*/React.createElement("table", {
    className: "tbl"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Platform"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Followers"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Growth \xB7 30d"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Posts"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Engagement"), /*#__PURE__*/React.createElement("th", null, "Trend"))), /*#__PURE__*/React.createElement("tbody", null, D.ads.social.map(s => /*#__PURE__*/React.createElement("tr", {
    key: s.n
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      fontWeight: 600
    }
  }, s.n), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, s.followers), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right",
      color: s.growth > 0 ? "var(--good)" : "var(--bad)"
    }
  }, s.growth > 0 ? "+" : "", s.growth, "%"), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, s.posts), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right",
      color: T(s.tone)
    }
  }, s.eng), /*#__PURE__*/React.createElement("td", {
    style: {
      width: 100
    }
  }, /*#__PURE__*/React.createElement(Spark, {
    data: s.growth > 0 ? [10, 12, 13, 15, 18] : [18, 16, 15, 13, 12],
    tone: s.tone,
    h: 24,
    fill: false
  })))))))));
}

/* ============================== INVENTORY ============================== */
function Inventory() {
  const [st, setSt] = useState("All");
  const [open, setOpen] = useState({});
  const L = {
    critical: "Stockout risk",
    warning: "Reorder soon",
    healthy: "Healthy",
    over: "Overstocked"
  };
  const TN = {
    critical: "bad",
    warning: "warn",
    healthy: "good",
    over: "info"
  };
  const rows = D.inventory.filter(s => st === "All" || s.st === st);
  const risk = D.inventory.filter(s => s.st === "critical" || s.st === "warning");
  const po = risk.reduce((a, b) => a + b.po, 0);
  return /*#__PURE__*/React.createElement("div", {
    className: "page-in"
  }, /*#__PURE__*/React.createElement(PageHead, {
    title: "Inventory",
    sub: "What you have, how fast it moves, and whether you can afford the reorder.",
    right: /*#__PURE__*/React.createElement(Seg, {
      options: ["All", "critical", "warning", "healthy", "over"].map(v => ({
        v,
        l: v === "All" ? "All" : L[v]
      })),
      value: st,
      onChange: setSt
    })
  }), /*#__PURE__*/React.createElement(G, {
    c: 4,
    style: {
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement(KPI, {
    label: "At risk",
    value: String(risk.length),
    tone: "bad",
    sub: "2 critical \xB7 2 warning"
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Free cash",
    value: "$17,847",
    tone: "good",
    sub: "above the floor"
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Reorder cost",
    value: fmt.usd(po),
    tone: "warn",
    sub: "all at-risk products"
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Shortfall",
    value: fmt.usd(po - 17847),
    tone: "bad",
    sub: "sequence or use credit"
  })), /*#__PURE__*/React.createElement(Card, {
    pad: 0
  }, /*#__PURE__*/React.createElement("div", {
    className: "scroll-x"
  }, /*#__PURE__*/React.createElement("table", {
    className: "tbl"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    style: {
      width: 26
    }
  }), /*#__PURE__*/React.createElement("th", null, "Product"), /*#__PURE__*/React.createElement("th", null, "Category"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "On hand"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Velocity"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Cover"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Lead time"), /*#__PURE__*/React.createElement("th", null, "Cover against lead"), /*#__PURE__*/React.createElement("th", null, "Incoming"), /*#__PURE__*/React.createElement("th", null, "Status"))), /*#__PURE__*/React.createElement("tbody", null, rows.map(s => {
    const o = !!open[s.sku];
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: s.sku
    }, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
      style: {
        padding: "9px 6px 9px 13px"
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setOpen(x => ({
        ...x,
        [s.sku]: !x[s.sku]
      })),
      style: {
        border: "1px solid var(--rule)",
        background: o ? "var(--accent-tint)" : "transparent",
        color: o ? "var(--accent)" : "var(--ink-mute)",
        width: 21,
        height: 21,
        borderRadius: 5,
        cursor: "pointer",
        display: "grid",
        placeItems: "center",
        padding: 0,
        fontSize: 9
      }
    }, o ? "\u25BE" : "\u25B8")), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 600
      }
    }, s.sku), s.note && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10,
        color: "var(--ink-mute)"
      }
    }, s.note)), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(Badge, {
      tone: s.cat === "Chocolate" ? "accent" : s.cat === "Gummies" ? "info" : "mute"
    }, s.cat)), /*#__PURE__*/React.createElement("td", {
      className: "num",
      style: {
        textAlign: "right"
      }
    }, fmt.n(s.hand)), /*#__PURE__*/React.createElement("td", {
      className: "num",
      style: {
        textAlign: "right"
      }
    }, s.vel ? s.vel + "/day" : "-"), /*#__PURE__*/React.createElement("td", {
      className: "num",
      style: {
        textAlign: "right",
        fontWeight: 600,
        color: T(TN[s.st])
      }
    }, s.cover, "d"), /*#__PURE__*/React.createElement("td", {
      className: "num",
      style: {
        textAlign: "right",
        color: "var(--ink-soft)"
      }
    }, s.lead, "d"), /*#__PURE__*/React.createElement("td", {
      style: {
        width: 140
      }
    }, /*#__PURE__*/React.createElement(Bar, {
      pct: Math.min(s.cover / (s.lead * 3) * 100, 100),
      tone: TN[s.st]
    }), s.cover > 0 && s.cover < s.lead && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 9.5,
        color: "var(--bad)"
      }
    }, "inside lead time")), /*#__PURE__*/React.createElement("td", null, s.inc ? /*#__PURE__*/React.createElement(Badge, {
      tone: "good"
    }, "On order") : /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--ink-mute)",
        fontSize: 11
      }
    }, "-")), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(Badge, {
      tone: TN[s.st]
    }, L[s.st]))), o && /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
      colSpan: 10,
      style: {
        background: "var(--surface-2)",
        padding: "15px 18px"
      }
    }, /*#__PURE__*/React.createElement(G, {
      c: 4,
      gap: 18
    }, [["Reorder cost", s.po ? fmt.usd(s.po) : "Not scheduled"], ["Runs out", s.cover ? `in ${s.cover} days` : "already out"], ["Lead time", `${s.lead} days`], ["Verdict", s.po > 17847 ? "Needs sequencing or credit" : s.po ? "Fundable from free cash" : "No action"]].map(([l, v]) => /*#__PURE__*/React.createElement("div", {
      key: l
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 9.5,
        fontWeight: 700,
        letterSpacing: "0.06em",
        textTransform: "uppercase",
        color: "var(--ink-mute)",
        marginBottom: 4
      }
    }, l), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        fontWeight: 500
      }
    }, v)))))));
  }))))));
}

/* ============================== PRODUCTION ============================== */
function Production() {
  return /*#__PURE__*/React.createElement("div", {
    className: "page-in"
  }, /*#__PURE__*/React.createElement(PageHead, {
    title: "Production",
    sub: "Every run, what went in, what came out, and what it cost.",
    meta: "Own kitchen for chocolate. Contract manufacturer for gummies and capsules."
  }), /*#__PURE__*/React.createElement(G, {
    c: 4,
    style: {
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement(KPI, {
    label: "Runs logged",
    value: "0 of 30",
    tone: "bad",
    sub: "three per product"
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Average yield",
    value: "90.2%",
    tone: "warn",
    sub: "estimated, not measured"
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Next run",
    value: "Late Sep",
    tone: "warn",
    sub: "Dubai Chocolate"
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Cost confidence",
    value: "Low",
    tone: "bad",
    sub: "33% error bar",
    help: "Until three runs per product are logged."
  })), /*#__PURE__*/React.createElement(G, {
    c: 2,
    name: "2h",
    gap: 16,
    style: {
      gridTemplateColumns: "1.5fr 1fr"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    pad: 0
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "18px 18px 0"
    }
  }, /*#__PURE__*/React.createElement(SecLabel, {
    icon: "factory"
  }, "Production runs")), /*#__PURE__*/React.createElement("div", {
    className: "scroll-x"
  }, /*#__PURE__*/React.createElement("table", {
    className: "tbl"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Date"), /*#__PURE__*/React.createElement("th", null, "Product"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Input"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Output"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Yield"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Cost / unit"), /*#__PURE__*/React.createElement("th", null, "Status"))), /*#__PURE__*/React.createElement("tbody", null, D.production.runs.map((r, i) => /*#__PURE__*/React.createElement("tr", {
    key: i
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      color: r.st === "scheduled" ? "var(--ink-mute)" : "var(--ink)"
    }
  }, r.d), /*#__PURE__*/React.createElement("td", {
    style: {
      fontWeight: 600
    }
  }, r.product), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, r.input), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, r.output), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, r.yield ? fmt.pct(r.yield) : "-"), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, r.cost ? fmt.usd(r.cost, 2) : "-"), /*#__PURE__*/React.createElement("td", null, r.st === "scheduled" ? /*#__PURE__*/React.createElement(Badge, {
    tone: "mute"
  }, "Scheduled") : /*#__PURE__*/React.createElement(Badge, {
    tone: "warn"
  }, "Estimated")))))))), /*#__PURE__*/React.createElement(Card, {
    pad: 20
  }, /*#__PURE__*/React.createElement(SecLabel, {
    icon: "money"
  }, "Confirmed rates"), D.production.rates.map(r => /*#__PURE__*/React.createElement("div", {
    key: r.l,
    style: {
      display: "flex",
      justifyContent: "space-between",
      padding: "10px 0",
      borderBottom: "1px solid var(--rule-soft)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      color: "var(--ink-soft)"
    }
  }, r.l), /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      fontSize: 13,
      fontWeight: 600
    }
  }, r.v))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(Note, {
    tone: "bad",
    icon: "!"
  }, "No run has been logged with all fields yet. Until three land per product, cost per unit stays an estimate and margin stays a guess.")))));
}

/* ============================== SUPPLIERS ============================== */
function Suppliers() {
  return /*#__PURE__*/React.createElement("div", {
    className: "page-in"
  }, /*#__PURE__*/React.createElement(PageHead, {
    title: "Suppliers",
    sub: "Who you depend on, on what terms, and how exposed that makes you."
  }), /*#__PURE__*/React.createElement(G, {
    c: 4,
    style: {
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement(KPI, {
    label: "Active suppliers",
    value: "5",
    tone: "ink"
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "On payment terms",
    value: "1 of 5",
    tone: "bad",
    sub: "rest are pay up front",
    help: "Supplier terms are free working capital nobody has asked for."
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Annual spend",
    value: "$233K",
    tone: "ink"
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Single points of failure",
    value: "2",
    tone: "bad",
    sub: "manufacturer and kitchen"
  })), /*#__PURE__*/React.createElement(Card, {
    pad: 0
  }, /*#__PURE__*/React.createElement("div", {
    className: "scroll-x"
  }, /*#__PURE__*/React.createElement("table", {
    className: "tbl"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Supplier"), /*#__PURE__*/React.createElement("th", null, "What they supply"), /*#__PURE__*/React.createElement("th", null, "Terms"), /*#__PURE__*/React.createElement("th", null, "Lead time"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Annual spend"), /*#__PURE__*/React.createElement("th", null, "Risk"))), /*#__PURE__*/React.createElement("tbody", null, D.suppliers.map(s => /*#__PURE__*/React.createElement("tr", {
    key: s.n
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      fontWeight: 600
    }
  }, s.n), /*#__PURE__*/React.createElement("td", {
    style: {
      color: "var(--ink-soft)"
    }
  }, s.what), /*#__PURE__*/React.createElement("td", {
    className: "mono",
    style: {
      fontSize: 12
    }
  }, s.terms), /*#__PURE__*/React.createElement("td", {
    className: "num"
  }, s.lead), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, fmt.usd(s.spend)), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(Badge, {
    tone: s.risk
  }, s.risk === "good" ? "Low" : s.risk === "warn" ? "Watch" : "High")))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 18
    }
  }), /*#__PURE__*/React.createElement(Note, {
    tone: "warn",
    icon: "!"
  }, "You pay the manufacturer one hundred percent up front. Even net 30 on that one relationship would free up working capital equal to about a month of inventory spend, and it costs nothing to ask."), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 14
    }
  }), /*#__PURE__*/React.createElement(Note, {
    tone: "info",
    icon: "i"
  }, "Bills of materials live in the Vault under Team OS, next to the supplier agreements they belong with."));
}

/* ============================== AGENTS ============================== */
function Agents() {
  return /*#__PURE__*/React.createElement("div", {
    className: "page-in"
  }, /*#__PURE__*/React.createElement(PageHead, {
    title: "Agents",
    sub: "Automated workers that run a function without a person in the loop.",
    meta: "Outside the current engagement scope. Scoped here so the dashboard has somewhere to put them."
  }), /*#__PURE__*/React.createElement(G, {
    c: 4,
    style: {
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement(KPI, {
    label: "Agents planned",
    value: "4",
    tone: "violet"
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Live",
    value: "0",
    tone: "mute"
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Shelved",
    value: "1",
    tone: "mute",
    sub: "creator program wound down"
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Estimated load removed",
    value: "~22 hrs / wk",
    tone: "good",
    sub: "once all four run"
  })), /*#__PURE__*/React.createElement(G, {
    c: 2,
    name: "2",
    gap: 14
  }, D.agents.map(a => /*#__PURE__*/React.createElement(Card, {
    key: a.n,
    pad: 18,
    hover: true,
    style: {
      opacity: a.s === "shelved" ? 0.55 : 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      marginBottom: 9
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 32,
      height: 32,
      borderRadius: 8,
      background: "var(--violet-tint)",
      color: "var(--violet)",
      display: "grid",
      placeItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Ico, {
    n: "agents",
    s: 17
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14.5,
      fontWeight: 600
    }
  }, a.n)), /*#__PURE__*/React.createElement(Badge, {
    tone: a.s === "planned" ? "violet" : "mute"
  }, a.s === "planned" ? "Planned" : "Shelved")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 12.5,
      color: "var(--ink-soft)",
      lineHeight: 1.55,
      marginBottom: 11
    }
  }, a.d), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 11,
      borderTop: "1px solid var(--rule-soft)",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      fontWeight: 700,
      letterSpacing: "0.06em",
      textTransform: "uppercase",
      color: "var(--ink-mute)"
    }
  }, "Impact"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: "var(--good)"
    }
  }, a.impact))))));
}

/* ============================== VAULT ============================== */
function Vault() {
  return /*#__PURE__*/React.createElement("div", {
    className: "page-in"
  }, /*#__PURE__*/React.createElement(PageHead, {
    title: "Vault",
    sub: "Contracts, agreements and anything that would hurt to lose.",
    meta: "Access controlled. Everything here lives in accounts you own."
  }), /*#__PURE__*/React.createElement(G, {
    c: 3,
    name: "3",
    gap: 14,
    style: {
      marginBottom: 24
    }
  }, D.vault.map(v => /*#__PURE__*/React.createElement(Card, {
    key: v.n,
    pad: 18,
    hover: true,
    style: {
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 11,
      marginBottom: 11
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 34,
      height: 34,
      borderRadius: 9,
      background: TT(v.tone),
      color: T(v.tone),
      display: "grid",
      placeItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Ico, {
    n: "lock",
    s: 16
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600
    }
  }, v.n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "var(--ink-mute)"
    }
  }, v.c, " documents"))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 11.5,
      color: "var(--ink-soft)"
    }
  }, v.note)))), /*#__PURE__*/React.createElement(SecLabel, {
    icon: "file",
    right: "recently updated"
  }, "Drive"), /*#__PURE__*/React.createElement(Card, {
    pad: 0
  }, /*#__PURE__*/React.createElement("div", {
    className: "scroll-x"
  }, /*#__PURE__*/React.createElement("table", {
    className: "tbl"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Name"), /*#__PURE__*/React.createElement("th", null, "Type"), /*#__PURE__*/React.createElement("th", null, "Updated"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Size"))), /*#__PURE__*/React.createElement("tbody", null, D.drive.map(f => /*#__PURE__*/React.createElement("tr", {
    key: f.n,
    style: {
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 9
    }
  }, /*#__PURE__*/React.createElement(Ico, {
    n: "file",
    s: 14
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 500
    }
  }, f.n))), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(Badge, {
    tone: "mute"
  }, f.t)), /*#__PURE__*/React.createElement("td", {
    style: {
      color: "var(--ink-mute)"
    }
  }, f.d), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right",
      color: "var(--ink-mute)"
    }
  }, f.size))))))));
}

/* ============================== DATA HEALTH ============================== */
function DataHealth() {
  const ST = {
    live: "good",
    partial: "warn",
    blocked: "bad",
    waiting: "info"
  };
  const SL = {
    live: "Connected",
    partial: "Partial",
    blocked: "Blocked",
    waiting: "Waiting"
  };
  const RT = {
    high: "good",
    medium: "warn",
    low: "bad",
    none: "bad"
  };
  const RL = {
    high: "Act on it",
    medium: "Check first",
    low: "Directional",
    none: "Not usable"
  };
  const RP = {
    high: 100,
    medium: 65,
    low: 32,
    none: 8
  };
  const live = D.dataHealth.filter(s => s.s === "live").length;
  return /*#__PURE__*/React.createElement("div", {
    className: "page-in"
  }, /*#__PURE__*/React.createElement(PageHead, {
    title: "Data health",
    sub: "Which numbers on this dashboard you can act on, and which are still being built.",
    meta: "A dashboard that shows a confident wrong number is worse than one that admits what it doesn't know."
  }), /*#__PURE__*/React.createElement(G, {
    c: 4,
    style: {
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement(KPI, {
    label: "Sources connected",
    value: `${live} of ${D.dataHealth.length}`,
    tone: live > 7 ? "good" : "warn"
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Blocked on access",
    value: "3",
    tone: "bad",
    sub: "warehouse, email, attribution"
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Numbers you can act on",
    value: "3 of 9",
    tone: "warn"
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Waiting on the kitchen",
    value: "1",
    tone: "warn",
    sub: "margin per unit"
  })), /*#__PURE__*/React.createElement(G, {
    c: 2,
    name: "2h",
    gap: 16,
    style: {
      gridTemplateColumns: "1fr 1.15fr"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    pad: 20
  }, /*#__PURE__*/React.createElement(SecLabel, {
    icon: "pulse"
  }, "Sources"), D.dataHealth.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.n,
    style: {
      display: "grid",
      gridTemplateColumns: "1fr auto",
      gap: 12,
      alignItems: "center",
      padding: "9px 0",
      borderBottom: "1px solid var(--rule-soft)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      fontWeight: 500
    }
  }, s.n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10.5,
      color: "var(--ink-mute)"
    }
  }, s.d)), /*#__PURE__*/React.createElement(Badge, {
    tone: ST[s.s]
  }, SL[s.s])))), /*#__PURE__*/React.createElement(Card, {
    pad: 20
  }, /*#__PURE__*/React.createElement(SecLabel, {
    icon: "target"
  }, "How much to trust each number"), D.reliability.map(r => /*#__PURE__*/React.createElement("div", {
    key: r.a,
    style: {
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      fontWeight: 500
    }
  }, r.a), /*#__PURE__*/React.createElement(Badge, {
    tone: RT[r.l]
  }, RL[r.l])), /*#__PURE__*/React.createElement(Bar, {
    pct: RP[r.l],
    tone: RT[r.l]
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 10.5,
      color: "var(--ink-mute)",
      marginTop: 4
    }
  }, r.n))))));
}

/* ==== pages-3.jsx ==== */
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// pages-3.jsx - second pass. Marketing performance, LTV and CAC ceiling,
// Retention, the customer-centric Operations reframe, Cost trend, Fulfillment.

/* ============================== MARKETING PERFORMANCE ============================== */
function MktPerf() {
  const m = D2.mkt;
  const [tab, setTab] = useState("channels");
  return /*#__PURE__*/React.createElement("div", {
    className: "page-in"
  }, /*#__PURE__*/React.createElement(PageHead, {
    title: "Marketing performance",
    sub: m.note,
    right: /*#__PURE__*/React.createElement(Seg, {
      options: [{
        v: "channels",
        l: "Channels"
      }, {
        v: "trend",
        l: "Trend"
      }, {
        v: "creative",
        l: "Creative"
      }],
      value: tab,
      onChange: setTab
    })
  }), /*#__PURE__*/React.createElement(G, {
    c: 6,
    name: "6",
    style: {
      marginBottom: 24
    }
  }, m.headline.map(k => /*#__PURE__*/React.createElement(KPI, _extends({
    key: k.label
  }, k)))), tab === "channels" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Card, {
    pad: 0,
    style: {
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "scroll-x"
  }, /*#__PURE__*/React.createElement("table", {
    className: "tbl"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Channel"), /*#__PURE__*/React.createElement("th", null, "Status"), /*#__PURE__*/React.createElement("th", null, "Share"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Spend"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Impressions"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Clicks"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "CTR"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "CPC"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "CPM"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Conversions"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "CPA"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "ROAS"))), /*#__PURE__*/React.createElement("tbody", null, m.channels.map(c => /*#__PURE__*/React.createElement("tr", {
    key: c.n
  }, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600
    }
  }, c.n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10.5,
      color: "var(--ink-mute)",
      maxWidth: 230
    }
  }, c.note)), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(Badge, {
    tone: c.status === "Live" ? "good" : c.status === "Paused" ? "warn" : "mute"
  }, c.status)), /*#__PURE__*/React.createElement("td", {
    style: {
      color: "var(--ink-soft)",
      fontSize: 12
    }
  }, c.share), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, fmt.usd(c.spend)), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, fmt.n(c.imp)), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, fmt.n(c.clicks)), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, fmt.pct(c.ctr, 2)), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, fmt.usd(c.cpc, 2)), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, fmt.usd(c.cpm, 2)), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, fmt.n(c.conv)), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, c.cpa ? fmt.usd(c.cpa) : "-"), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right",
      fontWeight: 600
    }
  }, c.roas ? c.roas.toFixed(2) + "x" : "-"))))))), /*#__PURE__*/React.createElement(Note, {
    tone: "warn",
    icon: "!"
  }, "Every metric here comes out of the box from the order platform. It isn't readable today, which is the reason this dashboard exists. Once spend turns on, the number that governs is the CAC ceiling, not ROAS.")), tab === "trend" && /*#__PURE__*/React.createElement(G, {
    c: 2,
    name: "2",
    gap: 16
  }, /*#__PURE__*/React.createElement(Card, {
    pad: 20
  }, /*#__PURE__*/React.createElement(SecLabel, {
    icon: "mkt",
    right: "six months"
  }, "Spend against attributed revenue"), /*#__PURE__*/React.createElement(BarChart, {
    data: m.trend.map(t => ({
      m: t.m,
      v: t.spend,
      tone: t.spend ? "violet" : "mute"
    })),
    h: 150
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 11.5,
      color: "var(--ink-mute)",
      marginTop: 11
    }
  }, "Spend paused in August. The revenue line beside it isn't reliable until attribution is rebuilt.")), /*#__PURE__*/React.createElement(Card, {
    pad: 20
  }, /*#__PURE__*/React.createElement(SecLabel, {
    icon: "rev",
    right: "six months"
  }, "Attributed revenue"), /*#__PURE__*/React.createElement(Line, {
    data: m.trend.map(t => ({
      m: t.m,
      v: t.rev
    })),
    tone: "info",
    h: 150,
    vf: fmt.k
  }))), tab === "creative" && /*#__PURE__*/React.createElement(Card, {
    pad: 0
  }, /*#__PURE__*/React.createElement("div", {
    className: "scroll-x"
  }, /*#__PURE__*/React.createElement("table", {
    className: "tbl"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Creative"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Spend"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Impressions"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "CTR"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "CPA"), /*#__PURE__*/React.createElement("th", null, "Status"))), /*#__PURE__*/React.createElement("tbody", null, m.creative.map(c => /*#__PURE__*/React.createElement("tr", {
    key: c.n
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      fontWeight: 600
    }
  }, c.n), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, fmt.usd(c.spend)), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, fmt.n(c.imp)), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, fmt.pct(c.ctr, 2)), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, c.cpa ? fmt.usd(c.cpa) : "-"), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(Badge, {
    tone: c.st === "paused" ? "warn" : "mute"
  }, c.st === "paused" ? "Paused" : "Draft")))))))));
}

/* ============================== LTV AND CAC CEILING ============================== */
function LTV() {
  const l = D2.ltv;
  const [view, setView] = useState("category");
  const rows = view === "category" ? l.byCategory : view === "coupon" ? l.byCoupon : null;
  const cell = v => v == null ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ink-mute)"
    }
  }, "-") : /*#__PURE__*/React.createElement("span", {
    className: "num",
    style: {
      color: v < 0 ? "var(--bad)" : "var(--ink)"
    }
  }, fmt.usd(v, 2));
  return /*#__PURE__*/React.createElement("div", {
    className: "page-in"
  }, /*#__PURE__*/React.createElement(PageHead, {
    title: "LTV and CAC ceiling",
    sub: l.note,
    right: /*#__PURE__*/React.createElement(Seg, {
      options: [{
        v: "category",
        l: "By category"
      }, {
        v: "coupon",
        l: "By coupon"
      }, {
        v: "cohort",
        l: "By cohort"
      }],
      value: view,
      onChange: setView
    })
  }), /*#__PURE__*/React.createElement(G, {
    c: 4,
    style: {
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement(KPI, {
    label: "CAC ceiling, blended",
    value: "$79",
    tone: "warn",
    sub: "at 90 days",
    help: "The most you can pay for a customer and still be profitable inside 90 days."
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Best category",
    value: "Bundle",
    tone: "good",
    sub: "$118 ceiling at 90 days"
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Worst offer",
    value: "BOGO",
    tone: "bad",
    sub: "loses money on first order"
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Profitable on first order",
    value: "4 of 5 offers",
    tone: "good",
    sub: "BOGO is the exception"
  })), rows && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Card, {
    pad: 0,
    style: {
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "scroll-x"
  }, /*#__PURE__*/React.createElement("table", {
    className: "tbl"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, view === "category" ? "Category" : "Offer"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "First order"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "30 days"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "90 days"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "180 days"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "CAC ceiling"), /*#__PURE__*/React.createElement("th", null, "Profitable from"))), /*#__PURE__*/React.createElement("tbody", null, rows.map(r => /*#__PURE__*/React.createElement("tr", {
    key: r.n
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      fontWeight: 600
    }
  }, r.n), /*#__PURE__*/React.createElement("td", {
    style: {
      textAlign: "right"
    }
  }, cell(r.first)), /*#__PURE__*/React.createElement("td", {
    style: {
      textAlign: "right"
    }
  }, cell(r.d30)), /*#__PURE__*/React.createElement("td", {
    style: {
      textAlign: "right"
    }
  }, cell(r.d90)), /*#__PURE__*/React.createElement("td", {
    style: {
      textAlign: "right"
    }
  }, cell(r.d180)), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right",
      fontWeight: 700,
      color: T(r.tone)
    }
  }, r.ceiling ? fmt.usd(r.ceiling) : "-"), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(Badge, {
    tone: r.tone
  }, r.profitAt)))))))), /*#__PURE__*/React.createElement(Note, {
    tone: "info",
    icon: "i"
  }, "Contribution per customer at each window. The ceiling is what you can pay to acquire one and still be in profit by ninety days. Anything above it buys revenue and loses money.")), view === "cohort" && /*#__PURE__*/React.createElement(Card, {
    pad: 0
  }, /*#__PURE__*/React.createElement("div", {
    className: "scroll-x"
  }, /*#__PURE__*/React.createElement("table", {
    className: "tbl"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Cohort"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Customers"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "First order"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "30 days"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "90 days"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "180 days"))), /*#__PURE__*/React.createElement("tbody", null, l.cohorts.map(c => /*#__PURE__*/React.createElement("tr", {
    key: c.c
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      fontWeight: 600
    }
  }, c.c), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, c.n), /*#__PURE__*/React.createElement("td", {
    style: {
      textAlign: "right"
    }
  }, cell(c.first)), /*#__PURE__*/React.createElement("td", {
    style: {
      textAlign: "right"
    }
  }, cell(c.d30)), /*#__PURE__*/React.createElement("td", {
    style: {
      textAlign: "right"
    }
  }, cell(c.d90)), /*#__PURE__*/React.createElement("td", {
    style: {
      textAlign: "right"
    }
  }, cell(c.d180)))))))));
}

/* ============================== RETENTION ============================== */
function Retention() {
  const r = D2.retention;
  return /*#__PURE__*/React.createElement("div", {
    className: "page-in"
  }, /*#__PURE__*/React.createElement(PageHead, {
    title: "Retention",
    sub: r.note
  }), /*#__PURE__*/React.createElement(G, {
    c: 6,
    name: "6",
    style: {
      marginBottom: 24
    }
  }, r.kpi.map(k => /*#__PURE__*/React.createElement(KPI, _extends({
    key: k.label
  }, k)))), /*#__PURE__*/React.createElement(G, {
    c: 2,
    name: "2h",
    gap: 16,
    style: {
      gridTemplateColumns: "1.3fr 1fr",
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement(Card, {
    pad: 20
  }, /*#__PURE__*/React.createElement(SecLabel, {
    icon: "rev",
    right: "six months"
  }, "Existing against new"), /*#__PURE__*/React.createElement(Line, {
    data: r.split.map(s => ({
      m: s.m,
      v: s.existing
    })),
    tone: "good",
    h: 165,
    vf: v => v + "%",
    yMin: 20,
    yMax: 50
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 11.5,
      color: "var(--ink-mute)",
      marginTop: 11
    }
  }, "Share of revenue from customers who had already bought. Climbing slowly. Every point here is revenue you don't pay to acquire twice.")), /*#__PURE__*/React.createElement(Card, {
    pad: 20
  }, /*#__PURE__*/React.createElement(SecLabel, {
    icon: "funnel"
  }, "Where existing revenue comes from"), /*#__PURE__*/React.createElement(HBars, {
    data: r.sources,
    labelW: 130,
    showPct: true
  }))), /*#__PURE__*/React.createElement(G, {
    c: 2,
    name: "2",
    gap: 16
  }, /*#__PURE__*/React.createElement(Card, {
    pad: 20
  }, /*#__PURE__*/React.createElement(SecLabel, {
    icon: "mkt",
    right: "six months"
  }, "Email revenue"), /*#__PURE__*/React.createElement(BarChart, {
    data: r.emailTrend.map((e, i) => ({
      ...e,
      tone: i === 5 ? "accent" : "info"
    })),
    h: 140
  })), /*#__PURE__*/React.createElement(Card, {
    pad: 20
  }, /*#__PURE__*/React.createElement(SecLabel, {
    icon: "team",
    right: "six months"
  }, "Referral code usage"), /*#__PURE__*/React.createElement(BarChart, {
    data: r.referralTrend.map((e, i) => ({
      ...e,
      tone: i === 5 ? "accent" : "violet"
    })),
    h: 140,
    vf: fmt.n
  }))));
}

/* ============================== OPERATIONS, CUSTOMER CENTRIC ============================== */
function OpsHealth() {
  const o = D2.ops;
  return /*#__PURE__*/React.createElement("div", {
    className: "page-in"
  }, /*#__PURE__*/React.createElement(PageHead, {
    title: "Customer experience",
    sub: o.note
  }), /*#__PURE__*/React.createElement(G, {
    c: 6,
    name: "6",
    style: {
      marginBottom: 24
    }
  }, o.kpi.map(k => /*#__PURE__*/React.createElement(KPI, _extends({
    key: k.label
  }, k)))), /*#__PURE__*/React.createElement(G, {
    c: 2,
    name: "2h",
    gap: 16,
    style: {
      gridTemplateColumns: "1fr 1.4fr"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    pad: 20
  }, /*#__PURE__*/React.createElement(SecLabel, {
    icon: "truck",
    right: "six months"
  }, "Order to doorstep"), /*#__PURE__*/React.createElement(Line, {
    data: o.deliver,
    tone: "good",
    h: 165,
    vf: v => v + "d",
    target: 3,
    tLabel: "3 day target"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 11.5,
      color: "var(--ink-mute)",
      marginTop: 11
    }
  }, "Median, from payment to arrival. Down from 5.1 days in April.")), /*#__PURE__*/React.createElement(Card, {
    pad: 0
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "18px 18px 0"
    }
  }, /*#__PURE__*/React.createElement(SecLabel, {
    icon: "alert",
    right: "last " + PERIOD.label
  }, "What cost you a customer")), /*#__PURE__*/React.createElement("div", {
    className: "scroll-x"
  }, /*#__PURE__*/React.createElement("table", {
    className: "tbl"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Friction"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Count"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Revenue lost"), /*#__PURE__*/React.createElement("th", null, "What fixes it"))), /*#__PURE__*/React.createElement("tbody", null, o.friction.map(f => /*#__PURE__*/React.createElement("tr", {
    key: f.n
  }, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot",
    style: {
      background: T(f.tone)
    }
  }), f.n)), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right",
      fontWeight: 600
    }
  }, f.count), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right",
      color: f.cost ? "var(--bad)" : "var(--ink-mute)"
    }
  }, f.cost ? fmt.usd(f.cost) : "-"), /*#__PURE__*/React.createElement("td", {
    style: {
      color: "var(--ink-soft)",
      fontSize: 12
    }
  }, f.fix)))))))));
}

/* ============================== COST TREND ============================== */
function CostTrend() {
  const o = D2.ops;
  return /*#__PURE__*/React.createElement("div", {
    className: "page-in"
  }, /*#__PURE__*/React.createElement(PageHead, {
    title: "Cost trend",
    sub: "What it costs to make each product, and which way it's moving.",
    meta: "The only number worth keeping from the old products view."
  }), /*#__PURE__*/React.createElement(G, {
    c: 4,
    style: {
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement(KPI, {
    label: "Blended cost per unit",
    value: "$6.84",
    tone: "good",
    delta: -5.1,
    sub: "down from $7.21 in April"
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Products measured",
    value: "6 of 8",
    tone: "warn",
    sub: "two on placeholder"
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Cheapest to make",
    value: "$8.16",
    tone: "good",
    sub: "a gummy tin, 88.2% margin"
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Most expensive",
    value: "$11.65",
    tone: "warn",
    sub: "a chocolate box at 8 pieces"
  })), /*#__PURE__*/React.createElement(G, {
    c: 2,
    name: "2h",
    gap: 16,
    style: {
      gridTemplateColumns: "1fr 1.3fr"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    pad: 20
  }, /*#__PURE__*/React.createElement(SecLabel, {
    icon: "chart",
    right: "six months"
  }, "Blended cost per unit"), /*#__PURE__*/React.createElement(Line, {
    data: o.costSeries,
    tone: "good",
    h: 170,
    vf: v => "$" + v.toFixed(2)
  })), /*#__PURE__*/React.createElement(Card, {
    pad: 0
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "18px 18px 0"
    }
  }, /*#__PURE__*/React.createElement(SecLabel, {
    icon: "factory"
  }, "By product")), /*#__PURE__*/React.createElement("div", {
    className: "scroll-x"
  }, /*#__PURE__*/React.createElement("table", {
    className: "tbl"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Product"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Current"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Previous"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Change"), /*#__PURE__*/React.createElement("th", null, "Basis"))), /*#__PURE__*/React.createElement("tbody", null, o.costTrend.map(c => {
    const d = c.cur - c.prev;
    return /*#__PURE__*/React.createElement("tr", {
      key: c.n
    }, /*#__PURE__*/React.createElement("td", {
      style: {
        fontWeight: 600
      }
    }, c.n), /*#__PURE__*/React.createElement("td", {
      className: "num",
      style: {
        textAlign: "right",
        color: c.basis === "placeholder" ? "var(--bad)" : "var(--ink)"
      }
    }, fmt.usd(c.cur, 2)), /*#__PURE__*/React.createElement("td", {
      className: "num",
      style: {
        textAlign: "right",
        color: "var(--ink-mute)"
      }
    }, fmt.usd(c.prev, 2)), /*#__PURE__*/React.createElement("td", {
      className: "num",
      style: {
        textAlign: "right",
        fontWeight: 600,
        color: d === 0 ? "var(--ink-mute)" : d < 0 ? "var(--good)" : "var(--bad)"
      }
    }, d === 0 ? "-" : (d < 0 ? "\u2193" : "\u2191") + fmt.usd(Math.abs(d), 2)), /*#__PURE__*/React.createElement("td", null, c.basis === "measured" ? /*#__PURE__*/React.createElement(Badge, {
      tone: "good"
    }, "Measured") : /*#__PURE__*/React.createElement(Badge, {
      tone: "bad"
    }, "Placeholder")));
  })))))));
}

/* ============================== FULFILLMENT ============================== */
function Fulfillment() {
  const f = D2.fulfillment;
  return /*#__PURE__*/React.createElement("div", {
    className: "page-in"
  }, /*#__PURE__*/React.createElement(PageHead, {
    title: "Fulfillment",
    sub: "What ships, and how much of it your systems can see.",
    meta: "Moved here from Revenue. It is an operations problem, not a revenue one."
  }), /*#__PURE__*/React.createElement(G, {
    c: 4,
    style: {
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement(KPI, {
    label: "Total shipments",
    value: fmt.n(f.shipments.total),
    tone: "ink",
    sub: "July"
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Touched the platform",
    value: fmt.n(f.shipments.onPlatform),
    tone: "good",
    sub: "64.1%"
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Never touched it",
    value: fmt.n(f.shipments.invisible),
    tone: "bad",
    sub: fmt.pct(f.shipments.pct)
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Shipped same day",
    value: "78%",
    tone: "warn",
    sub: "target 90%"
  })), /*#__PURE__*/React.createElement(G, {
    c: 2,
    name: "2h",
    gap: 16,
    style: {
      gridTemplateColumns: "1fr 1.3fr"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    pad: 20
  }, /*#__PURE__*/React.createElement(SecLabel, {
    icon: "box"
  }, "Visible against invisible"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      margin: "14px 0 18px"
    }
  }, /*#__PURE__*/React.createElement(Donut, {
    v: f.shipments.invisible,
    max: f.shipments.total,
    size: 150,
    tone: "bad",
    label: fmt.pct(f.shipments.pct),
    sub: "invisible"
  }))), /*#__PURE__*/React.createElement(Card, {
    pad: 20
  }, /*#__PURE__*/React.createElement(SecLabel, {
    icon: "truck",
    right: "July"
  }, "What the invisible third is"), /*#__PURE__*/React.createElement(HBars, {
    data: f.breakdown,
    vf: fmt.n,
    labelW: 140,
    showPct: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18,
      paddingTop: 15,
      borderTop: "1px solid var(--rule-soft)"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 12,
      color: "var(--ink-soft)",
      lineHeight: 1.55
    }
  }, "Every one of these consumes stock and costs money. None appear as a sale, so shipments and revenue never tie and inventory counts drift. The fix is a cost line and a flag at the point they ship.")))));
}

/* ============================== PHASE 2 PLACEHOLDER ============================== */
function Phase2({
  title,
  why,
  when
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "page-in"
  }, /*#__PURE__*/React.createElement(PageHead, {
    title: title,
    sub: why
  }), /*#__PURE__*/React.createElement(Empty, {
    title: "Deferred to phase two",
    note: when,
    tag: "Phase 2"
  }));
}

/* ==== pages-4.jsx ==== */
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// pages-4.jsx - Today So Far, Daily Performance Tracker, Cohort LTV.
// Data model folded from DB's reference. Layout ours.

function DefFooter() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      gap: 16,
      flexWrap: "wrap",
      marginTop: 22,
      paddingTop: 14,
      borderTop: "1px solid var(--rule)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      letterSpacing: "0.05em",
      textTransform: "uppercase",
      color: "var(--ink-dim)"
    }
  }, D3.defs.netRev), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      letterSpacing: "0.05em",
      textTransform: "uppercase",
      color: "var(--ink-dim)"
    }
  }, D3.defs.profit));
}

/* ============================== TODAY SO FAR ============================== */
function Today() {
  const l = D3.live;
  const totSpend = l.channels.reduce((s, c) => s + (c.spend || 0), 0);
  const totRev = l.channels.reduce((s, c) => s + c.rev, 0);
  return /*#__PURE__*/React.createElement("div", {
    className: "page-in"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 9,
      marginBottom: 9
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot",
    style: {
      background: "var(--good)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10.5,
      fontWeight: 700,
      letterSpacing: "0.09em",
      textTransform: "uppercase",
      color: "var(--good)"
    }
  }, "Live"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10.5,
      color: "var(--ink-mute)"
    }
  }, "\xB7 order stream")), /*#__PURE__*/React.createElement(PageHead, {
    title: "Today so far",
    sub: "How new customer revenue and orders hold up at the current spend level, paced against yesterday to the same hour.",
    right: /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: "right"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "mono",
      style: {
        fontSize: 14,
        fontWeight: 600
      }
    }, l.day), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: "var(--ink-mute)"
      }
    }, l.elapsed, "% of day elapsed"), /*#__PURE__*/React.createElement("div", {
      style: {
        width: 150,
        marginTop: 6
      }
    }, /*#__PURE__*/React.createElement(Bar, {
      pct: l.elapsed,
      tone: "accent",
      h: 4
    })))
  }), /*#__PURE__*/React.createElement(G, {
    c: 6,
    name: "6",
    style: {
      marginBottom: 24
    }
  }, l.head.map(k => /*#__PURE__*/React.createElement(KPI, _extends({
    key: k.label
  }, k)))), /*#__PURE__*/React.createElement(G, {
    c: 2,
    name: "2h",
    gap: 16,
    style: {
      gridTemplateColumns: "1.1fr 1fr"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    pad: 0
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "18px 18px 0"
    }
  }, /*#__PURE__*/React.createElement(SecLabel, {
    icon: "mkt",
    right: "live spend against attributed revenue"
  }, "Spend by channel")), /*#__PURE__*/React.createElement("div", {
    className: "scroll-x"
  }, /*#__PURE__*/React.createElement("table", {
    className: "tbl"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Channel"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Spend"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Revenue"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "ROAS"))), /*#__PURE__*/React.createElement("tbody", null, l.channels.map(c => /*#__PURE__*/React.createElement("tr", {
    key: c.n
  }, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot",
    style: {
      background: T(c.tone)
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600
    }
  }, c.n), c.note && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      color: "var(--ink-mute)"
    }
  }, c.note))), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, c.spend == null ? "N/A" : fmt.usd(c.spend)), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, fmt.usd(c.rev)), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right",
      fontWeight: 600,
      color: c.roas == null ? "var(--ink-mute)" : c.roas >= 3 ? "var(--good)" : "var(--warn)"
    }
  }, c.roas == null ? "N/A" : c.roas.toFixed(2) + "x"))), /*#__PURE__*/React.createElement("tr", {
    style: {
      background: "var(--surface-2)"
    }
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      fontWeight: 700
    }
  }, "Total"), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right",
      fontWeight: 700
    }
  }, fmt.usd(totSpend)), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right",
      fontWeight: 700
    }
  }, fmt.usd(totRev)), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right",
      fontWeight: 700
    }
  }, (totRev / totSpend).toFixed(2), "x")))))), /*#__PURE__*/React.createElement(Card, {
    pad: 20
  }, /*#__PURE__*/React.createElement(SecLabel, {
    icon: "pulse",
    right: "same definitions as the daily tracker"
  }, "Metrics"), /*#__PURE__*/React.createElement(G, {
    c: 3,
    gap: 16
  }, l.metrics.map(m => /*#__PURE__*/React.createElement("div", {
    key: m.label
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 5,
      fontSize: 9.5,
      fontWeight: 700,
      letterSpacing: "0.06em",
      textTransform: "uppercase",
      color: "var(--ink-mute)",
      marginBottom: 4
    }
  }, m.label, /*#__PURE__*/React.createElement(Help, {
    text: m.help
  })), /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 18,
      fontWeight: 600
    }
  }, m.value)))))), /*#__PURE__*/React.createElement(DefFooter, null));
}

/* ============================== DAILY TRACKER ============================== */
function Daily() {
  const d = D3.daily;
  const [chan, setChan] = useState(false);
  const [open, setOpen] = useState(null);
  const delta = v => v == null ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ink-mute)"
    }
  }, "-") : /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      fontSize: 10,
      fontWeight: 650,
      color: v > 0 ? "var(--good)" : "var(--bad)"
    }
  }, v > 0 ? "\u25B2" : "\u25BC", " ", Math.abs(v).toFixed(1), "%");
  const money = v => v == null ? "N/A" : fmt.usd(v);
  return /*#__PURE__*/React.createElement("div", {
    className: "page-in"
  }, /*#__PURE__*/React.createElement(PageHead, {
    title: "Daily performance tracker",
    sub: "One row per day. Spend, acquisition, retention, margin and profit side by side. Click a day to drill into channels.",
    right: /*#__PURE__*/React.createElement("button", {
      onClick: () => setChan(c => !c),
      style: {
        display: "flex",
        alignItems: "center",
        gap: 9,
        border: "1px solid var(--rule)",
        background: chan ? "var(--accent-tint)" : "var(--surface-3)",
        color: chan ? "var(--accent)" : "var(--ink-soft)",
        borderRadius: "var(--r-sm)",
        padding: "7px 13px",
        fontSize: 12,
        fontWeight: 600,
        cursor: "pointer"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 14,
        height: 14,
        borderRadius: 3,
        border: `1.5px solid ${chan ? "var(--accent)" : "var(--ink-mute)"}`,
        background: chan ? "var(--accent)" : "transparent",
        display: "grid",
        placeItems: "center"
      }
    }, chan && /*#__PURE__*/React.createElement("svg", {
      width: "9",
      height: "9",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "#fff",
      strokeWidth: "4"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M5 13l4 4L19 7"
    }))), "Spend by channel")
  }), /*#__PURE__*/React.createElement(Card, {
    pad: 0,
    style: {
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "scroll-x"
  }, /*#__PURE__*/React.createElement("table", {
    className: "tbl"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    colSpan: 6,
    style: {
      color: "var(--accent)"
    }
  }, "Snapshot"), chan ? D3.daily.channels.map(c => /*#__PURE__*/React.createElement("th", {
    key: c.n,
    colSpan: c.spend == null ? 2 : 4,
    style: {
      color: T(c.tone)
    }
  }, c.n)) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("th", {
    colSpan: 5
  }, "Customer orders"), /*#__PURE__*/React.createElement("th", {
    colSpan: 8
  }, "Metrics"))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Date"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Ad spend"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "New ord."), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "NC revenue"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "aMER"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "MER"), chan ? D3.daily.channels.flatMap(c => c.spend == null ? [/*#__PURE__*/React.createElement("th", {
    key: c.n + "r",
    style: {
      textAlign: "right"
    }
  }, "Rev"), /*#__PURE__*/React.createElement("th", {
    key: c.n + "o",
    style: {
      textAlign: "right"
    }
  }, "ROAS")] : [/*#__PURE__*/React.createElement("th", {
    key: c.n + "s",
    style: {
      textAlign: "right"
    }
  }, "Spend"), /*#__PURE__*/React.createElement("th", {
    key: c.n + "f",
    style: {
      textAlign: "right"
    }
  }, "Fcst"), /*#__PURE__*/React.createElement("th", {
    key: c.n + "r",
    style: {
      textAlign: "right"
    }
  }, "Rev"), /*#__PURE__*/React.createElement("th", {
    key: c.n + "o",
    style: {
      textAlign: "right"
    }
  }, "ROAS")]) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "# New"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "$ New"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "# Ret."), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "$ Ret."), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "# Total"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "% NCrev"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "NAOV"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "nCAC"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "ROAS"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Total rev"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Gross margin"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Profit")))), /*#__PURE__*/React.createElement("tbody", null, d.rows.map(r => /*#__PURE__*/React.createElement(React.Fragment, {
    key: r.d
  }, /*#__PURE__*/React.createElement("tr", {
    className: "clickable",
    onClick: () => setOpen(open === r.d ? null : r.d)
  }, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600
    }
  }, r.d), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: r.w === "Sat" || r.w === "Sun" ? "var(--accent)" : "var(--ink-mute)"
    }
  }, r.w)), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, fmt.usd(r.spend), /*#__PURE__*/React.createElement("div", null, delta(r.dS))), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, r.ord, /*#__PURE__*/React.createElement("div", null, delta(r.dO))), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, fmt.usd(r.nc)), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, r.amer.toFixed(2), "x"), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, r.mer.toFixed(2), "x"), chan ? D3.daily.channels.flatMap(c => {
    const f = (c.spend || 0) / d.totals.spend;
    const sp = c.spend == null ? null : Math.round(r.spend * f);
    const rv = Math.round(r.nc * (c.rev / d.totals.nc));
    return c.spend == null ? [/*#__PURE__*/React.createElement("td", {
      key: c.n + "r",
      className: "num",
      style: {
        textAlign: "right"
      }
    }, fmt.usd(rv)), /*#__PURE__*/React.createElement("td", {
      key: c.n + "o",
      className: "num",
      style: {
        textAlign: "right",
        color: "var(--ink-mute)"
      }
    }, "N/A")] : [/*#__PURE__*/React.createElement("td", {
      key: c.n + "s",
      className: "num",
      style: {
        textAlign: "right"
      }
    }, fmt.usd(sp)), /*#__PURE__*/React.createElement("td", {
      key: c.n + "f",
      className: "num",
      style: {
        textAlign: "right",
        color: "var(--ink-mute)"
      }
    }, fmt.usd(Math.round(sp * 1.05))), /*#__PURE__*/React.createElement("td", {
      key: c.n + "r",
      className: "num",
      style: {
        textAlign: "right"
      }
    }, fmt.usd(rv)), /*#__PURE__*/React.createElement("td", {
      key: c.n + "o",
      className: "num",
      style: {
        textAlign: "right",
        fontWeight: 600,
        color: rv / sp >= 3 ? "var(--good)" : "var(--warn)"
      }
    }, (rv / sp).toFixed(2), "x")];
  }) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, r.nNew), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, fmt.usd(r.$new)), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, r.nRet), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, fmt.usd(r.$ret)), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, r.tot), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, fmt.pct(r.ncrev)), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, fmt.usd(r.naov, 2)), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right",
      color: r.ncac > 40 ? "var(--bad)" : "var(--ink)"
    }
  }, fmt.usd(r.ncac, 2)), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, r.roas.toFixed(2), "x"), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, fmt.usd(r.rev)), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, fmt.usd(r.gm)), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right",
      fontWeight: 600,
      color: "var(--good)"
    }
  }, fmt.usd(r.profit)))), open === r.d && /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    colSpan: chan ? 20 : 18,
    style: {
      background: "var(--surface-2)",
      padding: "14px 18px"
    }
  }, /*#__PURE__*/React.createElement(G, {
    c: 4,
    gap: 18
  }, [["New customer revenue", fmt.usd(r.nc)], ["Returning revenue", fmt.usd(r.$ret)], ["Cost per new customer", fmt.usd(r.ncac, 2)], ["Contribution profit", fmt.usd(r.profit)]].map(([l, v]) => /*#__PURE__*/React.createElement("div", {
    key: l
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9.5,
      fontWeight: 700,
      letterSpacing: "0.06em",
      textTransform: "uppercase",
      color: "var(--ink-mute)",
      marginBottom: 4
    }
  }, l), /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 14,
      fontWeight: 600
    }
  }, v)))))))), /*#__PURE__*/React.createElement("tr", {
    style: {
      background: "var(--surface-2)",
      borderTop: "2px solid var(--rule)"
    }
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      fontWeight: 700,
      color: "var(--accent)"
    }
  }, "Total"), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right",
      fontWeight: 700
    }
  }, fmt.usd(d.totals.spend)), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right",
      fontWeight: 700
    }
  }, fmt.n(d.totals.ord)), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right",
      fontWeight: 700
    }
  }, fmt.usd(d.totals.nc)), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right",
      fontWeight: 700
    }
  }, d.totals.amer.toFixed(2), "x"), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right",
      fontWeight: 700
    }
  }, d.totals.mer.toFixed(2), "x"), chan ? D3.daily.channels.flatMap(c => c.spend == null ? [/*#__PURE__*/React.createElement("td", {
    key: c.n + "r",
    className: "num",
    style: {
      textAlign: "right",
      fontWeight: 700
    }
  }, fmt.usd(c.rev)), /*#__PURE__*/React.createElement("td", {
    key: c.n + "o",
    className: "num",
    style: {
      textAlign: "right",
      color: "var(--ink-mute)"
    }
  }, "N/A")] : [/*#__PURE__*/React.createElement("td", {
    key: c.n + "s",
    className: "num",
    style: {
      textAlign: "right",
      fontWeight: 700
    }
  }, fmt.usd(c.spend)), /*#__PURE__*/React.createElement("td", {
    key: c.n + "f",
    className: "num",
    style: {
      textAlign: "right"
    }
  }, fmt.usd(c.fcst)), /*#__PURE__*/React.createElement("td", {
    key: c.n + "r",
    className: "num",
    style: {
      textAlign: "right",
      fontWeight: 700
    }
  }, fmt.usd(c.rev)), /*#__PURE__*/React.createElement("td", {
    key: c.n + "o",
    className: "num",
    style: {
      textAlign: "right",
      fontWeight: 700
    }
  }, c.roas.toFixed(2), "x")]) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right",
      fontWeight: 700
    }
  }, fmt.n(d.totals.nNew)), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right",
      fontWeight: 700
    }
  }, fmt.usd(d.totals.$new)), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right",
      fontWeight: 700
    }
  }, fmt.n(d.totals.nRet)), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right",
      fontWeight: 700
    }
  }, fmt.usd(d.totals.$ret)), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right",
      fontWeight: 700
    }
  }, fmt.n(d.totals.tot)), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right",
      fontWeight: 700
    }
  }, fmt.pct(d.totals.ncrev)), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right",
      fontWeight: 700
    }
  }, fmt.usd(d.totals.naov, 2)), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right",
      fontWeight: 700
    }
  }, fmt.usd(d.totals.ncac, 2)), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right",
      fontWeight: 700
    }
  }, d.totals.roas.toFixed(2), "x"), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right",
      fontWeight: 700
    }
  }, fmt.usd(d.totals.rev)), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right",
      fontWeight: 700
    }
  }, fmt.usd(d.totals.gm)), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right",
      fontWeight: 700,
      color: "var(--good)"
    }
  }, fmt.usd(d.totals.profit)))), !chan && [["Forecast", d.forecast, "ink"], ["Target", d.target, "mute"], ["Required / day", d.reqDay, "accent"]].map(([lbl, o, tn]) => /*#__PURE__*/React.createElement("tr", {
    key: lbl,
    style: {
      opacity: lbl === "Target" ? 0.7 : 1
    }
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      fontWeight: 700,
      color: T(tn),
      fontSize: 11.5,
      textTransform: "uppercase",
      letterSpacing: "0.05em"
    }
  }, lbl), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, o.spend ? fmt.usd(o.spend) : "-"), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, o.ord ? fmt.n(o.ord) : "-"), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, o.nc ? fmt.usd(o.nc) : "-"), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, o.amer ? o.amer.toFixed(2) + "x" : "-"), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, o.mer ? o.mer.toFixed(2) + "x" : "-"), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, o.nNew ? fmt.n(o.nNew) : "-"), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, o.$new ? fmt.usd(o.$new) : "-"), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, o.nRet ? fmt.n(o.nRet) : "-"), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, o.$ret ? fmt.usd(o.$ret) : "-"), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, o.tot ? fmt.n(o.tot) : "-"), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, o.ncrev ? fmt.pct(o.ncrev) : "-"), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, o.naov ? fmt.usd(o.naov, 2) : "-"), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, o.ncac ? fmt.usd(o.ncac, 2) : "-"), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, o.roas ? o.roas.toFixed(2) + "x" : "-"), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, o.rev ? fmt.usd(o.rev) : "-"), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, o.gm ? fmt.usd(o.gm) : "-"), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right",
      fontWeight: 600
    }
  }, o.profit ? fmt.usd(o.profit) : "-"))))))), /*#__PURE__*/React.createElement(Note, {
    tone: "info",
    icon: "i"
  }, D3.defs.sep), /*#__PURE__*/React.createElement(DefFooter, null));
}

/* ============================== COHORT LTV ============================== */
function Cohort() {
  const c = D3.cohort;
  const [by, setBy] = useState("product");
  const set = by === "product" ? c.byProduct : c.byCoupon;
  const maxAov = Math.max(...c.aovByCategory.map(a => a.aov));

  // LTV curve
  const W = 680,
    H = 300,
    PAD = {
      l: 52,
      r: 18,
      t: 16,
      b: 34
    };
  const iw = W - PAD.l - PAD.r,
    ih = H - PAD.t - PAD.b;
  const keys = ["aov", "m1", "m2", "m3", "m6", "m12"];
  const hi = Math.max(...set.rows.flatMap(r => keys.map(k => r[k]))) * 1.08;
  const X = i => PAD.l + i / (keys.length - 1) * iw,
    Y = v => PAD.t + ih - v / hi * ih;
  return /*#__PURE__*/React.createElement("div", {
    className: "page-in"
  }, /*#__PURE__*/React.createElement(PageHead, {
    title: "Cohort LTV and offer economics",
    sub: c.def,
    right: /*#__PURE__*/React.createElement(Seg, {
      options: [{
        v: "product",
        l: "By product"
      }, {
        v: "coupon",
        l: "By coupon"
      }],
      value: by,
      onChange: setBy
    })
  }), /*#__PURE__*/React.createElement(G, {
    c: 4,
    style: {
      marginBottom: 22
    }
  }, set.head.map(k => /*#__PURE__*/React.createElement(KPI, _extends({
    key: k.label
  }, k)))), /*#__PURE__*/React.createElement(G, {
    c: 2,
    name: "2h",
    gap: 16,
    style: {
      gridTemplateColumns: "1.4fr 1fr",
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement(Card, {
    pad: 20
  }, /*#__PURE__*/React.createElement(SecLabel, {
    icon: "rev",
    right: by === "product" ? "by product" : "by coupon"
  }, "LTV curve, cumulative net revenue per customer"), /*#__PURE__*/React.createElement("svg", {
    viewBox: `0 0 ${W} ${H}`,
    style: {
      width: "100%",
      height: "auto"
    }
  }, [0, .25, .5, .75, 1].map(f => /*#__PURE__*/React.createElement("g", {
    key: f
  }, /*#__PURE__*/React.createElement("line", {
    x1: PAD.l,
    y1: Y(hi * f),
    x2: W - PAD.r,
    y2: Y(hi * f),
    stroke: "var(--rule-soft)",
    strokeWidth: "1"
  }), /*#__PURE__*/React.createElement("text", {
    x: PAD.l - 8,
    y: Y(hi * f) + 3.5,
    textAnchor: "end",
    fontSize: "9.5",
    fill: "var(--ink-mute)"
  }, "$", Math.round(hi * f)))), keys.map((k, i) => /*#__PURE__*/React.createElement("text", {
    key: k,
    x: X(i),
    y: H - PAD.b + 17,
    textAnchor: "middle",
    fontSize: "9.5",
    fill: "var(--ink-mute)"
  }, c.marks[i])), set.rows.map(r => /*#__PURE__*/React.createElement("g", {
    key: r.n
  }, /*#__PURE__*/React.createElement("polyline", {
    points: keys.map((k, i) => `${X(i)},${Y(r[k])}`).join(" "),
    fill: "none",
    stroke: T(r.tone),
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), keys.map((k, i) => /*#__PURE__*/React.createElement("circle", {
    key: k,
    cx: X(i),
    cy: Y(r[k]),
    r: "2.4",
    fill: T(r.tone)
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 9,
      marginTop: 14
    }
  }, set.rows.map(r => /*#__PURE__*/React.createElement("span", {
    key: r.n,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      border: "1px solid var(--rule)",
      borderRadius: "var(--r-sm)",
      padding: "4px 9px",
      fontSize: 11
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot",
    style: {
      background: T(r.tone)
    }
  }), r.n)))), /*#__PURE__*/React.createElement(Card, {
    pad: 20
  }, /*#__PURE__*/React.createElement(SecLabel, {
    icon: "chart",
    right: "by category"
  }, "First-order AOV"), c.aovByCategory.map(a => /*#__PURE__*/React.createElement("div", {
    key: a.n,
    style: {
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: 5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 500
    }
  }, a.n), /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      fontSize: 13.5,
      fontWeight: 600
    }
  }, fmt.usd(a.aov, 2))), /*#__PURE__*/React.createElement(Bar, {
    pct: a.aov / maxAov * 100,
    tone: a.tone,
    h: 7
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 10.5,
      color: "var(--ink-mute)",
      marginTop: 5
    }
  }, fmt.n(a.c), " customers \xB7 ", a.x.toFixed(2), "x to M12"))))), /*#__PURE__*/React.createElement(Card, {
    pad: 0
  }, /*#__PURE__*/React.createElement("div", {
    className: "scroll-x"
  }, /*#__PURE__*/React.createElement("table", {
    className: "tbl"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Cohort (", by, ")"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Customers"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "First-order AOV"), ["M1", "M2", "M3", "M6", "M12"].map(m => /*#__PURE__*/React.createElement("th", {
    key: m,
    style: {
      textAlign: "right"
    }
  }, "LTV ", m)), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "M12 x AOV"))), /*#__PURE__*/React.createElement("tbody", null, set.rows.map(r => /*#__PURE__*/React.createElement("tr", {
    key: r.n
  }, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot",
    style: {
      background: T(r.tone)
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600
    }
  }, r.n))), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, fmt.n(r.c)), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, fmt.usd(r.aov, 2)), ["m1", "m2", "m3", "m6", "m12"].map(k => /*#__PURE__*/React.createElement("td", {
    key: k,
    className: "num",
    style: {
      textAlign: "right"
    }
  }, fmt.usd(r[k], 2))), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right",
      fontWeight: 700,
      color: r.x >= 4 ? "var(--good)" : r.x >= 3 ? "var(--warn)" : "var(--bad)"
    }
  }, r.x.toFixed(2), "x"))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 14
    }
  }), /*#__PURE__*/React.createElement(Note, {
    tone: "info",
    icon: "i"
  }, c.basis), /*#__PURE__*/React.createElement(DefFooter, null));
}

/* ==== pages-5.jsx ==== */
// pages-5.jsx, sub-tab views. Boardroom: Financials, Insights, System Health.
// Cash: Forecast, Transactions. Revenue: By Channel. Inventory: Reorders, Movements.

const SYNC_T = {
  live: "good",
  partial: "warn",
  blocked: "bad",
  waiting: "info"
};
const SYNC_L = {
  live: "Connected",
  partial: "Partial",
  blocked: "Blocked",
  waiting: "Waiting"
};

/* ============================== BOARDROOM · FINANCIALS ============================== */
function BoardFinancials({
  go
}) {
  const pl = Object.fromEntries(D.pl.map(r => [r.line, r]));
  const cm = D.unit.find(u => u.k === "cm");
  return /*#__PURE__*/React.createElement("div", {
    className: "page-in"
  }, /*#__PURE__*/React.createElement(PageHead, {
    title: "Financials",
    sub: "The money view on one screen. Profit and loss, margin, cash and what you owe."
  }), /*#__PURE__*/React.createElement(G, {
    c: 4,
    style: {
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement(KPI, {
    label: D.unit[0].label,
    value: fmt.usd(pl["Revenue"].v),
    tone: "ink",
    onClick: () => go("pl")
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Contribution margin",
    value: cm.value,
    tone: "good",
    sub: cm.sub,
    onClick: () => go("pl")
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Operating profit",
    value: fmt.usd(pl["Operating profit"].v),
    tone: "good",
    sub: "before debt service and distributions",
    onClick: () => go("pl")
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Available cash",
    value: "$68,751",
    tone: "good",
    sub: "floor $23,585",
    onClick: () => go("cash")
  })), /*#__PURE__*/React.createElement(G, {
    c: 2,
    name: "2h",
    gap: 16,
    style: {
      gridTemplateColumns: "1fr 1.2fr",
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement(Card, {
    pad: 20
  }, /*#__PURE__*/React.createElement(SecLabel, {
    icon: "money",
    right: PERIOD.label
  }, "Profit and loss"), D.pl.map(r => /*#__PURE__*/React.createElement("div", {
    key: r.line,
    style: {
      marginBottom: 13
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: 4,
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      fontWeight: r.sub ? 600 : 400
    }
  }, r.line), /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: T(r.tone)
    }
  }, fmt.usd(r.v), " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ink-mute)",
      fontWeight: 400
    }
  }, "\xB7 ", fmt.pct(r.pct)))), /*#__PURE__*/React.createElement(Bar, {
    pct: r.pct,
    tone: r.tone
  }), r.bench && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 10.5,
      color: "var(--ink-mute)",
      marginTop: 4
    }
  }, "Benchmark ", r.bench)))), /*#__PURE__*/React.createElement(Card, {
    pad: 20
  }, /*#__PURE__*/React.createElement(DistributionsTrend, {
    h: 130
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 18
    }
  }), /*#__PURE__*/React.createElement(SecLabel, {
    icon: "rev",
    right: "nine months"
  }, "Revenue by month"), /*#__PURE__*/React.createElement(BarChart, {
    data: D.revMonthly.map((r, i) => ({
      ...r,
      tone: i === D.revMonthly.length - 1 ? "accent" : "info"
    })),
    h: 150
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 18
    }
  }), /*#__PURE__*/React.createElement(SecLabel, {
    icon: "money",
    right: "seven months"
  }, "Cash on hand"), /*#__PURE__*/React.createElement(Line, {
    data: D.cashTrail,
    h: 100,
    tone: "good",
    vf: fmt.k,
    target: 23585,
    tLabel: "Floor"
  }))), /*#__PURE__*/React.createElement(G, {
    c: 3,
    name: "3",
    gap: 16
  }, D.debt.map(d => /*#__PURE__*/React.createElement(Card, {
    key: d.n,
    pad: 18,
    hover: true,
    onClick: () => go("debt"),
    style: {
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--ink-mute)",
      marginBottom: 6
    }
  }, d.n), /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 19,
      fontWeight: 600,
      color: T(d.tone)
    }
  }, fmt.usd(d.v)), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 11,
      color: "var(--ink-mute)",
      marginTop: 5
    }
  }, d.note)))));
}

/* ============================== BOARDROOM · INSIGHTS ============================== */
function BoardInsights({
  go
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "page-in"
  }, /*#__PURE__*/React.createElement(PageHead, {
    title: "Insights",
    sub: "What the numbers are saying this week, and where to look next.",
    meta: "Each card links to the page that proves it."
  }), /*#__PURE__*/React.createElement(G, {
    c: 2,
    name: "2",
    gap: 16
  }, D4.insights.map(n => /*#__PURE__*/React.createElement(Card, {
    key: n.title,
    pad: 22,
    style: {
      borderLeft: `3px solid ${T(n.tone)}`,
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 15,
      lineHeight: 1.35
    }
  }, n.title), /*#__PURE__*/React.createElement(Badge, {
    tone: n.tone
  }, n.tone === "good" ? "Working" : n.tone === "bad" ? "Act now" : "Watch")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 22,
      fontWeight: 600,
      color: T(n.tone)
    }
  }, n.num), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "var(--ink-mute)"
    }
  }, n.sub)), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 12.5,
      color: "var(--ink-soft)",
      lineHeight: 1.6,
      flex: 1
    }
  }, n.why), /*#__PURE__*/React.createElement("button", {
    onClick: () => go(n.go),
    style: {
      alignSelf: "flex-start",
      display: "flex",
      alignItems: "center",
      gap: 6,
      border: "1px solid var(--rule)",
      background: "var(--surface-3)",
      color: "var(--ink-soft)",
      borderRadius: "var(--r-sm)",
      padding: "6px 11px",
      fontSize: 11.5,
      fontWeight: 600,
      cursor: "pointer"
    }
  }, "Open ", n.cta, " ", /*#__PURE__*/React.createElement(Ico, {
    n: "chev",
    s: 10
  }))))));
}

/* ============================== BOARDROOM · SYSTEM HEALTH ============================== */
function BoardHealth({
  go
}) {
  const count = s => D4.sync.filter(x => x.s === s).length;
  return /*#__PURE__*/React.createElement("div", {
    className: "page-in"
  }, /*#__PURE__*/React.createElement(PageHead, {
    title: "System health",
    sub: "Every source that feeds this dashboard, when it last synced, and what's stuck."
  }), /*#__PURE__*/React.createElement(G, {
    c: 4,
    style: {
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement(KPI, {
    label: "Connected",
    value: String(count("live")),
    tone: "good",
    sub: `of ${D4.sync.length} sources`
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Partial",
    value: String(count("partial")),
    tone: "warn",
    sub: "syncing, not complete"
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Blocked",
    value: String(count("blocked")),
    tone: "bad",
    sub: "access outstanding"
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Waiting",
    value: String(count("waiting")),
    tone: "info",
    sub: "built, no data yet",
    onClick: () => go("data")
  })), /*#__PURE__*/React.createElement(Card, {
    pad: 0,
    style: {
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "scroll-x"
  }, /*#__PURE__*/React.createElement("table", {
    className: "tbl"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Source"), /*#__PURE__*/React.createElement("th", null, "Status"), /*#__PURE__*/React.createElement("th", null, "Last sync"), /*#__PURE__*/React.createElement("th", null, "Cadence"))), /*#__PURE__*/React.createElement("tbody", null, D4.sync.map(s => /*#__PURE__*/React.createElement("tr", {
    key: s.n
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      fontWeight: 600
    }
  }, s.n), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(Badge, {
    tone: SYNC_T[s.s]
  }, SYNC_L[s.s])), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      color: s.last === "Never" ? "var(--bad)" : "var(--ink-soft)"
    }
  }, s.last), /*#__PURE__*/React.createElement("td", {
    style: {
      color: "var(--ink-mute)",
      fontSize: 12
    }
  }, s.every))))))), /*#__PURE__*/React.createElement(Note, {
    tone: "warn",
    icon: "!"
  }, "Three sources are blocked on access. Until they connect, channel revenue and lifetime value stay off the dashboard rather than showing a number that looks right and isn't. Data Health grades every metric area."));
}

/* ============================== CASH · FORECAST ============================== */
function CashForecast() {
  const f = D4.forecast;
  let bal = f.open;
  const rows = f.weeks.map(w => {
    const out = w.fixed + w.variable + w.debt;
    bal = bal + w.inn - out;
    return {
      ...w,
      out,
      end: bal,
      above: bal - f.floor
    };
  });
  const low = rows.reduce((a, b) => b.end < a.end ? b : a, rows[0]);
  const end = rows[rows.length - 1];
  const tIn = rows.reduce((s, r) => s + r.inn, 0),
    tOut = rows.reduce((s, r) => s + r.out, 0);
  return /*#__PURE__*/React.createElement("div", {
    className: "page-in"
  }, /*#__PURE__*/React.createElement(PageHead, {
    title: "Cash forecast",
    sub: "Thirteen weeks forward from today's balance, against the operating floor.",
    meta: "Updated weekly. Inflows net of processing fees and reserve."
  }), /*#__PURE__*/React.createElement(G, {
    c: 4,
    style: {
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement(KPI, {
    label: "Opening cash",
    value: fmt.usd(f.open),
    tone: "ink",
    sub: "today"
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Lowest week",
    value: fmt.usd(low.end),
    tone: low.above < 0 ? "bad" : low.above < 5000 ? "warn" : "good",
    sub: `week of ${low.w}`
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Ending cash",
    value: fmt.usd(end.end),
    tone: "good",
    sub: `week of ${end.w}`
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Net over 13 weeks",
    value: (tIn - tOut >= 0 ? "+" : "-") + fmt.usd(Math.abs(tIn - tOut)),
    tone: tIn - tOut >= 0 ? "good" : "bad",
    sub: `${fmt.k(tIn)} in · ${fmt.k(tOut)} out`
  })), /*#__PURE__*/React.createElement(Card, {
    pad: 20,
    style: {
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(SecLabel, {
    icon: "money",
    right: "ending balance by week"
  }, "Where cash lands"), /*#__PURE__*/React.createElement(Line, {
    data: rows.map(r => ({
      m: r.w,
      v: r.end
    })),
    h: 190,
    tone: "accent",
    vf: fmt.k,
    target: f.floor,
    tLabel: "Floor $22.5K"
  })), /*#__PURE__*/React.createElement(Card, {
    pad: 0
  }, /*#__PURE__*/React.createElement("div", {
    className: "scroll-x"
  }, /*#__PURE__*/React.createElement("table", {
    className: "tbl"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Week of"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "In"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Fixed"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Variable"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Debt"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Ending"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Above floor"), /*#__PURE__*/React.createElement("th", null, "What moves it"))), /*#__PURE__*/React.createElement("tbody", null, rows.map(r => /*#__PURE__*/React.createElement("tr", {
    key: r.w
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      fontWeight: 600
    }
  }, r.w), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right",
      color: "var(--good)"
    }
  }, fmt.usd(r.inn)), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, "-", fmt.usd(r.fixed)), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, "-", fmt.usd(r.variable)), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right",
      color: r.debt ? "var(--bad)" : "var(--ink-mute)"
    }
  }, r.debt ? "-" + fmt.usd(r.debt) : "-"), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right",
      fontWeight: 600
    }
  }, fmt.usd(r.end)), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right",
      color: r.above < 0 ? "var(--bad)" : r.above < 5000 ? "var(--warn)" : "var(--good)"
    }
  }, fmt.usd(r.above)), /*#__PURE__*/React.createElement("td", {
    style: {
      fontSize: 11.5,
      color: "var(--ink-mute)"
    }
  }, r.note || ""))))))));
}

/* ============================== CASH · TRANSACTIONS ============================== */
function CashTransactions() {
  const [f, setF] = useState("All");
  const ST = {
    matched: ["good", "Matched"],
    review: ["warn", "Review"],
    open: ["bad", "Uncategorized"]
  };
  const rows = D4.transactions.filter(t => f === "All" || (f === "In" ? t.amt > 0 : f === "Out" ? t.amt < 0 : t.st !== "matched"));
  const tin = D4.transactions.filter(t => t.amt > 0).reduce((s, t) => s + t.amt, 0);
  const tout = D4.transactions.filter(t => t.amt < 0).reduce((s, t) => s + t.amt, 0);
  const flag = D4.transactions.filter(t => t.st !== "matched").length;
  return /*#__PURE__*/React.createElement("div", {
    className: "page-in"
  }, /*#__PURE__*/React.createElement(PageHead, {
    title: "Transactions",
    sub: "Every dollar in and out across the banks and the card, coded as it lands.",
    right: /*#__PURE__*/React.createElement(Seg, {
      options: ["All", "In", "Out", "Needs a look"],
      value: f,
      onChange: setF
    })
  }), /*#__PURE__*/React.createElement(G, {
    c: 4,
    style: {
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement(KPI, {
    label: "Money in",
    value: fmt.usd(tin),
    tone: "good",
    sub: "last 7 days"
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Money out",
    value: fmt.usd(Math.abs(tout)),
    tone: "bad",
    sub: "last 7 days"
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Net",
    value: (tin + tout >= 0 ? "+" : "-") + fmt.usd(Math.abs(tin + tout)),
    tone: tin + tout >= 0 ? "good" : "bad"
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Needs a look",
    value: String(flag),
    tone: flag ? "warn" : "good",
    sub: "review or uncategorized"
  })), /*#__PURE__*/React.createElement(Card, {
    pad: 0
  }, /*#__PURE__*/React.createElement("div", {
    className: "scroll-x"
  }, /*#__PURE__*/React.createElement("table", {
    className: "tbl"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Date"), /*#__PURE__*/React.createElement("th", null, "Description"), /*#__PURE__*/React.createElement("th", null, "Account"), /*#__PURE__*/React.createElement("th", null, "Category"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Amount"), /*#__PURE__*/React.createElement("th", null, "Status"))), /*#__PURE__*/React.createElement("tbody", null, rows.map((t, i) => /*#__PURE__*/React.createElement("tr", {
    key: i
  }, /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      color: "var(--ink-mute)"
    }
  }, t.d), /*#__PURE__*/React.createElement("td", {
    style: {
      fontWeight: 500
    }
  }, t.desc), /*#__PURE__*/React.createElement("td", {
    style: {
      fontSize: 12,
      color: "var(--ink-soft)"
    }
  }, t.acct), /*#__PURE__*/React.createElement("td", {
    style: {
      fontSize: 12,
      color: t.cat === "Uncategorized" ? "var(--bad)" : "var(--ink-soft)"
    }
  }, t.cat), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right",
      fontWeight: 600,
      color: t.amt > 0 ? "var(--good)" : "var(--ink)"
    }
  }, t.amt > 0 ? "+" : "-", fmt.usd(Math.abs(t.amt))), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(Badge, {
    tone: ST[t.st][0]
  }, ST[t.st][1])))))))));
}

/* ============================== REVENUE · BY CHANNEL ============================== */
function RevenueChannels() {
  const TR = {
    good: ["good", "Trusted"],
    low: ["warn", "Directional"],
    mock: ["info", "Shape only"],
    none: ["bad", "Not usable"]
  };
  const total = D.channels.reduce((s, c) => s + c.v, 0);
  const trusted = D.channels.filter(c => c.trust === "good").reduce((s, c) => s + c.v, 0);
  return /*#__PURE__*/React.createElement("div", {
    className: "page-in"
  }, /*#__PURE__*/React.createElement(PageHead, {
    title: "Revenue by channel",
    sub: "Where each dollar came from, and how far you can trust the split.",
    meta: `${PERIOD.label}. Attribution is being rebuilt, so every row carries its trust level.`
  }), /*#__PURE__*/React.createElement(G, {
    c: 4,
    style: {
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement(KPI, {
    label: "Total",
    value: fmt.usd(total),
    tone: "ink",
    sub: PERIOD.label
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Trusted",
    value: fmt.pct(trusted / total * 100),
    tone: "good",
    sub: fmt.usd(trusted)
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Unattributed",
    value: fmt.pct(D.channels[5].v / total * 100),
    tone: "bad",
    sub: fmt.usd(D.channels[5].v)
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Channels",
    value: String(D.channels.length),
    tone: "ink",
    sub: "including unattributed"
  })), /*#__PURE__*/React.createElement(Card, {
    pad: 0,
    style: {
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "scroll-x"
  }, /*#__PURE__*/React.createElement("table", {
    className: "tbl"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Channel"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Revenue"), /*#__PURE__*/React.createElement("th", null, "Share"), /*#__PURE__*/React.createElement("th", null, "Trust"))), /*#__PURE__*/React.createElement("tbody", null, D.channels.map(c => /*#__PURE__*/React.createElement("tr", {
    key: c.m
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      fontWeight: 600
    }
  }, c.m), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right",
      fontWeight: 600,
      color: c.tone ? T(c.tone) : "var(--ink)"
    }
  }, fmt.usd(c.v)), /*#__PURE__*/React.createElement("td", {
    style: {
      width: "34%"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Bar, {
    pct: c.v / total * 100,
    tone: TR[c.trust][0]
  }), /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      fontSize: 11,
      color: "var(--ink-mute)",
      minWidth: 42,
      textAlign: "right"
    }
  }, fmt.pct(c.v / total * 100)))), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(Badge, {
    tone: TR[c.trust][0]
  }, TR[c.trust][1])))))))), /*#__PURE__*/React.createElement(Note, {
    tone: "warn",
    icon: "!"
  }, "Orders without an affiliate link default to an internal test account, so the unattributed row is real revenue with no honest channel. It shrinks as the attribution rebuild lands."));
}

/* ============================== INVENTORY · REORDERS ============================== */
function InvReorders() {
  const free = 17847;
  const ST = {
    late: ["bad", "Order now"],
    soon: ["warn", "This week"],
    blocked: ["mute", "Decision"],
    ok: ["good", "No action"]
  };
  let run = free;
  const rows = D4.reorders.map(r => {
    const inv = D.inventory.find(x => x.sku === r.sku);
    const cost = inv && inv.po ? inv.po : 0;
    r = {
      ...r,
      qty: cost ? Math.round(cost / r.unit) : r.qty
    };
    const orderBy = r.cover - r.lead;
    run -= cost;
    return {
      ...r,
      cost,
      orderBy,
      left: run
    };
  });
  const need = rows.reduce((s, r) => s + r.cost, 0);
  return /*#__PURE__*/React.createElement("div", {
    className: "page-in"
  }, /*#__PURE__*/React.createElement(PageHead, {
    title: "Reorders",
    sub: "What to order, when it has to go in, and whether the cash covers it.",
    meta: "Costs match the reorder figures on the Inventory tab. Quantity is cost over unit cost."
  }), /*#__PURE__*/React.createElement(G, {
    c: 4,
    style: {
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement(KPI, {
    label: "To order now",
    value: String(rows.filter(r => r.st === "late").length),
    tone: "bad",
    sub: "cover under lead time"
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Reorder cost",
    value: fmt.usd(need),
    tone: "warn",
    sub: "everything due"
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Free cash",
    value: fmt.usd(free),
    tone: "good",
    sub: "above the floor"
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Gap",
    value: fmt.usd(Math.max(0, need - free)),
    tone: need > free ? "bad" : "good",
    sub: "sequence or use credit"
  })), /*#__PURE__*/React.createElement(Card, {
    pad: 0,
    style: {
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "scroll-x"
  }, /*#__PURE__*/React.createElement("table", {
    className: "tbl"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Product"), /*#__PURE__*/React.createElement("th", null, "Supplier"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Cover"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Lead"), /*#__PURE__*/React.createElement("th", null, "Order by"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Qty"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Cost"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Cash after"), /*#__PURE__*/React.createElement("th", null, "Status"))), /*#__PURE__*/React.createElement("tbody", null, rows.map(r => /*#__PURE__*/React.createElement("tr", {
    key: r.sku
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      fontWeight: 600
    }
  }, r.sku, r.note && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10.5,
      color: "var(--ink-mute)",
      fontWeight: 400
    }
  }, r.note)), /*#__PURE__*/React.createElement("td", {
    style: {
      fontSize: 12,
      color: "var(--ink-soft)"
    }
  }, r.supplier), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, r.cover, "d"), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, r.lead, "d"), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      color: r.orderBy < 0 ? "var(--bad)" : r.orderBy < 7 ? "var(--warn)" : "var(--ink-soft)"
    }
  }, r.st === "blocked" ? "-" : r.orderBy < 0 ? `${Math.abs(r.orderBy)}d overdue` : `in ${r.orderBy}d`), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, r.qty ? fmt.n(r.qty) : "-"), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right",
      fontWeight: 600
    }
  }, r.cost ? fmt.usd(r.cost) : "-"), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right",
      color: r.left < 0 ? "var(--bad)" : "var(--good)"
    }
  }, r.cost ? fmt.usd(r.left) : "-"), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(Badge, {
    tone: ST[r.st][0]
  }, ST[r.st][1])))))))), /*#__PURE__*/React.createElement(Note, {
    tone: "warn",
    icon: "!"
  }, "Cash after runs down the list in order of urgency. Where it goes negative, the order needs splitting, payment terms, or credit before it can go in."));
}

/* ============================== INVENTORY · MOVEMENTS ============================== */
function InvMovements() {
  const [f, setF] = useState("All");
  const rows = D4.movements.filter(m => f === "All" || (f === "Unlogged" ? !m.logged : m.type === f));
  const inn = D4.movements.filter(m => m.qty > 0).reduce((s, m) => s + m.qty, 0);
  const out = D4.movements.filter(m => m.qty < 0).reduce((s, m) => s + m.qty, 0);
  const unl = D4.movements.filter(m => !m.logged);
  const TY = {
    Received: "good",
    Shipped: "info",
    Wholesale: "violet",
    Sample: "warn",
    Reship: "warn",
    Comp: "bad",
    Adjustment: "mute"
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "page-in"
  }, /*#__PURE__*/React.createElement(PageHead, {
    title: "Stock movements",
    sub: "Every unit in and out, and whether the order platform ever saw it.",
    right: /*#__PURE__*/React.createElement(Seg, {
      options: ["All", "Received", "Shipped", "Unlogged"],
      value: f,
      onChange: setF
    })
  }), /*#__PURE__*/React.createElement(G, {
    c: 4,
    style: {
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement(KPI, {
    label: "Units in",
    value: fmt.n(inn),
    tone: "good",
    sub: "last 7 days"
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Units out",
    value: fmt.n(Math.abs(out)),
    tone: "ink",
    sub: "last 7 days"
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Off platform",
    value: String(unl.length),
    tone: "bad",
    sub: `${fmt.n(Math.abs(unl.reduce((s, m) => s + m.qty, 0)))} units, no sale recorded`
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Adjustments",
    value: String(D4.movements.filter(m => m.type === "Adjustment").length),
    tone: "warn",
    sub: "count variance"
  })), /*#__PURE__*/React.createElement(Card, {
    pad: 0,
    style: {
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "scroll-x"
  }, /*#__PURE__*/React.createElement("table", {
    className: "tbl"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Date"), /*#__PURE__*/React.createElement("th", null, "Product"), /*#__PURE__*/React.createElement("th", null, "Type"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Units"), /*#__PURE__*/React.createElement("th", null, "Location"), /*#__PURE__*/React.createElement("th", null, "On platform"))), /*#__PURE__*/React.createElement("tbody", null, rows.map((m, i) => /*#__PURE__*/React.createElement("tr", {
    key: i
  }, /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      color: "var(--ink-mute)"
    }
  }, m.d), /*#__PURE__*/React.createElement("td", {
    style: {
      fontWeight: 500
    }
  }, m.sku, m.note && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10.5,
      color: "var(--ink-mute)"
    }
  }, " \xB7 ", m.note)), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(Badge, {
    tone: TY[m.type]
  }, m.type)), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right",
      fontWeight: 600,
      color: m.qty > 0 ? "var(--good)" : "var(--ink)"
    }
  }, m.qty > 0 ? "+" : "", fmt.n(m.qty)), /*#__PURE__*/React.createElement("td", {
    style: {
      fontSize: 12,
      color: "var(--ink-soft)"
    }
  }, m.where), /*#__PURE__*/React.createElement("td", null, m.logged ? /*#__PURE__*/React.createElement(Badge, {
    tone: "good"
  }, "Logged") : /*#__PURE__*/React.createElement(Badge, {
    tone: "bad"
  }, "Invisible")))))))), /*#__PURE__*/React.createElement(Note, {
    tone: "info",
    icon: "i"
  }, "Wholesale, samples, reships and comps leave the shelf without touching the order platform. That's why shipments never tie to revenue and counts drift. Each one gets logged here as it moves."));
}

// Redline alerts. Thresholds are editable and persist in the browser, the same way the
// score log does, because the number DB has to set is the whole point of the page.
const RED_KEY = "mynd.redline.v1";
const RedStore = {
  v: {},
  subs: new Set()
};
try {
  const raw = localStorage.getItem(RED_KEY);
  if (raw) RedStore.v = JSON.parse(raw) || {};
} catch (e) {}
function useRed() {
  const [, force] = useState(0);
  useEffect(() => {
    const f = () => force(x => x + 1);
    RedStore.subs.add(f);
    return () => RedStore.subs.delete(f);
  }, []);
  return RedStore;
}
function redOf(r) {
  const v = RedStore.v[r.sku];
  return v === undefined || v === "" ? r.redline : Number(v);
}
function redSet(sku, v) {
  RedStore.v = {
    ...RedStore.v,
    [sku]: v
  };
  try {
    localStorage.setItem(RED_KEY, JSON.stringify(RedStore.v));
  } catch (e) {}
  RedStore.subs.forEach(f => f());
}
function redReset() {
  RedStore.v = {};
  try {
    localStorage.removeItem(RED_KEY);
  } catch (e) {}
  RedStore.subs.forEach(f => f());
}
function RedInput({
  r
}) {
  useRed();
  const [draft, setDraft] = useState(String(redOf(r)));
  useEffect(() => {
    setDraft(String(redOf(r)));
  }, [RedStore.v[r.sku]]);
  return /*#__PURE__*/React.createElement("input", {
    value: draft,
    inputMode: "numeric",
    onChange: e => setDraft(e.target.value.replace(/[^0-9]/g, "")),
    onBlur: () => redSet(r.sku, draft),
    onKeyDown: e => {
      if (e.key === "Enter") e.currentTarget.blur();
    },
    className: "mono",
    style: {
      width: 72,
      textAlign: "right",
      background: "var(--surface-3)",
      border: "1px solid var(--rule)",
      borderRadius: 4,
      color: "var(--ink)",
      fontSize: 12.5,
      padding: "3px 7px",
      outline: "none"
    }
  });
}
function InvAlerts() {
  const R = useRed();
  const A = D.alerts;
  const rows = A.rows.map(r => {
    const red = redOf(r);
    const st = r.hand < red ? "breached" : r.hand === red ? "at" : "clear";
    return {
      ...r,
      red,
      st,
      gap: r.hand - red
    };
  });
  const breached = rows.filter(r => r.st !== "clear").length;
  const cell = {
    textAlign: "right"
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "page-in"
  }, /*#__PURE__*/React.createElement(PageHead, {
    title: "Redline alerts",
    sub: "The reorder point on every SKU, where the alert goes, and who sends the supplier message.",
    meta: "Type over any redline to change it. Changes save in this browser.",
    right: Object.keys(R.v).length > 0 && /*#__PURE__*/React.createElement("button", {
      onClick: redReset,
      style: {
        background: "none",
        border: "1px solid var(--rule)",
        borderRadius: "var(--r-sm)",
        color: "var(--ink-mute)",
        fontSize: 11,
        padding: "5px 10px",
        cursor: "pointer"
      }
    }, "Reset redlines")
  }), /*#__PURE__*/React.createElement(G, {
    c: 4,
    style: {
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(KPI, {
    label: "Alerts firing",
    value: A.live ? String(breached) : "None",
    tone: A.live ? "bad" : "mute",
    sub: A.live ? "of 6 SKUs" : "nothing is wired yet",
    help: "Nothing fires until the threshold is set in the warehouse system. Today every field there reads zero."
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "At or past the redline",
    value: String(breached),
    tone: breached ? "bad" : "good",
    sub: "of 6 live SKUs"
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Where it goes",
    value: "Email and Slack",
    tone: "accent",
    sub: "to DB, tagged"
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Supplier message",
    value: "Drafted",
    tone: "warn",
    sub: "reviewed before it sends",
    help: "DB asked for the supplier email to fire off the alert and for someone else to manage the thread. Drafting it and holding it for review is the safer version."
  })), /*#__PURE__*/React.createElement(Card, {
    pad: 0,
    style: {
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "scroll-x"
  }, /*#__PURE__*/React.createElement("table", {
    className: "tbl"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Product"), /*#__PURE__*/React.createElement("th", {
    style: cell
  }, "On hand"), /*#__PURE__*/React.createElement("th", {
    style: cell
  }, "Redline"), /*#__PURE__*/React.createElement("th", {
    style: cell
  }, "Gap"), /*#__PURE__*/React.createElement("th", {
    style: cell
  }, "Lead"), /*#__PURE__*/React.createElement("th", null, "What it triggers"), /*#__PURE__*/React.createElement("th", null, "To"), /*#__PURE__*/React.createElement("th", null, "Status"))), /*#__PURE__*/React.createElement("tbody", null, rows.map(r => /*#__PURE__*/React.createElement("tr", {
    key: r.sku
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      fontWeight: 600
    }
  }, r.sku), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: cell
  }, fmt.n(r.hand)), /*#__PURE__*/React.createElement("td", {
    style: cell
  }, /*#__PURE__*/React.createElement(RedInput, {
    r: r
  })), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      ...cell,
      color: r.gap < 0 ? "var(--bad)" : "var(--good)"
    }
  }, r.gap > 0 ? "+" : "", fmt.n(r.gap)), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: cell
  }, r.lead, "d"), /*#__PURE__*/React.createElement("td", {
    style: {
      fontSize: 12,
      color: "var(--ink-soft)"
    }
  }, r.what), /*#__PURE__*/React.createElement("td", {
    style: {
      fontSize: 11.5,
      color: "var(--ink-mute)"
    }
  }, r.to), /*#__PURE__*/React.createElement("td", null, r.st === "breached" ? /*#__PURE__*/React.createElement(Badge, {
    tone: "bad",
    solid: true
  }, "Order now") : r.st === "at" ? /*#__PURE__*/React.createElement(Badge, {
    tone: "warn"
  }, "At the line") : /*#__PURE__*/React.createElement(Badge, {
    tone: "good"
  }, "Clear")))))))), /*#__PURE__*/React.createElement(SecLabel, {
    icon: "alert"
  }, "Where an alert goes"), /*#__PURE__*/React.createElement(G, {
    c: 4,
    gap: 12,
    style: {
      marginBottom: 16
    }
  }, A.channels.map(c => /*#__PURE__*/React.createElement(Card, {
    key: c.n,
    pad: 15
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 8,
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      fontWeight: 600
    }
  }, c.n), /*#__PURE__*/React.createElement(Badge, {
    tone: c.on ? "good" : "mute"
  }, c.on ? "On" : "Off")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 11.5,
      color: "var(--ink-soft)",
      lineHeight: 1.5
    }
  }, c.note)))), /*#__PURE__*/React.createElement(Note, {
    tone: "warn",
    icon: "!"
  }, A.note));
}
const SUBVIEWS = {
  boardroom: [null, BoardFinancials, BoardInsights, BoardHealth],
  cash: [null, CashForecast, CashTransactions],
  revenue: [null, RevenueChannels],
  inventory: [null, InvReorders, InvAlerts, InvMovements],
  costs: [null, CostRates, CostFormulation, CostLadder, CostLog],
  production: [null, ProdPurchases, ProdRecon],
  suppliers: [null, SupLedger],
  fulfillment: [null, TPLRates]
};

/* ==== pages-6.jsx ==== */
// pages-6.jsx, the team layer. Every seat is scored on every metric it's held
// to. Role scorecards, the score log and the org chart all read one store, so a
// number logged once shows everywhere it's used.

/* ------------------------------------------------------------ score store */
const SCORE_KEY = "mynd.scorelog.v2";
const ScoreStore = {
  mode: "sample",
  live: {},
  focus: null,
  viewAs: "owner",
  clears: 0,
  subs: new Set()
};
try {
  const raw = localStorage.getItem(SCORE_KEY);
  if (raw) ScoreStore.live = JSON.parse(raw) || {};
} catch (e) {}
function scoreEmit() {
  ScoreStore.subs.forEach(f => f());
}

/* ------------------------------------------------------------ seat store
   Who sits in each seat. Separate from the score log because roles change for
   reasons that have nothing to do with a number, and a seat can be open. */
const SEAT_KEY = "mynd.seats.v2";
const SeatStore = {
  who: {},
  added: [],
  removed: [],
  subs: new Set()
};
try {
  const raw = localStorage.getItem(SEAT_KEY);
  if (raw) {
    const o = JSON.parse(raw) || {};
    SeatStore.who = o.who || {};
    SeatStore.added = o.added || [];
    SeatStore.removed = o.removed || [];
  }
} catch (e) {}
function seatSave() {
  try {
    localStorage.setItem(SEAT_KEY, JSON.stringify({
      who: SeatStore.who,
      added: SeatStore.added,
      removed: SeatStore.removed
    }));
  } catch (e) {}
  seatEmit();
}
// The seat list as it stands: the written roles, less anything removed, plus anything added.
function liveSeats() {
  return SEATS.filter(s => SeatStore.removed.indexOf(s.id) < 0).concat(SeatStore.added);
}
function seatIsCustom(s) {
  return !!s.custom;
}
function seatAdd({
  seat,
  short,
  who,
  reports,
  line
}) {
  const id = "custom-" + Date.now().toString(36);
  SeatStore.added = SeatStore.added.concat([{
    id,
    custom: true,
    seat,
    short: short || seat,
    who: who || "Open",
    open: !who,
    reports: reports || "founder",
    line: line || "No role document yet. Write one before this seat is held to a number.",
    manages: "Not written yet",
    not: "Not written yet",
    measure: "No metrics",
    need: "A role document, then a metric and 30 days of history",
    doc: "Not written yet"
  }]);
  seatSave();
  return id;
}
function seatRemove(id) {
  if (id === "founder") return;
  if (SeatStore.added.some(s => s.id === id)) SeatStore.added = SeatStore.added.filter(s => s.id !== id);else if (SeatStore.removed.indexOf(id) < 0) SeatStore.removed = SeatStore.removed.concat([id]);
  seatSave();
}
function seatRestore(id) {
  SeatStore.removed = SeatStore.removed.filter(x => x !== id);
  seatSave();
}
function seatDirty() {
  return Object.keys(SeatStore.who).length > 0 || SeatStore.added.length > 0 || SeatStore.removed.length > 0;
}
function seatEmit() {
  SeatStore.subs.forEach(f => f());
}
function useSeats() {
  const [, force] = useState(0);
  useEffect(() => {
    const f = () => force(x => x + 1);
    SeatStore.subs.add(f);
    return () => SeatStore.subs.delete(f);
  }, []);
  return SeatStore;
}
function seatWho(s) {
  const v = SeatStore.who[s.id];
  if (v === undefined) return {
    name: s.who,
    open: !!s.open,
    edited: false
  };
  const t = String(v).trim();
  return {
    name: t === "" ? "Open" : t,
    open: t === "" || t.toLowerCase() === "open",
    edited: true
  };
}
function seatSetWho(id, v) {
  SeatStore.who = {
    ...SeatStore.who,
    [id]: v
  };
  seatSave();
}
function seatResetWho() {
  SeatStore.who = {};
  SeatStore.added = [];
  SeatStore.removed = [];
  try {
    localStorage.removeItem(SEAT_KEY);
  } catch (e) {}
  seatEmit();
}
// An editable name. Click to type, enter or blur to save, escape to cancel.
function SeatName({
  s,
  size = 11
}) {
  useSeats();
  const w = seatWho(s);
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(w.name);
  if (s.relationship) return /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: size,
      color: "var(--ink-mute)"
    }
  }, w.name);
  if (editing) return /*#__PURE__*/React.createElement("input", {
    autoFocus: true,
    value: draft,
    onClick: e => e.stopPropagation(),
    onChange: e => setDraft(e.target.value),
    onBlur: () => {
      seatSetWho(s.id, draft);
      setEditing(false);
    },
    onKeyDown: e => {
      if (e.key === "Enter") {
        seatSetWho(s.id, draft);
        setEditing(false);
      }
      if (e.key === "Escape") {
        setDraft(w.name);
        setEditing(false);
      }
    },
    placeholder: "Open",
    style: {
      width: "100%",
      background: "var(--surface-3)",
      border: "1px solid var(--accent)",
      borderRadius: 4,
      color: "var(--ink)",
      fontSize: size,
      padding: "2px 5px",
      outline: "none"
    }
  });
  return /*#__PURE__*/React.createElement("span", {
    onClick: e => {
      e.stopPropagation();
      setDraft(w.open ? "" : w.name);
      setEditing(true);
    },
    title: "Click to change who holds this seat",
    style: {
      fontSize: size,
      cursor: "text",
      borderBottom: "1px dashed var(--rule)",
      color: w.open ? "var(--warn)" : "var(--ink-mute)",
      fontStyle: w.open ? "italic" : "normal"
    }
  }, w.open ? "Open, nobody in the seat" : w.name);
}
function useScore() {
  const [, force] = useState(0);
  useEffect(() => {
    const f = () => force(x => x + 1);
    ScoreStore.subs.add(f);
    return () => ScoreStore.subs.delete(f);
  }, []);
  return ScoreStore;
}
function scoreSet(k, v) {
  ScoreStore[k] = v;
  scoreEmit();
}
function scoreRow(mid) {
  const src = ScoreStore.mode === "sample" ? SAMPLE_LOG[mid] || [] : ScoreStore.live[mid] || [];
  return WEEKS.map((w, i) => src[i] === undefined || src[i] === "" ? null : src[i]);
}
function scoreEnter(mid, i, raw) {
  const row = (ScoreStore.live[mid] || []).slice();
  const v = raw === "" ? null : Number(raw);
  row[i] = raw === "" || isNaN(v) ? null : v;
  ScoreStore.live = {
    ...ScoreStore.live,
    [mid]: row
  };
  try {
    localStorage.setItem(SCORE_KEY, JSON.stringify(ScoreStore.live));
  } catch (e) {}
  scoreEmit();
}
function scoreClear() {
  ScoreStore.live = {};
  ScoreStore.clears += 1;
  try {
    localStorage.removeItem(SCORE_KEY);
  } catch (e) {}
  scoreEmit();
}

/* ------------------------------------------------------------ status, same rules as the Metrics tracker */
function judge(m, latest, prior) {
  if (latest == null) return "Not measured";
  if (m.kind === "max") return latest <= m.v ? "On target" : "Off target";
  if (m.kind === "min") return latest >= m.v ? "On target" : "Off target";
  if (m.kind === "yes") return latest === 1 ? "On target" : "Off target";
  if (prior == null) return "Baseline";
  if (m.kind === "up") return latest > prior ? "Improving" : latest === prior ? "Flat" : "Slipping";
  return latest < prior ? "Improving" : latest === prior ? "On target" : "Slipping"; // flat or falling
}
const HOLD = {
    "On target": 1,
    "Improving": 1
  },
  WATCH = {
    "Flat": 1,
    "Baseline": 1
  },
  OFF = {
    "Off target": 1,
    "Slipping": 1
  };
const ST_TONE = {
  "On target": "good",
  "Improving": "good",
  "Flat": "warn",
  "Baseline": "info",
  "Off target": "bad",
  "Slipping": "bad",
  "Not measured": "mute"
};
const MEASURE_TONE = {
  "Measurable": "good",
  "Needs 30 days": "info",
  "Needs build": "warn",
  "Needs access": "warn",
  "Needs three runs": "warn",
  "Needs roadmap": "bad",
  "Needs attribution": "bad",
  "No metrics": "mute"
};

// status of a metric as of week i: that week's entry against the last one before it
function statusAt(m, row, i) {
  const latest = row[i];
  if (latest == null) return null;
  let prior = null;
  for (let j = i - 1; j >= 0; j--) if (row[j] != null) {
    prior = row[j];
    break;
  }
  return judge(m, latest, prior);
}
function metricRead(m) {
  const row = scoreRow(m.id);
  const idx = row.map((v, i) => v == null ? -1 : i).filter(i => i >= 0);
  const li = idx.length ? idx[idx.length - 1] : -1,
    pi = idx.length > 1 ? idx[idx.length - 2] : -1;
  const latest = li >= 0 ? row[li] : null,
    prior = pi >= 0 ? row[pi] : null;
  const st = judge(m, latest, prior);
  let streak = 0; // entries in a row that were off, counting back from the latest
  for (let k = idx.length - 1; k >= 0; k--) {
    if (OFF[statusAt(m, row, idx[k])]) streak++;else break;
  }
  const dir = latest == null || prior == null || latest === prior ? 0 : latest > prior ? 1 : -1;
  return {
    m,
    row,
    latest,
    prior,
    li,
    st,
    streak,
    dir,
    entries: idx.length
  };
}
const seatById = id => liveSeats().find(s => s.id === id) || SEATS.find(s => s.id === id);
const seatMetrics = id => METRICS.filter(m => m.seat === id);
function seatRead(s) {
  const reads = seatMetrics(s.id).map(metricRead);
  if (!reads.length) return {
    s,
    reads: [],
    primary: null,
    hold: 0,
    watch: 0,
    off: 0,
    none: 0,
    stuck: []
  };
  const n = set => reads.filter(r => set[r.st]).length;
  return {
    s,
    reads,
    primary: reads.find(r => r.m.primary),
    hold: n(HOLD),
    watch: n(WATCH),
    off: n(OFF),
    none: reads.filter(r => r.st === "Not measured").length,
    stuck: reads.filter(r => OFF[r.st])
  };
}
// share of a seat's measured metrics holding as of week i, using each metric's latest entry up to then
function seatHealthAt(s, i) {
  let meas = 0,
    hold = 0,
    off = 0;
  seatMetrics(s.id).forEach(m => {
    const row = scoreRow(m.id);
    let j = i;
    while (j >= 0 && row[j] == null) j--;
    if (j < 0) return;
    const st = statusAt(m, row, j);
    meas++;
    if (HOLD[st]) hold++;else if (OFF[st]) off++;
  });
  if (!meas) return null;
  // watch states (flat, first entry) sit out of the share; all watch reads amber
  return {
    pct: hold + off ? hold / (hold + off) * 100 : 60,
    meas,
    hold,
    off
  };
}
function fmtM(m, v) {
  if (v == null) return "-";
  if (m.unit === "yes") return v === 1 ? "Yes" : "No";
  if (m.unit === "usd") return fmt.usd(v);
  if (m.unit === "pct") return (Number.isInteger(v) ? v : Number(v).toFixed(1)) + "%";
  if (m.unit === "h") return (Number.isInteger(v) ? v : Number(v).toFixed(1)) + " hrs";
  if (m.unit === "rate") return Number(v).toFixed(2) + " / $";
  return Number.isInteger(v) ? String(v) : Number(v).toFixed(1);
}
const lastWeek = () => Math.max(11, ...METRICS.map(m => scoreRow(m.id).reduce((a, v, i) => v != null ? i : a, -1)));

/* ------------------------------------------------------------ charts */
function Trend({
  m,
  row,
  h = 150,
  compact,
  tone
}) {
  const span = row.slice(0, lastWeek() + 1);
  const vals = span.filter(v => v != null);
  if (!vals.length) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        height: h,
        display: "grid",
        placeItems: "center",
        border: "1px dashed var(--rule)",
        borderRadius: "var(--r-md)",
        color: "var(--ink-mute)",
        fontSize: 11
      }
    }, "Not measured yet");
  }
  const tv = m.kind === "yes" ? null : m.v;
  let lo = Math.min(...vals, tv ?? Infinity),
    hi = Math.max(...vals, tv ?? -Infinity);
  if (m.unit === "yes") {
    lo = 0;
    hi = 1;
  }
  if (lo === hi) {
    lo -= 1;
    hi += 1;
  }
  const pad = (hi - lo) * 0.15;
  lo -= pad;
  hi += pad;
  const X = i => span.length === 1 ? 50 : i / (span.length - 1) * 100;
  const Y = v => 100 - (v - lo) / (hi - lo) * 100;
  const pts = span.map((v, i) => v == null ? null : [X(i), Y(v), statusAt(m, span, i)]).filter(Boolean);
  const line = tone && tone !== "mute" ? tone : "accent";
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: h
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 100 100",
    preserveAspectRatio: "none",
    style: {
      width: "100%",
      height: "100%",
      overflow: "visible"
    }
  }, !compact && [0, 25, 50, 75, 100].map(g => /*#__PURE__*/React.createElement("line", {
    key: g,
    x1: "0",
    y1: g,
    x2: "100",
    y2: g,
    stroke: "var(--rule-soft)",
    strokeWidth: "0.4",
    vectorEffect: "non-scaling-stroke"
  })), tv != null && /*#__PURE__*/React.createElement("line", {
    x1: "0",
    y1: Y(tv),
    x2: "100",
    y2: Y(tv),
    stroke: "var(--warn)",
    strokeWidth: "1",
    strokeDasharray: "3 3",
    vectorEffect: "non-scaling-stroke"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: pts.map(p => p[0] + "," + p[1]).join(" "),
    fill: "none",
    stroke: T(line),
    strokeOpacity: "0.55",
    strokeWidth: compact ? 1.4 : 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    vectorEffect: "non-scaling-stroke"
  })), pts.map((p, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    title: p[2],
    style: {
      position: "absolute",
      left: p[0] + "%",
      top: p[1] + "%",
      width: compact ? 6 : 8,
      height: compact ? 6 : 8,
      borderRadius: 99,
      transform: "translate(-50%,-50%)",
      background: T(ST_TONE[p[2]])
    }
  })), !compact && tv != null && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      right: 0,
      top: Y(tv) + "%",
      transform: "translateY(-130%)",
      fontSize: 9.5,
      color: "var(--warn)",
      fontWeight: 600
    }
  }, "Target ", fmtM(m, tv))), !compact && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      marginTop: 6
    }
  }, span.map((v, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      flex: 1,
      textAlign: "center",
      fontSize: 9,
      color: "var(--ink-mute)"
    }
  }, i % 3 === 0 ? WEEKS[i] : ""))));
}

// one row per metric, one cell per week, colored by the status that week
function StatusStrip({
  reads,
  weeks
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "scroll-x"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: `minmax(170px,1.4fr) repeat(${weeks},minmax(22px,1fr))`,
      gap: 3,
      minWidth: 520
    }
  }, /*#__PURE__*/React.createElement("span", null), Array.from({
    length: weeks
  }, (_, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      fontSize: 8.5,
      color: "var(--ink-mute)",
      textAlign: "center"
    }
  }, i % 2 === 0 ? WEEKS[i] : "")), reads.map(r => /*#__PURE__*/React.createElement(React.Fragment, {
    key: r.m.id
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: "var(--ink-soft)",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      fontWeight: r.m.primary ? 600 : 400
    }
  }, r.m.name), Array.from({
    length: weeks
  }, (_, i) => {
    const st = statusAt(r.m, r.row, i);
    return /*#__PURE__*/React.createElement("span", {
      key: i,
      title: st ? `${WEEKS[i]}: ${fmtM(r.m, r.row[i])}, ${st}` : `${WEEKS[i]}: no entry`,
      style: {
        height: 16,
        borderRadius: 3,
        background: st ? T(ST_TONE[st]) : "var(--surface-3)",
        opacity: st ? 0.85 : 1
      }
    });
  })))));
}
function ModeSwitch() {
  const S = useScore();
  return /*#__PURE__*/React.createElement(Seg, {
    options: [{
      v: "sample",
      l: "Sample history"
    }, {
      v: "live",
      l: "Live log"
    }],
    value: S.mode,
    onChange: v => scoreSet("mode", v)
  });
}
function ModeNote() {
  const S = useScore();
  return /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 11,
      color: "var(--ink-mute)",
      margin: "-12px 0 18px"
    }
  }, S.mode === "sample" ? `Sample history, twelve modeled weeks across all ${METRICS.length} metrics. Switch to Live log to enter real numbers.` : "Live log. Numbers entered on the Score Log page. An empty week means not measured, not zero.");
}
const detailBtn = {
  border: "1px solid var(--rule)",
  background: "var(--surface-3)",
  color: "var(--ink-soft)",
  borderRadius: "var(--r-sm)",
  padding: "6px 11px",
  fontSize: 11.5,
  fontWeight: 600,
  cursor: "pointer"
};
const Dot = ({
  st
}) => /*#__PURE__*/React.createElement("span", {
  className: "dot",
  style: {
    background: T(ST_TONE[st]),
    flexShrink: 0
  }
});

/* ============================== ROLE SCORECARDS ============================== */
function TeamScorecards({
  go
}) {
  const S = useScore();
  useSeats();
  const seats = liveSeats().map(seatRead);
  const all = seats.flatMap(x => x.reads);
  const cnt = set => all.filter(r => set[r.st]).length;
  const shown = S.viewAs === "owner" ? seats : seats.filter(x => x.s.id === S.viewAs || S.viewAs === "coo" && x.s.id === "warehouse");
  const focus = S.focus && shown.find(x => x.s.id === S.focus);
  const f = metricRead(METRICS.find(m => m.id === "f_dec"));
  const stuck = all.filter(r => OFF[r.st]).sort((a, b) => b.streak - a.streak);
  const weeks = lastWeek() + 1;
  return /*#__PURE__*/React.createElement("div", {
    className: "page-in"
  }, /*#__PURE__*/React.createElement(PageHead, {
    title: "Role scorecards",
    sub: "Every seat, scored on every metric it's held to. Everyone sees their own card. The owner sees all of them.",
    right: /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        gap: 10,
        alignItems: "center",
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement("select", {
      value: S.viewAs,
      onChange: e => {
        scoreSet("viewAs", e.target.value);
        scoreSet("focus", null);
      },
      "aria-label": "Viewing as",
      style: {
        background: "var(--surface-3)",
        color: "var(--ink)",
        border: "1px solid var(--rule)",
        borderRadius: "var(--r-sm)",
        padding: "6px 9px",
        fontSize: 12
      }
    }, /*#__PURE__*/React.createElement("option", {
      value: "owner"
    }, "Viewing as the owner, all seats"), liveSeats().filter(s => !s.relationship && s.id !== "founder").map(s => /*#__PURE__*/React.createElement("option", {
      key: s.id,
      value: s.id
    }, "Viewing as ", seatWho(s).name, ", ", s.short))), /*#__PURE__*/React.createElement(ModeSwitch, null))
  }), /*#__PURE__*/React.createElement(ModeNote, null), S.viewAs === "owner" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(G, {
    c: 4,
    style: {
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(KPI, {
    label: "Holding",
    value: String(cnt(HOLD)),
    tone: "good",
    sub: `of ${all.length} metrics, on target or improving`
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Off",
    value: String(cnt(OFF)),
    tone: "bad",
    sub: "off target or slipping"
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Watch",
    value: String(cnt(WATCH)),
    tone: "warn",
    sub: "flat, or a first entry"
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Not measured",
    value: String(all.filter(r => r.st === "Not measured").length),
    tone: "mute",
    sub: "measure still being built"
  })), /*#__PURE__*/React.createElement(G, {
    c: 2,
    name: "2h",
    gap: 16,
    style: {
      gridTemplateColumns: "1fr 1.25fr",
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(Card, {
    pad: 20,
    style: {
      borderLeft: "3px solid var(--accent)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-label"
  }, "The one that matters most"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 10,
      flexWrap: "wrap",
      margin: "6px 0 6px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      fontSize: 30,
      fontWeight: 600,
      color: T(ST_TONE[f.st] === "mute" ? "ink" : ST_TONE[f.st])
    }
  }, fmtM(f.m, f.latest)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      color: "var(--ink-soft)"
    }
  }, "decisions routed through the owner this week. Target under 5.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 11.5,
      color: "var(--ink-mute)",
      lineHeight: 1.55,
      marginBottom: 10
    }
  }, "Every other number improves as this one falls, because most of them are held back by waiting on him."), /*#__PURE__*/React.createElement(Trend, {
    m: f.m,
    row: f.row,
    h: 96,
    tone: ST_TONE[f.st]
  })), /*#__PURE__*/React.createElement(Card, {
    pad: 0
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "18px 18px 4px"
    }
  }, /*#__PURE__*/React.createElement(SecLabel, {
    icon: "alert",
    right: "longest run first",
    help: "Every metric that's off target or slipping right now, sorted by how many entries in a row it's been off. A long run is a failure mode, not a bad week."
  }, "Sticking points")), stuck.length === 0 ? /*#__PURE__*/React.createElement("p", {
    style: {
      padding: "8px 18px 20px",
      fontSize: 12.5,
      color: "var(--ink-mute)"
    }
  }, "Nothing's off right now.") : /*#__PURE__*/React.createElement("div", {
    className: "scroll-x"
  }, /*#__PURE__*/React.createElement("table", {
    className: "tbl"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Seat"), /*#__PURE__*/React.createElement("th", null, "Metric"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Latest"), /*#__PURE__*/React.createElement("th", null, "Target"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Off for"))), /*#__PURE__*/React.createElement("tbody", null, stuck.slice(0, 8).map(r => {
    const s = seatById(r.m.seat);
    return /*#__PURE__*/React.createElement("tr", {
      key: r.m.id,
      className: "clickable",
      onClick: () => scoreSet("focus", s.id),
      style: {
        cursor: "pointer"
      }
    }, /*#__PURE__*/React.createElement("td", {
      style: {
        fontWeight: 600,
        whiteSpace: "nowrap"
      }
    }, s.short), /*#__PURE__*/React.createElement("td", {
      style: {
        fontSize: 12
      }
    }, r.m.name), /*#__PURE__*/React.createElement("td", {
      className: "num",
      style: {
        textAlign: "right",
        color: "var(--bad)",
        fontWeight: 600,
        whiteSpace: "nowrap"
      }
    }, fmtM(r.m, r.latest)), /*#__PURE__*/React.createElement("td", {
      style: {
        fontSize: 11.5,
        color: "var(--ink-mute)"
      }
    }, r.m.target), /*#__PURE__*/React.createElement("td", {
      style: {
        textAlign: "right",
        whiteSpace: "nowrap"
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: r.streak >= 3 ? "bad" : "warn"
    }, r.streak, " ", r.streak === 1 ? "entry" : "entries")));
  })))), stuck.length > 8 && /*#__PURE__*/React.createElement("p", {
    style: {
      padding: "8px 18px 14px",
      fontSize: 11,
      color: "var(--ink-mute)"
    }
  }, stuck.length - 8, " more on the seat cards below."))), /*#__PURE__*/React.createElement(Card, {
    pad: 20,
    style: {
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement(SecLabel, {
    icon: "pulse",
    right: "holding against off, by week",
    help: "Each cell uses every metric's latest entry up to that week, and scores holding against off. Flat and first entries sit out. Gray means nothing measured yet."
  }, "Seat health over time"), /*#__PURE__*/React.createElement("div", {
    className: "scroll-x"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: `minmax(130px,1fr) repeat(${weeks},minmax(24px,1fr))`,
      gap: 3,
      minWidth: 520
    }
  }, /*#__PURE__*/React.createElement("span", null), Array.from({
    length: weeks
  }, (_, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      fontSize: 8.5,
      color: "var(--ink-mute)",
      textAlign: "center"
    }
  }, i % 2 === 0 ? WEEKS[i] : "")), liveSeats().map(s => /*#__PURE__*/React.createElement(React.Fragment, {
    key: s.id
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => scoreSet("focus", s.id),
    style: {
      fontSize: 11.5,
      color: "var(--ink-soft)",
      cursor: "pointer",
      whiteSpace: "nowrap"
    }
  }, s.short), Array.from({
    length: weeks
  }, (_, i) => {
    const hh = seatHealthAt(s, i);
    const tone = !hh ? null : hh.pct >= 75 ? "good" : hh.pct >= 50 ? "warn" : "bad";
    return /*#__PURE__*/React.createElement("span", {
      key: i,
      title: hh ? `${WEEKS[i]}: ${hh.hold} holding, ${hh.off} off, ${hh.meas - hh.hold - hh.off} on watch` : `${WEEKS[i]}: nothing measured`,
      style: {
        height: 18,
        borderRadius: 3,
        background: tone ? T(tone) : "var(--surface-3)",
        opacity: tone ? 0.85 : 1
      }
    });
  }))))))), /*#__PURE__*/React.createElement(G, {
    c: 3,
    name: "3",
    gap: 16,
    style: {
      marginBottom: 22
    }
  }, shown.map(x => {
    const {
      s,
      primary: p
    } = x;
    const on = S.focus === s.id;
    return /*#__PURE__*/React.createElement(Card, {
      key: s.id,
      pad: 18,
      hover: true,
      onClick: () => scoreSet("focus", on ? null : s.id),
      style: {
        cursor: "pointer",
        borderColor: on ? "var(--accent)" : undefined,
        display: "flex",
        flexDirection: "column",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 9,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      name: seatWho(s).open ? "?" : seatWho(s).name,
      size: 28,
      tone: seatWho(s).open ? "warn" : x.off ? "bad" : "accent"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13.5,
        fontWeight: 600
      }
    }, s.seat), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: "var(--ink-mute)"
      }
    }, seatWho(s).open ? "Open, nobody in the seat" : seatWho(s).name))), /*#__PURE__*/React.createElement(Badge, {
      tone: x.off ? "bad" : x.hold ? "good" : "mute"
    }, x.off ? `${x.off} stuck` : x.hold ? "Holding" : "Not measured")), p ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: "var(--ink-mute)",
        marginBottom: 2
      }
    }, p.m.name), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "baseline",
        gap: 9,
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "mono",
      style: {
        fontSize: 22,
        fontWeight: 600,
        color: p.latest == null ? "var(--ink-mute)" : T(ST_TONE[p.st])
      }
    }, fmtM(p.m, p.latest)), /*#__PURE__*/React.createElement(Badge, {
      tone: ST_TONE[p.st]
    }, p.st))) : /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11.5,
        color: "var(--ink-mute)",
        lineHeight: 1.55
      }
    }, "No metrics yet. Write the role document, then give the seat a number and 30 days of history before it gets scored."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 6,
        paddingTop: 9,
        borderTop: "1px solid var(--rule-soft)"
      }
    }, x.reads.filter(r => !r.m.primary).map(r => /*#__PURE__*/React.createElement("div", {
      key: r.m.id,
      style: {
        display: "grid",
        gridTemplateColumns: "auto 1fr auto",
        gap: 8,
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement(Dot, {
      st: r.st
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11.5,
        color: OFF[r.st] ? "var(--ink)" : "var(--ink-soft)",
        fontWeight: OFF[r.st] ? 600 : 400
      }
    }, r.m.name), /*#__PURE__*/React.createElement("span", {
      className: "mono",
      style: {
        fontSize: 11.5,
        color: r.latest == null ? "var(--ink-mute)" : T(ST_TONE[r.st]),
        whiteSpace: "nowrap"
      }
    }, fmtM(r.m, r.latest))))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        gap: 8,
        flexWrap: "wrap",
        fontSize: 10.5,
        color: "var(--ink-mute)",
        paddingTop: 8,
        borderTop: "1px solid var(--rule-soft)"
      }
    }, /*#__PURE__*/React.createElement("span", null, x.hold, " of ", x.reads.length, " holding", x.none ? ` · ${x.none} not measured` : ""), /*#__PURE__*/React.createElement(Badge, {
      tone: MEASURE_TONE[s.measure]
    }, s.measure)));
  })), focus && /*#__PURE__*/React.createElement(SeatDetail, {
    x: focus,
    go: go,
    weeks: weeks
  }), /*#__PURE__*/React.createElement(Note, {
    tone: "info",
    icon: "i"
  }, "When a seat is off, the colored dots show which metric it's stuck on. Look there before the person. Most of the time a number moves because something upstream of it changed, not because somebody stopped trying. Click any card for every trend."));
}
function SeatDetail({
  x,
  go,
  weeks
}) {
  const {
    s
  } = x;
  return /*#__PURE__*/React.createElement(Card, {
    pad: 22,
    style: {
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      gap: 14,
      flexWrap: "wrap",
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0,
      flex: "1 1 320px"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 17,
      marginBottom: 5
    }
  }, s.seat, " \xB7 ", seatWho(s).open ? "seat open" : seatWho(s).name), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 12.5,
      color: "var(--ink-soft)",
      lineHeight: 1.55
    }
  }, s.line), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 11.5,
      color: "var(--ink-mute)",
      marginTop: 6,
      lineHeight: 1.55
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      fontWeight: 600
    }
  }, "Manages."), " ", s.manages, ". ", /*#__PURE__*/React.createElement("b", {
    style: {
      fontWeight: 600
    }
  }, "Doesn't."), " ", s.not, " Role document: ", s.doc, ", in the Vault.")), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => go("scorelog"),
    style: detailBtn
  }, "Open the log"), /*#__PURE__*/React.createElement("button", {
    onClick: () => go("org"),
    style: detailBtn
  }, "See on the org chart"))), /*#__PURE__*/React.createElement(SecLabel, {
    icon: "target",
    right: "each dot colored by its status that week"
  }, "Every metric"), /*#__PURE__*/React.createElement(G, {
    c: 2,
    name: "2",
    gap: 14,
    style: {
      marginBottom: 20
    }
  }, x.reads.map(r => /*#__PURE__*/React.createElement("div", {
    key: r.m.id,
    style: {
      border: "1px solid var(--rule-soft)",
      borderRadius: "var(--r-md)",
      padding: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      gap: 10,
      alignItems: "flex-start",
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      fontWeight: r.m.primary ? 650 : 500
    }
  }, r.m.name, r.m.primary && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--accent)",
      fontWeight: 500
    }
  }, " \xB7 primary")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10.5,
      color: "var(--ink-mute)"
    }
  }, "Target ", r.m.target, " \xB7 ", r.m.cadence, " \xB7 ", r.m.source)), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "right",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 15,
      fontWeight: 600,
      color: r.latest == null ? "var(--ink-mute)" : T(ST_TONE[r.st])
    }
  }, fmtM(r.m, r.latest)), /*#__PURE__*/React.createElement(Badge, {
    tone: ST_TONE[r.st]
  }, r.st, OFF[r.st] && r.streak > 1 ? `, ${r.streak} entries` : ""))), /*#__PURE__*/React.createElement(Trend, {
    m: r.m,
    row: r.row,
    h: 84,
    tone: ST_TONE[r.st]
  })))), /*#__PURE__*/React.createElement(SecLabel, {
    icon: "clock",
    right: "green holding, amber flat, blue first entry, red off, gray no entry"
  }, "Status by week"), /*#__PURE__*/React.createElement(StatusStrip, {
    reads: x.reads,
    weeks: weeks
  }));
}

/* ============================== SCORE LOG ============================== */
function ScoreLog() {
  const S = useScore();
  useSeats();
  const live = S.mode === "live";
  const shownWeeks = live ? WEEKS.length : 12;
  const exportCsv = () => {
    const head = ["Seat", "Who", "Metric", "Primary", "Target", "Cadence", "Source", ...WEEKS, "Latest", "Prior", "Status"];
    const lines = [head].concat(METRICS.map(m => {
      const r = metricRead(m),
        s = seatById(m.seat);
      return [s.seat, seatWho(s).name, m.name, m.primary ? "Primary" : "", m.target, m.cadence, m.source, ...r.row.map(v => v == null ? "" : v), r.latest ?? "", r.prior ?? "", r.st];
    }));
    const csv = lines.map(l => l.map(c => `"${String(c).replace(/"/g, '""')}"`).join(",")).join("\n");
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([csv], {
      type: "text/csv"
    }));
    a.download = `mynd_score_log_${S.mode}.csv`;
    a.click();
  };
  const inp = {
    width: 60,
    background: "var(--surface-3)",
    border: "1px solid var(--rule)",
    borderRadius: 6,
    color: "var(--ink)",
    padding: "5px 6px",
    fontSize: 12,
    textAlign: "right",
    fontFamily: "var(--mono)"
  };
  const sticky = {
    position: "sticky",
    left: 0,
    background: "var(--surface)",
    zIndex: 1
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "page-in"
  }, /*#__PURE__*/React.createElement(PageHead, {
    title: "Score log",
    sub: "Every metric, every week it's read. Each entry is scored the moment it lands.",
    right: /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        gap: 10,
        alignItems: "center",
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: exportCsv,
      style: detailBtn
    }, "Export CSV"), live && /*#__PURE__*/React.createElement("button", {
      onClick: () => {
        if (confirm("Clear every live entry?")) scoreClear();
      },
      style: detailBtn
    }, "Clear live log"), /*#__PURE__*/React.createElement(ModeSwitch, null))
  }), /*#__PURE__*/React.createElement(ModeNote, null), /*#__PURE__*/React.createElement(Card, {
    pad: 0,
    style: {
      marginBottom: 20
    },
    key: S.mode + ":" + S.clears
  }, /*#__PURE__*/React.createElement("div", {
    className: "scroll-x"
  }, /*#__PURE__*/React.createElement("table", {
    className: "tbl"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    style: {
      ...sticky,
      minWidth: 230
    }
  }, "Metric"), /*#__PURE__*/React.createElement("th", null, "Target"), WEEKS.slice(0, shownWeeks).map((w, i) => /*#__PURE__*/React.createElement("th", {
    key: w,
    style: {
      textAlign: "right",
      color: i === 0 ? "var(--accent)" : undefined
    }
  }, w)), /*#__PURE__*/React.createElement("th", null, "Status"))), /*#__PURE__*/React.createElement("tbody", null, liveSeats().map(s => /*#__PURE__*/React.createElement(React.Fragment, {
    key: s.id
  }, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    colSpan: shownWeeks + 3,
    style: {
      background: "var(--surface-3)",
      fontWeight: 650,
      fontSize: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "sticky",
      left: 13
    }
  }, s.seat, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 400,
      color: "var(--ink-mute)"
    }
  }, "\xB7 ", seatWho(s).name)))), seatMetrics(s.id).length === 0 && /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    colSpan: shownWeeks + 3,
    style: {
      fontSize: 11.5,
      color: "var(--ink-mute)"
    }
  }, "No metrics on this seat yet. It gets a row here once it has a role document and a number.")), seatMetrics(s.id).map(m => {
    const r = metricRead(m);
    return /*#__PURE__*/React.createElement("tr", {
      key: m.id
    }, /*#__PURE__*/React.createElement("td", {
      style: sticky
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: m.primary ? 600 : 400,
        fontSize: 12.5
      }
    }, m.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10.5,
        color: "var(--ink-mute)"
      }
    }, m.cadence, m.primary ? " · primary" : "", m.unit === "yes" ? " · 1 yes, 0 no" : m.unit === "pct" ? " · whole percent" : "")), /*#__PURE__*/React.createElement("td", {
      style: {
        fontSize: 11.5,
        color: "var(--ink-soft)",
        minWidth: 110
      }
    }, m.target), r.row.slice(0, shownWeeks).map((v, i) => {
      const st = statusAt(m, r.row, i);
      return /*#__PURE__*/React.createElement("td", {
        key: i,
        className: "num",
        style: {
          textAlign: "right",
          whiteSpace: "nowrap",
          color: v == null ? "var(--ink-dim)" : T(ST_TONE[st]),
          background: st && OFF[st] ? "var(--bad-tint)" : undefined
        }
      }, live ? /*#__PURE__*/React.createElement("input", {
        type: "number",
        step: "any",
        min: m.unit === "yes" ? 0 : undefined,
        max: m.unit === "yes" ? 1 : undefined,
        defaultValue: v ?? "",
        "aria-label": `${m.name}, week of ${WEEKS[i]}`,
        onBlur: e => {
          const nv = e.target.value;
          if (String(v ?? "") !== nv) scoreEnter(m.id, i, nv);
        },
        style: inp
      }) : v == null ? "-" : fmtM(m, v));
    }), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(Badge, {
      tone: ST_TONE[r.st]
    }, r.st)));
  }))))))), /*#__PURE__*/React.createElement(G, {
    c: 2,
    name: "2h",
    gap: 16
  }, /*#__PURE__*/React.createElement(Card, {
    pad: 20
  }, /*#__PURE__*/React.createElement(SecLabel, {
    icon: "target"
  }, "How status works"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 12.5,
      color: "var(--ink-soft)",
      lineHeight: 1.6
    }
  }, "At or under and at or over compare each entry to the target. Yes metrics take 1 for yes and 0 for no. Rising compares each entry to the last one before it, and flat or falling counts no change as on target. Every entry gets scored, so a metric that stays off shows as a red run across the weeks. Not measured means nothing was entered, and that's a real state rather than a zero.")), /*#__PURE__*/React.createElement(Card, {
    pad: 20
  }, /*#__PURE__*/React.createElement(SecLabel, {
    icon: "clock"
  }, "What to enter"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 12.5,
      color: "var(--ink-soft)",
      lineHeight: 1.6
    }
  }, "Weekly and daily metrics get a number every week. Daily ones take the week's figure: the average for activity, the worst day for anything targeted at zero. Monthly metrics get one number in the first week of the month, per-run metrics one in the week of the run. Percentages go in as whole numbers."))));
}

/* ============================== ORG CHART ============================== */
function OrgCard({
  s,
  go
}) {
  useSeats();
  const x = seatRead(s),
    p = x.primary;
  const clickable = !!p;
  return /*#__PURE__*/React.createElement(Card, {
    pad: 16,
    hover: clickable,
    onClick: clickable ? () => {
      scoreSet("viewAs", "owner");
      scoreSet("focus", s.id);
      go("scorecards");
    } : undefined,
    style: {
      cursor: clickable ? "pointer" : "default",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      position: "relative",
      borderStyle: s.relationship || s.custom ? "dashed" : undefined
    }
  }, s.id !== "founder" && /*#__PURE__*/React.createElement("button", {
    title: "Remove this seat",
    onClick: e => {
      e.stopPropagation();
      seatRemove(s.id);
    },
    style: {
      position: "absolute",
      top: 8,
      right: 8,
      width: 20,
      height: 20,
      lineHeight: 1,
      borderRadius: 5,
      background: "none",
      border: "1px solid var(--rule)",
      color: "var(--ink-mute)",
      fontSize: 13,
      cursor: "pointer",
      padding: 0
    }
  }, "\xD7"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 9
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: seatWho(s).open ? "?" : seatWho(s).name,
    size: 30,
    tone: s.relationship ? "mute" : seatWho(s).open ? "warn" : "accent"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      fontWeight: 600
    }
  }, s.short), /*#__PURE__*/React.createElement(SeatName, {
    s: s
  }))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 11.5,
      color: "var(--ink-soft)",
      lineHeight: 1.5
    }
  }, s.line), p ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 8,
      paddingTop: 8,
      borderTop: "1px solid var(--rule-soft)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10.5,
      color: "var(--ink-mute)",
      minWidth: 0
    }
  }, p.m.name), /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: p.latest == null ? "var(--ink-mute)" : T(ST_TONE[p.st]),
      whiteSpace: "nowrap"
    }
  }, fmtM(p.m, p.latest))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 5,
      flexWrap: "wrap"
    }
  }, x.reads.map(r => /*#__PURE__*/React.createElement(Dot, {
    key: r.m.id,
    st: r.st
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10.5,
      color: "var(--ink-mute)",
      marginLeft: 4
    }
  }, x.hold, " of ", x.reads.length, " holding"))) : /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 8,
      borderTop: "1px solid var(--rule-soft)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10.5,
      color: "var(--ink-mute)"
    }
  }, "No metrics yet. A seat gets scored once it has a role document and a number.")), seatWho(s).open && /*#__PURE__*/React.createElement(Badge, {
    tone: "warn",
    style: {
      alignSelf: "flex-start"
    }
  }, "Seat open"), s.custom && /*#__PURE__*/React.createElement(Badge, {
    tone: "violet",
    style: {
      alignSelf: "flex-start"
    }
  }, "Added here"), s.moving && /*#__PURE__*/React.createElement(Badge, {
    tone: "info",
    style: {
      alignSelf: "flex-start"
    }
  }, "Moving to the COO"), s.relationship && /*#__PURE__*/React.createElement(Badge, {
    tone: "mute",
    style: {
      alignSelf: "flex-start"
    }
  }, "A relationship, not a person"));
}
function AddSeat({
  onDone
}) {
  const [seat, setSeat] = useState(""),
    [who, setWho] = useState(""),
    [reports, setReports] = useState("founder");
  const [line, setLine] = useState("");
  const inp = {
    background: "var(--surface-3)",
    border: "1px solid var(--rule)",
    borderRadius: "var(--r-sm)",
    color: "var(--ink)",
    fontSize: 12.5,
    padding: "7px 10px",
    outline: "none",
    width: "100%"
  };
  const live = liveSeats();
  return /*#__PURE__*/React.createElement(Card, {
    pad: 18,
    style: {
      marginBottom: 22,
      borderColor: "var(--accent)"
    }
  }, /*#__PURE__*/React.createElement(SecLabel, {
    icon: "team"
  }, "Add a seat"), /*#__PURE__*/React.createElement(G, {
    c: 4,
    gap: 11,
    style: {
      marginBottom: 11
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10.5,
      color: "var(--ink-mute)",
      marginBottom: 4
    }
  }, "Role"), /*#__PURE__*/React.createElement("input", {
    autoFocus: true,
    value: seat,
    onChange: e => setSeat(e.target.value),
    placeholder: "Head of Growth",
    style: inp
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10.5,
      color: "var(--ink-mute)",
      marginBottom: 4
    }
  }, "Who holds it"), /*#__PURE__*/React.createElement("input", {
    value: who,
    onChange: e => setWho(e.target.value),
    placeholder: "Leave blank for open",
    style: inp
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10.5,
      color: "var(--ink-mute)",
      marginBottom: 4
    }
  }, "Reports to"), /*#__PURE__*/React.createElement("select", {
    value: reports,
    onChange: e => setReports(e.target.value),
    style: inp
  }, live.filter(s => s.id === "founder" || s.id === "coo").map(s => /*#__PURE__*/React.createElement("option", {
    key: s.id,
    value: s.id
  }, s.short)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10.5,
      color: "var(--ink-mute)",
      marginBottom: 4
    }
  }, "What the seat is for"), /*#__PURE__*/React.createElement("input", {
    value: line,
    onChange: e => setLine(e.target.value),
    placeholder: "One line",
    style: inp
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 9,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("button", {
    disabled: !seat.trim(),
    onClick: () => {
      seatAdd({
        seat: seat.trim(),
        short: seat.trim(),
        who: who.trim(),
        reports,
        line: line.trim()
      });
      onDone();
    },
    style: {
      background: seat.trim() ? "var(--accent)" : "var(--surface-3)",
      border: "none",
      borderRadius: "var(--r-sm)",
      color: seat.trim() ? "#fff" : "var(--ink-mute)",
      fontSize: 12,
      fontWeight: 600,
      padding: "8px 14px",
      cursor: seat.trim() ? "pointer" : "default"
    }
  }, "Add the seat"), /*#__PURE__*/React.createElement("button", {
    onClick: onDone,
    style: {
      background: "none",
      border: "1px solid var(--rule)",
      borderRadius: "var(--r-sm)",
      color: "var(--ink-mute)",
      fontSize: 12,
      padding: "8px 14px",
      cursor: "pointer"
    }
  }, "Cancel"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11.5,
      color: "var(--ink-mute)"
    }
  }, "A seat added here carries no metrics. Write the role document and give it a number before it gets scored.")));
}
function TeamOrg({
  go
}) {
  const S = useScore();
  const seats = useSeats();
  const [adding, setAdding] = useState(false);
  const removed = SeatStore.removed.map(id => SEATS.find(s => s.id === id)).filter(Boolean);
  const L = liveSeats();
  const owner = seatById("founder"),
    coo = L.find(s => s.id === "coo");
  const cooGone = !coo;
  const direct = L.filter(s => s.id !== "founder" && s.id !== "coo" && (cooGone ? s.reports === "founder" || s.reports === "coo" : !s.moving && s.reports === "founder"));
  const underCoo = cooGone ? [] : L.filter(s => s.reports === "coo");
  const moving = L.filter(s => s.moving === "coo" && !cooGone);
  const orphans = cooGone ? L.filter(s => s.reports === "coo" || s.moving === "coo") : [];
  const fo = seatRead(owner),
    fr = fo.primary;
  const steps = S.mode === "sample" ? TRANSFERS : TRANSFERS.map(t => ({
    ...t,
    step: t.step == null ? null : 0
  }));
  return /*#__PURE__*/React.createElement("div", {
    className: "page-in"
  }, /*#__PURE__*/React.createElement(PageHead, {
    title: "Org chart",
    sub: "Who does what, who it reports to, and how each seat is scoring across its metrics.",
    meta: `${L.length} seats. Click a name to change who holds it, or clear it to mark the seat open. Use the × to remove a seat, and Add a seat for a new one. Click anywhere else on a card for its scorecard.`,
    right: /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        gap: 10,
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setAdding(a => !a),
      style: {
        background: "var(--accent)",
        border: "none",
        borderRadius: "var(--r-sm)",
        color: "#fff",
        fontSize: 11,
        fontWeight: 600,
        padding: "6px 11px",
        cursor: "pointer"
      }
    }, "Add a seat"), seatDirty() && /*#__PURE__*/React.createElement("button", {
      onClick: seatResetWho,
      style: {
        background: "none",
        border: "1px solid var(--rule)",
        borderRadius: "var(--r-sm)",
        color: "var(--ink-mute)",
        fontSize: 11,
        padding: "5px 10px",
        cursor: "pointer"
      }
    }, "Reset the chart"), /*#__PURE__*/React.createElement(ModeSwitch, null))
  }), adding && /*#__PURE__*/React.createElement(AddSeat, {
    onDone: () => setAdding(false)
  }), removed.length > 0 && /*#__PURE__*/React.createElement(Card, {
    pad: 14,
    style: {
      marginBottom: 20,
      borderStyle: "dashed"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11.5,
      color: "var(--ink-mute)"
    }
  }, removed.length === 1 ? "One written seat is off the chart" : `${removed.length} written seats are off the chart`, ". They stay in the role documents until you say otherwise."), removed.map(s => /*#__PURE__*/React.createElement("button", {
    key: s.id,
    onClick: () => seatRestore(s.id),
    style: {
      background: "none",
      border: "1px solid var(--rule)",
      borderRadius: "var(--r-sm)",
      color: "var(--ink)",
      fontSize: 11.5,
      padding: "4px 10px",
      cursor: "pointer"
    }
  }, "Put ", s.short, " back")))), cooGone && orphans.length > 0 && /*#__PURE__*/React.createElement(Card, {
    pad: 14,
    style: {
      marginBottom: 20,
      borderColor: "var(--warn)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11.5,
      color: "var(--ink-soft)"
    }
  }, "The COO seat is off the chart, so ", orphans.length === 1 ? "one seat that reported into it reports" : `${orphans.length} seats that reported into it report`, " to the owner instead. That's the founder dependency going back up, not a reorganization.")), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 340,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-label",
    style: {
      justifyContent: "center"
    }
  }, "Owner"), /*#__PURE__*/React.createElement(Card, {
    pad: 18,
    hover: true,
    onClick: () => {
      scoreSet("viewAs", "owner");
      scoreSet("focus", "founder");
      go("scorecards");
    },
    style: {
      cursor: "pointer",
      borderColor: "var(--accent)",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: D.meta.user,
    size: 40
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 600
    }
  }, /*#__PURE__*/React.createElement(SeatName, {
    s: {
      ...owner,
      who: D.meta.user
    },
    size: 15
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: "var(--accent)"
    }
  }, "Founder and Owner"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: "var(--ink-soft)"
    }
  }, fr.m.name, ": ", /*#__PURE__*/React.createElement("b", {
    className: "mono",
    style: {
      color: T(ST_TONE[fr.st] === "mute" ? "ink" : ST_TONE[fr.st])
    }
  }, fmtM(fr.m, fr.latest)), ", target under 5"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 5
    }
  }, fo.reads.map(r => /*#__PURE__*/React.createElement(Dot, {
    key: r.m.id,
    st: r.st
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10.5,
      color: "var(--ink-mute)",
      marginLeft: 4
    }
  }, fo.hold, " of ", fo.reads.length, " holding"))))), !cooGone && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 20,
      background: "var(--rule)",
      margin: "0 auto"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 340,
      margin: "0 auto 22px"
    }
  }, /*#__PURE__*/React.createElement(OrgCard, {
    s: coo,
    go: go
  }))), cooGone && /*#__PURE__*/React.createElement("div", {
    style: {
      height: 22
    }
  }), /*#__PURE__*/React.createElement(SecLabel, {
    icon: "team",
    right: `${direct.length} seats`
  }, "Reports to the owner"), /*#__PURE__*/React.createElement(G, {
    c: 4,
    name: "4",
    gap: 14,
    style: {
      marginBottom: 22
    }
  }, direct.map(s => /*#__PURE__*/React.createElement(OrgCard, {
    key: s.id,
    s: s,
    go: go
  }))), !cooGone && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SecLabel, {
    icon: "team",
    right: `${underCoo.length} owned · ${moving.length} reporting to the owner until they move`
  }, "Owned by the COO, or moving to the COO"), /*#__PURE__*/React.createElement(G, {
    c: 3,
    name: "3",
    gap: 14,
    style: {
      marginBottom: 26
    }
  }, underCoo.concat(moving).map(s => /*#__PURE__*/React.createElement(OrgCard, {
    key: s.id,
    s: s,
    go: go
  })))), /*#__PURE__*/React.createElement(G, {
    c: 2,
    name: "2h",
    gap: 16,
    style: {
      gridTemplateColumns: "1fr 1.5fr",
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(Card, {
    pad: 20
  }, /*#__PURE__*/React.createElement(SecLabel, {
    icon: "lock"
  }, "What stays with the owner"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "var(--ink-mute)",
      marginBottom: 6
    }
  }, "Only the owner"), OWNER.only.map(x => /*#__PURE__*/React.createElement("div", {
    key: x,
    style: {
      fontSize: 12.5,
      padding: "5px 0"
    }
  }, x)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "var(--ink-mute)",
      margin: "12px 0 6px"
    }
  }, "Kept by choice"), OWNER.choice.map(x => /*#__PURE__*/React.createElement("div", {
    key: x,
    style: {
      fontSize: 12.5,
      padding: "5px 0"
    }
  }, x)), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 11.5,
      color: "var(--ink-soft)",
      marginTop: 12,
      fontStyle: "italic"
    }
  }, "\"", OWNER.quote, "\"")), /*#__PURE__*/React.createElement(Card, {
    pad: 0
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "18px 18px 4px"
    }
  }, /*#__PURE__*/React.createElement(SecLabel, {
    icon: "exec",
    right: "watch, do with him watching, do alone"
  }, "What moves off the owner")), /*#__PURE__*/React.createElement("div", {
    className: "scroll-x"
  }, /*#__PURE__*/React.createElement("table", {
    className: "tbl"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Function"), /*#__PURE__*/React.createElement("th", null, "Order"), /*#__PURE__*/React.createElement("th", null, "To"), /*#__PURE__*/React.createElement("th", {
    style: {
      minWidth: 170
    }
  }, "Transfer"))), /*#__PURE__*/React.createElement("tbody", null, steps.map(t => /*#__PURE__*/React.createElement("tr", {
    key: t.f
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      fontWeight: 500
    }
  }, t.f), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(Badge, {
    tone: t.stage === "First" ? "accent" : t.stage === "Next" ? "info" : "mute"
  }, t.stage)), /*#__PURE__*/React.createElement("td", {
    style: {
      fontSize: 12,
      color: "var(--ink-soft)"
    }
  }, t.to), /*#__PURE__*/React.createElement("td", null, t.step == null ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11.5,
      color: "var(--ink-mute)"
    }
  }, "Held for control, to revisit") : /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 3,
      marginBottom: 4
    }
  }, [1, 2, 3].map(k => /*#__PURE__*/React.createElement("span", {
    key: k,
    style: {
      flex: 1,
      height: 5,
      borderRadius: 99,
      background: k <= t.step ? "var(--good)" : "var(--surface-3)"
    }
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10.5,
      color: "var(--ink-mute)"
    }
  }, TRANSFER_STEPS[t.step])))))))))), /*#__PURE__*/React.createElement(Note, {
    tone: "info",
    icon: "i"
  }, "A function has transferred when the written version is good enough for a third person to run it. Not when the COO can do it. When somebody who isn't the COO could."));
}
function ownerTicker() {
  const r = metricRead(METRICS.find(m => m.id === "f_dec"));
  return {
    i: "team",
    l: "Owner decisions this week",
    v: r.latest == null ? "not logged" : String(r.latest),
    tone: r.latest == null ? "ink" : r.latest <= 5 ? "good" : "bad"
  };
}

/* ==== pages-7.jsx ==== */
// pages-7.jsx, the cost layer. Costs & Settings, Production, Suppliers and the 3PL card.
// Folded in from the packaging and manufacturing workbook, which this retires.

// ---------------------------------------------------------------- cell formatting
function costCell(v, f) {
  if (v === null || v === undefined || v === "") return /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ink-mute)"
    }
  }, "-");
  if (typeof v !== "number") return v;
  if (f === "pct") return /*#__PURE__*/React.createElement("span", {
    className: "mono"
  }, (v * 100).toFixed(1), "%");
  if (f === "usd4") return /*#__PURE__*/React.createElement("span", {
    className: "mono"
  }, "$", v.toFixed(4));
  if (f === "usd0") return /*#__PURE__*/React.createElement("span", {
    className: "mono"
  }, "$", v.toLocaleString("en-US", {
    maximumFractionDigits: 0
  }));
  if (f === "usd") return /*#__PURE__*/React.createElement("span", {
    className: "mono"
  }, "$", v.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }));
  return /*#__PURE__*/React.createElement("span", {
    className: "mono"
  }, v.toLocaleString("en-US", {
    maximumFractionDigits: 3
  }));
}

// one extracted workbook block, rendered as a labelled table with its notes
function Sheet({
  block,
  editable
}) {
  if (block.kind === "note") {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: 14
      }
    }, /*#__PURE__*/React.createElement(Note, {
      tone: "info"
    }, block.text));
  }
  const head = block.head || [];
  const fmts = block.fmt || [];
  const wide = head.length > 1 ? head.length - 1 : 0;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 26
    }
  }, block.label && /*#__PURE__*/React.createElement(SecLabel, {
    right: editable ? "Editable" : null
  }, block.label), /*#__PURE__*/React.createElement(Card, {
    pad: 0
  }, /*#__PURE__*/React.createElement("div", {
    className: "scroll-x"
  }, /*#__PURE__*/React.createElement("table", {
    className: "tbl"
  }, head.length > 0 && /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, head.map((h, i) => /*#__PURE__*/React.createElement("th", {
    key: i,
    style: {
      textAlign: i === 0 || i === head.length - 1 ? "left" : "right"
    }
  }, h || "")))), /*#__PURE__*/React.createElement("tbody", null, block.rows.map((r, ri) => /*#__PURE__*/React.createElement("tr", {
    key: ri
  }, r.c.map((v, ci) => /*#__PURE__*/React.createElement("td", {
    key: ci,
    className: ci > 0 && ci < r.c.length - 1 ? "num" : "",
    style: {
      textAlign: ci === 0 || ci === r.c.length - 1 ? "left" : "right",
      fontWeight: r.b && ci === 0 ? 650 : r.b ? 600 : 400,
      color: ci === r.c.length - 1 && head.length > 1 && typeof v === "string" ? "var(--ink-mute)" : r.b ? "var(--ink)" : undefined,
      fontSize: ci === r.c.length - 1 && head.length > 1 && typeof v === "string" ? 11.5 : undefined,
      background: r.b ? "var(--surface-3)" : undefined
    }
  }, costCell(v, fmts[ci]))))))))), block.notes && block.notes.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 11,
      display: "grid",
      gap: 9
    }
  }, block.notes.map((n, i) => /*#__PURE__*/React.createElement(Note, {
    key: i,
    tone: "info"
  }, n))));
}
function SheetBlocks({
  name,
  editable
}) {
  const s = COST.sheets[name];
  if (!s) return null;
  return /*#__PURE__*/React.createElement("div", null, s.blocks.map((b, i) => /*#__PURE__*/React.createElement(Sheet, {
    key: i,
    block: b,
    editable: editable
  })));
}

// ---------------------------------------------------------------- Costs & Settings
function Costs() {
  return /*#__PURE__*/React.createElement("div", {
    className: "page-in"
  }, /*#__PURE__*/React.createElement(PageHead, {
    title: "Costs & settings",
    sub: "What every unit costs to make, and the rates every cost figure is built from.",
    meta: "As of " + COST.asOf + ". One editable copy of every rate, and every cost figure calculated from it."
  }), /*#__PURE__*/React.createElement(G, {
    c: 4,
    style: {
      marginBottom: 20
    },
    name: "kpi8"
  }, COST.kpi.map(k => /*#__PURE__*/React.createElement(KPI, {
    key: k.k,
    label: k.label,
    value: k.value,
    sub: k.sub,
    tone: k.tone,
    help: k.help
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 12,
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement(Note, {
    tone: "accent",
    icon: "i"
  }, "Cost changes belong here, on the Rates tab. It's the only editable copy, and every figure on this page and on Production recalculates from it. The workbook that used to hold these is retired, so there's one source rather than two drifting apart."), /*#__PURE__*/React.createElement(Note, {
    tone: "warn",
    icon: "!"
  }, "Chocolate is eight pieces, confirmed by DB. The supplier quote priced six, so the actives and wrapper lines are repriced here and a box costs about $1.40 more than the quote implied. Both recipes are costed: extract-only at $11.65 and the hybrid with fruit at $10.54. Margin on four of six live products drops about two points against the old figure.")), /*#__PURE__*/React.createElement(SecLabel, null, "The lineup, and what each one costs"), /*#__PURE__*/React.createElement(Card, {
    pad: 0,
    style: {
      marginBottom: 26
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "scroll-x"
  }, /*#__PURE__*/React.createElement("table", {
    className: "tbl"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Product"), /*#__PURE__*/React.createElement("th", null, "Category"), /*#__PURE__*/React.createElement("th", null, "Status"), /*#__PURE__*/React.createElement("th", null, "Made by"), /*#__PURE__*/React.createElement("th", null, "Cost a unit"))), /*#__PURE__*/React.createElement("tbody", null, COST.lineup.map(r => /*#__PURE__*/React.createElement("tr", {
    key: r[0]
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      fontWeight: 600
    }
  }, r[0]), /*#__PURE__*/React.createElement("td", {
    style: {
      color: "var(--ink-soft)"
    }
  }, r[1]), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(Badge, {
    tone: r[2] === "Live" ? "good" : r[2] === "Retired" ? "mute" : r[2].indexOf("gated") > -1 ? "warn" : "info"
  }, r[2])), /*#__PURE__*/React.createElement("td", {
    style: {
      color: "var(--ink-soft)",
      fontSize: 12
    }
  }, r[3]), /*#__PURE__*/React.createElement("td", {
    className: "mono",
    style: {
      fontSize: 12
    }
  }, r[4]))))))), /*#__PURE__*/React.createElement(SheetBlocks, {
    name: "Cost per unit"
  }), /*#__PURE__*/React.createElement(SecLabel, {
    help: "Derived from the source's own dose and purity figures."
  }, "Love gummies, what's known and what isn't"), /*#__PURE__*/React.createElement(G, {
    c: 2,
    gap: 14,
    style: {
      marginBottom: 14
    },
    name: "two"
  }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: "var(--ink-mute)",
      marginBottom: 10
    }
  }, "The unit"), /*#__PURE__*/React.createElement("table", {
    className: "tbl"
  }, /*#__PURE__*/React.createElement("tbody", null, COST.love.spec.map(s => /*#__PURE__*/React.createElement("tr", {
    key: s[0]
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      fontWeight: 600
    }
  }, s[0]), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, s[1])))))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: "var(--ink-mute)",
      marginBottom: 10
    }
  }, "Still unquoted"), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      display: "grid",
      gap: 8
    }
  }, COST.love.unquoted.map(u => /*#__PURE__*/React.createElement("li", {
    key: u,
    style: {
      display: "flex",
      gap: 8,
      fontSize: 12.5,
      color: "var(--ink-soft)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--warn)",
      fontWeight: 700
    }
  }, "\xB7"), u))))), /*#__PURE__*/React.createElement(Card, {
    pad: 0,
    style: {
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "scroll-x"
  }, /*#__PURE__*/React.createElement("table", {
    className: "tbl"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Actives route"), /*#__PURE__*/React.createElement("th", null, "Dose"), /*#__PURE__*/React.createElement("th", null, "Purity"), /*#__PURE__*/React.createElement("th", null, "Price"), /*#__PURE__*/React.createElement("th", null, "Cost a unit"), /*#__PURE__*/React.createElement("th", null, "Note"))), /*#__PURE__*/React.createElement("tbody", null, COST.love.routes.map(r => /*#__PURE__*/React.createElement("tr", {
    key: r[0]
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      fontWeight: 600
    }
  }, r[0]), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, r[1]), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, r[2]), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, r[3]), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right",
      fontWeight: 650
    }
  }, r[4]), /*#__PURE__*/React.createElement("td", {
    style: {
      color: "var(--ink-mute)",
      fontSize: 11.5
    }
  }, r[5]))))))), /*#__PURE__*/React.createElement(Note, {
    tone: "warn",
    icon: "!"
  }, COST.love.note), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 26
    }
  }), /*#__PURE__*/React.createElement(SecLabel, {
    help: "A launch, not a reorder, so it gets funded rather than reordered."
  }, "The capsule trigger"), /*#__PURE__*/React.createElement(G, {
    c: 2,
    gap: 14,
    style: {
      marginBottom: 14
    },
    name: "two"
  }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 10,
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      fontSize: 26,
      fontWeight: 700,
      color: "var(--violet)"
    }
  }, "$10,000"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: "var(--ink-mute)"
    }
  }, "funds the first run")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 12.5,
      color: "var(--ink-soft)",
      lineHeight: 1.55
    }
  }, "Paid from the inventory bucket, which fills about $6,576 a month at the current sweep. The trigger is reached inside two months if nothing else draws on it.")), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: "var(--ink-mute)",
      marginBottom: 9
    }
  }, "What has to happen first"), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      display: "grid",
      gap: 8
    }
  }, [["Two tube quotes land", "Neither has come back. The order can't be placed without one"], ["Tubes ship from China", "Four to five weeks. The long pole on the whole launch"], ["Run turns around", "A week and a half to two once the tubes arrive"]].map(([a, b]) => /*#__PURE__*/React.createElement("li", {
    key: a,
    style: {
      fontSize: 12.5
    }
  }, /*#__PURE__*/React.createElement("b", null, a, "."), " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ink-mute)"
    }
  }, b)))))), /*#__PURE__*/React.createElement(Note, {
    tone: "warn",
    icon: "!"
  }, "Five to six weeks end to end, so a trigger hit in November lands stock in late December or January. Capsules aren't a Q4 product on this timeline. The build cost of $9.67 to $10.37 a bottle is still a quote, not a run."), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 26
    }
  }), /*#__PURE__*/React.createElement(SecLabel, null, "What the fold-in found"), /*#__PURE__*/React.createElement(Card, {
    pad: 0,
    style: {
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "scroll-x"
  }, /*#__PURE__*/React.createElement("table", {
    className: "tbl"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "What it found"), /*#__PURE__*/React.createElement("th", null, "What it means"), /*#__PURE__*/React.createElement("th", null, "What was done"))), /*#__PURE__*/React.createElement("tbody", null, COST.finds.map((f, i) => /*#__PURE__*/React.createElement("tr", {
    key: i
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      fontWeight: 600,
      maxWidth: 240
    }
  }, f[0]), /*#__PURE__*/React.createElement("td", {
    style: {
      color: "var(--ink-soft)",
      fontSize: 12
    }
  }, f[1]), /*#__PURE__*/React.createElement("td", {
    style: {
      color: "var(--ink-mute)",
      fontSize: 11.5
    }
  }, f[2]))))))), /*#__PURE__*/React.createElement(SecLabel, null, "Still open"), /*#__PURE__*/React.createElement(Card, {
    pad: 0
  }, /*#__PURE__*/React.createElement("div", {
    className: "scroll-x"
  }, /*#__PURE__*/React.createElement("table", {
    className: "tbl"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Question"), /*#__PURE__*/React.createElement("th", null, "Who answers it"), /*#__PURE__*/React.createElement("th", null, "Why it matters"))), /*#__PURE__*/React.createElement("tbody", null, COST.opens.map((o, i) => /*#__PURE__*/React.createElement("tr", {
    key: i
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      fontWeight: 600
    }
  }, o[0]), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(Badge, {
    tone: "warn"
  }, o[1])), /*#__PURE__*/React.createElement("td", {
    style: {
      color: "var(--ink-mute)",
      fontSize: 11.5
    }
  }, o[2]))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 16
    }
  }), /*#__PURE__*/React.createElement(Note, {
    tone: "info",
    icon: "i"
  }, COST.source));
}
function CostRates() {
  return /*#__PURE__*/React.createElement("div", {
    className: "page-in"
  }, /*#__PURE__*/React.createElement(PageHead, {
    title: "Rates",
    sub: "Every price, spec and rate the cost figures are built from. This is the only tab anyone types in.",
    meta: "Change a rate here and every cost on this page, on Production and on the Boardroom recalculates."
  }), /*#__PURE__*/React.createElement(Note, {
    tone: "accent",
    icon: "i"
  }, "In the live build these are form fields, and every change writes a row on the change log with who made it and when. The dashboard won't read later edits to any spreadsheet, so a rate that changes has to change here."), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 22
    }
  }), /*#__PURE__*/React.createElement(SheetBlocks, {
    name: "Inputs",
    editable: true
  }));
}
function CostFormulation() {
  return /*#__PURE__*/React.createElement("div", {
    className: "page-in"
  }, /*#__PURE__*/React.createElement(PageHead, {
    title: "Formulation",
    sub: "How much extract and fruit go into a piece, worked back from the dose.",
    meta: "Change the dose target or a potency on Rates and these move."
  }), /*#__PURE__*/React.createElement(SheetBlocks, {
    name: "Formulation"
  }), /*#__PURE__*/React.createElement(Note, {
    tone: "warn",
    icon: "!"
  }, "One thing the formulation can't settle. The supplier sheet labels a chocolate box 6g and DB's spec says 4g, but a 6-piece box carries about 0.70 g of extract, so the label's unit isn't grams of extract and the two don't reconcile. Piece count is confirmed at eight and priced. The dose label is still open."));
}
function CostLadder() {
  return /*#__PURE__*/React.createElement("div", {
    className: "page-in"
  }, /*#__PURE__*/React.createElement(PageHead, {
    title: "Volume ladder",
    sub: "What an order of each size buys, what it costs, and what it's worth at retail.",
    meta: "Tins and boxes are shown for the whole run and per flavor, because the original sheet mixed the two."
  }), /*#__PURE__*/React.createElement(SheetBlocks, {
    name: "Volume and batch"
  }));
}
function CostLog() {
  return /*#__PURE__*/React.createElement("div", {
    className: "page-in"
  }, /*#__PURE__*/React.createElement(PageHead, {
    title: "Change log",
    sub: "Every cost change, who made it and when.",
    meta: "Seeded with the fold-in. In the live build every edit on the Rates tab writes a row here."
  }), /*#__PURE__*/React.createElement(Card, {
    pad: 0
  }, /*#__PURE__*/React.createElement("div", {
    className: "scroll-x"
  }, /*#__PURE__*/React.createElement("table", {
    className: "tbl"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Date"), /*#__PURE__*/React.createElement("th", null, "Who"), /*#__PURE__*/React.createElement("th", null, "What changed"), /*#__PURE__*/React.createElement("th", null, "Why"))), /*#__PURE__*/React.createElement("tbody", null, COST.changeLog.map((c, i) => /*#__PURE__*/React.createElement("tr", {
    key: i
  }, /*#__PURE__*/React.createElement("td", {
    className: "mono",
    style: {
      fontSize: 12,
      whiteSpace: "nowrap"
    }
  }, c[0]), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(Badge, {
    tone: c[1] === "DB" ? "accent" : "info"
  }, c[1])), /*#__PURE__*/React.createElement("td", {
    style: {
      fontWeight: 600
    }
  }, c[2]), /*#__PURE__*/React.createElement("td", {
    style: {
      color: "var(--ink-mute)",
      fontSize: 11.5
    }
  }, c[3]))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 16
    }
  }), /*#__PURE__*/React.createElement(Note, {
    tone: "info",
    icon: "i"
  }, "A cost with no change log is a cost nobody can audit. This is the row that answers why a margin figure moved between two reports."));
}

// ---------------------------------------------------------------- Production
function kitchenEmpty() {
  return /*#__PURE__*/React.createElement(Note, {
    tone: "warn",
    icon: "!"
  }, COST.kitchen.empty);
}
function Production() {
  const k = COST.kitchen;
  const rollup = COST.sheets["Cost per unit"].blocks.find(b => b.label && b.label.indexOf("kitchen actually") > -1);
  return /*#__PURE__*/React.createElement("div", {
    className: "page-in"
  }, /*#__PURE__*/React.createElement(PageHead, {
    title: "Production",
    sub: "Every chocolate batch the kitchen runs, and what it actually cost.",
    meta: k.why
  }), /*#__PURE__*/React.createElement(G, {
    c: 4,
    style: {
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(KPI, {
    label: "Runs logged",
    value: "0",
    tone: "bad",
    sub: "of 3 needed per flavor",
    help: "One run is an anecdote. Three is a number."
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Units good",
    value: "0",
    tone: "mute",
    sub: "nothing logged yet"
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Overall yield",
    value: "Not measured",
    tone: "mute",
    sub: "good units over units started"
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Cost a good unit",
    value: "Not measured",
    tone: "mute",
    sub: "includes kitchen overhead",
    help: "Ingredients, actives, labor and the $1,400 overhead allocated per run."
  })), kitchenEmpty(), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 22
    }
  }), /*#__PURE__*/React.createElement(SecLabel, null, "The four rules"), /*#__PURE__*/React.createElement(G, {
    c: 4,
    gap: 12,
    style: {
      marginBottom: 26
    }
  }, k.rules.map(r => /*#__PURE__*/React.createElement(Card, {
    key: r[0]
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 650,
      fontSize: 13,
      marginBottom: 6
    }
  }, r[0]), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 12,
      color: "var(--ink-soft)",
      lineHeight: 1.5
    }
  }, r[1])))), /*#__PURE__*/React.createElement(SecLabel, {
    right: "One row per batch"
  }, "Run log"), /*#__PURE__*/React.createElement(Card, {
    pad: 0,
    style: {
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "scroll-x"
  }, /*#__PURE__*/React.createElement("table", {
    className: "tbl"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, k.runCols.map(c => /*#__PURE__*/React.createElement("th", {
    key: c,
    style: {
      whiteSpace: "nowrap"
    }
  }, c)))), /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    colSpan: k.runCols.length,
    style: {
      textAlign: "center",
      padding: "30px 14px",
      color: "var(--ink-mute)",
      fontSize: 12.5
    }
  }, "No runs logged. The first entry is the first real cost per unit this business has had.")))))), /*#__PURE__*/React.createElement(Note, {
    tone: "info",
    icon: "i"
  }, "Yield, ingredient cost, active cost, labor cost, overhead, total and cost a good unit all calculate. Ingredient cost pulls from the purchase log by run ID, and it skips any line categorized as an active ingredient so the actives aren't counted twice."), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 26
    }
  }), rollup && /*#__PURE__*/React.createElement(Sheet, {
    block: rollup
  }));
}
function ProdPurchases() {
  const k = COST.kitchen;
  return /*#__PURE__*/React.createElement("div", {
    className: "page-in"
  }, /*#__PURE__*/React.createElement(PageHead, {
    title: "Purchases",
    sub: "Every ingredient and packaging purchase the kitchen makes.",
    meta: "Log it the day you buy it. Split one purchase across lines if it covers more than one run."
  }), /*#__PURE__*/React.createElement(G, {
    c: 4,
    style: {
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(KPI, {
    label: "Purchases logged",
    value: "0",
    tone: "mute"
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Allocated to a run",
    value: "$0",
    tone: "mute",
    sub: "tied to a batch that happened"
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Unallocated",
    value: "$0",
    tone: "mute",
    sub: "chase anything above zero",
    help: "Money spent that nothing came out of yet."
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Missing a receipt",
    value: "0",
    tone: "mute",
    sub: "should always be zero"
  })), /*#__PURE__*/React.createElement(SecLabel, {
    right: "One row per purchase"
  }, "Purchase log"), /*#__PURE__*/React.createElement(Card, {
    pad: 0,
    style: {
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "scroll-x"
  }, /*#__PURE__*/React.createElement("table", {
    className: "tbl"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, k.purchaseCols.map(c => /*#__PURE__*/React.createElement("th", {
    key: c,
    style: {
      whiteSpace: "nowrap"
    }
  }, c)))), /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    colSpan: k.purchaseCols.length,
    style: {
      textAlign: "center",
      padding: "30px 14px",
      color: "var(--ink-mute)",
      fontSize: 12.5
    }
  }, "Nothing logged. A purchase with no run ID shows up as unallocated on Reconciliation.")))))), /*#__PURE__*/React.createElement(SecLabel, null, "Categories"), /*#__PURE__*/React.createElement(Card, {
    style: {
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      flexWrap: "wrap"
    }
  }, k.categories.map(c => /*#__PURE__*/React.createElement(Badge, {
    key: c,
    tone: c === "Active ingredient" ? "violet" : "mute"
  }, c)))), /*#__PURE__*/React.createElement(Note, {
    tone: "info",
    icon: "i"
  }, "Active ingredient is its own category on purpose. The run log costs actives from the pounds entered on the run line, so an active purchase logged here is left out of ingredient cost rather than counted twice."));
}
function ProdRecon() {
  return /*#__PURE__*/React.createElement("div", {
    className: "page-in"
  }, /*#__PURE__*/React.createElement(PageHead, {
    title: "Reconciliation",
    sub: "What the kitchen spent against what came out of it.",
    meta: "The tab that answers an invoice arriving two months late."
  }), /*#__PURE__*/React.createElement(Card, {
    pad: 0,
    style: {
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "scroll-x"
  }, /*#__PURE__*/React.createElement("table", {
    className: "tbl"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Measure"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Value"), /*#__PURE__*/React.createElement("th", null, "What it covers"))), /*#__PURE__*/React.createElement("tbody", null, COST.kitchen.recon.map(r => /*#__PURE__*/React.createElement("tr", {
    key: r[0]
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      fontWeight: 600
    }
  }, r[0]), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      textAlign: "right"
    }
  }, r[1]), /*#__PURE__*/React.createElement("td", {
    style: {
      color: "var(--ink-mute)",
      fontSize: 11.5
    }
  }, r[2]))))))), kitchenEmpty(), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 22
    }
  }), /*#__PURE__*/React.createElement(SecLabel, null, "What this answers"), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      display: "grid",
      gap: 10
    }
  }, ["An invoice arrived. Which runs did it pay for, and did those runs happen?", "How many units came out of the last thousand dollars of ingredients?", "What share of what the kitchen makes never reaches a customer?", "Is the cost a bar going up or down, and since when?", "How much did the kitchen spend that nothing came out of?"].map(q => /*#__PURE__*/React.createElement("li", {
    key: q,
    style: {
      display: "flex",
      gap: 9,
      fontSize: 12.5,
      color: "var(--ink-soft)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--accent)",
      fontWeight: 700
    }
  }, "\xB7"), q)))));
}

// ---------------------------------------------------------------- Suppliers, rebuilt
function Suppliers2() {
  return /*#__PURE__*/React.createElement("div", {
    className: "page-in"
  }, /*#__PURE__*/React.createElement(PageHead, {
    title: "Suppliers",
    sub: "Who you depend on, on what terms, and how exposed that makes you.",
    meta: "Rebuilt from the deduplicated materials list. The old workbook carried two copies that disagreed."
  }), /*#__PURE__*/React.createElement(G, {
    c: 4,
    style: {
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement(KPI, {
    label: "Longest lead",
    value: "6 to 8 weeks",
    tone: "bad",
    sub: "boxes, wrappers and tins",
    help: "The longest lead in the business, so it sets the chocolate reorder point."
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Gummy production",
    value: "3 weeks",
    tone: "warn",
    sub: "confirmed by DB, 1 Oct",
    help: "The supplier workbook said two weeks and was out of date."
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Suppliers to identify",
    value: "7",
    tone: "warn",
    sub: "all overseas packaging",
    help: "Every box, wrapper and tin line reads to identify. One supplier failing has no second source."
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Manufacturer balance",
    value: "$0",
    tone: "good",
    sub: "every invoice matched to a wire"
  })), /*#__PURE__*/React.createElement(Note, {
    tone: "warn",
    icon: "!"
  }, "Most kitchen inputs are bought at consumer retail, from Restaurant Depot, Costco, Amazon and Whole Foods. That works at about 400 bars a month and it doesn't at target volume. Cocoa butter alone runs two to three times wholesale."), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 22
    }
  }), /*#__PURE__*/React.createElement(SheetBlocks, {
    name: "Materials"
  }));
}
function SupLedger() {
  return /*#__PURE__*/React.createElement("div", {
    className: "page-in"
  }, /*#__PURE__*/React.createElement(PageHead, {
    title: "Manufacturer ledger",
    sub: "Every invoice matched to the wire that paid it.",
    meta: "Balances to zero today. The original sheet still flagged two invoices as unpaid."
  }), /*#__PURE__*/React.createElement(G, {
    c: 4,
    style: {
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement(KPI, {
    label: "Invoiced in total",
    value: "$26,610",
    tone: "ink"
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Paid in total",
    value: "$26,610",
    tone: "good"
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Balance owing",
    value: "$0",
    tone: "good",
    sub: "nothing outstanding"
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Open claim",
    value: "$159",
    tone: "warn",
    sub: "4,000 remedial wrappers",
    help: "Against it you owe $150 of freight, so the two roughly cancel."
  })), /*#__PURE__*/React.createElement(SheetBlocks, {
    name: "Ledger"
  }));
}

// ---------------------------------------------------------------- 3PL rate card
function TPLRates() {
  return /*#__PURE__*/React.createElement("div", {
    className: "page-in"
  }, /*#__PURE__*/React.createElement(PageHead, {
    title: "3PL rates",
    sub: "Pick, pack, ship and storage, as quoted.",
    meta: "The base is waived once the services billed in a month exceed it."
  }), /*#__PURE__*/React.createElement(G, {
    c: 4,
    style: {
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement(KPI, {
    label: "Billed, July",
    value: "$3,483.61",
    tone: "ink",
    sub: "across 348 orders"
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Cost an order, all in",
    value: "$10.01",
    tone: "warn",
    sub: "base, pick, pack, storage, materials"
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "An order needing ice",
    value: "$12.30 to $20",
    tone: "bad",
    sub: "depends on box or mailer",
    help: "Medium packing is $10. Whether it takes a mailer at $1.30 or a box at $2 with a $7 liner isn't settled in the rate card."
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Card surcharge",
    value: "Removed",
    tone: "good",
    sub: "3.1%, off at end of August"
  })), /*#__PURE__*/React.createElement(Note, {
    tone: "warn",
    icon: "!"
  }, "The size legend puts every order needing ice into medium, which it defines as bigger than mailer 1 but smaller than box 1. That leaves the packing material ambiguous, so an iced order is somewhere between $12.30 and $20 before postage. The rate card says the combinations are still to be verified. On chocolate in summer that matters more than any of the open unit-cost questions."), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 22
    }
  }), /*#__PURE__*/React.createElement(SheetBlocks, {
    name: "3PL"
  }));
}

/* ==== app.jsx ==== */
// app.jsx, shell: sidebar, top bar, live ticker, sub-tabs, routing

const NAV = [{
  g: "Home",
  icon: "home",
  items: [{
    id: "boardroom",
    l: "Boardroom"
  }]
}, {
  g: "Exec",
  icon: "exec",
  items: [{
    id: "goals",
    l: "Goals & Targets"
  }, {
    id: "scorecards",
    l: "Role Scorecards"
  }, {
    id: "scorelog",
    l: "Score Log"
  }, {
    id: "org",
    l: "Org Chart"
  }, {
    id: "board",
    l: "Project Board",
    p2: true
  }]
}, {
  g: "Money",
  icon: "money",
  items: [{
    id: "cash",
    l: "Cash & Buckets"
  }, {
    id: "pl",
    l: "Profit & Loss"
  }, {
    id: "debt",
    l: "Debt & Obligations"
  }, {
    id: "rails",
    l: "Payment Rails"
  }]
}, {
  g: "Revenue",
  icon: "rev",
  items: [{
    id: "revenue",
    l: "Overview"
  }, {
    id: "retention",
    l: "Retention"
  }, {
    id: "subs",
    l: "Subscriptions"
  }, {
    id: "wholesale",
    l: "Wholesale"
  }]
}, {
  g: "Marketing",
  icon: "mkt",
  items: [{
    id: "today",
    l: "Today So Far"
  }, {
    id: "daily",
    l: "Daily Tracker"
  }, {
    id: "cohort",
    l: "Cohort LTV"
  }, {
    id: "mktperf",
    l: "Performance"
  }, {
    id: "ltv",
    l: "CAC Ceiling"
  }, {
    id: "attribution",
    l: "Attribution"
  }, {
    id: "social",
    l: "Social"
  }]
}, {
  g: "Operations",
  icon: "ops",
  items: [{
    id: "opshealth",
    l: "Customer Experience"
  }, {
    id: "inventory",
    l: "Inventory"
  }, {
    id: "fulfillment",
    l: "Fulfillment"
  }, {
    id: "costs",
    l: "Costs & Settings"
  }, {
    id: "production",
    l: "Production"
  }, {
    id: "costtrend",
    l: "Cost Trend"
  }, {
    id: "suppliers",
    l: "Suppliers"
  }]
}, {
  g: "Agents",
  icon: "agents",
  items: [{
    id: "agents",
    l: "All Agents"
  }]
}, {
  g: "Team OS",
  icon: "team",
  items: [{
    id: "vault",
    l: "Vault & Drive"
  }]
}, {
  g: "Admin",
  icon: "admin",
  items: [{
    id: "data",
    l: "Data Health"
  }]
}];
const SUBTABS = {
  boardroom: ["Boardroom", "Financials", "Insights", "System Health"],
  cash: ["Cash", "Forecast", "Transactions"],
  revenue: ["Overview", "By Channel"],
  inventory: ["Inventory", "Reorders", "Alerts", "Movements"],
  costs: ["Unit cost", "Rates", "Formulation", "Volume ladder", "Change log"],
  production: ["Runs", "Purchases", "Reconciliation"],
  suppliers: ["Suppliers", "Ledger"],
  fulfillment: ["Fulfillment", "3PL rates"]
};
const PERIOD_PAGES = new Set(["boardroom", "pl", "rails", "revenue", "retention", "wholesale", "daily", "mktperf", "opshealth"]);
const PAGE_GROUP = {};
NAV.forEach(g => g.items.forEach(i => {
  PAGE_GROUP[i.id] = g.g;
}));
function App() {
  useScore();
  const [theme, setTheme] = useState("dark");
  const [page, setPage] = useState(() => {
    const h = (location.hash || "").replace("#", "");
    return PAGE_GROUP[h] ? h : "boardroom";
  });
  const [period, setPeriod] = useState("30 days");
  const [range, setRange] = useState(["2026-09-01", "2026-09-17"]);
  const customDays = rangeDays(range[0], range[1]);
  const pKey = period + (period === "Custom" ? ":" + customDays : "");
  const applied = useRef(null);
  if (applied.current !== pKey) {
    applyPeriod(period, customDays);
    applied.current = pKey;
  }
  const [openGroups, setOpenGroups] = useState(() => {
    const o = {};
    NAV.forEach(g => o[g.g] = true);
    return o;
  });
  const [sideOpen, setSideOpen] = useState(false);
  const [sub, setSub] = useState(0);
  const [search, setSearch] = useState("");
  const [searchOn, setSearchOn] = useState(false);
  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);
  useEffect(() => {
    const before = () => document.body.setAttribute("data-theme", "light");
    const after = () => document.body.setAttribute("data-theme", theme);
    addEventListener("beforeprint", before);
    addEventListener("afterprint", after);
    return () => {
      removeEventListener("beforeprint", before);
      removeEventListener("afterprint", after);
    };
  }, [theme]);
  useEffect(() => {
    location.hash = page;
    setSub(0);
    setSideOpen(false);
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, [page]);
  useEffect(() => {
    const onHash = () => {
      const h = (location.hash || "").replace("#", "");
      if (PAGE_GROUP[h] && h !== page) setPage(h);
    };
    addEventListener("hashchange", onHash);
    return () => removeEventListener("hashchange", onHash);
  }, [page]);
  useEffect(() => {
    const k = e => {
      if (e.target.tagName === "INPUT") {
        if (e.key === "Escape") setSearchOn(false);
        return;
      }
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setSearchOn(true);
      }
      if (e.key === "t" || e.key === "T") setTheme(s => s === "dark" ? "light" : "dark");
      if (e.key === "Escape") setSearchOn(false);
    };
    addEventListener("keydown", k);
    return () => removeEventListener("keydown", k);
  }, []);
  const all = NAV.flatMap(g => g.items.map(i => ({
    ...i,
    g: g.g
  })));
  const hits = search ? all.filter(i => (i.l + " " + i.g).toLowerCase().includes(search.toLowerCase())) : all;
  const P = {
    boardroom: /*#__PURE__*/React.createElement(Boardroom, {
      go: setPage,
      period: period
    }),
    goals: /*#__PURE__*/React.createElement(Goals, {
      period: period
    }),
    scorecards: /*#__PURE__*/React.createElement(TeamScorecards, {
      go: setPage
    }),
    scorelog: /*#__PURE__*/React.createElement(ScoreLog, null),
    org: /*#__PURE__*/React.createElement(TeamOrg, {
      go: setPage
    }),
    cash: /*#__PURE__*/React.createElement(Cash, null),
    pl: /*#__PURE__*/React.createElement(PL, null),
    debt: /*#__PURE__*/React.createElement(Debt, null),
    rails: /*#__PURE__*/React.createElement(Rails, null),
    revenue: /*#__PURE__*/React.createElement(Revenue, null),
    retention: /*#__PURE__*/React.createElement(Retention, null),
    subs: /*#__PURE__*/React.createElement(Subs, null),
    wholesale: /*#__PURE__*/React.createElement(Wholesale, null),
    today: /*#__PURE__*/React.createElement(Today, null),
    daily: /*#__PURE__*/React.createElement(Daily, null),
    cohort: /*#__PURE__*/React.createElement(Cohort, null),
    mktperf: /*#__PURE__*/React.createElement(MktPerf, null),
    ltv: /*#__PURE__*/React.createElement(LTV, null),
    attribution: /*#__PURE__*/React.createElement(Attribution, null),
    social: /*#__PURE__*/React.createElement(Social, null),
    opshealth: /*#__PURE__*/React.createElement(OpsHealth, null),
    inventory: /*#__PURE__*/React.createElement(Inventory, null),
    fulfillment: /*#__PURE__*/React.createElement(Fulfillment, null),
    costtrend: /*#__PURE__*/React.createElement(CostTrend, null),
    suppliers: /*#__PURE__*/React.createElement(Suppliers2, null),
    costs: /*#__PURE__*/React.createElement(Costs, null),
    production: /*#__PURE__*/React.createElement(Production, null),
    board: /*#__PURE__*/React.createElement(Phase2, {
      title: "Project board",
      why: "Tasks, owners and status.",
      when: "Not useful until everyone has access, ideally role specific. That access model comes first."
    }),
    agents: /*#__PURE__*/React.createElement(Agents, null),
    vault: /*#__PURE__*/React.createElement(Vault, null),
    data: /*#__PURE__*/React.createElement(DataHealth, null)
  }[page];
  const subs = SUBTABS[page];
  // A hash change swaps the page before the effect resets sub, so a page with fewer
  // sub-tabs than the last one would look up a view that isn't there. Clamp it here.
  const SubView = sub > 0 && SUBVIEWS[page] ? SUBVIEWS[page][sub] : null;
  // the period selector shows only where it changes the numbers on the page
  const usesPeriod = PERIOD_PAGES.has(page);
  return /*#__PURE__*/React.createElement("div", {
    className: "shell",
    "data-open": sideOpen
  }, sideOpen && /*#__PURE__*/React.createElement("div", {
    className: "side-scrim",
    onClick: () => setSideOpen(false)
  }), /*#__PURE__*/React.createElement("aside", {
    className: "side"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px 16px 14px",
      borderBottom: "1px solid var(--rule)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/mynd-logo.svg",
    alt: "MYND",
    style: {
      height: 17,
      filter: "var(--logo-filter)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: "var(--ink-mute)",
      marginTop: 5
    },
    className: "caps"
  }, "Command center")), /*#__PURE__*/React.createElement("nav", {
    style: {
      flex: 1,
      padding: "10px 0",
      overflowY: "auto"
    }
  }, NAV.map(g => {
    const open = openGroups[g.g];
    const active = g.items.some(i => i.id === page);
    return /*#__PURE__*/React.createElement("div", {
      key: g.g,
      style: {
        marginBottom: 2
      }
    }, /*#__PURE__*/React.createElement("button", {
      className: "nav-group-label",
      "data-open": open || active,
      onClick: () => setOpenGroups(s => ({
        ...s,
        [g.g]: !s[g.g]
      }))
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8
      }
    }, active && /*#__PURE__*/React.createElement("span", {
      style: {
        width: 2,
        height: 11,
        background: "var(--accent)",
        borderRadius: 2,
        marginLeft: -8,
        marginRight: 2
      }
    }), /*#__PURE__*/React.createElement(Ico, {
      n: g.icon,
      s: 12
    }), g.g), /*#__PURE__*/React.createElement("span", {
      style: {
        transform: open ? "rotate(90deg)" : "none",
        transition: "transform 180ms ease",
        display: "flex"
      }
    }, /*#__PURE__*/React.createElement(Ico, {
      n: "chev",
      s: 11
    }))), open && g.items.map(i => /*#__PURE__*/React.createElement("button", {
      key: i.id,
      className: "nav-item",
      "data-on": page === i.id,
      onClick: () => setPage(i.id),
      style: i.p2 ? {
        opacity: 0.55
      } : undefined
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }, i.l), i.p2 && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 8.5,
        fontWeight: 700,
        letterSpacing: "0.06em",
        background: "var(--surface-3)",
        color: "var(--ink-mute)",
        padding: "1px 5px",
        borderRadius: 4
      }
    }, "P2"))));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "13px 16px",
      borderTop: "1px solid var(--rule)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      marginBottom: 11
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: D.meta.user,
    size: 30
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      fontWeight: 600,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }
  }, D.meta.user), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10.5,
      color: "var(--ink-mute)"
    }
  }, D.meta.role))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 7
    }
  }, ["Account", "Sign out"].map(b => /*#__PURE__*/React.createElement("button", {
    key: b,
    style: {
      flex: 1,
      border: "1px solid var(--rule)",
      background: "var(--surface-3)",
      borderRadius: "var(--r-sm)",
      padding: "6px 8px",
      fontSize: 11,
      cursor: "pointer",
      color: "var(--ink-soft)"
    }
  }, b))))), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("header", {
    className: "topbar"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setSideOpen(s => !s),
    "aria-label": "Menu",
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      color: "var(--ink-soft)",
      padding: 4,
      display: "flex"
    }
  }, /*#__PURE__*/React.createElement(Ico, {
    n: "menu",
    s: 18
  })), /*#__PURE__*/React.createElement("img", {
    src: "assets/mynd-logo.svg",
    alt: "MYND",
    className: "hide-sm",
    style: {
      height: 15,
      filter: "var(--logo-filter)"
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => setSearchOn(true),
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      background: "var(--surface-3)",
      border: "1px solid var(--rule)",
      borderRadius: "var(--r-pill)",
      padding: "5px 12px",
      fontSize: 12,
      color: "var(--ink-mute)",
      cursor: "pointer",
      minWidth: 150
    }
  }, /*#__PURE__*/React.createElement(Ico, {
    n: "search",
    s: 13
  }), " Search", /*#__PURE__*/React.createElement("span", {
    className: "mono hide-sm",
    style: {
      marginLeft: "auto",
      fontSize: 10,
      opacity: 0.7
    }
  }, "\u2318K")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "hide-sm",
    style: {
      fontSize: 11.5,
      color: "var(--ink-mute)"
    }
  }, D.meta.updated, " \xB7 ", D.meta.tz), /*#__PURE__*/React.createElement("button", {
    onClick: () => setTheme(t => t === "dark" ? "light" : "dark"),
    "aria-label": "Theme",
    style: {
      background: "var(--surface-3)",
      border: "1px solid var(--rule)",
      borderRadius: 99,
      width: 30,
      height: 30,
      cursor: "pointer",
      display: "grid",
      placeItems: "center",
      color: "var(--ink-soft)"
    }
  }, theme === "dark" ? /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M21 12.8A9 9 0 1111.2 3a7 7 0 009.8 9.8z"
  })) : /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "4.2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"
  }))), /*#__PURE__*/React.createElement("button", {
    "aria-label": "Alerts",
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      color: "var(--ink-soft)",
      position: "relative",
      display: "flex",
      padding: 4
    }
  }, /*#__PURE__*/React.createElement(Ico, {
    n: "bell",
    s: 17
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 2,
      right: 2,
      width: 7,
      height: 7,
      borderRadius: 99,
      background: "var(--bad)",
      border: "1.5px solid var(--surface)"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "ticker"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ticker-track"
  }, [0, 1].map(dup => /*#__PURE__*/React.createElement("div", {
    key: dup,
    style: {
      display: "flex"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ticker-item caps",
    style: {
      color: "var(--good)",
      fontWeight: 600
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot",
    style: {
      background: "var(--good)"
    }
  }), "Live"), [...D.ticker.slice(0, 3), ownerTicker(), ...D.ticker.slice(3)].map((t, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: "ticker-item"
  }, /*#__PURE__*/React.createElement(Ico, {
    n: t.i,
    s: 12
  }), t.l, /*#__PURE__*/React.createElement("b", {
    className: "mono",
    style: {
      color: T(t.tone || "ink"),
      fontWeight: 650
    }
  }, t.v))))))), subs && /*#__PURE__*/React.createElement("div", {
    className: "subtabs"
  }, subs.map((s, i) => /*#__PURE__*/React.createElement("button", {
    key: s,
    className: "subtab",
    "data-on": sub === i,
    onClick: () => setSub(i)
  }, s))), /*#__PURE__*/React.createElement("main", {
    className: "pad main",
    style: {
      padding: "26px 26px 70px",
      maxWidth: 1680,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 14,
      marginBottom: 18,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      fontSize: 11.5,
      color: "var(--ink-mute)"
    }
  }, PAGE_GROUP[page], " ", /*#__PURE__*/React.createElement(Ico, {
    n: "chev",
    s: 10
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ink-soft)"
    }
  }, all.find(i => i.id === page)?.l)), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      flexWrap: "wrap"
    }
  }, usesPeriod && period === "Custom" && /*#__PURE__*/React.createElement(CustomRange, {
    from: range[0],
    to: range[1],
    onChange: (a, b) => setRange([a, b])
  }), usesPeriod && /*#__PURE__*/React.createElement(Seg, {
    options: ["1 day", "7 days", "30 days", "90 days", "MTD", "Custom"],
    value: period,
    onChange: setPeriod
  }))), usesPeriod && /*#__PURE__*/React.createElement(PeriodNote, null), /*#__PURE__*/React.createElement("div", {
    key: pKey + ":" + sub
  }, SubView ? React.createElement(SubView, {
    go: setPage
  }) : P)), /*#__PURE__*/React.createElement("footer", {
    style: {
      borderTop: "1px solid var(--rule)",
      padding: "18px 26px 34px",
      display: "flex",
      justifyContent: "space-between",
      gap: 14,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: "var(--ink-mute)"
    }
  }, "MYND Command \xB7 Mock for review \xB7 Built by OpFix"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: "var(--ink-mute)"
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      color: "var(--ink-soft)"
    }
  }, "\u2318K"), " search \xB7 ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: "var(--ink-soft)"
    }
  }, "T"), " theme"))), searchOn && /*#__PURE__*/React.createElement("div", {
    onClick: () => setSearchOn(false),
    style: {
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,0.6)",
      zIndex: 100,
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "center",
      paddingTop: "12vh"
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: "min(560px, 92vw)",
      background: "var(--surface)",
      border: "1px solid var(--rule)",
      borderRadius: "var(--r-lg)",
      boxShadow: "var(--shadow)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "14px 16px",
      borderBottom: "1px solid var(--rule)"
    }
  }, /*#__PURE__*/React.createElement(Ico, {
    n: "search",
    s: 16
  }), /*#__PURE__*/React.createElement("input", {
    autoFocus: true,
    value: search,
    onChange: e => setSearch(e.target.value),
    placeholder: "Jump to a page...",
    style: {
      flex: 1,
      background: "none",
      border: "none",
      outline: "none",
      color: "var(--ink)",
      fontSize: 14
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      fontSize: 10,
      color: "var(--ink-mute)"
    }
  }, "ESC")), /*#__PURE__*/React.createElement("div", {
    style: {
      maxHeight: "46vh",
      overflowY: "auto",
      padding: 6
    }
  }, hits.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 22,
      textAlign: "center",
      fontSize: 12.5,
      color: "var(--ink-mute)"
    }
  }, "Nothing matches."), hits.map(h => /*#__PURE__*/React.createElement("button", {
    key: h.id,
    onClick: () => {
      setPage(h.id);
      setSearchOn(false);
      setSearch("");
    },
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%",
      padding: "10px 12px",
      background: "none",
      border: "none",
      borderRadius: "var(--r-sm)",
      cursor: "pointer",
      fontSize: 13,
      textAlign: "left"
    },
    onMouseEnter: e => e.currentTarget.style.background = "var(--surface-3)",
    onMouseLeave: e => e.currentTarget.style.background = "none"
  }, /*#__PURE__*/React.createElement("span", null, h.l), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10.5,
      color: "var(--ink-mute)"
    }
  }, h.g)))))));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));

})();