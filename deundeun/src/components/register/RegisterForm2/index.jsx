import Button from 'components/common/Button/Button';
import React from 'react';
import { ButtonBlock, RegisterFormBlock, RegisterInfoBox, TagsBox, Background, CoverImage } from './styles';

//
const RegisterForm2 = () => {
	const tag1 = ["개발", "디자인", "경제 / 경영", "스포츠", "어학", "친목", "봉사", "취업"];
	let setLists = [];
	let count = 0;

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
			console.log(thisEle.classList);
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
				<Button registerBtn2 to="/">다음 단계로</Button>
			</ButtonBlock>
		</RegisterFormBlock >
	);
};

export default RegisterForm2;