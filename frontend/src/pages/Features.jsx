import { features } from "../utils/constants";

const Features = () => {
  return (
    <main className="px-4 sm:px-6 lg:px-8" id="features">
      {/* <h1 className="text-4xl font-bold mb-8 text-center text-red-400">
        Features
      </h1> */}
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature) => (
          <li className="bg-white p-6 rounded-md shadow-md flex flex-col items-center gap-4" key={feature.id}>
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
    </main>
  );
};

export default Features;
