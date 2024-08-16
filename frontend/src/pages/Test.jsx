import { useEffect } from "react";
import useAuthContext from "../utils/hooks/useAuthContext";
import axios from "axios";

const Test = () => {
  const { token } = useAuthContext();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await axios.post("http://localhost:8080/api/users/login");
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

  /* useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/splitss", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const result = await response.json();
        console.log("Using Fetch:", result);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []); */

  return <div>Hello!</div>;
};

export default Test;
