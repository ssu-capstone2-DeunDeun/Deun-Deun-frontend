import React from 'react';
import { Link } from 'react-router-dom';
import { BasicHeaderBlock, BasicLogoBlock, BasicTemplateBlock, BasicTitleBlock } from './styles';

const BasicTemplate = ({ children, postData }) => {
	return (
		<BasicTemplateBlock>
			<BasicHeaderBlock>
				<BasicLogoBlock>
					<Link to="/home" class="logo">
						<img src="/img/logo/GROOPY.png" alt="logo"></img>
					</Link>
				</BasicLogoBlock>
				<BasicTitleBlock>
					{postData && <div class="sector">{postData.club.categoryType}</div>}
					{postData && <div class="club">{postData.club.clubName}</div>}
				</BasicTitleBlock>
			</BasicHeaderBlock>
			{children}
		</BasicTemplateBlock>
	);
};

export default BasicTemplate;