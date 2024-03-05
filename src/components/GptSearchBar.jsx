import React from 'react'
import lang from '../utils/languageConstant'
import {useSelector} from 'react-redux'
function GptSearchBar() {
  const langKey=useSelector((store)=>store.config.lang);
  
  return (
    <div className='bg-red-300'>
      <form action="" className='grid grid-cols-12'>
        <input type="text" placeholder={lang[langKey]?.gptSearchPlaceholder} className='p-3 col-span-9'/>
        <button className='p-3 col-span-3 mx-3'>{lang[langKey]?.search}</button>
      </form>
    </div>
  )
}

export default GptSearchBar
