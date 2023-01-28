import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'

const Books = () => {
    const [books, setBooks] = useState([])

    useEffect(() => {
        const fetchAllBooks = async () => {
            try{
                const res = await axios.get('http://localhost:8080/books/')
                console.log(res)
            }catch(err){
                console.log(err)
            }
        } 
    },[])
    
  return (
    <div>
      Books test
    </div>
  )
}

export default Books
