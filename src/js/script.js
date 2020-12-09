'use strict';

function toggleMenuSm(visible) {
  if (window.screen.width < 768) {
    document.querySelector('.sidebar').classList.toggle('hidden-sidebar', visible);
    document.querySelector('.top-menu').classList.toggle('hidden-topmenu', visible);

  }
}

document.querySelector('.burger').addEventListener('click', function (e) {
  e.preventDefault();
  toggleMenuSm();
});

function toggleMenuLg(visible) {
  if (window.screen.width >= 768) {
    document.querySelector('.sidebar').classList.toggle('hidden-sidebar', visible);
  }
}

document.querySelector('.burger').addEventListener('click', function (e) {
  e.preventDefault();
  toggleMenuLg();
});
if (window.screen.width < 768) {
  document.querySelector('.sidebar').classList.add('hidden-sidebar');
  document.querySelector('.top-menu').classList.add('hidden-topmenu');
} else {
  document.querySelector('.sidebar').classList.remove('hidden-sidebar');
  document.querySelector('.top-menu').classList.remove('hidden-topmenu');
}

function closeModal() {
  document.getElementById('overlay').classList.remove('show');
}

document.querySelectorAll('#overlay .close-modal').forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    e.preventDefault();
    closeModal();
  });
});

document.querySelector('#overlay').addEventListener('click', function (e) {
  if (e.target === this) {
    closeModal();
  }
});

document.addEventListener('keyup', function (e) {
  if (e.keyCode === 27) {
    closeModal();
  }
});

function openModal(modal) {
  document.querySelectorAll('#overlay > *').forEach(function (modal) {
    modal.classList.remove('show');
  });
  document.querySelector('#overlay').classList.add('show');
  document.querySelector(modal).classList.add('show');
}

document.querySelector('.user-login').addEventListener('click', function (e) {
  e.preventDefault();
  openModal('#modal-login');
});