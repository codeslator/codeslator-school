import { FC } from 'react'
import { Button, Card, CardContent, Grid, TextField, Typography } from '@mui/material';

const ContactForm: FC = () => {
  return (
    <Card elevation={5}>
      <CardContent>
        <form>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h6" color="secondary" fontWeight={700}>Say something...</Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="text"
                fullWidth
                id="name"
                label="Full Name"
                name="name"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="email"
                fullWidth
                id="email"
                label="E-mail"
                name="email"
              />
            </Grid>
            <Grid item xs={12}>
            <TextField
                fullWidth
                type="text"
                id="message"
                label="Message"
                name="message"
              />
            </Grid>
            <Grid item xs={12}>
              <Button fullWidth variant="contained" color="secondary">
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm