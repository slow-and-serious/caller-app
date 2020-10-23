import React, { useEffect, useState } from 'react';
import './App.css';
import Items from './components/Items';
import PostLoadingComponent from './components/ItemsLoading';
import axiosInstance from './axios';

function App() {
	const ItemsLoading = PostLoadingComponent(Items);
	const [appState, setAppState] = useState({
		loading: true,
		items: null,
	});

	useEffect(() => {
		axiosInstance.get().then((res) => {
			const allItems = res.data;
			setAppState({ loading: false, items: allItems });
			console.log(res.data);
		});
	}, [setAppState]);
	return (
		<div className="App">
			<h1>Items</h1>
			<ItemsLoading isLoading={appState.loading} items={appState.items} />
		</div>
	);
}
export default App;