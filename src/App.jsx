import useTheme from "./hooks/useTheme";
import NavBar from "./components/NavBar";
import FooterBar from "./components/FooterBar";
import SongList from "./components/MusicPlayer/SongList";

import ThemeContext from "./contexts/ThemeContext";

function App() {
    const [theme, toggleTheme] = useTheme();

    return (
        <div className={`hero is-fullheight is-flex is-flex-direction-column`}>
            <ThemeContext.Provider value={{ theme, toggleTheme }}>
                <NavBar appName={"React Examples"} />
                <div className={`container`}>
                    <SongList />
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
