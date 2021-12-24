import React from 'react'
// import pixelMe from './assets/character.gif'

export default function Nav(props) {
    return (
        <div>
            <nav>
                <a onClick={() => props.setPage("home")}>Home</a>
                <div className='nav-spacer'></div>
                <a onClick={() => props.setPage("projects")}>Projects</a>
                <a onClick={() => props.setPage("portfolio")}>Portfolio</a>
                <a onClick={() => props.setPage("resume")}>Resume</a>
            </nav>
        </div>
    )
}
