import { useNavigate } from "react-router-dom";
import workoutsAPI from "../api/workouts";
import useCreateSessionContext from "./useCreateSessionContext";
import useModalContext from "./useModalContext";
import useAuthContext from "./useAuthContext";

const useUploadSession = () => {
  const { token } = useAuthContext();
  const { dispatch } = useCreateSessionContext();
  const { closeModal } = useModalContext();
  const navigate = useNavigate();

  const uploadSession = async (workout) => {
    try {
      const { data } = await workoutsAPI.post("/new", workout, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch({ type: "RESET_FORM" });
      dispatch({ type: "RESET_EXERCISES" });
      navigate(`/workout/${data._id}`);
      closeModal();
      return data;
    } catch (error) {
      if (error.response) {
        dispatch({
          type: "SET_ERROR",
          payload: { error: error.response.data.error },
        });
      } else {
        dispatch({
          type: "SET_ERROR",
          payload: { error: error.message },
        });
      }
    }
  };

  return uploadSession;
};

export default useUploadSession;
