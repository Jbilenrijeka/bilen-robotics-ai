import React from 'react'

const LinkCard = ({ title, url, onDelete }) => {
  return (
    <div className='bg-gray-100 p-4 rounded-lg shadow-md flex justify-between items-center'>
      <a
        href={url}
        target='_blank'
        rel='noopener noreferrer'
        className='text-blue-600 font-bold'
      >
        {title}
      </a>
      {onDelete && (
        <button
          onClick={onDelete}
          className='bg-red text-white px-4 py-2 rounded hover:bg-red-600'
        >
          Delete
        </button>
      )}
    </div>
  )
}

export default LinkCard
