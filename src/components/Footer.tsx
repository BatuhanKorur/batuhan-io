import { RxGithubLogo } from 'react-icons/rx'
import { RxLinkedinLogo } from 'react-icons/rx'
import { PiInstagramLogoFill } from 'react-icons/pi'
import { ReactNode } from 'react'

const SocialButton = ({ link, children }: {
  link: string
  children: ReactNode
}) => {
  return (
    <a href={link} target="_blank" className="px-6 v-center opacity-60 v-click hover:opacity-90">
      { children }
    </a>
  )
}

export function Footer() {
  return (
    <div className="border-t h-[52px] v-between bg-transparent">
      <div></div>
      <div className="flex h-full divide-x border-l">
        <SocialButton link="https://github.com/BatuhanKorur"><RxGithubLogo size={18} /></SocialButton>
        <SocialButton link="https://www.linkedin.com/in/batuhankorur/"><RxLinkedinLogo size={18} /></SocialButton>
        <SocialButton link="https://www.instagram.com/batuhan.korur/"><PiInstagramLogoFill size={20} /></SocialButton>
      </div>
    </div>
  )
}
