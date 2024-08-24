import dayjs from 'dayjs'
export function Date({ date, className }: { date: string, className?: string }) {
  const d = dayjs(date).format('MMMM D, YYYY')
  return (
    <div className={className}>
      <p>{ d }</p>
    </div>
  )
}
