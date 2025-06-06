import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  const onSubmit = (query) => {
    console.log("Пошук:", query);
  
  };

  return (
    <>
      <SearchBar onSubmit={onSubmit} />
    </>
  );
}

export default App;
