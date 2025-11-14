import Link from "next/link";

const cards = [
  {
    title: "Start a Chat",
    description:
      "Jump straight into a conversation and keep the momentum going with thoughtful prompts.",
    href: "#chat"
  },
  {
    title: "Plan Your Next Move",
    description:
      "Map out ideas, set milestones, and turn that quick greeting into action items.",
    href: "#plan"
  },
  {
    title: "Explore Resources",
    description:
      "Browse curated guides to sharpen your skills and stay inspired.",
    href: "#resources"
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-24 px-6 pb-32 pt-20">
        <header className="flex flex-col gap-6 text-balance">
          <span className="text-sm uppercase tracking-[0.5em] text-slate-400">
            Hey, you&apos;re here.
          </span>
          <h1 className="text-5xl font-semibold leading-tight sm:text-6xl">
            Let&apos;s make that quick hello count.
          </h1>
          <p className="max-w-2xl text-lg text-slate-300 sm:text-xl">
            This minimal hub gives you a springboard from a simple greeting to
            meaningful action. Pick a direction, stay curious, and build
            something great.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              className="rounded-full bg-indigo-500 px-6 py-3 text-base font-medium text-white shadow-lg shadow-indigo-500/40 transition hover:bg-indigo-400"
              href="#chat"
            >
              Continue the conversation
            </Link>
            <Link
              className="rounded-full border border-slate-700 px-6 py-3 text-base font-medium text-slate-200 transition hover:border-slate-500 hover:text-white"
              href="#resources"
            >
              Browse resources
            </Link>
          </div>
        </header>

        <section
          id="chat"
          className="grid gap-10 rounded-3xl border border-slate-800 bg-slate-900/40 p-10 backdrop-blur"
        >
          <h2 className="text-3xl font-semibold text-white">
            Kick off a new thread
          </h2>
          <p className="max-w-2xl text-base text-slate-300">
            Use the prompt builder below to seed your next conversation. Each
            slider tunes the tone of your outreach, helping you stay intentional
            with every hello.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-800 bg-slate-950/50 p-6 shadow-inner shadow-indigo-500/10">
              <label className="flex items-center justify-between text-sm font-medium text-slate-300">
                Warmth <span className="text-xs text-slate-500">75%</span>
              </label>
              <input
                type="range"
                defaultValue={75}
                className="accent-indigo-500"
              />
              <label className="mt-6 flex items-center justify-between text-sm font-medium text-slate-300">
                Clarity <span className="text-xs text-slate-500">60%</span>
              </label>
              <input type="range" defaultValue={60} className="accent-indigo-500" />
              <label className="mt-6 flex items-center justify-between text-sm font-medium text-slate-300">
                Curiosity <span className="text-xs text-slate-500">85%</span>
              </label>
              <input type="range" defaultValue={85} className="accent-indigo-500" />
            </div>
            <div className="flex flex-col gap-4 rounded-2xl border border-slate-800 bg-slate-950/50 p-6 shadow-inner shadow-indigo-500/10">
              <p className="text-sm uppercase tracking-[0.4em] text-slate-500">
                Suggested opener
              </p>
              <blockquote className="rounded-xl border border-indigo-500/30 bg-indigo-500/10 p-5 text-base text-indigo-100 shadow-lg shadow-indigo-500/20">
                “Hey! Just spotted your latest project—mind if I pick your brain
                about how you approached the design?”
              </blockquote>
              <button className="mt-auto rounded-full bg-indigo-500 px-5 py-2 text-sm font-medium text-white transition hover:bg-indigo-400">
                Copy message
              </button>
            </div>
          </div>
        </section>

        <section
          id="plan"
          className="rounded-3xl border border-slate-800 bg-slate-900/40 p-10 backdrop-blur"
        >
          <h2 className="text-3xl font-semibold text-white">Plan your flow</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {cards.map((card) => (
              <article
                key={card.title}
                className="rounded-2xl border border-slate-800 bg-slate-950/50 p-6 transition hover:-translate-y-1 hover:border-indigo-500/60 hover:shadow-lg hover:shadow-indigo-500/20"
              >
                <h3 className="text-xl font-semibold text-white">{card.title}</h3>
                <p className="mt-3 text-sm text-slate-300">{card.description}</p>
                <Link
                  href={card.href}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-indigo-400 hover:text-indigo-300"
                >
                  Explore →
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section
          id="resources"
          className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900/60 via-slate-900/20 to-indigo-900/30 p-10 text-slate-200"
        >
          <h2 className="text-3xl font-semibold text-white">Keep learning</h2>
          <ul className="mt-6 grid gap-4 md:grid-cols-2">
            <li className="rounded-2xl border border-slate-800/60 bg-slate-950/40 p-5">
              <h3 className="text-lg font-semibold text-white">Design Inspo</h3>
              <p className="mt-2 text-sm text-slate-300">
                Discover interface teardowns, storytelling frameworks, and
                pattern libraries to give your work extra polish.
              </p>
            </li>
            <li className="rounded-2xl border border-slate-800/60 bg-slate-950/40 p-5">
              <h3 className="text-lg font-semibold text-white">AI Prompt Kits</h3>
              <p className="mt-2 text-sm text-slate-300">
                Explore prompt templates that help you move from a casual check-in
                to a fully scoped collaboration in minutes.
              </p>
            </li>
            <li className="rounded-2xl border border-slate-800/60 bg-slate-950/40 p-5">
              <h3 className="text-lg font-semibold text-white">
                Product Playbooks
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                Jump into curated guides that walk through ideation, validation,
                and launch—perfect for startup sprints.
              </p>
            </li>
            <li className="rounded-2xl border border-slate-800/60 bg-slate-950/40 p-5">
              <h3 className="text-lg font-semibold text-white">Community Office Hours</h3>
              <p className="mt-2 text-sm text-slate-300">
                Drop into live sessions where builders share progress, wins, and
                blockers. Bring questions, leave with solutions.
              </p>
            </li>
          </ul>
        </section>
      </div>
      <footer className="border-t border-slate-900 bg-slate-950/80 py-10 text-center text-sm text-slate-500">
        Crafted autonomously. Keep saying hey.
      </footer>
    </main>
  );
}
