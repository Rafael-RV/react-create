import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
//import { HookExample } from './components/HookExample'
//import { List } from './components/Lista'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <React.StrictMode>
 {/* <HookExample/> */}
 {/* <List/> */}
 <App/>
  </React.StrictMode>
  </BrowserRouter>
)
