import React, { useContext, useState } from 'react'
import AuthLayout from '../../components/layouts/AuthLayout'
import { Link, useNavigate } from 'react-router-dom';
import Input from '../../components/Inputs/Input';
import { validateEmail } from '../../utils/helper';
import axiosInstance from '../../utils/axiosInstance';
import { API_PATHS } from '../../utils/apiPaths';
import { UserContext } from '../../context/UserContext';

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const { updateUser } = useContext(UserContext);

    const navigate = useNavigate();

    // Handle Login Form Submit
    const handleLogin = async (e) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            setError("Please enter a valid email address.");
            return;
        }

        if (!password) {
            setError("Please enter your password.");
            return;
        }

        setError("");
        setLoading(true);

        // Login API Call
        try {
            const response = await axiosInstance.post(API_PATHS.AUTH.LOGIN, {
                email,
                password
            });
            const { token, user } = response.data;

            if (token) {
                localStorage.setItem("token", token);
                updateUser(user);
                navigate("/dashboard");
            }
        } catch (error) {
            if (error.response && error.response.data.message) {
                setError(error.response.data.message);
            } else {
                setError("Something went wrong. Please try again.");
            }
        } finally {
            setLoading(false);
        }
    }


    return (
        <AuthLayout>
            <div className='flex justify-center items-center md:h-full'>


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
                        {/* <button type='submit' className='w-full text-sm font-medium text-white bg-blue-950 shadow-lg shadow-sky-600/5 p-[10px] rounded-md my-1 hover:bg-blue-950/85 cursor-pointer'>Login</button> */}
                        <button disabled={loading} type='submit' className='w-full text-sm font-medium text-white bg-blue-950 shadow-lg shadow-sky-600/5 p-[10px] rounded-md my-1 hover:bg-blue-950/85 disabled:opacity-80 cursor-pointer'>{loading ? 'Loading...' : 'Login'}</button>

                        <p className='text-[13px] text-slate-800 mt-3'>
                            Don't have an account? {" "}
                            <Link className='font-medium text-blue-600 hover:underline' to="/signup">Sign Up</Link>
                        </p>
                    </form>
                </div>
            </div>
        </AuthLayout>
    )
}

export default Login;