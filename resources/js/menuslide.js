var click = document.querySelectorAll('.menuslide');
var menu = document.querySelector('.st-container');
var pusher = document.querySelector('.pusher');

for (var i = 0; i < click.length; i++) {
  click[i].addEventListener('click', addClass)
}

pusher.addEventListener('click', closeMenu);

function addClass(e) {

  menu.classList.toggle('effect');
  menu.classList.toggle('menu-open');

}

function closeMenu(el) {

  if (el.target.classList.contains('pusher')) {
    menu.classList.remove('effect');
    menu.classList.remove('menu-open');

  }
}
