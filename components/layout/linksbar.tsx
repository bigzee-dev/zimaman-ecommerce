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
      <div className="relative z-10 mx-auto flex h-16 max-w-7xl items-center justify-between px-2 font-content">
        <NavigationMenu>
          <NavigationMenuList className="flex items-center space-x-5 text-neutral-200">
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent text-sm text-neutral-200 transition-colors hover:bg-transparent hover:text-white focus:bg-transparent focus:text-white data-[active]:bg-transparent data-[state=open]:bg-transparent dark:text-neutral-300">
                Shop by Category
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-x-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
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
            <NavigationMenuItem>
              <Link href="#" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <span className="bg-transparent text-sm text-neutral-200 transition-colors hover:text-white dark:text-neutral-300">
                    About us
                  </span>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="#" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <span className="bg-transparent text-sm text-neutral-200 transition-colors hover:text-white dark:text-neutral-300">
                    Contact
                  </span>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="#" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <span className="bg-transparent text-sm text-neutral-200 transition-colors hover:text-white dark:text-neutral-300">
                    FAQS
                  </span>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex items-center space-x-10">
          <Link
            href="mailto:contact@example.com"
            className="flex items-center gap-1.5 text-sm font-medium text-neutral-300 transition-colors hover:text-primary"
          >
            <Mail className="h-5 w-5 text-neutral-300" />

            <span className="hidden sm:inline">sales@zimapackaging.com</span>
          </Link>
          <Link
            href="tel:+1234567890"
            className="flex items-center gap-1.5 text-sm font-medium text-neutral-300 transition-colors hover:text-primary"
          >
            <Phone className="h-5 w-5 text-neutral-300" />

            <span className="hidden sm:inline">(+267) 72537524</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
