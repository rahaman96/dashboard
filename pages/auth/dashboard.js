import PostPage from '@/components/Post/PostPage'
import Dashboard from '@/components/dashboard/Dashboard'
import React from 'react'

const dashboard = () => {
  return (
    <div className='flex'>
    <div className='w-ful lg:w-1/5'>
    <Dashboard/>
    </div>
    <div className='w-full p-2 lg:w-4/5 mt-14'>
      <PostPage/>
    </div>
  </div>
  )
}

export default dashboard