import { SkeletonTheme } from "react-loading-skeleton";
import { ModalProvider } from "./ModalProvider";
import Modal from "../../components/Modal";
import { SidebarProvider } from "./SidebarContext";
import { AuthContextProvider } from "./AuthContext";
import { WorkoutContextProvider } from "./WorkoutContext";
import { ExercisesFormContextProvider } from "./createSession/ExercisesFormContext";
import { WorkoutSessionFormProvider } from "./createSession/WorkoutSessionFormContext";

const Providers = ({ children }) => {
  return (
    <>
      <WorkoutSessionFormProvider>
        <ExercisesFormContextProvider>
          <WorkoutContextProvider>
            <SidebarProvider>
              <AuthContextProvider>
                <ModalProvider>
                  <SkeletonTheme baseColor="#E4E7ED" highlightColor="#F6F8FA">
                    <>
                      {children}
                      <Modal />
                    </>
                  </SkeletonTheme>
                </ModalProvider>
              </AuthContextProvider>
            </SidebarProvider>
          </WorkoutContextProvider>
        </ExercisesFormContextProvider>
      </WorkoutSessionFormProvider>
    </>
  );
};

export default Providers;
