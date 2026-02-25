import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/ui/Sidebar'

export default function AppLayout() {
  return (
    <div className='flex'>
      <div className='w-[20%] container bg-blue-500 p-2 h-screen'><Sidebar/></div>
      <div className='w-[80%] container bg-blue-300 p-2 h-screen'> <Outlet/></div>
    </div>
  )
}
