const navToggle = document.querySelector('[data-nav-toggle]');
const nav = document.querySelector('[data-nav]');
const revealItems = document.querySelectorAll('.reveal');
const canonicalNavItems = [
  ['index.html', 'Home'],
  ['about.html', 'About Us'],
  ['operating-system.html', 'Operating System'],
  ['farmers-fpo-panchayat.html', 'Farmers'],
  ['franchise-retailers.html', 'Retailers'],
  ['cold-room-partners.html', 'Cold Rooms'],
  ['investors.html', 'Investors'],
  ['contact.html', 'Contact KRS']
];

const krsContact = {
  phone: '+91-7854954845',
  tel: '+917854954845',
  email: 'info@kishanretailsathi.com',
  whatsapp: 'https://wa.me/917854954845?text=Hello%20KRS%2C%20I%20would%20like%20to%20discuss%20a%20partnership.'
};

if (nav) {
  const currentPage = (window.location.pathname.split('/').pop() || 'index.html').toLowerCase();
  nav.innerHTML = canonicalNavItems.map(([href, label]) => {
    const classes = [];
    if (href.toLowerCase() === currentPage) classes.push('active');
    if (href === 'contact.html') classes.push('nav-cta');
    const classAttr = classes.length ? ` class="${classes.join(' ')}"` : '';
    const currentAttr = href.toLowerCase() === currentPage ? ' aria-current="page"' : '';
    return `<a${classAttr}${currentAttr} href="${href}">${label}</a>`;
  }).join('');
}

const headerElement = document.querySelector('[data-header]');
if (headerElement && !document.querySelector('.top-contact-bar')) {
  const topBar = document.createElement('div');
  topBar.className = 'top-contact-bar';
  topBar.innerHTML = `
    <span>Kishan Retail Sathi</span>
    <div class="top-contact-group">
      <span>Call: +91-7854954845</span>
      <span>Email: info@kishanretailsathi.com</span>
    </div>
  `;
  headerElement.before(topBar);
}

document.querySelectorAll('img').forEach((image, index) => {
  image.decoding = 'async';
  if (index > 0 && !image.hasAttribute('loading')) image.loading = 'lazy';
});

document.querySelectorAll('.official-footer').forEach((footer) => {
  if (!document.querySelector('.app-coming-soon')) {
    const appSection = document.createElement('section');
    appSection.className = 'app-coming-soon reveal is-visible';
    appSection.id = 'app-coming-soon';
    appSection.innerHTML = `
      <div class="app-launch-copy">
        <span class="eyebrow">KRS App Launch</span>
        <h2>App coming soon on Play Store and App Store.</h2>
        <p>Farmer onboarding, MSP broadcast, cold-room stock visibility, retailer ordering, and pilot dashboards will soon be accessible through the KRS digital platform.</p>
      </div>
      <div class="app-store-panel" aria-label="KRS app store availability">
        <div class="app-phone-preview">
          <span class="phone-status"></span>
          <strong>KRS App</strong>
          <small>Farm-to-fork operating system</small>
          <div class="phone-lines"><span></span><span></span><span></span></div>
        </div>
        <div class="store-badge-row">
          <span class="store-badge" role="img" aria-label="Coming soon on Google Play">
            <svg viewBox="0 0 42 42" aria-hidden="true" focusable="false">
              <path d="M8 5l20 16L8 37z" fill="#18A558"/>
              <path d="M28 21l6-5c1.7 1 2.7 2.6 2.7 5S35.7 25 34 26z" fill="#F6A033"/>
              <path d="M8 5l20 16-7 6z" fill="#45C7F4"/>
              <path d="M8 37l13-10 7-6z" fill="#FFD36A"/>
            </svg>
            <span><small>Coming soon on</small><strong>Google Play</strong></span>
          </span>
          <span class="store-badge" role="img" aria-label="Coming soon on the App Store">
            <svg viewBox="0 0 42 42" aria-hidden="true" focusable="false">
              <path d="M25.4 8.7c1.4-1.6 2.4-3.8 2.1-5.9-2 .1-4.3 1.3-5.8 2.9-1.3 1.5-2.5 3.8-2.2 5.8 2.3.2 4.5-1.1 5.9-2.8z" fill="currentColor"/>
              <path d="M33.2 29.7c-.9 2-1.4 2.9-2.6 4.7-1.7 2.5-4.1 5.5-7 5.5-2.6 0-3.3-1.7-6.8-1.7s-4.3 1.7-6.8 1.8c-3 .1-5.2-3.2-6.9-5.7-4.7-6.8-5.2-14.8-2.3-19 2.1-3 5.3-4.8 8.4-4.8 3.2 0 5.2 1.7 7.8 1.7 2.5 0 4.1-1.8 7.8-1.8 2.8 0 5.8 1.5 7.8 4.2-6.8 3.7-5.7 13.4.6 15.1z" fill="currentColor"/>
            </svg>
            <span><small>Coming soon on</small><strong>App Store</strong></span>
          </span>
        </div>
      </div>
    `;
    footer.before(appSection);
    if (window.location.hash === '#app-coming-soon') {
      appSection.scrollIntoView({ block: 'start' });
    }
  }

  const quickLinksHeading = Array.from(footer.querySelectorAll('h3')).find((heading) => heading.textContent.trim().toLowerCase() === 'quick links');
  const quickLinks = quickLinksHeading?.parentElement;
  if (quickLinks && !quickLinks.querySelector('a[href="proposal-library.html"]')) {
    const libraryLink = document.createElement('a');
    libraryLink.href = 'proposal-library.html';
    libraryLink.textContent = 'Proposal Library';
    quickLinks.appendChild(libraryLink);
  }

  if (footer.querySelector('.footer-newsletter')) return;
  const newsletter = document.createElement('div');
  newsletter.className = 'footer-newsletter';
  newsletter.innerHTML = `
    <h3>Stay Connected</h3>
    <p>Updates on farmer onboarding, cold-chain rollout, retail expansion, and government pilot readiness.</p>
    <label for="footer-newsletter-email">Newsletter</label>
    <div class="newsletter-row">
      <input id="footer-newsletter-email" type="email" placeholder="Email address" aria-label="Email address">
      <button type="button">Join</button>
    </div>
    <div class="footer-socials" aria-label="Social links">
      <a href="#" aria-label="LinkedIn">in</a>
      <a href="#" aria-label="X">X</a>
      <a href="#" aria-label="YouTube">YT</a>
    </div>
  `;
  footer.appendChild(newsletter);
});

const pageName = (window.location.pathname.split('/').pop() || 'index.html').toLowerCase();

const diagramMap = {
  'operating-system.html': ['Procurement', 'Cold Chain', 'Retail Data', 'Farmer Payment'],
  'farmers-fpo-panchayat.html': ['MSP Contract', 'Collection', 'Storage', 'Direct Payment'],
  'franchise-retailers.html': ['Daily Supply', 'Cold Crates', 'Digital Billing', 'Repeat Customers'],
  'cold-room-partners.html': ['Inward Stock', 'Quality Audit', 'Planned Release', 'Payout'],
  'investors.html': ['Seed Capital', 'Cold Clusters', 'KRS Outlets', 'Data Moat'],
  'proposal-library.html': ['Profile', 'Pitch Deck', 'Partner Proposals', 'Canvas']
};

document.querySelectorAll('.platform-proof').forEach((proof) => {
  if (proof.querySelector('.proof-diagram')) return;
  const items = diagramMap[pageName] || ['MSP', 'Storage', 'Retail', 'Payments'];
  const diagram = document.createElement('div');
  diagram.className = 'proof-diagram';
  diagram.innerHTML = items.map((item, index) => `
    <span class="diagram-node">
      <small>${String(index + 1).padStart(2, '0')}</small>
      <b>${item}</b>
    </span>
  `).join('');
  proof.appendChild(diagram);
});

const heroForTrust = document.querySelector('.krs-reference-hero, .platform-hero, .page-hero');
if (heroForTrust && !document.querySelector('.trusted-for-strip')) {
  const trustedStrip = document.createElement('section');
  trustedStrip.className = 'trusted-for-strip';
  trustedStrip.innerHTML = `
    <span>Trusted for</span>
    <strong>District Officials</strong>
    <strong>Farmer Networks</strong>
    <strong>Retail Partners</strong>
    <strong>Cold Room Owners</strong>
    <strong>Investors</strong>
  `;
  heroForTrust.after(trustedStrip);
}

if (!document.querySelector('.mobile-action-bar')) {
  const mobileActionBar = document.createElement('div');
  mobileActionBar.className = 'mobile-action-bar';
  mobileActionBar.innerHTML = `
    <a href="tel:${krsContact.tel}">Call KRS</a>
    <a href="contact.html">Contact</a>
  `;
  document.body.appendChild(mobileActionBar);
}

if (!document.querySelector('.whatsapp-float')) {
  const whatsappFloat = document.createElement('a');
  whatsappFloat.className = 'whatsapp-float';
  whatsappFloat.href = krsContact.whatsapp;
  whatsappFloat.target = '_blank';
  whatsappFloat.rel = 'noopener';
  whatsappFloat.setAttribute('aria-label', 'Chat with KRS on WhatsApp');
  whatsappFloat.innerHTML = `
    <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      <path d="M16 3.5A12.2 12.2 0 0 0 5.5 22l-1.4 5.4 5.5-1.4A12.2 12.2 0 1 0 16 3.5Z" fill="currentColor"/>
      <path d="M11.8 10.2c-.3-.7-.6-.7-.9-.7h-.7c-.2 0-.7.1-1 .5-.4.4-1.3 1.3-1.3 3.1s1.3 3.6 1.5 3.8c.2.2 2.6 4.2 6.4 5.7 3.2 1.3 3.8 1 4.5.9.7-.1 2.2-.9 2.5-1.8.3-.9.3-1.6.2-1.8-.1-.2-.4-.3-.8-.5l-2.4-1.2c-.4-.1-.7-.2-1 .2-.3.4-1.1 1.3-1.4 1.6-.3.3-.5.3-.9.1-.4-.2-1.8-.7-3.4-2.1-1.3-1.1-2.1-2.5-2.3-2.9-.2-.4 0-.6.2-.8.2-.2.4-.5.6-.7.2-.3.3-.4.4-.7.1-.3.1-.5 0-.7l-1.1-2.8Z" fill="#fff"/>
    </svg>
    <span>WhatsApp</span>
  `;
  document.body.appendChild(whatsappFloat);
}

const svgIcon = (paths) => `
  <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" focusable="false">
    ${paths}
  </svg>`;

const icons = {
  farmer: svgIcon('<path d="M10 37c4-7 9-10 14-10s10 3 14 10" stroke-width="2.5" stroke-linecap="round"/><path d="M18 17c0-4 3-7 6-7s6 3 6 7-3 8-6 8-6-4-6-8Z" stroke-width="2.5"/><path d="M31 14c4-2 7-2 10 1-1 4-4 7-9 8" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>'),
  procurement: svgIcon('<path d="M9 15h10v10H9zM29 15h10v10H29zM19 25h10v10H19z" stroke-width="2.3" stroke-linejoin="round"/><path d="M19 20h10M14 25v5h5M34 25v5h-5" stroke-width="2.3" stroke-linecap="round"/>'),
  storage: svgIcon('<path d="M10 15h28v22H10z" stroke-width="2.4" stroke-linejoin="round"/><path d="M16 15V9h16v6M24 19v14M17 24h14M19 20l10 10M29 20 19 30" stroke-width="2.2" stroke-linecap="round"/>'),
  retail: svgIcon('<path d="M10 20h28l-3-9H13zM13 20v17h22V20" stroke-width="2.4" stroke-linejoin="round"/><path d="M19 37V27h10v10M10 20c1 4 6 4 7 0 1 4 6 4 7 0 1 4 6 4 7 0 1 4 6 4 7 0" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>'),
  pricing: svgIcon('<path d="M10 36h28M13 32l8-8 6 5 10-14" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M32 15h5v5M16 14h9M16 19h6" stroke-width="2.2" stroke-linecap="round"/>'),
  payment: svgIcon('<path d="M10 15h28v22H10z" stroke-width="2.4" stroke-linejoin="round"/><path d="M10 22h28M17 31h8" stroke-width="2.4" stroke-linecap="round"/><path d="M31 31c0-3-6-3-6 0s6 3 6 0Z" stroke-width="2.1"/>'),
  government: svgIcon('<path d="M9 19h30L24 10zM13 22v14M21 22v14M29 22v14M37 22v14M10 38h28" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>'),
  shield: svgIcon('<path d="M24 8 38 13v10c0 9-6 15-14 18-8-3-14-9-14-18V13z" stroke-width="2.4" stroke-linejoin="round"/><path d="m17 25 5 5 10-11" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>'),
  app: svgIcon('<path d="M17 7h14a4 4 0 0 1 4 4v26a4 4 0 0 1-4 4H17a4 4 0 0 1-4-4V11a4 4 0 0 1 4-4Z" stroke-width="2.4"/><path d="M20 13h8M21 34h6M18 20h12M18 25h8" stroke-width="2.2" stroke-linecap="round"/>'),
  dashboard: svgIcon('<path d="M10 36V12h28v24z" stroke-width="2.4" stroke-linejoin="round"/><path d="M16 30V20M24 30V16M32 30v-7M15 35h18" stroke-width="2.4" stroke-linecap="round"/>'),
  waste: svgIcon('<path d="M15 18h18M19 18v20h10V18M21 18v-5h6v5" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/><path d="M31 11c4 0 7 2 8 6-5 1-9 0-12-4" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>'),
  middlemen: svgIcon('<path d="M17 29 12 34a6 6 0 0 1-8-8l7-7a6 6 0 0 1 8 0M31 19l5-5a6 6 0 0 1 8 8l-7 7a6 6 0 0 1-8 0M19 24h10M24 17v14" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>'),
  trace: svgIcon('<path d="M10 10h10v10H10zM28 10h10v10H28zM10 28h10v10H10zM28 28h4M36 28h2M28 34h10M34 38h4" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"/>'),
  logistics: svgIcon('<path d="M7 30h25V15H7zM32 22h6l4 5v3H32zM14 36a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM36 36a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" stroke-width="2.3" stroke-linejoin="round"/>'),
  training: svgIcon('<path d="M10 13h13v25H10zM25 13h13v25H25z" stroke-width="2.3" stroke-linejoin="round"/><path d="M15 19h5M15 24h5M30 19h5M30 24h5" stroke-width="2.1" stroke-linecap="round"/>'),
  growth: svgIcon('<path d="M10 36h28M14 31l7-8 6 4 9-13" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M32 14h4v4" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/><path d="M14 36V25M24 36V28M34 36V20" stroke-width="2.2" stroke-linecap="round"/>'),
  leaf: svgIcon('<path d="M11 35c18 1 27-8 27-26-16 0-27 10-27 26Z" stroke-width="2.4" stroke-linejoin="round"/><path d="M14 32c7-8 13-12 22-17" stroke-width="2.4" stroke-linecap="round"/>')
};

const iconRules = [
  ['mission|purpose', 'shield'],
  ['vision|future|national platform|pan-india', 'growth'],
  ['operating principle|principle|trust|transparent', 'trace'],
  ['agriculture & farm operations|farm operations|ground-level', 'farmer'],
  ['business strategy|finance|commercial|revenue|trading surplus', 'pricing'],
  ['policy|legal|compliance|fssai', 'government'],
  ['app development|android|ios|mvp|module', 'app'],
  ['quality tracking|stock audit|inventory|real-time sales|analytics', 'dashboard'],
  ['guaranteed inventory|inventory flow|supply chain|sourcing', 'procurement'],
  ['solar|maintenance|thermal|cold clusters', 'storage'],
  ['brand & marketing|loyalty|member|customer', 'retail'],
  ['women entrepreneurs|young entrepreneurs|local entrepreneurs', 'growth'],
  ['plan|production|controlled', 'training'],
  ['protect|protection|guarantee|fixed msp|stability', 'shield'],
  ['preserve|freshness|cold-chain|storage utilisation|cold room', 'storage'],
  ['move|transport|logistics|on-time|distribution', 'logistics'],
  ['sell|retail|outlet|store|consumer|franchise|shop|outlet growth', 'retail'],
  ['district rollout|pilot|odisha|scale|roadmap', 'growth'],
  ['farmer protection|farmer|fpo|agriculture|harvest|onboarding|income', 'farmer'],
  ['cold|storage|crate|stock', 'storage'],
  ['retail|outlet|store|consumer|franchise|shop', 'retail'],
  ['price|msp|margin|revenue|deposit|fund|bonus|payment|dbt|settlement|finance', 'payment'],
  ['dashboard|analytics|portal|data|digital|technology|app|ai|forecast|intelligence|blockchain', 'dashboard'],
  ['government|policy|district|panchayat|scheme|fssai|compliance|legal|pilot-ready', 'government'],
  ['wastage|waste|loss|distress|zero waste', 'waste'],
  ['middlemen|broker|direct|chain', 'middlemen'],
  ['transport|logistics|pickup|distribution|delivery|routing', 'logistics'],
  ['training|skilling|input|production|soil|quality|sourcing', 'training'],
  ['investor|scale|growth|expansion|roadmap|market|pan-india|odisha', 'growth'],
  ['traceability|qr|audit|transparent', 'trace'],
  ['shield|protection|guarantee|stability|readiness|controlled', 'shield'],
  ['procurement|produce|trading|supply', 'procurement']
];

const pickIcon = (text) => {
  const haystack = text.toLowerCase();
  const match = iconRules.find(([pattern]) => new RegExp(pattern).test(haystack));
  return match ? match[1] : 'leaf';
};

const enhanceCardsWithIcons = () => {
  const selectors = [
    '.feature-card',
    '.service-card',
    '.problem-card',
    '.policy-card',
    '.stakeholder-card',
    '.readiness-grid article',
    '.format-grid article',
    '.control-grid article',
    '.why-grid article',
    '.lever-grid article',
    '.roadmap-strip article',
    '.ag-loop article',
    '.ag-supply-map article',
    '.os-stack article',
    '.dash-card',
    '.compare-card',
    '.process-step',
    '.timeline-item',
    '.roadmap article',
    '.orbit-card'
  ].join(',');

  document.querySelectorAll(selectors).forEach((card) => {
    if (card.querySelector(':scope > .krs-icon-tile, :scope > .icon svg, :scope > .dashboard-icon svg')) return;

    const titleElement = card.querySelector('h3, h2') || card.querySelector('strong') || card.querySelector('span');
    const label = [
      card.className,
      titleElement?.textContent || ''
    ].join(' ');

    const iconName = card.dataset.icon || pickIcon(label);
    const existing = card.querySelector(':scope > .icon, :scope > .dashboard-icon');
    const tile = existing || document.createElement('span');
    tile.classList.add('krs-icon-tile');
    tile.innerHTML = icons[iconName] || icons.leaf;
    tile.setAttribute('aria-hidden', 'true');

    if (!existing) {
      card.prepend(tile);
    }

    card.classList.add('krs-icon-enhanced');
  });
};

enhanceCardsWithIcons();

revealItems.forEach((item) => {
  const rect = item.getBoundingClientRect();
  if (rect.top < window.innerHeight && rect.bottom > 0) {
    item.classList.add('is-visible');
  }
});

document.body.classList.add('motion-ready');

if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    nav.classList.toggle('is-open');
  });
}

const header = document.querySelector('[data-header]');
window.addEventListener('scroll', () => {
  if (!header) return;
  header.classList.toggle('is-scrolled', window.scrollY > 8);
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealItems.forEach((item) => revealObserver.observe(item));
requestAnimationFrame(() => {
  revealItems.forEach((item) => {
    const rect = item.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      item.classList.add('is-visible');
    }
  });
});

const counters = document.querySelectorAll('[data-count]');
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const element = entry.target;
    const target = Number(element.dataset.count);
    const suffix = element.textContent.includes('Lakh') ? ' Lakh+' : element.textContent.includes('Month') ? '-Month' : '';
    const start = performance.now();
    const duration = 950;

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = Math.round(target * eased);
      if (target === 100000) {
        element.textContent = progress === 1 ? '1 Lakh+' : `${Math.max(1, Math.round(value / 1000))}k+`;
      } else if (suffix === '-Month') {
        element.textContent = `${value}-Month`;
      } else {
        element.textContent = String(value);
      }
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
    counterObserver.unobserve(element);
  });
}, { threshold: 0.5 });

counters.forEach((counter) => counterObserver.observe(counter));

const insertBeforeFooter = (section) => {
  const appSection = document.querySelector('.app-coming-soon');
  const footer = document.querySelector('.official-footer');
  const target = appSection || footer;
  if (target) target.before(section);
};

const makeSection = (className, html) => {
  const section = document.createElement('section');
  section.className = className;
  section.innerHTML = html;
  return section;
};

if (pageName === 'index.html' && !document.querySelector('.audience-router')) {
  const router = makeSection('section audience-router reveal is-visible', `
    <div>
      <span class="eyebrow">Choose your partnership path</span>
      <h2>One KRS network. Different doors for every stakeholder.</h2>
    </div>
    <div class="audience-router-grid">
      <a href="farmers-fpo-panchayat.html"><strong>Farmers & FPOs</strong><span>MSP contracts, training, onboarding</span></a>
      <a href="franchise-retailers.html"><strong>Retailers</strong><span>Branded outlet opportunity</span></a>
      <a href="cold-room-partners.html"><strong>Cold Rooms</strong><span>Storage-to-shelf utilization</span></a>
      <a href="investors.html"><strong>Investors</strong><span>Scale plan and business model</span></a>
      <a href="government-partnership.html"><strong>Government</strong><span>District pilot readiness</span></a>
    </div>
  `);
  (document.querySelector('.trusted-for-strip') || document.querySelector('.krs-reference-hero'))?.after(router);
}

if (pageName === 'index.html' && !document.querySelector('.trust-readiness-band')) {
  const trust = makeSection('section trust-readiness-band reveal is-visible', `
    <div class="section-heading">
      <span class="eyebrow">Trust and implementation readiness</span>
      <h2>Built for serious conversations with district officials, farmer networks, retail partners, and investors.</h2>
      <p>Every component of KRS is designed to be explained, audited, piloted, and scaled through clear operating roles.</p>
    </div>
    <div class="trust-readiness-grid">
      <article><strong>Registered company</strong><span>Institutional partnership-ready structure</span></article>
      <article><strong>Odisha pilot blueprint</strong><span>1,000 farmers, 10 outlets, 100 cold rooms, 6-month rollout</span></article>
      <article><strong>FSSAI in progress</strong><span>Food handling and outlet compliance readiness</span></article>
      <article><strong>DBT-ready payments</strong><span>Bank-linked digital farmer settlement flows</span></article>
    </div>
  `);
  document.querySelector('.ag-roadmap')?.before(trust);
}

if (pageName === 'index.html' && !document.querySelector('.rollout-map-section')) {
  const rollout = makeSection('section rollout-map-section reveal is-visible', `
    <div class="section-heading">
      <span class="eyebrow">Odisha to national rollout</span>
      <h2>A district cluster model that can repeat across Odisha and then state by state.</h2>
    </div>
    <div class="rollout-map-shell">
      <div class="rollout-map-visual" aria-hidden="true">
        <span class="map-node node-a">Pilot District</span>
        <span class="map-node node-b">Cold Cluster</span>
        <span class="map-node node-c">Retail Ring</span>
        <span class="map-node node-d">State Scale</span>
      </div>
      <div class="rollout-map-copy">
        <article><strong>Month 1-2</strong><span>Farmer onboarding, outlet mapping, storage activation.</span></article>
        <article><strong>Month 3-4</strong><span>MSP procurement, digital stock visibility, retail counter launch.</span></article>
        <article><strong>Month 5-6</strong><span>Price stability monitoring, repeat orders, scale proposal.</span></article>
      </div>
    </div>
  `);
  document.querySelector('.ag-roadmap')?.before(rollout);
}

const faqContent = {
  'index.html': [
    ['What is Kishan Retail Sathi?', 'KRS is a closed-loop agritech value network connecting farmers, cold storage, logistics, branded retail outlets, and consumers.'],
    ['How does KRS protect farmers?', 'KRS uses fixed MSP-backed procurement, direct digital payments, and cold-chain access to reduce distress sales.'],
    ['Who can partner with KRS?', 'Farmer groups, FPOs, Panchayats, franchise retailers, cold room owners, district officials, and investors can engage through dedicated partnership paths.'],
    ['Where is the first pilot planned?', 'The initial pilot is designed for Odisha with 1,000 farmers, 10 outlets, 100 cold rooms, and a 6-month pilot-to-scale timeline.']
  ],
  'farmers-fpo-panchayat.html': [
    ['What do farmers receive?', 'Farmers receive pre-declared MSP confidence, onboarding support, crop guidance, cold storage access, and transparent payment flow.'],
    ['Can FPOs and Panchayats onboard together?', 'Yes. KRS is designed for cluster-based onboarding through farmer groups, FPOs, Panchayats, and district coordination.']
  ],
  'franchise-retailers.html': [
    ['What support does a retailer get?', 'KRS supports sourcing, cold-chain movement, branding, digital billing, and repeat supply visibility.'],
    ['Is this suitable for existing shop owners?', 'Yes. Existing shops can upgrade into branded KRS retail formats with supply-chain support.']
  ],
  'cold-room-partners.html': [
    ['How do cold room owners benefit?', 'KRS routes produce from farmer clusters into partner storage and links capacity to planned retail demand.'],
    ['What are the partnership formats?', 'KRS can work through fixed rent, capacity leasing, revenue sharing, or strategic cluster partnerships.']
  ],
  'investors.html': [
    ['What makes the model scalable?', 'KRS combines MSP procurement, cold-chain inventory, branded retail demand, and data-led planning into a repeatable district model.'],
    ['What are the primary revenue pillars?', 'Produce trading margins, branded outlet network growth, retailer deposits, cold storage economics, and value-added products.']
  ],
  'government-partnership.html': [
    ['How is KRS government-aligned?', 'The model supports farmer income, digital agriculture, cold storage infrastructure, rural employment, and food price stability.'],
    ['What can a district pilot measure?', 'Farmer protection, storage utilization, outlet growth, price stability, payment speed, and rollout readiness.']
  ],
  'contact.html': [
    ['How can I contact KRS?', `Call ${krsContact.phone}, email ${krsContact.email}, use the enquiry form, or start a WhatsApp conversation.`],
    ['What should I include in an enquiry?', 'Mention your role, district or organization, and whether you are exploring farmers, retail, cold storage, government, or investment partnership.']
  ]
};

if (!document.querySelector('.faq-section')) {
  const items = faqContent[pageName] || [
    ['How does KRS work?', 'KRS connects farmer procurement, cold-chain storage, logistics, retail demand, and digital payments into one operating model.'],
    ['How do I discuss a partnership?', `Call ${krsContact.phone}, email ${krsContact.email}, or open the contact page.`]
  ];
  const faq = makeSection('section faq-section reveal is-visible', `
    <div class="section-heading">
      <span class="eyebrow">Frequently asked questions</span>
      <h2>Clear answers for partners evaluating the KRS model.</h2>
    </div>
    <div class="faq-grid">
      ${items.map(([q, a]) => `<article class="faq-item"><h3>${q}</h3><p>${a}</p></article>`).join('')}
    </div>
  `);
  insertBeforeFooter(faq);
}

document.querySelectorAll('.contact-form').forEach((form) => {
  if (!form.querySelector('[name="audience"]')) {
    const audienceLabel = document.createElement('label');
    audienceLabel.innerHTML = `
      Partnership Type
      <select name="audience">
        <option value="General Partnership">General Partnership</option>
        <option value="Farmers / FPO / Panchayat">Farmers / FPO / Panchayat</option>
        <option value="Franchise Retailer">Franchise Retailer</option>
        <option value="Cold Room Owner">Cold Room Owner</option>
        <option value="Investor">Investor</option>
        <option value="Government / District Pilot">Government / District Pilot</option>
      </select>
    `;
    const messageLabel = form.querySelector('textarea')?.closest('label');
    if (messageLabel) form.insertBefore(audienceLabel, messageLabel);
  }

  if (!form.querySelector('.form-direct-actions')) {
    const directActions = document.createElement('div');
    directActions.className = 'form-direct-actions';
    directActions.innerHTML = `
      <a href="mailto:${krsContact.email}">Email directly</a>
      <a href="${krsContact.whatsapp}" target="_blank" rel="noopener">Message on WhatsApp</a>
    `;
    form.appendChild(directActions);
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const subject = `KRS Partnership Enquiry - ${data.get('audience') || 'General'}`;
    const body = [
      `Name: ${data.get('name') || ''}`,
      `Organisation: ${data.get('organisation') || ''}`,
      `Email: ${data.get('email') || ''}`,
      `Partnership Type: ${data.get('audience') || ''}`,
      '',
      data.get('message') || ''
    ].join('\n');
    window.location.href = `mailto:${krsContact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
});

