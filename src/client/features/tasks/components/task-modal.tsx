import { Modal } from '@/client/components/modal/modal';
import { TaskForm } from '@/client/features/tasks/components/task-form';

export const TaskModal = () => {
  return (
    <Modal>
      <TaskForm />
    </Modal>
  );
};
