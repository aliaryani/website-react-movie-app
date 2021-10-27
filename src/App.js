import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';
import InfoComponent from './components/InfoComponent';
import BootstrapSelect from 'react-bootstrap-select-dropdown';


const App = () => {
	const [movies, setMovies] = useState([]);
	const [searchValue, setSearchValue] = useState('');
	const [type, setType] = useState('');
	const [year, setYear] = useState('');

	const getMovieRequest = async (searchValue) => {
		const url = `https://www.omdbapi.com/?s=${searchValue}&y=${year}&type=${type}&apikey=7e59a4ef`;

		const response = await fetch(url);
		const responseJson = await response.json();

		if (responseJson.Search) {
			setMovies(responseJson.Search);
		}
	};

	useEffect(() => {
		getMovieRequest(searchValue);
	}, [searchValue,type,year]);

	const handleChange = (selectedOptions) => {
		if(selectedOptions?.selectedValue[0]){
			setType(selectedOptions?.selectedValue[0])
		}
	}

	return (
		<div className='container-fluid movie-app'>
			<div className='row d-flex align-items-center mt-4 mb-4'>
				<MovieListHeading heading='Movies' />

				<SearchBox searchValue={searchValue} setSearchValue={setYear} placeholder="Search By Year"/>

				<BootstrapSelect options={[
						{
							"labelKey": "movie",
							"value": "movie"
						},
						{
							"labelKey": "series",
							"value": "series"
						},
						{
							"labelKey": "episode",
							"value": "episode"
						}
											]} 
						onChange={handleChange} 
				/>
				
				<SearchBox searchValue={searchValue} setSearchValue={setSearchValue} placeholder="Search By Name"/>
				

			</div>
			<div className='row'>
				<MovieList
					movies={movies}
					infoComponent={InfoComponent}
				/>
			</div>
			
		</div>
	);
};

export default App;
