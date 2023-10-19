import ListGroup from "./componenets/ListGroup";

function App() {
  let items = [
    'New York',
    'San Francisco',
    'Tokyo',
    'London',
    "Paris"
]


const handlSelectItem = (item:string) => {
  console.log(item)
}

  return <div><ListGroup items={items} heading="Cities" onSelectItem={handlSelectItem}/></div>;
}

export default App;