import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import styles from "./style";

import { Navbar, Footer } from "./components";

import './index.css'
import {BrowserRouter} from "react-router-dom"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <BrowserRouter> 
     <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
              <Navbar />
            </div>
          </div>
        <App />
        <Footer />
     </BrowserRouter>
   
  </React.StrictMode>
)
