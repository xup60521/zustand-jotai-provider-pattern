import React from "react";
import { create, type StoreApi, type UseBoundStore } from "zustand";

type ZustandStoreType = {
    count: number;
    addCount: () => void;
};

const zustandContext = React.createContext({
    store: null as unknown as UseBoundStore<StoreApi<ZustandStoreType>>,
});

export function ZustandStoreProvider({
    defaultValue,
    children,
}: {
    defaultValue: number;
    children: React.ReactNode;
}) {
    const [store] = React.useState(() =>
        create<ZustandStoreType>((set) => ({
            count: defaultValue,
            addCount: () =>
                set((state) => {
                    state.count++;
                    return { ...state };
                }),
        }))
    );
    return (
        <zustandContext.Provider value={{ store }}>
            {children}
        </zustandContext.Provider>
    );
}

export const useZustandStore = () => React.useContext(zustandContext).store;
