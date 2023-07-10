import React, { useState } from 'react'
const DateDropdown = () => {
    const [selectedDate, setSelectedDate] = useState('');

    const days = [...Array(31).keys()].map((day) => day + 1);
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];
    const years = [2020, 2021, 2022, 2023, 2024]; // Replace with your desired range of years

    const handleDayChange = (e) => {
        // Update selected day
    };

    const handleMonthChange = (e) => {
        // Update selected month
    };

    const handleYearChange = (e) => {
        // Update selected year
    };

    return (
        <div className="flex justify-between">
            <div className='flex gap-2'>
                <select value={selectedDate.day} onChange={handleDayChange} className='border-[1.5px] outline-none text-sm flex-1 px-5 rounded-[2px] py-2'>
                    <option value="">Day</option>
                    {days.map((day) => (
                        <option key={day} value={day}>
                            {day}
                        </option>
                    ))}
                </select>
                <select value={selectedDate.month} onChange={handleMonthChange} className='border-[1.5px] outline-none text-sm flex-1 px-5 rounded-[2px] py-2'>
                    <option value="">Month</option>
                    {months.map((month, index) => (
                        <option key={index} value={index + 1}>
                            {month}
                        </option>
                    ))}
                </select>
                <select value={selectedDate.year} onChange={handleYearChange} className='border-[1.5px] outline-none text-sm flex-1 px-5 rounded-[2px] py-2'>
                    <option value="">Year</option>
                    {years.map((year) => (
                        <option key={year} value={year}>
                            {year}
                        </option>
                    ))}
                </select>
            </div>

            <div className='text-[20px]'>-</div>
            <div className='flex gap-2'>
                <select value={selectedDate.day} onChange={handleDayChange} className='border-[1.5px] outline-none text-sm flex-1 px-5 rounded-[2px] py-2'>
                    <option value="">Day</option>
                    {days.map((day) => (
                        <option key={day} value={day}>
                            {day}
                        </option>
                    ))}
                </select>
                <select value={selectedDate.month} onChange={handleMonthChange} className='border-[1.5px] outline-none text-sm flex-1 px-5 rounded-[2px] py-2'>
                    <option value="">Month</option>
                    {months.map((month, index) => (
                        <option key={index} value={index + 1}>
                            {month}
                        </option>
                    ))}
                </select>
                <select value={selectedDate.year} onChange={handleYearChange} className='border-[1.5px] outline-none text-sm flex-1 px-5 rounded-[2px] py-2'>
                    <option value="">Year</option>
                    {years.map((year) => (
                        <option key={year} value={year}>
                            {year}
                        </option>
                    ))}
                </select>
            </div>

            
        </div>
    );
};

export default DateDropdown;