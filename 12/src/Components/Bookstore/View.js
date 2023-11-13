import React from "react";
import "./View.css";
import { Icon } from "react-icons-kit";
import { trash } from "react-icons-kit/feather/trash";

export default function View({ books }) {
  return (
    books.map((book) => 
    <tr className="list-tr">
      <td>{book.number}</td>
      <td>{book.title}</td>
      <td>{book.author}</td>
      <td>
        <Icon icon={trash} className="trash-icon" />
      </td>
    </tr>
  )
  )
}
