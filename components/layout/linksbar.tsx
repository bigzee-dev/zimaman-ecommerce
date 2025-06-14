'use client';

// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger
// } from '@/components/ui/dropdown-menu';
import { Mail, Phone } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function LinksBar() {
  const [pagesOpen, setPagesOpen] = useState(false);
  const [blogsOpen, setBlogsOpen] = useState(false);

  return (
    <header className="w-full border-t dark:border-gray-500/30">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-2 md:px-6">
        <nav className="flex items-center space-x-6">
          <Link
            href="#"
            className="text-sm font-medium transition-colors hover:text-primary dark:text-neutral-400"
          >
            Shop
          </Link>
          <Link
            href="#"
            className="text-sm font-medium transition-colors hover:text-primary dark:text-neutral-400"
          >
            About us
          </Link>
          <Link
            href="#"
            className="text-sm font-medium transition-colors hover:text-primary dark:text-neutral-400"
          >
            Contact
          </Link>
          {/* <DropdownMenu open={pagesOpen} onOpenChange={setPagesOpen}>
            <DropdownMenuTrigger asChild>
              <Button
                variant="link"
                className={cn(
                  'flex items-center gap-1 p-0 text-sm font-medium',
                  pagesOpen ? 'text-primary' : 'text-foreground'
                )}
              >
                Pages
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem>
                <Link href="#">About Us</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="#">FAQ</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="#">Shipping & Returns</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu open={blogsOpen} onOpenChange={setBlogsOpen}>
            <DropdownMenuTrigger asChild>
              <Button
                variant="link"
                className={cn(
                  'flex items-center gap-1 p-0 text-sm font-medium',
                  blogsOpen ? 'text-primary' : 'text-foreground'
                )}
              >
                Blogs
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem>
                <Link href="#">Latest Posts</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="#">Featured</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="#">Categories</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu> */}
        </nav>
        <div className="flex items-center space-x-10">
          <Link
            href="mailto:contact@example.com"
            className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary dark:text-neutral-400"
          >
            <Mail className="h-5 w-5 text-[#001F3F] dark:text-neutral-400" />

            <span className="hidden sm:inline">contact@example.com</span>
          </Link>
          <Link
            href="tel:+1234567890"
            className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary dark:text-neutral-400"
          >
            <Phone className="h-5 w-5 text-[#001F3F] dark:text-neutral-400" />

            <span className="hidden sm:inline">+1 (234) 567-890</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
