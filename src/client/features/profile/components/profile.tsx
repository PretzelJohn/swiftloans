import Image from 'next/image';

interface ProfileProps {
  avatarUrl?: string;
  name?: string;
  jobTitle?: string;
}

export const Profile = ({ avatarUrl, name, jobTitle }: ProfileProps) => {
  return (
    <div className='flex items-center gap-2 w-0 grow'>
      {avatarUrl && (
        <Image
          className='rounded-full w-8 h-8'
          src={avatarUrl}
          width={32}
          height={32}
          alt='Your profile'
        />
      )}

      <div className='flex flex-col overflow-x-hidden'>
        <p className='text-small font-semibold truncate'>{name}</p>
        <p className='text-tiny text-brand-tertiary truncate w-full'>{jobTitle}</p>
      </div>
    </div>
  );
};
