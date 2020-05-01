import React, { useContext } from "react"

import { BooklistContext } from "./BooklistContext";

import '../../index.css';


const BookList = () => {
  const [state, setState] = useContext(BooklistContext);
  return (
    <>
      {state.books.map((books, index) => (
	        <div key={index.toString()}>
	        <table>
            <tbody >
            <tr>
            <td>{books.name} -- {books.author} -- {books.isbn}</td>
            </tr>
            </tbody>
            </table>
            </div>
      ))}
    </>
  )
}

export default BookList
