interface WorkExperienceProps {
  title: string
  time: string
  position: string
  description: string
  list: string[]
}
export function WorkExperience({ title, time, position, description, list }: WorkExperienceProps) {
  return (
    <div className="mb-4">
      <div>
        <div className="v-between">
          <p className="text-[15px] font-medium">{ title }</p>
          <p className="text-[15px] text-foreground/50">{ time }</p>
        </div>
        <p className="text-blue-300 text-[14.5px] leading-none mt-0.5 mb-2">{ position }</p>
      </div>
      <div>
        <p className="text-[15px] text-foreground/95 leading-[22px] tracking-[0.1px]">
          { description }
        </p>
        <ul className="mt-2">
          { list.map((item, index) => {
            return (
              <li key={index} className="text-[14.5px] text-foreground/90 leading-[20px] tracking-[0.2px] mb-1.5">{ item }</li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
