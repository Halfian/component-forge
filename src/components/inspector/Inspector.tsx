import { useCanvasStore } from "../../store/canvasStore.js";
import { defaultStyles } from "../../constants/defaultStyles.js";
import Section from "./Section.js";
import ResetButton from "./ResetButton.js";
import DisplayInput from "./layout/DisplayInput.js";
import FlexControls from "./layout/FlexControls.js";
import SizeInput from "./layout/SizeInput.js";
import FourSideInput from "./spacing/FourSideInput.js";
import ColorInput from "./appearance/ColorInput.js";
import BorderInput from "./border/BorderInput.js";
import RadiusInput from "./border/RadiusInput.js";
import FontSizeInput from "./typography/FontSizeInput.js";
import FontWeightInput from "./typography/FontWeightInput.jsx";
import TextAlignInput from "./typography/TextAlignInput.js";
import LineHeightInput from "./typography/LineHeightInput.js";
import LetterSpacingInput from "./typography/LetterSpacingInput.js";
import type { Node } from "../../store/canvasStore.js";



export default function Inspector() {
    const present = useCanvasStore((s) => s.present);
    const selectedId = present.selectedId;
    const tree = present.tree;
    const updateNode = useCanvasStore((s) => s.updateNode);

    const node: Node | undefined = tree.find(n => n.id === selectedId);

    if (!node) {
        return (
            <aside className="border-l border-(--app-line) bg-(--app-bg) p-4 text-(--app-fg) opacity-60">
                No component selected
            </aside>
        );
    }

    function updateProp(key: string, value: string) {
        updateNode(node!.id, {
            props: { ...node!.props, [key]: value},
        });
    }

    return (
        <aside className="border-l border-(--app-line) p-4 text-sm space-y-4 bg-(--app-bg) text-(--app-fg)">
            <h2 className="font-semibold text-base ml-25">Inspector</h2>

            <div>
                <p className="opacity-70 mb-1">Type</p>
                <div className="bg-(--app-card) px-2 py-1 rounded border border-(--app-line)">
                    {node.type}
                </div>
            </div>

            <div>
                <p className="opacity-70 mb-1">Props</p>

                {Object.entries(node!.props ?? {}).map(([key, value]) => (
                    <div key={key} className="mb-2">
                        <label className="block text-xs opacity-70 mb-1">{key}</label>
                        <input
                        className="w-full px-2 py-1 bg-(--app-card) border border-(--app-line) rounded text-(--app-fg)"
                        value={value}
                        onChange={(e) => updateProp(key, e.target.value)}
                        />
                    </div>
                ))}
            </div>
            <Section title="Layout">
                <div className="flex justify-end">
                    <ResetButton
                        onClick={() =>
                            updateNode(node!.id, {
                                styles: {
                                    ...node.styles,
                                    ...defaultStyles.layout
                                }
                            })
                        }
                    />
                </div>
                <DisplayInput 
                    styles={node!.styles ?? {}}  
                    onChange={(prop: string, val: string | number) =>
                        updateNode(node!.id, { styles: { ...node!.styles, [prop]: val}})
                    }              
                />
                <FlexControls 
                    styles={node!.styles ?? {}}
                    onChange={(prop: string, val: string | number) =>
                        updateNode(node!.id, { styles: { ...node!.styles, [prop]: val}})
                    }
                />
                <SizeInput 
                    styles={node!.styles ?? {}}
                    onChange={(prop: string, val: string | number) =>
                        updateNode(node!.id, { styles: { ...node!.styles, [prop]: val}})
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
                    top: node!.styles?.marginTop ?? "",
                    right: node!.styles?.marginRight ?? "",
                    bottom: node!.styles?.marginBottom ?? "",
                    left: node!.styles?.marginLeft ?? "",
                }}
                onChange={(side, value) =>
                    updateNode(node!.id, {
                        styles: {
                            ...(node!.styles ?? {}),
                            [`margin${side.charAt(0).toUpperCase() + side.slice(1)}`]: value
                        }
                    })
                }
                />
                <FourSideInput 
                label="Padding"
                    styles={{
                    top: node!.styles?.paddingTop ?? "",
                    right: node!.styles?.paddingRight ?? "",
                    bottom: node!.styles?.paddingBottom ?? "",
                    left: node!.styles?.paddingLeft ?? "",
                }}
                onChange={(side, value) => 
                    updateNode(node!.id, {
                        styles: {
                            ...(node!.styles ?? {}),
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
                            updateNode(node!.id, {
                                styles: {
                                    ...node!.styles,
                                    ...defaultStyles.appearance
                                }
                            })
                        }
                    />
                </div>
                <ColorInput 
                    label="Background Color"
                    value={node!.styles?.backgroundColor as string}
                    onChange={(val) =>
                        updateNode(node!.id, {
                            styles: { ...(node!.styles ?? {}), backgroundColor: val}
                        })
                    }
                />
                <ColorInput 
                    label="Text Color"
                    value={node!.styles?.color as string}
                    onChange={(val) =>
                        updateNode(node!.id, {
                            styles: {...node!.styles, color: val}
                        })
                    }
                />                
            </Section>
            <Section title="Border and Radius">
                <div className="flex justify-end">
                    <ResetButton 
                        onClick={() =>
                            updateNode(node!.id, {
                                styles: {
                                    ...node!.styles,
                                    ...defaultStyles.border
                                }
                            })
                        }
                    />
                </div>
                <BorderInput 
                    styles={node!.styles ?? {}}
                    onChange={(prop, val) =>
                        updateNode(node!.id, {
                            styles: { ...(node!.styles ?? {}), [prop]: val}
                        })
                    }
                />
                <RadiusInput 
                    styles={node!.styles ?? {}}
                    onChange={(prop, val) =>
                        updateNode(node!.id, {
                            styles: { ...(node!.styles ?? {}), [prop]: val}
                        })
                    }
                />
            </Section>
            <Section title="Typography">
                <div className="flex justify-end">
                    <ResetButton
                        onClick={() =>
                            updateNode(node!.id, {
                                styles: {
                                    ...(node!.styles ?? {}),
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
                    value={node!.styles?.fontSize as string}
                    onChange={(val) =>
                        updateNode(node!.id, {
                            styles: { ...(node!.styles ?? {}), fontSize: val}
                        })
                    }
                />
                <FontWeightInput 
                    value={node!.styles?.fontWeight as string}
                    onChange={(val) =>
                        updateNode(node!.id, {
                            styles: { ...(node!.styles ?? {}), fontWeight: val}
                        })
                    }
                />
                <LineHeightInput 
                    value={node!.styles?.lineHeight as string}
                    onChange={(val) =>
                        updateNode(node!.id, {
                            styles: { ...(node!.styles ?? {}), lineHeight: val}
                        })
                    }
                />
                <LetterSpacingInput 
                    value={node!.styles?.letterSpacing as string}
                    onChange={(val) =>
                        updateNode(node!.id, {
                            styles: { ...(node!.styles ?? {}), letterSpacing: val}
                        })
                    }
                />
                <TextAlignInput 
                    value={node!.styles?.textAlign as string}
                    onChange={(val) =>
                        updateNode(node!.id, {
                            styles: { ...(node!.styles ?? {}), textAlign: val}
                        })
                    }
                />
            </Section>
        </aside>
    );
};