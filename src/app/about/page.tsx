import { Button, Heading } from '@/components'
import { WorkExperience } from '@/components/WorkExperience'
import { aboutData } from '@/data/about'
import { experienceData } from '@/data/experience'

export default function About() {
  return (
    <div className="grow grid grid-cols-1 lg:grid-cols-2">
      <div className="border-r">
        <Heading>About</Heading>
        <div className="p-8 space-y-4">
          <p className="text-[64px]">🧑‍💻</p>
          {aboutData.map((data, index) => {
            return (
              <p key={index} className="text-[16px] leading-[26px] text-foreground/95">{data}</p>
            )
          })}
        </div>
        <div className="px-8 mb-12">
          <Button variant="secondary">Download Resume</Button>
        </div>
      </div>
      <div className="border-t lg:border-t-0">
        <Heading>Work Experience</Heading>
        <div className="p-6">
          { experienceData.map((data, index) => {
            return (
              <WorkExperience
                key={index}
                title={data.title}
                time={data.time}
                position={data.position}
                description={data.description}
                list={data.list}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
