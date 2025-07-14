"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { MessageCircle, X, Send } from "lucide-react"

const BOT_AVATAR = "/logo.png"

const initialMessages = [
  {
    sender: "bot",
    text: "Hi! I’m FlorisBot 🌱. Ask me anything about Floris, crop protection, or smart gardening. I’ll answer using the official Floris knowledge base."
  }
]

export default function FlorisBot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState(initialMessages)
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (open && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [messages, open])

  async function handleSend() {
    if (!input.trim() || loading) return
    const userMsg = { sender: "user", text: input }
    setMessages((msgs) => [...msgs, userMsg])
    setInput("")
    setLoading(true)
    try {
      const res = await fetch("/api/florisbot-rag", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: input })
      })
      const data = await res.json()
      setMessages((msgs) => [
        ...msgs,
        {
          sender: "bot",
          text: data.answer
        }
      ])
    } catch (err) {
      setMessages((msgs) => [
        ...msgs,
        {
          sender: "bot",
          text: "Sorry, something went wrong. Please try again."
        }
      ])
    } finally {
      setLoading(false)
    }
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Button */}
      {!open && (
        <button
          className="flex items-center space-x-2 bg-gradient-to-br from-primary-500 to-primary-700 text-white px-4 py-3 rounded-full shadow-2xl hover:scale-105 transition-all"
          onClick={() => setOpen(true)}
        >
          <Image src={BOT_AVATAR} alt="FlorisBot" width={28} height={28} className="rounded-full" />
          <span className="font-semibold">FlorisBot</span>
          <MessageCircle className="w-5 h-5 ml-1" />
        </button>
      )}

      {/* Chat Window */}
      {open && (
        <div className="w-80 max-w-[90vw] h-[420px] bg-white rounded-2xl shadow-2xl flex flex-col border border-primary-100 animate-fade-in">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-primary-100 bg-gradient-to-r from-primary-50 to-white rounded-t-2xl">
            <div className="flex items-center space-x-2">
              <Image src={BOT_AVATAR} alt="FlorisBot" width={28} height={28} className="rounded-full" />
              <span className="font-semibold text-primary-700">FlorisBot</span>
            </div>
            <button onClick={() => setOpen(false)} className="p-1 rounded hover:bg-secondary-100">
              <X className="w-5 h-5 text-secondary-500" />
            </button>
          </div>
          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 bg-gradient-to-b from-white to-primary-50">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`rounded-xl px-4 py-2 max-w-[80%] text-sm shadow ${msg.sender === "bot" ? "bg-primary-100 text-primary-900" : "bg-primary-600 text-white"}`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="rounded-xl px-4 py-2 max-w-[80%] text-sm shadow bg-primary-100 text-primary-900 opacity-70 animate-pulse">
                  FlorisBot is thinking...
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          {/* Input */}
          <form
            className="flex items-center gap-2 px-4 py-3 border-t border-primary-100 bg-white rounded-b-2xl"
            onSubmit={e => {
              e.preventDefault()
              handleSend()
            }}
          >
            <input
              type="text"
              className="flex-1 px-3 py-2 rounded-lg border border-secondary-200 focus:ring-2 focus:ring-primary-400 outline-none text-sm"
              placeholder="Type your message..."
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              autoFocus
              disabled={loading}
            />
            <button type="submit" className="p-2 rounded-lg bg-primary-600 hover:bg-primary-700 text-white transition-all" disabled={loading}>
              <Send className="w-5 h-5" />
            </button>
          </form>
        </div>
      )}
    </div>
  )
} 