// lib/mdx.js
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export function getMdxContent(filename) {
  const filePath = path.join(process.cwd(), 'content', filename)
  const fileContent = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContent)
  return { frontmatter: data, content }
}