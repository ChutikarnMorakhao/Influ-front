import React from 'react'
import rainbowIcon from '../icons/rainbow.png'
import profile1 from '../icons/profile1.png'

function Profile1() {
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
                            <p className='text-2xl font-bold text-[#4091B7] '>Personal Information</p>
                        </div>
                        <div className='card py-3 px-20  w-[1000px] h-[550px] mx-auto ' >
                            <form>
                                <div className='flex flex-row justify-center gap-20'>
                                    <div className='flex-1 flex gap-2 flex-col'>
                                        <div>
                                            <p className='text-xl text-[#85ADBF] '>First Name</p>
                                            <input
                                                type="text"
                                                className='input input-bordered   w-full  mx-auto rounded-lg  '
                                            />
                                        </div>

                                        <div>
                                            <p className='text-xl text-[#85ADBF]'>Last Name</p>
                                            <input
                                                type="text"
                                                className='input input-bordered   w-full  mx-auto rounded-lg '
                                            />
                                        </div>

                                        <div>
                                            <p className='text-xl text-[#85ADBF]'>User Name</p>
                                            <input
                                                type="text"
                                                className='input input-bordered   w-full  mx-auto  rounded-lg'
                                            />
                                        </div>
                                        <div>
                                            <p className='text-xl text-[#85ADBF]'>Email Address</p>
                                            <input
                                                type="text"
                                                className='input input-bordered   w-full  mx-auto  rounded-lg'
                                            />
                                        </div>

                                       

                                

                                    </div>
                                    <div className='flex-1 flex gap-2 flex-col'>
                                        <div>
                                            <p className='text-xl text-[#85ADBF] '>Nick Name</p>
                                            <input
                                                type="text"
                                                className='input input-bordered  w-full mx-auto rounded-lg  '
                                            />

                                        </div>
                                        <div>
                                            <p className='text-xl text-[#85ADBF] '>Gender</p>
                                            <input
                                                type="text"
                                                className='input input-bordered  w-full mx-auto  rounded-lg'
                                            />

                                        </div>
                                        <div>
                                            <p className='text-xl text-[#85ADBF]'>UserID</p>
                                            <input
                                                type="text"
                                                className='input input-bordered  w-full mx-auto rounded-lg '
                                            />

                                        </div>
                                        <div>
                                            <p className='text-xl text-[#85ADBF]'>Phone number</p>
                                            <input
                                                type="text"
                                                className='input input-bordered  w-full mx-auto rounded-lg '
                                            />

                                        </div>
                                   
                                    </div>
                                    

                                </div>

                            </form>

                            <div>
                                <p>1</p>
                            </div>

                        </div>
                       


                    </div>
                   
                </div>






                </div>
            </div>

        </>
    )
}

export default Profile1