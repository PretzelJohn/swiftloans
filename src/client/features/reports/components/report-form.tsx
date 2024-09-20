'use client';

import { useForm } from 'react-hook-form';
import { useCallback } from 'react';
import { TextInput } from '@/client/components/fields/text-input';
import { Button } from '@/client/components/button/button';
import SaveIcon from '@/assets/icons/save.svg';
import { SelectInput } from '@/client/components/fields/select-input';
import { type Report, reportCategory, type ReportCategory } from '@/client/features/reports/types';
import { FileInput } from '@/client/components/fields/file-input';

interface FormData {
  name: string;
  category: ReportCategory;
  files: string[];
}

const ERROR = 'Something went wrong. Please wait a few minutes and try again.';

interface ReportFormProps {
  report?: Report;
}

export const ReportForm = ({ report }: ReportFormProps) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    setError,
  } = useForm<FormData>({
    defaultValues: {
      name: report?.name,
      category: report?.category ?? 'leads',
      files: report?.file ? [report.file] : [],
    }
  });

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
        {report ? 'Edit report...' : 'Create a new report...'}
      </h1>

      <TextInput
        label='Title'
        placeholder='Weekly Sales Report'
        {...register('name', {
          required: 'Please enter a title for this report.',
        })}
        error={errors.name?.message}
      />

      <SelectInput
        label='Category'
        {...register('category')}
        options={Object.values(reportCategory).map((category) => {
          return {
            name: category.name,
            value: category.id,
          };
        })}
      />

      <FileInput
        label='Report'
        {...register('files')}
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
