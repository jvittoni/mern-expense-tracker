import React, { useState } from 'react'
import AuthLayout from '../../components/layouts/AuthLayout'
import { Link, useNavigate } from 'react-router-dom';
import Input from '../../components/Inputs/Input';
// import { validateEmail } from '../../utils/helper';
// import ProfilePhotoSelector from '../../components/Inputs/ProfilePhotoSelector';

const SignUp = () => {

    const [profilePic, setProfilePic] = useState(null);
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState(null);

    const navigate = useNavigate();

    // Handle Sign Up Form Submit 
    const handleSignUp = async (e) => {
        e.preventDefault();

        if (!fullName) {
            setError("Please enter your full name.");
            return;
        }

        if (!validateEmail(email)) {
            setError("Please enter a valid email address.");
            return;
        }

        if (!password) {
            setError("Please enter your password.");
            return;
        }

        setError("");

        // Signup API Call
    }

    return (
        <AuthLayout>
            <div className='flex justify-center items-center md:h-full'>
                <div className='lg:w-[70%] sm:w-[80%] max-w-lg h-3/4 md:h-full flex flex-col justify-center'>
                    <h3 className='text-xl font-semibold text-black mt-10 md:mt-0'>Create an Account</h3>
                    <p className='text-xs text-slate-700 mt-[5px] mb-6'>Start using Expense Tracker today!</p>

                    {/* <ProfilePhotoSelector image={profilePic} setImage={setProfilePic}/> */}
                    <form onSubmit={handleSignUp}>

                        <div>
                            <Input
                                value={fullName}
                                onChange={({ target }) => setFullName(target.value)}
                                label="Full Name"
                                placeholder=""
                                type="text"
                            />
                            <Input
                                value={email}
                                onChange={({ target }) => setEmail(target.value)}
                                label="Email Address"
                                placeholder=""
                                type="text"
                            />
                            <Input
                                value={password}
                                onChange={({ target }) => setPassword(target.value)}
                                label="Password"
                                placeholder=""
                                type="password"
                            />
                        </div>
                        {error && <p className='text-red-500 text-xs pb-2.5'>{error}</p>}
                        <button type='submit' className='w-full text-sm font-medium text-white bg-blue-950 shadow-lg shadow-sky-600/5 p-[10px] rounded-md my-1 hover:bg-blue-950/85 cursor-pointer'>Sign Up</button>

                        <p className='text-[13px] text-slate-800 mt-3'>
                            Have an account? {" "}
                            <Link className='font-medium text-blue-600 hover:underline' to="/login">Sign In</Link>
                        </p>

                    </form>


                </div>
            </div>




        </AuthLayout>
    )
}

{/* <div className='flex justify-center items-center md:h-full'>


<div className='lg:w-[70%] sm:w-[80%] max-w-lg h-3/4 md:h-full flex flex-col justify-center'>
    <h3 className='text-xl font-semibold text-black mt-10 md:mt-0'>Welcome Back!</h3>
    <p className='text-xs text-slate-700 mt-[5px] mb-6'>Please enter your credentials to log in.</p>

    <form onSubmit={handleLogin}>
        <Input
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            label="Email Address"
            placeholder=""
            type="text"
        />
        <Input
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            label="Password"
            placeholder=""
            type="password"
        />

        {error && <p className='text-red-500 text-xs pb-2.5'>{error}</p>}
        <button type='submit' className='w-full text-sm font-medium text-white bg-blue-950 shadow-lg shadow-sky-600/5 p-[10px] rounded-md my-1 hover:bg-blue-950/85 cursor-pointer'>Login</button>

        <p className='text-[13px] text-slate-800 mt-3'>
            Don't have an account? {" "}
            <Link className='font-medium text-blue-600 hover:underline' to="/signup">Sign Up</Link>
        </p>
    </form>
</div>
</div> */}

export default SignUp