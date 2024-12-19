'use client';

import React from 'react';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { DarkModeToggle } from '@/components/common/dark-mode/DarkModeToggle';

export default function Header() {
  return (
    <header className="contents-padding sticky top-0 z-50 flex w-full items-center justify-between border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <SidebarTrigger />
      <span>Header</span>
      <DarkModeToggle />
    </header>
  );
}
