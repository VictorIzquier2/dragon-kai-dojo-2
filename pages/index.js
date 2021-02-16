import React, { Fragment } from 'react';
import Layout from '../components/Layout';
import Image from 'next/image';


const Index = () => {
  return ( 
    <Fragment>
      <Layout>
        <div className='main'>
          <div className='vista'>
            <h1>Dragon Kai Dojo 2</h1>
            <Image
              className='background-image' 
              src='/images/ninja-warrior-bg.jpg'
              width={640}
              height={480}
            />
          </div>  
        </div>
        <div className='menu'>
          <div className='card log-in'>
            <div className='info'>
            </div>
            <a href='/log-in'>
              <Image
                className='card-image'
                src='/images/log-in.jpg'
                width={240}
                height={240}
                alt='Log In'
              />
              <h2>Log-In</h2>
            </a>
          </div>
          <div className='card log-in'>
            <div className='info'>
            </div>
            <a href='/sign-up'>
              <Image
                className='card-image'
                src='/images/sign-up.jpg'
                width={240}
                height={240}
                alt='Sign Up'
              />
              <h2>Sign-Up</h2>
            </a>
          </div>
        </div>
      </Layout>
    </Fragment>
   );
}
 
export default Index;