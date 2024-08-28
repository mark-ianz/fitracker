import { useEffect, useState } from "react";
import TestSkeleton from "../components/Skeletons/TestSkeleton";

const Test = () => {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);
  console.log(users);
  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      const dummyInterval = setTimeout(async () => {
        try {
          const response = await fetch("https://dummyjson.com/users");
          const result = await response.json();
          setUsers(result.users);
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      }, 1000);

      return () => clearInterval(dummyInterval);
    };

    fetchUsers();
  }, []);

  return (
    <>
      <main className="p-40 w-full">
        <h1 className="text-lg">Skeleton Lesson!</h1>
        {loading && <TestSkeleton size={20}/>}
        {users && (
          <ul className="grid gap-4 grid-cols-5">
            {users.map((user) => (
              <li
                key={user.id}
                className="border border-solid border-gray-300 flex flex-col p-4 min-h-56 rounded-md"
              >
                <p>Name: {user.firstName + " " + user.lastName}</p>
                <p>Email: {user.email}</p>
                <p>Age: {user.age}</p>
                <p>{user.university}</p>
              </li>
            ))}
          </ul>
        )}
      </main>
    </>
  );
};

export default Test;
