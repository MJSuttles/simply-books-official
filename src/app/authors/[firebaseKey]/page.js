'use client';

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getAuthorBooks } from '../../../api/authorData';
import { viewAuthorDetails } from '../../../api/mergedData';
import BookCard from "../../../components/BookCard";

export default function ViewAuthor({ params }) {
  const [authorDetails, setAuthorDetails] = useState({});
  const [authorBooks, setAuthorBooks] = useState([]);

  // grab firebaseKey from url
  const { firebaseKey } = params;

  // make call to API layer to get the data
  useEffect(() => {
    viewAuthorDetails(firebaseKey).then(setAuthorDetails);
    getAuthorBooks(firebaseKey).then(setAuthorBooks);
  }, [firebaseKey]);

  const getSpecificBooks = () => {
    getAuthorBooks(firebaseKey).then(setAuthorBooks);
  };

  return (
    <div className="mt-5 d-flex flex-wrap">
      <div className="text-white ms-5 details">
        <h5>
          {authorDetails.first_name} {authorDetails.last_name}
          {authorDetails.favorite ? ' 🤍' : ''}
        </h5>
        Author Email: <a href={`mailto:${authorDetails.email}`}>{authorDetails.email}</a>
        <hr />
        <div className="d-flex flex-wrap">
          {authorBooks.map((book) => (
            <BookCard key={book.firebaseKey} bookObj={book} onUpdate={getSpecificBooks} />
          ))}
        </div>
      </div>
    </div>
  );
}

ViewAuthor.propTypes = {
  params: PropTypes.objectOf({}).isRequired,
};
