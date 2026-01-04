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
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-blue-100 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-blue-800">Users</h1>
          <p className="text-blue-600 mt-1">List of all registered users</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl border border-blue-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-linear-to-r from-blue-600 to-blue-700">
                <tr>
                  <th className="px-6 py-2 text-left text-sm font-semibold text-white">
                    First Name
                  </th>
                  <th className="px-6 py-2 text-left text-sm font-semibold text-white">
                    Last Name
                  </th>
                  <th className="px-6 py-2 text-left text-sm font-semibold text-white">
                    Email
                  </th>
                  <th className="px-6 py-2 text-left text-sm font-semibold text-white">
                    Gender
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-blue-50">
                {users.map((user, index) => (
                  <tr
                    key={user.id}
                    className={`transition-all hover:bg-blue-50 ${
                      index % 2 === 0 ? "bg-white" : "bg-blue-50/30"
                    }`}
                  >
                    <td className="px-6 py-2 font-medium text-gray-900">
                      {user.firstName}
                    </td>
                    <td className="px-6 py-2 text-gray-700">{user.lastName}</td>
                    <td className="px-6 py-2 text-blue-600 font-medium">
                      {user.email}
                    </td>
                    <td className="px-6 py-2">
                      <span
                        className={`inline-flex items-center justify-center px-4 py-1 rounded-full text-xs font-semibold tracking-wide ${
                          user.gender === "male"
                            ? "bg-blue-100 text-blue-700"
                            : "bg-pink-100 text-pink-700"
                        }`}
                      >
                        {user.gender.charAt(0).toUpperCase() +
                          user.gender.slice(1)}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
