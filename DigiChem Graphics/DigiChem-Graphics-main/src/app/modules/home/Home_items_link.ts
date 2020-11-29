import { MenuItem } from 'src/app/core/model/menu-item.model';

export const HOME_ITEMS_LINKS: MenuItem[] = [
  {
    label: 'Sign Up',
    icon: 'login',
    showOnMobile: true,
    showOnTablet: true,
    showOnDesktop: true,
  },
  {
    label: 'About',
    icon: 'help',
    showOnMobile: false,
    showOnTablet: true,
    showOnDesktop: true,
  },
  {
    label: 'Pricing',
    icon: 'attach_money',
    showOnMobile: false,
    showOnTablet: false,
    showOnDesktop: true,
  },
  {
    label: 'Docs',
    icon: 'notes',
    showOnMobile: false,
    showOnTablet: true,
    showOnDesktop: true,
  },
  {
    label: 'Showcase',
    icon: 'slideshow',
    showOnMobile: false,
    showOnTablet: false,
    showOnDesktop: true,
  },
  {
    label: 'Blog',
    icon: 'rss_feed',
    showOnMobile: false,
    showOnTablet: false,
    showOnDesktop: false,
  },
];
