import { Outlet,  } from "react-router-dom";
import { useEffect } from "react";

import '../App.css';
import './root.css';
import settings from '../util/settings.json';



import WebFont from 'webfontloader';

console.log(settings.fonts);


export default function Root() {

    useEffect(()=>{
        // Load fonts
        WebFont.load(
            {
                google: {
                    families: settings.fonts
                }
            }
        );
    },[]);


    return (
      <>
        <header className="main-header">
            <h1>ToasterBrains</h1>
        </header>
        <Outlet /> 
      </>
    );
  }