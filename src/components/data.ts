import moon from "../assets/images/destination/image-moon.png"
import mars from "../assets/images/destination/image-mars.png"
import europa from "../assets/images/destination/image-europa.png"
import titan from "../assets/images/destination/image-titan.png"

import douglas from "../assets/images/crew/image-douglas-hurley.png"
import mark from "../assets/images/crew/image-mark-shuttleworth.png"
import victor from "../assets/images/crew/image-victor-glover.png"
import anousheh from "../assets/images/crew/image-anousheh-ansari.png"

export const destinationData = [
    {
        id: "moon",
        title: "Moon",
        image: moon,
        description: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
        avgDistance: "384,400 KM",
        estTravelTime: "3 DAYS",
    },
    {
        id: "mars",
        title: "Mars",
        image: mars,
        description: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
        avgDistance: "225 MIL. KM",
        estTravelTime: "9 MONTHS",
    },
    {
        id: "europa",
        title: "Europa",
        image: europa,
        description: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
        avgDistance: "628 MIL. KM",
        estTravelTime: "3 YEARS",
    },
    {
        id: "titan",
        title: "Titan",
        image: titan,
        description: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
        avgDistance: "1.6 BIL. KM",
        estTravelTime: "7 YEARS",
    },
]

//------------------------  crew data -----------------------------------------------------------------

export const crewData = [
    {
        id: 1,
        name: "Douglas Hurley",
        position: "Commander",
        description: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
        image: douglas
    },
    {
        id: 2,
        name: "Mark Shuttleworth",
        position: "Mission Specialist",
        description: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
        image: mark
    },
    {
        id: 3,
        name: "Victor Glover",
        position: "Pilot",
        description: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
        image: victor
    },
    {
        id: 4,
        name: "Anousheh Ansari",
        position: "Flight Engineer",
        description: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
        image: anousheh
    },
] 