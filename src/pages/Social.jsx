import React from 'react'
import rainbowIcon from '../icons/rainbow.png'
import profile1 from '../icons/profile1.png'
import add from '../icons/add.png'

function Social() {
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

                    <div className='p-10 mx-auto max-w-screen-lg min-h-[540px] flex justify-center'>
                        <div className='flex flex-col  flex-1'>
                            <div className='ml-20 flex'>
                                <p className='text-2xl font-bold text-[#4091B7] '>Social Media</p>
                                <img src={add} alt="add" className='ml-2 w-8' />
                            </div>
                            <div className='flex  my-2 bg-amber-50  rounded-3xl' >

                                <div className='flex'>
                                <p className='flex font-bold text-lg'>Add Your Social Media</p>
                                <select name="" id="" className='ml-5 w-50 bordered rounded-lg'>
                                    <option value="">Facebook</option>
                                    <option value="">Twitter</option>
                                    <option value="">Tiktok</option>
                                    <option value="">Instagram</option>
                                    <option value="">Line</option>
                                    <option value="">WhatApp</option>
                                </select>

                                </div>
                            
                                <p className=''>ID</p>

                                <p className=''>URL</p>
                
                                <input
                                    type="text"
                                    className='input input-bordered w-70   rounded  '
                                />
                            </div>
                            <div className='my-2 bg-amber-100 px-100 py-20 rounded-3xl' >
                                <p>Social media</p>
                            </div>





                        </div>

                    </div>






                </div>
            </div>

        </>
    )
}

export default Social