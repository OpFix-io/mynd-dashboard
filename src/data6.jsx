// data6.jsx, the cost layer. Extracted from MYND_Packaging_and_Manufacturing.xlsx on 2 October 2026,
// which this page retires. Figures are the workbook's own, read from the file rather than retyped.
// Tables carry their workbook label, header and rows so the fold-in is faithful and auditable.

const COST = {
 "asOf": "1 October 2026",
 "source": "Source: supplier workbook MYND_PKG_MFG, read 1 October 2026, and the MYND kitchen ledger built 22 August 2026, folded in 1 October. Product lineup, packaging counts and the kitchen rent correction from DB, 30 September and 1 October 2026. Nothing on any tab is a formula-free typed figure except Inputs, the two logs and Ledger.",
 "kpi": [
  {
   "k": "gtin",
   "label": "Gummy tin, landed",
   "value": "$8.16",
   "sub": "at the minimum run",
   "tone": "ink",
   "help": "Everything it costs to put a sellable tin on the shelf. Falls to $7.81 at five times the run."
  },
  {
   "k": "ginv",
   "label": "Gummy tin, invoiced",
   "value": "$6.14",
   "sub": "what the manufacturer bills",
   "tone": "info",
   "help": "Landed cost less the tin, wrapper and lab test, which you buy separately. A batch wire divides down to this."
  },
  {
   "k": "gmar",
   "label": "Gummy margin at $69",
   "value": "88.2%",
   "sub": "on the hybrid build",
   "tone": "good",
   "help": "Retail price less landed cost, over retail price."
  },
  {
   "k": "cbox",
   "label": "Chocolate box, landed",
   "value": "$11.65",
   "sub": "extract-only recipe",
   "tone": "warn",
   "help": "Eight pieces, confirmed by DB. The supplier quote priced six, so the actives and wrapper lines are repriced here. Up $1.40 from the 6-piece figure."
  },
  {
   "k": "chyb",
   "label": "Chocolate box, hybrid",
   "value": "$10.54",
   "sub": "fruit carries half the dose",
   "tone": "warn",
   "help": "Both recipes are costed. Fruit carries half the dose at a fraction of extract's price a gram, which is $1.11 a box cheaper."
  },
  {
   "k": "cmar",
   "label": "Chocolate margin at $69",
   "value": "83.1%",
   "sub": "extract-only, 84.7% hybrid",
   "tone": "warn",
   "help": "Down about 2 points from the 6-piece costing. Four of six live products sit on this line."
  },
  {
   "k": "cap",
   "label": "Capsule bottle, landed",
   "value": "$10.37",
   "sub": "never produced",
   "tone": "mute",
   "help": "The supplier Total read $8.37, which left out $1.50 of bottle and $0.50 of packing labor."
  },
  {
   "k": "kov",
   "label": "Kitchen overhead a run",
   "value": "$1,400",
   "sub": "rent and one delivery",
   "tone": "violet",
   "help": "Rent over runs a month plus one delivery. About $0.93 a box at a 1,500-box run."
  }
 ],
 "sheets": {
  "Inputs": {
   "title": "Inputs",
   "sub": "The only tab you type in. Yellow cells feed every calculation in this workbook. Each one carries its source.",
   "blocks": [
    {
     "kind": "table",
     "label": "Product build",
     "head": [
      "Spec",
      "Gummy tin",
      "Chocolate box",
      "Capsule bottle",
      "Source and note"
     ],
     "rows": [
      {
       "c": [
        "Pieces a unit",
        8,
        8,
        30,
        "Confirmed by DB. Chocolate is 8, which the supplier quote priced as 6, so the actives and wrapper lines are repriced here"
       ]
      },
      {
       "c": [
        "Weight a piece, grams",
        4.5,
        5,
        0.7,
        "Supplier quote. Capsule is 700 mg of fill"
       ]
      },
      {
       "c": [
        "Target actives a piece, grams",
        0.00275,
        0.005,
        0,
        "Supplier quote. Capsules dose by ingredient, not by extract"
       ]
      },
      {
       "c": [
        "Retail price a unit",
        69,
        69,
        "not set",
        "MYND price list. Capsules not priced yet"
       ]
      }
     ],
     "notes": [],
     "fmt": [
      "txt",
      "num",
      "num",
      "num",
      "txt"
     ]
    },
    {
     "kind": "table",
     "label": "Actives, potency",
     "head": [
      "Input",
      "Gummies",
      "Chocolate",
      null,
      "Source and note"
     ],
     "rows": [
      {
       "c": [
        "Extract potency",
        0.044,
        0.043,
        null,
        "Supplier assay. 44 and 43 mg a gram"
       ]
      },
      {
       "c": [
        "Temperature haircut",
        0.2,
        0,
        null,
        "Gummies lose 20% of actives to cook temperature. Chocolate isn't cooked that hot"
       ]
      },
      {
       "c": [
        "Fruit potency",
        0.009,
        0.009,
        null,
        "Supplier assay, 9 mg a gram"
       ]
      }
     ],
     "notes": [],
     "fmt": [
      "txt",
      "pct",
      "pct",
      "txt",
      "txt"
     ]
    },
    {
     "kind": "table",
     "label": "Actives, price",
     "head": [
      "Input",
      "Low volume",
      "Mid volume",
      "High volume",
      "Source and note"
     ],
     "rows": [
      {
       "c": [
        "Extract $/g, gummies",
        6,
        5.75,
        5.5,
        "Under 5 kg, over 5 kg, over 10 kg"
       ]
      },
      {
       "c": [
        "Extract $/g, chocolate",
        5.75,
        5.5,
        5.25,
        "Same bands, different supplier price"
       ]
      },
      {
       "c": [
        "Fruit $/lb, gummies",
        350,
        325,
        300,
        "Over 10 lb, over 100 lb, over 200 lb. Grind is extra"
       ]
      },
      {
       "c": [
        "Fruit $/lb, chocolate",
        300,
        275,
        275,
        "Over 10 lb, over 100 lb. No third band quoted"
       ]
      },
      {
       "c": [
        "Grind $/lb",
        20,
        20,
        20,
        "Added to every fruit band"
       ]
      },
      {
       "c": [
        "Grams in a pound",
        453.592,
        null,
        null,
        "Fixed conversion"
       ]
      }
     ],
     "notes": [],
     "fmt": [
      "txt",
      "usd",
      "usd",
      "usd",
      "txt"
     ]
    },
    {
     "kind": "table",
     "label": "Gummy cost, per tin",
     "head": [
      "Input",
      "8,000 a SKU",
      "16,000",
      "40,000",
      "Source and note"
     ],
     "rows": [
      {
       "c": [
        "Packaging, wrap and tin",
        1.9,
        1.85,
        1.75,
        "Supplier quote by volume band"
       ]
      },
      {
       "c": [
        "Other ingredients",
        0.24,
        0.24,
        0.24,
        "Gelatin, sugar, flavor, color"
       ]
      },
      {
       "c": [
        "Manufacturing labor",
        1.75,
        1.75,
        1.65,
        "Supplier quote"
       ]
      },
      {
       "c": [
        "Packing labor",
        0.71,
        0.71,
        0.71,
        "Supplier quote"
       ]
      },
      {
       "c": [
        "Lab testing a tin",
        0.12,
        0.06,
        0.02,
        "Two COAs a batch at $122, spread over the run"
       ]
      },
      {
       "c": [
        "Communications and admin",
        0.17,
        0.17,
        0.17,
        "Supplier line item"
       ]
      },
      {
       "c": [
        "Waste a flavor, pieces",
        113,
        null,
        null,
        "Supplier note says 100 to 200 gummies a flavor run. 113 is what the original sheet's 16,225-piece figure implies"
       ]
      }
     ],
     "notes": [],
     "fmt": [
      "txt",
      "usd",
      "usd",
      "usd",
      "txt"
     ]
    },
    {
     "kind": "table",
     "label": "Chocolate cost, per box",
     "head": [
      "Input",
      "1,500 boxes",
      "4,500",
      "9,000",
      "Source and note"
     ],
     "rows": [
      {
       "c": [
        "Chocolate, grams a box",
        27,
        27,
        27,
        "Scratch figure on the supplier sheet. Conflicts with the 22 kg batch line"
       ]
      },
      {
       "c": [
        "Chocolate $/kg",
        21.9,
        21.9,
        21.9,
        "Derived from the quoted $0.59 a box at 27 grams. Confirm against Restaurant Depot pricing"
       ]
      },
      {
       "c": [
        "Cocoa butter, grams a box",
        2.9,
        2.9,
        2.9,
        "Scratch figure. Conflicts with the 40 kg batch line"
       ]
      },
      {
       "c": [
        "Cocoa butter $/kg",
        41.4,
        41.4,
        41.4,
        "Derived from the quoted $0.12 a box at 2.9 grams"
       ]
      },
      {
       "c": [
        "Wrapper a piece",
        0.03,
        0.03,
        0.025,
        "Packaging quote"
       ]
      },
      {
       "c": [
        "Box",
        0.78,
        0.78,
        0.73,
        "Packaging quote"
       ]
      },
      {
       "c": [
        "Manufacturing labor",
        4.12,
        3.92,
        3.9,
        "Supplier quote"
       ]
      },
      {
       "c": [
        "Packing labor",
        0.2,
        0.2,
        0.17,
        "Supplier quote"
       ]
      },
      {
       "c": [
        "Supplier fee",
        0.25,
        0.2,
        0.15,
        "Supplier quote"
       ]
      }
     ],
     "notes": [],
     "fmt": [
      "txt",
      "txt",
      "txt",
      "txt",
      "txt"
     ]
    },
    {
     "kind": "table",
     "label": "Capsule cost, per bottle of 30",
     "head": [
      "Input",
      "Config A",
      "Config B",
      null,
      "Source and note"
     ],
     "rows": [
      {
       "c": [
        "Fruit",
        2.44,
        2.44,
        null,
        "100 mg a capsule at $0.81 a gram"
       ]
      },
      {
       "c": [
        "Lion's Mane",
        0.46,
        0.55,
        null,
        "250 mg a capsule. Config B uses more"
       ]
      },
      {
       "c": [
        "Magnesium L-threonate",
        1.5,
        1.5,
        null,
        "200 mg a capsule"
       ]
      },
      {
       "c": [
        "L-theanine",
        0.03,
        0.03,
        null,
        "50 mg a capsule"
       ]
      },
      {
       "c": [
        "Encapsulation labor",
        3.94,
        3.15,
        null,
        "Supplier quote. Includes grind, encapsulate and the capsule shell"
       ]
      },
      {
       "c": [
        "Bottle, lid and label",
        1.5,
        1.5,
        null,
        "Left out of the supplier Total. Confirm whether the quote already includes it"
       ]
      },
      {
       "c": [
        "Packing labor",
        0.5,
        0.5,
        null,
        "Left out of the supplier Total"
       ]
      }
     ],
     "notes": [],
     "fmt": [
      "txt",
      "usd",
      "usd",
      "txt",
      "txt"
     ]
    },
    {
     "kind": "table",
     "label": "Packaging orders",
     "head": [
      "Item",
      "Minimum order",
      "Price a unit",
      "Plates, one off",
      "Shipping and tariffs"
     ],
     "rows": [
      {
       "c": [
        "Wrappers",
        25000,
        0.03,
        400,
        0
       ]
      },
      {
       "c": [
        "Mylar bags",
        2000,
        0.23,
        400,
        0
       ]
      },
      {
       "c": [
        "Boxes",
        2000,
        0.78,
        0,
        0
       ]
      }
     ],
     "notes": [
      "Shipping and tariffs read $1 on the original sheet, which is a placeholder rather than a cost. They're set to zero here so the totals don't pretend to be complete. Enter the real quote and the Materials tab updates.",
      "Plates are a one-time etching cost per design. They don't repeat on a reorder of the same artwork."
     ],
     "fmt": [
      "txt",
      "num",
      "usd",
      "usd0",
      "usd0"
     ]
    },
    {
     "kind": "table",
     "label": "Kitchen rates",
     "head": [
      "Rate",
      "Value",
      null,
      null,
      "Source and note"
     ],
     "rows": [
      {
       "c": [
        "Labor rate an hour",
        25,
        null,
        null,
        "What the kitchen costs per hour of production time"
       ]
      },
      {
       "c": [
        "Kitchen rent and utilities a month",
        2500,
        null,
        null,
        "Corrected from $2,200 by DB, 30 Sep 2026"
       ]
      },
      {
       "c": [
        "Delivery, kitchen to warehouse, a run",
        150,
        null,
        null,
        "Confirmed 18 Aug 2026"
       ]
      },
      {
       "c": [
        "Runs a month, planned",
        2,
        null,
        null,
        "Sets how much rent lands on a run. Replace with the real count once three runs are logged"
       ]
      },
      {
       "c": [
        "Active ingredient a pound",
        300,
        null,
        null,
        "Supplied 12 Aug 2026. This is the fruit price. An extract build runs far higher and needs its own rate"
       ]
      },
      {
       "c": [
        "Kitchen overhead a run",
        1400,
        null,
        null,
        "Rent divided by runs a month, plus one delivery. Calculated, not typed"
       ],
       "b": true
      }
     ],
     "notes": [
      "These five rates came from the kitchen ledger built 22 August. The ledger collected rent and delivery and never put them into cost per unit. Run log now does, through the line above."
     ],
     "fmt": [
      "txt",
      "usd",
      "txt",
      "txt",
      "txt"
     ]
    }
   ]
  },
  "Formulation": {
   "title": "Formulation",
   "sub": "How much extract and fruit go into a piece, worked back from the dose. Change the dose target or a potency on Inputs and these move.",
   "blocks": [
    {
     "kind": "table",
     "label": "Effective potency after processing",
     "head": [
      "Measure",
      "Gummies",
      "Chocolate",
      null,
      "How it's worked out"
     ],
     "rows": [
      {
       "c": [
        "Extract potency as supplied",
        0.044,
        0.043,
        null,
        "Supplier assay"
       ]
      },
      {
       "c": [
        "Lost to cook temperature",
        0.2,
        0,
        null,
        "Gummies are cooked, chocolate is tempered at a lower heat"
       ]
      },
      {
       "c": [
        "Extract potency that counts",
        0.0352,
        0.043,
        null,
        "Potency as supplied, less the loss"
       ],
       "b": true
      },
      {
       "c": [
        "Fruit potency that counts",
        0.0072,
        0.009,
        null,
        "Same treatment"
       ],
       "b": true
      }
     ],
     "notes": [],
     "fmt": [
      "txt",
      "pct",
      "pct",
      "txt",
      "txt"
     ]
    },
    {
     "kind": "table",
     "label": "The hybrid build, extract plus fruit",
     "head": [
      "Measure",
      "Gummies",
      "Chocolate",
      null,
      "How it's worked out"
     ],
     "rows": [
      {
       "c": [
        "Share of the dose carried by extract",
        0.615,
        0.5,
        null,
        "A formulation choice. The rest comes from fruit, so the two always add to 100%"
       ]
      },
      {
       "c": [
        "Dose target a piece, grams",
        0.00275,
        0.005,
        null,
        "From Inputs"
       ]
      },
      {
       "c": [
        "Dose from extract, grams",
        0.001691,
        0.0025,
        null,
        "Target times the extract share"
       ]
      },
      {
       "c": [
        "Dose from fruit, grams",
        0.001059,
        0.0025,
        null,
        "The remainder"
       ]
      },
      {
       "c": [
        "Extract a piece, grams",
        0.048047,
        0.05814,
        null,
        "Dose from extract, divided by the potency that counts"
       ],
       "b": true
      },
      {
       "c": [
        "Fruit a piece, grams",
        0.147049,
        0.277778,
        null,
        "Dose from fruit, divided by the fruit potency that counts"
       ],
       "b": true
      },
      {
       "c": [
        "Total actives a piece, grams",
        0.195095,
        0.335917,
        null,
        "The two added"
       ]
      },
      {
       "c": [
        "Check: dose delivered a piece",
        0.00275,
        0.005,
        null,
        "Should equal the dose target two rows up. If it doesn't, a potency is wrong"
       ]
      }
     ],
     "notes": [],
     "fmt": [
      "txt",
      "pct",
      "pct",
      "txt",
      "txt"
     ]
    },
    {
     "kind": "table",
     "label": "The extract-only build",
     "head": [
      "Measure",
      "Gummies",
      "Chocolate",
      null,
      "How it's worked out"
     ],
     "rows": [
      {
       "c": [
        "Extract a piece, grams",
        0.078125,
        0.116279,
        null,
        "Whole dose from extract, divided by the potency that counts"
       ],
       "b": true
      },
      {
       "c": [
        "Fruit a piece, grams",
        0,
        0,
        null,
        "None by definition"
       ]
      }
     ],
     "notes": [
      "The hybrid build is cheaper because fruit carries part of the dose at a fraction of extract's price a gram. The trade is volume: fruit is bulkier, and the supplier caps it at about 150 mg of fruit a gummy.",
      "Maximum suggested load is 150 mg of fruit a gummy. Anything above that needs a reformulation conversation, not a spreadsheet change."
     ],
     "fmt": [
      "txt",
      "txt",
      "txt",
      "txt",
      "txt"
     ]
    }
   ]
  },
  "Cost per unit": {
   "title": "Cost per unit",
   "sub": "What one tin, one box and one bottle cost to make. The extract and fruit prices step down by the weight you order, not by the piece count, so each column resolves its own band.",
   "blocks": [
    {
     "kind": "table",
     "label": "Gummy tin, what the run looks like",
     "head": [
      "Measure",
      "Minimum run",
      "Double",
      "Five times",
      "Extract only, minimum",
      "How it's worked out"
     ],
     "rows": [
      {
       "c": [
        "Minimum order a flavor, pieces",
        8000,
        16000,
        40000,
        8000,
        "Supplier minimum. No half batches"
       ]
      },
      {
       "c": [
        "Flavors in the run",
        2,
        2,
        2,
        2,
        "Strawberry Mango and Blue Raspberry"
       ]
      },
      {
       "c": [
        "Pieces to produce",
        16226,
        32226,
        80226,
        16226,
        "Order, times flavors, plus the waste allowance"
       ]
      },
      {
       "c": [
        "Extract needed, kg",
        0.779609,
        1.548359,
        3.854609,
        1.267656,
        "Sets which extract price band applies"
       ]
      },
      {
       "c": [
        "Fruit needed, lb",
        5.260258,
        10.447249,
        26.008223,
        0,
        "Sets which fruit price band applies"
       ]
      },
      {
       "c": [
        "Extract price a gram, band applied",
        6,
        6,
        6,
        6,
        "Under 5 kg, 5 to 10 kg, over 10 kg"
       ],
       "b": true
      },
      {
       "c": [
        "Fruit price a pound, band applied",
        370,
        370,
        370,
        370,
        "Includes grind. Under 100 lb, 100 to 200 lb, over 200 lb"
       ],
       "b": true
      }
     ],
     "notes": [],
     "fmt": [
      "txt",
      "num",
      "num",
      "num",
      "num",
      "txt"
     ]
    },
    {
     "kind": "table",
     "label": "Gummy tin, cost a tin",
     "head": [
      "Cost line",
      "Minimum run",
      "Double",
      "Five times",
      "Extract only",
      "What it covers"
     ],
     "rows": [
      {
       "c": [
        "Extract",
        2.30625,
        2.30625,
        2.30625,
        3.75,
        "Grams a piece, times pieces a tin, times the band price"
       ]
      },
      {
       "c": [
        "Fruit",
        0.959593,
        0.959593,
        0.959593,
        0,
        "Fruit plus grind, converted from pounds"
       ]
      },
      {
       "c": [
        "Packaging, wrap and tin",
        1.9,
        1.85,
        1.75,
        1.9,
        "Supplier quote by band"
       ]
      },
      {
       "c": [
        "Other ingredients",
        0.24,
        0.24,
        0.24,
        0.24,
        "Gelatin, sugar, flavor, color"
       ]
      },
      {
       "c": [
        "Manufacturing labor",
        1.75,
        1.75,
        1.65,
        1.75,
        "Supplier quote"
       ]
      },
      {
       "c": [
        "Packing labor",
        0.71,
        0.71,
        0.71,
        0.71,
        "Supplier quote"
       ]
      },
      {
       "c": [
        "Lab testing",
        0.12,
        0.06,
        0.02,
        0.12,
        "Two COAs a batch, spread over the run"
       ]
      },
      {
       "c": [
        "Communications and admin",
        0.17,
        0.17,
        0.17,
        0.17,
        "Supplier line item"
       ]
      },
      {
       "c": [
        "Landed cost a tin",
        8.155843,
        8.045843,
        7.805843,
        8.64,
        "Everything it costs to put a sellable tin on the shelf"
       ],
       "b": true
      },
      {
       "c": [
        "Invoice cost a tin",
        6.135843,
        6.135843,
        6.035843,
        6.62,
        "Landed cost less packaging and labs, which the manufacturer doesn't bill. This is what a batch wire divides down to"
       ]
      },
      {
       "c": [
        "Gross margin at $69",
        0.881799,
        0.883394,
        0.886872,
        0.874783,
        "Retail price less landed cost, over retail price"
       ],
       "b": true
      },
      {
       "c": [
        "Manufacturer invoice, whole run",
        12271.686797,
        24543.373595,
        60358.433987,
        13240,
        "Invoice cost a tin, times tins in the run"
       ],
       "b": true
      }
     ],
     "notes": [
      "The actives price holds at the lowest band across all three run sizes because even a five-times run needs under 4 kg of extract and under 30 lb of fruit. The next step down arrives at 10 kg, which is roughly a 100,000-piece order a flavor."
     ],
     "fmt": [
      "txt",
      "usd",
      "usd",
      "usd",
      "usd",
      "txt"
     ]
    },
    {
     "kind": "table",
     "label": "Chocolate box, what the run looks like",
     "head": [
      "Measure",
      "Minimum run",
      "Three times",
      "Six times",
      "Hybrid, minimum",
      "How it's worked out"
     ],
     "rows": [
      {
       "c": [
        "Boxes a run",
        1500,
        4500,
        9000,
        1500,
        "Kitchen batch size, one flavor at a time"
       ]
      },
      {
       "c": [
        "Pieces to produce",
        12000,
        36000,
        72000,
        12000,
        "Boxes, times pieces a box"
       ]
      },
      {
       "c": [
        "Extract needed, kg",
        1.395349,
        4.186047,
        8.372093,
        0.697674,
        "Sets which extract price band applies"
       ]
      },
      {
       "c": [
        "Fruit needed, lb",
        0,
        0,
        0,
        7.348748,
        "Hybrid build only"
       ]
      },
      {
       "c": [
        "Extract price a gram, band applied",
        5.75,
        5.75,
        5.5,
        5.75,
        "Under 5 kg, 5 to 10 kg, over 10 kg"
       ],
       "b": true
      },
      {
       "c": [
        "Fruit price a pound, band applied",
        320,
        320,
        320,
        320,
        "Includes grind. Two bands quoted"
       ],
       "b": true
      }
     ],
     "notes": [],
     "fmt": [
      "txt",
      "num",
      "num",
      "num",
      "num",
      "txt"
     ]
    },
    {
     "kind": "table",
     "label": "Chocolate box, cost a box",
     "head": [
      "Cost line",
      "Minimum run",
      "Three times",
      "Six times",
      "Hybrid, minimum",
      "What it covers"
     ],
     "rows": [
      {
       "c": [
        "Extract",
        5.348837,
        5.348837,
        5.116279,
        2.674419,
        "Grams a piece, times pieces a box, times the band price"
       ]
      },
      {
       "c": [
        "Fruit",
        0,
        0,
        0,
        1.567733,
        "Hybrid build only"
       ]
      },
      {
       "c": [
        "Chocolate",
        0.5913,
        0.5913,
        0.5913,
        0.5913,
        "Grams a box at the price a kilo"
       ]
      },
      {
       "c": [
        "Cocoa butter",
        0.12006,
        0.12006,
        0.12006,
        0.12006,
        "Grams a box at the price a kilo"
       ]
      },
      {
       "c": [
        "Wrappers",
        0.24,
        0.24,
        0.2,
        0.24,
        "One wrapper a piece"
       ]
      },
      {
       "c": [
        "Box",
        0.78,
        0.78,
        0.73,
        0.78,
        "Packaging quote"
       ]
      },
      {
       "c": [
        "Manufacturing labor",
        4.12,
        3.92,
        3.9,
        4.12,
        "Supplier quote"
       ]
      },
      {
       "c": [
        "Packing labor",
        0.2,
        0.2,
        0.17,
        0.2,
        "Supplier quote"
       ]
      },
      {
       "c": [
        "Supplier fee",
        0.25,
        0.2,
        0.15,
        0.25,
        "Supplier quote"
       ]
      },
      {
       "c": [
        "Landed cost a box",
        11.650197,
        11.400197,
        10.977639,
        10.543512,
        "Everything it costs to put a sellable box on the shelf"
       ],
       "b": true
      },
      {
       "c": [
        "Gross margin at $69",
        0.831157,
        0.83478,
        0.840904,
        0.847195,
        "Retail price less landed cost, over retail price"
       ],
       "b": true
      }
     ],
     "notes": [
      "The extract price steps down at the six-times run, where the order crosses 5 kg. That's the only volume break the chocolate side reaches.",
      "Eight pieces, confirmed by DB on 2 October. The supplier quote priced six, so the actives and wrapper lines are repriced here and a box costs about $1.40 more than the quote implied. Both recipes are costed and both are live options: extract-only carries the whole dose on extract, the hybrid lets fruit carry half of it at a fraction of the price a gram.",
      "The chocolate and cocoa butter prices a kilo are worked back from the quoted cost a box. They need checking against what the kitchen actually pays, because the batch quantities on the supplier sheet don't agree with them. One other gap: the supplier sheet reads $9.41 a box on the hybrid build and this tool reads $9.42, because it adds the extract and fruit lines before rounding where the sheet rounded each line first. The cent is rounding, not a disagreement, and client assets carry the sourced $9.41."
     ],
     "fmt": [
      "txt",
      "usd",
      "usd",
      "usd",
      "usd",
      "txt"
     ]
    },
    {
     "kind": "table",
     "label": "Capsule bottle, 30 count",
     "head": [
      "Cost line",
      "Config A",
      "Config B",
      null,
      null,
      "What it covers"
     ],
     "rows": [
      {
       "c": [
        "Fruit",
        2.44,
        2.44
       ]
      },
      {
       "c": [
        "Lion's Mane",
        0.46,
        0.55
       ]
      },
      {
       "c": [
        "Magnesium L-threonate",
        1.5,
        1.5
       ]
      },
      {
       "c": [
        "L-theanine",
        0.03,
        0.03
       ]
      },
      {
       "c": [
        "Encapsulation labor",
        3.94,
        3.15
       ]
      },
      {
       "c": [
        "Bottle, lid and label",
        1.5,
        1.5
       ]
      },
      {
       "c": [
        "Packing labor",
        0.5,
        0.5
       ]
      },
      {
       "c": [
        "Landed cost a bottle",
        10.37,
        9.67,
        null,
        null,
        "The supplier Total read $8.37 and $7.67, which left out the last two lines"
       ],
       "b": true
      },
      {
       "c": [
        "What the supplier called Total",
        8.37,
        7.67,
        null,
        null,
        "Ingredients plus encapsulation labor only"
       ]
      },
      {
       "c": [
        "Understated by",
        2,
        2,
        null,
        null,
        "Exactly the bottle and the packing labor, on both configurations"
       ],
       "b": true
      }
     ],
     "notes": [
      "Capsules have never been produced and have no retail price, so there's no margin line. Confirm with the manufacturer whether their quote already includes the bottle before treating $10.37 as settled."
     ],
     "fmt": [
      "txt",
      "usd",
      "usd",
      "txt",
      "txt",
      "txt"
     ]
    },
    {
     "kind": "table",
     "label": "What the kitchen actually produced, by flavor",
     "head": [
      "Flavor",
      "Runs logged",
      "Units good",
      "Cost a unit, logged",
      "Quoted cost a box",
      "How far apart"
     ],
     "rows": [
      {
       "c": [
        "Mint milk chocolate",
        0,
        0,
        null,
        10.543512,
        "No runs logged yet"
       ]
      },
      {
       "c": [
        "Toffee milk chocolate",
        0,
        0,
        null,
        10.543512,
        "No runs logged yet"
       ]
      },
      {
       "c": [
        "Dubai milk chocolate",
        0,
        0,
        null,
        10.543512,
        "No runs logged yet"
       ]
      },
      {
       "c": [
        "Espresso dark chocolate",
        0,
        0,
        null,
        10.543512,
        "No runs logged yet"
       ]
      },
      {
       "c": [
        "Sea Salt dark chocolate",
        0,
        0,
        null,
        10.543512,
        "No runs logged yet"
       ]
      },
      {
       "c": [
        "All flavors",
        0,
        0,
        null,
        10.543512
       ],
       "b": true
      }
     ],
     "notes": [
      "These fill themselves from Run log. Until a flavor has three logged runs its number is an anecdote, which is what the last column says. The quoted figure beside each one is the hybrid build at the minimum run, so a gap reads as a real difference rather than a spec difference.",
      "Logged cost a unit carries everything tied to that run: ingredients, the actives entered on the run line, labor, kitchen overhead, and any packaging logged against it on Purchase log. The quoted column always includes the box and the wrapper, so log packaging on the run that consumes it or the two columns aren't measuring the same thing."
     ],
     "fmt": [
      "txt",
      "num",
      "num",
      "usd",
      "usd",
      "txt"
     ]
    }
   ]
  },
  "Volume and batch": {
   "title": "Volume and batch",
   "sub": "What an order of each size buys and what it costs. Tins and boxes are shown both for the whole run and per flavor, because the original sheet mixed the two.",
   "blocks": [
    {
     "kind": "table",
     "label": "Gummies, two flavors a run",
     "head": [
      "Measure",
      "Minimum run",
      "Double",
      "Five times",
      null,
      "How it's worked out"
     ],
     "rows": [
      {
       "c": [
        "Minimum order a flavor, pieces",
        8000,
        16000,
        40000,
        null,
        "Set on Cost per unit"
       ]
      },
      {
       "c": [
        "Flavors in the run",
        2,
        2,
        2,
        null,
        "Strawberry Mango and Blue Raspberry"
       ]
      },
      {
       "c": [
        "Pieces ordered",
        16000,
        32000,
        80000,
        null,
        "Minimum a flavor, times flavors"
       ]
      },
      {
       "c": [
        "Pieces to produce",
        16226,
        32226,
        80226,
        null,
        "Includes the waste allowance the supplier bakes in"
       ]
      },
      {
       "c": [
        "Tins, whole run",
        2000,
        4000,
        10000,
        null,
        "Pieces ordered, divided by pieces a tin"
       ],
       "b": true
      },
      {
       "c": [
        "Tins a flavor",
        1000,
        2000,
        5000,
        null,
        "This is the number to compare against stock on hand"
       ],
       "b": true
      },
      {
       "c": [
        "Extract needed, kg",
        0.779609,
        1.548359,
        3.854609,
        null,
        "Drives the extract price band"
       ]
      },
      {
       "c": [
        "Fruit needed, lb",
        5.260258,
        10.447249,
        26.008223,
        null,
        "Drives the fruit price band"
       ]
      },
      {
       "c": [
        "Landed cost a tin",
        8.155843,
        8.045843,
        7.805843,
        null,
        "Hybrid build"
       ]
      },
      {
       "c": [
        "Invoice cost a tin",
        6.135843,
        6.135843,
        6.035843,
        null,
        "What the manufacturer bills"
       ]
      },
      {
       "c": [
        "Manufacturer invoice, whole run",
        12271.686797,
        24543.373595,
        60358.433987,
        null,
        "This is the wire"
       ],
       "b": true
      },
      {
       "c": [
        "Landed value, whole run",
        16311.686797,
        32183.373595,
        78058.433987,
        null,
        "Includes packaging and labs bought separately"
       ]
      },
      {
       "c": [
        "Retail value, whole run",
        138000,
        276000,
        690000,
        null,
        "Every tin sold at $69"
       ],
       "b": true
      }
     ],
     "notes": [
      "The minimum run is 1,000 tins a flavor, not 2,000. The original sheet showed 2,000 in a row labeled Total tins, which was the whole two-flavor run, directly beneath a row labeled per SKU. Reading one as the other is how a run gets ordered at twice the size.",
      "The original sheet added waste to its piece count but not to its tin count, so the two rows described different runs. Here waste is a separate line and tins are worked from pieces ordered."
     ],
     "fmt": [
      "txt",
      "num",
      "num",
      "num",
      "txt",
      "txt"
     ]
    },
    {
     "kind": "table",
     "label": "Chocolate, one flavor a run",
     "head": [
      "Measure",
      "Minimum run",
      "Three times",
      "Six times",
      null,
      "How it's worked out"
     ],
     "rows": [
      {
       "c": [
        "Boxes a run",
        1500,
        4500,
        9000,
        null,
        "Set on Cost per unit"
       ]
      },
      {
       "c": [
        "Pieces to produce",
        12000,
        36000,
        72000,
        null,
        "Boxes, times pieces a box"
       ]
      },
      {
       "c": [
        "Extract needed, kg",
        1.395349,
        4.186047,
        8.372093,
        null,
        "Drives the extract price band"
       ]
      },
      {
       "c": [
        "Chocolate needed, kg",
        40.5,
        121.5,
        243,
        null,
        "Grams a box, times boxes"
       ]
      },
      {
       "c": [
        "Cocoa butter needed, kg",
        4.35,
        13.05,
        26.1,
        null,
        "Grams a box, times boxes"
       ]
      },
      {
       "c": [
        "Landed cost a box",
        11.650197,
        11.400197,
        10.977639,
        null,
        "Extract-only build"
       ]
      },
      {
       "c": [
        "Landed value, whole run",
        17475.295814,
        51300.887442,
        98798.751628,
        null,
        "Cost a box, times boxes"
       ]
      },
      {
       "c": [
        "Retail value, whole run",
        103500,
        310500,
        621000,
        null,
        "Every box sold at $69"
       ],
       "b": true
      }
     ],
     "notes": [
      "Chocolate runs one flavor at a time in your own kitchen, so there's no two-flavor minimum and no outside invoice. The constraint is boxes on hand, not a supplier minimum."
     ],
     "fmt": [
      "txt",
      "num",
      "num",
      "num",
      "txt",
      "txt"
     ]
    }
   ]
  },
  "Materials": {
   "title": "Materials and suppliers",
   "sub": "One deduplicated list. The old workbook carried two copies that disagreed; this is built from the newer one, with its corrections applied. Retired products are left out.",
   "blocks": [
    {
     "kind": "table",
     "label": "Packaging orders",
     "head": [
      "Item",
      "Minimum order",
      "Price a unit",
      "Plates, one off",
      "Order subtotal",
      "Total with plates"
     ],
     "rows": [
      {
       "c": [
        "Wrappers",
        25000,
        0.03,
        400,
        750,
        1150
       ]
      },
      {
       "c": [
        "Mylar bags",
        2000,
        0.23,
        400,
        460,
        860
       ]
      },
      {
       "c": [
        "Boxes",
        2000,
        0.78,
        0,
        1560,
        1560
       ]
      }
     ],
     "notes": [
      "Plates are a one-time etching cost a design, so a reorder of the same artwork drops them. Shipping and tariffs aren't in these totals because they have never been quoted; the original sheet carried $1, which is a placeholder.",
      "Lead time on wrappers, tins and boxes is six to eight weeks. That's the longest lead in the business and it sets the chocolate reorder point."
     ],
     "fmt": [
      "txt",
      "num",
      "usd",
      "usd0",
      "usd0",
      "usd0"
     ]
    },
    {
     "kind": "table",
     "label": "Ingredients and packaging by product",
     "head": [
      "Product",
      "Item",
      "Minimum purchase",
      "Cost",
      "Supplier",
      "Lead time"
     ],
     "rows": [
      {
       "c": [
        "Mint milk chocolate",
        "Milk chocolate",
        "2 cases, 10 blocks",
        "$469.95 a case",
        "Restaurant Depot",
        "1 day"
       ],
       "b": true
      },
      {
       "c": [
        null,
        "Coconut oil",
        "4 tubs",
        "$17.99 each",
        "Costco",
        "1 day"
       ]
      },
      {
       "c": [
        null,
        "Sugar",
        "25 lb",
        "$23.99",
        "Restaurant Depot",
        "1 day"
       ]
      },
      {
       "c": [
        null,
        "Cocoa butter",
        "4 lb",
        "$104.48",
        "Amazon",
        "1 day"
       ]
      },
      {
       "c": [
        null,
        "Vanilla extract",
        null,
        null,
        null,
        "1 day"
       ]
      },
      {
       "c": [
        null,
        "Soy lecithin",
        null,
        null,
        null,
        "1 day"
       ]
      },
      {
       "c": [
        null,
        "Mint pieces",
        "1 case",
        "$94.49",
        "Restaurant Depot",
        "1 day"
       ]
      },
      {
       "c": [
        null,
        "Bar wrapper",
        "1,000",
        "$80.00",
        "To identify",
        "1 week"
       ]
      },
      {
       "c": [
        null,
        "Mint bar box",
        "2,000",
        "$0.78 a box",
        "China, to identify",
        "6 to 8 weeks"
       ]
      },
      {
       "c": [
        "Toffee milk chocolate",
        "Toffee pieces",
        "1 case",
        "$177.59",
        "Restaurant Depot",
        "1 day"
       ],
       "b": true
      },
      {
       "c": [
        null,
        "Milk chocolate",
        "2 cases, 10 blocks",
        "$469.95 a case",
        "Restaurant Depot",
        "1 day"
       ]
      },
      {
       "c": [
        null,
        "Toffee bar box",
        "2,000",
        "$0.78 a box",
        "China, to identify",
        "6 to 8 weeks"
       ]
      },
      {
       "c": [
        "Dubai milk chocolate",
        "Milk chocolate",
        "2 cases, 10 blocks",
        "$469.95 a case",
        "Restaurant Depot",
        "1 day"
       ],
       "b": true
      },
      {
       "c": [
        null,
        "Organic pistachios",
        "1.5 lb pack",
        "$20.99",
        "Costco",
        "1 day"
       ]
      },
      {
       "c": [
        null,
        "Kataifi dough",
        null,
        null,
        "Party supply store",
        "1 day"
       ]
      },
      {
       "c": [
        null,
        "Organic butter",
        null,
        null,
        "Party supply store",
        "1 day"
       ]
      },
      {
       "c": [
        null,
        "Pistachio paste",
        null,
        null,
        "Party supply store",
        "1 day"
       ]
      },
      {
       "c": [
        null,
        "Tahini",
        null,
        null,
        "Party supply store",
        "1 day"
       ]
      },
      {
       "c": [
        null,
        "Coconut oil",
        "4 tubs",
        "$17.99 each",
        "Costco",
        "1 day"
       ]
      },
      {
       "c": [
        null,
        "Dubai bar box",
        "2,000",
        "$0.78 a box",
        "China, to identify",
        "6 to 8 weeks"
       ]
      },
      {
       "c": [
        "Espresso dark chocolate",
        "Dark chocolate",
        "1 case",
        "$459.95",
        "Restaurant Depot",
        "1 day"
       ],
       "b": true
      },
      {
       "c": [
        null,
        "Instant coffee",
        "4",
        "$16.39 each",
        "Restaurant Depot",
        "1 day"
       ]
      },
      {
       "c": [
        null,
        "Cocoa nibs",
        "4 lb pack",
        "$35.99 each",
        "Amazon or party supply",
        "1 day"
       ]
      },
      {
       "c": [
        null,
        "Espresso bar box",
        "2,000",
        "$0.78 a box",
        "China, to identify",
        "6 to 8 weeks"
       ]
      },
      {
       "c": [
        "Strawberry Mango gummies",
        "Production run",
        "8,000 pieces a flavor",
        "See Volume and batch",
        "OPM",
        "3 weeks"
       ],
       "b": true
      },
      {
       "c": [
        null,
        "Wrappers",
        "25,000",
        "$0.03 each",
        "China, to identify",
        "6 to 8 weeks"
       ]
      },
      {
       "c": [
        null,
        "Tins",
        "2,000",
        "Held, 2,000 a flavor",
        "China, to identify",
        "6 to 8 weeks"
       ]
      },
      {
       "c": [
        "Blue Raspberry gummies",
        "Production run",
        "8,000 pieces a flavor",
        "See Volume and batch",
        "OPM",
        "3 weeks"
       ],
       "b": true
      },
      {
       "c": [
        null,
        "Wrappers",
        "25,000",
        "$0.03 each",
        "China, to identify",
        "6 to 8 weeks"
       ]
      },
      {
       "c": [
        null,
        "Tins",
        "2,000",
        "Held, 2,000 a flavor",
        "China, to identify",
        "6 to 8 weeks"
       ]
      }
     ],
     "notes": [],
     "fmt": [
      "txt",
      "txt",
      "txt",
      "txt",
      "txt",
      "txt"
     ]
    },
    {
     "kind": "table",
     "label": "Planned, not in production",
     "head": [
      "Product",
      "Item",
      "Minimum purchase",
      "Cost",
      "Supplier",
      "Lead time"
     ],
     "rows": [
      {
       "c": [
        "Sea Salt dark chocolate",
        "80% dark chocolate",
        "1 case of 10",
        "$15.12",
        "Restaurant Depot",
        "1 day"
       ],
       "b": true
      },
      {
       "c": [
        null,
        "Maldon sea salt",
        "2 tubs",
        "$9.86 each",
        "Restaurant Depot",
        "1 day"
       ]
      },
      {
       "c": [
        null,
        "Coconut oil",
        "4 lb pack",
        "$35.99 each",
        "Amazon",
        "1 day"
       ]
      },
      {
       "c": [
        null,
        "Black cocoa powder",
        null,
        null,
        "To identify",
        "1 day"
       ]
      },
      {
       "c": [
        null,
        "Sea Salt bar box",
        "2,000",
        "Held, 2,000 boxes",
        "China, to identify",
        "Already held"
       ]
      },
      {
       "c": [
        "Microdose capsules",
        "Capsules",
        null,
        "See Cost per unit",
        "China, to identify",
        "6 to 8 weeks"
       ],
       "b": true
      },
      {
       "c": [
        null,
        "Production",
        null,
        "See Cost per unit",
        "OPM",
        "2 weeks"
       ]
      },
      {
       "c": [
        null,
        "Bottle, lid and label",
        null,
        "$1.50 a bottle",
        "China, to identify",
        "6 to 8 weeks"
       ]
      },
      {
       "c": [
        "Love gummies",
        "MUD",
        null,
        "$10,000 a kg",
        "SW",
        "2 to 4 weeks"
       ],
       "b": true
      },
      {
       "c": [
        null,
        "Production",
        "8,000 pieces a flavor",
        "See Volume and batch",
        "OPM",
        "3 weeks"
       ]
      },
      {
       "c": [
        null,
        "Packaging",
        null,
        null,
        "China, to identify",
        "6 to 8 weeks"
       ]
      }
     ],
     "notes": [
      "Corrections carried over from the newer ingredient list: the Dubai bar uses milk chocolate, not white. The Sea Salt bar uses 80% dark chocolate, not Maca. Both were open questions on the older copy.",
      "Sea Salt waits on the slowest milk chocolate selling through. Its 2,000 boxes are already paid for and held. Capsules and Love gummies wait on cash flow."
     ],
     "fmt": [
      "txt",
      "txt",
      "txt",
      "txt",
      "txt",
      "txt"
     ]
    },
    {
     "kind": "table",
     "label": "Shipping materials",
     "head": [
      "Item",
      "Minimum purchase",
      "Cost",
      "Supplier",
      "Lead time"
     ],
     "rows": [
      {
       "c": [
        "Small box",
        "10 packs of 25",
        "Free",
        "USPS",
        "On hand"
       ]
      },
      {
       "c": [
        "Medium box 1",
        "5 packs of 10",
        "Free",
        "USPS",
        "On hand"
       ]
      },
      {
       "c": [
        "Medium box 2",
        "5 packs of 10",
        "Free",
        "USPS",
        "On hand"
       ]
      },
      {
       "c": [
        "Large box",
        "1 pack of 10",
        "Free",
        "USPS",
        "On hand"
       ]
      },
      {
       "c": [
        "Tape",
        "1 pack of 6",
        "$16.95",
        "Amazon",
        "1 day"
       ]
      },
      {
       "c": [
        "Freezer packs",
        "1 case of 96",
        "$49.50",
        "Amazon",
        "1 day"
       ]
      },
      {
       "c": [
        "Radiant barrier bags",
        "50",
        "$67.00",
        "To identify",
        "1 week"
       ]
      },
      {
       "c": [
        "Shipping labels",
        "1 pack of 4 rolls",
        "$32.99",
        "Amazon",
        "1 day"
       ]
      },
      {
       "c": [
        "Branded boxes",
        null,
        null,
        "China, to identify",
        "6 to 8 weeks"
       ]
      }
     ],
     "notes": [],
     "fmt": [
      "txt",
      "txt",
      "txt",
      "txt",
      "txt"
     ]
    }
   ]
  },
  "3PL": {
   "title": "3PL rates",
   "sub": "Pick, pack, ship and storage at Westfield Prep. The base is waived once the services billed in a month exceed it.",
   "blocks": [
    {
     "kind": "table",
     "label": "Monthly base",
     "head": null,
     "rows": [
      {
       "c": [
        "Base cost a month",
        300,
        null,
        null,
        null,
        "Waived if the sum of all services exceeds it, so it's a floor rather than an extra charge"
       ]
      }
     ],
     "notes": [],
     "fmt": [
      "txt",
      "usd0",
      "txt",
      "txt",
      "txt",
      "txt"
     ]
    },
    {
     "kind": "table",
     "label": "Storage",
     "head": [
      "Tier",
      "0 to 499",
      "500 to 1,999",
      "2,000 to 4,999",
      "5,000 to 9,999",
      "What it covers"
     ],
     "rows": [
      {
       "c": [
        "Tier 1, a piece a month",
        0.25,
        0.2,
        0.18,
        0.15,
        "Finished goods and active raw materials, converted to equivalent units"
       ]
      },
      {
       "c": [
        "Tier 2, a square foot a month",
        2.75,
        null,
        null,
        null,
        "Packaging and non-active raw materials. Calculated on four cubic feet, one square foot by four feet high"
       ]
      }
     ],
     "notes": [],
     "fmt": [
      "txt",
      "usd",
      "usd",
      "usd",
      "usd",
      "txt"
     ]
    },
    {
     "kind": "table",
     "label": "Order handling",
     "head": [
      "Fee",
      "Small",
      "Medium",
      "Large",
      "Extra large",
      "Note"
     ],
     "rows": [
      {
       "c": [
        "Receiving",
        0,
        0,
        0,
        0,
        "No charge"
       ]
      },
      {
       "c": [
        "Returns",
        10,
        10,
        10,
        10,
        "A flat fee an order"
       ]
      },
      {
       "c": [
        "Packing, flat",
        7,
        10,
        null,
        null,
        "Small and medium are flat fees"
       ]
      },
      {
       "c": [
        "Packing, percent of value",
        null,
        null,
        0.02,
        0.02,
        "Large and extra large are charged on the sales value of the goods"
       ]
      }
     ],
     "notes": [
      "The original sheet put $7, $10, 0.02 and 0.02 on one row, which reads as four dollar figures. The last two are percentages. They're split onto separate rows here so the row has one unit."
     ],
     "fmt": [
      "txt",
      "usd0",
      "usd0",
      "usd0",
      "usd0",
      "txt"
     ]
    },
    {
     "kind": "table",
     "label": "Packing materials",
     "head": [
      "Item",
      "Cost each",
      "Dimensions"
     ],
     "rows": [
      {
       "c": [
        "Mailer 1",
        1.1,
        "10 x 8 x 1.5"
       ]
      },
      {
       "c": [
        "Mailer 2",
        1.3,
        "15 x 11 x 3"
       ]
      },
      {
       "c": [
        "Box 1",
        2,
        "8 x 8 x 8"
       ]
      },
      {
       "c": [
        "Box 2",
        2.5,
        "12 x 12 x 12"
       ]
      },
      {
       "c": [
        "Ice pack",
        1
       ]
      },
      {
       "c": [
        "Liners, box 1",
        7
       ]
      },
      {
       "c": [
        "Liners, box 2",
        12
       ]
      }
     ],
     "notes": [],
     "fmt": [
      "txt",
      "usd",
      "txt"
     ]
    },
    {
     "kind": "table",
     "label": "How an order is sized",
     "head": [
      "Size",
      "What it means"
     ],
     "rows": [
      {
       "c": [
        "Small",
        "Fits mailer 1, up to 10 gummy tins or equivalent combinations, to be verified"
       ],
       "b": true
      },
      {
       "c": [
        "Medium",
        "Bigger than mailer 1, plus every order needing ice, but smaller than box 1"
       ],
       "b": true
      },
      {
       "c": [
        "Large",
        "5 to 15 lb"
       ],
       "b": true
      },
      {
       "c": [
        "Extra large",
        "15 to 25 lb"
       ],
       "b": true
      }
     ],
     "notes": [],
     "fmt": [
      "txt",
      "txt"
     ]
    },
    {
     "kind": "table",
     "label": "Standing terms",
     "head": null,
     "rows": [
      {
       "c": [
        "Billing",
        "Base cost at the start of the month, adjusted at month end for the final invoice"
       ],
       "b": true
      },
      {
       "c": [
        "Labels",
        "Labels and packing list are sent by you by secure email. Ship days are Monday to Wednesday, plus Thursday for expedited"
       ],
       "b": true
      },
      {
       "c": [
        "Cut-off",
        "Same-day shipping closes at 10am Pacific"
       ],
       "b": true
      },
      {
       "c": [
        "Courier",
        "UPS exclusively"
       ],
       "b": true
      },
      {
       "c": [
        "Setup",
        "Weight, dimensions, ice and liner need configuring per package on the shipping platform"
       ],
       "b": true
      }
     ],
     "notes": [],
     "fmt": [
      "txt",
      "txt"
     ]
    }
   ]
  },
  "Ledger": {
   "title": "Manufacturer ledger",
   "sub": "Every invoice matched to the wire that paid it. Add new rows at the bottom of each table and the balance updates.",
   "blocks": [
    {
     "kind": "table",
     "label": "Invoices",
     "head": [
      "Invoice",
      "What for",
      "Amount",
      "Date",
      "Status",
      "Note"
     ],
     "rows": [
      {
       "c": [
        "12000",
        "Three COAs",
        345,
        "12 Dec 2025",
        "Paid",
        "Lab testing"
       ]
      },
      {
       "c": [
        "12001",
        "R&D, labs and shipping",
        517,
        "21 Apr 2026",
        "Paid",
        "Cleared on the 5 May wire"
       ]
      },
      {
       "c": [
        "12002",
        "2,000 tin batch",
        10804,
        "31 Dec 2025",
        "Paid",
        "First production run"
       ]
      },
      {
       "c": [
        "12002R1",
        "2,000 tins plus 600s",
        1338,
        "21 Apr 2026",
        "Paid",
        "First run, modified. Cleared on the 5 May wire"
       ]
      },
      {
       "c": [
        "9500",
        "Packaging",
        4825,
        "31 Dec 2025",
        "Paid",
        "First packaging order"
       ]
      },
      {
       "c": [
        "9500R1",
        "Packaging",
        8781,
        "17 Apr 2026",
        "Paid",
        "Second packaging order, modified"
       ]
      },
      {
       "c": [
        "Invoiced in total",
        null,
        26610
       ],
       "b": true
      }
     ],
     "notes": [],
     "fmt": [
      "txt",
      "txt",
      "usd0",
      "txt",
      "txt",
      "txt"
     ]
    },
    {
     "kind": "table",
     "label": "Payments out",
     "head": [
      "Date",
      "Method",
      "Amount",
      "Against"
     ],
     "rows": [
      {
       "c": [
        "2 Dec 2025",
        "Wire",
        345,
        "12000"
       ]
      },
      {
       "c": [
        "31 Dec 2025",
        "Wire",
        10804,
        "12002"
       ]
      },
      {
       "c": [
        "31 Dec 2025",
        "Wire",
        4825,
        "9500"
       ]
      },
      {
       "c": [
        "21 Apr 2026",
        "Wire",
        8781,
        "9500R1"
       ]
      },
      {
       "c": [
        "5 May 2026",
        "Wire",
        1855,
        "12001 and 12002R1"
       ]
      },
      {
       "c": [
        "Paid in total",
        null,
        26610
       ],
       "b": true
      },
      {
       "c": [
        "Balance owing",
        null,
        0
       ],
       "b": true
      }
     ],
     "notes": [
      "The original sheet still flagged 12001 and 12002R1 as unpaid. The 5 May wire of $1,855 is exactly those two added together, so they cleared and the status column was stale.",
      "Three invoices carry December dates a year ahead of the April entries around them. They're read here as December 2025, which is the only reading that puts them before the wires that paid them."
     ],
     "fmt": [
      "txt",
      "txt",
      "usd0",
      "txt"
     ]
    },
    {
     "kind": "table",
     "label": "Other charges in the account",
     "head": [
      "Date",
      "What for",
      "Amount"
     ],
     "rows": [
      {
       "c": [
        "15 Jan 2026",
        "50-piece samples",
        200
       ]
      },
      {
       "c": [
        "18 Jan 2026",
        "Lab testing",
        122
       ]
      },
      {
       "c": [
        "15 Jan 2026",
        "Shipping samples",
        35
       ]
      },
      {
       "c": [
        "5 Apr 2026",
        "Shipping tins from Arizona",
        20
       ]
      },
      {
       "c": [
        "10 Apr 2026",
        "R&D capsules",
        120
       ]
      },
      {
       "c": [
        "12 Apr 2026",
        "Shipping R&D capsules",
        20
       ]
      },
      {
       "c": [
        "Small charges in total",
        null,
        517
       ],
       "b": true
      }
     ],
     "notes": [],
     "fmt": [
      "txt",
      "txt",
      "usd0"
     ]
    },
    {
     "kind": "table",
     "label": "Open wrapper claim",
     "head": [
      "Measure",
      "Value"
     ],
     "rows": [
      {
       "c": [
        "Wrappers bought",
        40000
       ]
      },
      {
       "c": [
        "Cost",
        1440
       ]
      },
      {
       "c": [
        "Freight",
        150
       ]
      },
      {
       "c": [
        "Total",
        1590
       ],
       "b": true
      },
      {
       "c": [
        "Cost a wrapper",
        0.03975
       ]
      },
      {
       "c": [
        "Wrappers to be credited",
        4000
       ]
      },
      {
       "c": [
        "Credit value",
        159
       ],
       "b": true
      },
      {
       "c": [
        "Freight owed to the supplier",
        150
       ]
      }
     ],
     "notes": [
      "The offer on the table is 2,000 Strawberry Mango wrappers, 2,000 Blue Raspberry, and the credit above. Against it you owe $150 of freight to the 3PL, so the two roughly cancel. Confirm before treating either as settled."
     ],
     "fmt": [
      "txt",
      "num"
     ]
    }
   ]
  }
 },
 "finds": [
  [
   "A capsule bottle costs $2.00 more than the sheet said",
   "The Total added ingredients and capsule labor but left out $1.50 of packaging and $0.50 of packing labor. Both configurations were understated by exactly $2.00 (Capsules tab, the Total row)",
   "Real landed cost is $10.37 and $9.67. Repriced on Cost per unit"
  ],
  [
   "The tin count was never ambiguous",
   "8,000 pieces a flavor across two flavors is 16,000 pieces, which at 8 a tin is 2,000 tins for the whole run and 1,000 a flavor. The sheet showed the total and the per-flavor figure in the same table without labeling either (Gummies tab, the MOQ ladder)",
   "Both are now labeled on Volume and batch"
  ],
  [
   "The three batch prices never disagreed",
   "$12,271 is what the manufacturer invoices for a 2,000-tin run. $6.14 is that divided by tins. $8.16 is the full cost per tin including packaging and labs, which the manufacturer doesn't bill. Three different things, all labeled as cost (Gummies tab, rows 43, 44 and 46)",
   "Separated into invoice cost and landed cost"
  ],
  [
   "The chocolate batch inputs look transposed",
   "It states 22 kg of chocolate and 40 kg of cocoa butter for 1,500 boxes. The per-unit costing implies 27 g of chocolate and 2.9 g of cocoa butter a box, which is 40.5 kg and 4.3 kg. The two figures appear to have been swapped (Chocolate tab, rows 10 and 11)",
   "Confirm with the kitchen before the next run"
  ],
  [
   "The quote priced a different unit than MYND sells",
   "Six wrappers a box and 1,500 boxes from 9,000 pieces both said 6 pieces. DB confirmed 8 on 2 October, so the actives and wrapper lines are repriced here (Chocolate tab, rows 33 and 36)",
   "A box costs $1.40 more at eight pieces. Both recipes are costed: $11.65 extract-only and $10.54 hybrid"
  ],
  [
   "The kitchen ledger collected rent and delivery and never used them",
   "Rent and the delivery run were typed into Setup, but cost per unit added only ingredients, actives and labor. Kitchen overhead was never in the number (Kitchen ledger Setup, against its Run Log)",
   "Run log now allocates rent and delivery per run, so cost per unit carries them"
  ],
  [
   "The kitchen ledger priced products the kitchen doesn't make",
   "Ten products including gummies, capsules and a Matcha flavor nobody has mentioned. Chocolate is the only thing made in the kitchen (Kitchen ledger Setup, the product list)",
   "Cut to the four live chocolate flavors plus Sea Salt, which is tested and waiting"
  ],
  [
   "Packaging shipping is a placeholder",
   "All three lines carry $1, which isn't a shipping cost. The note says it depends on 5, 15 or 30 day speed (Packaging tab, the Shipping column)",
   "Quote it and enter the real figure on Inputs"
  ],
  [
   "The hybrid gummy ratio adds to 101%",
   "0.62 extract plus 0.39 fruit. One of the two is a rounding artifact (Gummies tab, rows 16 and 17)",
   "Formulation now derives both from the dose target, so they always add to 100%"
  ],
  [
   "Two ingredient lists disagreed",
   "The second copy answers questions left in the first: milk chocolate not white in the Dubai bar, and 80% dark chocolate not Maca in the Sea Salt bar (Consumables and Consumables 2)",
   "Materials is built from the second copy. The first is retired"
  ],
  [
   "Another brand's products were mixed in",
   "A list of bars, stickers and white boxes belonging to a different brand, costed alongside MYND's own (The older ingredient list)",
   "Left out. It doesn't belong in MYND's cost model"
  ]
 ],
 "opens": [
  [
   "What does the g on a chocolate box mean?",
   "DB",
   "The sheet labels a box 6g and the spec says 4g, but a 6-piece box carried 0.70 g of extract, so the label isn't grams of extract. Piece count is settled and priced. The dose label isn't"
  ],
  [
   "Is it 22 kg of chocolate and 40 kg of cocoa butter, or the other way round?",
   "The kitchen",
   "Changes the cost of a box"
  ],
  [
   "What does packaging shipping actually cost at each speed?",
   "The packaging supplier",
   "Adds to every packaging order"
  ],
  [
   "Does the capsule quote include the bottle and lid?",
   "The manufacturer",
   "Decides whether $1.50 of packaging is double counted"
  ],
  [
   "Is the 4,000 remedial wrapper claim settled?",
   "The wrapper supplier",
   "$159 of credit and $150 of freight"
  ],
  [
   "How many runs does the kitchen actually do in a month?",
   "The kitchen",
   "Sets how much rent lands on each run, and nothing has been logged yet to check the planned two against"
  ]
 ],
 "steps": [
  [
   "Buy something",
   "Log it in Purchase log the day you buy it, and photograph the receipt. No receipt, mark it NO and say why",
   "A receipt is the only thing separating a cost from a claim"
  ],
  [
   "Run a batch",
   "Log it in Run log the same day. Give it a run ID, record units started, units good and units wasted",
   "A run reconstructed from memory a week later is a guess with a date on it"
  ],
  [
   "Tie them together",
   "Put the run ID on each purchase line it paid for. One purchase can cover several runs, so split it across lines",
   "Anything untied goes in as UNALLOCATED and shows up on Reconciliation"
  ],
  [
   "Read the numbers",
   "Cost per unit fills itself. Reconciliation shows anything unallocated or missing a receipt",
   "Three runs a product turns a range into a number"
  ]
 ],
 "kitchen": {
  "products": [
   "Mint milk chocolate",
   "Toffee milk chocolate",
   "Dubai milk chocolate",
   "Espresso dark chocolate",
   "Sea Salt dark chocolate"
  ],
  "why": "Only chocolate is made in the kitchen. Gummies and capsules go through the manufacturer, so they're costed on Unit cost and invoiced on the Ledger.",
  "purchaseCols": [
   "Purchase ID",
   "Date bought",
   "Vendor",
   "Category",
   "What was bought",
   "Qty",
   "Unit",
   "Amount",
   "Receipt?",
   "Run ID",
   "Notes"
  ],
  "runCols": [
   "Run ID",
   "Date",
   "Flavor",
   "Active used, lb",
   "Labor hrs",
   "Units started",
   "Units good",
   "Units wasted",
   "Yield %",
   "Ingredient cost",
   "Active cost",
   "Labor cost",
   "Kitchen overhead",
   "Total cost",
   "Cost a good unit"
  ],
  "categories": [
   "Ingredients",
   "Active ingredient",
   "Packaging",
   "Labels",
   "Supplies",
   "Delivery",
   "Other"
  ],
  "rules": [
   [
    "Log it the day it happens",
    "A run reconstructed from memory a week later is a guess with a date on it"
   ],
   [
    "No receipt, no reimbursement",
    "A receipt is the only thing separating a cost from a claim"
   ],
   [
    "Every purchase gets a run ID",
    "Anything untied goes in as unallocated and shows on Reconciliation"
   ],
   [
    "Three runs before you trust it",
    "One run is an anecdote. The status column says which you're looking at"
   ]
  ],
  "recon": [
   [
    "Total purchases logged",
    "$0.00",
    "Everything on the purchase log"
   ],
   [
    "Allocated to a run",
    "$0.00",
    "Tied to a batch that happened"
   ],
   [
    "Unallocated",
    "$0.00",
    "Money spent that nothing came out of yet. Chase it"
   ],
   [
    "Purchases with no receipt",
    "0",
    "Count of lines. Should be zero"
   ],
   [
    "Value with no receipt",
    "$0.00",
    "Claimed cost with nothing behind it"
   ],
   [
    "Runs logged",
    "0",
    "Rows carrying a date"
   ],
   [
    "Units good",
    "0",
    "What reached the warehouse"
   ],
   [
    "Units wasted",
    "0",
    "Shrink, trim, tempering and QC"
   ],
   [
    "Overall yield",
    "Not measured",
    "Good units against units started"
   ],
   [
    "Waste as a share of output",
    "Not measured",
    "Track it or it gets absorbed into cost a unit"
   ],
   [
    "Blended cost a good unit",
    "Not measured",
    "Across every flavor logged, including kitchen overhead"
   ]
  ],
  "empty": "Nothing is logged yet, so every figure reads zero. That's the honest state, not a loading error. The first logged run is the first time any of it means anything."
 },
 "changeLog": [
  [
   "2 Oct 2026",
   "OpFix",
   "Cost layer folded in",
   "The packaging and manufacturing workbook was retired into this page. Every rate below is now the single editable copy."
  ],
  [
   "1 Oct 2026",
   "OpFix",
   "Capsule bottle $8.37 to $10.37",
   "The supplier Total left out $1.50 of bottle and $0.50 of packing labor. Both configurations were understated by exactly $2.00."
  ],
  [
   "1 Oct 2026",
   "OpFix",
   "Kitchen overhead added, $1,400 a run",
   "Rent and delivery were collected and never reached cost per unit. About $0.93 a box at a 1,500-box run."
  ],
  [
   "1 Oct 2026",
   "DB",
   "Lineup cut to six products",
   "Mint, Dubai, Toffee and Espresso chocolate, Strawberry Mango and Blue Raspberry gummies. Capsules and Sea Salt wait on cash flow."
  ],
  [
   "1 Oct 2026",
   "DB",
   "Gummy production lead 3 weeks",
   "Confirmed with the manufacturer. The supplier workbook said two weeks and was out of date."
  ],
  [
   "1 Oct 2026",
   "DB",
   "Tins held, 2,000 a flavor",
   "Four thousand in all, paid for and sitting with the manufacturer. A run uses 1,000 a flavor."
  ],
  [
   "30 Sep 2026",
   "DB",
   "Kitchen rent $2,200 to $2,500",
   "Corrected on the cost confirmation call."
  ],
  [
   "30 Sep 2026",
   "DB",
   "Chocolate unit is 8 pieces at 4g",
   "The supplier quote prices a 6-piece box at 6g, so the built cost stays indicative until the unit he sells is priced."
  ]
 ]
,
 "love": {
 "spec": [
  [
   "Pieces a unit",
   12
  ],
  [
   "Packaging",
   "Cardbox, individual wraps"
  ],
  [
   "Weight a piece",
   "2.5 to 4.5 g"
  ],
  [
   "Shape",
   "Flat cube"
  ]
 ],
 "routes": [
  [
   "MUD",
   "27 mg a piece",
   "1.00",
   "$10,000 a kg",
   "$3.24",
   "The route the source costs. 27 mg across 12 pieces is 0.324 g a unit"
  ],
  [
   "Extract equivalent",
   "167 mg a piece",
   "0.041",
   "$6,000 a kg",
   "$12.02",
   "Same gross weight, far lower purity, so it needs 6x the mass"
  ],
  [
   "Fruit only",
   "167 mg a piece",
   "0.008",
   "$800 a kg",
   "$1.60",
   "Cheapest a gram and the weakest. Delivers about 1.3 mg against MUD's 27"
  ]
 ],
 "unquoted": [
  "12-piece cardbox and individual wraps",
  "A manufacturer quote for a 12-piece run",
  "Minimum order quantities",
  "Production timelines"
 ],
 "note": "Love's actives are $3.24 a unit on the MUD route, against $2.31 for a gummy tin. The $10,000 a kilo figure reads prohibitive and isn't: the dose is 27 mg a piece. What gates the reorder is a quote for a 12-piece cardbox run, which nobody has. Borrowing the tin's $8.16 would be wrong on piece count, packaging and actives."
},
 "lineup": [
 [
  "Mint milk chocolate",
  "Chocolate",
  "Live",
  "Kitchen",
  "$10.54 to $11.65"
 ],
 [
  "Toffee milk chocolate",
  "Chocolate",
  "Live",
  "Kitchen",
  "$10.54 to $11.65"
 ],
 [
  "Dubai milk chocolate",
  "Chocolate",
  "Live",
  "Kitchen",
  "$10.54 to $11.65"
 ],
 [
  "Espresso dark chocolate",
  "Chocolate",
  "Live",
  "Kitchen",
  "$10.54 to $11.65"
 ],
 [
  "Strawberry Mango gummies",
  "Gummies",
  "Live",
  "Manufacturer",
  "$8.16 to $8.64"
 ],
 [
  "Blue Raspberry gummies",
  "Gummies",
  "Live",
  "Manufacturer",
  "$8.16 to $8.64"
 ],
 [
  "Love gummies",
  "Gummies",
  "Reorder gated on cash flow",
  "Manufacturer",
  "Actives $3.24. Build unquoted"
 ],
 [
  "Wild Cherry gummies",
  "Gummies",
  "Retired",
  "Manufacturer",
  "$8.16, for remaining sales"
 ],
 [
  "Sea Salt dark chocolate",
  "Chocolate",
  "Tested, waiting on stock",
  "Kitchen",
  "$10.54 to $11.65"
 ],
 [
  "Microdose capsules",
  "Capsules",
  "Never produced",
  "Manufacturer",
  "$9.67 to $10.37"
 ]
]
};
