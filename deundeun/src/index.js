import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import ImageUploader from 'service/ImageUploader';
import ImageFileInput from 'components/common/ImageFileInput';
import { createStore } from '../node_modules/redux';
import rootReducer from 'modules/index';
import { composeWithDevTools } from '../node_modules/redux-devtools-extension';
import { Provider } from 'react-redux';
import SingleImageFileInput from 'components/common/SingleImageFileInput';

const imageUploader = new ImageUploader();
const FileInput = (props) => <ImageFileInput {...props} imageUploader={imageUploader} />;
const SingleFileInput = (props) => <SingleImageFileInput {...props} imageUploader={imageUploader} />;

const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<App FileInput={FileInput} SingleFileInput={SingleFileInput} />
		</BrowserRouter>
	</Provider >,
	document.getElementById('root')
);


