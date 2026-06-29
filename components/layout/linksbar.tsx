import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu';
import { getCollections } from 'lib/shopify';
import { Mail, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { ContactButton } from './contact-button';

export default async function LinksBar() {
  const collections = await getCollections();

  return (
    <header className="relative w-full bg-gradient-to-r from-[#d50c2d] to-red-800">
      <Image
        src="/red-bg.png"
        alt="red background"
        width={2000}
        height={100}
        className="absolute inset-0 h-full w-full object-cover opacity-5"
      />
      <div className="relative z-10 mx-auto flex h-12 max-w-7xl items-center justify-between px-4 font-content md:h-16 md:px-6">
        <NavigationMenu>
          <NavigationMenuList className="flex items-center gap-1 text-neutral-200 md:gap-2">
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent px-3 py-2 text-xs text-neutral-200 transition-colors hover:bg-red-700 hover:text-white focus:bg-transparent focus:text-white data-[active]:bg-transparent data-[state=open]:bg-transparent md:px-4 md:text-sm dark:text-neutral-300">
                Shop by Category
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[90vw] max-w-[600px] grid-cols-2 gap-1 bg-darker p-4 md:w-[500px] lg:w-[600px]">
                  {collections.map((collection) => (
                    <li key={collection.handle}>
                      <NavigationMenuLink asChild>
                        <Link
                          href={collection.path}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">{collection.title}</div>
                          {collection.description && (
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {collection.description}
                            </p>
                          )}
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem className="hidden md:flex">
              <Link href="#" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <span className="px-1 text-sm text-neutral-200 transition-colors hover:text-white dark:text-neutral-300">
                    About us
                  </span>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem className="hidden md:flex">
              <Link href="#" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <span className="px-1 text-sm text-neutral-200 transition-colors hover:text-white dark:text-neutral-300">
                    Contact
                  </span>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem className="hidden md:flex">
              <Link href="#" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <span className="px-1 text-sm text-neutral-200 transition-colors hover:text-white dark:text-neutral-300">
                    FAQs
                  </span>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-4 md:gap-8">
          <ContactButton
            href="mailto:sales@zimapackaging.com"
            icon={<Mail className="h-4 w-4 md:h-5 md:w-5" />}
            label="Email us"
            displayText="sales@zimapackaging.com"
          />
          <ContactButton
            href="tel:+26772537524"
            icon={<Phone className="h-4 w-4 md:h-5 md:w-5" />}
            label="Call us"
            displayText="(+267) 72537524"
          />
        </div>
      </div>
    </header>
  );
}
