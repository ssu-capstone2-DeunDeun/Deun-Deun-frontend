
import { Link } from 'react-router-dom';
import { BasicTemplateBlock, BasicLogoBlock } from './styles';

const BasicTemplateHeader = ({ children }) => {
	return (
		<BasicTemplateBlock>
			<BasicLogoBlock>
				<Link to="/home" class="logo">
					<img src="/img/logo/GROOPY.png" alt="logo"></img>
				</Link>
			</BasicLogoBlock>
			{children}
		</BasicTemplateBlock>
	);
};

export default BasicTemplateHeader;