'use client';

import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import Link from 'next/link';
import { useState } from 'react';

interface ContactButtonProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  displayText: string;
}

export function ContactButton({ href, icon, label, displayText }: ContactButtonProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile: icon-only button that opens dialog */}
      <button
        onClick={() => setOpen(true)}
        className="flex h-8 w-8 items-center justify-center rounded-full border border-white/30 bg-white/10 text-neutral-200 backdrop-blur-sm transition-all hover:border-white/60 hover:bg-white/20 hover:text-white active:scale-95 sm:hidden"
        aria-label={label}
      >
        {icon}
      </button>

      {/* sm+: direct link with icon + text */}
      <Link
        href={href}
        className="hidden items-center gap-1.5 text-neutral-300 transition-colors hover:text-primary sm:flex"
      >
        {icon}
        <span className="text-xs md:text-sm">{displayText}</span>
      </Link>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="w-[90vw] max-w-sm rounded-lg">
          <DialogHeader>
            <DialogTitle className="text-base">{label}</DialogTitle>
          </DialogHeader>
          <Link
            href={href}
            onClick={() => setOpen(false)}
            className="flex items-center justify-center gap-2 rounded-md bg-primary/10 px-4 py-3 text-base font-medium text-primary transition-colors hover:bg-primary/20"
          >
            {icon}
            {displayText}
          </Link>
        </DialogContent>
      </Dialog>
    </>
  );
}
