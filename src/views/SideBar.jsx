import React, { useEffect, useState } from 'react';

export default function SideBar({ showSidebar, hideSidebar }) {


    const [segmentName, setSegmentName] = useState('')
    const [schemaLabels, setSchemaLabels] = useState([
        'First Name',
        'Last Name',
        'Gender',
        'Age',
        'Account Name',
        'City',
        'State',
    ])

    const [schemas, setSchemas] = useState({'First Name': 'First Name',})

    useEffect(() => { console.log(schemas); }, [schemas])
    const addSchema = () => {
        const selectedLabels = Object.keys(schemas);

        const remainingLabels = schemaLabels.filter(schema => !selectedLabels.includes(schema))

        if (remainingLabels.length > 0) {
            setSchemas((prev) => ({ ...prev, [remainingLabels[0]]: remainingLabels[0] }))
        }
    }

    const saveSegmentHandler = async() => {
        // const finalSchema = Object.entries(schemas).map((value, key))
        // console.log(finalSchema);
        const finalData = { 'segment name': segmentName, 'schema': schemas}
        console.log(finalData);
        // https://webhook.site/44cfef7c-beeb-477c-be2b-ebc5cea39194
        const response = await fetch('https://webhook.site/44cfef7c-beeb-477c-be2b-ebc5cea39194', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(finalData),
        })

        console.log(response)
    }

    
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
                        <input type="text" placeholder='name of the segment' value={segmentName} onChange={(e) => { setSegmentName(e.target.value) }} />
                        <label className='input-label'>To save your segment, you need to add the schemas to build the query</label>

                        {Object.keys(schemas).map((schema, key) => (
                            <select className='schema-select' key={key} value={schema} onChange={() => { }}>
                                {schemaLabels.map((value, key) => (
                                    <option key={key}>{value}</option>
                                ))}
                            </select>
                        ))}

                        <span className='add-new-schema-btn' onClick={() => { addSchema() }}>+<u>Add new schema</u></span>
                    </div>
                </div>
                <div className='sidebar-footer'>
                    <div className='sidebar-buttons'>
                        <button onClick={() => { saveSegmentHandler() }} className='btn'>Save the segment</button>
                        <button className='btn btn-danger'>Cancel</button>
                    </div>
                </div>
            </div>
        </>
    );
}
