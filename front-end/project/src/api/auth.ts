const API_URL = "http://localhost:3000/api/auth";

export const registerUser = async (
  username: string,
  email: string,
  password: string
) => {
  const response = await fetch(`${API_URL}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, email, password }),
    credentials: "include",
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Registration failed");
  }

  return response.json();
};

export const loginUser = async (email: string, password: string) => {
    try {
        const response = await fetch(`${API_URL}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({ email, password })
        });
        
        const data = await response.json();
        console.log("Response:", data); // Add this for debugging
        

        return data;
    } catch (error) {
        console.error("Login error:", error);
    }
};

export const getProfile = async () => {
    try {
        const email = localStorage.getItem('auth');
        if (!email) {
            throw new Error('No user data found');
        }

        const response = await fetch(`${API_URL}/profile`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${email}`
            }
        });

        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.message || "Failed to fetch profile");
        }

        return data;
    } catch (error) {
        console.error("Error fetching profile:", error);
        throw error;
    }
};

// Change Password
export const changePassword = async (
  oldPassword: string,
  newPassword: string
) => {
  const response = await fetch(`${API_URL}/change-password`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ oldPassword, newPassword }),
    credentials: "include",
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Failed to change password");
  }

  return response.json();
};

// Logout
export const logout = async () => {
  const response = await fetch(`${API_URL}/logout`, {
    method: "POST",
    credentials: "include",
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Failed to log out");
  }

  return response.json();
};
