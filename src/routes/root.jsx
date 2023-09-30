import { Outlet,  } from "react-router-dom";
import '../App.css';
export default function Root() {
    return (
      <>
        <h1>Hello World</h1>
        <Outlet /> 
      </>
    );
  }