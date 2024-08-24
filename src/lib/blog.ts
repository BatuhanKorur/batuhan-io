import fs from 'fs'
import matter from 'gray-matter'
import { join } from 'path'
import { IPost } from '@/lib/types'

const dir = join(process.cwd(), '_posts')

export const getPosts = () => {
  const files = fs.readdirSync(dir)
  const posts = files.map((file) => {
    const { data } = matter(fs.readFileSync(join(dir, file), 'utf8'))
    return {
      ...data,
      slug: file.replace('.md', ''),
    }
  })

  return posts.sort((a, b) => {
    // @ts-ignore
    return b.publishedAt - a.publishedAt
  }) as Omit<IPost, 'content'>[]
}

export const getPost = (slug: string) => {
  const postPath = join(dir, `${slug}.md`)
  const contents = fs.readFileSync(postPath, 'utf8')
  const { data, content } = matter(contents)

  return {
    ...data,
    content,
  } as IPost
}
