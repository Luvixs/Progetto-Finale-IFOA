import {
  Container,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  Button,
} from 'react-bootstrap'
import { SuitHeartFill } from 'react-bootstrap-icons'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { removeFromFavouriteAction } from '../redux/actions'

const Favourites = () => {
  const favourites = useSelector((state) => state.favourite.list)
  const dispatch = useDispatch()

  const navigate = useNavigate()

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1>Favourites</h1>
          <Button className="btn btn-success my-2" style={{boxShadow: 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px'}} onClick={() => navigate('/')}>Home</Button>
        </Col>
        <Col xs={10} className="mx-auto px-0" style={{ boxShadow: 'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px',  borderRadius: 8 }}>
          <ListGroup>
            {favourites.map((fav, i) => (
              <ListGroupItem key={i}>
                <SuitHeartFill
                  className="mx-3"
                  color="#db9605"
                  onClick={() => dispatch(removeFromFavouriteAction(fav))}
                />
                <Link to={'/' + fav}>{fav}</Link>
              </ListGroupItem>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  )
}

export default Favourites
