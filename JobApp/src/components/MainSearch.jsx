import { useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import Job from './Job'
import { useSelector, useDispatch } from 'react-redux'
import { getJobsAction } from '../redux/actions'

const MainSearch = () => {
  const [query, setQuery] = useState('')

  const navigate = useNavigate()

  const jobs = useSelector((state) => state.job.results)
  const dispatch = useDispatch()

  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    dispatch(getJobsAction(query))
  }

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3" >
          <h1>Remote Jobs Search</h1>
          <Button className="btn btn-success my-2" onClick={() => navigate('/favourites')} style={{boxShadow: 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px'}}>Favourites</Button>
        </Col>
        <Col xs={10} className="mx-auto px-0" style={{ boxShadow: 'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px' }}>
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              value={query}
              onChange={handleChange}
              placeholder="type and press Enter"
            />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5" >
          {jobs.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  )
}

export default MainSearch
