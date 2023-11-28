import React, { useEffect } from 'react'
import './App.css';
import axios from 'axios';

function App() {

    useEffect(() => {

        const getMovies = async () => {

            // let res = await fetch('http://www.omdbapi.com/?apikey=920dde9b&', {
            //     method: 'delete'
            // });

            // let data = await res.json();

            // 'http://www.omdbapi.com/?i=tt3896198&apikey=920dde9b'

            let res = await axios.get('http://www.omdbapi.com/?apikey=920dde9b&')
            console.log(res.data);
            
        }

        getMovies();

    },[])

    return (
        <div className="App-header">
            App
        </div>
    )
}

export default App