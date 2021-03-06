import React from 'react';
import Image from 'next/image';
import Link from 'next/link'

const Card = ({cardClass, cardTitle, cardCounter, cardDestiny, cardImage, cardImgAlt, destinyTitle}) => {
  return (  
    <div className={`card ${cardClass}`}>
      <div className='info'>
        <h4>{cardTitle}</h4>
        <h3>{cardCounter}</h3>
      </div>
      <Image
        className='card-image'
        src={cardImage}
        width={360}
        height={240}
        alt={cardImgAlt}
      />
      <Link href={`/${cardDestiny}`}>
        <h2>{destinyTitle}</h2>
      </Link>
    </div>
  );
}

export default Card;