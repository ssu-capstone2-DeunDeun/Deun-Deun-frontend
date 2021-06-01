import {
	TitleKorean,
	ApplicationLoadCard,
	InnerContainer,
	RecruitingOrderButton,
	RecruitTitleInput,
	RecruitInfo,
	RecruitDeadline,
	Tilde,
	RecruitInfoTextarea,
	ImageButton,
	DateInputButton
} from './styles';
import React, { forwardRef, useCallback, useEffect, useState } from 'react';
import { ContainerColumn, ContainerRow } from 'styles';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { Error, Header, SubmitButton } from 'pages/ApplicationAddPage/styles';
import LoadApplicationModal from 'components/modal/LoadApplicationModal';
import { Footer } from 'components/PostSection/styles';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { registerLocale } from 'react-datepicker';
import ko from 'date-fns/locale/ko';
import { ContentKorean } from 'components/ClubPostCardSmall/styles';
import ErrorMessage from 'components/common/ErrorMessage/index';
import { Generation, GenerationInput, Placeholder } from 'pages/ClubAddPage/styles';
registerLocale('ko', ko);

const RecruitAddPage = ({ setAddNewForm }) => {
	const [startDateString, setStartDateString] = useState('');
	const [endDateString, setEndDateString] = useState('');
	const [startDate, setStartDate] = useState(new Date());
	const [endDate, setEndDate] = useState(new Date());
	const [dateError, setDateError] = useState(false);
	const [generationError, setGenerationError] = useState(true);
	const [titleError, setTitleError] = useState(true);
	const [formError, setFormError] = useState(true);
	const [title, setTitle] = useState('');
	const [showLoadApplicationModal, setShowLoadApplicationModal] = useState(false);
	const [generation, setGeneration] = useState('');

	const defaultDate = new Date();

	const CustomDateInput = forwardRef(({ value, onClick }, ref) => (
		<DateInputButton onClick={onClick} ref={ref}>
			{value}
		</DateInputButton>
	));

	const dateToString = (date) => {
		return (
			date.getFullYear() +
			'.' +
			(date.getMonth() + 1).toString().padStart(2, '0') +
			'.' +
			date.getDate().toString().padStart(2, '0')
		);
	};

	const onChangeGeneration = useCallback((e) => {
		if (Number(e.target.value) > 0 && Number(e.target.value <= 999)) {
			setGeneration(e.target.value);
			setGenerationError(false);
		} else {
			setGeneration('');
			setGenerationError(true);
		}
	}, []);

	const onChangeTitle = useCallback((e) => {
		console.log(e.target.value);
		if (e.target.value === '') {
			setTitleError(true);
		} else {
			setTitle(e.target.value);
			setTitleError(false);
		}
	}, []);

	const onClickLoadApplication = useCallback((e) => {
		setShowLoadApplicationModal(true);
		setFormError(false);
	}, []);

	const onCloseModal = useCallback((e) => {
		setShowLoadApplicationModal(false);
	}, []);

	const onCloseSnackbar = useCallback(() => {
		setDateError(false);
	}, []);

	useEffect(() => {
		return () => setAddNewForm(false);
	}, []);

	useEffect(() => {
		if (endDate < startDate) return;
		else {
			setStartDateString(dateToString(startDate));
			setEndDateString(dateToString(endDate));
		}
	}, [startDate, endDate]);

	return (
		//
		<ContainerColumn style={{ marginTop: '3em', width: '1300px' }}>
			<Header>새 모집 공고 추가하기</Header>
			<TitleKorean>지원서 양식</TitleKorean>
			<ApplicationLoadCard onClick={onClickLoadApplication}>
				<InnerContainer className="inner">
					<AddCircleOutlineIcon style={{ marginRight: '0.4em' }} />
					<ContentKorean style={{ fontSize: '1.1rem', paddingTop: '0.13em' }}>지원서 불러오기</ContentKorean>
				</InnerContainer>
			</ApplicationLoadCard>
			{formError && <Error style={{ marginLeft: '0.5em' }}>* 지원서 양식이 필요합니다.</Error>}
			<TitleKorean style={{ marginBottom: '1em', marginTop: '1.3em' }}>모집 기수 / 제목</TitleKorean>
			<ContainerRow>
				<Generation style={{ height: '66px' }}>
					<GenerationInput min="1" onChange={onChangeGeneration} value={generation} />
					<Placeholder>기</Placeholder>
				</Generation>

				<RecruitTitleInput onChange={onChangeTitle} placeholder="제목을 입력해 주세요."></RecruitTitleInput>
			</ContainerRow>
			{(titleError || generationError) && (
				<Error style={{ marginTop: '0.6em', marginLeft: '0.5em' }}>* 모집 기수 / 제목은 필수 입력사항 입니다.</Error>
			)}
			<TitleKorean style={{ marginBottom: '1em', marginTop: '2em' }}>모집 일정</TitleKorean>
			<ContainerColumn style={{ marginBottom: '2em' }}>
				<ContainerRow>
					<RecruitInfo>서류 접수</RecruitInfo>
					<DatePicker
						locale="ko"
						selected={startDate}
						onChange={(date) => setStartDate(date)}
						customInput={<CustomDateInput />}
						value={startDateString}
					/>
					<Tilde>~</Tilde>
					<DatePicker
						locale="ko"
						selected={endDate}
						onChange={(date) => {
							if (date >= startDate) {
								setEndDate(date);
							} else {
								setDateError(true);
								setEndDate(startDate);
							}
						}}
						customInput={<CustomDateInput />}
						value={endDateString}
					/>
				</ContainerRow>
				<ContainerRow>
					<RecruitInfo>1차 발표</RecruitInfo>
					<RecruitDeadline>2021.01.01</RecruitDeadline>
					<Tilde>~</Tilde>
					<RecruitDeadline>2021.01.01</RecruitDeadline>
				</ContainerRow>
				<ContainerRow>
					<RecruitInfo>면접 진행</RecruitInfo>
					<RecruitDeadline>2021.01.01</RecruitDeadline>
					<Tilde>~</Tilde>
					<RecruitDeadline>2021.01.01</RecruitDeadline>
				</ContainerRow>
				<ContainerRow>
					<RecruitInfo>최종 발표</RecruitInfo>
					<RecruitDeadline>2021.01.01</RecruitDeadline>
					<Tilde>~</Tilde>
					<RecruitDeadline>2021.01.01</RecruitDeadline>
				</ContainerRow>
			</ContainerColumn>
			<TitleKorean>모집 내용</TitleKorean>
			<RecruitInfoTextarea />
			<TitleKorean>이미지 업로드</TitleKorean>
			<ContainerRow>
				<ImageButton placeholder="이미지 업로드"></ImageButton>
				<ImageButton />
				<ImageButton />
			</ContainerRow>
			<SubmitButton>모집 공고 등록하기</SubmitButton>
			<LoadApplicationModal show={showLoadApplicationModal} onCloseModal={onCloseModal} />
			<ErrorMessage open={dateError} onCloseSnackbar={onCloseSnackbar} message="마감일은 시작일 이후여야 합니다." />
			<Footer />
		</ContainerColumn>
	);
};

export default RecruitAddPage;
