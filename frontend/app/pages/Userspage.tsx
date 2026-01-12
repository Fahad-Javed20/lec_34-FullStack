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

 

  return (
    <div>
      <Header />
      <Navbar />
      <UserForm onAddUser={handleAddUser} />
      <Users users={users}  />
      <Footer />
    </div>
  );
};

export default Userspage;
