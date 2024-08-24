import { notFound } from 'next/navigation'
import { getPost } from '@/lib/blog'
import { Tag, Date } from '@/components'
import Image from 'next/image'
import type { Metadata } from 'next'
import { renderMarkdown } from '@/lib/renderMarkdown'
export const metadata: Metadata = {
  title: 'Batuhan Korur | Full-Stack Javascript Developer',
  description: 'Full-Stack Javascript Developer with a passion for building web applications.',
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug)
  if (!post) return notFound()
  const content = await renderMarkdown(post.content)
  return (
    <div>
      <div className="max-w-screen-md mx-auto px-4 mt-10 md:mt-14 lg:mt-16">
        <div>
          <div className="v-between mb-3">
            <div className="flex items-center space-x-2">
              { post.tags.map((tag, index) => <Tag key={index}>{ tag }</Tag>) }
            </div>
            <Date date={post.publishedAt} className="text-foreground opacity-50 text-base font-[440]" />
          </div>
          <h1 className="text-[40px] leading-[44px] font-[550]">{ post.title }</h1>
          <div className="relative w-full aspect-video mt-4">
            <Image
              src={`/blog/${post.img}`}
              alt={post.imgAlt}
              className="rounded-md aspect-video"
              fill
              style={{
                objectFit: 'contain',
              }}
            />
          </div>
        </div>
        <article dangerouslySetInnerHTML={{
          __html: content,
        }}
        >
        </article>
      </div>
    </div>
  )
}
