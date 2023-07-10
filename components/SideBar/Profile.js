import React, { useEffect, useState } from 'react'
import { CiLocationOn } from 'react-icons/ci'
import { AiTwotoneMedicineBox, AiOutlineHome, AiOutlineDelete, AiOutlineStar, AiOutlinePlus, AiOutlineEdit } from 'react-icons/ai'
import Novice from '../../public/assets/image/Novice.svg'
import EducationModal from '../Modal/Modal'
import WorkExperience from '../work/WorkExperince'
import ModalComponent from '../Extra'
import EducationForm from '../Education/EducationForm'
import EditModal from '../Modal/EditModal'
import EditForm from '../Education/EditForm'
import WorkModal from '../Modal/workModal'
import WorkEditForm from '../work/WorkEditForm'


const Profile = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [showModal, setShowModal] = useState(false)
    const [editModal, setEditModal] = useState(false)
    const [id, setId] = useState()
    const [savedData, setSavedData] = useState([]);
    const [educationData, setEducationData] = useState([])
    const [workEditModal, setWorkEditModal] = useState(false)
    useEffect(() => {
        const retrievedData = JSON.parse(localStorage.getItem('savedData')) || [];
        setSavedData(retrievedData);
    }, [showModal]);

    useEffect(() => {
        const education = JSON.parse(localStorage.getItem('educationData')) || [];
        setEducationData(education);
    }, [modalIsOpen]);


    const deleteData = (index) => {
        const newData = educationData.filter((data => data.college != educationData[index].college))
        setEducationData(newData)
        localStorage.setItem('educationData', JSON.stringify(newData));

    }

    const workdeleteData = (index) => {
        const newWorkData = savedData.filter((data => data.company != savedData[index].company))
        setSavedData(newWorkData)
        localStorage.setItem('savedData', JSON.stringify(newWorkData));

    }
    return (
        <div className='flex flex-wrap bg-[#F4F4F7 justify-betwee gap-8'>
            <div className='w-full h-[] md:w-1/3 lg:w-1/3 bg-white shadow-lg rounded-[5px] p-4'>
                <img
                    src="https://tecdn.b-cdn.net/img/new/avatars/2.webp"
                    class="w-32 rounded-full mx-auto"
                    alt="Avatar" />
                <div className='mt-5'>
                    <div className='px-2 mb-2'>
                        <h1 className='uppercase'>motiatr rahaman</h1>
                        <p className='capitalize'>male</p>
                    </div>
                    <div className='flex items-cente gap-2 mb-2'>
                        <CiLocationOn className='text-[24px]' />
                        <h6>Kolkata, West Bengal, India</h6>
                    </div>
                    <div className='flex items-cente gap-2 mb-2'>
                        <AiTwotoneMedicineBox className='text-[24px]' />
                        <h6 className='text-[16px]'>Frontend Developer Dhaatri Naturals PVT. Ltd .</h6>
                    </div>
                    <div className='flex items-cente gap-2'>
                        <AiOutlineHome className='text-[24px]' />
                        <h6>Jalpaiguri Government Engineering College West Bengal</h6>
                    </div>
                </div>
            </div>
            <div className='w-full md:w-2/3 lg:w-3/5 '>
                <div className=' bg-white shadow-lg rounded-[5px] p-5 gap-4 border-x-4 border-indigo-500 divide-'>
                    <div className="flex gap-2">
                        <img src={Novice.src} alt="Novice" className='w-10' />
                        <p className='text-[14px]'>You have earned 0 points based on your activities.You need 40 more points to get the next badge</p>
                    </div>
                    <div className="flex flex-wrap gap- justify-between">
                        <div className="flex mt-3 gap-3">
                            <div className='bg-red-200 px-4 py-2 rounded-[5px] flex items-center ju'>
                                <AiOutlineStar />
                            </div>
                            <div>
                                <p>Points</p>
                                <span>0</span>
                            </div>
                        </div>
                        <div className="flex mt-3 gap-3">
                            <div className='bg-red-200 px-4 py-2 rounded-[5px] flex items-center ju'>
                                <AiOutlineStar />
                            </div>
                            <div>
                                <p>Points</p>
                                <span>0</span>
                            </div>
                        </div>
                        <div className="flex mt-3 gap-3">
                            <div className='bg-red-200 px-4 py-2 rounded-[5px] flex items-center ju'>
                                <AiOutlineStar />
                            </div>
                            <div>
                                <p>Points</p>
                                <span>0</span>
                            </div>
                        </div>
                        <div className="flex mt-3 gap-3">
                            <div className='bg-red-200 px-4 py-2 rounded-[5px] flex items-center ju'>
                                <AiOutlineStar />
                            </div>
                            <div>
                                <p>Points</p>
                                <span>0</span>
                            </div>
                        </div>
                    </div>

                </div>

                <div className='mt-5 p-5 bg-white shadow-lg rounded-[5px]'>
                    <h1>3 submissions in the last year</h1>
                    <div className='flex justify-between mt-5'>
                        <div>
                            <h6>Jan</h6>
                            <p className='mt-3'>10</p>
                        </div>
                        <div>
                            <h6>Feb</h6>
                            <p className='mt-3'>10</p>
                        </div>
                        <div>
                            <h6>Mar</h6>
                            <p className='mt-3'>10</p>
                        </div>
                        <div>
                            <h6>Apr</h6>
                            <p className='mt-4'>10</p>
                        </div>
                        <div>
                            <h6>May</h6>
                            <p className='mt-3'>10</p>
                        </div>
                        <div>
                            <h6>Jun</h6>
                            <p className='mt-3'>10</p>
                        </div>
                        <div>
                            <h6>Jul</h6>
                            <p className='mt-4'>10</p>
                        </div>
                        <div>
                            <h6>Aug</h6>
                            <p className='mt-4'>10</p>
                        </div>
                        <div>
                            <h6>Sep</h6>
                            <p className='mt-3'>10</p>
                        </div>
                        <div>
                            <h6>Oct</h6>
                            <p className='mt-3'>10</p>
                        </div>
                        <div>
                            <h6>Nov</h6>
                            <p className='mt-3'>10</p>
                        </div>
                        <div>
                            <h6>Dec</h6>
                            <p className='mt-3'>10</p>
                        </div>
                    </div>
                    <div className='mt-2'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis amet quisquam ab distinctio consequatur a repellat necessitatibus optio iure similique!
                    </div>
                </div>
            </div>

            {/* Education part start */}
            <div className='w-full h-1/2 md:w-1/3 lg:w-1/3 bg-white shadow-lg rounded-[5px] p-4'>
                <img
                    src="https://tecdn.b-cdn.net/img/new/avatars/2.webp"
                    class="w-32 rounded-full mx-auto"
                    alt="Avatar" />
                <div className='mt-5'>
                    <div className='px-2 mb-2'>
                        <h1 className='uppercase'>motiatr rahaman</h1>
                        <p className='capitalize'>male</p>
                    </div>
                    <div className='flex items-cente gap-2 mb-2'>
                        <CiLocationOn className='text-[24px]' />
                        <h6>Kolkata, West Bengal, India</h6>
                    </div>
                    <div className='flex items-cente gap-2 mb-2'>
                        <AiTwotoneMedicineBox className='text-[24px]' />
                        <h6 className='text-[16px]'>Frontend Developer Dhaatri Naturals PVT. Ltd .</h6>
                    </div>
                    <div className='flex items-cente gap-2'>
                        <AiOutlineHome className='text-[24px]' />
                        <h6>Jalpaiguri Government Engineering College West Bengal</h6>
                    </div>
                </div>
            </div>


            <div className='w-full md:w-2/3 lg:w-3/5 '>
                <div className=' bg-white shadow-lg rounded-[5px] p-8 gap-'>

                </div>
                {/* Education part Start*/}

                <div className='mt-5 bg-white shadow-lg rounded-[5px]'>
                    <div className="flex justify-between p-5">
                        <h1>Education</h1>
                        <AiOutlinePlus className='cursor-pointer' onClick={() => setModalIsOpen(true)} />
                    </div>
                    <div className='mt-5'>

                        {educationData.map((Education, index) =>
                            <div key={index} className='mt-  hover:bg-blue-300 hover:text-white px-5 mb-'>
                                <div className="flex justify-between">
                                    <div className='mb-5'>
                                        <p className='mt-2 cursor-pointer'>{Education.college}</p>
                                        <p className='mt-2 cursor-pointer'>{Education.degree}</p>
                                        <p className='mt-2 cursor-pointer'>{Education.deperment}</p>
                                        <p className='mt-2 cursor-pointer'>{Education.description}</p>
                                    </div>
                                    <div className='flex gap-4'>
                                        <div className='mt-2 cursor-pointer'><AiOutlineEdit onClick={() => (setEditModal(true), setId(index))} />
                                        </div>
                                        <div className='mt-2 cursor-pointer text-red-500'><AiOutlineDelete onClick={() => (deleteData(index))} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* EditModal start */}
                    <EditModal onClose={() => setEditModal(false)}
                        show={editModal}
                    >
                        <EditForm id={id} educationData={educationData} setEditModal={setEditModal} />
                    </EditModal>
                    {/* EditModal End */}

                    {/* Education Modal Section start*/}
                    <EducationModal onClose={() => setModalIsOpen(false)}
                        show={modalIsOpen} className=''>
                        <div>
                            <EducationForm setModalIsOpen={setModalIsOpen} />
                        </div>
                    </EducationModal>



                    {/* Education Modal Section end*/}

                    {/* Education part end*/}

                </div>
                {/* Work Experience start */}
                <div className='mt-5 p- bg-white shadow-lg rounded-[5px]'>
                    <div className="flex justify-between p-5">
                        <h1 className=''>Work Experience</h1>
                        <AiOutlinePlus className='cursor-pointer' onClick={() => setShowModal(true)} />
                    </div>
                    <div className='mt-'>
                        {savedData.map((entry, index) => (
                            <div key={index} className=' hover:bg-blue-300 hover:text-white px-5'>
                                <div className="flex justify-between">
                                    <div className='mb-5'>
                                        <p className='mt-2 cursor-pointer'>{entry.company}</p>
                                        <p className='mt-2 cursor-pointer'>{entry.job}</p>
                                        <p className='mt-2 cursor-pointer'>{entry.location}</p>
                                        <p className='mt-2 cursor-pointer'>{entry.description}</p>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className='mt-2 cursor-pointer'><AiOutlineEdit onClick={() => (setWorkEditModal(true))} /></div>
                                        <div className='mt-2 cursor-pointer text-red-500'><AiOutlineDelete onClick={() => (workdeleteData(index))}/>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>




                </div>
                {/* WorkEditModal Start */}

                <WorkModal onClose={() => setWorkEditModal(false)}
                    show={workEditModal}
                >
                    <WorkEditForm id={id} savedData={savedData} setWorkEditModal={setWorkEditModal} />
                </WorkModal>
                {/* WorkEditModal End */}
                <EducationModal onClose={() => setShowModal(false)}
                    show={showModal} className=''>
                    <div>
                        <WorkExperience setShowModal={setShowModal} />
                        {/* <ModalComponent /> */}
                    </div>
                </EducationModal>
                {/* Work Experience end */}

            </div>


        </div>


    )
}

export default Profile