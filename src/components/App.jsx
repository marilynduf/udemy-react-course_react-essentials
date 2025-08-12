import Header from "./Header/Header.jsx";
import CoreConcepts from "./CoreConcepts.jsx";
import Examples from "./Examples.jsx";

function App() {
    // console.log("App COMPONENT RENDERED");
    return (
        <>
            <Header />
            <CoreConcepts />
            <main>
                <h2>Time to get started!</h2>
                <Examples />
            </main>
        </>
    );
}

export default App;
