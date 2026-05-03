import { FileText, Scissors, Edit3, Minimize2, RotateCw, Copy, Image, ArrowRight, Shield, Zap, Globe, ChevronRight } from "lucide-react";

const coreTools = [
  { icon: FileText, label: "Merge PDFs", desc: "Combine multiple PDFs into one seamless document", accent: "#2563eb" },
  { icon: Scissors, label: "Split PDF", desc: "Divide your PDF into individual pages or ranges", accent: "#7c3aed" },
  { icon: Edit3, label: "Edit PDF", desc: "Add text, highlights, and freehand drawings", accent: "#db2777" },
];

const moreTools = [
  { icon: Minimize2, label: "Compress", desc: "Shrink PDF size without quality loss" },
  { icon: RotateCw, label: "Rotate Pages", desc: "Fix orientation in seconds" },
  { icon: Copy, label: "Extract Pages", desc: "Pull specific pages into a new PDF" },
  { icon: Image, label: "PDF → Images", desc: "Export pages as PNG or JPG" },
  { icon: FileText, label: "Images → PDF", desc: "Bundle images into a PDF" },
];

export function Modern() {
  return (
    <div className="min-h-screen bg-white text-gray-900" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Navbar */}
      <nav className="border-b border-gray-100 bg-white sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <FileText className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-gray-900 tracking-tight text-lg">Srini PDF Tools</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 text-xs text-emerald-600 font-medium bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-100">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
              Runs 100% in your browser
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-14">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-6 uppercase tracking-wide">
            Free & Private
          </div>
          <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 mb-5 leading-tight">
            PDF tools that work
            <br />
            <span className="text-blue-600">the way you do.</span>
          </h1>
          <p className="text-lg text-gray-500 max-w-lg mb-8 leading-relaxed">
            Merge, split, edit, and convert PDFs — all in your browser. No uploads,
            no accounts, no software. Just results.
          </p>
          <div className="flex items-center gap-3">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition-colors text-sm shadow-sm">
              Get started — it's free <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Stats row */}
        <div className="flex items-center gap-10 mt-12 pt-10 border-t border-gray-100">
          {[
            { icon: Shield, title: "100% Private", sub: "Files stay on your device" },
            { icon: Zap, title: "Instant Results", sub: "No waiting, no servers" },
            { icon: Globe, title: "Cross-Platform", sub: "Works in any modern browser" },
          ].map(({ icon: Icon, title, sub }) => (
            <div key={title} className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-50 border border-gray-200 rounded-xl flex items-center justify-center">
                <Icon className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <div className="text-sm font-semibold text-gray-900">{title}</div>
                <div className="text-xs text-gray-400">{sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Core Tools */}
      <div className="max-w-6xl mx-auto px-6 pb-10">
        <p className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-5">Core Tools</p>
        <div className="grid grid-cols-3 gap-5 mb-5">
          {coreTools.map(({ icon: Icon, label, desc, accent }) => (
            <button
              key={label}
              className="group relative border border-gray-100 rounded-2xl p-6 text-left hover:shadow-lg hover:border-gray-200 transition-all duration-200 bg-white"
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                style={{ backgroundColor: accent + "18" }}
              >
                <Icon className="w-5 h-5" style={{ color: accent }} />
              </div>
              <div className="font-bold text-gray-900 mb-1.5">{label}</div>
              <div className="text-sm text-gray-400 leading-relaxed mb-4">{desc}</div>
              <div className="flex items-center gap-1 text-xs font-semibold" style={{ color: accent }}>
                Open tool <ChevronRight className="w-3 h-3" />
              </div>
            </button>
          ))}
        </div>

        {/* More Tools */}
        <p className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-4 mt-8">More Tools</p>
        <div className="grid grid-cols-5 gap-3">
          {moreTools.map(({ icon: Icon, label, desc }) => (
            <button
              key={label}
              className="group border border-gray-100 rounded-xl p-4 text-left hover:border-gray-200 hover:shadow-sm transition-all bg-white"
            >
              <div className="w-9 h-9 bg-gray-50 rounded-lg flex items-center justify-center mb-3">
                <Icon className="w-4 h-4 text-gray-500 group-hover:text-blue-600 transition-colors" />
              </div>
              <div className="text-sm font-semibold text-gray-800 mb-0.5">{label}</div>
              <div className="text-xs text-gray-400 leading-snug">{desc}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
