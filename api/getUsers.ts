import faker from 'faker'

import wait from 'utils/wait'

import type { User } from './user'

type GetUsersReturn = User[]

export default async function getUsers(): Promise<GetUsersReturn> {
  // wait 100ms
  await wait(100)

  const users: User[] = Array.from({ length: 3 }, () => {
    return {
      name: faker.name.findName(),
    }
  })

  return users
}
