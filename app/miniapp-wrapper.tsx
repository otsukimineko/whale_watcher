'use client'

import { useEffect } from 'react'

export default function MiniAppWrapper({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const url = new URL(window.location.href)
    const isMini =
      url.pathname.startsWith('/mini') ||
      url.searchParams.get('miniApp') === 'true'

    if (isMini) {
      import('@farcaster/miniapp-sdk').then(({ sdk }) => {
        sdk.actions.ready()
        // 必要なら他のMini App用処理
      })
    }
  }, [])

  return <>{children}</>
}
