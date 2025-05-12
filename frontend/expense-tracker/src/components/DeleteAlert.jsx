import React from 'react'

const DeleteAlert = ({ content, onDelete }) => {
  return (
    <div>
        <p className='text-sm'>{content}</p>
        <div className='flex justify-end mt-6'>
            <button
                type='button'
                className='flex items-center gap-1.5 text-xs md:text-sm font-medium text-white whitespace-nowrap bg-blue-700 border border-blue-900 rounded-lg px-4 py-2 cursor-pointer hover:bg-blue-800'
                onClick={onDelete}
            >
                Delete
            </button>
        </div>
    </div>
  )
}

export default DeleteAlert