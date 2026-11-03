(() => {
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  if (menuButton && nav) {
    menuButton.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      menuButton.setAttribute('aria-expanded', String(isOpen));
      menuButton.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      nav.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Open navigation');
    }));
  }

  const filterButtons = document.querySelectorAll('.filter-btn');
  const productCards = document.querySelectorAll('.product-card');
  filterButtons.forEach(button => button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    filterButtons.forEach(item => {
      const active = item === button;
      item.classList.toggle('active', active);
      item.setAttribute('aria-pressed', String(active));
    });
    productCards.forEach(card => {
      card.hidden = filter !== 'all' && card.dataset.category !== filter;
    });
  }));

  document.querySelectorAll('.enquire-link').forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      const product = link.dataset.product;
      const message = `Hello Osman Frozen Foods, I would like to know more about ${product}. Please share the details.`;
      window.open(`https://wa.me/8801811152265?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
    });
  });

  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
