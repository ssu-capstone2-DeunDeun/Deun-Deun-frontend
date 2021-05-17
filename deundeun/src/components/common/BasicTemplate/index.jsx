import React from 'react';
import { BasicHeaderBlock, BasicLogoBlock, BasicTemplateBlock, BasicTitleBlock } from './styles';

const BasicTemplate = ({ children, club, sector }) => {
	return (
		<BasicTemplateBlock>
			<BasicHeaderBlock>
				<BasicLogoBlock>
					<div class="logo">
						<img src="/img/logo/GROOPY.png" alt="logo"></img>
					</div>
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