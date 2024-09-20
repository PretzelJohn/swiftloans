'use client';

import { useForm } from 'react-hook-form';
import { useCallback } from 'react';
import { TextInput } from '@/client/components/fields/text-input';
import { Button } from '@/client/components/button/button';
import {
  type Task,
  taskStatus,
  type TaskStatus,
} from '@/client/features/tasks/types';
import { SwitchInput } from '@/client/components/fields/switch-input';
import SaveIcon from '@/assets/icons/save.svg';
import { TextareaInput } from '@/client/components/fields/textarea-input';
import { SelectInput } from '@/client/components/fields/select-input';
import dayjs from 'dayjs';

interface FormData {
  name: string;
  description: string;
  remindMe: boolean;
  remindTime: string;
  status: TaskStatus;
}

const ERROR = 'Something went wrong. Please wait a few minutes and try again.';

interface TaskFormProps {
  task?: Task;
}

export const TaskForm = ({ task }: TaskFormProps) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    setError,
  } = useForm<FormData>({
    defaultValues: {
      name: task?.name,
      description: task?.description,
      remindMe: !!task?.reminder,
      remindTime: (dayjs(task?.reminder) ?? dayjs().add(1, 'hour')).format(
        'YYYY-MM-DDTHH:mm'
      ),
      status: task?.status ?? 'notStarted',
    },
  });

  const remindMe = watch('remindMe');

  const onSubmit = useCallback(
    (data: FormData) => {
      console.log(data);
      // TODO: send POST request to tRPC API
      setError('name', { type: 'value', message: ERROR });
    },
    [setError]
  );

  return (
    <form
      className='flex flex-col gap-4 w-[360px] max-w-full'
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1 className='font-semibold'>
        {task ? 'Edit task...' : 'Create a new task...'}
      </h1>

      <TextInput
        label='Title'
        placeholder='Help John Smith launch his business'
        {...register('name', {
          required: 'Please enter a title for this task.',
        })}
        error={errors.name?.message}
      />

      <TextareaInput
        label='Description'
        rows={6}
        {...register('description', {
          required: 'Please enter a title for this task.',
        })}
      />

      <div className='flex flex-col gap-2'>
        <SwitchInput
          label='Remind me'
          checked={remindMe}
          {...register('remindMe')}
        />

        <TextInput
          type='datetime-local'
          {...register('remindTime', {
            required: remindMe && 'Please pick a date and time to remind you.',
          })}
          hidden={!remindMe}
          error={errors.remindTime?.message}
        />
      </div>

      <SelectInput
        label='Status'
        {...register('status')}
        options={Object.values(taskStatus).map((status) => {
          return {
            name: status.name,
            value: status.id,
          };
        })}
      />

      <div className='flex items-center justify-end gap-2'>
        <Button type='submit'>
          <SaveIcon className='h-4 w-4 shrink-0' />
          Save
        </Button>
      </div>
    </form>
  );
};
