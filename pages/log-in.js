import React, { Fragment, useState } from 'react';
import Layout from '../components/Layout';
import Image from 'next/image';
import Link from 'next/link';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {useMutation, gql} from '@apollo/client';
import {useRouter} from 'next/router';

const AUTH_USER = gql`
  mutation authUser($input: AuthInput){
    authUser(input: $input){
      token
    }
  }
`;

const LogIn = () => {

  // Routing 
  const router = useRouter();

  // State para el mensaje
  const[message, setMessage] = useState(null);

  // Mutation para crear nuevos usuarios en apollo 
  const [authUser] = useMutation(AUTH_USER);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup
              .string()
              .email('Email is not valid')
              .required('Email is required'),
      password: Yup
                  .string()
                  .required('Password is required')
    }),
    onSubmit: async valores => {
      const {email, password} = valores;
      try{
        const {data} = await authUser({
          variables: {
            input: {
              email,
              password
            }
          }
        });
        console.log(data);
        const {token} = data.authUser;
        localStorage.setItem('token', token);
        setMessage(`Authenticating...`);
          setTimeout(() => {
          setMessage(null)
          router.push('/dojo', '/dojo');
          }, 500);        
          
      }catch(err) {
        setMessage(err.message);
        setTimeout(() => {
          setMessage(null);
        }, 2000);
      }
    }
  });

  const showMessage = () => {
    return(
      <div className='entry-form'>
        <p>{message}</p>
      </div>
    )
  }

  return ( 
    <Fragment>
      <Layout>
        <div className="main">
          <div className="vista">
            <h1>Log-in</h1>
            <form 
              onSubmit={formik.handleSubmit}
              id='logIn'>
              <div className="main-classes">
                <div className="list">
                  <div className="entry-form">
                    {message && showMessage()}
                  </div>
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
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                    />
                  </div>

                  {formik.errors.email && formik.touched.email &&
                    <div className='entry-form form-error'>
                      <p><strong>Error</strong></p>
                      <p>{formik.errors.email}</p>
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
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.password}
                    />
                  </div>

                  {formik.errors.password && formik.touched.password &&
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
                      value='Enter' />
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
              <Image
                className='card-image'
                src='/images/sign-up.jpg'
                width={240}
                height={240}
                alt='Sign Up'
              />
              <p>Don't have an account?</p>
            <Link href='/sign-up'>
              <h2>Sing-Up</h2>
            </Link>
          </div>
        </div>
      </Layout>
    </Fragment>
   );
}
 
export default LogIn;