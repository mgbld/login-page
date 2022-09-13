import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./Login.css";

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className='max-w-sm font-poppins px-3'>
      <form
        className='bg-gray-50 rounded-lg px-8 pt-8 pb-8'
        onSubmit={formik.handleSubmit}>
        <div className='mb-7'>
          <span className='text-xl font-semibold text-gray-700'>Login</span>
          <p className='text-gray-400 mt-4'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            mattis nibh ut enim ullamcorper accumsan. Sed quis erat ullamcorper,
            congue metus ac, ullamcorper magna.
          </p>
        </div>
        <div className='mb-6'>
          <input
            className='border border-gray-300 rounded-md w-full py-1 px-3 text-gray-700 text-md  focus:outline-none placeholder-gray-300'
            id='email'
            type='text'
            placeholder='E-mail'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.errors.email && formik.touched.email ? (
            <p className='text-red-500 mt-2'>{formik.errors.email}</p>
          ) : null}
        </div>
        <div className='mb-6'>
          <input
            className='border border-gray-300 rounded-md w-full py-1 px-3 text-gray-700 text-md  focus:outline-none placeholder-gray-300'
            id='password'
            type='password'
            placeholder='Password'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.errors.password && formik.touched.password ? (
            <p className='text-red-500 mt-2'>{formik.errors.password}</p>
          ) : null}
        </div>
        <div className='mb-6'>
          <input
            className='appearance-none h-5 w-5 border border-gray-300 rounded-md bg-white checked:bg-orange-500 checked:border-orange-500 focus:outline-none bg-center float-left mr-2 mt-[2px] cursor-pointer'
            type='checkbox'
            value=''
            id='flexCheckDefault'
          />

          <label
            className=' text-gray-400 text-md block'
            htmlFor='flexCheckDefault'>
            Remember me
          </label>
        </div>
        <div className='flex items-center justify-between mb-3'>
          <button
            className='bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded focus:outline-none w-screen '
            type='button'>
            Login
          </button>
        </div>
        <a href='!#' className='text-md text-blue-500'>
          Forgot Password?
        </a>
      </form>
    </div>
  );
};

export default Login;
