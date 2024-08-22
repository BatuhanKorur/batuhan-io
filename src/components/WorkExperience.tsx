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
          <p className="text-base">{ title }</p>
          <p className="text-base">{ time }</p>
        </div>
        <p className="text-blue-300 text-[14.5px]">{ position }</p>
      </div>
      <div>
        <p className="text-[15px]">
          { description }
        </p>
        {/*        <ul>
          { list.map((item, index) => {
            return (
              <li key={index}>{ item }</li>
            )
          })}
        </ul> */}
      </div>
    </div>
  )
}
