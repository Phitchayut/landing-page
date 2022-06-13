import React from 'react'

const Products = () => {
    const data = [
        {
            fname: 'D',
            name: 'og illustration',
            img : "https://images.unsplash.com/flagged/photo-1573803625411-9edf9a6ae3b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
        },
        {
            fname: 'A',
            name: 'stronaut riding',
            img : "https://images.unsplash.com/photo-1579167728798-a1cf3d595960?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=726&q=80"
        },
        {
            fname: 'R',
            name: 'ockstar Guitarist',
            img : "https://images.unsplash.com/photo-1550532422-378e93ec379c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
        },
    ]


  return (
      <div className='flex gap-8'>
    {data.map((item) => (
    <div className='card w-1/3 h-[30rem] rounded-xl shadow-2xl'>
        <div className="card-title text-[#979797] my-5 px-10 text-right"><i class="fa fa-unlock-alt" aria-hidden="true"></i> Premium</div>
        <div className="card-body flex flex-col space-y-6 justify-center items-center">         
        
                <img className='w-[18rem] h-[15rem] object-cover rounded-3xl' src={item.img} alt="" />
                <h1><span className='text-6xl font-thin'>{item.fname}</span> <span className='text-3xl text-[#979797]'>{item.name}</span></h1>
                <a href='#' className='underline text-3xl'>Download<span className='ml-5'><i class="fa fa-download" aria-hidden="true"></i>
</span></a>
               
        </div>
    </div>
     ))}
     </div>
  )
}

export default Products