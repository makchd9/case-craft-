import React from 'react';
import {createRoot} from 'react-dom/client';
import {PublicPortfolio} from '../app/portfolio-sharing';
import Home from '../app/page';
import '../app/globals.css';
createRoot(document.getElementById('root')!).render(new URLSearchParams(location.search).get('portfolio')?<PublicPortfolio token={new URLSearchParams(location.search).get('portfolio')!}/>:<Home/>);
