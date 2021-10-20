import { tabs } from './modules/tabs';
import { modal } from './modules/modal';
import { timer } from './modules/timer';
import { cards } from './modules/cards';
import { calc } from './modules/calc';
import { forms } from './modules/forms';
import { slider } from './modules/slider';

window.addEventListener('DOMContentLoaded', function () {
  tabs(
    '.tabheader__item',
    '.tabcontent',
    '.tabheader__items',
    'tabheader__item_active'
  );
  modal('[data-modal]', '.modal');
  timer('.timer', '2021-12-31');
  cards();
  calc();
  forms('form');
  slider({
    container: '.offer__slider',
    slide: '.offer__slide',
    prevArrow: '.offer__slider-prev',
    nextArrow: '.offer__slider-next',
    totalCounter: '#total',
    currentCounter: '#current',
    wrapper: '.offer__slider-wrapper',
    inner: '.offer__slider-inner',
  });
});
