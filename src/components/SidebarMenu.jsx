import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const SidebarMenu = ({ item }) => {
    const [subnav, setsubnav] = useState(false)
    const subchange = () => setsubnav(!subnav)
    return (
        <>
            <Link to={item?.url ?? '/'} className='side-item' onClick={subchange}>
                {item.icon}
                <label>{item.title}</label>
                {item.subNav && subnav ? item.iconOpen : item.iconClose}
            </Link>
            <div className='dropDown'>
                {subnav && item.subNav?.map((item, index) => (
                    <div key={index} className='dropDown-item'>
                        {item.icons}
                        <span>{item.title}</span> 
                    </div>
                ))}

            </div>

        </>
    )
}
