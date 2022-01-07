import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function CreateNewGameForm() {
   const navigate = useNavigate()

    const [newGame, setNewGame] = useState({
        title: '',
        thumbnail: '',
        short_description: '',
        genre: '',
        platform: '',
        release_date: ''
    })

    function handleFormSubmit (e) {
        e.preventDefault()
        fetch('http://localhost:3000/games', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: newGame.title,
                thumbnail: newGame.thumbnail,
                short_description: newGame.short_description,
                genre: newGame.genre,
                platform: newGame.platform,
                release_date: newGame.release_date
            })
        })
        .then(res => {
            if (res.ok) {
                res.json().then(data => {
                    console.log(data)
                    navigate('/')
                })
            }
        })
    }

    function handleFormChange (e) {
        setNewGame({
            ...newGame, 
            [e.target.name]: e.target.value 
        })
    }

    return (
        
             <div>
            <h2 className='new-form'>Add New Game</h2>
            <form id='project-form' onSubmit={handleFormSubmit}>
                <input className='create-new-card' type="text" placeholder='Title' name='title' onChange={handleFormChange} value={newGame.title}/>
                <input className='create-new-card' type="text" placeholder='Image url' name='thumbnail' onChange={handleFormChange} value={newGame.thumbnail} />
                <textarea id='text-area' className='create-new-card' type="text" placeholder='Description' name='short_description' onChange={handleFormChange} value={newGame.short_description}/>
                <input className='create-new-card' type="text" placeholder='Genre' name='genre' onChange={handleFormChange} value={newGame.genre}/>
                <input className='create-new-card' type="text" placeholder='Platform' name='platform' onChange={handleFormChange} value={newGame.platform}/>
                <input className='create-new-card' type="text" placeholder='Release Date' name='release_date' onChange={handleFormChange} value={newGame.release_date}/>
                <button id='create-new-game-button' type='submit'>Submit</button>
            </form>
        </div>
        
    )
}

export default CreateNewGameForm
