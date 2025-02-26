import React from 'react'
import rainbowIcon from '../icons/rainbow.png'
import favIcon from '../icons/fav.png'
import dress1 from '../picture/dress1.png'
import dress2 from '../picture/dress2.png'
import dress3 from '../picture/dress3.png'

function Favourite() {
  return (
  <>
    <div className='h-[700px]  pb-28 bg-white'>
    <div className='flex flex-row gap-5'>
        <p className='text-4xl font-bold pt-4 pl-5 mt-3 opacity-90'>My</p>
        <img src={rainbowIcon} alt="Logo rainbow" className='w-25' />
        <p className='text-2xl font-bold text-gray-400 pt-4 pl-5 mt-3 cursor-pointer'>MY FAVOURITE</p>
        <img src={favIcon}  alt="Logo fav" className='w-10 h-10 my-5'/>

    </div>
    <div className='flex flex-col items-start'>
        <p className='text-4xl font-bold pl-5 -mt-5 opacity-90'>Influencer</p>
    </div>

    <div className='px-40 '>
    <div className='h-[180px]  my-5 bg-amber-50 rounded-2xl flex  gap-10'>
        <div className='my-2 ml-20'>
            <img src={dress3} alt="dress" className='w-30' />

        </div>
        <div className='flex flex-col my-6'>
            <p className='text-3xl font-bold'>Printed Jungle Dress</p>
            <p className='text-xl ml-2 mt-2'>BRAND: MONTSAND</p>
            <p className='text-xl ml-2 '>PRICE: $305.00</p>
            <p className='text-xl ml-2 '>SIZE: XS</p>


        </div> 
        <div className='my-15 ml-60'>
                        <button className='btn bg-[#6F3ECA] text-white text-2xl rounded-3xl w-40 h-15'>BUY NOW</button>
                    </div>
            
    </div>
    <div className='h-[180px]  my-5 bg-amber-100 rounded-2xl flex gap-10'>
        <div className='my-2 ml-20'>
            <img src={dress1} alt="dress" className='w-25' />

        </div>
        <div className='flex flex-col my-6 ml-5'>
            <p className='text-3xl font-bold'>Pink Lace Corset Maxi Dress</p>
            <p className='text-xl ml-2 mt-2'>BRAND: MONTSAND</p>
            <p className='text-xl ml-2 '>PRICE: $800.00</p>
            <p className='text-xl ml-2 '>SIZE: XS</p>


        </div> 
        <div className='my-15 ml-35'>
                        <button className='btn bg-[#6F3ECA] text-white text-2xl rounded-3xl w-40 h-15'>BUY NOW</button>
                    </div>
            
    </div>
    <div className='h-[180px]  my-5 bg-amber-200 rounded-2xl flex  gap-10'>
        <div className='my-2 ml-20'>
            <img src={dress2} alt="dress" className='w-27' />

        </div>
        <div className='flex flex-col my-6 ml-5'>
            <p className='text-3xl font-bold'>Denim Blue Corset Midi Dress</p>
            <p className='text-xl ml-2 mt-2'>BRAND: MONTSAND</p>
            <p className='text-xl ml-2 '>PRICE: $550.00</p>
            <p className='text-xl ml-2 '>SIZE: XS</p>


        </div> 
        <div className='my-15 ml-30'>
                        <button className='btn bg-[#6F3ECA] text-white text-2xl rounded-3xl w-40 h-15'>BUY NOW</button>
                    </div>
            
    </div>
  

    </div>
  




    </div>
  </>
  )
}

export default Favourite