// Slider example (very simple version)

// const slides = document.querySelectorAll('.offer__slide'),
//   prev = document.querySelector('.offer__slider-prev'),
//   next = document.querySelector('.offer__slider-next'),
//   total = document.querySelector('#total'),
//   current = document.querySelector('#current');

// let slideIndex = 1;

// if (slides.length < 10) {
//   total.textContent = `0${slides.length}`;
// } else {
//   total.textContent = slides.length;
// }

// const showSlides = (index) => {
//   if (index > slides.length) {
//     slideIndex = 1;
//   }

//   if (index < 1) {
//     slideIndex = slides.length;
//   }

//   slides.forEach((slide) => (slide.style.display = 'none'));
//   slides[slideIndex - 1].style.display = 'block';

//   if (slides.length < 10) {
//     current.textContent = `0${slideIndex}`;
//   } else {
//     current.textContent = slideIndex;
//   }
// };

// const changeSlide = (i) => {
//   showSlides((slideIndex += i));
// };
// prev.addEventListener('click', () => {
//   changeSlide(-1);
// });
// next.addEventListener('click', () => {
//   changeSlide(1);
// });

// showSlides(slideIndex);

// Slider example (carousel)
const slider = ({
  container,
  slide,
  nextArrow,
  prevArrow,
  totalCounter,
  currentCounter,
  wrapper,
  inner,
}) => {
  const slider = document.querySelector(container),
    slides = document.querySelectorAll(slide),
    prev = document.querySelector(prevArrow),
    next = document.querySelector(nextArrow),
    total = document.querySelector(totalCounter),
    current = document.querySelector(currentCounter),
    slidesWrapper = document.querySelector(wrapper),
    slidesInner = document.querySelector(inner),
    width = window.getComputedStyle(slidesWrapper).width;

  let slideIndex = 1;
  let offset = 0;

  if (slides.length < 10) {
    total.textContent = `0${slides.length}`;
    current.textContent = `0${slideIndex}`;
  } else {
    total.textContent = slides.length;
    current.textContent = slideIndex;
  }

  slidesInner.style.width = 100 * slides.length + '%';
  slidesInner.style.display = 'flex';
  slidesInner.style.transition = '0.5s all';

  slidesWrapper.style.overflow = 'hidden';

  slides.forEach((slide) => (slide.style.width = width));

  slider.style.position = 'relative';

  const indicators = document.createElement('ol'),
    dots = [];
  indicators.classList.add('carousel-indicators');
  slider.append(indicators);

  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement('li');
    dot.classList.add('dot');
    dot.setAttribute('data-slide-to', i + 1);
    if (i === 0) {
      dot.style.opacity = 1;
    }
    indicators.append(dot);
    dots.push(dot);
  }

  const changeSlide = () => {
    slidesInner.style.transform = `translateX(-${offset}px)`;

    if (slides.length < 10) {
      current.textContent = `0${slideIndex}`;
    } else {
      current.textContent = slideIndex;
    }

    dots.forEach((dot) => (dot.style.opacity = '.5'));
    dots[slideIndex - 1].style.opacity = 1;
  };

  next.addEventListener('click', () => {
    if (offset === parseFloat(width) * (slides.length - 1)) {
      offset = 0;
    } else {
      offset += parseFloat(width);
    }

    if (slideIndex === slides.length) {
      slideIndex = 1;
    } else {
      slideIndex++;
    }

    changeSlide();
  });

  prev.addEventListener('click', () => {
    if (offset === 0) {
      offset = parseFloat(width) * (slides.length - 1);
    } else {
      offset -= parseFloat(width);
    }

    if (slideIndex === 1) {
      slideIndex = slides.length;
    } else {
      slideIndex--;
    }

    changeSlide();
  });

  indicators.addEventListener('click', (evt) => {
    if (!evt.target.dataset.slideTo) {
      return;
    }
    const slideTo = evt.target.dataset.slideTo;

    slideIndex = slideTo;
    offset = parseFloat(width) * (slideTo - 1);

    if (slides.length < 10) {
      current.textContent = `0${slideIndex}`;
    } else {
      current.textContent = slideIndex;
    }

    changeSlide();
  });
};

export { slider };
