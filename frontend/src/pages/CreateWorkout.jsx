import ExercisesPerfomedForm from "../components/WorkoutsFeed/Create/ExercisesPerfomedForm";
import WorkoutSessionForm from "../components/WorkoutsFeed/Create/WokroutSessionForm";

const CreateWorkout = () => {
  return (
    <main className="flex flex-row justify-center gap-6 max-sm:flex-col max-sm:gap-10">
      <section className="w-1/2 max-w-sm max-sm:w-full max-sm:max-w-none">
        <WorkoutSessionForm />
      </section>
      <section className="w-1/2 max-w-sm max-sm:w-full max-sm:max-w-none">
        <ExercisesPerfomedForm />
      </section>
    </main>
  );

  <template>
    <table className="w-full mt-4 border-collapse">
      <thead>
        <tr className="border-b border-solid border-[#9d9d9d]">
          <th className="p-2 text-center">Exercise Name</th>
          <th className="p-2 text-center">Sets</th>
          <th className="p-2 text-center">Reps</th>
          <th className="p-2 text-center">Weight</th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-b border-solid border-[#9d9d9d]">
          <td className="p-2 text-center">Squat</td>
          <td className="p-2 text-center">3</td>
          <td className="p-2 text-center">10</td>
          <td className="p-2 text-center">135</td>
        </tr>
        <tr className="border-b border-solid border-[#9d9d9d]">
          <td className="p-2 text-center">Deadlift</td>
          <td className="p-2 text-center">2</td>
          <td className="p-2 text-center">8</td>
          <td className="p-2 text-center">200</td>
        </tr>
      </tbody>
    </table>
    ;
  </template>;

  // Chat GPT Design Suggestion
  /* Suggestions for the Rest:
  Exercise Form (Second Image):

  Consistency: Keep the design consistent with the log workout session form.
  Responsive Design: Ensure that the form is responsive, stacking inputs on smaller screens.
  Visual Feedback: Add subtle hover effects to the input fields for better user interaction.
  Saved Exercises (Third Image):

  Card Layout: Consider using a card layout for each saved exercise with rounded corners and a subtle shadow to differentiate them from the background.
  Editable Fields: Make the sets, reps, and weight fields editable directly from this view, and add an edit icon or button for clarity.
  Let me know if you need any further assistance! */
  return (
    <main className="flex flex-col md:flex-row w-full max-w-6xl p-8 bg-white shadow-md mt-10">
      <section className="flex-1 mr-4">
        <h2 className="text-xl font-semibold mb-6">Log workout session</h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Session Name"
            className="w-full p-3 border border-gray-300 rounded-md"
          />
          <textarea
            placeholder="Description"
            className="w-full p-3 border border-gray-300 rounded-md h-24 resize-none"
          ></textarea>
          <input
            type="text"
            placeholder="Tags"
            className="w-full p-3 border border-gray-300 rounded-md"
          />
          <input
            type="text"
            placeholder="Location"
            className="w-full p-3 border border-gray-300 rounded-md"
          />
          <input
            type="datetime-local"
            className="w-full p-3 border border-gray-300 rounded-md"
          />
        </form>
      </section>

      <section className="flex-1 mt-8 md:mt-0 md:ml-4">
        <h2 className="text-xl font-semibold mb-6">Exercises Performed</h2>
        <div className="flex items-center justify-center w-full h-48 border-2 border-dashed border-pink-500 rounded-md cursor-pointer">
          <div className="text-center text-pink-500">
            <div className="w-10 h-10 mx-auto mb-2 rounded-full border-2 border-pink-500 flex items-center justify-center">
              <span className="text-2xl">+</span>
            </div>
            <span className="block font-semibold">Add Exercises</span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CreateWorkout;
