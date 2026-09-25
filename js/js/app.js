const content = document.getElementById('content');
const sidebar = document.getElementById('sidebar');
const menuBtn = document.getElementById('menuBtn');
const themeBtn = document.getElementById('themeBtn');
const searchInput = document.getElementById('searchInput');

function loadPage(pageId) {
  const html = pages[pageId] || '<h1>Page not found</h1>';
  content.innerHTML = html;

  document.querySelectorAll('.nav-item').forEach(item => {
    item.classList.toggle('active', item.dataset.page === pageId);
  });

  if (sidebar) sidebar.classList.remove('open');
  window.scrollTo(0, 0);
}

document.querySelectorAll('.nav-item').forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    const page = item.dataset.page;
    if (page) {
      history.pushState(null, '', '#' + page);
      loadPage(page);
    }
  });
});

menuBtn?.addEventListener('click', () => {
  sidebar?.classList.toggle('open');
});

themeBtn?.addEventListener('click', () => {
  const html = document.documentElement;
  const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('phorva-theme', next);
});

const savedTheme = localStorage.getItem('phorva-theme');
if (savedTheme) {
  document.documentElement.setAttribute('data-theme', savedTheme);
}

searchInput?.addEventListener('keydown', (e) => {
  if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
    e.preventDefault();
    searchInput.focus();
  }
});

window.addEventListener('popstate', () => {
  const page = location.hash.slice(1) || 'introduction';
  loadPage(page);
});

const initial = location.hash.slice(1) || 'introduction';
loadPage(initial);