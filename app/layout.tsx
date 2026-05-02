import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Incident Response Timer — Track SLA Compliance During Outages',
  description: 'Real-time SLA countdown timers for DevOps engineers and SREs. Never miss an SLA commitment during incidents again.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="c722db6c-972c-45b6-860c-a92b581503e0"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
