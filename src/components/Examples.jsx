import TabButton from "./TabButton";
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";
import { EXAMPLES } from "../data.js";
import { useState } from "react";

export default function Examples() {
    const [selectedTopic, setSelectedTopic] = useState();
    let tabsArrray = ["components", "jsx", "props", "state"];
    function handleSelect(selectedButton) {
        setSelectedTopic(selectedButton);
    }

    let tabContent = <p>Please select a tab button</p>;
    if (selectedTopic) {
        tabContent = (
            <div id="tab-content">
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                    <code>{EXAMPLES[selectedTopic].code}</code>
                </pre>
            </div>
        );
    }

    return (
        <Section title="Examples" id="examples">
            <Tabs
                buttons={tabsArrray.map((tabsArrray) => (
                    <TabButton
                        isSelected={selectedTopic === tabsArrray}
                        onClick={() => handleSelect(tabsArrray)}
                    >
                        {tabsArrray}
                    </TabButton>
                ))}
            >
                {tabContent}
            </Tabs>
        </Section>
    );
}
