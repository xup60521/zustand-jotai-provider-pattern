import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ZustandStoreProvider } from "./zustand-store.tsx";
import { JotaiProvider } from "./jotai-atom.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <ZustandStoreProvider defaultValue={9}>
            <JotaiProvider defaultValue={17}>
                <App />
            </JotaiProvider>
        </ZustandStoreProvider>
    </StrictMode>
);
