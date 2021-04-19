import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Card, Container } from './styles';

const Item = (props) => {
	return (
		<Card>
			{/* <h2>{props.item.name}</h2>
			<p>{props.item.description}</p> */}
			<img
				style={{ width: '100%', height: '100%', objectFit: 'cover' }}
				src={`${props.item.imageURL}`}
				alt="clubimage"
			/>
		</Card>
	);
};

const ClubImageCarousel = () => {
	let items = [
		{
			imageURL: '/images/test1.jpeg'
		},
		{
			imageURL: '/images/test2.jpeg'
		},
		{
			imageURL: '/images/test3.jpeg'
		}
	];

	return (
		//
		<Container>
			<Carousel fullHeightHover={false} className="ClubImageCarousel" animation="slide" timeout={400}>
				{items.map((item, i) => (
					<Item key={i} item={item} />
				))}
			</Carousel>
		</Container>
	);
};

export default ClubImageCarousel;
