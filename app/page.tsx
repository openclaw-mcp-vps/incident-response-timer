export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">

      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
          For DevOps &amp; SRE Teams
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Track SLA Compliance<br />During Outages
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Real-time countdown timers that keep your team aligned on SLA commitments the moment an incident fires. No more spreadsheets, no more missed deadlines.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
          <a
            href={checkoutUrl}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
          >
            Start Free Trial — $29/mo
          </a>
          <a
            href="#faq"
            className="border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] px-8 py-3 rounded-lg transition-colors text-base"
          >
            Learn More
          </a>
        </div>

        {/* Mock timer UI */}
        <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6 text-left max-w-lg mx-auto">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#f85149]">● ACTIVE INCIDENT</span>
            <span className="text-xs text-[#8b949e]">P1 · Database Outage</span>
          </div>
          <div className="grid grid-cols-3 gap-3 mb-4">
            {[['Response SLA', '00:12:44', '#f85149'], ['Mitigation SLA', '01:47:16', '#e3b341'], ['Resolution SLA', '03:59:02', '#3fb950']].map(([label, time, color]) => (
              <div key={label as string} className="bg-[#0d1117] rounded-lg p-3 text-center">
                <div className="text-xs text-[#8b949e] mb-1">{label}</div>
                <div className="text-xl font-mono font-bold" style={{color: color as string}}>{time}</div>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2 text-xs text-[#8b949e]">
            <span className="w-2 h-2 rounded-full bg-[#3fb950] inline-block"></span>
            3 engineers on call · Last update 2 min ago
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-xl p-8 text-center">
          <div className="text-sm font-semibold text-[#58a6ff] uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$29</div>
          <div className="text-[#8b949e] text-sm mb-6">per month · cancel anytime</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited active incidents',
              'Real-time SLA countdown timers',
              'WebSocket live team updates',
              'Webhook integrations (PagerDuty, Slack)',
              'Custom SLA policies per service',
              'Audit log & incident history',
            ].map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm">
                <span className="text-[#3fb950] mt-0.5">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
          <p className="text-xs text-[#8b949e] mt-3">14-day free trial · No credit card required</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            [
              'How does the real-time sync work?',
              'We use WebSocket connections so every engineer on your team sees the same countdown simultaneously. When someone updates the incident status, all dashboards reflect it within milliseconds — no refreshing required.',
            ],
            [
              'Can I define custom SLA policies?',
              'Yes. You can configure response, mitigation, and resolution SLA windows per service tier (P1–P4). Timers automatically apply the correct policy when an incident is created.',
            ],
            [
              'Which tools does it integrate with?',
              'Incident Response Timer supports inbound webhooks from PagerDuty, OpsGenie, and Alertmanager, and outbound notifications to Slack and Microsoft Teams. More integrations are added regularly.',
            ],
          ].map(([q, a]) => (
            <div key={q as string} className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
              <div className="font-semibold text-white mb-2">{q}</div>
              <div className="text-sm text-[#8b949e] leading-relaxed">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-6 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} Incident Response Timer · Built for SREs
      </footer>
    </main>
  )
}
