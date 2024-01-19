import Button from "./components/Button";
function App() {
  const handleClick = (id) => {
    alert(`You Just Clicked Button ${id}`);
  };
  const createComponents = (n) => {
    const array = [];
    for (let i = 0; i < n; i++) {
      array.push(<Button id={i + 1} clickHandle={handleClick} />);
    }
    return array;
  };
return (
    <div className="flex gap-3 mx-5 sm:gap-10 sm:mx-[30%] my-[20%]">
      {createComponents(3)}
    </div>
  );
}

export default App;
