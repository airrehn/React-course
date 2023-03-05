import logo from "./logo.svg";
import "./App.css";
import "./components/Todo";
import Todo from "./components/Todo";
import Title from "./components/Title";
import Modal from "./components/Modal";

function App() {
  return (
    <div>
      <Title />
      <div>
        <input
          type="text"
          onChange={(event) => {
            console.log(event.target.value);
          }}
        />
        <button>Add todo</button>
      </div>

      <div className="todo__wrapper">
        <Todo title="A" />

        <Todo title={2} />

        <Todo title="Cello" />
      </div>
      <Modal comment="no not sure" />
    </div>
  );
}

export default App;
