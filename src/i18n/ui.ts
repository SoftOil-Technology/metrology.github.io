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
    'nav.home': 'Inicio',
    'nav.services': 'Servicios',
    'nav.about': 'Nosotros',
    'nav.contact': 'Contacto',
    'nav.team': 'Nuestro Equipo',

    'nav.home.href': '/#top',
    'nav.services.href': '/#servicios',
    'nav.about.href': '/#nosotros',
    'nav.contact.href': '/#contacto',
    'nav.team.href': '/equipo',
  },
  en: {
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.about': 'About Us',
    'nav.contact': 'Contact',
    'nav.team': 'Our Team',

    'nav.home.href': '/#top',
    'nav.services.href': '/#services',
    'nav.about.href': '/#about',
    'nav.contact.href': '/#contact',
    'nav.team.href': '/equipo',
  },
} as const;

export const routes = {
  es: {
    servicios: '#servicios',
    nosotros: '#nosotros',
    contacto: '#contacto',
    equipo: 'equipo',
    marketplace: 'marketplace',
  },
  en: {
    servicios: '#services',
    nosotros: '#about',
    contacto: '#contact',
    equipo: 'team',
    marketplace: 'marketplace',
  },
};