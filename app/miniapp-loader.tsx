'use client'

import { useEffect } from 'react'

export default function MiniAppLoader() {
  useEffect(() => {
    const url = new URL(window.location.href)
    const isMini =
      url.pathname.startsWith('/mini') ||
      url.searchParams.get('miniApp') === 'true'

    if (isMini) {
      import('@farcaster/miniapp-sdk').then(({ sdk }) => {
        // Mini App SDK 初期化処理
        sdk.actions.ready()
      })
    }
  }, [])

  return null
}
