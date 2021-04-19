import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Card } from './styles';

const Item = (props) => {
	return (
		<Card>
			<h2>{props.item.name}</h2>
			<p>{props.item.description}</p>
		</Card>
	);
};

const ClubImageSlider = () => {
	let items = [
		{
			name: '1',
			description: 'test 1'
		},
		{
			name: '2',
			description: 'test 2'
		}
	];

	return (
		//
		<Carousel animation="slide" timeout={400}>
			{items.map((item, i) => (
				<Item key={i} item={item} />
			))}
		</Carousel>
	);
};

export default ClubImageSlider;
