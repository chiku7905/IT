// script.js
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const nav = document.querySelector('.nav');
  const openSignIn = document.getElementById('openSignIn');
  const closeSignIn = document.getElementById('closeSignIn');
  const modal = document.getElementById('signinModal');
  const modalCancel = document.getElementById('modalCancel');

  hamburger && hamburger.addEventListener('click', () => {
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
  });

  openSignIn && openSignIn.addEventListener('click', () => {
    modal.setAttribute('aria-hidden', 'false');
  });

  closeSignIn && closeSignIn.addEventListener('click', () => {
    modal.setAttribute('aria-hidden', 'true');
  });

  modalCancel && modalCancel.addEventListener('click', () => {
    modal.setAttribute('aria-hidden', 'true');
  });

  // Simple form handler (demo only; replace with real auth)
  const signinForm = document.getElementById('signinForm');
  if (signinForm) {
    signinForm.addEventListener('submit', e => {
      e.preventDefault();
      // demo: redirect to dashboard
      window.location.href = 'home.html';
    });
  }
});
