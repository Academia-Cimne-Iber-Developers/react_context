import useTheme from "./hooks/useTheme";
import NavBar from "./components/NavBar";
import FooterBar from "./components/FooterBar";
import SongList from "./components/MusicPlayer/SongList";

function App() {
    const [theme, toggleTheme] = useTheme();

    return (
        <div className={`hero is-fullheight is-flex is-flex-direction-column`}>
            <NavBar
                appName={"React Examples"}
                theme={theme}
                toggleTheme={toggleTheme}
            />
            <div className={`container`}>
                <SongList theme={theme} />
            </div>
            <FooterBar
                appName={"React Examples"}
                socialNetworks={[
                    { name: "facebook", url: "https://facebook.com" },
                    { name: "twitter", url: "https://twitter.com" },
                    { name: "instagram", url: "https://instagram.com" },
                ]}
                theme={theme}
            />
        </div>
    );
}

export default App;
