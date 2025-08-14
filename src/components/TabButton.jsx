export default function TabButton({ children, isSelected, ...props }) {
    // console.log("TabButton COMPONENT RENDERED");
    return (
        <li>
            <button className={isSelected ? "active" : undefined} {...props}>
                {children}
            </button>
        </li>
    );
}
