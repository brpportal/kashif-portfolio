import type React from "react";
import Mascot from "../components/Mascot";
import Effects from "../components/Effects";

const d = (n: number) => ({ "--d": n } as React.CSSProperties);
const WA = "https://wa.me/923288862114";
const waGeneric = WA + "?text=Hello!%20I%20want%20a%20website%20for%20my%20business.";
const waFinal = WA + "?text=Hello!%20I%20want%20a%20website%20for%20my%20business.%20Business%20name%3A%20";
const pkg = (name: string, price: string, extra: string) =>
  WA + "?text=Hello!%20I%20am%20interested%20in%20the%20" + name + "%20package%20%28" + price + extra + "%29.%20My%20business%3A%20";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Koclify",
  description: "Websites for small businesses in Pakistan.",
  url: "https://koclify.vercel.app/",
  founder: { "@type": "Person", name: "Kashif Noor" },
  areaServed: "Pakistan",
  telephone: "+92-328-8862114",
  priceRange: "Rs. 9,999 - Rs. 39,999",
};

function Ok() {
  return (
    <svg className="i"><use href="#ok" /></svg>
  );
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true"><defs>
        <symbol id="wa" viewBox="0 0 24 24"><path d="M4 20l1.3-4.2A8 8 0 1112 20a8 8 0 01-3.8-1z" /><path d="M9 8.8c0 3.2 2.800 6 6 6l1-1.300-2-1-.8.700c-1-.4-1.900-1.300-2.300-2.300l.7-.8-1-2z" /></symbol>
        <symbol id="shield" viewBox="0 0 24 24"><path d="M12 3l7 3v5c0 4.500-3 8.200-7 10-4-1.800-7-5.500-7-10V6z" /><path d="M9 12l2.200 2.200L15 10" /></symbol>
        <symbol id="inf" viewBox="0 0 24 24"><path d="M7.500 8C4 8 4 16 7.500 16c4 0 5-8 9-8 3.500 0 3.500 8 0 8-4 0-5-8-9-8z" /></symbol>
        <symbol id="cart" viewBox="0 0 24 24"><path d="M3 4h2.500l2 11h10l2-8H7" /><circle cx="9" cy="19.500" r="1.200" /><circle cx="17" cy="19.500" r="1.200" /></symbol>
        <symbol id="pal" viewBox="0 0 24 24"><path d="M12 3a9 9 0 100 18c1.400 0 2-1 1.500-2-.6-1.200.2-2.500 1.500-2.500H17a4 4 0 004-4c0-5-4-9.500-9-9.500z" /><circle cx="8" cy="11" r="1" /><circle cx="12" cy="7.500" r="1" /><circle cx="16" cy="9" r="1" /></symbol>
        <symbol id="box" viewBox="0 0 24 24"><path d="M3.500 7.500L12 3l8.500 4.500v9L12 21l-8.500-4.500z" /><path d="M3.500 7.500L12 12l8.500-4.500M12 12v9" /></symbol>
        <symbol id="grid" viewBox="0 0 24 24"><rect x="4" y="4" width="7" height="7" rx="2" /><rect x="13" y="4" width="7" height="7" rx="2" /><rect x="4" y="13" width="7" height="7" rx="2" /><rect x="13" y="13" width="7" height="7" rx="2" /></symbol>
        <symbol id="ok" viewBox="0 0 24 24"><path d="M5 12.500l4.500 4.500L19 7.500" /></symbol>
        <symbol id="up" viewBox="0 0 24 24"><path d="M7 17L17 7M8 7h9v9" /></symbol>
        <symbol id="arr" viewBox="0 0 120 60"><path d="M4 8C40 2 90 10 100 46M84 36l16 12 8-18" /></symbol>
      </defs></svg>

      <div className="progress" id="progress"></div>
      <header className="bar" id="bar"><div className="wrap bar-in">
        <a href="#top" className="logo">koclify<i>.</i></a>
        <nav><a href="#projects">Projects</a><a href="#packages">Packages</a><a href="#toolkit">Skills</a><a href="#about">About</a></nav>
        <a className="btn btn-red sm wa" href={waGeneric}>WhatsApp</a>
      </div></header>

      <main id="top">
        <section className="hero">
          <div className="wrap">
            <p className="pill-badge hero-in" style={d(0)}>★ Website Studio — Pakistan</p>
            <h1 className="mark hero-in" style={d(1)} aria-label="Koclify"><b>K</b><b>O</b><b>C</b><b>L</b><b>I</b><b>F</b><b>Y</b></h1>
            <h2 className="headline hero-in" style={d(2)}>Websites that <mark>grow your business</mark></h2>
            <p className="mono hero-in" style={d(2)}>by Kashif Noor</p>
            <p className="lead hero-in" style={d(3)}>A premium website that presents your business at its best and turns visitors into customers — enquiries, bookings or sales, whatever your business needs. Open 24/7.</p>
            <div className="ctas hero-in" style={d(5)}>
              <a className="btn btn-red lg wa" href={waGeneric}><svg className="i"><use href="#wa" /></svg>Chat on WhatsApp</a>
              <a className="btn btn-ink lg" href="#projects">See My Work</a>
            </div>
          </div>
        </section>

        <section className="trust"><div className="wrap trust-g">
          <div className="card tilt reveal"><svg className="i"><use href="#shield" /></svg><p><b>50% advance</b>balance only when your site goes live</p></div>
          <div className="card tilt reveal" style={d(1)}><svg className="i"><use href="#inf" /></svg><p><b>No product limit</b>add as many products as you like</p></div>
          <div className="card tilt reveal" style={d(2)}><svg className="i"><use href="#wa" /></svg><p><b>One-tap contact</b>customers reach you instantly</p></div>
        </div></section>

        <section className="meet-band"><div className="wrap meet-in">
          <Mascot />
          <div className="meet-txt reveal"><p className="kick2">Meet Your Developer</p><h2 className="meet-h">Hi, I&apos;m Kashif Noor</h2><p>Founder of Koclify. You&apos;ll talk directly to me, never a sales team — and I reply on WhatsApp within 24 hours.</p></div>
        </div></section>

        <section className="sec" id="projects"><div className="wrap">
          <p className="num reveal"><b>01</b><span className="mono">Projects</span></p>
          <h2 className="title reveal">Selected Work</h2>
          <div className="feat">
            <div className="card c-red reveal"><span className="tag">Client Project · Live</span><h4>Sparklesbyfarry</h4><p>A complete online store for a cosmetics brand — cart, shades &amp; variants and a full admin panel — everything managed from one simple dashboard.</p><a className="visit" href="https://sparklesbyfarry.vercel.app" target="_blank" rel="noopener">Visit Live Site <span className="arrw">→</span></a></div>
            <div className="card c-sky reveal" style={d(1)}><span className="tag">Own Project · Live</span><h4>Koclify Portfolio</h4><p>This very website — designed and built by me, end to end. The quality you see here is the quality your business gets.</p><p className="yours">You are looking at it right now ✓</p></div>
            <div className="card c-yel reveal" style={d(2)}><span className="tag">Web Tool</span><h4>Caption Studio</h4><p>An online studio for Roman Urdu &amp; Urdu captions — transliteration, karaoke-style highlighting, live mic and SRT/VTT export.</p></div>
            <div className="card c-teal reveal" style={d(3)}><span className="tag">Android App</span><h4>CodeMotion</h4><p>A native Android app that turns code into motion-graphics videos — 26 effects, a pro timeline editor and MP4 export.</p></div>
          </div>
        </div></section>

        <section className="sec alt" id="packages"><div className="wrap">
          <p className="num reveal"><b>02</b><span className="mono">Packages</span></p>
          <h2 className="title reveal">Simple, Honest Pricing</h2>
          <p className="sub reveal">No product limit in any package.</p>
          <h3 className="slab reveal">Without Hosting <small>— one-time, no monthly fee</small></h3>
          <div className="pg p2">
            <article className="card price reveal"><span className="mono">Starter</span><p className="amt">Rs. 9,999</p><p className="note">one-time payment</p>
              <ul><li><Ok />Complete store website</li><li><Ok />Unlimited products</li><li><Ok />One-tap WhatsApp contact</li></ul>
              <a className="btn btn-ink blk wa" href={pkg("Starter", "Rs.%209%2C999", "%20%E2%80%94%20without%20hosting")}>Get This Package</a></article>
            <article className="card price hot reveal" style={d(1)}><span className="burst sm"><span>Recom-<br />mended</span></span><span className="mono">Standard</span><p className="amt">Rs. 19,999</p><p className="note">one-time payment</p>
              <ul><li><Ok />Everything in Starter</li><li><Ok />Shades / variants</li><li><Ok />Advanced admin panel</li><li><Ok />Personal training included</li></ul>
              <a className="btn btn-red blk wa" href={pkg("Standard", "Rs.%2019%2C999", "%20%E2%80%94%20without%20hosting")}>Get This Package</a></article>
          </div>
          <h3 className="slab reveal">With Hosting <small>— hosting &amp; care handled by us</small></h3>
          <div className="pg p3">
            <article className="card price reveal"><span className="mono">Starter</span><p className="amt">Rs. 14,999</p><p className="note">+ Rs. 1,999 / month</p>
              <ul><li><Ok />Complete store website</li><li><Ok />Unlimited products</li><li><Ok />One-tap WhatsApp contact</li><li><Ok />Hosting + ongoing care</li></ul>
              <a className="btn btn-ink blk wa" href={pkg("Starter", "Rs.%2014%2C999%20%2B%20Rs.%201%2C999/month", "%20%E2%80%94%20with%20hosting")}>Get This Package</a></article>
            <article className="card price hot reveal" style={d(1)}><span className="burst sm"><span>Recom-<br />mended</span></span><span className="mono">Standard</span><p className="amt">Rs. 24,999</p><p className="note">+ Rs. 2,999 / month</p>
              <ul><li><Ok />Everything in Starter</li><li><Ok />Shades / variants</li><li><Ok />Advanced admin panel</li><li><Ok />Personal training included</li></ul>
              <a className="btn btn-red blk wa" href={pkg("Standard", "Rs.%2024%2C999%20%2B%20Rs.%202%2C999/month", "%20%E2%80%94%20with%20hosting")}>Get This Package</a></article>
            <article className="card price reveal" style={d(2)}><span className="mono">Premium</span><p className="amt">Rs. 39,999</p><p className="note">+ Rs. 4,999 / month</p>
              <ul><li><Ok />Everything in Standard</li><li><Ok />Fully custom design</li><li><Ok />Priority support</li></ul>
              <a className="btn btn-ink blk wa" href={pkg("Premium", "Rs.%2039%2C999%20%2B%20Rs.%204%2C999/month", "%20%E2%80%94%20with%20hosting")}>Get This Package</a></article>
          </div>
          <p className="stamp reveal"><svg className="i"><use href="#shield" /></svg>Work begins with 50% advance — the rest only when your website is live.</p>
        </div></section>

        <section className="sec alt" id="toolkit"><div className="wrap">
          <p className="num reveal"><b>03</b><span className="mono">Skills &amp; capabilities</span></p>
          <h2 className="title reveal">Skills &amp; Tools</h2>
          <div className="keys">
            <span className="key k1 reveal">HTML</span><span className="key k2 reveal" style={d(1)}>CSS</span><span className="key k3 reveal" style={d(2)}>JavaScript</span><span className="key k4 reveal" style={d(3)}>React</span>
            <span className="key k4 reveal">Next.js</span><span className="key k3 reveal" style={d(3)}>GitHub</span>
          </div>
          <div className="chips reveal"><span>Store Websites</span><span>Admin Panels</span><span>Contact Forms</span><span>Product Variants</span><span>Website Care</span></div>
        </div></section>

        <section className="sec" id="process"><div className="wrap">
          <p className="num reveal"><b>04</b><span className="mono">Process</span></p>
          <h2 className="title reveal">Just 4 Steps</h2>
          <div className="steps">
            <div className="card step reveal"><b>1</b><h4>Say Hello</h4><p>Tell me about your business on WhatsApp — I will recommend the right package, honestly.</p></div>
            <div className="card step reveal" style={d(1)}><b>2</b><h4>50% Advance</h4><p>Once the package is final, 50% advance — and work begins.</p></div>
            <div className="card step reveal" style={d(2)}><b>3</b><h4>Your Website Is Built</h4><p>Your complete website, with your products, colors and brand.</p></div>
            <div className="card step reveal" style={d(3)}><b>4</b><h4>Launch + Training</h4><p>Your site goes live, you pay the balance — and I teach you how to run it.</p></div>
          </div>
        </div></section>

        <section className="sec" id="courses"><div className="wrap">
          <p className="num reveal"><b>05</b><span className="mono">Courses</span></p>
          <div className="soon reveal">
            <span className="burst"><span>Coming<br />Soon</span></span>
            <h2 className="title">Koclify Courses</h2>
            <p className="slab-p">Learn web development — and earn from it. Coming soon.</p>
          </div>
        </div></section>

        <section className="sec alt" id="about"><div className="wrap about">
          <p className="num reveal"><b>06</b><span className="mono">About</span></p>
          <h2 className="title reveal">Hello, I&apos;m Kashif Noor</h2> <span className="pill reveal">Based in Pakistan</span>
          <p className="sub reveal">I&apos;m a website developer and a Computer Systems Engineering student at UET Peshawar. My one focus: <b>bringing Pakistan&apos;s small businesses online.</b></p>
          <p className="sub reveal">I build every website myself — no middlemen, you talk directly to the person building your site. What I promise is what you get: honest pricing, on-time work, and support even after launch.</p>
        </div></section>

        <section className="sec final"><div className="wrap">
          <p className="num reveal"><b>07</b><span className="mono">Let&apos;s talk</span></p>
          <h2 className="title reveal">Your business can be online 24/7 too</h2>
          <p className="sub reveal">Just send these 3 things: <b>1)</b> your business name <b>2)</b> what you sell <b>3)</b> the package you like — and I&apos;ll reply with the next steps.</p>
          <a className="btn btn-red xl wa reveal" href={waFinal}><svg className="i"><use href="#wa" /></svg>Chat on WhatsApp</a>
        </div></section>
      </main>

      <footer className="foot"><p>© 2026 Koclify · Kashif Noor · Pakistan</p></footer>
      <a className="fab wa" href={WA} aria-label="WhatsApp"><svg className="i"><use href="#wa" /></svg></a>
      <Effects />
    </>
  );
}
