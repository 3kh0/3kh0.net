// /src/scripts/extra-pages.js

const extraPages = ['aboutblank.html', 'index.html', 'iplist.html', 'urldirect.html'];
const extraPagesList = document.getElementById('extra-pages-list');

extraPages.forEach(page => {
  const link = document.createElement('a');
  link.href = `extra/${page}`;
  link.textContent = page;
  link.className = 'text-blue-500 hover:underline';
  extraPagesList.appendChild(link);
});