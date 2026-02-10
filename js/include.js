function includeHTML() {
  document.querySelectorAll('[data-include]').forEach(async (el) => {
    const file = el.getAttribute('data-include');
    const resp = await fetch(file);
    const text = await resp.text();
    el.innerHTML = text;
  });
}
window.addEventListener('DOMContentLoaded', includeHTML);
