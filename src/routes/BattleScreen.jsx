import Menu from "../components/Menu"
import enemy from "../assets/toasterconstruction.png";

import backgroundSVG from '../assets/battle-background.svg';

import './BattleScreen.css';

const battleBackgroundStyles = {
    backgroundImage: `url(${backgroundSVG})`
}

function BattleScreen() {
  return (
    <div className="Battle-Screen">
        <div className="battle-view flex-column" style={battleBackgroundStyles}>
            <img src={enemy} alt="enemy" className="enemy" />
            <h1>Constructoaster</h1>
        </div>

        <section className="battle-menu flex-column">
            <Menu />
        </section>

    </div>
  )
}

export default BattleScreen