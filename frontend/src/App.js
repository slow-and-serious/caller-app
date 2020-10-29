import React, { useEffect, useState } from "react";
import "./App.css";
import Items from "./components/Items";
import PostLoadingComponent from "./components/ItemsLoading";
import axiosInstance from "./services/axios";

function App() {
  const ItemsLoading = PostLoadingComponent(Items);
  const [appState, setAppState] = useState({
    loading: true,
    items: null,
  });

  useEffect(() => {
    axiosInstance.get().then((res) => {
      const allItems = res ? res.data : "Unauthorized";
      setAppState({ loading: false, items: allItems });
    });
  }, []);
  return (
    <div className="App">
      <h1>Items</h1>
      <ItemsLoading isLoading={appState.loading} items={appState.items} />
    </div>
  );
}
export default App;
