import createSlider from './components/createSlider';
import createPopUp  from './components/createPopUp';

createSlider(
  { 
    sliderControls: 'slider__controls', 
    sliderControl:  'slider__control',
    sliderItem:     'slider__item',
  }
);

createSlider(
  { 
    sliderControls: 'services__controls', 
    sliderControl:  'services__control',
    sliderItem:     'services__item',
  }
);

createPopUp(
  {
    popup: 'write-us',
  }
);

createPopUp(
  {
    popup: 'map',
  }
);