import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getProfile, changePassword, logout } from "../api/auth"; // Add these functions in `api/auth.ts`

const ProfilePage: React.FC = () => {
    const [profile, setProfile] = useState<{ username: string; email: string } | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [newPassword, setNewPassword] = useState<string>("");
    const [oldPassword, setOldPassword] = useState<string>("");
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await getProfile();
                if (response.profile) {
                    setProfile(response.profile);
                } else {
                    setError("Could not fetch profile");
                }
            } catch {
                setError("You need to log in first.");
                navigate("/login");
            }
        };

        fetchProfile();
    }, [navigate]);

    const handlePasswordChange = async () => {
        if (!oldPassword || !newPassword) {
            setError("Please fill both fields.");
            return;
        }

        try {
            const response = await changePassword(oldPassword, newPassword);
            alert(response.message);
            setOldPassword("");
            setNewPassword("");
        } catch {
            setError("Failed to change password.");
        }
    };

    const handleLogout = async () => {
        try {
            const response = await logout();
            alert(response.message);
            navigate("/login");
        } catch {
            setError("Failed to log out.");
        }
    };

    if (error) {
        return <div className="text-red-500 text-center">{error}</div>;
    }

    if (!profile) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-8">
                    <h2 className="text-2xl font-bold text-center mb-6">User Profile</h2>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Username</label>
                            <p className="mt-1">{profile.username}</p>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email</label>
                            <p className="mt-1">{profile.email}</p>
                        </div>
                    </div>
                    <div className="mt-6">
                        <h3 className="text-lg font-semibold mb-2">Change Password</h3>
                        <div>
                            <input
                                type="password"
                                className="block w-full px-3 py-2 border border-gray-300 rounded-md"
                                placeholder="Old Password"
                                value={oldPassword}
                                onChange={(e) => setOldPassword(e.target.value)}
                            />
                        </div>
                        <div className="mt-2">
                            <input
                                type="password"
                                className="block w-full px-3 py-2 border border-gray-300 rounded-md"
                                placeholder="New Password"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                            />
                        </div>
                        <button
                            className="w-full mt-4 py-3 px-4 border border-transparent rounded-md shadow-sm text-white bg-black hover:bg-gray-800"
                            onClick={handlePasswordChange}
                        >
                            Change Password
                        </button>
                    </div>
                    <div className="mt-6">
                        <button
                            className="w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700"
                            onClick={handleLogout}
                        >
                            Log Out
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
