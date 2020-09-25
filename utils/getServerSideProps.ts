import getUsers from 'api/getUsers'
import { GetServerSideProps } from 'next'

const getServerSideProps: GetServerSideProps = async () => {
  const date = new Date()
  const users = await getUsers()

  return {
    props: { date: date.toString(), users },
  }
}

export default getServerSideProps
