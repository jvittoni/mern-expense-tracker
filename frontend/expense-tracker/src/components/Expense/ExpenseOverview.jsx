import React, { useEffect, useState } from 'react'
import { prepareExpenseLineChartData } from '../../utils/helper';
import { LuPlus } from 'react-icons/lu';
import CustomLineChart from '../Charts/CustomLineChart';

const ExpenseOverview = ({ transactions, onExpenseIncome }) => {

    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        const result = prepareExpenseLineChartData(transactions);
        setChartData(result);
        return () => { };
    }, [transactions]);

    return (
        <div className='bg-white p-6 rounded-2xl shadow-md shadow-gray-100 border border-gray-200/50'>
            <div className='flex items-center justify-between'>
                <div className=''>
                    <h5 className='text-lg'>Expense Overview</h5>
                    <p className='text-xs text-gray-400 mt-0.5'>Track and analyze your expense trends.</p>
                </div>
                <button
                    className='flex items-center gap-1.5 text-xs md:text-sm font-medium text-blue-600 whitespace-nowrap bg-blue-50 border border-blue-100 rounded-lg px-4 py-2 cursor-pointer hover:bg-blue-100'
                    onClick={onExpenseIncome}
                >
                    <LuPlus className='text-lg' /> Add Expense
                </button>
            </div>
            <div className='mt-10'>
                <CustomLineChart data={chartData} />
            </div>
        </div>
    )
}

export default ExpenseOverview