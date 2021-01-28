import Modal from "./Modal";
import { useState } from "react";
import "./app.css";

const App = () => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  console.log("isModalOpened", isModalOpened);
  return (
    <div>
      App component
      <button onClick={() => setIsModalOpened(true)}>Open modal</button>
      <Modal isOpened={isModalOpened} onClose={() => setIsModalOpened(false)}>
        <form onSubmit={() => setIsModalOpened(false)} className="login-form">
          <section>
            <label>Email</label>
            <input type="email" />
          </section>
          <section>
            <label>Password</label>
            <input type="password" />
          </section>
          <button>Sign In</button>
        </form>
      </Modal>
    </div>
  );
};

export default App;
