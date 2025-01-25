import Terminal from "./pages/Terminal";
import Background from "./components/Background";

import "./App.css";

function App() {
    return (
        <div className="app-container">
            <Background />

            <div className="app-content">
                <Terminal />
            </div>
        </div>
    );
}

export default App;
