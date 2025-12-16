import React, { useState } from "react";
import axios from "axios";

const FetchConfig = () => {
  const [configId, setConfigId] = useState("");
  const [matrix, setMatrix] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchConfig = async () => {
    if (!configId.trim()) {
      setError("Please enter a Configuration ID");
      return;
    }

    setLoading(true);
    try {
      const res = await axios.get(
        `https://config-backend-1.onrender.com/api/configurations/${configId}`
      );
      setMatrix(res.data);
      setError("");
    } catch (err) {
      setMatrix([]);
      const msg =
        err?.response?.data?.message ||
        err.message ||
        "Failed to fetch configuration.";
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  const clearForm = () => {
    setConfigId("");
    setMatrix([]);
    setError("");
  };

  return (
    <div className="relative group h-full flex flex-col min-h-0">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-neutral-800 to-neutral-700 rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
      <div className="relative bg-[#0A0A0A]/80 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl p-4 md:p-6 flex flex-col h-full min-h-0">
        <div className="mb-6 flex-shrink-0">
          <div className="flex items-center gap-4 mb-1">
            <div className="p-3 bg-white/5 rounded-2xl border border-white/10 shadow-inner">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                />
              </svg>
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight">
                Fetch Configuration
              </h2>
              <p className="text-neutral-400 font-medium text-xs">
                Retrieve configuration data using Configuration ID
              </p>
            </div>
          </div>
        </div>

        {/* Search Section */}
        <div className="mb-6 flex-shrink-0">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-xs font-medium text-neutral-300 mb-2 tracking-wide ml-1">
                <span className="flex items-center gap-2">
                  <svg
                    className="w-3 h-3 text-neutral-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                  Configuration ID
                </span>
              </label>
              <div className="relative group/input">
                <input
                  type="text"
                  placeholder="Enter Configuration ID (e.g., qwertyuiop)"
                  className="w-full px-4 py-3 pl-10 bg-black/20 border border-white/10 text-white rounded-xl focus:ring-0 focus:border-white/30 outline-none transition-all duration-300 placeholder-neutral-600 font-light text-sm"
                  value={configId}
                  onChange={(e) => setConfigId(e.target.value)}
                  disabled={loading}
                  onKeyPress={(e) => e.key === "Enter" && fetchConfig()}
                />
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 transition-colors duration-300">
                  <svg
                    className="w-4 h-4 text-neutral-600 group-focus-within/input:text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="flex items-end gap-2">
              <button
                onClick={fetchConfig}
                disabled={loading}
                className="px-6 py-3 bg-white hover:bg-neutral-200 text-black font-semibold rounded-xl transition-all duration-300 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] active:scale-95 text-sm"
              >
                {loading ? (
                  <>
                    <svg
                      className="w-4 h-4 animate-spin"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                      />
                    </svg>
                    <span>Fetching...</span>
                  </>
                ) : (
                  <>
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                    <span>Fetch Data</span>
                  </>
                )}
              </button>

              <button
                onClick={clearForm}
                className="px-5 py-3 bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white font-medium rounded-xl transition-all duration-300 flex items-center gap-2 border border-white/5 hover:border-white/10 active:scale-95 text-sm"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                <span>Clear</span>
              </button>
            </div>
          </div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex-1 flex items-center justify-center animate-fade-in">
            <div className="flex flex-col items-center gap-3">
              <div className="h-8 w-8 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
              <div className="text-center">
                <p className="text-neutral-200 font-medium text-sm">
                  Loading configuration...
                </p>
                <p className="text-neutral-500 text-xs mt-1">
                  Fetching data from server
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Error State */}
        {error && !loading && (
          <div className="mb-4 p-3 bg-red-500/10 border border-red-500/20 rounded-xl animate-fade-in flex-shrink-0">
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-red-500/20 flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-red-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-red-200 font-medium text-sm">Error</p>
                <p className="text-red-400 text-xs">{error}</p>
              </div>
            </div>
          </div>
        )}

        {/* Results Section */}
        {matrix.length > 0 && !loading && (
          <div className="flex-1 flex flex-col min-h-0 animate-fade-in-up">
            <div className="flex items-center justify-between mb-3 flex-shrink-0">
              <h3 className="text-base font-semibold text-white tracking-tight">
                Configuration Data
              </h3>
              <div className="flex items-center gap-2">
                <span className="text-[10px] text-neutral-400 bg-white/5 px-2 py-1 rounded-lg border border-white/5 font-mono">
                  {matrix.length} row{matrix.length !== 1 ? "s" : ""}
                </span>
                <span className="text-[10px] text-neutral-400 bg-white/5 px-2 py-1 rounded-lg border border-white/5 font-mono">
                  {matrix.flat().length} items
                </span>
              </div>
            </div>

            <div className="flex-1 flex flex-col min-h-0 bg-black/30 rounded-2xl border border-white/5 p-4 backdrop-blur-sm overflow-hidden">
              <div className="overflow-y-auto flex-1 pr-2 space-y-2 custom-scrollbar">
                {matrix.map((row, i) => (
                  <div
                    key={i}
                    className="flex flex-wrap gap-1.5 bg-white/5 p-3 rounded-lg border border-white/5 hover:border-white/10 transition-all duration-300"
                  >
                    {row.map((symbol, j) => (
                      <span
                        key={j}
                        className="px-2.5 py-1 bg-neutral-800/50 text-neutral-200 rounded md:rounded-lg font-mono text-xs border border-white/5 hover:bg-neutral-700/50 hover:border-white/20 hover:text-white transition-all duration-200 cursor-default"
                      >
                        {symbol}
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-2 text-right flex-shrink-0">
              <p className="text-neutral-600 text-[10px] font-medium">
                Last updated: {new Date().toLocaleTimeString()}
              </p>
            </div>
          </div>
        )}

        {/* Empty State */}
        {!matrix.length && !loading && !error && (
          <div className="flex-1 flex items-center justify-center text-center">
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/5 rounded-2xl mb-4 border border-white/5">
                <svg
                  className="w-8 h-8 text-neutral-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-1">
                No Configuration Loaded
              </h3>
              <p className="text-neutral-500 max-w-xs mx-auto text-sm">
                Enter a Configuration ID above to fetch and display data.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FetchConfig;
