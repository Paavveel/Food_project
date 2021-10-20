const isEscEvent = (evt) => {
  if (evt.key === 'Escape') {
    closeModal('.modal');
  }
};
const modalTimerId = setTimeout(() => showModal('.modal'), 30000);

function showModal(modalSelector, modalTimerId) {
  const modal = document.querySelector(modalSelector);

  modal.classList.add('show');
  modal.classList.remove('hide');
  document.body.style.overflow = 'hidden';
  document.addEventListener('keydown', isEscEvent);
  if (modalTimerId) {
    clearTimeout(modalTimerId);
  }
}
const closeModal = (modalSelector) => {
  const modal = document.querySelector(modalSelector);

  modal.classList.add('hide');
  modal.classList.remove('show');
  document.body.style.overflow = '';
  document.removeEventListener('keydown', isEscEvent);
};

const modal = (triggerSelector, modalSelector) => {
  const modalTrigger = document.querySelectorAll(triggerSelector),
    modal = document.querySelector(modalSelector);

  modalTrigger.forEach((btn) => {
    btn.addEventListener('click', () => showModal(modalSelector, modalTimerId));
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target.getAttribute('data-close') === '') {
      closeModal(modalSelector);
    }
  });

  const showModalByScroll = () => {
    if (
      window.scrollY + document.documentElement.clientHeight >=
      document.documentElement.scrollHeight
    ) {
      showModal(modalSelector, modalTimerId);
      window.removeEventListener('scroll', showModalByScroll);
    }
  };

  window.addEventListener('scroll', showModalByScroll);
};

export { modal, showModal, closeModal, modalTimerId };
