import React from 'react';

const InfoComponent = ({movie}) => {
	return (
		<div>
			<span className='mr-2 d-block'>YEAR: {movie?.Year}</span>
			<span className='mr-2 d-block'>TYPE: {movie?.Type}</span>
			<span className='mr-2 d-block'>NAME: {movie?.Title}</span>

		</div>
	);
};

export default InfoComponent;
