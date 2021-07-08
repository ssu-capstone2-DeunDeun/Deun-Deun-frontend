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
	DateInputButton,
	AppTitle
} from './styles';
import React, { forwardRef, useCallback, useEffect, useRef, useState } from 'react';
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
import { Prompt, useHistory } from 'react-router';
import recruitAddInfo, { changeInput, initializeState, addRecruit } from 'modules/recruitAddInfo';
import axios from '../../../node_modules/axios/index';
import { ACCESS_TOKEN, API_BASE_URL } from 'constants/index';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { useLocation } from 'react-router-dom';
import { validateLocaleAndSetLanguage } from '../../../node_modules/typescript/lib/typescript';
registerLocale('ko', ko);

const RecruitAddPage = ({
	setAddNewForm,
	deadline,
	onChangeSubmitStartDate,
	onChangeSubmitEndDate,
	onChangeInterviewStartDate,
	onChangeInterviewEndDate,
	onChangeDocumentPassAnnounceDate,
	onChangeFinalPassAnnounceDate,
	applicationList,
	clubName,
	whenState,
	setWhenState,
	location
}) => {
	const [dateError, setDateError] = useState(false);
	const [generationError, setGenerationError] = useState(true);
	const [titleError, setTitleError] = useState(true);
	const [formError, setFormError] = useState(true);
	const [title, setTitle] = useState('');
	const [showLoadApplicationModal, setShowLoadApplicationModal] = useState(false);
	const [generation, setGeneration] = useState('');
	const [intro, setIntro] = useState('');
	const [editorContent, setEditorContent] = useState('');

	const editorRef = useRef();
	const dispatch = useDispatch();
	const history = useHistory();

	let editorInstance = null;
	let content = null;
	let modifiedContent = null;

	const times = [
		setHours(setMinutes(new Date(), 1), 0),
		setHours(setMinutes(new Date(), 5), 12),
		setHours(setMinutes(new Date(), 59), 23)
	];

	const CustomDateInput = forwardRef(({ value, onClick }, ref) => (
		<DateInputButton onClick={onClick} ref={ref}>
			{value}
		</DateInputButton>
	));

	const removeBase64 = () => {
		editorInstance = editorRef.current.getInstance();
		content = editorInstance.getMarkdown();
		editorInstance.setMarkdown(content.replace(/!\[.*\]\(data:image\/.*\)!/, '!'), true);
	};

	const uploadImage = (blob) => {
		setWhenState(true);
		let formData = new FormData();
		formData.append('multipartFiles', blob);

		return axios({
			method: 'post',
			url: `${API_BASE_URL}/image`,
			data: formData,
			headers: {
				'Content-type': 'multipart/form-data',
				Authorization: 'Bearer ' + localStorage.getItem(ACCESS_TOKEN)
			}
		}).then((res) => {
			return res.data[0];
		});
	};

	const onChangeTitle = useCallback(
		(e) => {
			setWhenState(true);

			console.log(e.target.value);
			if (e.target.value === '') {
				setTitleError(true);
			} else {
				setTitle(e.target.value);
				dispatch(changeInput({ type: 'title', value: e.target.value }));
				setTitleError(false);
			}
		},
		[dispatch, setWhenState]
	);

	const onChangeGeneration = (e) => {
		setWhenState(true);

		if (Number(e.target.value) > 0 && Number(e.target.value <= 999)) {
			setGeneration(e.target.value);
			dispatch(changeInput({ type: 'generation', value: e.target.value }));
			setGenerationError(false);
		} else {
			setGeneration('');
		}
	};

	const onClickLoadApplication = useCallback(
		(e) => {
			setWhenState(true);
			setShowLoadApplicationModal(true);
		},
		[setWhenState]
	);

	const onCloseModal = useCallback((e) => {
		setShowLoadApplicationModal(false);
	}, []);

	const onCloseSnackbar = useCallback(() => {
		setDateError(false);
	}, []);

	const { recruitAddInfo } = useSelector(({ recruitAddInfo }) => ({
		recruitAddInfo: recruitAddInfo
	}));

	const onSubmit = useCallback(
		(e) => {
			e.preventDefault();
			if (formError || titleError || generationError) {
				window.scrollTo(0, 0);
				console.log(formError, titleError, generationError);
				return;
			} else {
				let editorInstance = editorRef.current.getInstance();
				let editorContent = editorInstance.getMarkdown();
				console.log(editorContent);
				const data = {
					newRecruit: {
						clubApplyFormId: recruitAddInfo.clubApplyFormId,
						documentPassAnnounceDate: recruitAddInfo.documentPassAnnounceDate,
						submitStartDate: recruitAddInfo.submitStartDate,
						submitEndDate: recruitAddInfo.submitEndDate,
						interviewStartDate: recruitAddInfo.interviewStartDate,
						interviewEndDate: recruitAddInfo.interviewEndDate,
						finalPassAnnounceDate: recruitAddInfo.finalPassAnnounceDate,
						title: recruitAddInfo.title,
						generation: parseInt(recruitAddInfo.generation),
						content: editorContent
					},
					clubName: clubName
				};

				axios({
					method: 'post',
					url: `${API_BASE_URL}/clubs/${clubName}/recruits`,
					data: data.newRecruit,
					headers: {
						Authorization: 'Bearer ' + localStorage.getItem(ACCESS_TOKEN)
					}
				}).then((res) => {
					console.log(res);
					history.push('/recruit/success');
				});
			}
		},
		[formError, titleError, generationError, recruitAddInfo, clubName, history]
	);

	useEffect(() => {
		// console.log(editorContent);
	}, [editorContent]);

	useEffect(() => {
		dispatch(initializeState());
	}, []);

	useEffect(() => {
		return () => {
			setAddNewForm(false);
			dispatch(initializeState());
		};
	}, []);

	return (
		//
		<ContainerColumn style={{ marginTop: '3em', width: '1300px' }}>
			<Header>새 모집 공고 추가하기</Header>
			<TitleKorean>지원서 양식</TitleKorean>
			<ApplicationLoadCard onClick={onClickLoadApplication}>
				{formError ? (
					<>
						<InnerContainer className="inner">
							<AddCircleOutlineIcon style={{ marginRight: '0.4em' }} />
							<ContentKorean style={{ fontSize: '1.1rem', paddingTop: '0.13em' }}>지원서 불러오기</ContentKorean>
						</InnerContainer>
					</>
				) : (
					<AppTitle style={{ fontSize: '1.1rem', paddingTop: '0.13em' }}>{recruitAddInfo.clubApplyFormTitle}</AppTitle>
				)}
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
					<RecruitInfo>1차 발표</RecruitInfo>
					<DatePicker
						locale="ko"
						selected={deadline.documentPassAnnounceDate}
						onChange={onChangeDocumentPassAnnounceDate}
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
						selected={deadline.finalPassAnnounceDate}
						onChange={onChangeFinalPassAnnounceDate}
						showTimeSelect
						injectTimes={times}
						customInput={<CustomDateInput />}
						dateFormat="yyyy.MM.dd aa h:mm"
					/>
				</ContainerRow>
			</ContainerColumn>
			<TitleKorean style={{ marginBottom: '1.3em' }}>모집 내용</TitleKorean>

			<Editor
				previewStyle="vertical"
				height="600px"
				initialEditType="wysiwyg"
				useCommandShortcut={true}
				ref={editorRef}
				hooks={{
					addImageBlobHook: async (blob, callback) => {
						const src = await uploadImage(blob);
						callback(src, 'alt_markdown_image');
						removeBase64();
						return false;
					}
				}}
			/>

			<SubmitButton style={{ marginTop: '2em' }} onClick={onSubmit}>
				모집 공고 등록하기
			</SubmitButton>

			<LoadApplicationModal
				applicationList={applicationList}
				show={showLoadApplicationModal}
				onCloseModal={onCloseModal}
				setFormError={setFormError}
			/>
			<ErrorMessage open={dateError} onCloseSnackbar={onCloseSnackbar} message="마감일은 시작일 이후여야 합니다." />
			<Footer />
			{/* <Prompt
				when={whenState}
				yes="확인"
				no="취소"
				message={(location) => {
					return location.pathname === '/recruit/success'
						? true
						: '작성 중인 정보가 모두 삭제됩니다. 정말 이동하시겠어요?';
				}}
			/> */}
		</ContainerColumn>
	);
};

export default RecruitAddPage;
