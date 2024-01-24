import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from "react"

const Search = ({searchWeather}) => {
    const [city, setCity] = useState('')
    return(
        <Form className="d-flex">
        <Form.Control
          type="text"
          placeholder="City"
          className="ms-5 me-2 mt-3"
          aria-label="Search"
          value={city}
          onChange={(e)=>setCity(e.target.value)}
        />
        <Button variant="outline-light" className='mt-3 me-5' onClick={()=>searchWeather(city)}>Search</Button>
      </Form>
    )
}

export default Search