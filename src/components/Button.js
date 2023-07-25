import React from 'react'

export default function Button({ title, bgColor, onClick }) {
    return (
        <button
            onClick={() => onClick()}
            className='btn'
            style={{ backgroundColor: bgColor }}
        >{title}</button>
    )
}

Button.defaultProps = {
    bgColor: 'skyblue'
}