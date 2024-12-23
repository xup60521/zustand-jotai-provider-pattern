import { useAtomContext } from "./jotai-atom";
import { useZustandStore } from "./zustand-store";

const link = "https://xup60521.github.io"

export default function App() {
    const zustandStore = useZustandStore();
    const [count, setCount] = useAtomContext();
    return (
        <div>
            <h1>App</h1>
            <main style={{ display: "flex", width: "100%", gap: "5rem" }}>
                <div>
                    <p>Zustand store</p>
                    <button onMouseDown={zustandStore.addCount}>
                        {zustandStore.count}
                    </button>
                </div>
                <div>
                    <p>Jotai Atom</p>
                    <button onMouseDown={() => setCount((c) => c + 1)}>
                        {count}
                    </button>
                </div>
            </main>
            <footer>Source code: <a target="_blank" href={link}>{link}</a></footer>
        </div>
    );
}
