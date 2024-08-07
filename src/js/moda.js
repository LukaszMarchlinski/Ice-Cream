(() => {
  const openModalBtns = document.querySelectorAll('[data-modal-open]');
  const closeModalBtn = document.querySelector('[data-modal-close]');
  const modal = document.querySelector('[data-modal]');

  openModalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      modal.classList.toggle('is-hidden');
    });
  });

  closeModalBtn.addEventListener('click', () => {
    modal.classList.toggle('is-hidden');
  });
})();
