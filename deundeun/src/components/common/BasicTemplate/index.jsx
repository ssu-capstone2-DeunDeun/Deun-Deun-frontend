import React from 'react';
import { Link } from 'react-router-dom';
import { BasicHeaderBlock, BasicLogoBlock, BasicTemplateBlock, BasicTitleBlock } from './styles';

const BasicTemplate = ({ children, club, sector }) => {
	return (
		<BasicTemplateBlock>
			<BasicHeaderBlock>
				<BasicLogoBlock>
					<Link to="/home" class="logo">
						<img src="/img/logo/GROOPY.png" alt="logo"></img>
					</Link>
				</BasicLogoBlock>
				<BasicTitleBlock>
					<div class="sector">{sector}</div>
					<div class="club">{club}</div>
				</BasicTitleBlock>
			</BasicHeaderBlock>
			{children}
		</BasicTemplateBlock>
	);
};

export default BasicTemplate;