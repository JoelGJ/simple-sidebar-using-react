import React from 'react';

export default function SideBar({ showSidebar,  hideSidebar}) {

    return (
        <>
            <div className={`sidebar-container ${showSidebar ? 'show' : ''}`}>
                <div className='sidebar-header'>
                    <span className='sidebar-hide-icon' onClick={ () => { hideSidebar() }}>{'〱'}</span>
                    <span>Save Segment</span>
                </div>
            </div>
        </>
    );
}
