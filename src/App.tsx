import React from 'react';
import './App.css';
import Header from "./header/Header";
import Main from "./main/Main";
import Skills from "./skills/Skills";
import MyJobs from "./my-jobs/MyJobs";
import Contact from "./contact/Contact";

function App() {
	return (
		<div className="App">
			<Header/>
			<Main/>
			<Skills/>
			<MyJobs/>
			<Contact/>
		</div>
	);
}

export default App;
