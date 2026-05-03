import { FileText, Scissors, Edit3, Minimize2, RotateCw, Copy, Image, ArrowRight, Shield, Zap, Globe, Sparkles } from "lucide-react";

const tools = [
  { icon: FileText, label: "Merge PDFs", desc: "Combine files into one", gradient: "from-blue-500 to-cyan-500" },
  { icon: Scissors, label: "Split PDF", desc: "Divide into parts", gradient: "from-violet-500 to-purple-600" },
  { icon: Edit3, label: "Edit PDF", desc: "Annotate & draw", gradient: "from-pink-500 to-rose-500" },
  { icon: Minimize2, label: "Compress", desc: "Shrink file size", gradient: "from-orange-500 to-amber-500" },
  { icon: RotateCw, label: "Rotate", desc: "Fix orientation", gradient: "from-green-500 to-emerald-500" },
  { icon: Copy, label: "Extract", desc: "Pull specific pages", gradient: "from-teal-500 to-cyan-600" },
  { icon: Image, label: "PDF → Images", desc: "PNG & JPG export", gradient: "from-fuchsia-500 to-pink-500" },
  { icon: FileText, label: "Images → PDF", desc: "Bundle images", gradient: "from-indigo-500 to-blue-600" },
];

export function Vibrant() {
  return (
    <div
      className="min-h-screen text-white"
      style={{
        fontFamily: "'Inter', sans-serif",
        background: "linear-gradient(135deg, #0f0c29, #302b63, #24243e)",
      }}
    >
      {/* Ambient blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full opacity-30" style={{ background: "radial-gradient(circle, #6366f1, transparent)" }} />
        <div className="absolute top-64 right-0 w-80 h-80 rounded-full opacity-20" style={{ background: "radial-gradient(circle, #a855f7, transparent)" }} />
        <div className="absolute bottom-0 left-1/3 w-72 h-72 rounded-full opacity-20" style={{ background: "radial-gradient(circle, #06b6d4, transparent)" }} />
      </div>

      {/* Navbar */}
      <nav className="relative z-50 border-b border-white/8 backdrop-blur-xl sticky top-0" style={{ background: "rgba(15,12,41,0.7)" }}>
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "linear-gradient(135deg, #6366f1, #a855f7)" }}>
              <FileText className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-white text-lg tracking-tight">Srini PDF Tools</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-medium" style={{ borderColor: "rgba(99,102,241,0.4)", background: "rgba(99,102,241,0.1)", color: "#a5b4fc" }}>
            <Sparkles className="w-3 h-3" />
            Browser-powered · Zero uploads
          </div>
        </div>
      </nav>

      {/* Hero */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-20 pb-16 text-center">
        <div
          className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold mb-8 border"
          style={{ background: "rgba(255,255,255,0.05)", borderColor: "rgba(255,255,255,0.12)", color: "#c4b5fd" }}
        >
          <div className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
          All processing runs locally in your browser
        </div>

        <h1 className="text-6xl font-black tracking-tight mb-5 leading-none">
          <span
            className="block"
            style={{ background: "linear-gradient(135deg, #e0e7ff, #c4b5fd, #818cf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
          >
            PDF Tools.
          </span>
          <span
            className="block"
            style={{ background: "linear-gradient(135deg, #f0abfc, #e879f9, #c026d3)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
          >
            Privacy First.
          </span>
        </h1>

        <p className="text-base text-slate-400 max-w-md mx-auto mb-10 leading-relaxed">
          Merge, split, edit, compress, and convert PDFs — everything happens
          right here, right now, with zero data leaving your device.
        </p>

        <button
          className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl font-bold text-white transition-transform hover:scale-105"
          style={{ background: "linear-gradient(135deg, #6366f1, #a855f7)", boxShadow: "0 0 40px rgba(99,102,241,0.4)" }}
        >
          Open your first tool <ArrowRight className="w-4 h-4" />
        </button>

        {/* Trust row */}
        <div className="flex items-center justify-center gap-8 mt-14">
          {[
            { icon: Shield, label: "100% Private", sub: "Files never leave your device" },
            { icon: Zap, label: "Instant", sub: "No servers, no waiting" },
            { icon: Globe, label: "Universal", sub: "Any browser, any device" },
          ].map(({ icon: Icon, label, sub }) => (
            <div key={label} className="text-center">
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-2 border"
                style={{ background: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.1)" }}
              >
                <Icon className="w-5 h-5" style={{ color: "#a78bfa" }} />
              </div>
              <div className="text-sm font-semibold text-white">{label}</div>
              <div className="text-xs text-slate-500">{sub}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Tools */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pb-20">
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px flex-1" style={{ background: "rgba(255,255,255,0.06)" }} />
          <span className="text-xs tracking-widest font-bold uppercase" style={{ color: "#6366f1" }}>All Tools</span>
          <div className="h-px flex-1" style={{ background: "rgba(255,255,255,0.06)" }} />
        </div>
        <div className="grid grid-cols-4 gap-4">
          {tools.map(({ icon: Icon, label, desc, gradient }) => (
            <button
              key={label}
              className="group relative rounded-2xl p-5 text-left transition-all duration-300 hover:scale-[1.02] border"
              style={{ background: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.08)" }}
            >
              <div
                className={`w-11 h-11 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-4 shadow-lg`}
              >
                <Icon className="w-5 h-5 text-white" />
              </div>
              <div className="font-bold text-sm text-white mb-1">{label}</div>
              <div className="text-xs text-slate-500">{desc}</div>
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: "linear-gradient(135deg, rgba(99,102,241,0.06), rgba(168,85,247,0.06))" }} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
