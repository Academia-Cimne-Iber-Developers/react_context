import useFetch from "../../hooks/useFetch";
import SongCard from "./SongCard";

function SongList({ theme }) {
    const [songs, isError, isLoading] = useFetch(
        "https://sandbox.academiadevelopers.com/harmonyhub/songs/"
    );

    if (isLoading) return <p>Cargando...</p>;
    if (isError) return <p>Error al cargar las canciones.</p>;
    if (!songs) return <p>No hay canciones disponibles</p>;

    return (
        <div>
            <div className="my-5">
                <h2 className="title">Lista de Canciones</h2>
                <ul>
                    {songs.map((song) => (
                        <div key={song.id} className="column is-two-third">
                            <SongCard song={song} theme={theme} />
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default SongList;
