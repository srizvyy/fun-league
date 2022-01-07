import React from 'react'
import {Link} from 'react-router-dom'

function TopNav() {
    return (
        <div>
            <ul>
                <Link className='link' to='/'><li className='nav-btns'>Home</li></Link>
                <Link className='link' to='about'><li className='nav-btns'>About</li></Link>
                <Link className='link' to='create-form'><li className='nav-btns'>Add New Game</li></Link>
                <Link className='link' to='contact-us'><li className='nav-btns'>Contact us</li></Link>
            </ul>
        </div>
    )
}

export default TopNav
