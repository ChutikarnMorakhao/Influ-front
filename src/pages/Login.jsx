import React from 'react'
import flowerIcon from '../icons/flower.png'
import rainbowIcon from '../icons/rainbow.png'


function Login() {
  return (
   <>
   <div className='h-[700px]  pb-28 bg-amber-50'>
    <div className='flex flex-row gap-5'>
        <p className='text-4xl font-bold pt-4 pl-5 mt-3 opacity-90'>My</p>
        <img src={rainbowIcon} alt="Logo rainbow" className='w-25' />
        <p className='text-2xl font-bold text-gray-400 pt-4 pl-5 mt-3 cursor-pointer'>LOGIN</p>
      
    </div>
    <div className='flex flex-col items-start'>
       <p  className='text-4xl font-bold pl-5 -mt-5 opacity-90'>Influencer</p>
        </div>
   <div className='p-5 mx-auto max-w-screen-lg min-h-[540px] flex justify-center'>
    <div className='flex flex-col items-center flex-1'>
        <div className='flex justify-between items-center'>
        <p className='text-4xl font-bold '>LOG IN</p>
        <img src={flowerIcon} alt="Logo flower" className='w-20' />
        </div>
        
        <div className='card bg-[#F0F0F0] w-[400px] h-[400px] shadow-xl  mx-auto rounded-3xl' >
           
            <form>
                <div className='card-body gap-5 py-5 px-10'>
                    <input 
                    type="text"
                    className='input input-bordered border-[#6F3ECA] border-3 w-full h-13 mt-8 mx-auto placeholder:text-center placeholder:text-lg '
                    placeholder='Username or Email'
                    />
                    <input 
                    type="text"
                    className='input input-bordered border-[#6F3ECA] border-3 w-full h-13 mx-auto placeholder:text-center placeholder:text-lg'
                    placeholder='Password'
                    />
                    <div className='flex flex-col gap-3'>
                    <button className='btn bg-[#6F3ECA] text-lg text-white w-full h-12 mx-auto '>
                        LOGIN
                    </button>
                    <button className='btn bg-white text-lg text-[#9BA2A5] w-full h-12 mx-auto'>
                        SIGN UP
                    </button>
                    </div>

                <p className='text-center cursor-pointer opacity-50'>
                    Forgot Username/ Password
                </p>

                   

                </div>
            </form>




        </div>

    </div>
   </div>
   </div>
   
   
   </>
  )
}

export default Login