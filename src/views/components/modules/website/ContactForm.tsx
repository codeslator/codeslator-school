import { FC } from 'react'
import { Button, Card, CardContent, Grid, TextField, Typography } from '@mui/material';
import { Formik } from 'formik';
import { CONTACT_INITIAL_VALUES, CONTACT_VALIDATION_SCHEMA } from '../../validations/websiteValidations';

const ContactForm: FC = () => {
  return (
    <Card elevation={5}>
      <CardContent>
        <Formik
          initialValues={CONTACT_INITIAL_VALUES}
          validationSchema={CONTACT_VALIDATION_SCHEMA}
          onSubmit={(values) => console.log(values)}
        >
          {({
            handleSubmit,
            handleBlur,
            handleChange,
            values,
            errors,
            touched
          }) => (
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography variant="h6" color="primary" fontWeight={700}>Say something...</Typography>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="text"
                    name="fullName"
                    id="fullName"
                    label="Full Name"
                    fullWidth
                    value={values.fullName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={Boolean(touched.fullName && errors.fullName)}
                    helperText={touched.fullName && errors.fullName}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="email"
                    fullWidth
                    id="email"
                    label="E-mail"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={Boolean(touched.email && errors.email)}
                    helperText={touched.email && errors.email}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="text"
                    name="message"
                    id="message"
                    label="Message"
                    fullWidth
                    multiline
                    rows={4}
                    value={values.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={Boolean(touched.message && errors.message)}
                    helperText={touched.message && errors.message}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button type="submit" fullWidth variant="contained" color="secondary">
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          )}
        </Formik>
      </CardContent>
    </Card>
  );
};

export default ContactForm