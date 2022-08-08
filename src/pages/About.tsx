import { Typography } from '@mui/material'
import { Container } from '@mui/system'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <Container>
      <Typography variant="h4">About Page</Typography>
      <Link to="/">Home</Link>
    </Container>
  )
}
