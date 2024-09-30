import ErrorIcon from '@/shared/assets/icons/error.svg';
import SuccessIcon from '@/shared/assets/icons/check.svg';
import clsx from 'clsx';

export type Variant = 'danger' | 'success';

const variants: Record<Variant, string> = {
  danger:
    'bg-danger-secondary border-danger-secondary text-on-danger-secondary',
  success:
    'bg-positive-secondary border-positive-secondary text-on-positive-secondary',
};

interface AlertProps {
  variant: Variant;
  message?: string;
}

export const Alert = ({ variant, message }: AlertProps) => {
  return (
    <div
      className={clsx(
        'flex gap-2 w-full p-4 rounded-lg border',
        variants[variant]
      )}
    >
      {variant === 'danger' ? (
        <ErrorIcon className='h-4 w-4 mt-1 shrink-0' />
      ) : (
        <SuccessIcon className='h-4 w-4 mt-1 shrink-0' />
      )}
      {message}
    </div>
  );
};
