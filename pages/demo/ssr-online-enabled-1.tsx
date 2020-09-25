import { ReactElement } from 'react'

import DemoSSRTemplate from 'components/templates/DemoSSRTemplate/DemoSSRTemplate'
import { User } from 'api/user'

type SSROnlineEnabled1Props = {
  date: Date
  users: User[]
}
export default function SSROnlineEnabled1({
  date,
  users,
}: SSROnlineEnabled1Props): ReactElement {
  return <DemoSSRTemplate pageNumber={1} date={date} users={users} />
}

export { default as getServerSideProps } from 'utils/getServerSideProps'
