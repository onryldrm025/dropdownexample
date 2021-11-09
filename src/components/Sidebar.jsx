import React, { useState } from 'react'
import sidebarJson from './siderbar'
import * as FaIcons from 'react-icons/fa'
import * as AıIcons from 'react-icons/ai'
import './sidebar.css'
import { SidebarMenu } from './SidebarMenu'



export const Sidebar = () => {
    const [sidebar, setsidebar] = useState(false)
    const showSidebar = () => setsidebar(!sidebar)

    return (
        <>
            <nav>
                <div className='nav-button' to='#'>
                    <FaIcons.FaBars onClick={showSidebar} />
                </div>
            </nav>
            <div className={`side-bar ${sidebar ? 'active' : ''}`}>
                <div className={`side-bar-wrappter`} >
                    <div className='side-icon'>
                        <AıIcons.AiOutlineClose onClick={showSidebar} />
                    </div>
                    <div className='side-bar-items'>
                        {sidebarJson.map((e,index) => (
                            <SidebarMenu key={index} item={e} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
