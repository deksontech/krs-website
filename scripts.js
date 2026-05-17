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

if (nav) {
  const currentPage = (window.location.pathname.split('/').pop() || 'index.html').toLowerCase();
  nav.innerHTML = canonicalNavItems.map(([href, label]) => {
    const classes = [];
    if (href.toLowerCase() === currentPage) classes.push('active');
    if (href === 'contact.html') classes.push('nav-cta');
    const classAttr = classes.length ? ` class="${classes.join(' ')}"` : '';
    return `<a${classAttr} href="${href}">${label}</a>`;
  }).join('');
}

const headerElement = document.querySelector('[data-header]');
if (headerElement && !document.querySelector('.top-contact-bar')) {
  const topBar = document.createElement('div');
  topBar.className = 'top-contact-bar';
  topBar.innerHTML = `
    <span>Kishan Retail Sathi Pvt Ltd</span>
    <div class="top-contact-group">
      <span>Call: +91-7854954845</span>
      <span>Email: info@kisanretailsathi.com</span>
      <span>Odisha, India</span>
    </div>
  `;
  headerElement.before(topBar);
}

document.querySelectorAll('.official-footer').forEach((footer) => {
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
      <a href="#" aria-label="YouTube">▶</a>
    </div>
  `;
  footer.appendChild(newsletter);
});

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
  ['farmer|fpo|agriculture|harvest|onboarding|income', 'farmer'],
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

    const iconName = pickIcon(label);
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
