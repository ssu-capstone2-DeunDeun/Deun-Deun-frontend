import ApplyForm from 'components/apply/ApplyForm';
import BasicTemplate from 'components/common/BasicTemplate';
import { getClubInfo } from 'lib/api/auth';
import { getApplyForm } from 'modules/currentApplyForm';
import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getApplyForms } from 'lib/api/apply';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';

const ApplyPage = ({ match }) => {

    const { clubName } = match.params;
    const [clubInfo, setClubInfo] = useState(null);
    let categoryType = null;
    const dispatch = useDispatch();
    const { applyForm } = useSelector(({ currentApplyForm }) => ({
        applyForm: currentApplyForm.getApplyForm,
    }))

    if (clubInfo) {
        categoryType = clubInfo.data.clubResponseDto.categoryType;
    }

    useEffect(() => {
        async function loadClubInfo() {
            await getClubInfo(clubName).then(response => {
                setClubInfo(response);
            });
        };
        loadClubInfo();
    }, [clubName]);

    useEffect(() => {
        dispatch(getApplyForm(clubName));
    }, [clubName, dispatch]);

    return (
        <BasicTemplate categoryType={categoryType} clubName={clubName}>
            {applyForm && <ApplyForm applyForm={applyForm} />}
        </BasicTemplate>
    );
};

export default withRouter(ApplyPage);
