import React from 'react'

const mainbutton = ({name}) => {
    return (
        <button className='text-white font-inter font-bold rounded-3xl p-3 w-50 bg-gradient-to-r from-rose-500 to-red-700'>{name}</button>
    )
}

export default mainbutton