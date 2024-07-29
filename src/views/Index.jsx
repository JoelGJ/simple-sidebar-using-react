import React, { useState } from 'react';
import './Index.css';
import SideBar from './SideBar';

export default function Index() {

    const [sidebar, setSidebar] = useState(false)

    const hideSidebar = () => {
        setSidebar(false)
    }
    return (
        <>
            <header className={`header ${sidebar ? 'blur' : ''}`}>
                <div className='nav-container'>
                    <ul className='nav-list'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </header>
            <div className={`${sidebar ? '' : ''}`}>
                <div className='segment'>
                    <button className='btn' onClick={() => { setSidebar(true) }}>Save Segment</button>
                </div>
            </div>
            <SideBar showSidebar={sidebar} hideSidebar={hideSidebar}/>
        </>
    );
}
