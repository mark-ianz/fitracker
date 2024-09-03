import { SkeletonTheme } from "react-loading-skeleton";
import { ModalProvider } from "./ModalProvider";
import Modal from "../../components/Modal";
import { SidebarProvider } from "./SidebarContext";
import { AuthContextProvider } from "./AuthContext";
import { WorkoutContextProvider } from "./WorkoutContext";
import { CreateSplitContextProvider } from "./CreateSplitContext";
import { CreateSessionContextProvider } from "./CreateSessionContext";

const Providers = ({ children }) => {
  return (
    <>
      <CreateSessionContextProvider>
        <AuthContextProvider>
          <CreateSplitContextProvider>
            <WorkoutContextProvider>
              <SidebarProvider>
                <ModalProvider>
                  <SkeletonTheme baseColor="#E0E0E0" highlightColor="#F5F5F5">
                    <>
                      {children}
                      <Modal />
                    </>
                  </SkeletonTheme>
                </ModalProvider>
              </SidebarProvider>
            </WorkoutContextProvider>
          </CreateSplitContextProvider>
        </AuthContextProvider>
      </CreateSessionContextProvider>
    </>
  );
};

export default Providers;
