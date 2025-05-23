import React from 'react'
import loginImg from "../../assets/images/loginImg.png";
import { LuTrendingUpDown } from "react-icons/lu";

const AuthLayout = ({ children }) => {
    return (
        <div className='flex flex-col md:flex-row w-screen md:h-screen'>
            {/* LEFT */}
            <div className='md:w-[60vw] px-12 pt-8 pb-12'>
                <h2 className='text-lg font-medium text-black'>Expense Tracker</h2>
                {children}
            </div>

            {/* RIGHT  */}
            <div className='w-screen h-[100vw] md:w-[40vw] md:h-screen bg-blue-50 bg-auth-bg-img bg-cover bg-no-repeat bg-center overflow-hidden p-8 relative'>
                <div className='w-48 h-48 rounded-[40px] bg-sky-500/40 absolute -top-7 -left-5' />
                <div className='w-48 h-56 rounded-[40px] border-[20px] border-blue-500/40 absolute top-[30%] -right-10' />
                <div className='w-48 h-48 rounded-[40px] bg-blue-400/40 absolute -bottom-7 -left-5' />

                <div className='flex flex-col h-full md:h-full md:justify-center md:gap-18 items-center justify-around  z-20'>
                    <StatsInfoCard
                        icon={<LuTrendingUpDown />}
                        label="Track Your Income & Expenses"
                        value="With Expense Tracker"
                        color="bg-primary"
                    />
                    <img
                        src={loginImg}
                        className='w-full bottom-10 shadow-lg shadow-blue-400/15 z-20'
                    />
                </div>
            </div>
        </div>


        // <div className='flex'>
        //     <div className='w-screen h-screen md:w-[60vw] px-12 pt-8 pb-12'>
        //         <h2 className='text-lg font-medium text-black'>Expense Tracker</h2>
        //         {children}
        //     </div>
        //     <div className='hidden md:block w-[40vw] h-screen bg-blue-50 bg-auth-bg-img bg-cover bg-no-repeat bg-center overflow-hidden p-8 relative'>
        //         <div className='w-48 h-48 rounded-[40px] bg-sky-600 absolute -top-7 -left-5' />
        //         <div className='w-48 h-56 rounded-[40px] border-[20px] border-blue-600 absolute top-[30%] -right-10' />
        //         <div className='w-48 h-48 rounded-[40px] bg-blue-500 absolute -bottom-7 -left-5' />

        //         <div className='grid grid-cols-1 z-20'>
        //             <StatsInfoCard 
        //             icon={<LuTrendingUpDown />}
        //             label="Track Your Income & Expenses"
        //             value="430,000"
        //             color="bg-primary"
        //             />
        //         </div>

        //         <img 
        //             src={expenseBarGraph}
        //             className='w-full lg:w-[90%] absolute bottom-10 shadow-lg shadow-sky-400/15'
        //         />

        //     </div>
        // </div>

    )
}

export default AuthLayout;

const StatsInfoCard = ({ icon, label, value, color }) => {
    return (
        <div className='flex gap-6 w-full bg-white p-4 rounded-xl shadow-md shadow-blue-400/10 border border-gray-200/50 z-10'>
            <div className={`w-12 h-12 flex items-center justify-center text-[26px] text-white ${color} rounded-full drop-shadow-xl`}>
                {icon}
            </div>
            <div>
                <h6 className='text-xs text-gray-500 mb-1'>{label}</h6>
                <span className='text-[20px]'>{value}</span>
            </div>
        </div>
    )
}