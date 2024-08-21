import { Button, Heading } from '@/components'
import Image from 'next/image'
import { IPortfolioItem } from '@/lib/types'

function PortfolioItem({ title, description, image, className }: IPortfolioItem) {
  return (
    <div className={`p-6 border-b ${className}`}>
      <img src={image} alt={title} width="100%" className="rounded-md shadow-sm" />
      <h2>{title}</h2>
      <p>{description}</p>
      <Button>View Project</Button>
    </div>
  )
}

export default function Portfolio() {
  return (
    <div>
      <Heading>Portfolio</Heading>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <PortfolioItem title="Reachin" description="test" image="/portfolio/p1.webp" className="md:border-r" />
        <PortfolioItem title="Reachin" description="test" image="/portfolio/p2.webp" />
        <PortfolioItem title="Reachin" description="test" image="/portfolio/p3.webp" className="md:border-r" />
        <PortfolioItem title="Reachin" description="test" image="/portfolio/p4.webp" />
        <PortfolioItem title="Reachin" description="test" image="/portfolio/p5.webp" className="md:border-r" />
      </div>
    </div>
  )
}
