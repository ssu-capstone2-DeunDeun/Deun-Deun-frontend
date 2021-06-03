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
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setHours, setMinutes } from 'date-fns';
// import ReactQuill from 'react-quill';
// import ImageResize from '@looop/quill-image-resize-module-react';
// Quill.register('modules/ImageResize', ImageResize);
registerLocale('ko', ko);

const RecruitAddPage = ({
	setAddNewForm,
	deadline,
	setDeadline,
	onChangeStartDate,
	onChangeEndDate,
	onChangeSubmitStartDate,
	onChangeSubmitEndDate,
	onChangeInterviewStartDate,
	onChangeInterviewEndDate,
	onChangeFinalPassStartDate,
	onChangeFinalPassEndDate
}) => {
	const [dateError, setDateError] = useState(false);
	const [generationError, setGenerationError] = useState(true);
	const [titleError, setTitleError] = useState(true);
	const [formError, setFormError] = useState(true);
	const [title, setTitle] = useState('');
	const [showLoadApplicationModal, setShowLoadApplicationModal] = useState(false);
	const [generation, setGeneration] = useState('');
	const [intro, setIntro] = useState('');

	const dispatch = useDispatch();
	const { clubAddRecruitInfo } = useSelector(({ clubAddRecruitInfo }) => ({
		clubAddRecruitInfo
	}));
	// console.log("clubaddrecruitinfo", clubAddRecruitInfo);

	const times = [
		setHours(setMinutes(new Date(), 1), 0),
		setHours(setMinutes(new Date(), 5), 12),
		setHours(setMinutes(new Date(), 59), 23)
	];
	const modules = {
		toolbar: [
			[{ header: [1, 2, false] }],
			['bold', 'italic', 'underline', 'strike', 'blockquote'],
			[{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
			['link', 'image'],
			[{ align: [] }, { color: [] }, { background: [] }], // dropdown with defaults from theme
			['clean']
		]
	};

	// imageResize: {
	// 	parchment: Quill.import('parchment'),
	// 	modules: ['Resize']
	// }

	const formats = [
		'header',
		'bold',
		'italic',
		'underline',
		'blockquote',
		'list',
		'bullet',
		'indent',
		'link',
		'image',
		'align',
		'color',
		'background'
	];

	const CustomDateInput = forwardRef(({ value, onClick }, ref) => (
		<DateInputButton onClick={onClick} ref={ref}>
			{value}
		</DateInputButton>
	));

	const onChangeTitle = useCallback((e) => {
		console.log(e.target.value);
		if (e.target.value === '') {
			setTitleError(true);
		} else {
			setTitle(e.target.value);
			setTitleError(false);
		}
	}, []);

	const onChangeGeneration = (e) => {
		if (Number(e.target.value) > 0 && Number(e.target.value <= 999)) {
			setGeneration(e.target.value);
		} else {
			setGeneration('');
		}
	};

	const onClickLoadApplication = useCallback((e) => {
		setShowLoadApplicationModal(true);
	}, []);

	const onCloseModal = useCallback((e) => {
		setShowLoadApplicationModal(false);
	}, []);

	const onCloseSnackbar = useCallback(() => {
		setDateError(false);
	}, []);

	const onChangeIntro = useCallback((e) => {
		console.log(e.target.value);
	}, []);

	useEffect(() => {
		return () => setAddNewForm(false);
	}, []);

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
						selected={deadline.startDate}
						onChange={onChangeStartDate}
						showTimeSelect
						injectTimes={times}
						customInput={<CustomDateInput />}
						dateFormat="yyyy.MM.dd aa h:mm"
					/>
					<Tilde>~</Tilde>
					<DatePicker
						locale="ko"
						selected={deadline.endDate}
						onChange={onChangeEndDate}
						showTimeSelect
						injectTimes={times}
						customInput={<CustomDateInput />}
						dateFormat="yyyy.MM.dd aa h:mm"
					/>
				</ContainerRow>
				<ContainerRow>
					<RecruitInfo>1차 발표</RecruitInfo>
					<DatePicker
						locale="ko"
						selected={deadline.submitStartDate}
						onChange={onChangeSubmitStartDate}
						showTimeSelect
						injectTimes={times}
						customInput={<CustomDateInput />}
						dateFormat="yyyy.MM.dd aa h:mm"
					/>
					<Tilde>~</Tilde>
					<DatePicker
						locale="ko"
						selected={deadline.submitEndDate}
						onChange={onChangeSubmitEndDate}
						showTimeSelect
						injectTimes={times}
						customInput={<CustomDateInput />}
						dateFormat="yyyy.MM.dd aa h:mm"
					/>
				</ContainerRow>
				<ContainerRow>
					<RecruitInfo>면접 진행</RecruitInfo>
					<DatePicker
						locale="ko"
						selected={deadline.interviewStartDate}
						onChange={onChangeInterviewStartDate}
						showTimeSelect
						injectTimes={times}
						customInput={<CustomDateInput />}
						dateFormat="yyyy.MM.dd aa h:mm"
					/>
					<Tilde>~</Tilde>
					<DatePicker
						locale="ko"
						selected={deadline.interviewEndDate}
						onChange={onChangeInterviewEndDate}
						showTimeSelect
						injectTimes={times}
						customInput={<CustomDateInput />}
						dateFormat="yyyy.MM.dd aa h:mm"
					/>
				</ContainerRow>
				<ContainerRow>
					<RecruitInfo>최종 발표</RecruitInfo>
					<DatePicker
						locale="ko"
						selected={deadline.finalPassStartDate}
						onChange={onChangeFinalPassStartDate}
						showTimeSelect
						injectTimes={times}
						customInput={<CustomDateInput />}
						dateFormat="yyyy.MM.dd aa h:mm"
					/>
					<Tilde>~</Tilde>
					<DatePicker
						locale="ko"
						selected={deadline.finalPassEndDate}
						onChange={onChangeFinalPassEndDate}
						showTimeSelect
						injectTimes={times}
						customInput={<CustomDateInput />}
						dateFormat="yyyy.MM.dd aa h:mm"
					/>
				</ContainerRow>
			</ContainerColumn>
			<TitleKorean>모집 내용</TitleKorean>
			<SubmitButton>모집 공고 등록하기</SubmitButton>

			{/* <ReactQuill
				style={{ height: '500px' }}
				modules={modules}
				formats={formats}
				value={intro || ''}
				onChange={onChangeIntro}
			/> */}
			<LoadApplicationModal show={showLoadApplicationModal} onCloseModal={onCloseModal} />
			<ErrorMessage open={dateError} onCloseSnackbar={onCloseSnackbar} message="마감일은 시작일 이후여야 합니다." />
			<Footer />
		</ContainerColumn>
	);
};

export default RecruitAddPage;
