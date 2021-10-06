import React from 'react';
import ReactDOM from 'react-dom';
//import BoogleSearch from './BoogleSearch';
import AlexisSearch from './AlexisSearch'
import { useState } from 'react';



  //const [movies, setMovies] = useState([]);
  //const [isLoading, setIsLoading] = useState(false);
  //const [value, setValue] = useState('');
  //const [searchTerm, setSearchTerm] = useState("")
    const now = new Date();
    //document.getElementById("DateString").innerHTML =datum.toDateString();
//javascript months 0=jan
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



function AdvancedSearch() {
    const [Search, setMySearch] = useState("Alla");
  
    const handleChange = (event) => {
        setMySearch(event.target.value)
    }
  
    return (
      <form>
        <select value={setMySearch} onChange={handleChange}>
          <option value="AraGDPRBLANKsto">AraGDPRBLANKsto</option>
          <option value="AleGDPRblankxis">AleGDPRBLANKxis</option>
          <option value="RobGDPRBLANKin">RobGDPRBLANKin</option>
          <option value="HasGDPRBLANKeman">HasGDPRBLANKeman</option>
          <option value="Alla">Alla</option>

        </select>
      </form>
    )
  }



function SearchForm() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
    

    
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Search:
      <input 
        type="search" 
        value={inputs.submit || ''}
        onchange={handleChange} 
      />

}

<br></br>

<br/>
<br/>
AlexisSearch<input type="text" onchange="AlexisSearch().textbox"/>
<br/>
<input type="month" oninput="myFunction(this.value)"/>
<input type="week" oninput="myFunction(this.value)"/>
<input type="time" oninput="myFunction(this.value)"/>


<br/>


      </label>
      <label>När:
        <input 
          type="range"
          min="0"
          max="2021"
          value="now"
          class="slider" 
          name="date" 
          value={inputs.date || (now).toDateString()} 
          onChange={handleChange}
        />
        </label>
        <input type="submit" />
    </form>
  )
}



ReactDOM.render(<SearchForm />, document.getElementById('search'));
<br></br>
ReactDOM.render(<AdvancedSearch />, document.getElementById('root'))
