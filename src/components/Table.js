import React from 'react'
import '../components/table.css'
const Table=({data})=>{
    console.log(data)
    return(
        <table>
         <tbody>
           {
                data.map((numList,i) =>(
                   <tr key={i}>
                    {
                      numList.map((num,j)=>
                      <td key={j}>{num}</td>
                      )
                    }
                   </tr>
                ))
           }
         </tbody>
       </table>
    )
}
export default Table;
