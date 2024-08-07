import React from 'react'
import markdownit from 'markdown-it'
import fs from 'fs'
import path from 'path'

const md = markdownit({
    html: true,
    linkify: true,
    typographer: true
  })

// Function to read Markdown content from a file
const readMarkdownFile = (filename) => {
  const filePath = path.join(process.cwd(), 'markdown', filename)
  return fs.readFileSync(filePath, 'utf8')
}

export const FaceRecognition = () => {
  const markdownContent = readMarkdownFile('FaceRecognition.md')
  const result = md.render(markdownContent)

  return (
    <pre className="markdown-content" dangerouslySetInnerHTML={{ __html: result }} />
  )
}