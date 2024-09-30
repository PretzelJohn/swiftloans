import { ProfileTrigger } from '@/client/features/profile/components/profile-trigger';
import { Popover } from '@/client/features/popover/components/popover';
import { ProfileMenu } from '@/client/features/profile/components/profile-menu';
import type { AppUser } from '@/shared/schema/user';

interface ProfileSectionProps {
  user?: AppUser;
}

export const ProfileSection = ({ user }: ProfileSectionProps) => {
  const avatarUrl = user?.avatar_url ?? undefined;
  const name = `${user?.first_name} ${user?.last_name}`;
  const jobTitle = user?.job_title ?? undefined;

  return (
    <Popover
      align='start'
      positions={['top', 'right', 'bottom', 'left']}
      content={<ProfileMenu />}
    >
      <ProfileTrigger avatarUrl={avatarUrl} name={name} jobTitle={jobTitle} />
    </Popover>
  );
};
