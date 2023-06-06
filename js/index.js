










function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    
    testWebP(function (support) {
    
    if (support == true) {
    document.querySelector('body').classList.add('webp');
    }else{
    document.querySelector('body').classList.add('no-webp');
    }
    });



    const menuIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu');
const menuCancel = document.querySelector('.fa-bars');

menuIcon.addEventListener('click', () => {
  menu.classList.toggle('show-menu');
  // menuCancel.classList.toggle('cancel');

  if (menuCancel.classList.contains("cancel1")) {
      menuCancel.classList.remove('cancel1');
      menuCancel.classList.add('cancel2');
  } else {
      menuCancel.classList.remove('cancel2');
      menuCancel.classList.add('cancel1');
    }
  
});







    const modalController = ({modal, btnOpen, btnClose, time = 300}) => {
    const buttonElems = document.querySelectorAll(btnOpen);
    const modalElem = document.querySelector(modal);
  
    modalElem.style.cssText = `
      display: flex;
      visibility: hidden;
      opacity: 0;
      transition: opacity ${time}ms ease-in-out;
    `;
  
    const closeModal = event => {
      const target = event.target;
  
      if (
        target === modalElem ||
        (btnClose && target.closest(btnClose)) ||
        event.code === 'Escape'
        ) {
        
        modalElem.style.opacity = 0;
  
        setTimeout(() => {
          modalElem.style.visibility = 'hidden';
        }, time);
  
        window.removeEventListener('keydown', closeModal);
      }
    }
  
    const openModal = () => {
      modalElem.style.visibility = 'visible';
      modalElem.style.opacity = 1;
      window.addEventListener('keydown', closeModal)
    };
  
    buttonElems.forEach(btn => {
      btn.addEventListener('click', openModal);
    });
  
    modalElem.addEventListener('click', closeModal);
  };
  
  modalController({
    modal: '.modal1',
    btnOpen: '.section__button1',
    btnClose: '.modal__close',
  });
  
//   modalController({
//     modal: '.modal2',
//     btnOpen: '.section__button2',
//     btnClose: '.modal__close'
//   });
