import React from 'react'

const getButton = (btn) => {
  switch (btn) {
    case 'first':
      return ({ css: 'btn btn-slider first-slide', text: 'First Slide' });
    case 'last':
      return ({ css: 'btn btn-slider last-slide', text: 'Last Slide' })
    case 'play':
      return ({ css: 'btn btn-slider play-slide', text: 'Stop' })
    case 'stop':
      return ({ css: 'btn btn-slider play-slide', text: 'Play' })
    default:
      throw new Error();
  }
}

export const ButtonSlider = ({ name, method }) => {

  return (
    <div>
      <button
        type='button'
        className={getButton(name).css}
        onClick={method}
      >
        {getButton(name).text}
      </button>
    </div>
  );
}

export default ButtonSlider;
