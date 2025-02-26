import React from 'react'
import rainbowIcon from '../icons/rainbow.png'
import profile1 from '../icons/profile1.png'

function Profile2() {
  return (
    <>
   <div className='h-[700px]  pb-28 bg-white'>
                <div className='flex flex-row gap-5'>
                    <p className='text-4xl font-bold pt-4 pl-5 mt-3 opacity-90'>My</p>
                    <img src={rainbowIcon} alt="Logo rainbow" className='w-25' />
                    <p className='text-2xl font-bold text-gray-400 pt-4 pl-5 mt-3 cursor-pointer'>PROFILE</p>

                </div>
                <div className='flex flex-col items-start'>
                    <p className='text-4xl font-bold pl-5 -mt-5 opacity-90'>Influencer</p>
                </div>
                <div className='h-[180px] bg-white flex justify-center gap-10'>
                    <div className='my-5'>
                        <img src={profile1} alt="Profile" className='w-30' />

                    </div>
                    <div className='my-10'>
                        <p className='text-2xl font-bold text-[#4091B7]'>Ms. Sophia Standard</p>
                        <p className='text-2xl font-bold text-[#85ADBF] ml-1'>Dreammy</p>
                        <p className='text-xl  text-[#85ADBF] ml-1'>ID: Dream_1998</p>
                    </div>
                    <div className='my-10 ml-50'>
                        <button className='btn bg-[#188CC3] text-white text-lg'>Edit</button>
                    </div>
                </div>
                <div className=' h-[500px] bg-white'>
                    
                <div className='p-5 mx-auto max-w-screen-lg min-h-[540px] flex justify-center'>
                    <div className='flex flex-col  flex-1'>
                        <div className='ml-20'>
                            <p className='text-2xl font-bold text-[#4091B7] '>Address</p>
                        </div>
                        <div className='card py-3 px-20  w-[1000px] h-[550px] mx-auto ' >
                            <form>
                                <div className='flex flex-row justify-center gap-20'>
                                    <div className='flex-1 flex gap-2 flex-col'>
                                        <div>
                                            <p className='text-xl text-[#85ADBF] '>Address Number</p>
                                            <input
                                                type="text"
                                                className='input input-bordered   w-full  mx-auto rounded-lg  '
                                            />
                                        </div>

                                        <div>
                                            <p className='text-xl text-[#85ADBF]'>City/State</p>
                                            <input
                                                type="text"
                                                className='input input-bordered   w-full  mx-auto rounded-lg '
                                            />
                                        </div>

                                        <div>
                                            <p className='text-xl text-[#85ADBF]'>Country</p>
                                            <input
                                                type="text"
                                                className='input input-bordered   w-full  mx-auto  rounded-lg'
                                            />
                                        </div>
                                       
                                    </div>
                                    <div className='flex-1 flex gap-2 flex-col'>
                                        <div>
                                            <p className='text-xl text-[#85ADBF] '>District</p>
                                            <input
                                                type="text"
                                                className='input input-bordered  w-full mx-auto rounded-lg  '
                                            />

                                        </div>
                                        <div>
                                            <p className='text-xl text-[#85ADBF] '>Province</p>
                                            <input
                                                type="text"
                                                className='input input-bordered  w-full mx-auto  rounded-lg'
                                            />

                                        </div>
                                        <div>
                                            <p className='text-xl text-[#85ADBF]'>Postal code</p>
                                            <input
                                                type="text"
                                                className='input input-bordered  w-full mx-auto rounded-lg '
                                            />

                                        </div>
                                 

                                    </div>
                                    

                                </div>


                               
                                <div className='flex flex-row gap-3 justify-center my-20 max-w-auto '>
                               
                    <button className='btn bg-[#188CC3] text-lg text-white w-45 h-12  rounded-lg '>
                        SAVE
                    </button>
                    <button className='btn bg-white text-lg text-[#9BA2A5] w-45 h-12  rounded-lg'>
                        CANCEL
                    </button>
                
                    </div>
                    

                   
                                


                            </form>

                           

                         

                        </div>
                      
                       


                    </div>
                    
                   
                </div>






                </div>




    </div>
  </>
  )
}

export default Profile2