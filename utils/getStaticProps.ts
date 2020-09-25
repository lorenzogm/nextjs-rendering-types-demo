import getUsers from 'api/getUsers'
import { GetStaticProps } from 'next'

const getStaticProps: GetStaticProps = async () => {
  const date = new Date()
  const users = await getUsers()

  return {
    props: { date: date.toString(), users },
  }
}

export default getStaticProps
