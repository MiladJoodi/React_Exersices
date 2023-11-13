import React from 'react'
import './Book.css'
import { Icon } from "react-icons-kit";
import { trash } from "react-icons-kit/feather/trash";

export default function Book({books, deleteHandler}) {
  return (
    books.map((book)=> 
                <tr key={book.number}>
                    <td>{book.number}</td>
                    <td>{book.title}</td>
                    <td>{book.author}</td>
                    <td className="delete-icon" onClick={()=>deleteHandler(book.number)}>
                      <Icon icon={trash} />
                    </td>
                </tr>
    )
  )
  
}
