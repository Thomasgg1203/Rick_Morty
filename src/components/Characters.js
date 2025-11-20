export default function Characters(props) {

    //destruccion de caracteres(dividirlos)
    const { characters, setCharacters } = props;

    const resetCharacters = () => {
        setCharacters(null);
      };
  return (
    <div className="characters">
        <h1>personajes</h1>
        <span className="back-home" onClick={resetCharacters}>Volver a la home</span>
        <div className="container-characters">
            { characters.map((character, index) => (//con parentesis es un return implicito
                <div className="character-container" key={index}>
                    <div>
                        <img src={ character.image } alt={character.name}></img>
                    </div>
                    <div>
                        <h3> { character.name } </h3>
                        <h6>
                            { character.status === "Alive" ? (
                                <>
                                <span className="alive">Alive</span>
                                </>
                            ) : (
                                <>
                                <span className="dead">Dead</span>
                                </>
                            )}
                        </h6>
                        <p>
                            <span className="text-grey">Episodios: </span>
                            <span>{character.episode.length}</span>
                        </p>
                        <p>
                            <span className="text-grey">Especie: </span>
                            <span>{character.species}</span>
                        </p>
                    </div>
                </div>
            )) }
        </div>
        <span className="back-home" onClick={resetCharacters}>
            Volver a la home
        </span>
    </div>
  )
}
