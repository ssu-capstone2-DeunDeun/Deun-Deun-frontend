import React from 'react';
import { ButtonBlock, ErrorMessage, FormContent, RegisterFormBlock, RegisterInfoBox, StyledInput } from './styles';
import Button from 'components/common/Button/index';
import { withRouter } from 'react-router-dom';
import { signup } from 'lib/api/auth';
import { useDispatch } from 'react-redux';
import { duplicated } from 'modules/registerUserInfo';
import { useState } from 'react';
import { useEffect } from 'react';
import { NAME_CHAR } from '../../../../node_modules/xmlchars/xml/1.0/ed5';



const RegisterInfoForm = ({ error, handleSubmit, history, onChange, nickname, duplicate, name, isDuplicated }) => {

	const checkNickname = (e) => {
		e.preventDefault();
		isDuplicated();
	}
	const [all, setAll] = useState(false);


	useEffect(() => {
		if ([nickname, name].includes('')) {
			setAll(true);
		}
		else {
			setAll(false);
		}
	}, [nickname, name])


	return (
		<RegisterFormBlock>
			<RegisterInfoBox>
				<div className="step">STEP 1.</div>
				<div className="info">
					<div>반갑습니다!</div>
					<div>기본 정보를 입력해주세요.</div>
				</div>
			</RegisterInfoBox>
			<form>
				<FormContent>
					<div className="name">이름</div>
					<StyledInput onChange={onChange} value={name} name="name" placeholder="이름을 입력해주세요."></StyledInput>
				</FormContent>
				<FormContent>
					<div className="name">닉네임*</div>
					<div className="checking">
						<StyledInput value={nickname} name="nickname" id="nickname" onChange={onChange} placeholder="닉네임을 입력해주세요."></StyledInput>
						<button onClick={checkNickname
						}>중복 검사</button>
					</div>
					{
						duplicate === false && <ErrorMessage>{error}</ErrorMessage>
					}
					{
						duplicate === true && <ErrorMessage>{error}</ErrorMessage>
					}
					{
						all && <ErrorMessage>이름과 닉네임을 모두 입력해주세요!</ErrorMessage>
					}
				</FormContent>
				<ButtonBlock>
					<Button to="/register/2" onClick={(e) => {
						e.preventDefault();
						handleSubmit();
						history.push('/register/2');
					}}>다음 단계로</Button>
				</ButtonBlock>
			</form>
		</RegisterFormBlock >
	);
};

export default withRouter(RegisterInfoForm);