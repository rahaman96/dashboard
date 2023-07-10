import React,{useState} from 'react'

const WorkEditForm = ({ id, savedData, setWorkEditModal }) => {
    const [data, setData] = useState({
        company: savedData[id].company,
        job: savedData[id].job,
        location: savedData[id].location,
        description: savedData[id].description
    });
    const handleInputChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();


        const validationErrors = {};
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            // savedData[id] = data
            savedData.splice(id, 1, data)
            localStorage.setItem('savedData', JSON.stringify(savedData));
            setWorkEditModal(false)
            console.log('Form submitted!');
        }

    };
    return (
        <div className='mb-5 mt-3 px-5'>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="">company</label>
                    <input
                        className='border-[1.5px] w-full outline-none text-sm flex-1 px-5 rounded-[2px] py-2 mt-2'
                        type="text"
                        name="company"
                        id=""
                        defaultValue={savedData[id].company}
                        // value={data.company}
                        onChange={handleInputChange}

                    />
                </div>

                <div className='mt-2'>
                    <label htmlFor="">job</label>
                    <input
                        className='border-[1.5px] w-full outline-none text-sm flex-1 px-5 rounded-[2px] py-2 mt-2'
                        type="text"
                        name="job"
                        id=""
                        defaultValue={savedData[id].job}
                        onChange={handleInputChange}

                    />
                </div>

                <div className='mt-2'>
                    <label htmlFor="">Major field of study</label>
                    <input
                        className='border-[1.5px] w-full outline-none text-sm flex-1 px-5 rounded-[2px] py-2 mt-2'
                        type="text"
                        name="location"
                        id=""
                        defaultValue={savedData[id].location}
                        onChange={handleInputChange}

                    />
                </div>

                <div className='mt-2'>
                    <label htmlFor="">Description</label>
                    <input
                        className='border-[1.5px] w-full outline-none text-sm flex-1 px-5 rounded-[2px] py-2 mt-2'
                        type="text"
                        name="description"
                        id=""
                        defaultValue={savedData[id].description}
                        onChange={handleInputChange}

                    />
                </div>

                <div className="flex mt-2 mb-4 gap-4">
                    <button className='bg-blue-600 px-4 py-1 text-sm rounded-[2px] text-white' type='submit'>Save</button>
                    <button className='bg-red-600 px-4 py-1 text-sm rounded-[2px] text-white' onClick={() => (setWorkEditModal(false))}>Cancel</button>
                </div>
            </form>
        </div>
    )
}

export default WorkEditForm