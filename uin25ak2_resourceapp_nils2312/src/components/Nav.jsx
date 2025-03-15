/*
Denne siden viser en meny med lenker til de forskjellige kategoriene, HTML, CSS, JavaScript, React og Sanity.
Når man trykker på en lenke, oppdateres siden og viser innholdet for den valgte kategorien
Den aktive lenken får en annen stil for å vise hvilken kategori som er valgt
navlink fra reactrouterdom brukes for å lage lenkene
Navlink har en funksjon som heter isactive som sjekker om lenken er aktiv.
Hvis isactive er true får lenken klassen active ellers får den ingen klasse.
Dette brukes for at bakrgunnen blir hvit.
*/

import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <nav>
            <NavLink to="/html" className={({ isActive }) => isActive ? "active" : ""}>HTML</NavLink>
            <NavLink to="/css" className={({ isActive }) => isActive ? "active" : ""}>CSS</NavLink>
            <NavLink to="/javascript" className={({ isActive }) => isActive ? "active" : ""}>JavaScript</NavLink>
            <NavLink to="/react" className={({ isActive }) => isActive ? "active" : ""}>React</NavLink>
            <NavLink to="/sanity" className={({ isActive }) => isActive ? "active" : ""}>Sanity</NavLink>
        </nav>
    );
};

export default Nav;






