import { FileText, Scissors, Edit3, Minimize2, RotateCw, Copy, Image, ArrowRight, Shield, Zap, Globe, Lock } from "lucide-react";

const tools = [
  { icon: FileText, label: "Merge PDFs", desc: "Combine multiple PDFs into one", color: "from-blue-500 to-blue-700" },
  { icon: Scissors, label: "Split PDF", desc: "Divide pages into separate files", color: "from-violet-500 to-violet-700" },
  { icon: Edit3, label: "Edit PDF", desc: "Add text, highlights & drawings", color: "from-rose-500 to-rose-700" },
  { icon: Minimize2, label: "Compress", desc: "Reduce file size instantly", color: "from-amber-500 to-amber-700" },
  { icon: RotateCw, label: "Rotate", desc: "Rotate pages any direction", color: "from-emerald-500 to-emerald-700" },
  { icon: Copy, label: "Extract Pages", desc: "Pull specific pages out", color: "from-cyan-500 to-cyan-700" },
  { icon: Image, label: "PDF to Images", desc: "Convert pages to PNG or JPG", color: "from-fuchsia-500 to-fuchsia-700" },
  { icon: FileText, label: "Images to PDF", desc: "Pack images into a PDF", color: "from-indigo-500 to-indigo-700" },
];

export function Premium() {
  return (
    <div className="min-h-screen bg-[#0a0f1e] text-white font-['Inter']" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Navbar */}
      <nav className="border-b border-white/8 bg-[#0a0f1e]/90 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
              <FileText className="w-4 h-4 text-white" />
            </div>
            <span className="font-semibold text-white tracking-tight">Srini PDF Tools</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 bg-emerald-500/15 border border-emerald-500/30 rounded-full px-3 py-1">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs text-emerald-400 font-medium">100% Private</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(99,102,241,0.25),transparent)]" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-600/10 rounded-full blur-3xl" />
        <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-16 text-center">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8">
            <Lock className="w-3 h-3 text-indigo-400" />
            <span className="text-xs text-slate-300">All processing runs locally in your browser</span>
          </div>
          <h1 className="text-6xl font-bold tracking-tight mb-5 leading-none">
            <span className="text-white">The PDF toolkit</span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400 bg-clip-text text-transparent">
              that respects your privacy
            </span>
          </h1>
          <p className="text-lg text-slate-400 max-w-xl mx-auto mb-10 leading-relaxed">
            Merge, split, edit, compress, and convert PDFs directly in your browser.
            No uploads. No accounts. No compromises.
          </p>
          <div className="flex items-center justify-center gap-4">
            <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-7 py-3 rounded-xl font-medium flex items-center gap-2 transition-all">
              Start for free <ArrowRight className="w-4 h-4" />
            </button>
            <button className="border border-white/10 hover:border-white/20 text-slate-300 px-7 py-3 rounded-xl font-medium transition-all">
              See all tools
            </button>
          </div>

          {/* Trust badges */}
          <div className="flex items-center justify-center gap-8 mt-14">
            {[
              { icon: Shield, label: "100% Private", sub: "Files never leave your browser" },
              { icon: Zap, label: "Instant Results", sub: "No servers, no waiting" },
              { icon: Globe, label: "Works Everywhere", sub: "Any browser, any device" },
            ].map(({ icon: Icon, label, sub }) => (
              <div key={label} className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-4 h-4 text-indigo-400" />
                </div>
                <div className="text-left">
                  <div className="text-sm font-medium text-white">{label}</div>
                  <div className="text-xs text-slate-500">{sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tools Grid */}
      <div className="max-w-6xl mx-auto px-6 pb-20">
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px flex-1 bg-white/6" />
          <span className="text-xs font-semibold tracking-widest text-slate-500 uppercase">All Tools</span>
          <div className="h-px flex-1 bg-white/6" />
        </div>
        <div className="grid grid-cols-4 gap-4">
          {tools.map(({ icon: Icon, label, desc, color }) => (
            <button
              key={label}
              className="group relative bg-white/3 border border-white/8 rounded-2xl p-5 text-left hover:border-white/15 hover:bg-white/6 transition-all duration-200"
            >
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <Icon className="w-5 h-5 text-white" />
              </div>
              <div className="font-semibold text-sm text-white mb-1">{label}</div>
              <div className="text-xs text-slate-500 leading-relaxed">{desc}</div>
              <ArrowRight className="absolute top-5 right-5 w-4 h-4 text-slate-600 group-hover:text-slate-400 group-hover:translate-x-0.5 transition-all" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
