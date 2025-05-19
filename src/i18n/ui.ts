import SpainFlag from '@/components/flags/Spain.astro';
import UnitedStatesFlag from '@/components/flags/UnitedStates.astro';

export const LANGUAGES: Record<
  string,
  { code: string; name: string; flag: typeof SpainFlag }
> = {
  en: {
    code: 'en',
    name: 'English',
    flag: UnitedStatesFlag,
  },
  es: {
    code: 'es',
    name: 'Español',
    flag: SpainFlag,
  },
};

export const defaultLang = 'es';
export const showDefaultLang = false;

export const ui = {
  es: {
    'nav.home.title': 'Inicio',
    'nav.services.title': 'Servicios',
    'nav.about.title': 'Nosotros',
    'nav.contact.title': 'Contacto',
    'nav.team.title': 'Nuestro Equipo',

    'nav.home.href': '/#top',
    'nav.services.href': '/#servicios',
    'nav.about.href': '/#nosotros',
    'nav.contact.href': '/#contacto',
    'nav.team.href': '/equipo',
  },
  en: {
    'nav.home.title': 'Home',
    'nav.services.title': 'Services',
    'nav.about.title': 'About Us',
    'nav.contact.title': 'Contact',
    'nav.team.title': 'Our Team',

    'nav.home.href': '/#top',
    'nav.services.href': '/#services',
    'nav.about.href': '/#about',
    'nav.contact.href': '/#contact',
    'nav.team.href': '/equipo',
  },
} as const;

export const routes = {
  es: {
    equipo: 'equipo',
    marketplace: 'marketplace',
  },
  en: {
    equipo: 'team',
    marketplace: 'marketplace',
  },
};