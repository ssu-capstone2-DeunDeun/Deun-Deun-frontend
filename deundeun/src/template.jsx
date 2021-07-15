import React from 'react';

const Template = () => {
	return (
		//
		<h1>Template</h1>
	);
};

export default Template;

////////////////////////////////////////////

const Template = useCallback((e) => {}, []);

axios({
	method: 'post',
	url: `${API_BASE_URL}/club/recruit/${id}/applies`,
	data: data,
	headers: {
		Authorization: 'Bearer ' + localStorage.getItem(ACCESS_TOKEN)
	}
}).then((response) => {
	const res = response.data;
	console.log(res);
	history.push('/apply/success');
});
