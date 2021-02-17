import React, { Fragment } from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Image from 'next/image';
import Aside from '../components/Aside';
import Card from '../components/Card';

const Dojo = () => {

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
            counter='masters'
            image='/images/male4.jpg'
            altImage='Master'
            idButton='master-recruit'
            titleButton='Recruit'
            message='message'
          />
        </div>
        <div className='main-menu'>
        </div>
        <div className='menu'>
          <Card
            cardClass='classes'
            cardTitle='Trainees'
            cardCounter='traineesNumb'
            cardDestiny='classes'
            cardImage='/images/class.jpg'
            cardImgAlt='Martial Art Class'
            destinyTitle='Go to Classes'
          />
          <Card
            cardClass='valley'
            cardTitle='Debs'
            cardCounter='debs'
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