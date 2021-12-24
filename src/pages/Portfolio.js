import React from 'react'
import YoutubeEmbed from "../utils/YoutubeEmbed";

export default function Portfolio() {
    const projects = [
        {
            title: "Bullet Express",
            description: "A personal project i am working on for over a year fueled solely by passion.\nA full-fledged rouge-lite video game where you have six uniqe guns which can be merged with each other creating 30 hand-crafted guns to explore.",
            extra_info: "All code, art and music by me.",
            links: [
                {
                    name: "itch.io",
                    url: "https://lazygems.itch.io/bullet-express"
                }
            ],
            embed_code: "jJcqJ_2C-BI",
            made_with: "godot",
            made_for: ["pc"]
        },
        {
            title: "30 Minutes Or Less",
            description: "Deliver pizzas to different locations on the map before the time runs out. Continue your delivery back and forth from the pizzeria to the customers. Earn tip money and extra time for each good delivery.",
            extra_info: "All code and art by me.",
            links: [],
            embed_code: "mGv3uUBYKZo",
            made_with: "unity",
            made_for: ["pc", "mobile"]
        },
        {
            title: "Moon Prosody",
            description: "Bullet hell meets rhythm game.\nHit the notes guitar hero style while you shoot and dodge in this cyberpunk rythem shooter.\nincluding 2 original songs by me.",
            extra_info: "All code, art and music by me.",
            links: [
                {
                    name: "Play Online",
                    url: "https://papacheese.github.io/Moon-Prosody/"
                }

            ],
            embed_code: "Xe8nnETSJ3s",
            made_with: "godot",
            made_for: ["pc"]
        },
        {
            title: "Project Empires",
            description: "A remake of the classic Age Of Empires for mobile.\nCreate units, build buildings, extract resources and engage politicaly with neighboring states. A very big collaborative project that has been in development for 6 months.",
            extra_info: "All code by me.",
            links: [],
            embed_code: "f5bFrByYON0",
            made_with: "godot",
            made_for: ["pc", "mobile"]
        },
        {
            title: "Spiderling",
            description: "Play as spiderling in a story adventure game as he decides on his side on the war between the spiders and the flies.\nFull game with 35 unique levels with puzzles and cutscenes,\nand a complex physics web mechanic.",
            extra_info: "Remake of a Flash game.\nAll code by me.",
            links: [],
            embed_code: "uaGvY6HvJhk",
            made_with: "godot",
            made_for: ["pc"]
        },
        {
            title: "COSMONAV",
            description: "Mine resources, befriend or befoe surrounding factions and visit planets and space stations for goods in this Top Down Space RPG.",
            extra_info: "All code, art and sounds by me.",
            links: [],
            embed_code: "tm_XaGz0WQk",
            made_with: "godot",
            made_for: ["pc", "mobile"]
        },
    ]

    return (
        <div className='projects'>
            <h1>PORTFOLIO</h1>
            <hr />
            <div className='container'>
                {projects.map((item) => (
                    <div className='item'>
                        <YoutubeEmbed embedId={item.embed_code} />
                        <div className='title'>{item.title}</div>
                        <hr />
                        <div className='description'>{
                            item.description.split("\n").map((item) => (
                                <div>
                                    {item}
                                    <br/>
                                </div>
                            ))}
                        </div>
                        <div className='extra-info'>{item.extra_info}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}
