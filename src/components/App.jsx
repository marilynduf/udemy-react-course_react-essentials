import Header from "./Header/Header.jsx";
import TabButton from "./TabButton.jsx";
import CoreConcept from "./CoreConcept.jsx";
import { CORE_CONCEPTS } from "../data.js";

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
                <section id="examples">
                    <h2>Examples</h2>
                    <menu>
                        <TabButton>Components</TabButton>
                        <TabButton>JSX</TabButton>
                        <TabButton>Props</TabButton>
                        <TabButton>State</TabButton>
                    </menu>
                </section>
            </main>
        </div>
    );
}

export default App;
