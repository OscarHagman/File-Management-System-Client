import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';

const AlexisSearch = () => {

  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [value, setValue] = useState('');
  const [searchTerm, setSearchTerm] = useState("")


  function onChange(e) {
    e.preventDefault();
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setMovies(data);
        setIsLoading(false);
      } catch (e) {

       console.error(e.meassage)
      }
    };
    fetchData();
  }, []);
  return (
      <div>
         <input padding="1em" placeholder="Search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
          {isLoading ? <h1>Is loading</h1> : 
          movies.map(movie => {
           return <li>{movie.name}</li>
         })}
      </div>
  );
}

export default AlexisSearch;
/*useState ger en en variabel för state, och en metod för att sätta state ex: const [movies, setMovies] = useState([])
 sen bryter vi ned det i mindre komponenter, så när vi kör return <li>{movie.name}</li>
så ska man istället ha en komponent som endast är till för att style:a movies i listan
[15:12]
return <Movie data={data} />
[15:12]
och i components/Movie
[15:12]
const Movie = ({data}) => { return <div> <h2>{data.title}</h2></div>};
[15:13]
och sen importera den i filen som den ska användas i
*/
