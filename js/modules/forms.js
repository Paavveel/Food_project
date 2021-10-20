import { showModal } from './modal';
import { closeModal } from './modal';
import { modalTimerId } from './modal';
import { postData } from '../services/services';

const forms = (formSelector) => {
  const forms = document.querySelectorAll(formSelector);

  const message = {
    loading: 'img/form/spinner.svg',
    success: 'Спасибо! Скоро мы с вами свяжемся',
    failure: 'Что-то пошло не так...',
  };

  const showThanksModal = (message) => {
    const prevModalDialog = document.querySelector('.modal__dialog');

    prevModalDialog.classList.add('hide');
    showModal('.modal', modalTimerId);

    const thanksModal = document.createElement('div');
    thanksModal.classList.add('modal__dialog');
    thanksModal.innerHTML = `
      <div class="modal__content">
      <div class="modal__close" data-close>&times;</div>
      <div class="modal__title">
        ${message}
      </div>
        </div>
      `;

    document.querySelector('.modal').append(thanksModal);
    setTimeout(() => {
      thanksModal.remove();
      prevModalDialog.classList.add('show');
      prevModalDialog.classList.remove('hide');
      closeModal('.modal');
    }, 4000);
  };

  const bindPostData = (form) => {
    form.addEventListener('submit', (evt) => {
      evt.preventDefault();

      const statusMessage = document.createElement('img');
      statusMessage.src = message.loading;
      statusMessage.style.cssText = 'display: block; margin: 0 auto;';
      form.insertAdjacentElement('afterend', statusMessage);

      const formData = new FormData(form);
      const json = JSON.stringify(Object.fromEntries(formData.entries()));

      // Отправка данных с помощью самописной функции postData

      postData('http://localhost:3000/requests', json)
        .then((data) => {
          console.log(data);
          showThanksModal(message.success);
        })
        .catch(() => showThanksModal(message.failure))
        .finally(() => {
          form.reset();
          statusMessage.remove();
        });

      // Отправка данных с помощью Axios

      // axios({
      //   method: 'post',
      //   url: 'http://localhost:3000/requests',
      //   headers: { 'Content-type': 'application/json' },
      //   data: json,
      // })
      //   .then((data) => {
      //     console.log(data);
      //     showThanksModal(message.success);
      //   })
      //   .catch(() => showThanksModal(message.failure))
      //   .finally(() => {
      //     form.reset();
      //     statusMessage.remove();
      //   });
    });
  };

  forms.forEach((form) => bindPostData(form));
};

export { forms };
