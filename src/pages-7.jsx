// pages-7.jsx, the cost layer. Costs & Settings, Production, Suppliers and the 3PL card.
// Folded in from the packaging and manufacturing workbook, which this retires.

// ---------------------------------------------------------------- cell formatting
function costCell(v, f) {
  if (v === null || v === undefined || v === "") return <span style={{ color:"var(--ink-mute)" }}>-</span>;
  if (typeof v !== "number") return v;
  if (f === "pct")  return <span className="mono">{(v*100).toFixed(1)}%</span>;
  if (f === "usd4") return <span className="mono">${v.toFixed(4)}</span>;
  if (f === "usd0") return <span className="mono">${v.toLocaleString("en-US",{maximumFractionDigits:0})}</span>;
  if (f === "usd")  return <span className="mono">${v.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})}</span>;
  return <span className="mono">{v.toLocaleString("en-US",{maximumFractionDigits:3})}</span>;
}

// one extracted workbook block, rendered as a labelled table with its notes
function Sheet({ block, editable }) {
  if (block.kind === "note") { return <div style={{ marginBottom:14 }}><Note tone="info">{block.text}</Note></div>; }
  const head = block.head || [];
  const fmts = block.fmt || [];
  const wide = head.length > 1 ? head.length - 1 : 0;
  return (
    <div style={{ marginBottom:26 }}>
      {block.label && <SecLabel right={editable ? "Editable" : null}>{block.label}</SecLabel>}
      <Card pad={0}>
        <div className="scroll-x"><table className="tbl">
          {head.length > 0 && (
            <thead><tr>{head.map((h,i)=>(
              <th key={i} style={{ textAlign: i===0 || i===head.length-1 ? "left" : "right" }}>{h || ""}</th>
            ))}</tr></thead>
          )}
          <tbody>{block.rows.map((r,ri)=>(
            <tr key={ri}>{r.c.map((v,ci)=>(
              <td key={ci}
                className={ci>0 && ci<r.c.length-1 ? "num" : ""}
                style={{
                  textAlign: ci===0 || ci===r.c.length-1 ? "left" : "right",
                  fontWeight: r.b && ci===0 ? 650 : (r.b ? 600 : 400),
                  color: ci===r.c.length-1 && head.length>1 && typeof v==="string"
                    ? "var(--ink-mute)" : (r.b ? "var(--ink)" : undefined),
                  fontSize: ci===r.c.length-1 && head.length>1 && typeof v==="string" ? 11.5 : undefined,
                  background: r.b ? "var(--surface-3)" : undefined,
                }}>
                {costCell(v, fmts[ci])}
              </td>
            ))}</tr>
          ))}</tbody>
        </table></div>
      </Card>
      {block.notes && block.notes.length > 0 && (
        <div style={{ marginTop:11, display:"grid", gap:9 }}>
          {block.notes.map((n,i)=><Note key={i} tone="info">{n}</Note>)}
        </div>
      )}
    </div>
  );
}

function SheetBlocks({ name, editable }) {
  const s = COST.sheets[name];
  if (!s) return null;
  return <div>{s.blocks.map((b,i)=><Sheet key={i} block={b} editable={editable}/>)}</div>;
}

// ---------------------------------------------------------------- Costs & Settings
function Costs() {
  return (
    <div className="page-in">
      <PageHead title="Costs & settings" sub="What every unit costs to make, and the rates every cost figure is built from."
        meta={"As of " + COST.asOf + ". One editable copy of every rate, and every cost figure calculated from it."} />
      <G c={4} style={{ marginBottom:20 }} name="kpi8">
        {COST.kpi.map(k=><KPI key={k.k} label={k.label} value={k.value} sub={k.sub} tone={k.tone} help={k.help}/>)}
      </G>
      <div style={{ display:"grid", gap:12, marginBottom:24 }}>
        <Note tone="accent" icon="i">
          Cost changes belong here, on the Rates tab. It's the only editable copy, and every figure on this page
          and on Production recalculates from it. The workbook that used to hold these is retired, so there's one
          source rather than two drifting apart.
        </Note>
        <Note tone="warn" icon="!">
          Chocolate is eight pieces, confirmed by DB. The supplier quote priced six, so the actives and wrapper
          lines are repriced here and a box costs about $1.40 more than the quote implied. Both recipes are
          costed: extract-only at $11.65 and the hybrid with fruit at $10.54. Margin on four of six live products
          drops about two points against the old figure.
        </Note>
      </div>
      <SecLabel>The lineup, and what each one costs</SecLabel>
      <Card pad={0} style={{ marginBottom:26 }}>
        <div className="scroll-x"><table className="tbl">
          <thead><tr><th>Product</th><th>Category</th><th>Status</th><th>Made by</th><th>Cost a unit</th></tr></thead>
          <tbody>{COST.lineup.map(r=>(
            <tr key={r[0]}>
              <td style={{ fontWeight:600 }}>{r[0]}</td>
              <td style={{ color:"var(--ink-soft)" }}>{r[1]}</td>
              <td><Badge tone={r[2]==="Live" ? "good" : r[2]==="Retired" ? "mute"
                : r[2].indexOf("gated")>-1 ? "warn" : "info"}>{r[2]}</Badge></td>
              <td style={{ color:"var(--ink-soft)", fontSize:12 }}>{r[3]}</td>
              <td className="mono" style={{ fontSize:12 }}>{r[4]}</td>
            </tr>))}</tbody>
        </table></div>
      </Card>
      <SheetBlocks name="Cost per unit" />
      <SecLabel help="Derived from the source's own dose and purity figures.">Love gummies, what's known and what isn't</SecLabel>
      <G c={2} gap={14} style={{ marginBottom:14 }} name="two">
        <Card>
          <div style={{ fontSize:11.5, color:"var(--ink-mute)", marginBottom:10 }}>The unit</div>
          <table className="tbl"><tbody>{COST.love.spec.map(s=>(
            <tr key={s[0]}><td style={{ fontWeight:600 }}>{s[0]}</td>
              <td className="num" style={{ textAlign:"right" }}>{s[1]}</td></tr>
          ))}</tbody></table>
        </Card>
        <Card>
          <div style={{ fontSize:11.5, color:"var(--ink-mute)", marginBottom:10 }}>Still unquoted</div>
          <ul style={{ listStyle:"none", display:"grid", gap:8 }}>
            {COST.love.unquoted.map(u=>(
              <li key={u} style={{ display:"flex", gap:8, fontSize:12.5, color:"var(--ink-soft)" }}>
                <span style={{ color:"var(--warn)", fontWeight:700 }}>·</span>{u}</li>
            ))}
          </ul>
        </Card>
      </G>
      <Card pad={0} style={{ marginBottom:12 }}>
        <div className="scroll-x"><table className="tbl">
          <thead><tr><th>Actives route</th><th>Dose</th><th>Purity</th><th>Price</th><th>Cost a unit</th><th>Note</th></tr></thead>
          <tbody>{COST.love.routes.map(r=>(
            <tr key={r[0]}>
              <td style={{ fontWeight:600 }}>{r[0]}</td>
              <td className="num" style={{ textAlign:"right" }}>{r[1]}</td>
              <td className="num" style={{ textAlign:"right" }}>{r[2]}</td>
              <td className="num" style={{ textAlign:"right" }}>{r[3]}</td>
              <td className="num" style={{ textAlign:"right", fontWeight:650 }}>{r[4]}</td>
              <td style={{ color:"var(--ink-mute)", fontSize:11.5 }}>{r[5]}</td>
            </tr>))}</tbody>
        </table></div>
      </Card>
      <Note tone="warn" icon="!">{COST.love.note}</Note>
      <div style={{ height:26 }} />
      <SecLabel>What the fold-in found</SecLabel>
      <Card pad={0} style={{ marginBottom:14 }}>
        <div className="scroll-x"><table className="tbl">
          <thead><tr><th>What it found</th><th>What it means</th><th>What was done</th></tr></thead>
          <tbody>{COST.finds.map((f,i)=>(
            <tr key={i}><td style={{ fontWeight:600, maxWidth:240 }}>{f[0]}</td>
              <td style={{ color:"var(--ink-soft)", fontSize:12 }}>{f[1]}</td>
              <td style={{ color:"var(--ink-mute)", fontSize:11.5 }}>{f[2]}</td></tr>
          ))}</tbody>
        </table></div>
      </Card>
      <SecLabel>Still open</SecLabel>
      <Card pad={0}>
        <div className="scroll-x"><table className="tbl">
          <thead><tr><th>Question</th><th>Who answers it</th><th>Why it matters</th></tr></thead>
          <tbody>{COST.opens.map((o,i)=>(
            <tr key={i}><td style={{ fontWeight:600 }}>{o[0]}</td>
              <td><Badge tone="warn">{o[1]}</Badge></td>
              <td style={{ color:"var(--ink-mute)", fontSize:11.5 }}>{o[2]}</td></tr>
          ))}</tbody>
        </table></div>
      </Card>
      <div style={{ height:16 }} />
      <Note tone="info" icon="i">{COST.source}</Note>
    </div>
  );
}

function CostRates() {
  return (
    <div className="page-in">
      <PageHead title="Rates" sub="Every price, spec and rate the cost figures are built from. This is the only tab anyone types in."
        meta="Change a rate here and every cost on this page, on Production and on the Boardroom recalculates." />
      <Note tone="accent" icon="i">
        In the live build these are form fields, and every change writes a row on the change log with who made it
        and when. The dashboard won't read later edits to any spreadsheet, so a rate that changes has to change here.
      </Note>
      <div style={{ height:22 }} />
      <SheetBlocks name="Inputs" editable />
    </div>
  );
}

function CostFormulation() {
  return (
    <div className="page-in">
      <PageHead title="Formulation" sub="How much extract and fruit go into a piece, worked back from the dose."
        meta="Change the dose target or a potency on Rates and these move." />
      <SheetBlocks name="Formulation" />
      <Note tone="warn" icon="!">
        One thing the formulation can't settle. The supplier sheet labels a chocolate box 6g and DB's spec says 4g,
        but a 6-piece box carries about 0.70 g of extract, so the label's unit isn't grams of extract and the two
        don't reconcile. Piece count is confirmed at eight and priced. The dose label is still open.
      </Note>
    </div>
  );
}

function CostLadder() {
  return (
    <div className="page-in">
      <PageHead title="Volume ladder" sub="What an order of each size buys, what it costs, and what it's worth at retail."
        meta="Tins and boxes are shown for the whole run and per flavor, because the original sheet mixed the two." />
      <SheetBlocks name="Volume and batch" />
    </div>
  );
}

function CostLog() {
  return (
    <div className="page-in">
      <PageHead title="Change log" sub="Every cost change, who made it and when."
        meta="Seeded with the fold-in. In the live build every edit on the Rates tab writes a row here." />
      <Card pad={0}>
        <div className="scroll-x"><table className="tbl">
          <thead><tr><th>Date</th><th>Who</th><th>What changed</th><th>Why</th></tr></thead>
          <tbody>{COST.changeLog.map((c,i)=>(
            <tr key={i}>
              <td className="mono" style={{ fontSize:12, whiteSpace:"nowrap" }}>{c[0]}</td>
              <td><Badge tone={c[1]==="DB" ? "accent" : "info"}>{c[1]}</Badge></td>
              <td style={{ fontWeight:600 }}>{c[2]}</td>
              <td style={{ color:"var(--ink-mute)", fontSize:11.5 }}>{c[3]}</td>
            </tr>))}</tbody>
        </table></div>
      </Card>
      <div style={{ height:16 }} />
      <Note tone="info" icon="i">
        A cost with no change log is a cost nobody can audit. This is the row that answers why a margin figure moved
        between two reports.
      </Note>
    </div>
  );
}

// ---------------------------------------------------------------- Production
function kitchenEmpty() {
  return <Note tone="warn" icon="!">{COST.kitchen.empty}</Note>;
}

function Production() {
  const k = COST.kitchen;
  const rollup = COST.sheets["Cost per unit"].blocks.find(b => b.label && b.label.indexOf("kitchen actually") > -1);
  return (
    <div className="page-in">
      <PageHead title="Production" sub="Every chocolate batch the kitchen runs, and what it actually cost."
        meta={k.why} />
      <G c={4} style={{ marginBottom:20 }}>
        <KPI label="Runs logged" value="0" tone="bad" sub="of 3 needed per flavor" help="One run is an anecdote. Three is a number." />
        <KPI label="Units good" value="0" tone="mute" sub="nothing logged yet" />
        <KPI label="Overall yield" value="Not measured" tone="mute" sub="good units over units started" />
        <KPI label="Cost a good unit" value="Not measured" tone="mute" sub="includes kitchen overhead" help="Ingredients, actives, labor and the $1,400 overhead allocated per run." />
      </G>
      {kitchenEmpty()}
      <div style={{ height:22 }} />
      <SecLabel>The four rules</SecLabel>
      <G c={4} gap={12} style={{ marginBottom:26 }}>
        {k.rules.map(r=>(
          <Card key={r[0]}>
            <div style={{ fontWeight:650, fontSize:13, marginBottom:6 }}>{r[0]}</div>
            <p style={{ fontSize:12, color:"var(--ink-soft)", lineHeight:1.5 }}>{r[1]}</p>
          </Card>
        ))}
      </G>
      <SecLabel right="One row per batch">Run log</SecLabel>
      <Card pad={0} style={{ marginBottom:12 }}>
        <div className="scroll-x"><table className="tbl">
          <thead><tr>{k.runCols.map(c=><th key={c} style={{ whiteSpace:"nowrap" }}>{c}</th>)}</tr></thead>
          <tbody><tr><td colSpan={k.runCols.length}
            style={{ textAlign:"center", padding:"30px 14px", color:"var(--ink-mute)", fontSize:12.5 }}>
            No runs logged. The first entry is the first real cost per unit this business has had.
          </td></tr></tbody>
        </table></div>
      </Card>
      <Note tone="info" icon="i">
        Yield, ingredient cost, active cost, labor cost, overhead, total and cost a good unit all calculate.
        Ingredient cost pulls from the purchase log by run ID, and it skips any line categorized as an active
        ingredient so the actives aren't counted twice.
      </Note>
      <div style={{ height:26 }} />
      {rollup && <Sheet block={rollup} />}
    </div>
  );
}

function ProdPurchases() {
  const k = COST.kitchen;
  return (
    <div className="page-in">
      <PageHead title="Purchases" sub="Every ingredient and packaging purchase the kitchen makes."
        meta="Log it the day you buy it. Split one purchase across lines if it covers more than one run." />
      <G c={4} style={{ marginBottom:20 }}>
        <KPI label="Purchases logged" value="0" tone="mute" />
        <KPI label="Allocated to a run" value="$0" tone="mute" sub="tied to a batch that happened" />
        <KPI label="Unallocated" value="$0" tone="mute" sub="chase anything above zero" help="Money spent that nothing came out of yet." />
        <KPI label="Missing a receipt" value="0" tone="mute" sub="should always be zero" />
      </G>
      <SecLabel right="One row per purchase">Purchase log</SecLabel>
      <Card pad={0} style={{ marginBottom:14 }}>
        <div className="scroll-x"><table className="tbl">
          <thead><tr>{k.purchaseCols.map(c=><th key={c} style={{ whiteSpace:"nowrap" }}>{c}</th>)}</tr></thead>
          <tbody><tr><td colSpan={k.purchaseCols.length}
            style={{ textAlign:"center", padding:"30px 14px", color:"var(--ink-mute)", fontSize:12.5 }}>
            Nothing logged. A purchase with no run ID shows up as unallocated on Reconciliation.
          </td></tr></tbody>
        </table></div>
      </Card>
      <SecLabel>Categories</SecLabel>
      <Card style={{ marginBottom:14 }}>
        <div style={{ display:"flex", gap:8, flexWrap:"wrap" }}>
          {k.categories.map(c=><Badge key={c} tone={c==="Active ingredient" ? "violet" : "mute"}>{c}</Badge>)}
        </div>
      </Card>
      <Note tone="info" icon="i">
        Active ingredient is its own category on purpose. The run log costs actives from the pounds entered on the
        run line, so an active purchase logged here is left out of ingredient cost rather than counted twice.
      </Note>
    </div>
  );
}

function ProdRecon() {
  return (
    <div className="page-in">
      <PageHead title="Reconciliation" sub="What the kitchen spent against what came out of it."
        meta="The tab that answers an invoice arriving two months late." />
      <Card pad={0} style={{ marginBottom:16 }}>
        <div className="scroll-x"><table className="tbl">
          <thead><tr><th>Measure</th><th style={{ textAlign:"right" }}>Value</th><th>What it covers</th></tr></thead>
          <tbody>{COST.kitchen.recon.map(r=>(
            <tr key={r[0]}>
              <td style={{ fontWeight:600 }}>{r[0]}</td>
              <td className="num" style={{ textAlign:"right" }}>{r[1]}</td>
              <td style={{ color:"var(--ink-mute)", fontSize:11.5 }}>{r[2]}</td>
            </tr>))}</tbody>
        </table></div>
      </Card>
      {kitchenEmpty()}
      <div style={{ height:22 }} />
      <SecLabel>What this answers</SecLabel>
      <Card>
        <ul style={{ listStyle:"none", display:"grid", gap:10 }}>
          {["An invoice arrived. Which runs did it pay for, and did those runs happen?",
            "How many units came out of the last thousand dollars of ingredients?",
            "What share of what the kitchen makes never reaches a customer?",
            "Is the cost a bar going up or down, and since when?",
            "How much did the kitchen spend that nothing came out of?"].map(q=>(
            <li key={q} style={{ display:"flex", gap:9, fontSize:12.5, color:"var(--ink-soft)" }}>
              <span style={{ color:"var(--accent)", fontWeight:700 }}>·</span>{q}</li>
          ))}
        </ul>
      </Card>
    </div>
  );
}

// ---------------------------------------------------------------- Suppliers, rebuilt
function Suppliers2() {
  return (
    <div className="page-in">
      <PageHead title="Suppliers" sub="Who you depend on, on what terms, and how exposed that makes you."
        meta="Rebuilt from the deduplicated materials list. The old workbook carried two copies that disagreed." />
      <G c={4} style={{ marginBottom:22 }}>
        <KPI label="Longest lead" value="6 to 8 weeks" tone="bad" sub="boxes, wrappers and tins"
          help="The longest lead in the business, so it sets the chocolate reorder point." />
        <KPI label="Gummy production" value="3 weeks" tone="warn" sub="confirmed by DB, 1 Oct"
          help="The supplier workbook said two weeks and was out of date." />
        <KPI label="Suppliers to identify" value="7" tone="warn" sub="all overseas packaging"
          help="Every box, wrapper and tin line reads to identify. One supplier failing has no second source." />
        <KPI label="Manufacturer balance" value="$0" tone="good" sub="every invoice matched to a wire" />
      </G>
      <Note tone="warn" icon="!">
        Most kitchen inputs are bought at consumer retail, from Restaurant Depot, Costco, Amazon and Whole Foods.
        That works at about 400 bars a month and it doesn't at target volume. Cocoa butter alone runs two to three
        times wholesale.
      </Note>
      <div style={{ height:22 }} />
      <SheetBlocks name="Materials" />
    </div>
  );
}

function SupLedger() {
  return (
    <div className="page-in">
      <PageHead title="Manufacturer ledger" sub="Every invoice matched to the wire that paid it."
        meta="Balances to zero today. The original sheet still flagged two invoices as unpaid." />
      <G c={4} style={{ marginBottom:22 }}>
        <KPI label="Invoiced in total" value="$26,610" tone="ink" />
        <KPI label="Paid in total" value="$26,610" tone="good" />
        <KPI label="Balance owing" value="$0" tone="good" sub="nothing outstanding" />
        <KPI label="Open claim" value="$159" tone="warn" sub="4,000 remedial wrappers"
          help="Against it you owe $150 of freight, so the two roughly cancel." />
      </G>
      <SheetBlocks name="Ledger" />
    </div>
  );
}

// ---------------------------------------------------------------- 3PL rate card
function TPLRates() {
  return (
    <div className="page-in">
      <PageHead title="3PL rates" sub="Pick, pack, ship and storage, as quoted."
        meta="The base is waived once the services billed in a month exceed it." />
      <G c={4} style={{ marginBottom:22 }}>
        <KPI label="Billed, July" value="$3,483.61" tone="ink" sub="across 348 orders" />
        <KPI label="Cost an order, all in" value="$10.01" tone="warn" sub="base, pick, pack, storage, materials" />
        <KPI label="An order needing ice" value="$12.30 to $20" tone="bad" sub="depends on box or mailer"
          help="Medium packing is $10. Whether it takes a mailer at $1.30 or a box at $2 with a $7 liner isn't settled in the rate card." />
        <KPI label="Card surcharge" value="Removed" tone="good" sub="3.1%, off at end of August" />
      </G>
      <Note tone="warn" icon="!">
        The size legend puts every order needing ice into medium, which it defines as bigger than mailer 1 but
        smaller than box 1. That leaves the packing material ambiguous, so an iced order is somewhere between
        $12.30 and $20 before postage. The rate card says the combinations are still to be verified. On chocolate
        in summer that matters more than any of the open unit-cost questions.
      </Note>
      <div style={{ height:22 }} />
      <SheetBlocks name="3PL" />
    </div>
  );
}
