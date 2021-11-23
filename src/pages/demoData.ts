export interface tabProp {
  name: string;
  icon: string;
  label: string;
  to?: string;
}

export interface tabsProp extends tabProp {
  children?: tabProp[];
}

const tabsData: tabsProp[] = [
  {
    name: 'home',
    icon: 'hame',
    label: 'Home',
    to: '/',
    children: [
      {
        name: 'email',
        icon: 'mails',
        label: 'E-mail',
        to: '/test1'
      },
      {
        name: 'alert',
        icon: 'alarms',
        label: 'Alert',
        to: '/test2'
      },
      {
        name: 'Movies',
        icon: 'movies',
        label: 'Movies',
        to: '/test3'
      }
    ]
  },
  {
    name: 'email',
    icon: 'mails',
    label: 'E-mail',
    to: '/test1'
  },
  {
    name: 'alert',
    icon: 'alarms',
    label: 'Alert',
    to: '/test2'
  },
  {
    name: 'Movies',
    icon: 'movies',
    label: 'Movies',
    to: '/test3'
  }
]

export default tabsData
