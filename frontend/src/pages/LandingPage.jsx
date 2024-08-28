// Dependencies

// Components
import Button from "../components/Button";
import Footer from "../components/Footer";
import Navbar from "../components/Nav/Navbar";
import { features } from "../utils/constants";

// Hooks
import useModalContext from "../utils/hooks/useModalContext";
import Signup from "../components/Forms/SignupForm";

const LandingPage = () => {
  const { openModal } = useModalContext();
  return (
    <div className="wrapper flex flex-col pb-20">
      <main className="w-full flex flex-col">
        <section className="bg-image-wrapper bg-landingPage bg-no-repeat bg-cover bg-center">
          <Navbar isLandingPage={true} />
          <div className="h-full p-10 pb-36">
            <p className="text-7xl font-bold text-white max-w-[60%] max-lg:max-w-[100%] max-sm:max-w-max max-sm:text-5xl">
              Track workout session for{" "}
              <span className="text-red-400">progressive overload</span> method
            </p>
            <p className="mt-10 text-lg text-white max-w-[55%] max-lg:max-w-[100%]">
              Elevate your fitness journey by precisely tracking each workout
              session. Our platform empowers you to progressively overload and
              reach new heights in strength and performance, ensuring consistent
              growth with every workout.
            </p>
            <Button
              className="mt-[5vh] w-fit"
              buttonType="primary"
              onClick={() => {
                openModal(<Signup />);
              }}
            >
              Get Started
            </Button>
          </div>
        </section>

        <section className="px-4 sm:px-6 lg:px-8 mt-10">
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <li
                className="bg-white p-6 rounded-md shadow-md flex flex-col items-center gap-4"
                key={feature.id}
              >
                <img
                  src={feature.image}
                  alt={feature.title + "image"}
                  className={`w-64 aspect-square
              ${feature.filter ? "filter-secondary" : ""}`}
                />
                <h2 className="text-2xl font-semibold text-red-400 mb-4 text-center">
                  {feature.title}
                </h2>
                <p className="text-gray-600">{feature.description}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-10">
          <div className="p-8 rounded-lg shadow-sm bg-[#f4f4f4]">
            <h2 className="text-2xl font-semibold text-red-400 mb-2">
              Our Mission
            </h2>
            <p className="text-gray-600 mb-6">
              At FITRACKER, we believe that keeping track of your workouts
              shouldn’t be a hassle. Whether you’re just starting out or are a
              seasoned athlete, our goal is to provide a seamless and
              user-friendly platform where you can log and manage all your
              workout sessions in one place.
            </p>
            <h2 className="text-2xl font-semibold text-red-400 mb-2">
              Why FITRACKER?
            </h2>
            <p className="text-gray-600 mb-6">
              We understand that each workout is a step towards your fitness
              goals. That’s why FITRACKER offers a comprehensive solution for
              logging your sessions, tracking your progress, and staying on top
              of your routines.
            </p>
            <h2 className="text-2xl font-semibold text-red-400 mb-2">
              Our Story
            </h2>
            <p className="text-gray-600">
              FITRACKER was created out of a passion for fitness and a desire to
              make tracking workouts easier. As fitness enthusiasts, we often
              found ourselves struggling to keep track of our progress and
              routines. This led to the development of FITRACKER—a tool that not
              only simplifies workout tracking but also empowers users to
              achieve their fitness goals.
            </p>
          </div>
        </section>

        <section className="px-4 sm:px-6 lg:px-8 mt-10">
          <div className="bg-white p-8 rounded-lg shadow-md flex justify-center">
            <div className="max-w-screen-xsm">
              <div className="text-center flex flex-col gap-4">
                <p className="font-semibold text-xl text-red-400">
                  Start your fitness history today
                </p>
                <p>
                  Track, analyze, and optimize your workouts with ease. Join our
                  community and transform your workout routine. Get started now!
                </p>
              </div>
              <div className="flex justify-center mt-4">
                <Button
                  className="w-fit"
                  buttonType="primary"
                  onClick={() => {
                    openModal(<Signup />);
                  }}
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
