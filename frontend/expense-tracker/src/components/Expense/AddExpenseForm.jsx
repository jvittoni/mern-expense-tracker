import React, { useState } from 'react';
import EmojiPickerPopup from '../EmojiPickerPopup';
import Input from '../Inputs/Input';

const AddExpenseForm = ({ onAddExpense }) => {

    const [income, setIncome] = useState({
        category: "",
        amount: "",
        date: "",
        icon: ""
    });

    const handleChange = (key, value) => setIncome({ ...income, [key]: value });

    return (
        <div>
            <EmojiPickerPopup
                icon={income.icon}
                onSelect={(selectedIcon) => handleChange("icon", selectedIcon)}
            />
            <Input
                value={income.category}
                onChange={({ target }) => handleChange("category", target.value)}
                label="Category"
                placeholder="Rent, Groceries, ect"
                type="text"
            />
            <Input
                value={income.amount}
                onChange={({ target }) => handleChange("amount", target.value)}
                label="Amount"
                placeholder=""
                type="number"
            />
            <Input
                value={income.date}
                onChange={({ target }) => handleChange("date", target.value)}
                label="Date"
                placeholder=""
                type="date"
            />
            <div className='flex justify-end mt-6'>
                <button
                    type='button'
                    className='flex items-center gap-1.5 text-xs md:text-sm font-medium text-white whitespace-nowrap bg-blue-700 border border-blue-900 rounded-lg px-4 py-2 cursor-pointer hover:bg-blue-800'
                    onClick={() => onAddExpense(income)}
                >
                    Add Expense
                </button>
            </div>
        </div>
    )
}

export default AddExpenseForm