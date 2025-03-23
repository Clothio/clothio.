import React, { useEffect, useState } from "react";
import { registerUser, loginUser, getProfile } from "../api/auth";
import { useNavigate } from "react-router-dom";

const LoginPage: React.FC = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({
        username: "", // Fixed: changed from 'name' to 'username'
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [errors, setErrors] = useState<Record<string, string>>({});
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setErrors({});

        if (!isLogin && formData.password !== formData.confirmPassword) {
            setErrors({ confirmPassword: "Passwords do not match" });
            return;
        }

        try {
            let response;
            if (isLogin) {
                response = await loginUser(formData.email, formData.password);
            } else {
                response = await registerUser(formData.username, formData.email, formData.password);
            }

            if (response.message.includes("successful")) {
                // Set authentication cookie
                document.cookie = `auth=true; path=/; max-age=86400`; // Cookie valid for 1 day
                
                if (isLogin) {
                    navigate("/profile"); // Redirect to profile page
                } else {
                    alert("Registration successful! Please login.");
                    setIsLogin(true);
                }
            } else {
                setErrors({ general: response.message });
            }
        } catch (error) {
            console.error(error);
            setErrors({ general: "An error occurred. Please try again." });
        }
    };

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await getProfile();
                if (response.profile) {
                    navigate("/profile"); // Redirect if authenticated
                }
            } catch {
                console.log("User not logged in");
            }
        };

        checkAuth();
    }, [navigate]);

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
                <div className="flex">
                    <button
                        className={`flex-1 py-4 text-center font-medium ${
                            isLogin ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-700"
                        }`}
                        onClick={() => setIsLogin(true)}
                    >
                        Login
                    </button>
                    <button
                        className={`flex-1 py-4 text-center font-medium ${
                            !isLogin ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-700"
                        }`}
                        onClick={() => setIsLogin(false)}
                    >
                        Sign Up
                    </button>
                </div>

                <div className="p-8">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        {!isLogin && (
                            <div>
                                <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                                    Username
                                </label>
                                <input
                                    type="text"
                                    id="username"
                                    value={formData.username}
                                    onChange={handleChange}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                                    required
                                />
                            </div>
                        )}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                                required
                            />
                            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                value={formData.password}
                                onChange={handleChange}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                                required
                            />
                        </div>
                        {!isLogin && (
                            <div>
                                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                                    Confirm Password
                                </label>
                                <input
                                    type="password"
                                    id="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                                    required
                                />
                                {errors.confirmPassword && (
                                    <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
                                )}
                            </div>
                        )}
                        <button
                            type="submit"
                            className="w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-white bg-black hover:bg-gray-800"
                        >
                            {isLogin ? "Login" : "Sign Up"}
                        </button>
                        {errors.general && <p className="text-red-500 text-sm">{errors.general}</p>}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
