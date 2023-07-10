// import React, { useState } from 'react'

// const EducationForm = () => {

//     const [college, setCollege] = useState('');
//     const [degree, setDegree] = useState('')
//     const [selectedFrom, setselectedFrom] = useState('');
//     const [selectedTo, setselectedTo] = useState('');
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
//         const validationErrors = {};

//         // Perform custom validation

//         if (!college) {
//             validationErrors.college = 'This field is required';
//         }

//         if (!degree) {
//             validationErrors.degree = 'This field is required'
//         }
//         if (!year) {
//             validationErrors.year = 'This field is required'
//         }

//         if (Object.keys(validationErrors).length > 0) {
//             setErrors(validationErrors);
//         } else {
//             console.log('Form submitted!');
//         }
//     };

//     return (
//         <div className='px-8'>
//             <h1>Education details</h1>
//             <form onSubmit={handleFormSubmit}>
//                 <div className='mt-5'>
//                     <div>
//                         <h6 className='mb-1'>College*</h6>
//                         <input
//                             className='border-[1.5px] w-full outline-none text-sm flex-1 px-5 rounded-[2px] py-2'
//                             type="text"
//                             name='text'
//                             value={college}
//                             onChange={(e) => setCollege(e.target.value)}
//                         />
//                         {errors.college && <p className="error text-red-500 text-sm mt-2">{errors.college}</p>}

//                     </div>
//                     <div className='mt-2'>
//                         <h6 className='mb-1'>Degree*</h6>
//                         <input
//                             className='border-[1.5px] w-full outline-none text-sm flex-1 px-5 rounded-[2px] py-2'
//                             type="text"
//                             name='text'
//                             value={degree}
//                             onChange={(e) => setDegree(e.target.value)}
//                         />
//                         {errors.degree && <p className="error text-red-500 text-sm mt-2">{errors.degree}</p>}

//                     </div>
//                     <div className='mt-2'>
//                         <h6 className='mb-1'>Major field of study</h6>
//                         <input
//                             className='border-[1.5px] w-full outline-none text-sm flex-1 px-5 rounded-[2px] py-2'
//                             type="text"
//                             name='text'
//                         />
//                     </div>

//                     <div className='mt-2'>
//                         <h6 className='mb-1'>Duration*</h6>
//                         <div className='flex gap-2'>
//                             <select value={selectedFrom} onChange={handleFromYear} className='border-[1.5px] outline-none text-sm flex-1 px-5 rounded-[2px] py-2'>
//                                 <option value="">--From--</option>
//                                 {years.map((year) => (
//                                     <option key={year} value={year}>
//                                         {year}
//                                     </option>
//                                 ))}
//                             </select>

//                             <select value={selectedTo} onChange={handleToYear} className='border-[1.5px] outline-none text-sm flex-1 px-5 rounded-[2px] py-2'>
//                                 <option value="">--To--</option>
//                                 {years.map((year) => (
//                                     <option key={year} value={year}>
//                                         {year}
//                                     </option>
//                                 ))}
//                             </select>
//                         </div>
//                         {errors.year && <p className="error text-red-500 text-sm mt-2">{errors.year}</p>}

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

// export default EducationForm




import React, { useState } from 'react'

const EducationForm = (props) => {
    // const [college, setCollege] = useState('');
    const [data, setData] = useState({
        college: '',
        degree: '',
        deperment: '',
        description: ''
    });
    const [errors, setErrors] = useState({});
    const handleInputChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    };

        const [selectedFrom, setselectedFrom] = useState('');
        const [selectedTo, setselectedTo] = useState('');
        const [year, setYear] = useState('')
        const years = [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023];

        const handleFromYear = (e) => {
            setselectedFrom(e.target.value);
        };

        const handleToYear = (e) => {
            setselectedTo(e.target.value);
        };

    const handleSubmit = (e) => {
        e.preventDefault();
        // localStorage.setItem('formData', JSON.stringify(formData));
        const educationData = JSON.parse(localStorage.getItem('educationData')) || [];
        educationData.push(data);
        localStorage.setItem('educationData', JSON.stringify(educationData));
        setData({ college: '', degree: '', deperment: '', description: '' });

        const validationErrors = {};
        if (!data.college) {
            validationErrors.college = 'This field is required';
        }

        // if (!degree) {
        //     validationErrors.degree = 'This field is required'
        // }
        // if (!year) {
        //     validationErrors.year = 'This field is required'
        // }

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            props.setModalIsOpen(false)
            console.log('Form submitted!');
        }

    };
    return (
        <div className='px-8'>
            <h1>Education details</h1>
            <form onSubmit={handleSubmit}>
                <div className='mt-5'>
                    <div>
                        <h6 className='mb-1'>College*</h6>
                        <input
                            className='border-[1.5px] w-full outline-none text-sm flex-1 px-5 rounded-[2px] py-2'
                            type="text"
                            name='college'
                            value={data.college}
                            onChange={handleInputChange}

                        />
                        {errors.college && <p className="error text-red-500 text-sm mt-2">{errors.college}</p>}

                    </div>
                    <div className='mt-2'>
                        <h6 className='mb-1'>Degree*</h6>
                        <input
                            className='border-[1.5px] w-full outline-none text-sm flex-1 px-5 rounded-[2px] py-2'
                            type="text"
                            name='degree'
                            value={data.degree}
                            onChange={handleInputChange}
                        />
                        {/* {errors.degree && <p className="error text-red-500 text-sm mt-2">{errors.degree}</p>} */}

                    </div>
                    <div className='mt-2'>
                        <h6 className='mb-1'>Major field of study</h6>
                        <input
                            className='border-[1.5px] w-full outline-none text-sm flex-1 px-5 rounded-[2px] py-2'
                            type="text"
                            name='deperment'
                            value={data.deperment}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className='mt-2'>
                        <h6 className='mb-1'>Duration*</h6>
                        <div className='flex gap-2'>
                            <select value={selectedFrom} onChange={handleFromYear} className='border-[1.5px] outline-none text-sm flex-1 px-5 rounded-[2px] py-2'>
                                <option value="">--From--</option>
                                {years.map((year) => (
                                    <option key={year} value={year}>
                                        {year}
                                    </option>
                                ))}
                            </select>

                            <select value={selectedTo} onChange={handleToYear} className='border-[1.5px] outline-none text-sm flex-1 px-5 rounded-[2px] py-2'>
                                <option value="">--To--</option>
                                {years.map((year) => (
                                    <option key={year} value={year}>
                                        {year}
                                    </option>
                                ))}
                            </select>
                        </div>
                        {/* {errors.year && <p className="error text-red-500 text-sm mt-2">{errors.year}</p>} */}

                    </div>

                    <div className='mt-2'>
                        <h6>Description</h6>
                        <textarea
                            name="description"
                            value={data.description}
                            onChange={handleInputChange}
                            className='border-[1.5px] outline-none text-sm w-full flex-1 px-5 rounded-[2px] py-2'
                        />
                    </div>
                    <div className="flex mt-2 mb-4 gap-4">
                        <button className='bg-blue-600 px-4 py-1 text-sm rounded-[2px] text-white' type='submit'>Save</button>
                        <button className='bg-red-600 px-4 py-1 text-sm rounded-[2px] text-white' onClick={() => { props.setModalIsOpen(false) }}>Cancel</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default EducationForm