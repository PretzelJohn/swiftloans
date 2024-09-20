import { Modal } from '@/client/components/modal/modal';
import { ContactForm } from '@/client/features/contacts/components/contact-form';

export const ContactModal = () => {
  return (
    <Modal>
      <ContactForm />
    </Modal>
  );
}