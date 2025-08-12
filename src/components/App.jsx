import Header from "./Header/Header.jsx";
import CoreConcepts from "./CoreConcepts.jsx";
import Examples from "./Examples.jsx";

function App() {
    // console.log("App COMPONENT RENDERED");
    return (
        <>
            <Header />
            <main>
                <CoreConcepts />
                <Examples />
            </main>
        </>
    );
}

export default App;
