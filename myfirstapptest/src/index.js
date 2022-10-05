import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App, {App2} from './App2';
import reportWebVitals from './reportWebVitals';
import Layout from './Layout';

const printMessage=()=>{
  document.getElementById('show-area').innerHTML="我被按到了";
}



var name="舊的名子";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Layout>
      <App name="我的名子" handleClick={printMessage}> 在 index.js中設定文字 </App>
      <div id="show-area"></div>
      <App2 />
    </Layout>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
