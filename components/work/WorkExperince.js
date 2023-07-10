

// import React, { useState, useEffect } from 'react'
// import DateDropdown from './DateDropDown';

// const WorkExperience = () => {
//     const [work, setWork] = useState([])
//     const [company, setCompany] = useState('');
//     const [job, setJob] = useState('')
//     const [selectedFrom, setselectedFrom] = useState('');
//     const [selectedTo, setselectedTo] = useState('');
//     const [isChecked, setIsChecked] = useState(false);


//     const [year, setYear] = useState('')
//     const years = [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023];

//     const handleFromYear = (e) => {
//         setselectedFrom(e.target.value);
//     };

//     const handleToYear = (e) => {
//         setselectedTo(e.target.value);
//     };


//     const [errors, setErrors] = useState({});
//     const handleFormSubmit = (e) => {
//         e.preventDefault();

//         let works = {
//             company,
//             job
//         }

//         setWork([...work, works]);
//         // const validationErrors = {};
//         // if (isChecked) {
//         // } else {
//         // }

//         // if (!company) {
//         //     validationErrors.company = 'This field is required';
//         // }

//         // if (!job) {
//         //     validationErrors.job = 'This field is required'
//         // }
//         // if (!year) {
//         //     validationErrors.year = 'This field is required'
//         // }
//         // if (!isChecked) {
//         //     validationErrors.isChecked = 'This field is required'
//         // }
//         // // Set errors or submit form
//         // if (Object.keys(validationErrors).length > 0) {
//         //     setErrors(validationErrors);
//         // } else {
//         //     // Submit form or perform further actions
//         //     console.log('Form submitted!');
//         // }
//     };

//     useEffect(() => {
//         localStorage.setItem('work', JSON.stringify(work))
//     }, [work])

//     return (
//         <div className='px-8'>
//             <h1>Work experience details</h1>
//             <form onSubmit={handleFormSubmit}>
//                 <div className='mt-5'>
//                     <div>
//                         <h6 className='mb-1'>Company*</h6>
//                         <input
//                             className='border-[1.5px] w-full outline-none text-sm flex-1 px-5 rounded-[2px] py-2'
//                             type="text"
//                             name='text'
//                             value={company}
//                             onChange={(e) => setCompany(e.target.value)}
//                         />
//                         {/* {errors.company && <p className="error text-red-500 text-sm mt-2">{errors.company}</p>} */}

//                     </div>
//                     <div className='mt-2'>
//                         <h6 className='mb-1'>Job Title*</h6>
//                         <input
//                             className='border-[1.5px] w-full outline-none text-sm flex-1 px-5 rounded-[2px] py-2'
//                             type="text"
//                             name='text'
//                             value={job}
//                             onChange={(e) => setJob(e.target.value)}
//                         />
//                         {/* {errors.job && <p className="error text-red-500 text-sm mt-2">{errors.job}</p>} */}

//                     </div>
//                     <div className='mt-2'>
//                         <h6 className='mb-1'>Location</h6>
//                         <input
//                             className='border-[1.5px] w-full outline-none text-sm flex-1 px-5 rounded-[2px] py-2'
//                             type="text"
//                             name='text'
//                         />
//                     </div>

//                     <div className='mt-2'>
//                         <h6 className='mb-1'>Duration*</h6>
//                         <DateDropdown />
//                         {/* {errors.year && <p className="error text-red-500 text-sm mt-2">{errors.year}</p>} */}

//                     </div>
//                     <div>
//                         <div className="mt-2 flex">
//                             <input
//                                 className='border border-gray-400'
//                                 type="checkbox"
//                                 // checked={isChecked}
//                                 value={setIsChecked}
//                                 onChange={(e) => setJob(e.target.value)}
//                             />

//                             <span className='m-2 text-sm'>I currently work here</span>
//                         </div>
//                         {/* {errors.isChecked && <p className="error text-red-500 text-sm ">{errors.isChecked}</p>} */}

//                     </div>
//                     <div className='mt-2'>
//                         <h6>Description</h6>
//                         <textarea name="postContent" className='border-[1.5px] outline-none text-sm w-full flex-1 px-5 rounded-[2px] py-2' />
//                     </div>
//                     <div className="flex mt-2 mb-4 gap-4">
//                         <button className='bg-blue-600 px-4 py-1 text-sm rounded-[2px] text-white' type='submit'>Save</button>
//                         <button className='bg-red-600 px-4 py-1 text-sm rounded-[2px] text-white'>Cancel</button>
//                     </div>
//                 </div>
//             </form>
//         </div>
//     )
// }

// export default WorkExperience





import React, { useState, useEffect } from 'react'
import DateDropdown from './DateDropDown';

const WorkExperience = (props) => {
    const [formData, setFormData] = useState({
        id: '',
        company: '',
        job: '',
        location: '',
        description: ''
        // Other form fields
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // localStorage.setItem('formData', JSON.stringify(formData));
        const savedData = JSON.parse(localStorage.getItem('savedData')) || [];
        savedData.push(formData);
        localStorage.setItem('savedData', JSON.stringify(savedData));
        setFormData({ company: '', job: '', location: '', description: '' });

        const validationErrors = {};

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            props.setShowModal(false)
            console.log('Form submitted!');
        }

    };
    return (
        <div className='px-8'>
            <h1>Work experience details</h1>
            <form onSubmit={handleSubmit}>
                <div className='mt-5'>
                    <div>
                        <h6 className='mb-1'>Company*</h6>
                        <input
                            className='border-[1.5px] w-full outline-none text-sm flex-1 px-5 rounded-[2px] py-2'
                            type="text"
                            name='company'
                            value={formData.company}
                            onChange={handleInputChange}

                        />

                    </div>
                    <div className='mt-2'>
                        <h6 className='mb-1'>Job Title*</h6>
                        <input
                            className='border-[1.5px] w-full outline-none text-sm flex-1 px-5 rounded-[2px] py-2'
                            type="text"
                            name='job'
                            value={formData.job}
                            onChange={handleInputChange}
                        />
                        {/* {errors.job && <p className="error text-red-500 text-sm mt-2">{errors.job}</p>} */}

                    </div>
                    <div className='mt-2'>
                        <h6 className='mb-1'>Location</h6>
                        <input
                            className='border-[1.5px] w-full outline-none text-sm flex-1 px-5 rounded-[2px] py-2'
                            type="text"
                            name='location'
                            value={formData.location}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className='mt-2'>
                        <h6 className='mb-1'>Duration*</h6>
                        <DateDropdown />
                        {/* {errors.year && <p className="error text-red-500 text-sm mt-2">{errors.year}</p>} */}

                    </div>
                    <div>
                        <div className="mt-2 flex">
                            <input
                                className='border border-gray-400'
                                type="checkbox"

                            />

                            <span className='m-2 text-sm'>I currently work here</span>
                        </div>
                        {/* {errors.isChecked && <p className="error text-red-500 text-sm ">{errors.isChecked}</p>} */}

                    </div>
                    <div className='mt-2'>
                        <h6>Description</h6>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleInputChange}
                            className='border-[1.5px] outline-none text-sm w-full flex-1 px-5 rounded-[2px] py-2' />
                    </div>
                    <div className="flex mt-2 mb-4 gap-4">
                        <button className='bg-blue-600 px-4 py-1 text-sm rounded-[2px] text-white' type='submit'>Save</button>
                        <button className='bg-red-600 px-4 py-1 text-sm rounded-[2px] text-white'>Cancel</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default WorkExperience





