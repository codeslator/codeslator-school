import { FC } from 'react'
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Typography
} from '@mui/material';
import { Link } from 'react-router-dom';

interface ServiceCard {
  title: string;
  subtitle?: string;
  image?: any;
  description: string[];
  type: string;
  buttonText: string;
};

interface ServiceProp {
  service: ServiceCard;
}

const ServiceCard: FC<ServiceProp> = ({ service }) => {
  const { title, subtitle, image, description, buttonText, type } = service;
  return (
    <Card elevation={10}>
      <CardHeader
        title={(
          <Typography
            align="center"
            variant="h4"
            color={type === 'teacher' ? 'primary' : 'secondary'}
          >
            {title}
          </Typography>
        )}
        subheader={subtitle && <Typography align="center">{subtitle}</Typography>}
      />
      <CardContent sx={{ p: 0 }}>
        <Box sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
          <Box component="img" src={image} alt={title} sx={{ width: '70%' }} />
        </Box>
        <Box component="ul" sx={{ listStyle: 'none' }}>
          {description.map((line) => (
            <Typography component="li" variant="subtitle1" align="center" key={line}>
              {line}
            </Typography>
          ))}
        </Box>
      </CardContent>
      <CardActions>
        <Button
          component={Link}
          size="large"
          to="/register"
          fullWidth
          variant="contained"
          color={type === 'teacher' ? 'primary' : 'secondary'}
        >
          {buttonText}
        </Button>
      </CardActions>
    </Card>
  );
};

export default ServiceCard;