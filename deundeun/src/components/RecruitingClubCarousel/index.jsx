import React, { useCallback, useEffect, useState } from 'react';
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
			imageURL: '/images/test6.jpeg'
		},
		{
			id: 2,
			imageURL: '/images/test7.jpeg'
		},
		{
			id: 3,
			imageURL: '/images/test8.jpeg'
		},
		{
			id: 4,
			imageURL: '/images/test9.jpeg'
		},
		{
			id: 5,
			imageURL: '/images/test10.jpeg'
		}
	];

	const [mounted, setMounted] = useState(false);

	const onChangeCarousel = useCallback(
		(e) => {
			if (mounted) {
				setFocusClubImage(e);
			}
		},
		[setFocusClubImage, mounted]
	);

	useEffect(() => {
		setFocusClubImage(0);
		setMounted(true);
	}, []);

	useEffect(() => {
		return () => setMounted(false);
	}, []);

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
