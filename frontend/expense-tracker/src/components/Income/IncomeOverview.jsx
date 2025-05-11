import React, { useEffect, useState } from 'react'
import { prepareIncomeBarChartData } from '../../utils/helper';
import { LuPlus } from 'react-icons/lu';
import CustomIncomeBarChart from '../Charts/CustomIncomeBarChart';


const IncomeOverview = ({ transactions, onAddIncome }) => {
    // console.log("IncomeOverview component rendered", transactions);

    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        const result = prepareIncomeBarChartData(transactions);
        setChartData(result);

        return () => { };
    }, [transactions])

    return (
        <div className='bg-white p-6 rounded-2xl shadow-md shadow-gray-100 border border-gray-200/50'>
            <div className='flex items-center justify-between'>
                <div className=''>
                    <h5 className='text-lg'>Income Overview</h5>
                    <p className='text-xs text-gray-400 mt-0.5'>Track and analyze your income trends.</p>
                </div>
                <button
                    className='flex items-center gap-1.5 text-xs md:text-sm font-medium text-blue-600 whitespace-nowrap bg-blue-50 border border-blue-100 rounded-lg px-4 py-2 cursor-pointer hover:bg-blue-100'
                    onClick={onAddIncome}
                >
                    <LuPlus className='text-lg' /> Add Income
                </button>
            </div>
            <div className='mt-10'>
                <CustomIncomeBarChart
                    data={chartData}
                />
            </div>


        </div>

    )
}

export default IncomeOverview