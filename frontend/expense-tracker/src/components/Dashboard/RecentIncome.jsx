import moment from 'moment'
import React from 'react'
import { LuArrowRight } from 'react-icons/lu'
import TransactionInfoCard from '../Cards/TransactionInfoCard'

const RecentIncome = ({ transactions, onSeeMore }) => {
    console.log("Received transactions:", transactions);

    return (
        <div className='bg-white p-6 rounded-2xl shadow-md shadow-gray-100 border border-gray-200/50'>
            <div className='flex items-center justify-between'>
                <h5 className='text-lg'>Income</h5>
                <button
                    className='flex items-center gap-3 text-[12px] font-medium text-gray-700 hover:text-blue-500 bg-gray-50 hover:bg-blue-50 px-4 py-1.5 rounded-lg border border-gray-200/50 cursor-pointer'
                    onClick={onSeeMore}
                >
                    See All <LuArrowRight className='text-base' />
                </button>
            </div>
            <div className='mt-6'>
                {transactions?.slice(0, 5)?.map((item) => (
                    <TransactionInfoCard
                        key={item._id}
                        title={item.source}
                        icon={item.icon}
                        data={moment(item.date).format("Do MM YYYY")}
                        amount={item.amount}
                        type="income"
                        hideDeleteBtn
                    />
                ))}
            </div>

        </div>
    )
}

export default RecentIncome