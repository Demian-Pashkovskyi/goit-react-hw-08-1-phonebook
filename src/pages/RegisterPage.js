import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useRegisterMutation } from 'services/contactsApi';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { addUserData } from 'redux/auth/auth-slice';
import { useDispatch } from 'react-redux';

const RegistrationPage = () => {
  const [registerUser, { data, isSuccess, isError }] = useRegisterMutation();
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
      name: '',
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().max(255).required('First name is required'),
      email: Yup.string()
        .email('Must be a valid email')
        .max(255)
        .required('Email is required'),
      password: Yup.string().max(255).required('Password is required'),
    }),
    onSubmit: ({ name, email, password }) => {
      registerUser({
        name,
        email,
        password,
      });
    },
  });

  useEffect(() => {
    if (isSuccess || isError) setSubmitting(false);

    if (isSuccess) {
      toast.success('User created');
      dispatch(addUserData(data));
    }

    if (isError) {
      toast.error('Something went wrong. Try again.');
    }
  }, [data, dispatch, isError, isSuccess, setSubmitting]);

  return (
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
              Create a new account
            </Typography>
            <Typography color="textSecondary" gutterBottom variant="body2">
              Use your email to create a new account
            </Typography>
          </Box>
          <TextField
            error={Boolean(touched.name && errors.name)}
            fullWidth
            helperText={touched.name && errors.name}
            label="Name"
            margin="normal"
            name="name"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.name}
            variant="outlined"
          />
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
              Sign Up Now
            </Button>
          </Box>
          <Typography color="textSecondary" variant="body2">
            Have an account? <Link to="/login">Sign In</Link>
          </Typography>
        </form>
      </Container>
    </Box>
  );
};

export default RegistrationPage;