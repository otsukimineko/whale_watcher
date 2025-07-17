import './globals.css'
import MiniAppWrapper from './miniapp-wrapper'

export const metadata = {
  title: 'Whale Watcher',
  description: 'Check ERC20 token balance for any wallet.',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <MiniAppWrapper>{children}</MiniAppWrapper>
      </body>
    </html>
  )
}
