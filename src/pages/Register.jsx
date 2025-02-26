import React from 'react'
import flowerIcon from '../icons/flower.png'
import rainbowIcon from '../icons/rainbow.png'

function Register() {
    return (
        <>
            <div className='h-[700px]  pb-28 bg-amber-50'>
                <div className='flex flex-row gap-5'>
                    <p className='text-4xl font-bold pt-4 pl-5 mt-3 opacity-90'>My</p>
                    <img src={rainbowIcon} alt="Logo rainbow" className='w-25' />
                    <p className='text-2xl font-bold text-gray-400 pt-4 pl-5 mt-3 cursor-pointer'>REGISTER</p>

                </div>
                <div className='flex flex-col items-start'>
                    <p className='text-4xl font-bold pl-5 -mt-5 opacity-90'>Influencer</p>
                </div>
                <div className='p-5 mx-auto max-w-screen-lg min-h-[540px] flex justify-center'>
    <div className='flex flex-col items-center flex-1 gap-2'>
        <div className='flex justify-between items-center'>
        <p className='text-3xl font-bold '>REGISTRATION</p>

        </div>
        
        <div className='card bg-[#F0F0F0] p-2 w-[450px] shadow-xl  mx-auto rounded-3xl' >
           
            <form>
                <div className='card-body gap-3 px-10'>
                    <input 
                    type="text"
                    className='input input-bordered border-[#6F3ECA] border-3 w-full mt-2 mx-auto placeholder:text-center '
                    placeholder='First Name'
                    />
                    <input 
                    type="text"
                    className='input input-bordered border-[#6F3ECA] border-3 w-full  mx-auto placeholder:text-center '
                    placeholder='Last Name'
                    />
                    <input 
                    type="text"
                    className='input input-bordered border-[#6F3ECA] border-3 w-full  mx-auto placeholder:text-center '
                    placeholder='Username'
                    />
                    <input 
                    type="text"
                    className='input input-bordered border-[#6F3ECA] border-3 w-full  mx-auto placeholder:text-center '
                    placeholder='Email Address'
                    />
                    <input 
                    type="text"
                    className='input input-bordered border-[#6F3ECA] border-3 w-full  mx-auto placeholder:text-center '
                    placeholder='Password'
                    />
                    <input 
                    type="text"
                    className='input input-bordered border-[#6F3ECA] border-3 w-full  mx-auto placeholder:text-center '
                    placeholder='Confirm Password'
                    />
                    <div className='flex gap-1 my-2 ml-2'>
                    <input id='remember' type="checkbox" />
                     <label htmlFor='remember' className='text- cursor-pointer opacity-50 '>
                    Remember me 
                </label>
                    </div>
                    
                    
                    <div className='flex flex-row gap-3 max-w-auto '>
                    <button className='btn bg-[#6F3ECA] text-lg text-white w-45 h-12  rounded-lg '>
                        REGISTER
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

export default Register