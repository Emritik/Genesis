import React from 'react'
import { setGlobalState } from '../store'
import { BsPlusLg } from 'react-icons/bs'
const AddButton = () => {
  return (
    <div className='fixed right-10 flex bottom-10 justify-center space-x-2'>
      <button
          type="button"
          className="flex justify-center items-center w-9 h-9 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hoverr:bg-green-700 "
          onClick={() => setGlobalState('createModal','scale-100')}
        >
          <BsPlusLg className='font-bold' size={20} />
        </button>
    </div>
  )
}

export default AddButton
