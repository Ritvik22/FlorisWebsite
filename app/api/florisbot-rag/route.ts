import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

// Load and chunk the document at startup
let chunks: string[] = []

function loadChunks() {
  if (chunks.length > 0) return chunks
  const filePath = path.join(process.cwd(), 'RAGinfo', 'full_text.txt')
  if (!fs.existsSync(filePath)) return []
  const text = fs.readFileSync(filePath, 'utf8')
  // Chunk by Q&A or every 40 lines as fallback
  const lines = text.split(/\r?\n/)
  let current = []
  for (let line of lines) {
    if (/^Q:/.test(line) && current.length) {
      chunks.push(current.join(' ').replace(/\s+/g, ' ').trim())
      current = []
    }
    current.push(line)
  }
  if (current.length) chunks.push(current.join(' ').replace(/\s+/g, ' ').trim())
  return chunks
}

function findRelevantChunks(question: string, topK = 2) {
  const lowerQ = question.toLowerCase()
  // Simple keyword match scoring
  const scored = loadChunks().map(chunk => {
    let score = 0
    for (const word of lowerQ.split(/\W+/)) {
      if (word && chunk.toLowerCase().includes(word)) score++
    }
    return { chunk, score }
  })
  scored.sort((a, b) => b.score - a.score)
  return scored.slice(0, topK).map(s => s.chunk)
}

export async function POST(req: NextRequest) {
  const { question } = await req.json()
  if (!question) {
    return NextResponse.json({ answer: 'Please provide a question.' }, { status: 400 })
  }
  const relevant = findRelevantChunks(question)
  const answer = relevant.length ? relevant.join('\n\n') : 'Sorry, I could not find an answer in the Floris knowledge base.'
  return NextResponse.json({ answer })
} 