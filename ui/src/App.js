import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useQuery } from "react-query";

async function getProducts() {
  const { data } = await axios.get(`${process.env.REACT_APP_API}/products`);

  return data;
}

function useProducts() {
  const { isLoading, isFetching, data, isError, refetch } = useQuery(
    "products",
    getProducts,
    {
      retry: 1,
      retryDelay: 500,
    }
  );
  return { data, isLoading, isFetching, isError, refetch };
}

function App() {
  const { data, isLoading } = useProducts();

  console.log("frontend data in db: ", data);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
