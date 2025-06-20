import React from 'react'

const mainbutton = ({name, onClick}) => {
    return (
        <button onClick={onClick} className='text-white font-inter font-bold rounded-3xl p-3 w-50 bg-gradient-to-r from-rose-500 to-red-700
         hover:from-red-600 hover:to-red-800 transition-colors delay-50 cursor-pointer'>
            {name}
        </button>
    )
}

export default mainbutton