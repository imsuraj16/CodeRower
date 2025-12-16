import React, { useState } from "react";
import axios from "axios";

const UpdateRemark = () => {
  const [configId, setConfigId] = useState("");
  const [remark, setRemark] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const updateRemark = async () => {
    if (!configId.trim()) {
      setError("Please enter a Configuration ID");
      return;
    }

    if (!remark.trim()) {
      setError("Please enter a remark");
      return;
    }

    setLoading(true);
    try {
      const res = await axios.put(
        `https://config-backend-1.onrender.com/api/configurations/${configId}`,
        { remark }
      );
      setMessage(res.data.message || "Remark updated successfully!");
      setError("");
    } catch (err) {
      setMessage("");
      const errorMsg =
        err?.response?.data?.message ||
        "Failed to update remark. Please check the Configuration ID.";
      setError(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  const clearForm = () => {
    setConfigId("");
    setRemark("");
    setMessage("");
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
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
              </svg>
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight">
                Update Remark
              </h2>
              <p className="text-neutral-400 font-medium text-xs">
                Modify remarks for existing configurations
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6 flex-1 flex flex-col min-h-0">
          <div className="space-y-4 overflow-y-auto flex-1 pr-2 custom-scrollbar">
            {/* Configuration ID Input */}
            <div className="group/field">
              <label className="block text-xs font-medium text-neutral-300 mb-2 tracking-wide ml-1">
                <span className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-white group-focus-within/field:shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all"></div>
                  Configuration ID
                </span>
              </label>
              <input
                type="text"
                placeholder="Enter Configuration ID (e.g., qwertyuiop)"
                value={configId}
                onChange={(e) => setConfigId(e.target.value)}
                className="w-full px-4 py-3 bg-black/20 border border-white/10 text-white rounded-xl focus:ring-0 focus:border-white/30 outline-none transition-all duration-300 placeholder-neutral-600 font-light text-sm"
                disabled={loading}
              />
            </div>

            {/* Remark Textarea */}
            <div className="group/field">
              <div className="flex items-center justify-between mb-2 ml-1">
                <label className="block text-xs font-medium text-neutral-300 tracking-wide">
                  <span className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-white group-focus-within/field:shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all"></div>
                    Remark
                    <span className="text-neutral-500">*</span>
                  </span>
                </label>
                <span
                  className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                    remark.length > 400
                      ? remark.length > 500
                        ? "bg-red-500/10 text-red-400 border border-red-500/20"
                        : "bg-yellow-500/10 text-yellow-400 border border-yellow-500/20"
                      : "bg-white/5 text-neutral-500 border border-white/5"
                  }`}
                >
                  {remark.length}/500
                </span>
              </div>
              <textarea
                rows={3}
                placeholder="Enter your remark here..."
                value={remark}
                onChange={(e) => {
                  if (e.target.value.length <= 500) {
                    setRemark(e.target.value);
                  }
                }}
                className="w-full px-4 py-3 bg-black/20 border border-white/10 text-white rounded-xl focus:ring-0 focus:border-white/30 outline-none transition-all duration-300 resize-none placeholder-neutral-600 font-light text-sm"
                disabled={loading}
              />
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-1">
              <button
                onClick={updateRemark}
                disabled={loading || !configId.trim() || !remark.trim()}
                className="px-6 py-3 bg-white hover:bg-neutral-200 text-black font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed flex-1 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] active:scale-95 text-sm"
              >
                {loading ? (
                  <>
                    <div className="h-4 w-4 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                    <span>Updating...</span>
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
                        d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
                      />
                    </svg>
                    <span>Update Remark</span>
                  </>
                )}
              </button>

              <button
                onClick={clearForm}
                className="px-6 py-3 bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white font-medium rounded-xl transition-all duration-300 flex items-center justify-center gap-2 border border-white/5 hover:border-white/10 active:scale-95 text-sm"
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
                <span>Clear All</span>
              </button>
            </div>

            {/* Success Message */}
            {message && (
              <div className="mt-4 p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl animate-fade-in-up">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-emerald-500/20 flex items-center justify-center border border-emerald-500/20">
                    <svg
                      className="w-4 h-4 text-emerald-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-emerald-200 text-sm">
                      Success!
                    </p>
                    <p className="text-emerald-400/80 text-xs font-light">
                      {message}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Error Message */}
            {error && (
              <div className="mt-4 p-3 bg-red-500/10 border border-red-500/20 rounded-xl animate-fade-in-up">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-red-500/20 flex items-center justify-center border border-red-500/20">
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
                    <p className="font-medium text-red-200 text-sm">
                      Update Failed
                    </p>
                    <p className="text-red-400/80 text-xs font-light">
                      {error}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Information Box */}
            <div className="mt-4 p-4 bg-white/5 border border-white/5 rounded-xl">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-0.5">
                  <div className="h-6 w-6 rounded-full bg-white/10 flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-neutral-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <p className="text-xs text-neutral-200 font-medium mb-1">
                    Important Information
                  </p>
                  <p className="text-[10px] text-neutral-400 font-light leading-relaxed">
                    Ensure the Configuration ID exists before updating. The
                    remark will be permanently updated for the specified
                    configuration. Maximum 500 characters allowed.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Status Indicator */}
          <div className="flex-shrink-0 flex items-center justify-between pt-4 border-t border-white/5 mt-auto">
            <div className="flex items-center gap-2">
              <div
                className={`h-1.5 w-1.5 rounded-full transition-colors duration-500 ${
                  configId && remark
                    ? "bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]"
                    : "bg-neutral-700"
                }`}
              ></div>
              <span className="text-[10px] text-neutral-500 font-medium tracking-wide first-letter:uppercase">
                {configId && remark ? "Ready to update" : "awaiting input..."}
              </span>
            </div>
            <div className="text-[10px] text-neutral-600 font-mono tracking-wider">
              API: ONRENDER.COM
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateRemark;
