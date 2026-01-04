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
      <div className="flex justify-center items-center h-64">
        <p className="text-gray-500 text-lg">Loading users...</p>
      </div>
    );
  }

  if (!users.length) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-gray-500 text-lg">No users found.</p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="overflow-x-auto rounded-xl shadow-md border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold">First Name</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Last Name</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Email</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Gender</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {users.map((user) => (
              <tr
                key={user.id}
                className="hover:bg-blue-50 transition-colors duration-200"
              >
                <td className="px-6 py-2 font-medium text-gray-700">{user.firstName}</td>
                <td className="px-6 py-2 text-gray-700">{user.lastName}</td>
                <td className="px-6 py-2 text-blue-600 underline">{user.email}</td>
                <td className="px-6 py-2">
                  <span
                    className={`inline-block w-20 text-center px-2 py-1 rounded-full text-sm font-semibold ${
                      user.gender === "male"
                        ? "bg-blue-200 text-blue-800"
                        : "bg-pink-200 text-pink-800"
                    }`}
                  >
                    {user.gender.charAt(0).toUpperCase() + user.gender.slice(1)}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
