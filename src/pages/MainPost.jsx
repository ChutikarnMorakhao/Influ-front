import React from 'react'
import rainbowIcon from '../icons/rainbow.png'
import flowerIcon from '../icons/flower.png'
import fav from '../icons/fav.png'
import noti from '../icons/noti.png'
import TSHIRT from '../icons/TSHIRT.png'
import Skirt from '../icons/skirt.png'
import Shirt from '../icons/shirt.png'
import Pant from '../icons/pant.png'
import Dress from '../icons/dress.png'
import Sweater from '../icons/sweater.png'
import Bikini from '../icons/bikini.png'
import RightArrow from '../icons/right-arrow.png'
import Dress4 from '../picture/Dress4.png'
import Dress4v2 from '../picture/Dress4v2.png'
import Dress5 from '../picture/Dress5.png'
import Dress5v2 from '../picture/Dress5v2.png'
import Dress6 from '../picture/Dress6.png'
import Dress6v2 from '../picture/Dress6v2.png'
import Dress7 from '../picture/Dress7.png'
import Dress7v2 from '../picture/Dress7v2.png'


function MainPost() {
  return (
  <>
    <div className='h-[700px]  pb-28 bg-white'>
    <div className='flex flex-row gap-5 justify-between items-center'>
        <div className='flex'>
        <p className='text-4xl font-bold pt-4 pl-5 mt-3 opacity-90'>My</p>
        <img src={rainbowIcon} alt="Logo rainbow" className='w-25' />
        <p className='text-2xl font-bold text-gray-400 pt-4 pl-5 mt-3 cursor-pointer'>HOME</p>
        </div>
        <div className='flex items-end'>

        <img src={noti} alt="noti" className='w-12 mr-3 ' />
        <img src={fav} alt="fav" className='w-14 mr-2 ' />
            <button className='btn bg-purple-800 text-white rounded-2xl '> MY FAVOURITE</button>
            <div className='flex items-end'>
            <img src={flowerIcon} alt="flower" className='w-15 -mr-2' />
            <button className='btn bg-purple-800 text-white rounded-2xl mr-5'> LOGIN</button>
            </div>
        </div>
     
      


    </div>
    <div className='flex flex-col items-start'>
        <p className='text-4xl font-bold pl-5 -mt-5 opacity-90'>Influencer</p>
    </div>
<div className='h-[100px]  flex gap-2 '>
    <div className='flex  ml-80 h-12 w-50 bg-purple-800 rounded-2xl'>
    <p className='my-2  ml-8 text-xl font-bold text-white'>Find Your Style</p>
    </div>
<label className="input rounded-2xl w-150 h-12 ">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></g></svg>
  <input type="search" className="grow" placeholder="Search" />
 
</label>
</div>
<div className='h-[300px]  flex justify-around'>
  <div className='flex h-70 w-70 bg-base-300 rounded-3xl'>
  <img src={Dress5} alt="dress" className='ml-2 h-50 my-10 ' />
  <img src={Dress5v2} alt="dress" className='h-50 my-10' />

  </div>
  <div className='flex h-95 w-130 bg-base-300 -my-8 rounded-3xl'>
    <img src={Dress4} alt="dress" className='ml-5 w-60' />
    <img src={Dress4v2} alt="dress" className='w-55' />
  </div>

  <div className='flex h-70 w-70 bg-base-300 rounded-3xl'>
  <img src={Dress6} alt="dress" className='ml-5 h-50 my-10 ' />
  <img src={Dress6v2} alt="dress" className='h-50 my-10' />
  </div>

  <div className='flex h-70 w-70 bg-base-300 rounded-3xl'>
  <img src={Dress7} alt="dress" className='ml-5 h-50 my-10 ' />
  <img src={Dress7v2} alt="dress" className='h-50 my-10' />

  </div>

</div>
<div className='h-[100px]  flex'>

<div className='mt-15 ml-50 h-10 w-30 rounded-2xl bg-purple-800'>
    <p className='text-xl font-bold text-center mt-1 text-white  '>Dress</p>
</div>
<div className='mt-15 ml-4 w-40 rounded-2xl bg-white border-4 border-purple-800'>
    <p className='text-xl font-bold text-center  text-gray-700 '>Accessories</p>
</div>

</div>
<div className='flex  h-[200px]  '>
<div className='mt-4 ml-50 h-35 w-35 bg-gray-200 rounded-3xl'>
        <img src={TSHIRT} alt="TSHIRT" className='mt-2 ml-2 w-30 items-center ' />
        <p className='mt-4 ml-8 font-bold'>T-SHIRT</p>
       
    </div>
<div className='mt-4 ml-10 h-35 w-35 bg-gray-200 rounded-3xl'>
        <img src={Skirt} alt="TSHIRT" className='mt-5 ml-5 w-25 items-center ' />
        <p className='mt-7 ml-12 font-bold'>SKIRT</p>
       
    </div>
<div className='mt-4 ml-10 h-35 w-35 bg-gray-200 rounded-3xl'>
        <img src={Dress} alt="TSHIRT" className='mt-2 ml-2 w-30 items-center ' />
        <p className='mt-4 ml-12 font-bold'>DRESS</p>
       
    </div>
<div className='mt-4 ml-10 h-35 w-35 bg-gray-200 rounded-3xl'>
        <img src={Shirt} alt="TSHIRT" className='mt-2 ml-2 w-30 items-center ' />
        <p className='mt-4 ml-12 font-bold'>SHIRT</p>
       
    </div>
<div className='mt-4 ml-10 h-35 w-35 bg-gray-200 rounded-3xl'>
        <img src={Pant} alt="TSHIRT" className='mt-2 ml-2 w-30 items-center ' />
        <p className='mt-4 ml-12 font-bold'>PANT</p>
       
    </div>
<div className='mt-4 ml-10 h-35 w-35 bg-gray-200 rounded-3xl'>
        <img src={Sweater} alt="TSHIRT" className='mt-2 ml-2 w-30 items-center ' />
        <p className='mt-4 ml-8 font-bold'>SWEATER</p>
       
    </div>
<div className='mt-4 ml-10 h-35 w-35 bg-gray-200 rounded-3xl'>
        <img src={Bikini} alt="TSHIRT" className='mt-2 ml-2 w-30 items-center ' />
        <p className='mt-4 ml-12 font-bold'>BIKINI</p>
       
    </div>
    <div className=''>
        <img src={RightArrow} alt="arrow" className='w-7 py-17 ml-2' />
    </div>
   

</div>

<div>


</div>



    </div>
  </>
  )
}

export default MainPost; 