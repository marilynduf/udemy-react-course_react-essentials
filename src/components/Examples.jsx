import TabButton from "./TabButton";
import { EXAMPLES } from "../data.js";
import { useState } from "react";

export default function Examples() {
    const [selectedTopic, setSelectedTopic] = useState();
    let tabsArrray = ["components", "jsx", "props", "state"];
    function handleSelect(selectedButton) {
        setSelectedTopic(selectedButton);
    }
    return (
        <section id="examples">
            <h2>Examples</h2>
            <menu>
                <TabButton
                    isSelected={selectedTopic === tabsArrray[0]}
                    onSelect={() => handleSelect(tabsArrray[0])}
                >
                    {tabsArrray[0]}
                </TabButton>
                <TabButton
                    isSelected={selectedTopic === tabsArrray[1]}
                    onSelect={() => handleSelect(tabsArrray[1])}
                >
                    {tabsArrray[1]}
                </TabButton>
                <TabButton
                    isSelected={selectedTopic === tabsArrray[2]}
                    onSelect={() => handleSelect(tabsArrray[2])}
                >
                    {tabsArrray[2]}
                </TabButton>
                <TabButton
                    isSelected={selectedTopic === tabsArrray[3]}
                    onSelect={() => handleSelect(tabsArrray[3])}
                >
                    {tabsArrray[3]}
                </TabButton>
            </menu>

            {!selectedTopic ? (
                <p>Please select a tab button</p>
            ) : (
                <div id="tab-content">
                    <h3>{EXAMPLES[selectedTopic].title}</h3>
                    <p>{EXAMPLES[selectedTopic].description}</p>
                    <pre>
                        <code>{EXAMPLES[selectedTopic].code}</code>
                    </pre>
                </div>
            )}
        </section>
    );
}
