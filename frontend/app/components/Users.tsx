import { useEffect, useState } from "react";
import type { UserType } from "~/types/UserType";
import { fetchAllUsers } from "~/api/userApi";

const Users = () => {
  const [users, setUsers] = useState<UserType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUsers = async () => {
      const allUsers = await fetchAllUsers();
      setUsers(Array.isArray(allUsers) ? allUsers : []);
      setLoading(false);
    };

    loadUsers();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading users...</p>
      </div>
    );
  }

  if (!users.length) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>No users found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user) => (
          <div
            key={user._id}
            className="bg-white rounded-xl shadow p-6"
          >
            <h2 className="text-lg font-semibold">
              {user.firstName} {user.lastName}
            </h2>

            <p className="text-sm text-gray-600">{user.email}</p>

            <span
              className={`inline-block mt-3 px-3 py-1 text-xs font-semibold rounded-full ${
                user.gender.toLowerCase() === "male"
                  ? "bg-blue-100 text-blue-700"
                  : "bg-pink-100 text-pink-700"
              }`}
            >
              {user.gender}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
