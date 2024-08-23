import { features } from "../utils/constants";

const Features = () => {
  return (
    <main className="px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
        Features
      </h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature) => (
          <li className="bg-white p-6 rounded-md shadow-md" key={feature.id}>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
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
