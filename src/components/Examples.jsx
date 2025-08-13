import TabButton from "./TabButton";
import Section from "./Section.jsx";
import { EXAMPLES } from "../data.js";
import { useState } from "react";

export default function Examples() {
    const [selectedTopic, setSelectedTopic] = useState();
    let tabsArrray = ["components", "jsx", "props", "state"];
    function handleSelect(selectedButton) {
        setSelectedTopic(selectedButton);
    }
    return (
        <Section title="Examples" id="examples">
            <menu>
                {tabsArrray.map((tabsArrray) => (
                    <TabButton
                        isSelected={selectedTopic === tabsArrray}
                        onSelect={() => handleSelect(tabsArrray)}
                    >
                        {tabsArrray}
                    </TabButton>
                ))}
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
        </Section>
    );
}
