import useTheme from "./hooks/useTheme";
import NavBar from "./components/NavBar";
import FooterBar from "./components/FooterBar";
import SongList from "./components/MusicPlayer/SongList";

import ThemeContext from "./contexts/ThemeContext";

import Login from "./components/Auth/Login";
import { useAuth } from "./contexts/AuthContext";
import { useState, useEffect } from "react";

function App() {
    const [theme, toggleTheme] = useTheme();
    const { isAuthenticated, token } = useAuth("state");

    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    useEffect(() => {
        if (isAuthenticated) {
            setCurrentPath("/songs");
        } else {
            setCurrentPath("/login");
        }
    }, [isAuthenticated]);

    console.log("Authenticated:", isAuthenticated);
    console.log("Token", token);

    return (
        <div className={`hero is-fullheight is-flex is-flex-direction-column`}>
            <ThemeContext.Provider value={{ theme, toggleTheme }}>
                <NavBar appName={"React Examples"} />
                <div className={`container`}>
                    {currentPath === "/login" ? <Login /> : <SongList />}
                </div>
                <FooterBar
                    appName={"React Examples"}
                    socialNetworks={[
                        { name: "facebook", url: "https://facebook.com" },
                        { name: "twitter", url: "https://twitter.com" },
                        { name: "instagram", url: "https://instagram.com" },
                    ]}
                />
            </ThemeContext.Provider>
        </div>
    );
}

export default App;
