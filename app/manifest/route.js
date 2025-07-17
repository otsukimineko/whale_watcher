// app/manifest/route.ts
import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    id: 'whale_watcher',
    name: 'Whale Watcher',
    description: 'Check ERC20 token balance for any wallet.',
    icon: 'https://your-vercel-url.vercel.app/favicon.ico',
    url: 'https://your-vercel-url.vercel.app',
    developer: {
      name: 'kitsune',
      website: 'https://your-vercel-url.vercel.app'
    },
    actions: [
      {
        name: 'Check Balance',
        description: 'Enter wallet and token address to see balance.',
        path: '/',
        type: 'post_redirect'
      }
    ]
  })
}
