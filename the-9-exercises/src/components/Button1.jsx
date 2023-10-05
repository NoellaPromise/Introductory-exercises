const Button1 = ({ handleClick }) => {
  return (
    <div>
      <button
        onClick={handleClick}
        className="py-4 px-8 rounded-md shadow-md hover:shadow-lg font-bold bg-green-900 text-white"
      >
        Button
      </button>
    </div>
  );
};

export default Button1;
