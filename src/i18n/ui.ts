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
    'nav.inicio': 'Inicio',
    'nav.servicios': 'Servicios',
    'nav.nosotros': 'Nosotros',
    'nav.contacto': 'Contacto',
    'nav.team': 'Nuestro Equipo',
  },
  en: {
    'nav.inicio': 'Home',
    'nav.servicios': 'Services',
    'nav.nosotros': 'About Us',
    'nav.contacto': 'Contact',
    'nav.team': 'Our Team',
  },
} as const;

export const routes = {
  es: {
    team: 'equipo',
  },
  en: {
    team: 'team',
  },
};