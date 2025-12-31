import { useCanvasStore } from "../store/canvasStore";

export function renderNode(node) {
    const { layout, box, typography } = splitStyles(node.styles);
    const selectNode = useCanvasStore.getState().selectNode;
    const present = useCanvasStore.getState().present;
    const selectedId = present.selectedId;
    const isSelected = selectedId === node.id;

    let inner = null;

    switch (node.type) {
        case "button":
            inner = (
                <button 
                    className="px-3 py-1 rounded"
                    style={{...layout, ...box, ...typography}}
                >
                    {node.props.text}
                </button>
            );
            break;

        case "text":
            inner = (
                <span style={{...layout, ...box, ...typography}}>
                    {node.props.text}
                </span>
            );
            break;

        case "input":
            inner = (
                <input
                    placeholder={node.props.placeholder}
                    className="px-2 py-1 border border-neutral-700 rounded" 
                    style={{...layout, ...box, ...typography}}/>                
            );
            break;

        case "image":
            inner = (
                <img
                    src={node.props.src || "https://placehold.co/200x150?text=Image"}
                    alt={node.props.alt || "Image"}
                    style={{...layout, ...box}}
                />
            );
            break;

        case "card":
            inner = (
                <div style={{...layout, ...box}}>
                    <img 
                        src={node.props.imageSrc || "https://placehold.co/300x180?text=Card+Image"} 
                        alt={node.props.title || "Card Image"} 
                        style={{ width: "100%", height: "180px", objectFit: "cover", borderRadius: "6px" }}
                    />
                    <h3 style={{ ...typography, margin: "8px 0 4px" }}>{node.props.title}</h3>
                    <p style={{ ...typography, fontSize: "14px", opacity: 0.8 }}>{node.props.description}</p>
                </div>
            );
            break;

        case "container": {
            const hasChildren = node.children && node.children.length > 0;
            inner = (
                <div style={{...box, ...layout}}>
                    {hasChildren ? (
                        node.children?.map((child) => renderNode(child))
                    ) : (
                        <div
                            styles={{
                                opacity: 0.5,
                                textAlign: "center",
                                fontSize: "12px",
                                padding: "8px",
                                pointerEvents: "none"
                            }}
                        >
                            Drag components here
                        </div>
                    )}
                </div>
            );
            break;
        }

        default:
            inner = null;
    }

    return (
        <div
            key={node.id}
            data-node-id={node.id}
            onClick={(e) => {
                e.stopPropagation();
                selectNode(node.id);
            }}
            className={`inline-block relative ${isSelected ? "outline outline-1 outline-blue-400" : ""}`}>
            {inner}
        </div>
    );
}

export function renderTree(tree) {
    return tree.map(node => renderNode(node));
};

function splitStyles(styles) {
    const layout = {};
    const box = {};
    const typography = {};

    for (const key in styles) {
        if (
            key === "display" ||
            key === "flexDirection" ||
            key === "justifyContent" ||
            key === "alignItems" ||
            key === "gap" ||
            key === "margin" ||
            key === "width" ||
            key === "height"
        ) {
            layout[key] = styles[key];
        } else if (
            key === "backgroundColor" ||
            key === "border" ||
            key === "borderRadius" ||
            key === "padding"
        ) {
            box[key] = styles[key];
        } else {
            typography[key] = styles[key];
        }        
    }
    return { layout, box, typography };
}