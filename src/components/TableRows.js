import React from 'react'
import {useEffect, useState } from 'react'
import {getLinks} from "../api/fontendAPI"


const TableRows = (props) => {
    const [linkLists, setLinksLists] = useState([]);

    useEffect( () => {
        setLinksLists([])
        getLinks().then(setLinksLists, console.error)
    
      }, []);

    return linkLists.map(({ comment, link, id, clickcount, tags, createDate }) => {
        return (
            <tr key={id}>
                <td>{link}</td>
                <td>{clickcount} </td>
                <td>{comment}</td>
                <td>{tags}</td>
                <td>{createDate}</td>
               
            
             
                <td className='opration'>
                    <button className='button' >Delete</button>
                    <button className='button' >Edit</button>
                </td>
            </tr>
        )
    })
  }
  



export default TableRows