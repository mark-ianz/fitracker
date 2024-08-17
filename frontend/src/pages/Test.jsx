import { useEffect } from "react";
import useAuthContext from "../utils/hooks/useAuthContext";
import axios from "axios";
import usersAPI from "../utils/api/users";

const Test = () => {
  const { token } = useAuthContext();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await usersAPI.post("/login");
        console.log("Using Axios:", data);
      } catch (error) {
        // If the error came from the server and is in the response, the error.response will be available
        if (error.response) {
          console.log("Login Error:", error.response.data.error);
        } else {
          console.log("Axios Error:",error);
        }
      }
    };
    fetchData();
  }, []);


  return <div>Hello!</div>;
};

export default Test;
