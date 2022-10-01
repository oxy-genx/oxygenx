import React from 'react'

const team = () => {
  return (
    <div className='h-screen w-full bg-gradient-to-b from-white to-green-200'>

        <div>
                <h1 className=' mt-4 text-center text-4xl sm:text-5xl font-bold font-mono team'>Our Team.</h1>
            </div>

            <div className='flex flex-wrap mt-10 justify-center items-center'>
                <div className="p-4 lg:w-1/4 md:w-1/2">
                    <div className="h-full flex flex-col items-center text-center">
                        <img alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://pbs.twimg.com/profile_images/1566051333257302018/rDKr6X6M_400x400.jpg" />
                        <div className="w-full">
                            <h2 className="title-font font-medium text-lg text-gray-900">Yash Deharia</h2>
                            <h3 className="text-gray-500 mb-3">Founder & CEO</h3>
                            <p className="mb-4">Working on smart contract from back & also making user interface look better</p>
                            <span className="inline-flex">
                                <button className="text-gray-500" >
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                    </svg>
                                </button>
                                <button className="ml-2 text-gray-500" >
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                    </svg>
                                </button>
                                <button className="ml-2 text-gray-500" >
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                    </svg>
                                </button>
                            </span>
                        </div>
                    </div>

                </div>

                <div className="p-4 lg:w-1/4 md:w-1/2">
                    <div className="h-full flex flex-col items-center text-center">
                        <img alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://media-exp1.licdn.com/dms/image/C4D03AQG9YCVYrx_ZBQ/profile-displayphoto-shrink_200_200/0/1663761703107?e=1669852800&v=beta&t=RZ-1rxvo_xtIz66ZxsDmsfAcCpjGj2ek_Rtvv6W411k" />
                        <div className="w-full">
                            <h2 className="title-font font-medium text-lg text-gray-900">Rahul Karda</h2>
                            <h3 className="text-gray-500 mb-3">Co-founder & CTO</h3>
                            <p className="mb-4">Working on develoment and Interface on the Oxygenx web-app</p>
                            <span className="inline-flex">
                                <button className="text-gray-500" >
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                    </svg>
                                </button>
                                <button className="ml-2 text-gray-500" >
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                    </svg>
                                </button>
                                <button className="ml-2 text-gray-500" >
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                    </svg>
                                </button>
                            </span>
                        </div>
                    </div>

                </div>

</div>
    </div>
  )
}

export default team