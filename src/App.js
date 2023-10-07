import { useState } from 'react';
import './App.css';
import imgRickMorty from './img/rick-morty.png';
import Characters from './components/Characters';

function App() {
  const [characters, setCharacters] = useState(null);
  const reqApi = async () => {
      const api = await fetch('https://rickandmortyapi.com/api/character');
      const characterApi = await api.json();
      setCharacters(characterApi.results);
  }
  console.log(characters)

  return (
    <div className="App">
      <header className="App-header">
        <h1 className='title'>Rick & Morty</h1>
        {/* Verificar que la api esten llegando los datos como son */}
        {characters ? (
          <Characters characters={characters} setCharacters={setCharacters} />
        ) : (
          <>
          <img src={imgRickMorty} alt='RickAndMorty' className='img-home'></img>
          <button onClick={reqApi} className='btn-search'>Buscar personajes</button>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
