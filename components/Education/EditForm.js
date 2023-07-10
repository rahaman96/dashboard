import React,{useState} from 'react'

const EditForm = ({ id, educationData, setEditModal }) => {
    const [data, setData] = useState({
        college: educationData[id].college,
        degree: educationData[id].degree,
        deperment: educationData[id].deperment,
        description: educationData[id].description
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
            // educationData[id] = data
            educationData.splice(id, 1, data)
            localStorage.setItem('educationData', JSON.stringify(educationData));
            setEditModal(false)
            console.log('Form submitted!');
        }

    };
    return (
        <div className='mb-5 mt-3 px-5'>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="">College</label>
                    <input
                        className='border-[1.5px] w-full outline-none text-sm flex-1 px-5 rounded-[2px] py-2 mt-2'
                        type="text"
                        name="college"
                        id=""
                        defaultValue={educationData[id].college}
                        // value={data.college}
                        onChange={handleInputChange}

                    />
                </div>

                <div className='mt-2'>
                    <label htmlFor="">Degree</label>
                    <input
                        className='border-[1.5px] w-full outline-none text-sm flex-1 px-5 rounded-[2px] py-2 mt-2'
                        type="text"
                        name="degree"
                        id=""
                        defaultValue={educationData[id].degree}
                        onChange={handleInputChange}

                    />
                </div>

                <div className='mt-2'>
                    <label htmlFor="">Major field of study</label>
                    <input
                        className='border-[1.5px] w-full outline-none text-sm flex-1 px-5 rounded-[2px] py-2 mt-2'
                        type="text"
                        name="deperment"
                        id=""
                        defaultValue={educationData[id].deperment}
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
                        defaultValue={educationData[id].description}
                        onChange={handleInputChange}

                    />
                </div>

                <div className="flex mt-2 mb-4 gap-4">
                    <button className='bg-blue-600 px-4 py-1 text-sm rounded-[2px] text-white' type='submit'>Save</button>
                    <button className='bg-red-600 px-4 py-1 text-sm rounded-[2px] text-white' onClick={() => (setEditModal(false))}>Cancel</button>
                </div>
            </form>
        </div>
    )
}

export default EditForm