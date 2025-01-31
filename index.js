import React, {useEffect,useState} from 'react';
import ReactDOM from 'react-dom/client';
import Head from './head.js';
import Body from './body.js';



function App() {
  return (
    <>
    <Head/>


    <Body/>
      
    </>
  );
}


ReactDOM.createRoot(document.getElementById('root')).render(<App/>);