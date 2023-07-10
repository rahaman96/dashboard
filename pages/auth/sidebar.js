import Profile from '@/components/SideBar/Profile'
import SideBarNav from '@/components/SideBar/SideBarNav'
import React from 'react'

const sidebar = () => {
  return (
    <div className='flex'>
      <div className='w-ful lg:w-1/5'>
        <SideBarNav />
      </div>
      <div className='w-full p-2 lg:w-4/5 mt-14'>
        <Profile />
      </div>
    </div>
  )
}

export default sidebar