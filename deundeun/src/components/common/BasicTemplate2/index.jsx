import { BasicTemplateBlock, BasicLogoBlock } from './styles';

const BasicTemplate2 = ({ children }) => {
	return (
		<BasicTemplateBlock>
			<BasicLogoBlock>
				<div className="logo">Logo</div>
			</BasicLogoBlock>
			{children}
		</BasicTemplateBlock>
	);
};

export default BasicTemplate2;
