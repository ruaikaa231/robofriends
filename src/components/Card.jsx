import React from 'react';

const Card = ({ name , email, id }) => {
	return (
		<div className='tc bg-light-purple dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img alt='robots' src='https://newhorizonchurch.tv/wp-content/uploads/2021/06/37784_Open_bible-scaled.jpg' width='250px' height='250px'/>
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
}

export default Card;