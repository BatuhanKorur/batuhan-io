import { Date, Heading } from '@/components'
import { getPosts } from '@/lib/blog'
import Image from 'next/image'

export default function Blog() {
  const posts = getPosts()
  return (
    <div>
      <Heading>Blog</Heading>
      <div className="grid grid-cols-2 p-8 gap-4">
        { posts.map((post, index) => (
          <div key={index} className="bg-black h-[360px] relative rounded-lg border">
            <div className="absolute inset-0 m-2">
              <Image
                src={'/blog/' + post.slug + '.png'}
                alt={post.title}
                className="rounded-md object-cover"
                quality={100}
                fill
              />
            </div>
            <div className="absolute bottom-0 inset-x-0">
              <div className="bg-black inline-flex px-4 pt-2 pb-0.5 rounded-t-lg">
                <Date date={post.publishedAt} className="text-sm text-foreground/60" />
              </div>
              <div className="bg-black w-full px-4 pt-3 pb-4 rounded-b-lg">
                <h2 className="text-[24px] leading-[30px] font-medium tracking-[0.15px]">{ post.title }</h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
