import { useState } from "react";
import Modal from "./Modal";
import "./app.css";

const App = () => {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <div>
      <h1>Hello monsterlessons</h1>

      <button onClick={() => setIsOpened(true)}>Open Login Modal</button>

      <Modal isOpened={isOpened} onClose={() => setIsOpened(false)}>
        <form onSubmit={() => setIsOpened(false)} className="login-form">
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
