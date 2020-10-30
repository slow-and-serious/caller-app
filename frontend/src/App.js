import React, { useEffect, useState } from "react";
import "./App.css";
import Items from "./components/Items";
import LoadingComponent from "./components/LoadingCircular";
import axiosInstance from "./services/axios";

function App() {
  const Loading = LoadingComponent(Items);
  const [appState, setAppState] = useState({
    loading: true,
    items: null,
  });

  useEffect(() => {
    axiosInstance.get("notification/test").then((res) => {
      const allItems = res ? res.data : "Unauthorized";
      setAppState({ loading: false, items: allItems });
    });
  }, []);
  return (
    <div className="App">
      <h1>Items</h1>
      <Loading isLoading={appState.loading} items={appState.items} />
    </div>
  );
}
export default App;
