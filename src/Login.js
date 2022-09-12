import React from "react";
import { Formik } from "formik";
import "./Login.css";

const Login = () => (
  <div>
    <Formik
      initialValues={{ email: "", password: "" }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}>
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <div class='max-w-sm'>
          <form class='bg-gray-50 rounded-lg px-8 pt-8 pb-8'>
            <div className='mb-7'>
              <span className='text-2xl font-semibold text-gray-700'>
                Login
              </span>
              <p className='text-gray-400 mt-4 text-xl'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur mattis nibh ut enim ullamcorper accumsan. Sed quis
                erat ullamcorper, congue metus ac, ullamcorper magna.
              </p>
            </div>
            <div className='mb-6'>
              <input
                className='border border-gray-300 rounded-md w-full py-1 px-3 text-gray-700 text-md  focus:outline-none placeholder-gray-300'
                id='username'
                type='text'
                placeholder='E-mail'
              />
            </div>
            <div className='mb-6'>
              <input
                className='border border-gray-300 rounded-md w-full py-1 px-3 text-gray-700 text-md  focus:outline-none placeholder-gray-300'
                id='password'
                type='password'
                placeholder='Password'
              />
            </div>
            <div className='mb-5'>
              <input
                class='form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-md bg-white checked:bg-orange-500 checked:border-orange-500 focus:outline-none mt-1 bg-center float-left mr-2 cursor-pointer'
                type='checkbox'
                value=''
                id='flexCheckDefault'
              />
              <label
                class='form-check-label inline-block text-gray-400 text-sm'
                for='flexCheckDefault'>
                Remember me
              </label>
            </div>
            <div className='flex items-center justify-between mb-3'>
              <button
                className='bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded focus:outline-none w-screen text-xl'
                type='button'>
                Login
              </button>
            </div>
            <a href='!#' className='text-md text-blue-500'>
              Forgot Password?
            </a>
          </form>
        </div>
      )}
    </Formik>
  </div>
);

export default Login;
