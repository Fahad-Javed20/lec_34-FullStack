import type { UserType } from "~/types/UserType";
import { Pencil, Trash2 } from "lucide-react";

interface UsersProps {
  users: UserType[];
  onDeleteUser: (userId: string) => void;
  onEditUser: (user: UserType) => void;
}

const Users = ({ users, onDeleteUser, onEditUser }: UsersProps) => {
  const getInitials = (firstName?: string, lastName?: string) => {
    const first = firstName?.charAt(0)?.toUpperCase() || "";
    const last = lastName?.charAt(0)?.toUpperCase() || "";
    return first + last || "??";
  };

  if (!users.length) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-gray-50 to-gray-100">
        <p className="text-gray-500 text-lg">No users found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Our Users</h1>
          <p className="text-gray-600">
            {users.length} {users.length === 1 ? "user" : "users"} registered
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {users.map((user) => (
            <div
              key={user._id}
              className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              <div
                className={`h-32 relative ${
                  user.gender?.toLowerCase() === "male"
                    ? "bg-linear-to-br from-blue-400 to-blue-600"
                    : user.gender?.toLowerCase() === "female"
                      ? "bg-linear-to-br from-pink-400 to-pink-600"
                      : "bg-linear-to-br from-gray-400 to-gray-600"
                }`}
              >
                <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <button
                    onClick={() => onEditUser(user)}
                    className="w-8 h-8 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-200 hover:scale-110"
                    aria-label="Edit user"
                  >
                    <Pencil className="w-4 h-4 text-gray-700" />
                  </button>

                  <button
                    onClick={() => onDeleteUser(user._id!)}
                    className="w-8 h-8 rounded-full bg-white/90 hover:bg-red-50 flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-200 hover:scale-110"
                    aria-label="Delete user"
                  >
                    <Trash2 className="w-4 h-4 text-red-600" />
                  </button>
                </div>

                <div className="h-full flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center border-4 border-white/50 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl font-bold text-white">
                      {getInitials(user.firstName, user.lastName)}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-1">
                  {user.firstName || "Unknown"} {user.lastName || ""}
                </h2>

                <p className="text-sm text-gray-500 mb-4 truncate">
                  {user.email || "No email"}
                </p>

                <div className="flex items-center justify-between">
                  <span
                    className={`px-4 py-1.5 text-xs font-semibold rounded-full ${
                      user.gender?.toLowerCase() === "male"
                        ? "bg-blue-50 text-blue-700 border border-blue-200"
                        : user.gender?.toLowerCase() === "female"
                          ? "bg-pink-50 text-pink-700 border border-pink-200"
                          : "bg-gray-50 text-gray-700 border border-gray-200"
                    }`}
                  >
                    {user.gender || "Not specified"}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Users;