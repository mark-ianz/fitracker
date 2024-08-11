const Spinner = () => {
  return (
    <span className="flex flex-col items-center justify-center">
      <img
        src="/spinner.gif"
        alt="Spinner Loading"
        className="w-12 h-12 border-solid"
      />
    </span>
  );
};

export default Spinner;
