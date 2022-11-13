import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import {
  useCreateContactMutation,
  useGetContactsQuery,
} from 'services/contactsApi';
import { toast } from 'react-toastify';
import { Audio } from 'react-loader-spinner';
import { Button } from '@mui/material';
import { Label, FormBox, Error, Wrapper } from './ContactForm.styled';

export const ContactForm = () => {
  const { data: contacts } = useGetContactsQuery();
  const [createContact, { isLoading, isSuccess, isError }] =
    useCreateContactMutation();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    resetField,
  } = useForm({
    defaultValues: { name: '', number: '' },
  });
  const nameValue = watch('name');
  const numberValue = watch('number');

  const handleNewContact = newContact => {
    if (!hasDuplicates(newContact.name)) {
      createContact(newContact);
      resetField('name');
      resetField('number');
    } else {
      toast.warn(`${newContact.name} is already in contacts.`);
    }
  };

  const hasDuplicates = duplicate => {
    return contacts.find(({ name }) => name === duplicate);
  };

  const onFormSubmit = () => {
    const newContact = {
      name: nameValue,
      number: numberValue,
    };

    handleNewContact(newContact);
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success('Contact added');
    }

    if (isError) {
      toast.error('Oops!! Something went wrong!');
    }
  }, [isSuccess, isError]);

  return (
    <FormBox onSubmit={handleSubmit(onFormSubmit)} autoComplete="off">
      {isLoading && (
        <Wrapper>
          <Audio color="#61dafb" />
        </Wrapper>
      )}
      <Label>
        <span>Name</span>
        <input
          placeholder="John"
          value={nameValue}
          type="text"
          {...register('name', {
            required: { value: true, message: 'This field is required' },
            pattern: {
              value:
                /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/g,
              message:
                "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",
            },
          })}
        />
        {errors.name?.message && <Error>{errors.name?.message}</Error>}
      </Label>
      <Label>
        <span>Number</span>
        <input
          placeholder="1234567890"
          value={numberValue}
          {...register('number', {
            required: { value: true, message: 'This field is required' },
            pattern: {
              value:
                /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/g,
              message:
                'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +',
            },
          })}
          type="tel"
        />
        {errors.number?.message && <Error>{errors.number?.message}</Error>}
      </Label>
      <Button type="submit" variant="contained">
        Add contact
      </Button>
    </FormBox>
  );
};