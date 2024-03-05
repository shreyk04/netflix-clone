import React from 'react'
import { BG_URL } from '../utils/constants'
import GptSearchBar from './GptSearchBar'

function GptSearchPage() {
  return (
    <div className='relative'>
      <div className='h-full  w-full fixed -z-10'>
        <img className='h-full w-full object-cover' src={BG_URL} alt="" />
      </div>
      <div className='absolute top-20 left-[40%]'>
        <GptSearchBar/>
      </div>
    </div>
  )
}

export default GptSearchPage
