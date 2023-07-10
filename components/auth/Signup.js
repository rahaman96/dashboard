import React, { useState } from 'react'
import styles from '../auth/Signup.module.css'
import opinion from '../../public/assets/image/Opinion-rafiki.svg'
import { FaFacebookF, FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { BiHide } from 'react-icons/bi';
import { useRouter } from 'next/router';
const Signup = () => {
  const router = useRouter();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('')
  const [errors, setErrors] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {}
    if (!firstName) {
      validationErrors.firstName = 'First Name is required'
    }
    if (!lastName) {
      validationErrors.lastName = 'Last Name is required'
    }
    if (!email) {
      validationErrors.email = 'Email is required';
    } else if (!isValidEmail(email)) {
      validationErrors.email = 'Invalid email format';
    }

    if (!password) {
      validationErrors.password = 'Password is required';
    } else if (!isValidPassword(password)) {
      validationErrors.password = 'Password must contain at least 8 characters';
    }
    if (password !== confirmPassword) {
      setErrors('Passwords do not match');
      return;
    }
    // Set errors or submit form
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // Submit form or perform further actions
      console.log('Form submitted!');
    }
  }

  const isValidEmail = (value) => {
    // Use a regular expression or any other validation logic to check the email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  const isValidPassword = (value) => {
    return value.length >= 8;
  };
  return (
    <div className={`min-h-screen py-40 ${styles.signup}`}>
      <div className='container mx-auto bg-white rounded-xl'>
        <div className='flex flex-wrap w-full bg-white  mx-auto rounded-xl shadow- overflow-hidden'>
          <div className={`w-full md:w-1/2 lg:w-1/2 ${styles.welcom}`}>
            <img src={opinion.src} alt="" />
          </div>
          <div className='w-full md:w-1/2 lg:w-1/2 py-4 px-4 md:px-12 lg:px-12'>
            <h2 className='text-3xl mb-4'>Sign up</h2>
            <p className='mb-2'>Create your account. it&apos;s free and only take a minute</p>
            <div className='grid grid-cols-2 gap-4'>
              <div className='border border-gray-400 py-1 px-2 bg-[#3A5795] text-white rounded-[5px] '>
                <button className='flex items-center mx-auto gap-2'>
                  <FaFacebookF />
                  <span>Sign up with Facebook</span>
                </button>
              </div>
              <div className='border border-gray-400 py-1 px-2 bg-[#444444] text-white rounded-[5px]'>
                <button className='flex items-center mx-auto gap-2'>
                  <FaGithub />
                  <span>Sign up with Github</span>
                </button>
              </div>
            </div>

            <div className='border border-gray-400 py-1 px-2 outline-none mt-5 mb-5'>
              <button className='flex items-center mx-auto gap-2'>
                <FcGoogle />
                <span>Sign up with Google</span>
              </button>
            </div>
            <p className='mb-5 text-center text-[#9CACC7]'>or</p>
            <form onSubmit={handleSubmit}>
              <div className='grid grid-cols-2 gap-4'>
                <div>
                  <input
                    type="text"
                    name="First Name"
                    placeholder='First Name'
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className='border border-gray-400 py-1 px-2 outline-none'
                  />
                  {errors.firstName && <p className="error text-red-500 mt-2">{errors.firstName}</p>}
                </div>
                <div>
                  <input
                    className='border border-gray-400 py-1 px-2 outline-none'
                    type="text"
                    name="Last Name"
                    placeholder='Last Name'
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}

                  />
                  {errors.lastName && <p className="error text-red-500 mt-2">{errors.lastName}</p>}

                </div>
              </div>
              <div className="mt-5">
                <input
                  className='border border-gray-400 py-1 px-2 outline-none w-full'
                  type="email"
                  name="email"
                  placeholder='Email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}

                />
                {errors.email && <p className="error text-red-500 mt-2">{errors.email}</p>}

              </div>
              <div className='mt-5'>
                <input
                  className='border border-gray-400 py-1 px-2 outline-none w-full'

                  type="password"
                  name="password"
                  placeholder='Password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}

                />
                {errors.password && <p className="error text-red-500 mt-2">{errors.password}</p>}

                {/* <BiHide /> */}
              </div>
              <div className='mt-5'>
                <input
                  className='border border-gray-400 py-1 px-2 outline-none w-full'
                  placeholder='Confirm Password'
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}

                />
                {errors.confirmPassword && <p className="error text-red-500 mt-2">{errors.confirmPassword}</p>}

              </div>
              <div className="mt-5 flex">
                <input type="checkbox" className='border border-gray-400' />
                <span className='m-2 text-[11px] md:text-[18px] lg:text-[18px]'>I accept the <a href="" className='text-purple-500 font-semibold'>Terms of Use</a> & <a href="" className='text-purple-500 font-semibold'> Privacy Policy</a></span>
              </div>

              <div className="flex justify-between mt-5">
                <div className='bg-gray-100 px-2 text-[16px] flex  lg:w-32 justify-center  items-center'>
                  <button type='submit' >Sign up</button>

                </div>
                <div className='flex gap-1'>
                  <h2>Have an account? </h2>
                  <button className='text-green-500' onClick={() => router.push('/')}>Sign in</button>
                </div>
              </div>
            </form>

          </div>
        </div>
      </div>

    </div>
  )
}

export default Signup