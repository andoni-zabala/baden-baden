import type {
  CTAConfig,
  NavLink,
  ServiceItem,
  TestimonialItem,
  ProcessStep,
  SocialLink,
  FormOption,
  LegalLink,
  StructuredDataConfig,
  Credential,
  FloatCard,
  Stat,
  Dog,
} from '../types';

import identityData from '../data/identity.json';
import ctaData from '../data/cta.json';
import heroData from '../data/hero.json';
import servicesData from '../data/services.json';
import testimonialsData from '../data/testimonials.json';

// ─── SITE IDENTITY ────────────────────────────────────────────────────────────
const defaultSite = {
  name:        'Criadero Baden Baden Dobermanns',
  tagline:     'Desde 1973 — Excelencia en la cría',
  url:         'https://www.badenbadendobermann.com',
  locale:      'es',
  ogLocale:    'es_AR',
  description: 'Criadero de Dobermanns de alto nivel desde 1973. Dirigido por el Dr. Javier Fariña, veterinario, docente universitario y juez internacional de la raza.',
  ogImage:     '/og-image.jpg',
  author:      'Dr. Javier Fariña',
  themeColor:  '#0D0D0D',
};

export const site = { ...defaultSite, ...(identityData as Partial<typeof defaultSite>) };

// ─── CALL TO ACTION ───────────────────────────────────────────────────────────
const defaultCTA: CTAConfig = {
  type:    'whatsapp',
  value:   '+5491154130401',
  label:   'Consultar ahora',
  message: '¡Hola! Me gustaría obtener más información sobre el Criadero Baden Baden.',
};

export const primaryCTA: CTAConfig = { ...defaultCTA, ...(ctaData as Partial<CTAConfig>) };

export const secondaryCTA: CTAConfig = {
  type:  'url',
  value: '/nuestros-dobermanns',
  label: 'Ver nuestros perros',
};

// ─── NAVIGATION ───────────────────────────────────────────────────────────────
export const navigation: NavLink[] = [
  { label: 'Inicio',               href: '/'                    },
  { label: 'Quiénes Somos',        href: '/quienes-somos'       },
  { label: 'Nuestros Dobermanns',  href: '/nuestros-dobermanns' },
  { label: 'Nuevas Lechigadas',    href: '/nuevas-lechigadas'   },
  { label: 'Obediencia',           href: '/obediencia'          },
  { label: 'Contacto',             href: '/contacto'            },
];

// ─── HERO SECTION ─────────────────────────────────────────────────────────────
const defaultHero = {
  eyebrow:      'Criadero Baden Baden — Desde 1973',
  heading:      'Dobermanns de <em>excelencia</em> con carácter y belleza.',
  body:         'Somos un criadero con más de 50 años de experiencia en la cría selectiva del Dobermann. Dirigido por el Dr. Javier Fariña, médico veterinario, docente universitario y juez internacional de la raza.',
  profilePhoto: '/images/hero.jpg',
  badgeLabel:   'Criadero desde 1973',
  floatCards: [
    { icon: '🏆', label: 'Campeones',  value: 'Nacionales e internacionales' },
    { icon: '🐾', label: 'Raza pura',  value: 'Pedigrí FCA certificado'      },
  ] satisfies FloatCard[],
  stats: [
    { value: '+50', label: 'Años de experiencia'  },
    { value: '+30', label: 'Campeones nacionales'  },
    { value: '3',   label: 'Países como juez'      },
  ] satisfies Stat[],
};

export const hero = { ...defaultHero, ...(heroData as Partial<typeof defaultHero>) };

// ─── ABOUT SECTION ───────────────────────────────────────────────────────────
export const about = {
  sectionTag: 'Quiénes somos',
  heading:    'El Dr. Javier Fariña y el <em>legado Baden Baden.</em>',
  paragraphs: [
    'El Dr. Javier Fariña es médico veterinario egresado de la Universidad de Buenos Aires y docente en Teriogenología (reproducción animal) en la FCV-UBA. Recibió su primer Dobermann a los 13 años, iniciando así una vida dedicada a la raza.',
    'Desde la fundación del Criadero Baden Baden en 1973, el Dr. Fariña ha criado y exhibido Dobermanns de alto rendimiento en exposiciones de estructura y pruebas de trabajo. Es juez de exposiciones caninas especializadas en múltiples países y autor de manuales ilustrados sobre el Dobermann.',
  ],
  photo:       '/images/dr-farina.jpg',
  photoAlt:    'Dr. Javier Fariña — Médico Veterinario',
  credentials: [
    { icon: '◎', title: 'M.V. UBA',          subtitle: 'Médico Veterinario — Universidad de Buenos Aires'   },
    { icon: '◈', title: 'Docente FCV-UBA',    subtitle: 'Teriogenología — Facultad de Ciencias Veterinarias' },
    { icon: '◇', title: 'Juez Internacional', subtitle: 'Exposiciones caninas especializadas'                },
  ] satisfies Credential[],
  values: [
    'Cría selectiva',
    'Salud y carácter',
    'Estándar de raza',
    'Apoyo al comprador',
  ],
};

// ─── PROCESS (CÓMO FUNCIONA) ─────────────────────────────────────────────────
export const process = {
  sectionTag: 'El proceso',
  heading:    'Cómo funciona',
  subheading: 'Cuatro pasos para sumar un Dobermann Baden Baden a tu familia.',
  steps: [
    { number: '01', title: 'Consulta inicial',     body: 'Comunicate con nosotros por WhatsApp o email para expresar tu interés y hacernos las preguntas que necesitás.'        },
    { number: '02', title: 'Evaluamos tu caso',    body: 'Conversamos sobre tu estilo de vida, experiencia con la raza y lo que buscás en un Dobermann.'                        },
    { number: '03', title: 'Reserva tu cachorro',  body: 'Cuando hay camada disponible, podés reservar tu cachorro con un anticipo para asegurar tu lugar.'                      },
    { number: '04', title: 'Recibís tu Dobermann', body: 'Tu cachorro llegará con vacunas al día, desparasitaciones, chip de identificación y documentación genealógica FCA.'   },
  ] satisfies ProcessStep[],
};

// ─── SERVICES SECTION ────────────────────────────────────────────────────────
const defaultServices = {
  sectionTag:   'Programas',
  heading:      '¿En qué podemos <em>ayudarte?</em>',
  subheading:   'Desde la cría hasta la obediencia, cubrimos todas las facetas de la raza.',
  areaLabels:   ['Cría selectiva', 'Exposiciones', 'Obediencia', 'Asesoramiento', 'Genética', 'Salud'],
  modalityNote: '📍 Criadero ubicado en Buenos Aires, Argentina.',
  items: [
    {
      number:      '01',
      icon:        '🐾',
      title:       'Venta de Cachorros',
      tagline:     'Lechigadas planificadas con los mejores ejemplares',
      description: 'Cachorros con pedigrí FCA, vacunados, desparasitados y con asesoramiento post-venta personalizado.',
      features:    ['Pedigrí FCA', 'Vacunas completas', 'Chip de identificación', 'Asesoramiento post-venta'],
      price:       'Consultar disponibilidad',
      featured:    true,
    },
    {
      number:      '02',
      icon:        '🏆',
      title:       'Dobermanns de Exposición',
      tagline:     'Campeones nacionales e internacionales',
      description: 'Ejemplares seleccionados para competencia bajo el estándar internacional de la raza Dobermann.',
      features:    ['Linajes campeones', 'Evaluación morfológica', 'Historial de exposiciones', 'Seguimiento profesional'],
      price:       'Consultar',
      featured:    false,
    },
    {
      number:      '03',
      icon:        '◈',
      title:       'Programa de Obediencia',
      tagline:     'SCH y obediencia deportiva',
      description: 'Entrenamiento en disciplinas de trabajo con los mejores ejemplares del criadero, incluido SCH III.',
      features:    ['SCH III disponible', 'Entrenadores especializados', 'Seguimiento individual', 'Certificados de trabajo'],
      price:       'Consultar',
      featured:    false,
    },
  ] satisfies ServiceItem[],
};

export const services = {
  ...defaultServices,
  ...(servicesData as Partial<typeof defaultServices>),
};

// ─── TESTIMONIALS ────────────────────────────────────────────────────────────
const defaultTestimonials = {
  sectionTag: 'Propietarios',
  heading:    'Lo que dicen nuestros propietarios',
  ctaPrompt:  '¿Querés sumar un Dobermann a tu familia?',
  items: [
    {
      quote:  'Quique es un perro increíble — un carácter equilibrado, muy social y con una presencia impresionante. El criadero nos acompañó en todo momento.',
      name:   'Martín G.',
      role:   'Propietario de Baden Baden Enrique, Buenos Aires',
      avatar: 'MG',
      result: 'Campeón Regional',
    },
    {
      quote:  'La seriedad del criadero y el respaldo del Dr. Fariña nos dieron mucha confianza. Hoy tenemos un Dobermann de exposición que es la envidia del ring.',
      name:   'Claudia P.',
      role:   'Criadora y expositora, Córdoba',
      avatar: 'CP',
      result: 'Top Twenty Argentina',
    },
    {
      quote:  'Nunca esperé tanta dedicación post-venta. Siempre disponibles para cualquier consulta y el cachorro llegó en condiciones perfectas.',
      name:   'Roberto S.',
      role:   'Propietario, Rosario',
      avatar: 'RS',
      result: 'Familia feliz',
    },
  ] satisfies TestimonialItem[],
};

export const testimonials = {
  ...defaultTestimonials,
  ...(testimonialsData as Partial<typeof defaultTestimonials>),
};

// ─── CONTACT SECTION ─────────────────────────────────────────────────────────
export const contact = {
  sectionTag:  'Contacto',
  heading:     'Ponete en <em>contacto</em>',
  subheading:  'La forma más rápida de consultar es vía WhatsApp. También podés enviarnos un mensaje y te respondemos a la brevedad.',
  email:       'badenbadendobermann@gmail.com',
  location:    'Buenos Aires, Argentina',
  hours:       'Lun–Sáb, 9:00–19:00',
  social: [
    { platform: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/badenbadendobermann' },
    { platform: 'facebook',  label: 'Facebook',  href: 'https://www.facebook.com/badenbadendobermann'  },
  ] satisfies SocialLink[],
  formFields: {
    namePlaceholder:    'Juan Pérez',
    emailPlaceholder:   'juan@email.com',
    goalLabel:          '¿En qué podemos ayudarte?',
    goalOptions: [
      { value: 'cachorro',   label: 'Me interesa un cachorro'     },
      { value: 'exposicion', label: 'Dobermann de exposición'      },
      { value: 'obediencia', label: 'Programa de obediencia'       },
      { value: 'info',       label: 'Información general'          },
    ] satisfies FormOption[],
    messageLabel:       'Tu consulta',
    messagePlaceholder: '¿Qué querés saber sobre el criadero o los Dobermanns disponibles?',
    submitLabel:        'Enviar consulta',
  },
};

// ─── FOOTER ──────────────────────────────────────────────────────────────────
export const footer = {
  tagline: 'Criamos Dobermanns de excelencia desde 1973.',
  legalLinks: [
    { label: 'Privacidad', href: '/privacidad' },
    { label: 'Términos',   href: '/terminos'   },
  ] satisfies LegalLink[],
};

// ─── STRUCTURED DATA (JSON-LD) ────────────────────────────────────────────────
export const structuredData: StructuredDataConfig = {
  businessType:    'AnimalShelter',
  personJobTitle:  'Médico Veterinario y Juez Internacional de Razas Caninas',
  knowsAbout:      ['Dobermann', 'Cría canina selectiva', 'Exposiciones caninas', 'Teriogenología', 'Adiestramiento de perros'],
  credential:      'Médico Veterinario — Universidad de Buenos Aires',
  priceRange:      '$$',
  currency:        'ARS',
  paymentMethods:  'Efectivo, Transferencia bancaria',
  address: {
    country:  'AR',
    locality: 'Buenos Aires',
  },
  areaServed: ['Buenos Aires', 'Argentina'],
  openingHours: [
    { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], opens: '09:00', closes: '19:00' },
  ],
  faq: [
    {
      question: '¿Cómo puedo reservar un cachorro?',
      answer:   'Podés consultarnos por WhatsApp o email para conocer la disponibilidad de lechigadas. Cuando hay cachorros disponibles, la reserva se hace con un anticipo.',
    },
    {
      question: '¿Los cachorros tienen pedigrí?',
      answer:   'Sí, todos nuestros cachorros tienen pedigrí FCA (Federación Cinológica Argentina) y son hijos de ejemplares con historial verificado.',
    },
    {
      question: '¿Realizan envíos al interior del país?',
      answer:   'Sí, coordinamos el traslado de cachorros a todo el país. Consultanos las condiciones según tu ubicación.',
    },
  ],
  sameAs: [
    'https://www.instagram.com/badenbadendobermann',
    'https://www.facebook.com/badenbadendobermann',
  ],
};

// ─── DOGS ─────────────────────────────────────────────────────────────────────
export const dogs: Dog[] = [
  { name: 'Baden Baden Enrique', nickname: 'Quique', photo: '/images/dogs/enrique.jpg',    titles: ['Campeón'],   category: 'show'      },
  { name: 'Baden Baden Zenyatta', nickname: 'Z',      photo: '/images/dogs/zenyatta.jpg',   titles: ['Campeón'],   category: 'show'      },
  { name: 'Dark Prince',          nickname: '',        photo: '/images/dogs/dark-prince.jpg', titles: [],           category: 'show'      },
  { name: 'Blackjack',            nickname: '',        photo: '/images/dogs/blackjack.jpg',  titles: [],           category: 'show'      },
  { name: 'Elektra',              nickname: '',        photo: '/images/dogs/elektra.jpg',    titles: [],           category: 'show'      },
  { name: 'Voodoo',               nickname: '',        photo: '/images/dogs/voodoo.jpg',     titles: [],           category: 'show'      },
  { name: 'Dharma',               nickname: '',        photo: '/images/dogs/dharma.jpg',     titles: [],           category: 'show'      },
  { name: 'Baden Baden King SCH. III', nickname: 'King', photo: '/images/dogs/king.jpg',   titles: ['SCH. III'], category: 'obedience' },
  { name: 'Baden Baden Kala',      nickname: 'Kala',   photo: '/images/dogs/kala.jpg',      titles: [],           category: 'obedience' },
  { name: 'Brisa Black of the Goldeneye', nickname: 'Brisa', photo: '/images/dogs/brisa.jpg', titles: [],        category: 'obedience' },
  { name: 'Atila von Argus',       nickname: 'Atila',  photo: '/images/dogs/atila.jpg',     titles: [],           category: 'obedience' },
];

export const obedienceDogs: Dog[] = dogs.filter((d) => d.category === 'obedience');
