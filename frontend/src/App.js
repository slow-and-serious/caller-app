import React, { useEffect, useState } from "react";
import "./App.css";
import Items from "./components/Items";
import LoadingComponent from "./components/LoadingCircular";
import axiosInstance from "./services/axios";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  header: {
    textAlign: "center",
    padding: "1rem",
    marginBottom: '1rem',
  },
});

function App() {
  const Loading = LoadingComponent(Items);
  const classes = useStyles();
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
      <Typography variant="h3" className={classes.header}>
        Landing page
      </Typography>
      <Loading isLoading={appState.loading} items={appState.items} />
    </div>
  );
}
export default App;
