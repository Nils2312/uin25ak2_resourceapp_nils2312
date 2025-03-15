/*
Denne siden viser ressurser basert på valgt kategori
Denne komponenten mottar en prop "category", som bestemmer hvilke ressurser som skal vises
Den henter data fra ressurser.js og filtrerer ut kun de ressursene som tilhører den valgte kategorien

Det funker noe som sånt:
-category kommer som en prop til komponenten
-resourcesfilter brukes for å hente kun de ressurser som har samme kategori som category
-Overskriften h2 viser hvilken kategori som er valgt
En liste genereres med map, som lager en lenke for hver ressurs
    -Hver lenke leder til en ekstern nettside med mer informasjon
    -target="_blank" åpner lenken i en ny fane
*/
import resources from "../ressurser";
const Resources = ({ category }) => {
    const filteredResources = resources.filter((resource) => resource.category === category);

    return (
        <div>
            <h2>{category.toUpperCase()}</h2> 
            <ul>
                {filteredResources.map((resource, index) => (
                    <li key={index}>
                        <a href={resource.url} target="_blank">
                            {resource.title}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Resources;














