"use client"
import React from 'react'
import { MessageSectionImage } from '../../public/images/index'
import Image from 'next/image'
import { Button } from '../../components/ui/button'

const MessageSection = () => {
  return (
    <div id='message'>
      <div className='flex justify-center lg:mb-36'>
        <div className='lg:w-[968px] lg:h-[354px] xs:w-[450px] xs:h-[650px] w-[312px] h-[464px] bg-first-color dark:bg-container-color-dark rounded-[32px] flex justify-center'>
          <div className='flex my-auto flex-col lg:flex-row'>
            <div className='w-[350px]'>
              <div className='justify-center text-center lg:text-start flex lg:justify-start mt-4'>
                <p className='text-[20px] xs:text-[36px] font-semibold xs:w-[220px] w-[150px] leading-tight text-red-500 '>Send Good Wishes! ⛄</p>
              </div>
              <div className='mt-6 flex justify-center items-center lg:justify-start'>
                <input placeholder='Write your message' className='h-[55px] lg:w-[264px] w-[80%] rounded-[64px] pl-5 border-red-400 text-[13px] text-black  dark:bg-body-color-dark bg-yellow-300' />
              </div>
              <div className='flex justify-center items-center lg:justify-start'>
                <div className='rounded-[64px] w-[80%] text-center lg:w-fit h-auto bg-title-color dark:bg-first-color px-8 py-4 text-[15px] font-medium text-red mt-4 cursor-pointer'>
                  <Button className="bg-red-500 text-white hover:bg-slate-50 hover:text-black">Send Message 🔔</Button>
                </div>
              </div>
            </div>
            <div className='w-[350px]'>
              <div className='flex justify-center mt-5 lg:mt-0'>
                <Image src={MessageSectionImage} alt='MessageSection Image' className='xs:w-[370px] xs:h-[270px] w-[250px] h-[188px]' />
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
    
  )
}

export default MessageSection