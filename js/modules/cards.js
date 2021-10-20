import { getData } from '../services/services';

const cards = () => {
  // Вариант отрисовки на классах
  // class MenuCard {
  //   constructor(src, alt, title, descr, price, parenrSelector, ...classes) {
  //     this.src = src;
  //     this.alt = alt;
  //     this.title = title;
  //     this.descr = descr;
  //     this.price = price;
  //     this.classes = classes;
  //     this.parent = document.querySelector(parenrSelector);
  //     this.transfer = 27;
  //     this.changePrice();
  //   }

  //   changePrice() {
  //     this.price = this.price * this.transfer;
  //   }

  //   render() {
  //     const element = document.createElement('div');
  //     if (this.classes.length === 0) {
  //       this.element = 'menu__item';

  //       element.classList.add(this.element);
  //     } else {
  //       this.classes.forEach((className) => element.classList.add(className));
  //     }

  //     element.innerHTML = `

  //           <img src=${this.src} alt=${this.alt} />
  //           <h3 class="menu__item-subtitle">${this.title}</h3>
  //           <div class="menu__item-descr">
  //             ${this.descr}
  //           </div>
  //           <div class="menu__item-divider"></div>
  //           <div class="menu__item-price">
  //             <div class="menu__item-cost">Цена:</div>
  //             <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
  //           </div>

  //     `;
  //     this.parent.append(element);
  //   }
  // }

  // Применение самописной функции Fetch на классах

  // getData('http://localhost:3000/menu').then((data) => {
  //   data.forEach(({ img, altimg, title, descr, price }) => {
  //     new MenuCard(
  //       img,
  //       altimg,
  //       title,
  //       descr,
  //       price,
  //       '.menu .container'
  //     ).render();
  //   });
  // });

  // Применение Axios на классах

  // axios.get('http://localhost:3000/menu').then((data) => {
  //   data.data.forEach(({ img, altimg, title, descr, price }) => {
  //     new MenuCard(
  //       img,
  //       altimg,
  //       title,
  //       descr,
  //       price,
  //       '.menu .container'
  //     ).render();
  //   });
  // });

  // Вариант отрисовки с помощью функции

  const renderCards = (data) => {
    data.forEach(({ img, altimg, title, descr, price }) => {
      price *= 27;
      const element = document.createElement('div');

      element.classList.add('menu__item');

      element.innerHTML = `
              <img src=${img} alt=${altimg} />
              <h3 class="menu__item-subtitle">${title}</h3>
              <div class="menu__item-descr">
                ${descr}
              </div>
              <div class="menu__item-divider"></div>
              <div class="menu__item-price">
                <div class="menu__item-cost">Цена:</div>
                <div class="menu__item-total"><span>${price}</span> грн/день</div>
              </div>
      `;

      document.querySelector('.menu .container').append(element);
    });
  };

  // Применение самописной функции Fetch с функцией отрисовки

  getData('http://localhost:3000/menu').then((data) => renderCards(data));

  // Применение Axios с функцией отрисовки

  //   axios
  //     .get('http://localhost:3000/menu')
  //     .then((data) => renderCards(data.data));
};

export { cards };
