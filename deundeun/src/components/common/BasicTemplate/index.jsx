import React from 'react';
import { Link } from 'react-router-dom';
import { BasicHeaderBlock, BasicLogoBlock, BasicTemplateBlock, BasicTitleBlock } from './styles';

const BasicTemplate = ({ children, categoryType, clubName }) => {
	return (
		<BasicTemplateBlock>
			<BasicHeaderBlock>
				<BasicLogoBlock>
					<Link to="/home" class="logo">
						<img src="/img/logo/GROOPY.png" alt="logo"></img>
					</Link>
				</BasicLogoBlock>
				<BasicTitleBlock>
					{categoryType && <div class="sector">{categoryType}</div>}
					{clubName && <div class="club">{clubName}</div>}
				</BasicTitleBlock>
			</BasicHeaderBlock>
			{children}
		</BasicTemplateBlock>
	);
};

export default BasicTemplate;