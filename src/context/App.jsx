import { AppProvider } from "./AppContext";
import Toolbar from "./Toolbar.jsx";

export default function App(){
    return (
        <AppProvider>
            <Toolbar />
        </AppProvider>
    );
}