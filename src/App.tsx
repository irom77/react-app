import ListGroup from "./componenets/ListGroup";
import { BsFillCalendarFill } from 'react-icons/bs'

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

  return <div>
    <BsFillCalendarFill color="red" size="40"/>
    <ListGroup items={items} heading="Cities" onSelectItem={handlSelectItem}/>
    </div>;
}

export default App;