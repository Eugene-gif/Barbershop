let loginBtn = document.querySelector('.login-link');
let loginModal = document.querySelector('.modal-login');
let loginClose = document.querySelector('.close-login');

let mapBtn = document.querySelector('.button-map-footer');
// let mapBtn2 = document.querySelector('.button-map-content');
let mapModal = document.querySelector('.modal-map');
let mapClose = document.querySelector('.close-map');


// for(let key in arr) {

// }

function foo (par1, par2) {
  par1.addEventListener('click', function (evt) {
    evt.preventDefault();
    par2.classList.toggle('visually-hidden');
  });
};


foo(mapBtn, mapModal);
// foo(mapBtn2, mapModal);
foo(mapClose, mapModal);
foo(loginBtn, loginModal);
foo(loginClose, loginModal); 

