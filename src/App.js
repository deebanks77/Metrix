import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Shell } from "./layout/Shell";
import Dashboard from "./components/dashboard/Dashboard";
import Conversation from "./components/conversation/Conversation";

function App() {
  return (
    <div className="App">
      <Router>
        <Shell>
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" />} />
          </Routes>
          <Routes>
            <Route path="dashboard" element={<Dashboard />} />
          </Routes>
          <Routes>
            <Route path="conversations" element={<Conversation />} />
          </Routes>
        </Shell>
      </Router>
    </div>
  );
}

export default App;
