import React, { useState } from 'react'
import { FaFacebookF, FaLinkedinIn, FaGoogle, FaRegEnvelope } from 'react-icons/fa';
import { MdLockOutline } from 'react-icons/md';
import { useRouter } from 'next/router'

const Login = () => {
  const router = useRouter()


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};

    // Perform custom validation

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

    // Set errors or submit form
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // Submit form or perform further actions
      console.log('Form submitted!');
    }
  };

  const isValidEmail = (value) => {
    // Use a regular expression or any other validation logic to check the email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  const isValidPassword = (value) => {
    return value.length >= 8;
  };

  return (
    <div className={`flex min-h-screen flex-col items-center justify-between md:p-24 lg:p-24 `}>
      <div className="flex flex-wrap bg-white rounded-2xl shadow-2xl w-full lg:max-w-4xl">
        <div className='w-full lg:w-1/2 p-5'>
          <div className='text-left font-body'>
            <span className='text-green-500'>Company</span>Logo
          </div>

          <div className='py-10 text-center '>
            <h2 className="md:text-3xl lg:text-3xl font-bold text-green-500 mb-2">
              Sign in to Account
            </h2>
            <div className='border-2 w-10 border-green-500  mb-2 mx-auto'></div>
            <div className='flex justify-center my-2'>
              <a href="" className='border-2 border-white-500 rounded-full p-3 mx-1 shadow-md'>
                <FaFacebookF className='text-sm' />
              </a>
              <a href="" className='border-2 border-white-500 rounded-full p-3 mx-1 shadow-md'>
                <FaLinkedinIn className='text-sm' />
              </a>
              <a href="" className='border-2 border-white-500 rounded-full p-3 mx-1 shadow-md'>
                <FaGoogle className='text-sm' />
              </a>
            </div>
            <p className='text-gray-400 my-4'>or use your email account</p>
            <form onSubmit={handleFormSubmit}>
              <div className="flex flex-col items-center mb-3">
                <div className="bg-gray-100 w-64 p- 2 flex items-center ">
                  <FaRegEnvelope className='text-gray-400 m-2' />
                  <input
                    className='bg-gray-100 outline-none text-sm flex-1'
                    type="email"
                    name='email'
                    placeholder='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                {errors.email && <p className="error text-red-500 mt-2">{errors.email}</p>}
              </div>
              <div>
                <div className="flex flex-col items-center">
                  <div className="bg-gray-100 w-64 p- 2 flex items-center ">
                    <MdLockOutline className='text-gray-400 m-2' />
                    <input
                      className='bg-gray-100 outline-none text-sm flex-1'
                      placeholder='Password'
                      type="password"
                      name='password'
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    
                  </div>
                </div>
                {errors.password && <p className="error text-red-500 mt-2">{errors.password}</p>}

              </div>
              <div className="flex w-64 mb-5 justify-between text-center mx-auto mt-5">
                <label className='flex items-center text-xs'>
                  <input type="checkbox" name='remember' className='mr-1' />
                  Remember me
                </label>
                <a href="" className='text-xs'>Forgot Password</a>
              </div>
              <div>
                {/* <button className='border-2 border-green-500 text-green-500 rounded-full text-center mx-auto flex  justify-center px-12 py-2 items-center font-semibold hover:text-white hover:bg-green-500' type='submit' onClick={() => router.push('')}>Sign in</button> */}

                <button className='border-2 border-green-500 text-green-500 rounded-full text-center mx-auto flex  justify-center px-12 py-2 items-center font-semibold hover:text-white hover:bg-green-500' onClick={() => router.push('/auth/sidebar')}>Sign in</button>
              </div>
            </form>
          </div>

        </div>
        <div className='w-full lg:w-1/2 bg-green-500 text-white rounded-tr-2xl rounded-br-2xl py-36'>
          <h2 className='text-3xl font-bold mb-2 text-center'>Hello, Friend</h2>
          <div className='border-2 w-10 border-white  mb-6 mx-auto'></div>
          <p className='mb-6 text-center font-medium text-[16px] '>Fill up personal information and <br /> start journey with us.</p>
          <button className='border-2 rounded-full text-center mx-auto flex justify-center px-12 py-2 items-center font-semibold hover:bg-white hover:text-green-500' onClick={() => router.push('/auth/signup')}>Sign up</button>
        </div>
      </div>
    </div>
  )
}

export default Login