/* Aximo , shared chrome + mobile menu */
(function () {
  const path = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  const navItems = [
    { href: 'index.html', label: 'Home' },
    { href: 'services.html', label: 'Services' },
    { href: 'approach.html', label: 'Approach' },
    { href: 'insights.html', label: 'Insights' },
    { href: 'about.html', label: 'About' },
    { href: 'contact.html', label: 'Contact' },
  ];
  const isActive = (h) => h === path || (path === '' && h === 'index.html');

  const headerHTML = `
    <header class="site-header" id="siteHeader">
      <div class="container header-inner">
        <a class="logo" href="index.html" aria-label="Aximo , home">
          <span class="logo__mark" aria-hidden="true">
            <span></span><span></span><span></span>
          </span>
          <span class="logo__name">Aximo</span>
        </a>
        <nav class="nav" aria-label="Primary">
          ${navItems.slice(0,5).map(i => `<a href="${i.href}" class="${isActive(i.href) ? 'is-active' : ''}">${i.label}</a>`).join('')}
        </nav>
        <div class="header-cta">
          <a class="btn btn--primary" href="contact.html">
            Begin a conversation
            <span class="arrow" aria-hidden="true">→</span>
          </a>
          <button class="menu-btn" aria-label="Open menu" id="menuOpen"><span></span></button>
        </div>
      </div>
    </header>
    <div class="mobile-menu" id="mobileMenu" aria-hidden="true">
      <div class="mobile-menu__top">
        <a class="logo" href="index.html">
          <span class="logo__mark" aria-hidden="true">
            <span></span><span></span><span></span>
          </span>
          <span class="logo__name">Aximo</span>
        </a>
        <button class="mobile-menu__close" id="menuClose" aria-label="Close menu">&times;</button>
      </div>
      <nav class="mobile-menu__nav" aria-label="Mobile">
        ${navItems.map((i, idx) => `<a href="${i.href}" class="${isActive(i.href) ? 'is-active' : ''}"><span>${String(idx+1).padStart(2,'0')}</span>${i.label}</a>`).join('')}
      </nav>
      <div class="mobile-menu__foot">
        <a class="btn btn--primary" href="contact.html">
          Begin a conversation
          <span class="arrow" aria-hidden="true">→</span>
        </a>
        <div class="mobile-menu__contact">
          <a href="mailto:hello@aximohub.com">hello@aximohub.com</a>
          <span>Nairobi, Kenya</span>
        </div>
      </div>
    </div>
  `;

  const footerHTML = `
    <footer class="site-footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <a class="logo" href="index.html">
              <span class="logo__mark" aria-hidden="true">
                <span></span><span></span><span></span>
              </span>
              <span class="logo__name">Aximo</span>
            </a>
            <p>A Kenya focused advisory platform. Made by operators, for operators.</p>
            <div class="socials" aria-label="Aximo on social">
              <a href="#" class="s-linkedin" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zm1.78 13.02H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z"/></svg>
              </a>
              <a href="#" class="s-x" aria-label="X">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/></svg>
              </a>
              <a href="#" class="s-instagram" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63a5.84 5.84 0 0 0-2.13 1.38A5.84 5.84 0 0 0 .63 4.14C.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.32.79.74 1.46 1.38 2.13a5.84 5.84 0 0 0 2.13 1.38c.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.84 5.84 0 0 0 2.13-1.38 5.84 5.84 0 0 0 1.38-2.13c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91A5.84 5.84 0 0 0 21.99 2A5.84 5.84 0 0 0 19.86.63C19.1.33 18.22.13 16.95.07 15.67.01 15.26 0 12 0zm0 5.84A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84zm0 10.16A4 4 0 1 1 16 12a4 4 0 0 1-4 4zm6.4-11.85a1.44 1.44 0 1 0 1.44 1.44 1.44 1.44 0 0 0-1.44-1.44z"/></svg>
              </a>
              <a href="#" class="s-youtube" aria-label="YouTube">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.378.505A3.016 3.016 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.873.505 9.378.505 9.378.505s7.505 0 9.378-.505a3.016 3.016 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
              <a href="mailto:hello@aximohub.com" class="s-email" aria-label="Email">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3.5 6.5l8.5 6 8.5-6"/></svg>
              </a>
            </div>
          </div>
          <div class="footer-col">
            <h4>Navigate</h4>
            <nav class="footer-nav" aria-label="Footer">
              <a href="services.html">Services</a>
              <a href="approach.html">Approach</a>
              <a href="insights.html">Insights</a>
              <a href="about.html">About</a>
              <a href="contact.html">Contact</a>
            </nav>
          </div>
          <div class="footer-col footer-news">
            <h4>Stay close</h4>
            <form onsubmit="event.preventDefault(); this.querySelector('.sub-btn').textContent='Subscribed';">
              <input type="email" placeholder="your@email.com" aria-label="Email address" required />
              <button class="sub-btn" type="submit">
                Subscribe to The Aximo Brief
                <span aria-hidden="true">→</span>
              </button>
            </form>
          </div>
        </div>
        <div class="footer-base">
          <span>© 2026 Aximo. All rights reserved.</span>
          <span class="legal">
            <a href="privacy.html">Privacy</a>
            <a href="terms.html">Terms</a>
          </span>
        </div>
      </div>
    </footer>
  `;

  const headerSlot = document.querySelector('[data-header]');
  if (headerSlot) headerSlot.outerHTML = headerHTML;
  const footerSlot = document.querySelector('[data-footer]');
  if (footerSlot) footerSlot.outerHTML = footerHTML;

  // Sticky header compress
  const onScroll = () => {
    const h = document.getElementById('siteHeader');
    if (!h) return;
    h.classList.toggle('is-compact', window.scrollY > 12);
  };
  document.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile menu
  const menu = document.getElementById('mobileMenu');
  const openBtn = document.getElementById('menuOpen');
  const closeBtn = document.getElementById('menuClose');
  const open = () => {
    menu.classList.add('is-open');
    menu.setAttribute('aria-hidden', 'false');
    document.body.classList.add('is-locked');
  };
  const close = () => {
    menu.classList.remove('is-open');
    menu.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('is-locked');
  };
  openBtn && openBtn.addEventListener('click', open);
  closeBtn && closeBtn.addEventListener('click', close);
  menu && menu.querySelectorAll('a').forEach(a => a.addEventListener('click', close));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
})();
