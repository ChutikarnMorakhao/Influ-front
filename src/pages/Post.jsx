import React from 'react'
import rainbowIcon from '../icons/rainbow.png'
import flowerIcon from '../icons/flower.png'
import fav from '../icons/fav.png'
import noti from '../icons/noti.png'
import Profile1 from '../icons/profile1.png'
import Dress4 from '../picture/Dress4.png'
import Dress4v2 from '../picture/Dress4v2.png'
import Star from '../icons/star.png'
import Rating from '../icons/rating.png'

function Post() {
  return (
    <>
      <div className='h-[700px]  pb-28 bg-white'>
        <div className='flex flex-row gap-5 justify-between items-center'>
          <div className='flex'>
            <p className='text-4xl font-bold pt-4 pl-5 mt-3 opacity-90'>My</p>
            <img src={rainbowIcon} alt="Logo rainbow" className='w-25' />
            <p className='text-2xl font-bold text-gray-400 pt-4 pl-5 mt-3 cursor-pointer'>POST</p>
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


        <div className='flex flex-col  '>
          <p className='my-2 ml-100 text-4xl font-bold'>Mina Wonderful Dress</p>

          <div className='flex'>
            <p className='ml-100 text-2xl text-[#85ADBF]'> #Trend9</p>

            <p className=' ml-3 text-2xl font-bold opacity-90 '>BRAND: MONTSAND</p>
          </div>

          <div className='flex'>

            <div className='flex'>

              <div className='-ml-20 flex h-70 w-90 my-15 bg-gray-200  rounded-3xl'>
              </div>
              <div className='ml-10 flex h-95 w-130 bg-base-300 my-5 rounded-3xl'>
                <img src={Dress4} alt="dress" className='ml-5' />
                <img src={Dress4v2} alt="dress" />
              </div>
              <div className='flex ml-10 my-15 h-70 w-90 bg-gray-200  rounded-3xl'>

              </div>

            </div>
            <div className='flex flex-col -my-10 -ml-60 h-160 w-110 bg-base-300  rounded-3xl justify-between'>
              <p className='flex my-5 text-3xl font-bold justify-center'>Review</p>
              <div className='flex flex-row'>
                <p className='-mt-18 ml-10 font-bold text-7xl text-purple-700 '>
                  4.8
                </p>
                <p className='-mt-11   text-2xl font-bold text-gray-400'>
                  /5
                </p>

                <p className='-mt-15 ml-20 text-purple-700 font-bold text-4xl'>
                  " <p className='ml-5 -mt-10 text-lg text-gray-600'>This is a dress that share moments into memories.</p>"</p>
              </div>
              <div className='flex flex-row -mt-20'>
                <img src={Star} alt="star" className='h-8 ml-3' />
                <img src={Star} alt="star" className='h-8  ml-2' />
                <img src={Star} alt="star" className='h-8  ml-2' />
                <img src={Star} alt="star" className='h-8  ml-2' />
                <img src={Rating} alt="star" className='h-8  ml-2' />

              </div>

              <div className='flex'>
                <p className='-my-9 ml-5 text-xl font-bold'>Quality</p>
                <div className='-my-10 ml-5 h-8 w-75 bg-purple-200 rounded-xl'></div>
              </div>
              <div className='flex'>
                <p className=' -my-12 ml-5 text-xl font-bold'>Design</p>
                <div className='-my-12 ml-5 h-8 w-75 bg-purple-200 rounded-xl'></div>
              </div>


                <p className='-mt-15 ml-5 text-xl font-bold'>Color</p>
              <div className='flex -mt-12  gap-3 px-5'>
                <div className='h-10 w-30 bg-amber-100 rounded-3xl text-xl text-gray-400 text-center'>
                 <p className='mt-1'>Original</p></div>
                <div className='h-10 w-30 bg-green-200 rounded-3xl text-xl text-gray-400 text-center'>
                 <p className='mt-1'>Mint</p></div>
                <div className='h-10 w-30 bg-pink-200 rounded-3xl text-xl text-gray-400 text-center'>
                 <p className='mt-1'>Pink</p></div>
              </div>
                <p className='-my-12 ml-5 text-xl font-bold'>Size</p>
              
<div className='flex px-5 gap-2 mt-2'>
<div className='h-10 w-20 bg-gray-300 rounded-3xl text-xl text-base-100 text-center'>
              <p className='mt-1'>XS</p>
              </div>
<div className='h-10 w-20 bg-gray-300 rounded-3xl text-xl text-base-100 text-center'>
              <p className='mt-1'>S</p>
              </div>
<div className='h-10 w-20 bg-gray-300  rounded-3xl text-xl text-base-100 text-center'>
              <p className='mt-1'>M</p>
              </div>
<div className='h-10 w-20 bg-gray-300 rounded-3xl text-xl text-base-100 text-center'>
              <p className='mt-1'>L</p>
              </div>
<div className='h-10 w-20 bg-gray-300 rounded-3xl text-xl text-base-100 text-center'>
              <p className='mt-1'>XL</p>
              </div>

</div>

              <div className='flex -mt-12'>
              <p className=' ml-5 text-xl font-bold'>Price</p>
              <p className='  ml-5 text-lg text-gray-400'> $490.00 </p>
              </div>

              <div className='flex flex-col -mt-5'>
                <p className='-my-5 ml-5 text-xl font-bold'>More detail</p>
                <div className='my-10 ml-5 h-25 w-100 bg-white rounded-2xl'></div>

              </div>
              

            </div>

          </div>

          <div>

            <div className='flex -my-28 ml-80 h-25 w-25 rounded-full bg-gray-200'>
              <img src={Profile1} alt="Profile" className='h-20 mt-2 ml-3' />

            </div>
            <p className='flex my-8 ml-110 font-bold text-2xl text-[#85ADBF]'>Dreammy</p>
            <p className='-my-8 ml-110 text-lg text-[#85ADBF]'>ID: Dream_1998</p>

            <button className='ml-170 -mt-8 btn bg-amber-400 text-white text-2xl font-bold rounded-3xl h-15 w-40'>BUY NOW</button>

            <div>
              <p className='flex my-10 ml-90 text-xl font-bold opacity-70'> Comment  </p>
              <div className='ml-90 -my-10 h-30 w-110 bg-base-300 rounded-3xl'>

              </div>

            </div>



          </div>









        </div>






      </div>
    </>
  )
}

export default Post;