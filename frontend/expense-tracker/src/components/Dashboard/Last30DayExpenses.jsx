import React, { useEffect, useState } from 'react'
import { prepareExpenseBarChartData } from '../../utils/helper';
import CustomBarChart from '../Charts/CustomBarChart';

const Last30DayExpenses = ({ data }) => {

    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        console.log("Raw transactions:", data);
        const result = prepareExpenseBarChartData(data);
        console.log("Chart data:", result); 
        setChartData(result);
        return () => { };
    }, [data]);

    return (
        <div className='bg-white p-6 rounded-2xl shadow-md shadow-gray-100 border border-gray-200/50'>
            <div className='flex items-center justify-between'>
                <h5 className='text-lg'>Last 30 Days Expenses</h5>
            </div>
            <CustomBarChart data={chartData} />
        </div>
    )
}

export default Last30DayExpenses