/*
Denne siden setter opp selve strukturen for siden. Siden inkluderer navigasjonsmenyen, Nav-en 
og et område for å vise innholdet som endrer seg, Outlet.
Outlet gjør at innhold vises riktig basert på hvilken side man er på.
*/
import { Outlet } from "react-router-dom";
import Nav from "./Nav";

const Layout = () => {
    return (
        <div>
            <Nav />
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;


