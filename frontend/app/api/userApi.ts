export const fetchAllUsers = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/users");
    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }
    const data = await response.json();
    if (Array.isArray(data.users)) {
      return data.users;
    }
    return [];
  } catch (error) {
    console.error("fetchAllUsers error:", error);
    return [];
  }
};
