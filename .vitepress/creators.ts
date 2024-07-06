export interface SocialEntry {
  type: 'github' | 'twitter' | 'email'
  icon: string
  link: string
}

export interface Creator {
  avatar: string
  name: string
  username?: string
  title?: string
  org?: string
  desc?: string
  links?: SocialEntry[]
  nameAliases?: string[]
  emailAliases?: string[]
}

const getAvatarUrl = (name: string) => `https://github.com/${name}.png`

export const creators: Creator[] = [
  {
    name: 'lroj',
    avatar: '',
    username: 'lroj',
    title: 'buiawpkgew1',
    desc: '测试',
    links: [
      { type: 'github', icon: 'github', link: 'https://github.com/buiawpkgew1' },
    ],
    nameAliases: ['lroj','wateTina'],
    emailAliases: ['neko@ayaka.moe'],
  },
].map<Creator>((c) => {
  c.avatar = c.avatar || getAvatarUrl(c.username)
  return c as Creator
})

export const creatorNames = creators.map(c => c.name)
export const creatorUsernames = creators.map(c => c.username || '')
