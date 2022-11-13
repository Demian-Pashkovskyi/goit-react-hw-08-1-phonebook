import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectContactsFilter } from 'redux/AppSlice';
import { useGetContactsQuery } from 'services/contactsApi';
import { Audio } from 'react-loader-spinner';
import { Modal } from 'components/Modal/Modal';
import { EditContact } from 'components/EditContact/EditContact';
import { ContactListItem } from './components/ContactListItem';
import { Contacts, Wrapper } from './ContactList.styled';

export const ContactList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [contactData, setContactData] = useState(null);
  const { data: contacts, isFetching } = useGetContactsQuery();
  const filter = useSelector(selectContactsFilter);
  const filteredContacts = contacts?.filter(({ name }) =>
    name.toLowerCase().includes(filter)
  );

  const openModal = data => {
    setIsModalOpen(true);
    setContactData(data);
    window.document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    window.document.body.style.overflow = 'unset';
  };

  return (
    <>
      <Contacts>
        {isFetching && (
          <Wrapper>
            <Audio
              width="70"
              height="70"
              color="#61dafb"
              radius="9"
              ariaLabel="loading"
            />
          </Wrapper>
        )}
        {filteredContacts?.length ? (
          filteredContacts.map(({ id, name, number }) => (
            <ContactListItem
              key={id}
              id={id}
              name={name}
              number={number}
              openModal={() => openModal({ id, name, number })}
            />
          ))
        ) : (
          <li>No contacts</li>
        )}
      </Contacts>
      {isModalOpen && (
        <Modal closeModal={closeModal}>
          <EditContact contactData={contactData} closeModal={closeModal} />
        </Modal>
      )}
    </>
  );
};