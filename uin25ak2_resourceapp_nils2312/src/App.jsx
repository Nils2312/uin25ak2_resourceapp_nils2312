/*
Denne siden setter opp rutesystemet
-Router: håndtere navigasjon
-Routes: definerer hvilke komponenter som vises basert på URLen
-Layout: en felles wrapper for alle sidene, inneholder navigasjonen
-Resources: vises på sidene html, css, javascript, react og sanity
-Hver route sender med en prop category til resources som filtrerer innholdet

Jeg bruker navigate to for at brukeren automatisk blir sendt til html siden (linje 21) 
La til dette fordi uten koden vil man bare blitt møtt med en blank side
*/

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Resources from "./components/Resources";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/html" replace />} />
                <Route path="/" element={<Layout />}>
                    <Route path="html" element={<Resources category="html" />} />
                    <Route path="css" element={<Resources category="css" />} />
                    <Route path="javascript" element={<Resources category="javascript" />} />
                    <Route path="react" element={<Resources category="react" />} />
                    <Route path="sanity" element={<Resources category="headless-cms" />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default App;





