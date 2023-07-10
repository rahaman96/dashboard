import Post from '@/components/Post/post'
import Dashboard from '@/components/dashboard/Dashboard'
import React from 'react'

const dashboard = () => {
  return (
    // <div>
    //     <Dashboard/>
    // </div>

    <div className='flex'>
    <div className='w-ful lg:w-1/5'>
    <Dashboard/>
    </div>
    <div className='w-full p-2 lg:w-4/5 mt-14'>
      <Post/>
    </div>
  </div>
  )
}

export default dashboard