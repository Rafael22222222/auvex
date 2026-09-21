import { Reveal } from "@/components/reveal";

const primaryOffer = [
  "Mobile-first product catalogue",
  "Product-specific WhatsApp enquiry buttons",
  "Fast, premium storefront without a full e-commerce build",
  "Clear categories, search and contact actions",
  "Ready to expand into payments, inventory or automation"
];

const capabilities = [
  ["Web Development","Conversion-focused websites and digital storefronts built to make your business easier to trust and contact."],
  ["AI & Automation","Lead capture, WhatsApp follow-up, reminders and internal workflows that reduce missed opportunities."],
  ["App Development","Focused web and mobile products for businesses that have outgrown spreadsheets and manual processes."],
  ["Brand & Motion","Identity, motion graphics and campaign visuals that make digital products feel intentional, not generic."]
];

const process = [
  ["01","Diagnose","We identify the customer journey, bottlenecks and the smallest useful solution."],
  ["02","Design","We shape the information, interface and conversion flow around real business actions."],
  ["03","Build","We develop, test and connect the system to the tools your business already uses."],
  ["04","Launch","We deploy, hand over and refine based on what customers actually do."],
];

export default function Home() {
  return (
    <main>
      <header className="nav shell">
        <a className="brand" href="#top">AUVEX<span>.</span></a>
        <nav aria-label="Primary">
          <a href="#offer">Offer</a><a href="#work">Work</a><a href="#services">Capabilities</a><a href="#about">About</a>
        </nav>
        <a className="nav-cta" href="#contact">Start a project</a>
      </header>

      <section className="hero shell" id="top">
        <div className="hero-grid" />
        <div className="hero-glow" />
        <Reveal className="hero-copy">
          <div className="eyebrow">DIGITAL SYSTEMS FOR AMBITIOUS BUSINESSES</div>
          <h1>Make your business easier to <em>find, trust and buy from.</em></h1>
          <p className="lede">Auvex builds polished digital storefronts, websites and automation systems for businesses that are ready to stop losing enquiries to friction and manual work.</p>
          <div className="actions">
            <a className="button" href="#offer">See the starter offer</a>
            <a className="text-link" href="#work">View concept work ↗</a>
          </div>
        </Reveal>
        <div className="hero-card" aria-label="Auvex service summary">
          <span>START HERE</span>
          <strong>Catalogue & Enquiry Setup</strong>
          <p>A focused first system for retailers, dealers and product businesses that need customers to browse and enquire without confusion.</p>
          <div className="mini-rule" />
          <small>Built to expand later — not a dead-end template.</small>
        </div>
      </section>

      <section className="signal-strip" aria-label="Capabilities">
        <div>STRATEGY</div><div>DESIGN</div><div>DEVELOPMENT</div><div>AI</div><div>AUTOMATION</div><div>MOTION</div>
      </section>

      <section className="section shell" id="offer">
        <Reveal>
          <div className="section-kicker">THE STARTER OFFER</div>
          <div className="split-heading">
            <h2>A useful first project.<br/><em>Not a vague “digital transformation.”</em></h2>
            <p>Many local product businesses do not need a complicated app first. They need a clean way for customers to see what they sell, understand the options and contact them about a specific product.</p>
          </div>
        </Reveal>
        <div className="offer-grid">
          <Reveal className="glass offer-card">
            <div className="offer-label">Catalogue & Enquiry Setup</div>
            <h3>A premium online catalogue connected to the conversations that close sales.</h3>
            <ul>{primaryOffer.map(item=><li key={item}>{item}</li>)}</ul>
            <a className="button light" href="#contact">Discuss this setup</a>
          </Reveal>
          <Reveal className="demo-window">
            <div className="window-bar"><i/><i/><i/><span>CONCEPT DEMO</span></div>
            <div className="demo-body">
              <div className="demo-nav"><b>Maison</b><span>New · Bags · Shoes</span></div>
              <div className="demo-product">
                <div className="product-art"><div className="orb"/></div>
                <div><small>NEW ARRIVAL</small><h4>Obsidian Series 01</h4><p>Product details, variants and a direct product-specific enquiry path.</p><button>Enquire on WhatsApp ↗</button></div>
              </div>
            </div>
            <p className="caption">Concept project — shown to demonstrate the experience, not presented as client work.</p>
          </Reveal>
        </div>
      </section>

      <section className="section work-section" id="work">
        <div className="shell">
          <Reveal>
            <div className="section-kicker">SELECTED CONCEPTS</div>
            <div className="split-heading"><h2>Proof of thinking before<br/><em>proof of scale.</em></h2><p>Until Auvex has enough real client case studies, concept work is labelled clearly. The goal is to show how we think without inventing clients, metrics or testimonials.</p></div>
          </Reveal>
          <div className="work-grid">
            <Reveal className="project project-a"><span>CONCEPT PROJECT · COMMERCE</span><h3>Digital catalogue system</h3><p>Designed around fast product discovery and low-friction enquiry.</p><div className="project-visual visual-a"/></Reveal>
            <Reveal className="project project-b"><span>CONCEPT PROJECT · AUTOMATION</span><h3>Lead response workflow</h3><p>Capture an enquiry, qualify it, route it and trigger the right follow-up.</p><div className="project-visual visual-b"><div className="node n1">Lead</div><div className="node n2">Qualify</div><div className="node n3">Follow up</div></div></Reveal>
          </div>
        </div>
      </section>

      <section className="section shell" id="services">
        <Reveal>
          <div className="section-kicker">EXPANSION CAPABILITIES</div>
          <div className="split-heading"><h2>Start focused.<br/><em>Expand when the problem demands it.</em></h2><p>Auvex can grow the initial system into a broader digital stack instead of forcing every service into the first sale.</p></div>
        </Reveal>
        <div className="cap-grid">
          {capabilities.map(([title,desc],i)=><Reveal className="cap-card" key={title}><span>0{i+1}</span><h3>{title}</h3><p>{desc}</p></Reveal>)}
        </div>
      </section>

      <section className="automation">
        <div className="shell automation-grid">
          <Reveal>
            <div className="section-kicker">AI & AUTOMATION</div>
            <h2>Smarter operations.<br/><em>Fewer missed leads.</em></h2>
            <p>Automation is useful when it removes a real bottleneck: slow replies, forgotten follow-ups, scattered customer information or repetitive admin.</p>
          </Reveal>
          <Reveal className="flow">
            <div><b>01</b><span>Customer enquiry arrives</span></div>
            <div><b>02</b><span>Details captured and organised</span></div>
            <div><b>03</b><span>Lead routed or qualified</span></div>
            <div><b>04</b><span>Follow-up triggered automatically</span></div>
          </Reveal>
        </div>
      </section>

      <section className="section shell" id="about">
        <Reveal>
          <div className="section-kicker">WHY AUVEX</div>
          <div className="about-grid">
            <h2>Founder-led.<br/><em>Built around outcomes.</em></h2>
            <div><p>Auvex is an independent digital studio focused on building practical systems for businesses — not selling technology for its own sake.</p><p>The work starts with a business problem, then uses design, software, AI or automation only where they create a clearer customer experience or a better operating process.</p><p className="fine">Early-stage studio. Concept work is labelled. Client claims are added only when they are real.</p></div>
          </div>
        </Reveal>
      </section>

      <section className="section shell process">
        <Reveal><div className="section-kicker">HOW WE WORK</div><h2>Small enough to move fast.<br/><em>Structured enough to build properly.</em></h2></Reveal>
        <div className="process-grid">{process.map(([num,title,desc])=><Reveal className="step" key={num}><span>{num}</span><h3>{title}</h3><p>{desc}</p></Reveal>)}</div>
      </section>

      <section className="cta-section" id="contact">
        <div className="shell cta-grid">
          <Reveal><div className="section-kicker dark">START A CONVERSATION</div><h2>Your business does not need “more tech.”<br/><em>It needs the right system.</em></h2></Reveal>
          <Reveal className="cta-copy"><p>Tell Auvex what customers currently struggle to do — browse products, contact you, book, follow up, order or get a response. That is where we start.</p><a className="button dark-button" href="mailto:hello@auvex.com?subject=Auvex%20Project%20Enquiry">Email Auvex</a><p className="fine dark-fine">Replace this email with the final business email before launch.</p></Reveal>
        </div>
      </section>

      <footer className="footer shell"><a className="brand" href="#top">AUVEX<span>.</span></a><p>Design · Development · AI · Automation</p><div><a href="/privacy">Privacy</a><span>© {new Date().getFullYear()} Auvex</span></div></footer>
    </main>
  );
}