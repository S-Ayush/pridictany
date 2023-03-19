import logo from "./logo.svg";
import styles from "./App.module.scss";
import Home from "./pages/home/Home";
import Layout from "./containers/layout/Layout";

function App() {
  return (
    <Layout>
      <Home />
    </Layout>
  );
}

export default App;
