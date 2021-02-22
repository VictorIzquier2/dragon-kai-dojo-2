import React, { Fragment, useState, useEffect } from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Image from 'next/image';
import Aside from '../components/Aside';
import Card from '../components/Card';
import {useQuery, useMutation, gql } from '@apollo/client';

const NUMBEROF_KARATEKAS = gql`
  query getNumberOfKaratekas{
    getNumberOfKaratekas
  }
`;

const NUMBEROF_CIVILIANS = gql`
  query getNumberOfCivilians{
    getNumberOfCivilians
  }
`;

const NUMBEROF_MASTERS = gql`
  query getNumberOfMasters{
    getNumberOfMasters
  }
`;

const GET_MASTER = gql`
  query getMaster{
    getMaster{
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

const RECRUIT_SENSEI = gql`
  mutation newSensei($input: SenseiInput){
    newSensei(input: $input){
      name,
      genre,
      solvency,
      nature,
      level,
      strength,
      dexterity,
      stamina,
      mana,
      standing,
      imageUrl,
    }
  }
`;


const Dojo = () => {
 
  // Consultas de Apollo 
  const {data: datak, loading: loadingk, error: errork}  = useQuery(NUMBEROF_KARATEKAS);
  
  const {data: datac, loading: loadingc, error: errorc} = useQuery(NUMBEROF_CIVILIANS);
  
   const {data: datam, loading: loadingm, error: errorm} = useQuery(NUMBEROF_MASTERS);
  
   const {data: datagm, loading: loadinggm, error: errorgm} = useQuery(GET_MASTER);
  
  const [message, setMessage] = useState(null);
  
  const [newSensei] = useMutation(RECRUIT_SENSEI);
  
  const reclutarSensei = async e => {
     e.preventDefault();

    const master = datagm.getMaster;

    const {name, genre, solvency, nature, level, strength, dexterity, stamina, mana, standing, imageUrl} = master;

     try{
      const {data} = await newSensei({
        variables: {
          input: {
            name,
            genre,
            solvency,
            nature,
            level,
            strength,
            dexterity,
            stamina,
            mana,
            standing,
            imageUrl,
          }
        }
      });
      console.log(data.newSensei);
     }catch(err){
       setMessage(err.message);
     }

  }
   
  useEffect(() => {
    setMessage(message);
  }, [])
   
  if(loadingk || loadingc || loadingm || loadinggm) return <h1>Cargando...</h1>

  const numberOfKaratekas = datak.getNumberOfKaratekas;
  const numberOfCivilians = datac.getNumberOfCivilians;
  const numberOfMasters = datam.getNumberOfMasters;

  return ( 
    <Fragment>
      <Layout>
        <Header/>
        <div className='main'>
          <div className='vista'>
            <h1>Dojo</h1>
            <Image
              className='background-image'
              src='/images/dojo.jpg'
              width={860}
              height={640}
              alt='Real Dojo'
            />
          </div>
          <Aside
            card='master'
            asideTitle='Masters'
            idCounter='master-counter'
            counter={numberOfMasters}
            image='/images/male4.jpg'
            altImage='Master'
            idButton='master-recruit'
            submitButton={reclutarSensei}
            titleButton='Recruit'
            message={message}
          />
        </div>
        <div className='main-menu'>
        </div>
        <div className='menu'>
          <Card
            cardClass='classes'
            cardTitle='Trainees'
            cardCounter={numberOfKaratekas}
            cardDestiny='classes'
            cardImage='/images/class.jpg'
            cardImgAlt='Martial Art Class'
            destinyTitle='Go to Classes'
          />
          <Card
            cardClass='valley'
            cardTitle='Debs'
            cardCounter={numberOfCivilians}
            cardDestiny='city'
            cardImage='/images/city.jpg'
            cardImgAlt='Outside Dojo'
            destinyTitle='Go to City'
          />
        </div>
      </Layout>
    </Fragment>
   );
}

export default Dojo;