import { Button, Heading, TooltipProvider, TooltipTrigger, Tooltip, TooltipContent, TechIcon } from '@/components'
import { portfolioData } from '@/data/portfolio'

export default function Portfolio() {
  return (
    <div>
      <Heading>Portfolio</Heading>
      <div className="grid grid-cols-1 md:grid-cols-2">
        { portfolioData.map((item, index) => {
          return (
            <div className={`p-6 border-b ${index % 2 ? 'md:border-l' : ''}`} key={index}>
              <img src={item.img} alt={item.title} width="100%" className="rounded-md shadow-sm" />
              <h2 className="font-code mt-3 mb-0.5 font-[500]">{item.title}</h2>
              <p className="text-[15px] leading-[22px] tracking-[0.1px] text-pretty text-foreground/80">{ item.desc }</p>
              <div className="v-between mt-6">
                <div>
                  <TechIcon tech="javascript" />
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
