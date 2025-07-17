'use client'

import { useEffect } from 'react'

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
  useEffect(() => {
    const url = new URL(window.location.href)
    const isMiniApp =
      url.pathname.startsWith('/mini') ||
      url.searchParams.get('miniApp') === 'true'

    if (isMiniApp) {
      import('@farcaster/miniapp-sdk').then(({ sdk }) => {
        // Farcaster Mini App 用の初期化処理（例: readyシグナル）
        sdk.actions.ready()
      })
    }
  }, [])

  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  )
}
