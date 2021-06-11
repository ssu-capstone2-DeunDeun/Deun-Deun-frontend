import React from 'react';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import ImageResize from 'quill-image-resize';
Quill.register('modules/ImageResize', ImageResize);

const modules = {
	toolbar: [
		[{ header: [1, 2, false] }],
		['bold', 'italic', 'underline', 'strike', 'blockquote'],
		[{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
		['image'],
		[{ align: [] }, { color: [] }, { background: [] }], // dropdown with defaults from theme
		['clean']
	],
	ImageResize: {
		parchment: Quill.import('parchment')
	}
};

const TextEditor = () => {
	return (
		//
		<ReactQuill style={{ height: '500px', marginBottom: '5em', marginTop: '1em' }} modules={modules} theme="snow" />
	);
};

export default TextEditor;
