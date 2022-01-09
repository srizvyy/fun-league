import React, {useEffect, useState} from 'react'
import GameCard from './GameCard'



function GameContainer() {
    const [gameData, setGameData] = useState([])
    const [searchData, setSearchData] = useState(gameData)

    useEffect(() => {
        fetch('http://localhost:3000/games')
        .then(res => res.json())
        .then(game => setGameData(game))
    }, [])

    useEffect(() => {
        setSearchData(gameData)
    }, [gameData])

    function handleSearch (e) {
        const filtered = gameData.filter((game) => {
            return game.title.toLowerCase().includes(e.target.value )
        })
        setSearchData(filtered)
    }

        const handleClick = (genre) => {
        const updatedItems = gameData.filter((item) => {return item.genre === genre})
        setSearchData(updatedItems)
    }


    return (
        <div>
            <div id="btn-container">
            <button className='genre-btn' onClick={() => setSearchData(gameData)} >All Games</button>
            <button className='genre-btn' onClick={() => handleClick('Shooter')} >Shooter</button>
            <button className='genre-btn' onClick={() => handleClick('Sports')} >Sports</button>
            <button className='genre-btn' onClick={() => handleClick('MMORPG')}>MMORPG</button>
            <button className='genre-btn' onClick={() => handleClick('Card Game')}>Card Game</button>
            <button className='genre-btn' onClick={() => handleClick('Social')}>Social</button>
            <button className='genre-btn' onClick={() => handleClick('Fantasy')}>Fantasy</button>
            <button className='genre-btn' onClick={() => handleClick('Fighting')}>Fighting</button>
            </div>
            
            <input id='search-bar'  type="text" placeholder='Search...' onChange={handleSearch} />
            <div id='game-container'>
                {searchData.map((game) => {
                    return (
                        <GameCard game={game}/>
                    )
                })}
            </div>
        </div>
    )
}

export default GameContainer
