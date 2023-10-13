import ListItems from "./components/ListItems";

function App() {
  const items = [
    "dog",
    "cat",
    "chicken",
    "cow",
    "sheep",
    "horse",
  ];
  const components = items.map((element, index) => (
    <ListItems key={index} element={element} />
  ));

  return (
    <ul className="text-2xl mx-40 my-10 p-10 bg-green-900  text-white rounded-lg list-disc">
      {components}
    </ul>
  );
}

export default App;
