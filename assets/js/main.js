'use strict';
const year = document.getElementById('year');
if (year) year.textContent = String(new Date().getFullYear());
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('#navigation');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }));
}
