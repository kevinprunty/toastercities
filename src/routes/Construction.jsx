// Asset imports 
import constructionLogo from '../assets/toasterconstruction.png';


function Construction(){

  return (
    <div className="App">
      <header className="App-header">
        <img src={ constructionLogo } className="const-logo" alt="logo" />
        <h1>
          under toaster construction
        </h1>
        <div className="enterButton">
          Enter the Construction Zone
        </div>
      </header>
    </div>  
  )

}

export default Construction;