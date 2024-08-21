import { Heading } from '@/components'
export default function About() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 divide-x">
      <div>
        <Heading>About</Heading>
        <div>
          <p>About Text</p>
        </div>
      </div>
      <div>
        <Heading>Work Experience</Heading>
        <div>
          <p>Work Exp</p>
        </div>
      </div>
    </div>
  )
}
