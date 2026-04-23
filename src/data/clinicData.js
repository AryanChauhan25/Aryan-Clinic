import {
  hairImage,
  skinImage,
  dentalImage,
  laserImage,
  aestheticImage,
  sterilizationImage,
} from '../assets'

export const siteInfo = {
  phone: '+919318336551',
  whatsapp: 'https://wa.me/919318336551',
  email: 'aryan.c2501@gmail.com',
  clinicName: 'Aryan Clinic',
}

export const highlights = [
  ['30 K+', 'Patients treated'],
  ['4', 'Core specialities'],
  ['15+', 'Advanced treatments'],
  ['4.9/5', 'Patient rating'],
]

export const treatmentGroups = [
  {
    title: 'Hair Treatment',
    image: hairImage,
    items: ['Hair fall control', 'PRP and GFC therapy', 'Hair transplant planning', 'Dandruff and scalp care'],
  },
  {
    title: 'Skin Treatment',
    image: skinImage,
    items: ['Acne and acne scars', 'Pigmentation and melasma', 'Eczema and allergies', 'Vitiligo and skin infections'],
  },
  {
    title: 'Dental Care',
    image: dentalImage,
    items: ['Root canal treatment', 'Dental implants', 'Invisible aligners', 'Cleaning and smile design'],
  },
  {
    title: 'Cosmetic Care',
    image: aestheticImage,
    items: ['Laser treatments', 'Chemical peels', 'Fillers and rejuvenation', 'Cosmetic surgery consultation'],
  },
]

export const technologies = [
  { label: 'Laser platforms', image: laserImage },
  { label: 'Hair restoration planning', image: hairImage },
  { label: 'Skin analysis', image: skinImage },
  { label: 'Dental diagnostics', image: dentalImage },
  { label: 'Sterilization protocols', image: sterilizationImage },
  { label: 'Aesthetic consultation', image: aestheticImage },
]

export const doctors = [
  ['Dr. Vijay Kumar', 'Dermatology, hair, and skin specialist'],
  ['Dr. Pooja Varshney', 'Dermatology and aesthetic care specialist'],
  ['Dr. Chandra Pratap', 'Skin, hair, and laser treatment specialist'],
  ['Aryan Dental Team', 'Dental care, implants, and smile consultation'],
]

export const testimonials = [
  {
    name: 'Priya Sharma',
    text:
      'The consultation was detailed and calm. My skin and hair concerns were explained clearly before treatment began.',
  },
  {
    name: 'Rahul Mehta',
    text:
      'I visited for dental and cosmetic consultation. The team explained the timeline clearly and the experience felt premium.',
  },
  {
    name: 'Ananya Kapoor',
    text:
      'My treatment plan was smooth from day one. The follow-ups, reminders, and support were excellent.',
  },
]

export const locations = [
  {
    title: 'Main Clinic',
    text: 'Aryan Clinic, 102, Dwarka Sec 4 Market, Delhi',
  },
  {
    title: 'Clinic Hours',
    text: 'Monday to Sunday, 10:00 am - 8:00 pm',
  },
]
