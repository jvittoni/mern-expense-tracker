import React from 'react'
import { LuDownload } from 'react-icons/lu'
import TransactionInfoCard from '../Cards/TransactionInfoCard'
import moment from 'moment'

const IncomeList = ({ transactions, onDelete, onDownload }) => {

    const sortedTransactions = [...transactions].sort((a, b) => new Date(b.date) - new Date(a.date))

    return (
        <div className='bg-white p-6 rounded-2xl shadow-md shadow-gray-100 border border-gray-200/50'>
            <div className='flex items-center justify-between'>
                <h5 className='text-lg'>Income Sources</h5>
                <button
                    className='flex items-center gap-1.5 text-xs md:text-sm font-medium text-blue-600 whitespace-nowrap bg-blue-50 border border-blue-100 rounded-lg px-4 py-2 cursor-pointer hover:bg-blue-100'
                    onClick={onDownload}
                >
                    <LuDownload className='text-base' /> Download
                </button>
            </div>
            <div>
                {sortedTransactions?.map((income) => (
                    <TransactionInfoCard 
                        key={income._id}
                        title={income.source}
                        icon={income.icon}
                        date={moment(income.date).format("Do MMM YYYY")}
                        amount={income.amount}
                        type="income"
                        onDelete={() => onDelete(income._id)}
                    />
                ))}
            </div>
        </div>
    )
}

export default IncomeList