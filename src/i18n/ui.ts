import type { Text } from '../data/profile';

/** UI strings (headings, buttons, labels). Content lives in src/data/profile.ts. */
export const ui = {
  projects: { en: 'Projects', th: 'ผลงาน' },
  skills: { en: 'Skills', th: 'ทักษะ' },
  experience: { en: 'Experience', th: 'ประสบการณ์' },
  education: { en: 'Education', th: 'การศึกษา' },
  contact: { en: 'Contact', th: 'ติดต่อ' },
  cv: { en: 'CV', th: 'ประวัติย่อ' },
  live: { en: 'Live', th: 'เว็บไซต์' },
  code: { en: 'Code', th: 'โค้ด' },
  viewCv: { en: 'View CV', th: 'ดูประวัติย่อ' },
  downloadPdf: { en: 'Download PDF', th: 'ดาวน์โหลด PDF' },
  back: { en: 'Back to site', th: 'กลับหน้าหลัก' },
  screenshotSoon: { en: 'Screenshot coming soon', th: 'ภาพหน้าจอเร็ว ๆ นี้' },
  seeWork: { en: 'See my work', th: 'ดูผลงาน' },
  openLive: { en: 'Open live', th: 'เปิดเว็บ' },
  liveBadge: { en: 'LIVE', th: 'ออนไลน์' },
  previewNote: { en: 'Preview — sample data', th: 'ตัวอย่าง — ข้อมูลสมมติ' },
  glanceLive: { en: 'apps live on lnynano.com', th: 'แอปที่เปิดใช้งานจริง' },
  glanceLang: { en: 'everything I ship is bilingual', th: 'ทุกงานรองรับสองภาษา' },
  glanceStudy: { en: 'B.Eng. Computer Engineering', th: 'วศ.บ. วิศวกรรมคอมพิวเตอร์' },
  glanceWork: { en: 'real-world POS & pricing work', th: 'งานจริงด้าน POS และตั้งราคา' },
  courses: { en: 'Relevant coursework', th: 'วิชาที่เกี่ยวข้อง' },
  contactTitle: { en: 'Have a problem worth a small tool?', th: 'มีปัญหาที่น่าทำเป็นเครื่องมือเล็ก ๆ ไหม?' },
  contactSub: {
    en: 'Internships, work or side projects — drop me a line.',
    th: 'ทักมาคุยเรื่องฝึกงาน งาน หรือโปรเจกต์ได้เลยครับ',
  },
  printHint: {
    en: 'Tip: choose “Save as PDF”, A4, and turn off headers and footers.',
    th: 'เคล็ดลับ: เลือก “บันทึกเป็น PDF” ขนาด A4 และปิดหัวกระดาษ/ท้ายกระดาษ',
  },
} satisfies Record<string, Text>;
