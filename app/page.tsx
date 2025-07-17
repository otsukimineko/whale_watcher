'use client'
import { useState } from 'react'
import { ethers } from 'ethers'



export default function Home() {
  const [wallet, setWallet] = useState('')
  const [token, setToken] = useState('')
  const [balance, setBalance] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const fetchBalance = async () => {
    try {
      setLoading(true)
      const provider = new ethers.JsonRpcProvider('https://mainnet.base.org')
      const abi = [
        'function balanceOf(address) view returns (uint256)',
        'function decimals() view returns (uint8)',
        'function symbol() view returns (string)'
      ]
      const contract = new ethers.Contract(token, abi, provider)
      const [rawBalance, decimals, symbol] = await Promise.all([
        contract.balanceOf(wallet),
        contract.decimals(),
        contract.symbol()
      ])
      const adjusted = Number(ethers.formatUnits(rawBalance, decimals)).toLocaleString()
      setBalance(`${adjusted} ${symbol}`)
    } catch (err) {
      setBalance('エラー')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="p-4 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">Whale Watcher</h1>
      <p className="text-gray-600 mb-2">Check ERC20 token balance for any wallet.</p>

      <input
        className="border p-2 w-full mb-2"
        placeholder="ウォレットアドレス"
        value={wallet}
        onChange={e => setWallet(e.target.value)}
      />
      <input
        className="border p-2 w-full mb-2"
        placeholder="トークンコントラクトアドレス"
        value={token}
        onChange={e => setToken(e.target.value)}
      />
      <button
        onClick={fetchBalance}
        className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
        disabled={loading}
      >
        {loading ? '取得中...' : '残高を確認'}
      </button>
      {balance && <div className="mt-4 text-lg font-mono">{balance}</div>}
    </main>
  )
}
