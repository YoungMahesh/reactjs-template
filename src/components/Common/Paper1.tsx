import Paper from '@mui/material/Paper'

export default function Paper1({ children, sx }: { children: any; sx?: any }) {
  return (
    <Paper
      sx={{
        padding: '10px',
        margin: '10px',
        backgroundColor: 'secondary.main',
        width: 'fit-content',
        ...sx,
      }}
      elevation={4}
    >
      {children}
    </Paper>
  )
}
