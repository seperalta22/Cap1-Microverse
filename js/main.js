function hideMobileMenu() {
  document.querySelector('.mobile-menu').style.display = 'none';
  document.querySelector('.menu-container').style.display = 'none';
}

function showMobileMenu() {
  document.querySelector('.mobile-menu').style.display = 'block';
  document.querySelector('.menu-container').style.display = 'block';
}

const ham = document.getElementById('ham');
const x = document.getElementById('x');
const closers = document.querySelectorAll('.mobile-menu-items');
ham.addEventListener('click', showMobileMenu);
x.addEventListener('click', hideMobileMenu);

for (let i = 0; i < closers.length; i += 1) {
  closers[i].addEventListener('click', hideMobileMenu);
}
