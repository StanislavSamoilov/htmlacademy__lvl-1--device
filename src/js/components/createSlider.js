const createSlider = ({ sliderControls='slider__controls',
                        sliderControl='slider__control',
                        sliderControlActive=`${sliderControl}--active`,
                        sliderItem='slider__item',
                        sliderItemActive=`${sliderItem}--active`,
                      } = {}) => 
{
  const sControls = document.body.querySelector(`.${sliderControls}`);
  const sControlList = document.body.querySelectorAll(`.${sliderControl}`);
  const sItemList = document.body.querySelectorAll(`.${sliderItem}`);
  let currentSlide = 0;

  sControls.addEventListener('click', function(evt){
    if ( evt.target.classList.contains(sliderControl) && 
        !evt.target.classList.contains(sliderControlActive)) {
          
          sControlList[currentSlide].classList.remove(sliderControlActive);
          sItemList[currentSlide].classList.remove(sliderItemActive);
          
          evt.target.classList.add(sliderControlActive);
          currentSlide = Object.keys(sControlList).find(key => sControlList[key] == evt.target);
          sItemList[currentSlide].classList.add(sliderItemActive);
    }
  });
}

export default createSlider;