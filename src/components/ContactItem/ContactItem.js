import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Oval } from 'react-loader-spinner';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import { Contact, Btn } from './ContactItemStyled';
import { Box } from 'components/Styled/Box';
import { useDeleteContactByIdMutation } from 'services/contactsApi';
import { toast } from 'react-toastify';

export const ContactListItem = ({ id, name, number, openModal }) => {
  const [deleteContact, { isSuccess, isLoading, isError }] =
    useDeleteContactByIdMutation();

  useEffect(() => {
    if (isSuccess) {
      toast.success('Contact deleted');
    }

    if (isError) {
      toast.error('Oops!! Something went wrong!');
    }
  }, [isSuccess, isError]);

  return (
    <>
      <Box display="flex" justifyContent="space-between" gridGap="10px">
        <Contact>
          {name}: {number}
        </Contact>
        <Box display="flex" gridGap="10px">
          <Btn
            type="button"
            onClick={() => {
              openModal(id);
            }}
          >
            <EditIcon fontSize="small" style={{ color: 'blue' }} />
          </Btn>
          <Btn
            type="button"
            onClick={() => deleteContact(id)}
            disabled={isLoading}
          >
            {isLoading ? (
              <Oval
                height={10}
                width={10}
                color="red"
                visible={true}
                ariaLabel="oval-loading"
                secondaryColor="red"
                strokeWidth={10}
                strokeWidthSecondary={10}
              />
            ) : (
              <DeleteForeverIcon fontSize="small" style={{ color: 'red' }} />
            )}
          </Btn>
        </Box>
      </Box>
    </>
  );
};

ContactListItem.propType = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
};