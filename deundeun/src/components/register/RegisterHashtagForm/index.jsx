import Button from 'components/common/Button/index';
import React from 'react';
import { ButtonBlock, RegisterFormBlock, RegisterInfoBox, TagsBox } from './styles';
import { withRouter } from 'react-router-dom';
import { hashtagSubmit } from 'modules/registerUserInfo';
import { useDispatch } from 'react-redux';

const RegisterHashtagForm = ({ history, onChangeHashtags, inithashtags }) => {
	const dispatch = useDispatch();
	let tag1 = [];
	let setLists = [];
	let count = 0;
	if (inithashtags) {
		for (let i = 0; i < Object.keys(inithashtags).length; i++) {
			tag1.push(inithashtags[i]["name"]);
		}
	}

	const handleSubmit = (e) => {
		const hashtagInfoIds = [];
		for (let i = 0; i < setLists.length; i++) {
			for (let j = 0; j < Object.keys(inithashtags).length; j++) {
				if (setLists[i] === inithashtags[j]["name"]) {
					hashtagInfoIds.push(inithashtags[j]["id"]);
				}
			}
		}
		onChangeHashtags(hashtagInfoIds);
		dispatch(hashtagSubmit(hashtagInfoIds));
	}

	const onInsert = (e) => {
		const thisEle = e.target;

		if (thisEle.classList.contains("active")) {
			thisEle.classList.remove("active");
			count -= 1;
			setLists = setLists.filter(list => list !== thisEle.innerText);
			console.log(setLists);
		}
		else {
			if (count === 3) {
				return;
			}
			thisEle.classList.add("active");
			count += 1;
			setLists = setLists.concat(thisEle.innerText);
			console.log(setLists);
		}
	}

	return (
		<RegisterFormBlock>
			<RegisterInfoBox>
				<div class="step">STEP 2.</div>
				<div class="info">
					<div>닉네임님, 환영합니다!</div>
					<div>관심있는 태그를 설정해주세요.</div>
				</div>
				<div class="subinfo">관심 태그는 최대 3개까지 선택할 수 있습니다.</div>
			</RegisterInfoBox>

			<TagsBox>
				<div className="tags tag1" onClick={onInsert}>
					<div className="background">{tag1[0]}</div>
					<div className="image"></div>
				</div>
				<div className="tags tag2" onClick={onInsert}>
					<div className="background">{tag1[1]}</div>
					<div className="image"></div>
				</div>
				<div className="tags tag3" onClick={onInsert}>
					<div className="background">{tag1[2]}</div>
					<div className="image"></div>
				</div>
				<div className="tags tag4" onClick={onInsert}>
					<div className="background">{tag1[3]}</div>
					<div className="image"></div>
				</div>
				<div className="tags tag5" onClick={onInsert}>
					<div className="background">{tag1[4]}</div>
					<div className="image"></div>
				</div>
				<div className="tags tag6" onClick={onInsert}>
					<div className="background">{tag1[5]}</div>
					<div className="image"></div>
				</div>
				<div className="tags tag7" onClick={onInsert}>
					<div className="background">{tag1[6]}</div>
					<div className="image"></div>
				</div>
				<div className="tags tag8" onClick={onInsert}>
					<div className="background">{tag1[7]}</div>
					<div className="image"></div>
				</div>
			</TagsBox>

			<ButtonBlock>
				<Button registerBtn1 to="/">건너뛰기</Button>
				<Button registerBtn2 to="/"
					onClick={(e) => {
						e.preventDefault();
						handleSubmit();
						history.push('/home');
					}}
				>다음 단계로</Button>
			</ButtonBlock>
		</RegisterFormBlock >
	);
};


export default withRouter(RegisterHashtagForm);