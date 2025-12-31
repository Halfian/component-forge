import { useCanvasStore } from "../../store/canvasStore";
import { defaultStyles } from "../../constants/defaultStyles";
import Section from "./Section";
import ResetButton from "./ResetButton";
import DisplayInput from "./layout/DisplayInput";
import FlexControls from "./layout/FlexControls";
import SizeInput from "./layout/SizeInput";
import FourSideInput from "./spacing/FourSideInput";
import ColorInput from "./appearance/ColorInput";
import BorderInput from "./border/BorderInput";
import RadiusInput from "./border/RadiusInput";
import FontSizeInput from "./typography/FontSizeInput";
import FontWeightInput from "./typography/FontWeightInput";
import TextAlignInput from "./typography/TextAlignInput";
import LineHeightInput from "./typography/LineHeightInput";
import LetterSpacingInput from "./typography/LetterSpacingInput";

export default function Inspector() {
    const present = useCanvasStore((s) => s.present);
    const selectedId = present.selectedId;
    const tree = present.tree;
    const updateNode = useCanvasStore((s) => s.updateNode);

    const node = tree.find(n => n.id === selectedId);

    if (!node) {
        return (
            <aside className="border-l border-neutral-800 p-4 text-base opacity-60">
                No component selected
            </aside>
        );
    }

    function updateProp(key, value) {
        updateNode(node.id, {
            props: { ...node.props, [key]: value},
        });
    }

    return (
        <aside className="border-l border-neutral-800 p-4 text-sm space-y-4">
            <h2 className="font-semibold text-neutral-200 text-base ml-25">Inspector</h2>

            <div>
                <p className="opacity-70 mb-1">Type</p>
                <div className="bg-neutral-800 px-2 py-1 rounded border border-neutral-700">
                    {node.type}
                </div>
            </div>

            <div>
                <p className="opacity-70 mb-1">Props</p>

                {Object.keys(node.props).map((key) => (
                    <div key={key} className="mb-2">
                        <label className="block text-xs opacity-70 mb-1">{key}</label>
                        <input
                            className="w-full px-2 py-1 bg-neutral-800 border border-neutral-700 rounded"
                            value={node.props[key]}
                            onChange={(e) => updateProp(key, e.target.value)} />
                    </div>
                ))}
            </div>
            <Section title="Layout">
                <div className="flex justify-end">
                    <ResetButton
                        onClick={() =>
                            updateNode(node.id, {
                                styles: {
                                    ...node.styles,
                                    ...defaultStyles.layout
                                }
                            })
                        }
                    />
                </div>
                <DisplayInput 
                    styles={node.styles}  
                    onChange={(prop, val) =>
                        updateNode(node.id, { styles: { ...node.styles, [prop]: val}})
                    }              
                />
                <FlexControls 
                    styles={node.styles}
                    onChange={(prop, val) =>
                        updateNode(node.id, { styles: { ...node.styles, [prop]: val}})
                    }
                />
                <SizeInput 
                    styles={node.styles}
                    onChange={(prop, val) =>
                        updateNode(node.id, { styles: { ...node.styles, [prop]: val}})
                    }
                />
            </Section>
            <Section title="Spacing">
                <div className="flex justify-end">
                    <ResetButton 
                        onClick={() =>
                            updateNode(node.id, {
                                styles: {
                                    ...node.styles,
                                    ...defaultStyles.spacing
                                }
                            })
                        }
                    />
                </div>
                <FourSideInput
                label="Margin"
                    styles={{
                    top: node.styles.marginTop,
                    right: node.styles.marginRight,
                    bottom: node.styles.marginBottom,
                    left: node.styles.marginLeft,
                }}
                onChange={(side, value) =>
                    updateNode(node.id, {
                        styles: {
                            ...node.styles,
                            [`margin${side.charAt(0).toUpperCase() + side.slice(1)}`]: value
                        }
                    })
                }
                />
                <FourSideInput 
                label="Padding"
                    styles={{
                    top: node.styles.paddingTop,
                    right: node.styles.paddingRight,
                    bottom: node.styles.paddingBottom,
                    left: node.styles.paddingLeft,
                }}
                onChange={(side, value) => 
                    updateNode(node.id, {
                        styles: {
                            ...node.styles,
                            [`padding${side.charAt(0).toUpperCase() + side.slice(1)}`]: value
                        }
                    })
                }
                />
            </Section>
            <Section title="Appearance">
                <div className="flex justify-end">
                    <ResetButton 
                        onClick={() =>
                            updateNode(node.id, {
                                styles: {
                                    ...node.styles,
                                    ...defaultStyles.appearance
                                }
                            })
                        }
                    />
                </div>
                <ColorInput 
                    label="Background Color"
                    value={node.styles.backgroundColor}
                    onChange={(val) =>
                        updateNode(node.id, {
                            styles: { ...node.styles, backgroundColor: val}
                        })
                    }
                />
                <ColorInput 
                    label="Text Color"
                    value={node.styles.color}
                    onChange={(val) =>
                        updateNode(node.id, {
                            styles: {...node.styles, color: val}
                        })
                    }
                />                
            </Section>
            <Section title="Border and Radius">
                <div className="flex justify-end">
                    <ResetButton 
                        onClick={() =>
                            updateNode(node.id, {
                                styles: {
                                    ...node.styles,
                                    ...defaultStyles.border
                                }
                            })
                        }
                    />
                </div>
                <BorderInput 
                    styles={node.styles}
                    onChange={(prop, val) =>
                        updateNode(node.id, {
                            styles: { ...node.styles, [prop]: val}
                        })
                    }
                />
                <RadiusInput 
                    styles={node.styles}
                    onChange={(prop, val) =>
                        updateNode(node.id, {
                            styles: { ...node.styles, [prop]: val}
                        })
                    }
                />
            </Section>
            <Section title="Typography">
                <div className="flex justify-end">
                    <ResetButton
                        onClick={() =>
                            updateNode(node.id, {
                                styles: {
                                    ...node.styles,
                                    fontSize: "",
                                    fontWeight: "",
                                    lineHeight: "",
                                    letterSpacing: "",
                                    textAlign: ""
                                }
                            })
                        }
                    />
                </div>
                <FontSizeInput 
                    value={node.styles.fontSize}
                    onChange={(val) =>
                        updateNode(node.id, {
                            styles: { ...node.styles, fontSize: val}
                        })
                    }
                />
                <FontWeightInput 
                    value={node.styles.fontWeight}
                    onChange={(val) =>
                        updateNode(node.id, {
                            styles: { ...node.styles, fontWeight: val}
                        })
                    }
                />
                <LineHeightInput 
                    value={node.styles.lineHeight}
                    onChange={(val) =>
                        updateNode(node.id, {
                            styles: { ...node.styles, lineHeight: val}
                        })
                    }
                />
                <LetterSpacingInput 
                    value={node.styles.letterSpacing}
                    onChange={(val) =>
                        updateNode(node.id, {
                            styles: { ...node.styles, letterSpacing: val}
                        })
                    }
                />
                <TextAlignInput 
                    value={node.styles.textAlign}
                    onChange={(val) =>
                        updateNode(node.id, {
                            styles: { ...node.styles, textAlign: val}
                        })
                    }
                />
            </Section>
        </aside>
    );
};