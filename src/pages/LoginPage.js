import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useLoginMutation } from 'services/contactsApi';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addUserData } from 'redux/auth/auth-slice';

const LoginPage = () => {
  const [login, { data, isSuccess, isError }] = useLoginMutation();
  const dispatch = useDispatch();
  const {
    handleSubmit,
    touched,
    errors,
    handleBlur,
    handleChange,
    values,
    isSubmitting,
    setSubmitting,
  } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Must be a valid email')
        .max(255)
        .required('Email is required'),
      password: Yup.string().max(255).required('Password is required'),
    }),
    onSubmit: ({ email, password }) => {
      login({
        email,
        password,
      });
    },
  });

  useEffect(() => {
    if (isSuccess || isError) setSubmitting(false);

    if (isSuccess) {
      toast.success('Login is successful');
      dispatch(addUserData(data));
    }

    if (isError) {
      toast.error('Something went wrong. Try again.');
    }
  }, [data, dispatch, isError, isSuccess, setSubmitting]);

  return (
    <>
      <Box
        component="main"
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexGrow: 1,
          minHeight: '100%',
        }}
      >
        <Container maxWidth="sm">
          <form onSubmit={handleSubmit}>
            <Box sx={{ my: 3 }}>
              <Typography color="textPrimary" variant="h4">
                Sign in
              </Typography>
              <Typography color="textSecondary" gutterBottom variant="body2">
                Sign in on the internal platform
              </Typography>
            </Box>
            <TextField
              error={Boolean(touched.email && errors.email)}
              fullWidth
              helperText={touched.email && errors.email}
              label="Email Address"
              margin="normal"
              name="email"
              onBlur={handleBlur}
              onChange={handleChange}
              type="email"
              value={values.email}
              variant="outlined"
            />
            <TextField
              error={Boolean(touched.password && errors.password)}
              fullWidth
              helperText={touched.password && errors.password}
              label="Password"
              margin="normal"
              name="password"
              onBlur={handleBlur}
              onChange={handleChange}
              type="password"
              value={values.password}
              variant="outlined"
            />
            <Box sx={{ py: 2 }}>
              <Button
                color="primary"
                disabled={isSubmitting}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
              >
                Sign In Now
              </Button>
            </Box>
            <Typography color="textSecondary" variant="body2">
              Don&apos;t have an account? <Link to="/register">Sign Up</Link>
            </Typography>
          </form>
        </Container>
      </Box>
    </>
  );
};

export default LoginPage;