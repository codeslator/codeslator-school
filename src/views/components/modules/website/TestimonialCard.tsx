import { Avatar, Box, Card, CardActions, CardContent, IconButton, Typography, Paper } from '@mui/material';
import { FC } from 'react'

interface TestimonialCardProps {
  fullName: string;
  profession: string;
  avatar: string;
  description: string;
  social: any[];
}

interface TestimonialProps {
  testimonial: TestimonialCardProps;
}

const TestimonialCard: FC<TestimonialProps> = ({ testimonial }) => {
  const { fullName, profession, avatar, description, social } = testimonial;

  return (
    <Card sx={{ my: 5, mx: 1 }} elevation={5}>
      <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', mb: 7 }}>
        <Avatar
          alt={fullName}
          src={avatar}
          sx={{ width: 100, height: 100, position: 'absolute', top: 5 }}
          component={Paper}
          elevation={6}
        />
      </Box>
      <CardContent>
        <Typography variant="h6" align="center" fontWeight={700} color="primary">{fullName}</Typography>
        <Typography variant="subtitle1" align="center">{profession}</Typography>
        <Typography variant="body1" align="center" paragraph>
          {description}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
        {social.map(({ url, Icon }) => (
          <IconButton href={url}>
            <Icon />
          </IconButton>
        ))}
      </CardActions>
    </Card>
  )
}

export default TestimonialCard