// /* eslint-disable react-hooks/exhaustive-deps */

// 'use client';

// import React, { useEffect, useState } from 'react';
// import Link from 'next/link';
// import { Button } from 'react-bootstrap';
// import { getAuthors } from '../../api/authorData';
// import { useAuth } from '../../utils/context/authContext';

// function Home() {
//   // TODO: Set a state for books
//   const [books, setAuthors] = useState([]);

//   // TODO: Get user ID using useAuth Hook
//   const { user } = useAuth();

//   // TODO: create a function that makes the API call to get all the books
//   const getAllTheAuthors = () => {
//     getAuthors(user.uid).then(setAuthors);
//   };

//   // TODO: make the call to the API to get all the books on component render
//   useEffect(() => {
//     getAllTheAuthors();
//   }, []);

//   return (
//     <div className="text-center my-4">
//       <Link href="/book/new" passHref>
//         <Button>Add An Author</Button>
//       </Link>
//       <div className="d-flex flex-wrap">
//         {/* TODO: map over books here using BookCard component */}
//         {books.map((book) => (
//           <AuthorCard key={book.firebaseKey} bookObj={book} onUpdate={getAllTheAuthors} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Home;
