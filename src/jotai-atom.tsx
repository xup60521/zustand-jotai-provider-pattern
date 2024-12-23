import { atom, PrimitiveAtom, useAtom } from "jotai";
import { createContext, useContext, useState } from "react";

const jotaiContext = createContext({
    atom: null as unknown as PrimitiveAtom<number>,
});

export function JotaiProvider({
    defaultValue,
    children,
}: {
    defaultValue: number;
    children: React.ReactNode;
}) {
    const [atomStore] = useState(() => atom<number>(defaultValue));
    return (
        <jotaiContext.Provider value={{ atom: atomStore }}>
            {children}
        </jotaiContext.Provider>
    );
}

export const useAtomContext = () => useAtom(useContext(jotaiContext).atom);
