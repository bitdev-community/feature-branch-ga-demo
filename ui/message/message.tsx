import type { ReactNode } from 'react';

export type MessageProps = {
  children?: ReactNode;
};

export function Message({ children }: MessageProps) {
  return (
    <div>
      {children}
    </div>
  );
}
