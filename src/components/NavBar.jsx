import appLogo from "../assets/react.svg";
import NavMenu from "./NavMenu";

function NavBar({ appName, theme, toggleTheme }) {
    const backgroundClassName = "has-background-" + theme;

    let textClassName = "has-text-";

    if (theme === "dark") {
        textClassName += "light";
    } else {
        textClassName += "dark";
    }

    const className = backgroundClassName + " " + textClassName;

    return (
        <header>
            <nav
                className={"navbar " + className}
                role="navigation"
                aria-label="main navigation"
            >
                <div className="navbar-brand">
                    <div className="columns is-vcentered">
                        <a className="navbar-item column" href="/">
                            <img
                                src={appLogo}
                                alt="App Logo"
                                className="image is-64x64"
                            />
                        </a>
                        <p className="column">{appName}</p>
                    </div>
                </div>
                <NavMenu
                    items={[
                        { text: "Home", url: "#home" },
                        { text: "About", url: "#about" },
                        { text: "Contact", url: "#contact" },
                    ]}
                    theme={theme}
                />
                <button
                    className={`button is-small is-${
                        theme === "dark" ? "light" : "dark"
                    }`}
                    onClick={toggleTheme}
                >
                    Cambiar tema
                </button>
            </nav>
        </header>
    );
}

export default NavBar;
