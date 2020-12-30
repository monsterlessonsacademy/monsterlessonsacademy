import Header from "components/Header";
import Main from "components/Main";
import Footer from "components/Footer";
import { TodosProvider } from "contexts/todos";

function App() {
  return (
    <TodosProvider>
      <div className="todoapp">
        <Header />
        <Main />
        <Footer />
      </div>
    </TodosProvider>
  );
}

export default App;
