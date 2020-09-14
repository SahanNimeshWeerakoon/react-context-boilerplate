import React, { useState } from 'react';
import MovieList from './components/MovieList'
import Nav from './components/Nav'
import { MovieProvider } from './context/MovieContext'
import './styles/App.scss';

function App() {

    return (
    	<MovieProvider>
	        <div>
	        	<Nav />
	        	<MovieList />
	        </div>
	    </MovieProvider>
    );
}

export default App;