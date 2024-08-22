import { Button, Heading } from '@/components'
import { portfolioData } from '@/data/portfolio'

export default function Portfolio() {
  return (
    <div>
      <Heading>Portfolio</Heading>
      <div className="grid grid-cols-1 md:grid-cols-2">
        { portfolioData.map((item, index) => {
          return (
            <div className="p-6 border-b" key={index}>
              <img src={item.img} alt={item.title} width="100%" className="rounded-md shadow-sm" />
              <h2>{item.title}</h2>
              <p>{ item.desc }</p>
              <div className="v-between">
                <div>
                  <p>HEllo</p>
                </div>
                <Button link={item.link}>View Project</Button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
