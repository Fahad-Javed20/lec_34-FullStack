// userApi.ts
export const fetchAllUsers = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/users");

    if (!response.ok) {
      throw new Error(`Failed to fetch users: ${response.status}`);
    }

    const data = await response.json();
    console.log("Raw API response:", data);

    if (Array.isArray(data)) {
      return data;
    }
    if (data.users && Array.isArray(data.users)) {
      return data.users;
    }
    if (data.data && Array.isArray(data.data)) {
      return data.data;
    }

    console.warn("Unexpected API response structure:", data);
    return [];
  } catch (error) {
    console.error("fetchAllUsers error:", error);
    return [];
  }
};
