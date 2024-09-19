import Image from 'next/image';

interface ProfileProps {
  avatarUrl?: string;
  name?: string;
  role?: string;
}

export const Profile = ({ avatarUrl, name, role }: ProfileProps) => {
  return (
    <div className='flex items-center gap-2'>
      {avatarUrl && (
        <Image
          className='rounded-full w-8 h-8'
          src={avatarUrl}
          width={32}
          height={32}
          alt='Your profile'
        />
      )}

      <div className='flex flex-col'>
        <p className='text-small font-semibold truncate'>{name}</p>
        <p className='text-tiny text-brand-tertiary truncate'>{role}</p>
      </div>
    </div>
  );
}