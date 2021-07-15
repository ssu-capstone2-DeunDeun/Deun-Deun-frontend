import React, { useCallback, useEffect, useState } from 'react';
import { Card, Container } from './styles';
import loadable from '@loadable/component';

const Carousel = loadable(() => import('react-material-ui-carousel'));

const Item = (props) => {
	return (
		<Card>
			<img
				// style={{ width: '100%', height: '100%', objectFit: 'cover' }}
				style={{ width: '70%', objectFit: 'cover' }}
				src={`${props.item.imageURL}`}
				alt="clubimage"
			/>
		</Card>
	);
};

const ClubImageCarousel = ({ setFocusClubImage, recruitingClubDtos }) => {
	let items = [
		{
			id: 1,
			imageURL: '/img/logo/GROOPY.svg'
		}
	];
	// const [items, setItems] = useState([]);

	const [loading, setLoading] = useState(true);

	const onChangeCarousel = useCallback(
		(e) => {
			if (!loading) {
				setFocusClubImage(e);
			}
		},
		[setFocusClubImage, loading]
	);

	// useEffect(() => {
	// 	if (recruitingClubDtos) {
	// 		setFocusClubImage(0);
	// 		// need to set recruiting club images
	// 		setLoading(false);
	// 	} else {
	// 		setItems(items.concat(tempImage));
	// 		setLoading(false);
	// 	}
	// }, []);

	// useEffect(() => {
	// 	return () => setLoading(true);
	// }, []);

	return (
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
