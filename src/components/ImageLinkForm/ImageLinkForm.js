import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <p className='f3'>
        {`Put an image link with a face and this Magic Brain will detect it in your pictures. Give it a try!`}
      </p>
      <div className='center'>
        <div className='center form pa4 br3 shadow-5'>
          <input className='f4 pa2 w-70 center' type='tex' onChange={onInputChange} />
          <button 
            className='w-30 grow f4 ling ph3 pv2 dib white bg-light-purple'
            onClick={onButtonSubmit}
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
}

export default ImageLinkForm;