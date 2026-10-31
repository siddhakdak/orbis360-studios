'use client';

import Image from 'next/image';
import { useState } from 'react';

const PHONE = '918387967670';
const cities = ['Udaipur','Jaipur','Jodhpur','Kota','Ajmer','Bikaner','Jaisalmer','Pushkar','Mount Abu','Bhilwara','Alwar','Sikar','Bharatpur','Sri Ganganagar','Pali','Barmer','Chittorgarh','Rajsamand','Sawai Madhopur','Tonk','Kishangarh','Beawar','Dungarpur','Banswara','Jhunjhunu','Churu','Hanumangarh','Dausa','Nagaur','Karauli','Jhalawar','Bundi','Pratapgarh','Fatehpur','Neemrana'];
const services = [
  {n:'01',icon:'⌂',title:'Cafés & Restaurants',desc:'Showcase your ambience, seating, interiors and signature spaces before guests arrive.'},
  {n:'02',icon:'▤',title:'Hotels & Resorts',desc:'Give travellers a confident preview of rooms, amenities, lobbies, pools and property grounds.'},
  {n:'03',icon:'✧',title:'Banquets & Wedding Venues',desc:'Help couples and event planners explore halls, décor possibilities and venue layouts remotely.'},
  {n:'04',icon:'⌖',title:'Real Estate & Commercial',desc:'Create immersive walkthroughs for homes, offices, showrooms, retail and commercial spaces.'},
  {n:'05',icon:'▦',title:'Government & Public Buildings',desc:'Present public spaces, facilities, heritage locations and institutional buildings digitally.'},
  {n:'06',icon:'◉',title:'Events & Special Occasions',desc:'Capture the atmosphere of exhibitions, launches, celebrations and important occasions.'},
];
const faqs = [
  ['What is a 360° virtual tour?', 'A 360° virtual tour is an interactive digital experience that lets viewers look around a real location in every direction using a phone, tablet or computer.'],
  ['Which businesses can benefit from a virtual tour?', 'Cafés, restaurants, hotels, resorts, wedding venues, real estate projects, retail stores, public buildings and event spaces can all use virtual tours to help visitors understand a place before visiting.'],
  ['Do you provide 360° tour services outside Udaipur?', 'Yes. Orbis 360 Studios is based in Udaipur and accepts projects across Rajasthan, subject to scheduling and project requirements.'],
  ['Can I add the virtual tour to my website or Google listing?', 'Tours can often be embedded on a website, and some formats may be suitable for eligible Google Maps or Business Profile publishing. The available publishing method depends on the tour platform and account eligibility.'],
  ['How can I get a quote?', 'Send your location, property type, approximate area and preferred date through the enquiry form or WhatsApp. We will discuss your requirements and share a suitable quote.'],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({name:'', business:'', city:'', service:'360° Virtual Tour', phone:'', details:''});
  const [faqOpen, setFaqOpen] = useState<number | null>(0);
  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const message = `Hello Orbis 360 Studios! I would like to enquire about a project.\n\nName: ${form.name}\nBusiness: ${form.business}\nCity: ${form.city}\nService: ${form.service}\nPhone: ${form.phone}\nDetails: ${form.details || 'Not provided'}`;
    window.open(`https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  };
  return <>
    <header className="header"><div className="nav-wrap"><a href="#home" className="brand" aria-label="Orbis 360 Studios home"><Image src="/orbis360-logo.png" alt="Orbis 360 Studios logo" width={240} height={100} priority /></a><button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? '✕' : '☰'}</button><nav className={menuOpen ? 'nav-links open' : 'nav-links'}><a onClick={() => setMenuOpen(false)} href="#services">Services</a><a onClick={() => setMenuOpen(false)} href="#work">Sample tours</a><a onClick={() => setMenuOpen(false)} href="#coverage">Coverage</a><a onClick={() => setMenuOpen(false)} href="#about">About</a><a className="nav-cta" onClick={() => setMenuOpen(false)} href="#contact">Get a quote <span>↗</span></a></nav></div></header>

    <main>
      <section className="hero" id="home"><div className="hero-grid"></div><div className="container hero-inner"><div className="hero-copy"><div className="eyebrow"><span className="pulse"></span> IMMERSIVE EXPERIENCES · RAJASTHAN</div><h1>Let them <em>step inside</em><br/>before they arrive.</h1><p className="hero-sub">Professional 360° virtual tours that turn real spaces into unforgettable digital experiences.</p><div className="hero-actions"><a className="btn btn-primary" href="#contact">Plan your virtual tour <span>↗</span></a><a className="text-link" href="#work"><span className="play">▶</span> Explore tour previews</a></div><div className="hero-proof"><div className="proof-avatars"><span>360°</span><span>VR</span><span>3D</span></div><div><strong>Every angle. One experience.</strong><small>Serving businesses across Rajasthan</small></div></div></div><div className="hero-visual"><div className="visual-orbit orbit-one"></div><div className="visual-orbit orbit-two"></div><div className="visual-core"><div className="core-top">OR<span>B</span>IS</div><div className="core-degree">360°</div><div className="core-caption">A new perspective on your space</div></div><div className="float-tag tag-top"><span className="tag-icon">↗</span><span><b>Explore anywhere</b><small>Any device, any time</small></span></div><div className="float-tag tag-bottom"><span className="tag-icon">◎</span><span><b>Look all around</b><small>Immersive 360° views</small></span></div><div className="visual-coordinate">24°35' N · UDAIPUR, IN</div></div></div><div className="hero-bottom container"><span>BUILT FOR PLACES WORTH EXPERIENCING</span><div><span>HOSPITALITY</span><i></i><span>REAL ESTATE</span><i></i><span>EVENTS</span><i></i><span>PUBLIC SPACES</span></div></div></section>

      <section className="intro section-pad"><div className="container intro-grid"><div><p className="section-kicker">A SPACE. A STORY. A NEW PERSPECTIVE.</p><h2>Your space deserves<br/>to be <em>experienced.</em></h2></div><div className="intro-text"><p>Photos show a moment. A virtual tour gives people the freedom to explore. Orbis 360 Studios creates immersive digital walkthroughs that help your customers feel familiar with your space before they step through the door.</p><a className="under-link" href="#contact">Let's bring your space online <span>↗</span></a></div></div></section>

      <section className="services section-pad" id="services"><div className="container"><div className="section-heading"><div><p className="section-kicker">WHAT WE DO</p><h2>Virtual tours for<br/><em>real-world places.</em></h2></div><p className="heading-note">From a neighbourhood café to a destination resort, make your space easier to discover, explore and remember.</p></div><div className="service-grid">{services.map(s=><article className="service-card" key={s.n}><div className="service-top"><span className="service-icon">{s.icon}</span><span className="service-num">{s.n}</span></div><h3>{s.title}</h3><p>{s.desc}</p><a href="#contact" aria-label={`Enquire about ${s.title}`} className="card-arrow">↗</a></article>)}</div></div></section>

      <section className="work section-pad" id="work">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="section-kicker">A LOOK AROUND</p>
              <h2>Explore the world<br/><em>in every direction.</em></h2>
            </div>
            <p className="heading-note">
              Explore these interactive 360° sample tours and imagine how customers could experience your space before visiting.
            </p>
          </div>

          <div className="tour-grid live-tour-grid">
            <article className="tour-card live-tour-card">
              <div className="live-tour-frame" style={{ position: "relative", width: "100%", aspectRatio: "4 / 3", overflow: "hidden", background: "#f1f5f9" }}>
                <iframe
                  src="https://app.cloudpano.com/tours/t1LtFvj5DK"
                  title="Orbis 360 Studios sample virtual tour 1"
                  loading="lazy"
                  allow="fullscreen; gyroscope; accelerometer; vr"
                  allowFullScreen
                  style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0 }}
                />
              </div>
              <div className="tour-info">
                <div><h3>Sample Virtual Tour 01</h3><p>Explore the suite in 360°</p></div>
                <a className="tour-button" href="https://app.cloudpano.com/tours/t1LtFvj5DK" target="_blank" rel="noopener noreferrer" aria-label="Open sample tour 1 in a new tab">↗</a>
              </div>
            </article>

            <article className="tour-card live-tour-card">
              <div className="live-tour-frame" style={{ position: "relative", width: "100%", aspectRatio: "4 / 3", overflow: "hidden", background: "#f1f5f9" }}>
                <iframe
                  src="https://app.cloudpano.com/tours/-CGyBUouS9"
                  title="Orbis 360 Studios sample virtual tour 2"
                  loading="lazy"
                  allow="fullscreen; gyroscope; accelerometer; vr"
                  allowFullScreen
                  style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0 }}
                />
              </div>
              <div className="tour-info">
                <div><h3>Sample Virtual Tour 02</h3><p>Look around a lobby from every angle</p></div>
                <a className="tour-button" href="https://app.cloudpano.com/tours/-CGyBUouS9" target="_blank" rel="noopener noreferrer" aria-label="Open sample tour 2 in a new tab">↗</a>
              </div>
            </article>

            <article className="tour-card live-tour-card">
              <div className="live-tour-frame" style={{ position: "relative", width: "100%", aspectRatio: "4 / 3", overflow: "hidden", background: "#f1f5f9" }}>
                <iframe
                  src="https://app.cloudpano.com/tours/mr0UDORHf"
                  title="Orbis 360 Studios sample virtual tour 3"
                  loading="lazy"
                  allow="fullscreen; gyroscope; accelerometer; vr"
                  allowFullScreen
                  style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0 }}
                />
              </div>
              <div className="tour-info">
                <div><h3>Sample Virtual Tour 03</h3><p>Experience an immersive commercial walkthrough</p></div>
                <a className="tour-button" href="https://app.cloudpano.com/tours/mr0UDORHf" target="_blank" rel="noopener noreferrer" aria-label="Open sample tour 3 in a new tab">↗</a>
              </div>
            </article>

            <article className="tour-card live-tour-card">
              <div className="live-tour-frame" style={{ position: "relative", width: "100%", aspectRatio: "4 / 3", overflow: "hidden", background: "#f1f5f9" }}>
                <iframe
                  src="https://www.p4panorama.com/panos/Ramadakochi/"
                  title="Orbis 360 Studios sample virtual tour 1"
                  loading="lazy"
                  allow="fullscreen; gyroscope; accelerometer; vr"
                  allowFullScreen
                  style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0 }}
                />
              </div>
              <div className="tour-info">
                <div><h3>Sample Virtual Tour 04</h3><p>Explore the Hotel in 360°</p></div>
                <a className="tour-button" href="https://www.p4panorama.com/panos/Ramadakochi/" target="_blank" rel="noopener noreferrer" aria-label="Open sample tour 1 in a new tab">↗</a>
              </div>
            </article>

            <article className="tour-card live-tour-card">
              <div className="live-tour-frame" style={{ position: "relative", width: "100%", aspectRatio: "4 / 3", overflow: "hidden", background: "#f1f5f9" }}>
                <iframe
                  src="https://www.p4panorama.com/panos/hotel-shevaroys-yercaud-360-virtual-tour/"
                  title="Orbis 360 Studios sample virtual tour 1"
                  loading="lazy"
                  allow="fullscreen; gyroscope; accelerometer; vr"
                  allowFullScreen
                  style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0 }}
                />
              </div>
              <div className="tour-info">
                <div><h3>Sample Virtual Tour 05</h3><p>Explore the Resort in 360°</p></div>
                <a className="tour-button" href="https://www.p4panorama.com/panos/hotel-shevaroys-yercaud-360-virtual-tour/" target="_blank" rel="noopener noreferrer" aria-label="Open sample tour 1 in a new tab">↗</a>
              </div>
            </article>

            <article className="tour-card live-tour-card">
              <div className="live-tour-frame" style={{ position: "relative", width: "100%", aspectRatio: "4 / 3", overflow: "hidden", background: "#f1f5f9" }}>
                <iframe
                  src="https://viewlo.in/tour/qds-satya-niketan"
                  title="Orbis 360 Studios sample virtual tour 1"
                  loading="lazy"
                  allow="fullscreen; gyroscope; accelerometer; vr"
                  allowFullScreen
                  style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0 }}
                />
              </div>
              <div className="tour-info">
                <div><h3>Sample Virtual Tour 06</h3><p>Explore the Resort in 360°</p></div>
                <a className="tour-button" href="https://viewlo.in/tour/qds-satya-niketan" target="_blank" rel="noopener noreferrer" aria-label="Open sample tour 1 in a new tab">↗</a>
              </div>
            </article>

            <article className="tour-card live-tour-card">
              <div className="live-tour-frame" style={{ position: "relative", width: "100%", aspectRatio: "4 / 3", overflow: "hidden", background: "#f1f5f9" }}>
                <iframe
                  src="https://viewlo.in/tour/delhi-2d-cafe"
                  title="Cafe Hotel 360° Virtual Tour"
                  loading="lazy"
                  allow="fullscreen; gyroscope; accelerometer; vr"
                  allowFullScreen
                  style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0 }}
                />
              </div>
              <div className="tour-info">
                <div><h3>Sample Virtual Tour 07</h3><p>Explore the Cafe in 360°</p></div>
                <a className="tour-button" href="https://viewlo.in/tour/delhi-2d-cafe" target="_blank" rel="noopener noreferrer" aria-label="Open sample tour 1 in a new tab">↗</a>
              </div>
            </article>
          </div>

          <div className="tour-note">
            <span className="note-dot"></span>
            These are sample tours hosted on CloudPano. Use “Open tour” if an embedded preview does not load.
          </div>
        </div>
      </section>

      <section className="process section-pad"><div className="container process-grid"><div className="process-intro"><p className="section-kicker">SIMPLE FROM START TO FINISH</p><h2>From real space<br/>to <em>digital place.</em></h2><p>We make the process clear, collaborative and tailored to your space.</p><a className="btn btn-light" href="#contact">Start a conversation <span>↗</span></a></div><div className="steps"><div className="step"><span className="step-no">01</span><div><h3>Tell us about your space</h3><p>Share the location, type of property and what you want people to experience.</p></div><span className="step-icon">↗</span></div><div className="step"><span className="step-no">02</span><div><h3>We plan the shoot</h3><p>We coordinate a suitable date and capture the important areas and viewpoints.</p></div><span className="step-icon">◎</span></div><div className="step"><span className="step-no">03</span><div><h3>Your tour goes live</h3><p>Receive a shareable immersive experience, with delivery and publishing options agreed for your project.</p></div><span className="step-icon">◉</span></div></div></div></section>

      <section className="coverage section-pad" id="coverage"><div className="container coverage-grid"><div><p className="section-kicker">ROOTED IN UDAIPUR · WORKING ACROSS RAJASTHAN</p><h2>Local knowledge.<br/><em>Statewide reach.</em></h2><p className="coverage-copy">Looking for a 360° virtual tour photographer in Rajasthan? Orbis 360 Studios is based in Udaipur and serves projects across the state. Travel and scheduling are confirmed based on your requirements.</p><div className="coverage-stat"><strong>33+</strong><span>cities, towns & destinations<br/>across our service area</span></div></div><div className="city-panel"><div className="city-panel-head"><span>RAJASTHAN SERVICE AREAS</span><span className="map-pin">⌖</span></div><div className="city-list">{cities.map(city=><a href={`#contact`} key={city} onClick={()=>setForm(f=>({...f,city}))}>{city}<span>↗</span></a>)}</div><div className="city-panel-foot"><span className="pulse"></span> Based in Udaipur · Enquiries welcome statewide</div></div></div></section>

      <section className="about section-pad" id="about"><div className="container about-grid"><div className="about-mark"><Image src="/orbis360-logo.png" alt="Orbis 360 Studios" width={390} height={160} /><div className="mark-caption">SEE MORE. FEEL CLOSER.</div></div><div className="about-copy"><p className="section-kicker">ABOUT ORBIS 360 STUDIOS</p><h2>We help people<br/><em>see beyond photos.</em></h2><p>Orbis 360 Studios creates immersive visual experiences for businesses, destinations and spaces across Rajasthan. Our goal is simple: help your audience explore more, understand your space and feel more confident about visiting.</p><div className="values"><span><b>01</b> Immersive storytelling</span><span><b>02</b> Made for modern screens</span><span><b>03</b> Rajasthan-wide service</span></div></div></div></section>

      <section className="faq section-pad"><div className="container faq-grid"><div><p className="section-kicker">GOOD TO KNOW</p><h2>Questions,<br/><em>answered.</em></h2><p className="faq-sub">Have a specific requirement? We’re happy to talk it through.</p><a href="https://wa.me/918387967670?text=Hello%20Orbis%20360%20Studios%2C%20I%20have%20a%20question%20about%20360%C2%B0%20virtual%20tours." target="_blank" rel="noreferrer" className="under-link">Ask us on WhatsApp ↗</a></div><div className="faq-list">{faqs.map(([q,a],i)=><div className={`faq-item ${faqOpen===i?'active':''}`} key={q}><button onClick={()=>setFaqOpen(faqOpen===i?null:i)} aria-expanded={faqOpen===i}><span>{q}</span><b>{faqOpen===i?'−':'+'}</b></button>{faqOpen===i&&<p>{a}</p>}</div>)}</div></div></section>

      <section className="contact section-pad" id="contact"><div className="container contact-grid"><div className="contact-copy"><p className="section-kicker">LET'S MAKE YOUR SPACE STAND OUT</p><h2>Your space is worth<br/><em>a closer look.</em></h2><p>Tell us what you have in mind. We’ll get back to you to discuss the shoot, timeline and next steps.</p><div className="contact-detail"><span className="detail-icon">⌖</span><div><small>BASED IN</small><strong>Udaipur, Rajasthan, India</strong></div></div><a className="contact-detail contact-phone" href="tel:+918387967670"><span className="detail-icon">↗</span><div><small>CALL OR WHATSAPP</small><strong>+91 83879 67670</strong></div></a><div className="contact-detail"><span className="detail-icon">◎</span><div><small>SERVICE AREA</small><strong>Across Rajasthan</strong></div></div></div><form className="enquiry-form" onSubmit={submitForm}><div className="form-head"><div><span>PROJECT ENQUIRY</span><h3>Let’s talk details.</h3></div><span className="form-star">✳</span></div><div className="form-row"><label>Your name *<input required value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="Full name" autoComplete="name" /></label><label>Business / venue<input value={form.business} onChange={e=>setForm({...form,business:e.target.value})} placeholder="e.g. Lakeview Café" /></label></div><div className="form-row"><label>City *<input required value={form.city} onChange={e=>setForm({...form,city:e.target.value})} placeholder="Where is the property?" /></label><label>Phone number *<input required type="tel" value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} placeholder="Your contact number" autoComplete="tel" /></label></div><label>What do you need?<select value={form.service} onChange={e=>setForm({...form,service:e.target.value})}><option>360° Virtual Tour</option><option>Café / Restaurant Tour</option><option>Hotel / Resort Tour</option><option>Banquet / Wedding Venue Tour</option><option>Real Estate / Commercial Tour</option><option>Government / Public Building</option><option>Event / Occasion Coverage</option><option>Other</option></select></label><label>Tell us a little more<textarea value={form.details} onChange={e=>setForm({...form,details:e.target.value})} placeholder="Property size, preferred date, special requirements…" rows={3}></textarea></label><button className="btn btn-primary form-submit" type="submit">Send enquiry on WhatsApp <span>↗</span></button><p className="form-privacy">Submitting opens WhatsApp with your enquiry pre-filled. You can review it before sending.</p></form></div></section>
    </main>

    <footer className="footer"><div className="container footer-main"><a href="#home" className="footer-logo"><Image src="/orbis360-logo.png" alt="Orbis 360 Studios logo" width={190} height={80}/></a><p>Every angle tells a story.<br/>Let’s help people experience yours.</p><div className="footer-links"><a href="#services">Services</a><a href="#work">Sample tours</a><a href="#coverage">Service areas</a><a href="#contact">Enquire</a></div><a className="footer-up" href="#home" aria-label="Back to top">↑</a></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Orbis 360 Studios. All rights reserved.</span><span>Udaipur, Rajasthan · India</span><a href="https://wa.me/918387967670" target="_blank" rel="noreferrer">Chat with us ↗</a></div></footer>
    <a className="whatsapp-float" href="https://wa.me/918387967670?text=Hello%20Orbis%20360%20Studios%2C%20I%20want%20to%20enquire%20about%20a%20360%C2%B0%20virtual%20tour." target="_blank" rel="noreferrer" aria-label="Chat with Orbis 360 Studios on WhatsApp"><span className="wa-icon">◔</span><span>Let's chat</span></a>
      </>;
}
