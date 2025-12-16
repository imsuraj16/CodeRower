import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FetchGrid from "./pages/FetchConfig";
import UpdateRemark from "./pages/UpdateRemark";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-black text-neutral-200 selection:bg-white/20 font-inter">
        {/* Sidebar Navigation */}
        <Navbar />

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
          <main className="flex-1 flex flex-col overflow-hidden bg-transparent p-4 md:p-8 relative z-0">
            {/* Header Section in Main Content */}
            <header className="mb-6 animate-fade-in-down flex-shrink-0">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tight leading-tight">
                    Configuration Dashboard
                  </h1>
                  <p className="text-neutral-500 mt-1 font-light text-sm">
                    Manage and view your system configurations
                  </p>
                </div>
                <div className="hidden md:flex items-center gap-3 px-3 py-1.5 rounded-full bg-white/5 border border-white/5 backdrop-blur-md">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)] animate-pulse"></div>
                  <span className="text-xs font-medium text-neutral-400">
                    System Online
                  </span>
                </div>
              </div>
            </header>

            <div className="relative z-10 max-w-5xl h-full flex flex-col">
              <Routes>
                <Route path="/" element={<FetchGrid />} />
                <Route path="/update" element={<UpdateRemark />} />
              </Routes>
            </div>

            {/* Footer */}
            <footer className="mt-auto py-4 border-t border-white/5 flex-shrink-0">
              <p className="text-neutral-500 text-xs font-medium text-center">
                © {new Date().getFullYear()} Configuration Dashboard{" "}
                <span className="mx-2 opacity-50">•</span> v1.0
              </p>
            </footer>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
