import React from 'react';
import Image from 'next/image';

const CardForm = ({cardImage, cardImgAlt, submitButton, cardFormTitle, message}) => {
  return (  
    <div className='card'>
      <Image
        className='card-image'
        src={cardImage}
        width={360}
        height={240}
        alt={cardImgAlt}
      />
      <form
        onSubmit={submitButton}
      >
        <button
          className='btn btn-primary'
        >{cardFormTitle}</button>
      </form>
      <div className='info'>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default CardForm;