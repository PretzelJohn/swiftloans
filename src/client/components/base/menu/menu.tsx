import type { PropsWithChildren } from 'react';

export const Menu = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex flex-col gap-1 rounded-lg border bg-white p-4 shadow-md">
      {children}
    </div>
  );
}