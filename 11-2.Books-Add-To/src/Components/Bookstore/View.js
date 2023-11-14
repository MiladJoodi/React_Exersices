import React from "react";
import "./View.css";
import { Icon } from "react-icons-kit";
import { trash } from "react-icons-kit/feather/trash";
import {spinner8} from 'react-icons-kit/icomoon/spinner8'
import DeleteLoading from "../Loading/DeleteLoading";


export default function View({ books, deleteHandler, deleteLoading }) {
  return (
    books.map((book) => 
    <tr className="list-tr" key={book.number}>
      <td>{book.number}</td>
      <td>{book.title}</td>
      <td>{book.author}</td>
      <td>
        {deleteLoading ?
        <DeleteLoading />
        :
        <Icon
        icon= {trash}
        className="trash-icon"
        onClick={()=> deleteHandler(book.number)} 
        />
      }
      </td>
    </tr>
  )
  )
}
