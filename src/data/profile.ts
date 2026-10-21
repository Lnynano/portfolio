/**
 * All site content lives here. Both the home page (/) and the CV (/cv) render from this file.
 *
 * Text fields accept either a plain string (same in both languages) or { en, th }.
 * Privacy: do not add phone, address, birthdate, student ID, or GPA.
 */

export type Text = string | { en: string; th: string };

export interface Link {
  label: Text;
  href: string;
}

export interface Project {
  name: string;
  description: Text;
  stack: string[];
  live?: string;
  code?: string;
  /** Path under /public, e.g. "/projects/normalday.webp". When the file is missing, the drawn preview shows instead. */
  image?: string;
  /** Small label above the title, e.g. "TU Shooting Club". */
  tag?: Text;
  /** Shows a red ● LIVE badge. */
  isLive?: boolean;
  /** Drawn preview used until a screenshot exists. */
  preview?: 'scoreboard' | 'bills';
}

export interface MiniProject {
  name: string;
  tag: Text;
  description: Text;
  stack: string[];
  code: string;
}

export interface SkillGroup {
  label: Text;
  items: string[];
}

export interface Experience {
  role: Text;
  org: Text;
  period?: Text;
  details?: Text;
}

export interface Education {
  degree: Text;
  school: Text;
  period: Text;
}

export const profile = {
  name: 'Kiktichej Sintaosathapon',
  /** Name in Thai script. Shown on the page so searches in Thai find the site. */
  nameTh: 'กิตติเชษฐ์ สินเธาว์สถาพร',
  /** Other spellings people search for. Shown in the footer and structured data. */
  altNames: ['Kittichet Sintaosathapon'],
  handle: 'Lnynano',
  title: {
    en: 'Computer Engineering student @ Thammasat University (Rangsit)',
    th: 'นักศึกษาวิศวกรรมคอมพิวเตอร์ มหาวิทยาลัยธรรมศาสตร์ (ศูนย์รังสิต)',
  } as Text,
  pitch: {
    en: 'I build practical tools for everyday problems.',
    th: 'สร้างเครื่องมือที่ใช้ได้จริง สำหรับปัญหาในชีวิตประจำวัน',
  } as Text,
  /** Pill above the name. Remove or edit when it changes. */
  status: { en: 'Open to internships', th: 'เปิดรับฝึกงาน' } as Text,
  year: 4,
  email: 'kiktichej@lnynano.com',
  instagram: 'https://www.instagram.com/lnynano',
  github: 'https://github.com/Lnynano',
  website: 'https://lnynano.com',

  projects: [
    {
      name: 'Normalday',
      description: {
        en: 'Everyday calculators and quick references for life in Thailand: coin laundry, electricity bill, bill split. Installable PWA in Thai and English.',
        th: 'เครื่องคิดเลขและข้อมูลอ้างอิงด่วนสำหรับชีวิตประจำวันในไทย เช่น ร้านซักผ้าหยอดเหรียญ ค่าไฟ หารบิล ติดตั้งเป็น PWA ได้ รองรับภาษาไทยและอังกฤษ',
      },
      stack: ['React', 'TypeScript', 'Vite', 'PWA'],
      live: 'https://tools.lnynano.com',
      code: 'https://github.com/Lnynano/normalday',
      image: '/projects/normalday.webp',
      tag: { en: 'Personal · PWA · TH/EN', th: 'ส่วนตัว · PWA · ไทย/อังกฤษ' },
      isLive: true,
      preview: 'bills',
    },
    {
      name: 'TU Shooting Scoreboard',
      description: {
        en: 'Live ISSF scoreboard for the TU Shooting Club: realtime results, projector board, staff score entry, tie-break and team ranking, Excel import/export.',
        th: 'สกอร์บอร์ดตามกติกา ISSF สำหรับชมรมยิงปืน มธ. แสดงผลแบบเรียลไทม์ จอสำหรับโปรเจกเตอร์ ระบบกรอกคะแนนสำหรับสตาฟ ตัดสินคะแนนเสมอและจัดอันดับทีม นำเข้า/ส่งออก Excel',
      },
      stack: ['JavaScript', 'Supabase (Realtime, RLS)', 'GitHub Pages'],
      live: 'https://shooting.lnynano.com',
      code: 'https://github.com/Lnynano/tu-shooting-scoreboard',
      image: '/projects/tu-shooting-scoreboard.webp',
      tag: { en: 'TU Shooting Club', th: 'ชมรมยิงปืน มธ.' },
      isLive: true,
      preview: 'scoreboard',
    },
  ] satisfies Project[],

  /** Smaller cards under the featured projects. */
  moreProjects: [
    {
      name: 'Thong Yip Thong Yod',
      tag: { en: 'CN240 · Data Science', th: 'CN240 · วิทยาการข้อมูล' },
      description: {
        en: 'Multi-agent AI gold-trading dashboard: technical indicators, news sentiment and paper trading.',
        th: 'แดชบอร์ดเทรดทองคำด้วย AI แบบ multi-agent ใช้อินดิเคเตอร์ ข่าว และเทรดจำลอง',
      },
      stack: ['Python', 'GPT-4o-mini', 'Gradio'],
      code: 'https://github.com/Lnynano/Thong-Yip-Thong-Yod',
    },
    {
      name: 'TU ECE Room Booking',
      tag: { en: 'CN334 · Team of 4', th: 'CN334 · ทีม 4 คน' },
      description: {
        en: 'Department room booking with approval workflow, email notifications and usage reports.',
        th: 'ระบบจองห้องของภาควิชา มีขั้นตอนอนุมัติ แจ้งเตือนทางอีเมล และรายงานการใช้งาน',
      },
      stack: ['Django', 'Docker'],
      code: 'https://github.com/Lnynano/Tu_Django_Roombooking_web',
    },
  ] satisfies MiniProject[],

  skills: [
    { label: { en: 'Languages', th: 'ภาษาโปรแกรม' }, items: ['Python', 'JavaScript', 'TypeScript (learning)', 'Java', 'C', 'SQL', 'Dart'] },
    { label: { en: 'Web', th: 'เว็บ' }, items: ['React', 'Vite', 'Astro', 'Django', 'Tailwind', 'PWA'] },
    { label: { en: 'Data / backend', th: 'ข้อมูล / แบ็กเอนด์' }, items: ['Supabase', 'MySQL', 'SQLite'] },
    { label: { en: 'Tools', th: 'เครื่องมือ' }, items: ['Git', 'GitHub Actions', 'Docker', 'Cloudflare', 'VS Code'] },
    { label: { en: 'Hardware', th: 'ฮาร์ดแวร์' }, items: ['Arduino IoT', 'Raspberry Pi'] },
  ] satisfies SkillGroup[],

  experience: [
    {
      role: { en: 'Data Entry Assistant / POS System Installer', th: 'ผู้ช่วยบันทึกข้อมูล / ติดตั้งระบบ POS' },
      org: { en: 'Gu Roti Cha Chuk, Suan Luang Rama IX, Bangkok', th: 'Gu Roti Cha Chuk สวนหลวง ร.9 กรุงเทพฯ' },
      period: { en: 'Jul 2024 – Present', th: 'ก.ค. 2024 – ปัจจุบัน' },
      details: {
        en: 'Set menu pricing by GP on Grab, Robinhood and Shopee Food; set up the POS system.',
        th: 'กำหนดราคาเมนูตาม GP บน Grab, Robinhood และ Shopee Food และติดตั้งระบบ POS',
      },
    },
    {
      role: { en: 'Teaching Assistant', th: 'ผู้ช่วยสอน' },
      org: {
        en: 'Pencil Sharpening Camp (Engineering Camp), Faculty of Engineering, Thammasat University',
        th: 'Pencil Sharpening Camp (ค่ายวิศวะ) คณะวิศวกรรมศาสตร์ มหาวิทยาลัยธรรมศาสตร์',
      },
      period: '2025',
      details: { en: 'Computer Engineering section.', th: 'ฝ่ายวิศวกรรมคอมพิวเตอร์' },
    },
    {
      role: { en: 'Participant', th: 'ผู้เข้าร่วม' },
      org: { en: 'Codekathon by depa', th: 'Codekathon โดย depa' },
      details: { en: 'Built a Raspberry Pi 3 project.', th: 'พัฒนาโปรเจกต์ด้วย Raspberry Pi 3' },
    },
  ] satisfies Experience[],

  education: [
    {
      degree: { en: 'B.Eng. Computer Engineering', th: 'วศ.บ. วิศวกรรมคอมพิวเตอร์' },
      school: { en: 'Thammasat University (Rangsit)', th: 'มหาวิทยาลัยธรรมศาสตร์ (ศูนย์รังสิต)' },
      period: { en: '2023 – Present', th: '2023 – ปัจจุบัน' },
    },
  ] satisfies Education[],

  courses: ['CN240 Data Science', 'CN311 Operating Systems', 'CN332 Design Patterns', 'CN334 Web'],
};

/** Display form of a URL without protocol, e.g. "tools.lnynano.com". */
export const bare = (url: string) => url.replace(/^https?:\/\//, '').replace(/\/$/, '');
