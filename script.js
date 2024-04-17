'use strict';
const showModal = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

let openModalWindow = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

let closeModalWindow = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < showModal.length; i++) {
  showModal[i].addEventListener('click', openModalWindow);
  closeModal.addEventListener('click', closeModalWindow);
  overlay.addEventListener('click', closeModalWindow);
}
