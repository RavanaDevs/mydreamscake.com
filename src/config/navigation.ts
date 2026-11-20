/** Site-wide navigation. Home sections use "/#id" so the links work from every page. */
export const navItems = [
  { label: "Home", href: "/#home" },
  { label: "Our Cakes", href: "/#cakes" },
  { label: "Gallery", href: "/gallery" },
  { label: "About Us", href: "/#about" },
  { label: "Contact", href: "/#contact" },
] as const;

export type NavItem = (typeof navItems)[number];

/** True when `item` is the page currently shown (section links never count as a page). */
export function isCurrentPage(item: NavItem, pathname: string) {
  return !item.href.includes("#") && pathname.startsWith(item.href);
}
