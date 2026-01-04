import { useEffect, useState } from "react";
import type { UserType } from "~/types/UserType";
import { fetchAllUsers } from "~/api/userApi";

const Users = () => {
  const [users, setUsers] = useState<UserType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadUsers = async () => {
      const allUsers = await fetchAllUsers();
      setUsers(allUsers);
      setLoading(false);
    };
    loadUsers();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-50 to-blue-100">
        <p className="text-blue-700 text-lg font-semibold animate-pulse">
          Loading users...
        </p>
      </div>
    );
  }

  if (!users.length) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-50 to-blue-100">
        <p className="text-blue-700 text-lg font-semibold">No users found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-blue-100 p-6 md:p-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-blue-800 tracking-tight">
            Users
          </h1>
          <p className="text-blue-600 mt-2">
            List of all registered users
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {users.map((user) => (
            <div
              key={user.id}
              className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition-all border border-blue-50"
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-900">
                  {user.firstName} {user.lastName}
                </h2>
                <span
                  className={`inline-flex items-center justify-center w-20 h-6 rounded-full text-xs font-semibold tracking-wide ${
                    user.gender === "male"
                      ? "bg-blue-100 text-blue-700"
                      : "bg-pink-100 text-pink-700"
                  }`}
                >
                  {user.gender.charAt(0).toUpperCase() + user.gender.slice(1)}
                </span>
              </div>
              <p className="text-blue-600 font-medium truncate hover:underline cursor-pointer">
                {user.email}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Users;
