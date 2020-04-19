import React, { useContext } from "react"

import { BooklistContext } from "./BooklistContext";

import '../../index.css';


const BookList = () => {
  const [state, setState] = useContext(BooklistContext);
  return (
    <>
      <h4> I replaced the booklist functionality with a provider </h4>
      <h5> I dont know how to get rid of the  "return(...)" </h5>
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
