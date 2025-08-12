export default function TabButton({ children, onSelect, isSelected }) {
    // console.log("TabButton COMPONENT RENDERED");
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
