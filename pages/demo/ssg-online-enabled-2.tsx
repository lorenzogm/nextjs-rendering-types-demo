import { ReactElement } from 'react'

import DemoSSGTemplate from 'components/templates/DemoSSGTemplate/DemoSSGTemplate'
import { User } from 'api/user'

type SSGOnlineEnabled2Props = {
  date: Date
  users: User[]
}
export default function SSGOnlineEnabled1({
  date,
  users,
}: SSGOnlineEnabled2Props): ReactElement {
  return <DemoSSGTemplate pageNumber={2} date={date} users={users} />
}

export { default as getStaticProps } from 'utils/getStaticProps'
