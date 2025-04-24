
function showSection(id) {
  document.querySelectorAll('.section').forEach(sec => sec.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}
function toggleTheme() {
  const html = document.documentElement;
  const theme = html.getAttribute('data-theme');
  html.setAttribute('data-theme', theme === 'light' ? 'dark' : 'light');
}
