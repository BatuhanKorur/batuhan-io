import { Heading } from '@/components'
import { WorkExperience } from '@/components/WorkExperience'
export default function About() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 grow">
      <div className="border-r">
        <Heading>About</Heading>
        <div className="p-4">
          <p>About Text</p>
        </div>
      </div>
      <div>
        <Heading>Work Experience</Heading>
        <div className="p-4">
          <WorkExperience />
        </div>
      </div>
    </div>
  )
}
