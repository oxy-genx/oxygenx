import React from 'react'

const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-white to-green-200'>

    
        <div className='max-w-screen-lg mx-auto flex flex-col -intem-center justify-center h-full px-4 md:flex-row'>
            <div className='bg-green flex flex-col justify-center h-full '>

                <h2 className=' text-5xl sm:text-4xl font-bold font-mono text-black hover:text-shadow:10px-green-300'>Join the change</h2>

              

                <button className='font-mono font-bold text-2xl justify-center py-2 bg-green-400 m-4 hover:border border-black' >Contribute</button>
                
            </div>

            

       
        </div>
    </div>
  )
}

export default Home