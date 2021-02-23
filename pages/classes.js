import React, { Fragment, useState, useEffect } from 'react';
import LayoutClasses from '../components/LayoutClasses';
import Header from '../components/Header';
import Image from 'next/image';
import CardForm from '../components/CardForm';
import Card from '../components/Card';
import {useQuery, gql } from '@apollo/client';

const GET_SENSEI = gql`
  query getSensei{
    getSensei{
      name
      level
      imageUrl
    }
  }
`;

const GET_KARATEKAS = gql`
  query getKaratekas{
    getKaratekas{
      id  
      name
      genre
      solvency
      nature
      level
      strength
      dexterity
      stamina
      mana
      standing
      imageUrl
    }
  }
`;

const Classes = () => {

  // consultas de Apollo 
  const {data: datas, loading: loadings, error: errors} = useQuery(GET_SENSEI);

  const {data: datak, loading: loadingk, error: errork} = useQuery(GET_KARATEKAS);

  const [message, setMessage] = useState(null);

  useEffect(() => {
    setMessage(message);
  }, [])

  if(loadings || loadingk) return <h1>Cargando...</h1>

  // Variables

  const nameOfSensei = datas.getSensei.name;
  const imageOfSensei = datas.getSensei.imageUrl;
  const levelOfSensei = datas.getSensei.level;

  const karatekas = datak.getKaratekas;

  return ( 
    <Fragment>
      <LayoutClasses>
        <Header/>
        <div className='main-classes'>
          <h1 className='sensei-h1'>Sensei</h1>
          <div className='list'>
            <div className='entry'>
              <Image
                className='sensei-img'
                src={imageOfSensei}
                width={240}
                height={480}
                alt='Sensei'
              />
              <h2>{nameOfSensei}</h2>
              <Image
                className='sensei-img'
                src={`/images/${levelOfSensei}.jpg`}
                width={240}
                height={480}
                alt='Sensei'
              />
            </div>
          </div>
          <h1>Class</h1>
          <div className='list'>
            {karatekas.map(karateka => {
              <div key={karateka._id} className='entry'>
                <Image
                  src={karateka.imageUrl}
                  width={240}
                  height={480}
                  alt={karateka.name}
                />
                <h2>{karateka.name}</h2>
                <Image
                  className='sensei-img'
                  src={`/images/${karateka.level}.jpg`}
                  width={240}
                  height={480}
                  alt={karateka.level}
                />
              </div>
            })}

          </div>
        </div>
        <h1>Training</h1>
        <div className='main-menu'>
          <CardForm
            cardImage='/images/train.jpg'
            cardImgAlt='Train'
            submitButton=''
            cardFormTitle='Train'
            message=''
          />
          <CardForm
            cardImage='/images/battle.jpg'
            cardImgAlt='Battle'
            submitButton=''
            cardFormTitle='Battle'
            message=''
          />
          <CardForm
            cardImage='/images/tourney.jpg'
            cardImgAlt='Tourney'
            submitButton=''
            cardFormTitle='Tourney'
            message=''
          />
        </div>
        <div className='menu'>
          <Card
            cardClass='dojo'
            cardDestiny='dojo'
            cardImage='/images/outside-dojo.jpg'
            cardImgAlt='Outside Dojo'
            destinyTitle='Back to Dojo'
          />
          <Card
            cardClass='fight'
            cardDestiny='fight'
            cardImage='/images/look-for-fight.jpg'
            cardImgAlt='Look for Fight'
            destinyTitle='Look for a Fight'
          />
        </div>
      </LayoutClasses>
    </Fragment>
   );
}

export default Classes;