import { Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import Layout from '../components/Common/Layout'
import Paper1 from '../components/Common/Paper1'

export default function Home() {
  return (
    <Layout>
      <Paper1>
        <Typography variant="h4">Home Page</Typography>
        <Link style={{ color: 'white' }} to="about">
          About
        </Link>
      </Paper1>
    </Layout>
  )
}
