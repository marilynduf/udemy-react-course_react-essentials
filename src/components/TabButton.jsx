export default function TabButton({ children, onSelect, isSelected, props }) {
    // console.log("TabButton COMPONENT RENDERED");
    console.log(props);
    return (
        <li>
            <button
                className={isSelected ? "active" : undefined}
                onClick={onSelect}
            >
                {children}
            </button>
        </li>
    );
}
