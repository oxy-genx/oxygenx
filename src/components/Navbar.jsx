import React from 'react'

const navbar = () => {

    

  return (

    

    <div className='flex justify-between items-center w-full h-20 px-4 backdrop-blur-sm text-green-400 font-mono font-bold fixed brand-name'>

        <div className='' >
            <h1 className='text-4xl ml-2'>Oxy<span className=' hover:text-black duration-200'>gen</span>X</h1>
            <p className='text-black'>.live</p>
        </div>

        <ul className='hidden md:flex'>
            <li className='px-4 cursor-pointer capitalize text-green-400 hover:scale-150 duration-200'>About</li>
            <li className='px-4 cursor-pointer capitalize text-green-400 hover:scale-150 duration-200'>Green <span className='text-black'>paper</span></li>
            <li className='px-4 cursor-pointer capitalize text-green-400 hover:scale-150 duration-200'>Buy/sell NFT </li>
            <li className='px-4 cursor-pointer capitalize text-green-400 hover:scale-150 duration-200'> Contact </li>
            <li className='px-4 cursor-pointer capitalize text-green-400 hover:scale-150 duration-200'>Oxy-token</li>


        </ul>

      
    </div>
   
    

  )
}

export default navbar