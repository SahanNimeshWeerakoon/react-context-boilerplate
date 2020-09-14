import React, { useContext } from 'react'
import { MovieContext } from '../context/MovieContext'

const Nav = () => {
	const [movies, setMovies] = useContext(MovieContext)

	const addMovie = () => {
		setMovies(prevMovies => [...prevMovies, { name: 'test', price: '$05', id: '002' }])
	}

	return (
		<div>
			<h3>PHOENIXXX</h3>
			<p>List of Movies: {movies.length}</p>
			<button onClick={addMovie}>Add movie</button>
		</div>
	)
}

export default Nav