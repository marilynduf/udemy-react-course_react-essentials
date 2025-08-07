import { Header } from "./Header.jsx";
import { CORE_CONCEPTS } from "../data.js";

function CoreConcept({ image, title, description }) {
    return (
        <li>
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
        </li>
    );
}

function App() {
    return (
        <div>
            <Header />
            <section id="core-concepts">
                <ul>
                    <CoreConcept {...CORE_CONCEPTS[0]} />
                    <CoreConcept {...CORE_CONCEPTS[1]} />
                    <CoreConcept {...CORE_CONCEPTS[2]} />
                    <CoreConcept {...CORE_CONCEPTS[3]} />
                </ul>
            </section>
            <main>
                <h2>Time to get started!</h2>
            </main>
        </div>
    );
}

export default App;
