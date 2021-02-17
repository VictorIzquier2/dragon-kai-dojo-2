import React, { Fragment } from 'react';
import Layout from '../components/Layout';
import Image from 'next/image';
import Link from 'next/link';

const errorMessage = '';

const LogIn = () => {
  return ( 
    <Fragment>
      <Layout>
        <div class="main">
          <div class="vista">
            <h1>Log-in</h1>
            <form action='/log-in' id='logIn'>
              <div className="main-classes">
                <div className="list">
                  <div className="entry-form">
                  </div>
                  <div className="entry-form">
                    <label htmlFor='email'><h4>Email</h4></label>
                    <input
                      className='input'
                      type='email'
                      name='email'
                      id='email'
                      placeholder='Your Email'
                    />
                  </div>
                  <div className="entry-form">
                    <label htmlFor='password'><h4>Password</h4></label>
                    <input
                      className='input'
                      type='password'
                      name='password'
                      id='password'
                      placeholder='************'
                    />
                  </div>
                  <div className="entry-form">
                    <h4>{/* */}</h4>
                  </div>
                  <div className="entry-form">
                    <input
                      type='submit'
                      className='btn btn-primary'
                      value='Enter' />
                  </div>
                  <div className='entry-form'>
                    {errorMessage ? <p>{errorMessage}</p> : null}
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className='menu'>
          <div className='card log-in'>
            <div className='info'>
            </div>
            <Link href='/sign-up'>
              <Image
                className='card-image'
                src='/images/sign-up.jpg'
                width={240}
                height={240}
                alt='Sign Up'
              />
            </Link>
              <p>Don't have an account?</p>
              <h2>Sing-Up</h2>
          </div>
        </div>
      </Layout>
    </Fragment>
   );
}
 
export default LogIn;