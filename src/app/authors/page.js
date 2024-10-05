/* eslint-disable react-hooks/exhaustive-deps */

'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import { useAuth } from '@/utils/context/authContext';
import { getAuthors } from '@/api/authorData';
import AuthorCard from '@/components/AuthorCard';

function AuthorsPage() {
  // TODO: Set a state for authors
  const [authors, setAuthors] = useState([]);

  // TODO: Get user ID using useAuth Hook
  const { user } = useAuth();

  // TODO: create a function that makes the API call to get all the authors
  const getAllTheAuthors = () => {
    getAuthors(user.uid).then(setAuthors);
  };

  // TODO: make the call to the API to get all the authors on component render
  useEffect(() => {
    getAllTheAuthors();
  }, []);

  return (
    <div className="text-center my-4">
      <Link href="/authors/new" passHref>
        <Button>Add An Author</Button>
      </Link>
      <div className="d-flex flex-wrap">
        {/* TODO: map over authors here using AuthCard component */}
        {authors.map((author) => (
          <AuthorCard key={author.firebaseKey} authorObject={author} onUpdate={getAllTheAuthors} />
        ))}
      </div>
    </div>
  );
}

export default AuthorsPage;
