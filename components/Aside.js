import React from 'react';
import Image from 'next/image';

const Aside = ({card, asideTitle, idCounter, counter, image, altImage, idButton, titleButton, message}) => {
  return ( 
    <div className='aside'>
      <div className={`card ${card}`}>
        <div className='info'>
          <h4>{asideTitle}</h4>
          <h3 id={`${idCounter}`}>{counter}</h3>
          <Image
            className='card-image'
            src={image}
            width={240}
            height={480}
            alt={altImage}
          />
        </div>
        <form>
          <button 
            className='btn btn-primary'  
            id={`${idButton}`}
          >{titleButton}</button>
        </form>
        {message &&
          <p>{message}</p>
        }
      </div>
    </div>
   );
}
 
export default Aside;