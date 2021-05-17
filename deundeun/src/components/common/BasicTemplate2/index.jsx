import { BasicTemplateBlock, BasicLogoBlock } from './styles';

const BasicTemplate2 = ({ children }) => {
	return (
		<BasicTemplateBlock>
			<BasicLogoBlock>
				<div class="logo">
					<img src="/img/logo/GROOPY.png" alt="logo"></img>
				</div>
			</BasicLogoBlock>
			{children}
		</BasicTemplateBlock>
	);
};

export default BasicTemplate2;