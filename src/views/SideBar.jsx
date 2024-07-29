import React from 'react';

export default function SideBar({ showSidebar, hideSidebar }) {

    return (
        <>
            <div className={`sidebar-container ${showSidebar ? 'show' : ''}`}>
                <div className='sidebar-header'>
                    <span className='sidebar-hide-icon' onClick={() => { hideSidebar() }}>{'〱 '}</span>
                    <span>Save Segment</span>
                </div>
                <div className='sidebar-content'>
                    <div className='grid'>
                        <label className='input-label'>Enter the name of the segment</label>
                        <input type="text" placeholder='name of the segment' />
                        <label className='input-label'>To save your segment, you need to add the schemas to build the query</label>

                    </div>
                    <div className='sidebar-footer'>
                        <div className='sidebar-buttons'>
                            <button className='btn'>Save the segment</button>
                            <button className='btn btn-danger'>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
