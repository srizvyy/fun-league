import React, {useEffect, useState} from 'react'
import GameCard from './GameCard'

function GameContainer() {
    const [gameData, setGameData] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/games')
        .then(res => res.json())
        .then(game => setGameData(game))
    }, [])

    return (
        <div>
            <div id='game-container'>
                {gameData.map((game) => {
                    return (
                        <GameCard game={game}/>
                    )
                })}
            </div>
        </div>
    )
}

export default GameContainer
