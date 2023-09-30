import { Link } from 'react-router-dom';
// Asset imports 
import './Construction.css';
import constructionLogo from '../assets/toasterconstruction.png';


function Construction(){

  return (
    <div className="Construction flex-column">

      <img src={ constructionLogo } className="const-logo" alt="logo" />
      <h1>
        under toaster construction
      </h1>
      <Link className="button-link" to="/fight">
        <div className="enter-button prevent-select">
          Enter the Construction Area
        </div>
      </Link>
      
      
    </div>  
  )

}

export default Construction;