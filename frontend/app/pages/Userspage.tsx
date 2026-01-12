import { useEffect, useState } from "react";
import { fetchAllUsers } from "~/api/userApi";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import Navbar from "~/components/Navbar";
import UserForm from "~/components/UserForm";
import Users from "~/components/Users";
import type { UserType } from "~/types/UserType";

const Userspage = () => {
  const [users, setUsers] = useState<UserType[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingUser, setEditingUser] = useState<UserType | null>(null);

  useEffect(() => {
    const loadUsers = async () => {
      const allUsers = await fetchAllUsers();
      setUsers(allUsers);
      setLoading(false);
    };
    loadUsers();
  }, []);

  const handleAddUser = (newUser: UserType) => {
    setUsers((prev) => [...prev, newUser]);
  };

  const handleDeleteUser = async (userId: string) => {
    const response = await fetch(`http://localhost:3000/api/users/${userId}`, {
      method: "DELETE",
    });
    if (response.ok) {
      setUsers((prev) => prev.filter((user) => user._id !== userId));
    }
  };

  const handleUpdateUser = async (updatedUser: UserType) => {
    const response = await fetch(`http://localhost:3000/api/users/${updatedUser._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedUser),
    });
    if (response.ok) {
      const updated = await response.json();
      setUsers((prev) => prev.map((user) => (user._id === updatedUser._id ? updated : user)));
      setEditingUser(null); // Clear editing state
    }
  };

  const handleEditUser = (user: UserType) => {
    setEditingUser(user);
    // Scroll to form
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCancelEdit = () => {
    setEditingUser(null);
  };

  return (
    <div>
      <Header />
      <Navbar />
      <UserForm 
        onAddUser={handleAddUser} 
        editingUser={editingUser}
        onUpdateUser={handleUpdateUser}
        onCancelEdit={handleCancelEdit}
      />
      <Users 
        users={users} 
        onDeleteUser={handleDeleteUser} 
        onEditUser={handleEditUser}
      />
      <Footer />
    </div>
  );
};

export default Userspage;