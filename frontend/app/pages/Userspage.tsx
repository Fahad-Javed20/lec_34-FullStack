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
    try {
      const response = await fetch(
        `http://localhost:3000/api/users/${userId}`,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        setUsers((prev) => prev.filter((user) => user._id !== userId));
        alert("User deleted successfully!");
      } else {
        const errorData = await response.json();
        console.error("Delete error:", errorData);
        alert("Failed to delete user");
      }
    } catch (error) {
      console.error("Error deleting user:", error);
      alert("Error deleting user");
    }
  };

  const handleUpdateUser = async (updatedUser: UserType) => {
    try {
      console.log("Updating user with ID:", updatedUser._id);
      console.log("Update data:", updatedUser);

      // Remove password if it's empty - create new object without password
      const { password, ...userWithoutPassword } = updatedUser;
      const dataToSend = (!password || password === "") 
        ? userWithoutPassword 
        : updatedUser;

      console.log("Data being sent to API:", dataToSend);

      const response = await fetch(
        `http://localhost:3000/api/users/${updatedUser._id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(dataToSend),
        }
      );

      console.log("Response status:", response.status);
      console.log("Response ok:", response.ok);

      if (response.ok) {
        const updated = await response.json();
        console.log("Updated user from API:", updated);

        setUsers((prev) =>
          prev.map((user) => (user._id === updatedUser._id ? updated : user))
        );
        setEditingUser(null);
        alert("User updated successfully!");
      } else {
        const errorData = await response.json();
        console.error("Update failed with error:", errorData);
        alert(`Failed to update user: ${errorData.message || "Unknown error"}`);
      }
    } catch (error) {
      console.error("Error updating user:", error);
      alert(`Error updating user: ${error}`);
    }
  };

  const handleEditUser = (user: UserType) => {
    console.log("Editing user:", user);
    setEditingUser(user);
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