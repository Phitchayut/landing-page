import React from 'react'
import Filter from '../../asset/filter.png'
import Add from '../../asset/add-button.png'
import Products from './Products'

const Main = () => {
  return (
    <div className='container mx-auto'>
        <nav className='flex justify-between items-center'>
            <div className="nav-l">
                <ul className='flex space-x-8'>
                    <li><a href="#" className='font-medium text-[1rem]'>Latest <span className='text-[#ff4e00]'>*</span></a></li>
                    <li><a href="#" className='font-medium text-[1rem]'>Popular</a></li>
                    <li><a href="#" className='font-black'>|</a></li>
                    <li><a href="#" className='text-[#ff4e00]'>Premium</a></li>
                    <li><a href="#" className='text-[#3481ef]'>Free</a></li>
                </ul>
            </div>
            <div className="nav-r flex space-x-8 mr-20">
                <img src={Filter} className='w-9 h-9 cursor-pointer' alt="" />
                <img src={Add} className='w-9 h-9 cursor-pointer' alt="" />
            </div>
        </nav>

        <Products />
    </div>
  )
}

export default Main