'use client';

import React from 'react';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { DarkModeToggle } from '@/components/common/dark-mode/DarkModeToggle';
import MuscleIcon from '@/components/svg/MuscleIcon';

export default function Header() {
  return (
    <header className="contents-padding sticky top-0 z-50 flex w-full items-center justify-between border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <SidebarTrigger />
      <div className="flex items-center gap-2">
        <MuscleIcon width="1.5rem" height="1.5rem" color="#facc15" />
        <span>Muscle Museum</span>
      </div>
      <DarkModeToggle />
    </header>
  );
}
