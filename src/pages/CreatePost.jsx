import React from 'react'
import rainbowIcon from '../icons/rainbow.png'

function CreatePost() {
    return (
        <>
            <div className='h-[700px]  pb-28 bg-white'>
                <div className='flex flex-row gap-5'>
                    <p className='text-4xl font-bold pt-4 pl-5 mt-3 opacity-90'>My</p>
                    <img src={rainbowIcon} alt="Logo rainbow" className='w-25' />
                    <p className='text-2xl font-bold text-gray-400 pt-4 pl-5 mt-3 cursor-pointer'>CREATED POST</p>

                </div>
                <div className='flex flex-col items-start'>
                    <p className='text-4xl font-bold pl-5 -mt-5 opacity-90'>Influencer</p>
                </div>

                <div className='p-5 mx-auto max-w-screen-lg min-h-[540px] flex justify-center'>
                    <div className='flex flex-col items-center flex-1'>
                        <div className='flex justify-between items-center my-2'>
                            <p className='text-4xl font-bold text-[#4091B7] '>CREATED POST</p>
                        </div>
                        <div className='card bg-[#F0F0F0] px-20 py-8 w-[1000px] h-[550px] shadow-xl  mx-auto rounded-3xl' >

                            <form>
                                <div className='flex flex-row justify-center gap-20'>
                                    <div className='flex-1 flex gap-2 flex-col'>
                                        <div>
                                            <p className='text-xl text-[#85ADBF] font-bold'>Product Name</p>
                                            <input
                                                type="text"
                                                className='input input-bordered   w-full  mx-auto rounded-lg  '
                                            />
                                        </div>

                                        <div>
                                            <p className='text-xl text-[#85ADBF] font-bold'>Category</p>
                                            <input
                                                type="text"
                                                className='input input-bordered   w-full  mx-auto rounded-lg '
                                            />
                                        </div>

                                        <div>
                                            <p className='text-xl text-[#85ADBF] font-bold'>Design</p>
                                            <input
                                                type="text"
                                                className='input input-bordered   w-full  mx-auto  rounded-lg'
                                            />
                                        </div>

                                        <div>
                                            <p className='text-xl text-[#85ADBF] font-bold'>Size</p>
                                            <select
                                                className='select select-bordered   w-full  mx-auto rounded-lg'
                                            >
                                                <option disabled selected>Select Size</option>
                                                <option>XS</option>
                                                <option>S</option>
                                                <option>M</option>
                                                <option>L</option>
                                                <option>XL</option>
                                            </select>

                                        </div>

                                        <div>

                                            <p className='text-xl text-[#85ADBF] font-bold'>Picture</p>

                                            <input
                                                type="file"
                                                accept='image/*'
                                                className='file-input  file-input-bordered   w-full mt-2 mx-auto rounded-lg '

                                            />
                                        </div>






                                    </div>
                                    <div className='flex-1 flex gap-2 flex-col'>
                                        <div>
                                            <p className='text-xl text-[#85ADBF] font-bold'>Product Brand</p>
                                            <input
                                                type="text"
                                                className='input input-bordered  w-full mx-auto rounded-lg  '
                                            />

                                        </div>
                                        <div>
                                            <p className='text-xl text-[#85ADBF] font-bold'>Quality</p>
                                            <input
                                                type="text"
                                                className='input input-bordered  w-full mx-auto  rounded-lg'
                                            />

                                        </div>
                                        <div>
                                            <p className='text-xl text-[#85ADBF] font-bold'>Color</p>
                                            <input
                                                type="text"
                                                className='input input-bordered  w-full mx-auto rounded-lg '
                                            />

                                        </div>
                                        <div>
                                            <p className='text-xl text-[#85ADBF] font-bold'>Price</p>
                                            <input
                                                type="text"
                                                className='input input-bordered  w-full mx-auto rounded-lg '
                                            />

                                        </div>
                                        <div>
                                            <p className='text-xl text-[#85ADBF] font-bold'>Affiliate link</p>
                                            <input
                                                type="text"
                                                className='input input-bordered mt-2  w-full mx-auto rounded-lg '
                                            />

                                        </div>
                                     

                                        
                                       





                                    </div>
                                    

                                </div>

                                
               
                              <div className='flex justify-center my-10 ' >
                              <div className='flex flex-row gap-3 max-w-auto '>
                    <button className='btn bg-[#188CC3] text-lg text-white w-45 h-12  rounded-lg '>
                        CREATE POST
                    </button>
                    <button className='btn bg-white text-lg text-[#9BA2A5] w-45 h-12  rounded-lg'>
                        CANCEL
                    </button>
                    </div>
                              </div>

                                


                            </form>

                        </div>
                       


                    </div>
                   
                </div>



            </div>
        </>
    )
}

export default CreatePost