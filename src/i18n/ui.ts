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
  printHint: {
    en: 'Tip: choose “Save as PDF”, A4, and turn off headers and footers.',
    th: 'เคล็ดลับ: เลือก “บันทึกเป็น PDF” ขนาด A4 และปิดหัวกระดาษ/ท้ายกระดาษ',
  },
} satisfies Record<string, Text>;
