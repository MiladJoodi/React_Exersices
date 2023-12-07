import React from 'react'

export default function Table({data}) {
  return (
    <table>
        <tbody>
            <tr>
                <th>نام</th>
                <th>نام خانوادگی</th>
                <th>ایمیل</th>
            </tr>
            {data.map((item)=> (
                <tr key={item.id}>
                    <td>{item.first_name}</td>
                    <td>{item.last_name}</td>
                    <td>{item.email}</td>
                </tr>
            ))}
        </tbody>
    </table>
  )
}
