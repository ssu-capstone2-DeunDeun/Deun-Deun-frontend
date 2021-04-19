import React, { useCallback } from 'react';
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

const ClubImageCarousel = ({ setFocusClubImage }) => {
	let items = [
		{
			id: 1,
			imageURL: '/images/test1.jpeg'
		},
		{
			id: 2,
			imageURL: '/images/test2.jpeg'
		},
		{
			id: 3,
			imageURL: '/images/test3.jpeg'
		},
		{
			id: 4,
			imageURL: '/images/test4.jpeg'
		},
		{
			id: 5,
			imageURL: '/images/test5.jpeg'
		}
	];

	const onChangeCarousel = useCallback(
		(e) => {
			setFocusClubImage(e);
		},
		[setFocusClubImage]
	);

	return (
		//
		<Container>
			<Carousel
				onChange={onChangeCarousel}
				fullHeightHover={false}
				className="ClubImageCarousel"
				animation="slide"
				timeout={400}
			>
				{items.map((item, i) => (
					<Item key={i} item={item} />
				))}
			</Carousel>
		</Container>
	);
};

export default ClubImageCarousel;
