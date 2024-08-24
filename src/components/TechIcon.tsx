import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/Tooltip'
import Image from 'next/image'
import { capitalize } from '@/lib/utils'

type Tech = 'express' | 'javascript' | 'laravel' | 'next' | 'node' | 'nuxt' | 'php' | 'react' | 'vue'
export function TechIcon({ tech }: { tech: Tech }) {
  return (
    <TooltipProvider delayDuration={200}>
      <Tooltip>
        <TooltipTrigger>
          <Image src={`/icons/${tech}.svg`} alt={tech} width={20} height={20} />
        </TooltipTrigger>
        <TooltipContent>
          <p>{ capitalize(tech) }</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
