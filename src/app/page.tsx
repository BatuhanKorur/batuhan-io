import { Donut } from '@/components'
import { cva } from 'cva'
import { PiTerminalBold } from 'react-icons/pi'

const hello = cva({
  base: [
    'opacity-80 leading-none mb-1',
    'text-[22px]',
  ],
})

const name = cva({
  base: [
    'text-[40px]/[56px] font-semibold tracking-[1.1px]',
    'md:text-[44px]/[60px] md:tracking-[1.2px]',
    'lg:text-[48px]/[64px] lg:tracking-[1.3px]',
  ],
})

const dev = cva({
  base: [
    'text-[15px] font-[425]',
    'md:text-[16px] md:font-[425]',
    'lg:text-[17px] md:font-[425]',
  ],
})

const donut = cva({
  base: [
    'absolute',
    'bottom-[-10%] right-[-10%] scale-[1.2]',
    'lg:bottom-[-1%] lg:right-[-2%] lg:scale-[1.3]',
  ],
})

export default function Home() {
  return (
    <div className="overflow-clip grow relative">
      <div className="w-full h-[35vh] flex flex-col justify-end px-8 md:px-16">
        <p className={hello()}>Hello 👋, I&apos;m</p>
        <h1 className={name()}>Batuhan Korur</h1>
        <div className="flex items-center space-x-2 text-blue-200 -mt-1">
          <PiTerminalBold size={18} />
          <p className={dev()}>Full-Stack Javascript Developer</p>
        </div>
      </div>
      <div className={`${donut()}`}>
        <Donut />
      </div>
    </div>
  )
}
