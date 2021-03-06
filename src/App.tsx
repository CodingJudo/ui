import "./App.scss";
import DropDown from "./widgets/dropdown";

const dropDownItems = [
  {
    id: 1,
    value: "Star Wars EP 12",
  },
  { id: 2, value: "Mandelorian, life after retirement" },
  { id: 3, value: "Princess Jedi Rey and in Wonderland" },
];

const multiSelectItems = [
  {
    id: 1,
    value: "Blue",
  },
  { id: 2, value: "Red" },
  { id: 3, value: "Pink" },
];

function App() {
  return (
    <div className="container">
      <DropDown title={"Normal Dropdown"} items={dropDownItems}/>
      <DropDown title={"Multi Select Dropdown"} items={multiSelectItems} multiSelect/>
    </div>
  );
}

export default App;
