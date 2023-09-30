import "./menu.css";
import MessageLog from "./MessageLog";

function Menu() {
  return (
    <>
      <div className="menu-container">
        <section className="menu-left">
          <nav className="menu-commands-list">
            <ul className="menu-commands">
              <li className="prevent-select">Attack</li>
              <li className="prevent-select">Skills</li>
            </ul>
          </nav>
        </section>
        <section className="menu-right">
          <MessageLog />
        </section>
      </div>
    </>
  )
}

export default Menu