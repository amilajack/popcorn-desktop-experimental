/**
 * Card in the CardList component
 */
import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import Rating from './Rating';


export default function Card({ type, image, id, rating, title, starColor }) {
  const placeholder =
    '../../images/posterholder.png';

  const divStyle = {
    backgroundImage: `url(${image !== 'N/A' ? image : placeholder})`
  };

  return (
    <div className="Card">
      <Link to={`/item/${type}/${id}`}>
        <div className="Card--overlay-container" style={divStyle}>
          <div className="Card--overlay" />
        </div>
      </Link>
      <div className="Card--descrption">
        <Link className="Card--title" to={`/item/${type}/${id}`}>
          {title}
        </Link>
        <div>
          {rating !== 'n/a'
            ? <Rating starColor={starColor} rating={rating} />
            : null}
        </div>
        {type === 'search'
          ? <div>Kind: {type}</div>
          : null}
      </div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  starColor: PropTypes.string,
  image: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  rating: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]).isRequired,
  type: PropTypes.string.isRequired
};

Card.defaultProps = {
  starColor: '#848484'
};
