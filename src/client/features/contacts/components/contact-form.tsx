'use client';

import { useForm } from 'react-hook-form';
import { useCallback } from 'react';
import { TextInput } from '@/client/components/fields/text-input';
import { Button } from '@/client/components/button/button';
import { SwitchInput } from '@/client/components/fields/switch-input';
import SaveIcon from '@/shared/assets/icons/save.svg';
import { TextareaInput } from '@/client/components/fields/textarea-input';
import { SelectInput } from '@/client/components/fields/select-input';
import {
  type Contact,
  contactSource,
  type ContactSource,
} from '@/client/features/contacts/types';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  amountNeeded: number;
  yearsInBusiness: number;
  annualRevenue: number;
  personalFico: number;
  profitable: boolean;
  notes: string;
  source: ContactSource;
}

const ERROR = 'Something went wrong. Please wait a few minutes and try again.';

interface ContactFormProps {
  contact?: Contact;
}

export const ContactForm = ({ contact }: ContactFormProps) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    setError,
  } = useForm<FormData>({
    defaultValues: {
      firstName: contact?.firstName,
      lastName: contact?.lastName,
      email: contact?.email,
      phone: contact?.phone,
      amountNeeded: contact?.amountNeeded,
      yearsInBusiness: contact?.yearsInBusiness,
      annualRevenue: contact?.annualRevenue,
      personalFico: contact?.personalFico,
      profitable: contact?.profitable,
      notes: contact?.notes,
      source: contact?.source,
    },
  });

  const onSubmit = useCallback(
    (data: FormData) => {
      console.log(data);
      // TODO: send POST request to tRPC API
      setError('firstName', { type: 'value', message: ERROR });
    },
    [setError]
  );

  return (
    <form
      className='flex flex-col gap-4 w-fit max-w-full'
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1 className='font-semibold'>
        {contact ? 'Edit contact...' : 'Create a new contact...'}
      </h1>

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
        <div className='col-span-1 lg:col-span-2 flex flex-wrap gap-4'>
          <div className='flex flex-col gap-2 w-[280px] max-w-full'>
            <h2 className='text-small font-semibold'>Contact Information</h2>

            <div className='flex flex-col gap-4'>
              <TextInput
                label='First Name'
                placeholder='John'
                {...register('firstName', {
                  required: 'Please enter a first name for this contact.',
                })}
                error={errors.firstName?.message}
              />

              <TextInput
                label='Last Name'
                placeholder='Smith'
                {...register('lastName', {
                  required: 'Please enter a last name for this contact.',
                })}
                error={errors.lastName?.message}
              />

              <TextInput
                label='Email'
                placeholder='john.smith@example.com'
                {...register('email')}
                error={errors.email?.message}
              />

              <TextInput
                label='Phone'
                placeholder='(123) 456-7890'
                {...register('phone')}
                error={errors.phone?.message}
              />

              <SelectInput
                label='Source'
                {...register('source')}
                options={Object.values(contactSource).map((source) => {
                  return {
                    name: source.name,
                    value: source.id,
                  };
                })}
              />
            </div>
          </div>

          <div className='flex flex-col gap-2 w-[280px] max-w-full'>
            <h2 className='text-small font-semibold'>Loan Eligibility</h2>

            <div className='flex flex-col gap-4 h-full'>
              <TextInput
                label='Amount Needed'
                placeholder='$10,000'
                {...register('amountNeeded')}
                error={errors.amountNeeded?.message}
              />

              <TextInput
                label='Years In Business'
                placeholder='7'
                {...register('yearsInBusiness')}
                error={errors.yearsInBusiness?.message}
              />

              <TextInput
                label='Annual Revenue'
                placeholder='$200,000'
                {...register('annualRevenue')}
                error={errors.annualRevenue?.message}
              />

              <TextInput
                label='Personal FICO'
                placeholder='750'
                {...register('personalFico')}
                error={errors.personalFico?.message}
              />

              <div className='h-4' />

              <SwitchInput
                label='Profitable tax return?'
                {...register('profitable')}
              />
            </div>
          </div>
        </div>

        <div className='col-span-1 h-full w-full'>
          <TextareaInput
            label='Notes'
            rows={10}
            {...register('notes', {
              required: 'Please enter a title for this task.',
            })}
          />
        </div>
      </div>

      <div className='flex items-center justify-end gap-2'>
        <Button type='submit'>
          <SaveIcon className='h-4 w-4 shrink-0' />
          Save
        </Button>
      </div>
    </form>
  );
};
