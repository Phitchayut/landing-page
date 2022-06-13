import React from 'react'
import Search from '../../asset/search.png'

const Header = () => {
  return (
    <div className='text-center mt-5'>
        <h1 className='text-5xl '>Popular Pro Stock Vectors</h1>
        <p className='text-[#979797] mt-5'>High quality Vectors with worry-free licensing for <br /> personal and commercial use.</p>
        <form action="" className='flex justify-center items-center space-x-3 py-5'>
            <button className='border-solid border-[1px] border-[#979797] py-2 px-5 rounded-xl'>Vectors <i class="fa fa-caret-down" aria-hidden="true"></i>
</button>
            <input type="text" placeholder='Search Vectors...' className='w-[30rem] p-2 px-5' />
            <a href="#"> <img src={Search} className='w-8 h-8 rounded-full shadow-lg' alt="" /> </a>
        </form>
    </div>
  )
}

export default Header