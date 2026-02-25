import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/ui/Sidebar'

export default function AppLayout() {
  return (
    <div className='flex'>
    
      <div className='w-30 container bg-blue-500 p-2'><Sidebar/></div>
      <div className='flex-1 container bg-blue-300 p-2'> <><Outlet/></></div>
    </div>
  )
}
