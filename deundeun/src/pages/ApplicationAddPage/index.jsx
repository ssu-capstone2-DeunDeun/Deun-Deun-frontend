import DropdownMenu from 'components/DropdownMenu';
import { TitleKorean } from 'pages/RecruitAddPage/styles';
import React, { useEffect, useState } from 'react';
import { ContainerColumn, ContainerPage, ContainerRow } from 'styles';
import {
	AddQuestionButton,
	AddSelectionButton,
	AnswerNumber,
	ApplicationTitleInput,
	DropdownContainer,
	InnerContainer,
	QuestionInput,
	QuestionNumber,
	SubmitButton,
	Header
} from './styles';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
const ApplicationAddPage = ({ setAddNewForm }) => {
	const [questionTypeIndex, setQuestionTypeIndex] = useState(0);
	const [answerTypeIndex, setAnswerTypeIndex] = useState(0);

	useEffect(() => {
		return () => setAddNewForm(false);
	}, []);

	let questionTypes = ['주관식', '선다형'];
	let answerTypes = ['단일 선택', '복수 선택'];

	return (
		//
		<ContainerPage style={{ width: '68vw', minHeight: '150vh' }}>
			<ContainerColumn>
				<Header>새 지원서 추가하기</Header>
				<TitleKorean>제목</TitleKorean>
				<ApplicationTitleInput placeholder="제목을 입력해주세요."></ApplicationTitleInput>
			</ContainerColumn>
			<ContainerColumn>
				<TitleKorean style={{ marginBottom: '1em' }}>질문</TitleKorean>
				<ContainerRow>
					<QuestionNumber>Q1</QuestionNumber>
					<DropdownContainer>
						{`${questionTypes[questionTypeIndex]}`}
						<DropdownMenu
							options={questionTypes}
							selectedIndex={questionTypeIndex}
							setSelectedIndex={setQuestionTypeIndex}
						></DropdownMenu>
					</DropdownContainer>
					<QuestionInput placeholder="질문을 입력해주세요." />
				</ContainerRow>
				<ContainerRow>
					<QuestionNumber>Q2</QuestionNumber>
					<DropdownContainer>
						{`${questionTypes[questionTypeIndex]}`}
						<DropdownMenu
							options={questionTypes}
							selectedIndex={questionTypeIndex}
							setSelectedIndex={setQuestionTypeIndex}
						></DropdownMenu>
					</DropdownContainer>
					<DropdownContainer>
						{`${answerTypes[answerTypeIndex]}`}
						<DropdownMenu
							options={answerTypes}
							selectedIndex={answerTypeIndex}
							setSelectedIndex={setAnswerTypeIndex}
						></DropdownMenu>
					</DropdownContainer>
					<QuestionInput className="select-title" placeholder="질문을 입력해주세요." />
				</ContainerRow>

				<ContainerRow>
					<AnswerNumber>A2</AnswerNumber>
					<ContainerColumn>
						<QuestionInput placeholder="선택지를 입력해주세요." />
						<QuestionInput placeholder="선택지를 입력해주세요." />
						<QuestionInput placeholder="선택지를 입력해주세요." />
						<QuestionInput placeholder="선택지를 입력해주세요." />
						<AddSelectionButton>+ 선택지 추가하기</AddSelectionButton>
					</ContainerColumn>
				</ContainerRow>
				<AddQuestionButton>
					<InnerContainer>
						<AddCircleOutlineIcon style={{ marginRight: '0.5em' }} />
						질문 추가하기
					</InnerContainer>
				</AddQuestionButton>
				<SubmitButton>지원서 등록하기</SubmitButton>
			</ContainerColumn>
		</ContainerPage>
	);
};

export default ApplicationAddPage;
