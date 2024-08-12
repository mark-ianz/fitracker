// Dependencies

// Components
import Button from "../components/Button";
import SignupForm from "../components/Forms/SignupForm";

// Hooks
import useModalContext from "../utils/hooks/useModalContext";

const LandingPage = () => {
  const { openModal } = useModalContext();
  return (
    <main className="mt-12">
      <p className="text-7xl font-bold max-w-[60%] max-lg:max-w-[100%] max-sm:max-w-max max-sm:text-5xl ">
        Track workout session for
        <span className="text-red-400"> progressive overload</span> method
      </p>
      <Button
        className="mt-[5vh]"
        buttonType="primary"
        onClick={() => {
          openModal(<SignupForm />);
        }}
      >
        Get Started
      </Button>
    </main>
  );
};

export default LandingPage;