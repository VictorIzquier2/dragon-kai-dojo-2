import React, { Fragment } from 'react';
import Layout from '../components/Layout';
import Image from 'next/image';
import Link from 'next/link';
import {useFormik} from 'formik';
import * as Yup from 'yup';

const errorMessage = '';



const SignUp = () => {
  
  // Validacion del formulario 
  const formik = useFormik({
    initialValues: {
      email: '',
      username: '',
      password: ''
    },
    validationSchema: Yup.object({
      username: Yup
                  .string()
                  .required('username is mandalory'),
      email: Yup
              .string()
              .email('Email is invalid')
              .required('email is mandalory'),
      password: Yup
                .string()
                .required('password is mandalory')
                .min(6, 'It should be longer than 6 characters')

    }),
    onSubmit: valores => {
      console.log('enviando');
      console.log(valores);
    }
  });

  return ( 
    <Fragment>
      <Layout>
        <div className='main'>
          <div className='vista'>
            <h1>Sign-Up</h1>
            <form 
              onSubmit={formik.handleSubmit} 
              id='logIn'
            >
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
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                  </div>

                  {formik.errors.email && formik.touched.email &&
                    <div className='entry-form form-error'>
                      <p><strong>Error</strong></p>
                      <p>{formik.errors.email}</p>
                    </div>
                  }

                  <div className="entry-form">
                    <label htmlFor='username'><h4>Username</h4></label>
                    <input
                      className='input'
                      type='text'
                      name='username'
                      id='username'
                      placeholder='Your Username'
                      value={formik.values.username}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      />
                  </div>
                  {formik.errors.username && formik.touched.username &&
                    <div className='entry-form form-error'>
                      <p><strong>Error</strong></p>
                      <p>{formik.errors.username}</p>
                    </div>
                  }
                  <div className="entry-form">
                    <label htmlFor='password'><h4>Password</h4></label>
                    <input
                      className='input'
                      type='password'
                      name='password'
                      id='password'
                      placeholder='************'
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                  </div>

                  {formik.errors.username && formik.touched.password &&
                    <div className='entry-form form-error'>
                      <p><strong>Error</strong></p>
                      <p>{formik.errors.password}</p>
                    </div>
                  }

                  <div className="entry-form">
                    <h4>{/* */}</h4>
                  </div>
                  <div className="entry-form">
                    <input
                      type='submit'
                      className='btn btn-primary'
                      value='Join'/>
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
          <div className='card sign-up'>
            <div className='info'>
            </div>
              <Image
                className='card-image'
                src='/images/log-in.jpg'
                width={240}
                height={240}
                alt='Sign Up'
              />
              <Link href='/log-in'>
              <h2>Log-in</h2>
            </Link>
          </div>
        </div>
      </Layout>
    </Fragment>
   );
}
 
export default SignUp;