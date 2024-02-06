import React from 'react'
import { useState,useEffect } from 'react';
import './App.css';

const simage = "https://image.tmdb.org/t/p/w500"
function GetPopularFilms() {
    const [search,setSearch] = useState('')
    // console.log(search);
    const[prod,setProd] = useState([])
    useEffect(()=>{
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=9b702a6b89b0278738dab62417267c49")
    .then((res)=>res.json())
    .then(data=>setProd(data.results))
    },[])
// console.log(prod);
    return (
        <div className='container'>
            <input type='text' onChange={(e) => setSearch(e.target.value)} className='inp' placeholder='Search Films'/>
            <div className=''>
                <table>
                    <tbody className='container'>
                        {
                            prod.filter((user)=>{
                                return search.toLowerCase() === '' ? user : user.title.toLowerCase().includes(search)
                            }).map((user,item) =>{
                                return <tr key={user.id}>
                                    <div className='flex'>
                                        <div className='style'>
                                        <img src={simage+user.backdrop_path} className='img'/>
                                        <td className='text1'>{user.title}</td>                                        
                                        </div>
                                    </div>

                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default GetPopularFilms;