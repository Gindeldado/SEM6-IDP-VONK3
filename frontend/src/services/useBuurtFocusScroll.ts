import { useEffect, useRef } from "react";

/**
 * Custom hook die een ref-functie retourneert om een lijstitem te koppelen,
 * en automatisch naar het geselecteerde item scrollt op basis van de index.
 * 
 * @param selectedIndex - Index van het geselecteerde item als string
 * @returns Object met een functie (waarnemingFocusRef) om refs aan lijstitems te binden
 */
export function useScrollToSelected(selectedIndex: string) {

    const itemRefs = useRef<(HTMLLIElement | null)[]>([]); 
    const i =  Number(selectedIndex);    
    useEffect(() => {
        const node = itemRefs.current[i];
        if (node) {
            node.scrollIntoView({ behavior: "smooth", block: "center" });
        }
    }, [selectedIndex]);

    const waarnemingFocusRef = (index: number) => (el: HTMLLIElement | null) => {
        itemRefs.current[index] = el;
    };

  return { waarnemingFocusRef };
}
