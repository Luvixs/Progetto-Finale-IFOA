import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { SuitHeart, SuitHeartFill } from 'react-bootstrap-icons'
import { useSelector, useDispatch } from 'react-redux'
import {
  addToFavouriteAction,
  removeFromFavouriteAction,
} from '../redux/actions'

const Job = ({ data }) => {
  const favourites = useSelector((state) => state.favourite.list)
  const dispatch = useDispatch()

  const isFav = favourites.includes(data.company_name)

  return (
    <Row
      className="mx-0 mt-3 p-3"
      style={{ boxShadow: 'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px',  borderRadius: 8 }}
    >
      <Col xs={3}>
        {isFav ? (
          <SuitHeartFill
            color="#db9605"
            size={16}
            className="mx-3 my-auto"
            onClick={() =>
              dispatch(removeFromFavouriteAction(data.company_name))
            }
          />
        ) : (
          <SuitHeart
            color="#db9605"
            size={16}
            className="mx-3 my-auto"
            onClick={() => dispatch(addToFavouriteAction(data.company_name))}
          />
        )}
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={9}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
    </Row>
  )
}

export default Job
