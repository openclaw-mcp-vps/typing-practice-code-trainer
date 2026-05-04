export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Nav */}
      <nav className="border-b border-[#30363d] px-6 py-4 flex items-center justify-between max-w-5xl mx-auto">
        <span className="text-[#58a6ff] font-bold text-xl tracking-tight">CodeTypist</span>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="bg-[#58a6ff] text-[#0d1117] font-semibold px-4 py-2 rounded-md text-sm hover:bg-[#79b8ff] transition-colors"
        >
          Start Typing
        </a>
      </nav>

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 py-24 text-center">
        <div className="inline-block bg-[#161b22] border border-[#30363d] rounded-full px-4 py-1 text-xs text-[#58a6ff] mb-6 font-mono">
          TypeLit — but for real code
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
          Type real code.<br />
          <span className="text-[#58a6ff]">Level up fast.</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-2xl mx-auto mb-10">
          Practice typing speed and accuracy using actual snippets from famous open source repos — React, Linux, CPython, and more. Syntax highlighting, WPM tracking, and error detection included.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] text-[#0d1117] font-bold px-8 py-4 rounded-lg text-lg hover:bg-[#79b8ff] transition-colors"
        >
          Get Access — $9/mo
        </a>
        {/* Code preview */}
        <div className="mt-16 bg-[#161b22] border border-[#30363d] rounded-xl p-6 text-left font-mono text-sm max-w-2xl mx-auto">
          <div className="flex gap-2 mb-4">
            <span className="w-3 h-3 rounded-full bg-[#ff5f57]"></span>
            <span className="w-3 h-3 rounded-full bg-[#febc2e]"></span>
            <span className="w-3 h-3 rounded-full bg-[#28c840]"></span>
          </div>
          <p className="text-[#8b949e] text-xs mb-3">react/packages/react/src/React.js</p>
          <div className="space-y-1">
            <p><span className="text-[#ff7b72]">import</span> <span className="text-[#c9d1d9]">ReactVersion</span> <span className="text-[#ff7b72]">from</span> <span className="text-[#a5d6ff]">'shared/ReactVersion'</span><span className="text-[#c9d1d9]">;</span></p>
            <p><span className="text-[#ff7b72]">import</span> <span className="text-[#c9d1d9]">&#123;createElement&#125;</span> <span className="text-[#ff7b72]">from</span> <span className="text-[#a5d6ff]">'./ReactElement'</span><span className="text-[#c9d1d9]">;</span></p>
            <p className="text-[#8b949e]">// WPM: <span className="text-[#3fb950]">87</span> &nbsp; Accuracy: <span className="text-[#3fb950]">98.2%</span> &nbsp; Errors: <span className="text-[#f85149]">2</span></p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-5xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-6">
        {[
          { icon: "⚡", title: "Real Codebases", desc: "Type snippets from React, Linux kernel, CPython, and dozens more famous repos." },
          { icon: "📊", title: "Live WPM & Accuracy", desc: "See your words-per-minute and accuracy update in real time as you type." },
          { icon: "🎨", title: "Syntax Highlighting", desc: "Full syntax highlighting so you learn code patterns while building muscle memory." }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <div className="text-3xl mb-3">{f.icon}</div>
            <h3 className="text-white font-semibold mb-2">{f.title}</h3>
            <p className="text-[#8b949e] text-sm">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="max-w-5xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Simple Pricing</h2>
        <p className="text-[#8b949e] mb-12">One plan. Everything included.</p>
        <div className="max-w-sm mx-auto bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$9</div>
          <div className="text-[#8b949e] text-sm mb-8">per month</div>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Unlimited typing sessions",
              "50+ open source codebases",
              "WPM & accuracy tracking",
              "Progress history & streaks",
              "All languages supported"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#3fb950]">✓</span>
                <span className="text-[#c9d1d9]">{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] text-[#0d1117] font-bold py-3 rounded-lg hover:bg-[#79b8ff] transition-colors text-center"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-white text-center mb-12">FAQ</h2>
        <div className="space-y-6">
          {[
            {
              q: "What makes this different from regular typing tutors?",
              a: "Most typing tools use generic sentences. CodeTypist uses real code from actual open source projects, so you build muscle memory for the exact syntax patterns you'll type every day as a developer."
            },
            {
              q: "Which programming languages are supported?",
              a: "JavaScript, TypeScript, Python, C, C++, Go, Rust, Ruby, and more — pulled directly from the most-starred repos on GitHub."
            },
            {
              q: "Can I cancel anytime?",
              a: "Yes. Cancel anytime from your billing portal with no questions asked. Your access continues until the end of the billing period."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-[#8b949e] text-sm">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#30363d] py-8 text-center text-[#8b949e] text-sm">
        <p>© {new Date().getFullYear()} CodeTypist. Built for developers who want to type like pros.</p>
      </footer>
    </main>
  )
}
