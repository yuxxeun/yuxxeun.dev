import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import ThemeSwitch from './ThemeSwitch'

export default function Footer() {
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center">
        <div className="flex mb-3 space-x-4">
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size="6" />
          <SocialIcon kind="github" href={siteMetadata.github} size="6" />
          <SocialIcon kind="facebook" href={siteMetadata.facebook} size="6" />
          <SocialIcon kind="youtube" href={siteMetadata.youtube} size="6" />
          <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size="6" />
          <SocialIcon kind="twitter" href={siteMetadata.twitter} size="6" />
        </div>
        <div className="flex space-x-2 pb-10 text-sm text-gray-500 dark:text-gray-400">
          <div>{`CC BY-NC-SA 4.0`}</div>
          <div>{` • `}</div>
          <div>{`⚛️`}</div>
          <div>{` • `}</div>
          <Link href={siteMetadata.book}>bookmarks</Link>
        </div>
      </div>
    </footer>
  )
}
