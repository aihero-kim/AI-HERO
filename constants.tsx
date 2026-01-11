
import { NavItem, Program, Feature, TeamMember, Stat, Testimonial } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Bosh Sahifa', path: '/' },
  { label: 'Dasturlar', path: '/dasturlar' },
  { label: 'Afzalliklar', path: '/afzalliklar' },
  { label: 'Biz Haqimizda', path: '/biz-haqimizda' },
  { label: 'Aloqa', path: '/aloqa' },
];

export const PROGRAMS: Program[] = [
  {
    id: 'applied-ai',
    title: 'Applied AI',
    subtitle: 'Sun\'iy Intellektni Amaliy Qo\'llash',
    description: "Eng so'nggi AI texnologiyalari: LLM, AI Agentlar va Generativ Media. Kelajak kasblari uchun amaliy ko'nikmalar.",
    details: [
      "LLM: Gemini, ChatGPT, NotebookLM, Perplexity, AI Studio",
      "AI Image & Video: Midjourney, VEO3, SORA2, KLING 2.6, Hailuo",
      "AI Agent: Cursor, Windsurf, Replit Agent (Avtonom darslar)",
      "Avtomatlashtirish: n8n, Genspark, Skywork"
    ],
    tools: ["Gemini", "ChatGPT", "Midjourney", "Cursor", "Windsurf", "VEO3", "n8n"],
    schedule: {
      expert: "Dushanba, Chorshanba, Juma (1.5 soat)",
      hobby: "Seshanba, Payshanba (1.5 soat)",
      duration: "3 oy (Maktablar uchun 1 yil)"
    },
    pricing: {
      expert: "1,000,000 so'm/oy",
      hobby: "500,000 so'm/oy"
    },
    iconName: 'Cpu',
    image: 'https://invati.ai/wp-content/uploads/2022/10/Applied_AI.jpeg'
  },
  {
    id: 'robotics',
    title: 'Robototexnika',
    subtitle: 'Muhandislik va Dasturlash',
    description: "Mexanika, Elektronika va Dasturlash uyg'unligi. Nazariya (30%) va Amaliyot (70%) balansi.",
    details: [
      "Dasturlash: Arduino (C++), Python, Scratch, Algoritmlar",
      "Elektronika: Sensorlar, Motorlar, Sxemotexnika, Smart Home",
      "Mexanika: 3D modellashtirish, Robot harakati va muvozanat",
      "Loyiha: Line Tracer, Sumo Robot, Smart Car yasash"
    ],
    tools: ["Arduino", "Python", "C++", "Sensors", "Motors", "3D Print"],
    schedule: {
      expert: "Dushanba, Chorshanba, Juma (1.5 soat)",
      hobby: "Seshanba, Payshanba (1.5 soat)",
      duration: "3 oy (Maktablar uchun 1 yil)"
    },
    pricing: {
      expert: "1,000,000 so'm/oy",
      hobby: "500,000 so'm/oy"
    },
    iconName: 'Bot',
    image: 'https://avatars.mds.yandex.net/i?id=73b24ddf13bbe6d607fbf7650b55ed85_l-4237075-images-thumbs&n=13'
  },
  {
    id: 'korean',
    title: 'Koreys Tili',
    subtitle: 'Gyeongsangbuk-do Maxsus Dasturi',
    description: "Janubiy Koreyada o'qish va ishlash imkoniyati (E-7 va D-2 vizalari). AI texnologiyalari yordamida tezkor til o'rganish.",
    details: [
      "TOPIK I-II (1-2 daraja): 4 oy - Boshlang'ich",
      "TOPIK II (3-4 daraja): 4 oy - O'rta",
      "TOPIK II (5-6 daraja): 4 oy - Yuqori",
      "Native Professor tomonidan maxsus o'quv darslari"
    ],
    tools: ["AI Tutors", "TOPIK App", "VR Travel", "YouTube Review"],
    schedule: {
      expert: "TOPIK 6 gacha to'liq tayyorgarlik",
      hobby: "Madaniyat va So'zlashuv",
      duration: "1 yil (To'liq kurs)"
    },
    pricing: {
      expert: "Shartnoma asosida",
      hobby: "Shartnoma asosida"
    },
    iconName: 'Languages',
    image: 'https://images.unsplash.com/photo-1538485399081-7191377e8241?auto=format&fit=crop&q=80&w=800'
  }
];

export const FEATURES: Feature[] = [
  {
    id: '1',
    title: 'Eng So\'nggi Texnologiyalar',
    description: "Biz har oy dasturimizni yangilaymiz. O'quvchilar Cursor, Windsurf va Gemini kabi eng yangi AI vositalarida ishlashni o'rganadilar.",
    iconName: 'Zap'
  },
  {
    id: '2',
    title: 'Amaliyotga Yo\'naltirilgan',
    description: "Robototexnikada 70% amaliyot, 30% nazariya. Applied AI kursida haqiqiy agentlar va loyihalar yaratiladi.",
    iconName: 'Rocket'
  },
  {
    id: '3',
    title: 'Koreya Davlat Dasturi',
    description: "Gyeongsangbuk-do viloyati bilan hamkorlikda E-7 (ishchi) va D-2 (talaba) vizalari uchun rasmiy ko'mak.",
    iconName: 'Award'
  },
  {
    id: '4',
    title: 'AI Yordamida Til O\'rganish',
    description: "Zerikarli darslar yo'q! AI tomonidan yaratilgan vizual kontent va maxsus ilovalar orqali Koreys tilini tez o'rganing.",
    iconName: 'Brain'
  }
];

export const STATS: Stat[] = [
  { label: 'O\'quvchi Natijasi', value: 'Top 10', suffix: '%' },
  { label: 'Grant Yutganlar', value: '100', suffix: '+' },
  { label: 'AI Loyihalar', value: '100', suffix: '+' },
];

export const TEAM: TeamMember[] = [
  {
    id: '1',
    name: 'Prof. Kim',
    role: 'General Director',
    specialty: 'Applied AI Expert',
    image: '/profkim.png'
  },
  {
    id: '2',
    name: 'Prof. Hwang',
    role: 'Senior Korean Instructor',
    specialty: 'Academic Korean Expert',
    image: '/test.png'
  },
  {
    id: '4',
    name: 'Diyor',
    role: 'Robototexnika Director',
    specialty: 'Arduino & IoT Specialist',
    image: '/diyor.png'
  },
  {
    id: '3',
    name: 'Muhammad',
    role: 'Full-Stack AI Developer',
    specialty: 'Coding & AI Agent Expert',
    image: '/muhammad.png'
  },
  {
    id: '5',
    name: 'Oydinoy',
    role: 'AI Image & Video Instructor',
    specialty: 'AI Creative Video Expert',
    image: 'https://loremflickr.com/400/500/woman,engineer,5'
  },
  {
    id: '6',
    name: 'Nodirbek',
    role: 'AI Image & Video Instructor',
    specialty: 'AI Creative Video Expert',
    image: '/nodir.png'
  },
  {
    id: '7',
    name: 'Mirolim',
    role: 'Senior Korean Instructor',
    specialty: 'Korean Expert & Visa Advisor',
    image: 'https://loremflickr.com/400/500/man,tech,7'
  },
  {
    id: '8',
    name: 'Nargiza',
    role: 'Senior Korean Instructor',
    specialty: 'Academic Korean Expert',
    image: 'https://loremflickr.com/400/500/woman,teacher,8'
  },
  {
    id: '9',
    name: 'Sevinchi',
    role: 'O\'quv Ishlari Menejeri',
    specialty: 'Student Success Coordinator',
    image: 'https://loremflickr.com/400/500/woman,office,9'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Dilshod Raximov',
    role: '34-Maktab Direktori',
    content: "AI HERO jamoasi maktabimizda haqiqiy innovatsion muhit yaratdi. O'quvchilarimiz hozirda o'z startaplarini yaratish ustida ishlamoqda.",
    image: 'https://storage.kun.uz/source/8/bMcmOz-Gl5zBjTmqoH77c8ZydKmFTr1N.jpg'
  },
  {
    id: '2',
    name: 'Malika Karimova',
    role: 'O\'quvchi Onasi',
    content: "O'g'lim ilgari o'qishga qiziqmas edi. Robototexnika kursidan keyin uning ko'zlarida olov ko'rdim. Rahmat sizlarga!",
    image: 'https://storage.kun.uz/source/9/zlS887X_-rPj1BhS3vboPNlF3G8MER0z.jpg'
  },
  {
    id: '3',
    name: 'Jasur Aliyev',
    role: 'Grant G\'olibi (Sejong Univ)',
    content: "Koreys tili va AI kurslari yordamida men Koreyaning nufuzli universitetiga 100% grant yutib oldim. Bu men uchun orzu edi.",
    image: 'https://img.freepik.com/free-photo/front-view-smiley-man-wearing-hat_23-2149741918.jpg?semt=ais_hybrid&w=740&q=80'
  },
  {
    id: '4',
    name: 'Shahnoza opa',
    role: 'Informatika O\'qituvchisi',
    content: "AI vositalari (Gemini, ChatGPT) dars o'tishimni 10 barobar osonlashtirdi. Endi o'quvchilarim zerikmaydi.",
    image: 'https://tiue.uz/wp-content/uploads/2023/11/kamola-EDU.png'
  }
];
