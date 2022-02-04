import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import { Provider } from 'react-redux';
import store from './store';
import * as serviceWorker from './serviceWorker';

// window.$ = $;
// import {BrowserRouter} from 'react-router-dom';

// ReactDOM.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,
//   el
// );

// global.jQuery = require('jquery');
/*  ==========================================
    SHOW UPLOADED IMAGE
* ========================================== */
// function readURL(input) {

//     if (input.files && input.files[0]) {
//         var reader = new FileReader();

//         reader.onload = function (e) {
//             ('#imageResult')
//                 .attr('src', e.target.result);
//         };
//         reader.readAsDataURL(input.files[0]);
//     }s
// }

// (function () {
//     ('#upload').on('change', function () {
//         readURL(input);
//     });
// });

/*  ==========================================
    SHOW UPLOADED IMAGE NAME
* ========================================== */
// var input = document.getElementById( 'upload' );
// var infoArea = document.getElementById( 'upload-label' );

// input.addEventListener( 'change', showFileName );
// function showFileName( event ) {
//   var input = event.srcElement;
//   var fileName = input.files[0].name;
//   infoArea.textContent = 'File name: ' + fileName;
// }

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// reportWebVitals();

serviceWorker.unregister();
