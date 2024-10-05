'use client';

import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import { deleteSingleAuthor } from '../api/authorData';

function AuthorCard({ authorObject, onUpdate }) {
  // FOR DELETE, WE NEED TO REMOVE THE AUTHOR AND HAVE THE VIEW RERENDER,
  // SO WE PASS THE FUNCTION FROM THE PARENT THAT GETS THE AUTHORS
  const deleteThisAuthor = () => {
    if (window.confirm(`Delete ${authorObject.first_name} ${authorObject.last_name}?`)) {
      deleteSingleAuthor(authorObject.firebaseKey).then(() => onUpdate());
    }
  };

  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Body>
        <Card.Title>
          {authorObject.first_name} {authorObject.last_name}
        </Card.Title>
        <p className="card-text bold">
          {authorObject.favorite && (
            <span>
              🤍
              <br />
            </span>
          )}{' '}
          {authorObject.email}
        </p>
        {/* DYNAMIC LINK TO VIEW THE AUTHOR DETAILS  */}
        <Link href={`/authors/${authorObject.firebaseKey}`} passHref>
          <Button variant="primary" className="m-2">
            VIEW
          </Button>
        </Link>
        {/* DYNAMIC LINK TO EDIT THE AUTHOR DETAILS  */}
        <Link href={`/authors/edit/${authorObject.firebaseKey}`} passHref>
          <Button variant="info">EDIT</Button>
        </Link>
        <Button variant="danger" onClick={deleteThisAuthor} className="m-2">
          DELETE
        </Button>
      </Card.Body>
    </Card>
  );
}

AuthorCard.propTypes = {
  authorObject: PropTypes.shape({
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    favorite: PropTypes.bool,
    email: PropTypes.string,
    firebaseKey: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default AuthorCard;
