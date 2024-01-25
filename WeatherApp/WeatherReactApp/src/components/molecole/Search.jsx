import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from "react"

//come prop passo la funzione che gestisce la ricerca quando viene premuto il button
const Search = ({searchWeather}) => {
    const [city, setCity] = useState('') //useState gestisce la variabile city, valore inserito dall'utente nella barra search

    const handleKeyPress = (e) => {
      e.preventDefault();
      if (e.code === 'Enter') {
        // Se l'utente preme il tasto "Invio"
        searchWeather(city);
      }
    };
    return(
        <Form className="d-flex" onSubmit={(e)=>handleKeyPress(e)}>
        <Form.Control
          type="text"
          placeholder="City"
          className="ms-5 me-2 mt-3"
          aria-label="Search"
          value={city}
          onChange={(e)=>setCity(e.target.value)} //gestore di eventi che aggiorna la variabile city ogni volta che il contenuto della casella di testo cambia
          onKeyUp={(e)=>handleKeyPress(e)}
        />
         <Button variant="outline-light" className='mt-3 me-5' onClick={()=>searchWeather(city)}>Search</Button> {/*chiama la funzione searchWeather passando il valore attuale della variabile city come argomento */}
      </Form>
    )
}

export default Search