import List from "./components/List";

function App() {
  const arrayOfItems = [
    "dog  ",
    "cat  ",
    "chicken  ",
    "cow  ",
    "sheep  ",
    "horse  ",
  ];
  const arrayOfComponents = arrayOfItems.map((element, index) => (
    <List key={index} element={element} />
  ));

  return (
    <ul className="text-2xl mx-40 my-10 p-10 bg-green-900  text-white rounded-lg list-disc">
      {arrayOfComponents}
    </ul>
  );
}

export default App;
