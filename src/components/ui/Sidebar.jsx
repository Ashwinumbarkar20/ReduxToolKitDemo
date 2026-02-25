import React from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (
    <div className='flex flex-col gap-3'>
    <span className='text-extrabold text-center bg-amber-200 text'>Menu</span>
      <ul>
        <Link to="/app/dashboard"><li className='hover:bg-blue-300 p-1'>DashBoard</li></Link>
        <Link to="/app/asset"><li className='hover:bg-blue-300 p-1'>Assets</li></Link>
        <Link to="/app/user"><li className='hover:bg-blue-300 p-1'>User</li></Link>
        <Link to="/app/setting"><li className='hover:bg-blue-300 p-1'>Settings</li></Link>
      </ul>
    </div>
  )
}
