export function Tag({ children }: { children: string }) {
  return (
    <span className="text-[14px] font-[450] leading-none px-3 py-2 rounded-md border bg-foreground/[3%]">
      { children }
    </span>
  )
}
