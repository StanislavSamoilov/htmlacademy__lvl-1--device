const createPopUp = ({  popup='',
                        open=`${popup}--open`,
                        close=`${popup}--close`,
                        show=`${popup}--show`,
                      } = {}) => 
{
  const pPopup = document.querySelector(`.${popup}`);
  const pOpen = document.querySelector(`.${open}`);
  const pClose = pPopup.querySelector(`.${close}`);
  
  pOpen.addEventListener('click', function(evt) {
    evt.preventDefault();
    pPopup.classList.add(show);
  });
  
  pClose.addEventListener('click', function(evt) {
    evt.preventDefault();
    pPopup.classList.remove(show);
  });
}

export default createPopUp;