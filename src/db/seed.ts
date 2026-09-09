import { db } from './index';
import { eventSettings, users, schedules, announcements } from './schema';
import { eq } from 'drizzle-orm';

export async function seedDatabase() {
  console.log('--- Seeding Prompt to Pro Database ---');

  // 1. Seed Event Settings if not present
  const existingSettings = await db.select().from(eventSettings).limit(1);
  if (existingSettings.length === 0) {
    await db.insert(eventSettings).values({
      id: 'settings_default',
      eventName: 'Prompt to Pro',
      tagline: 'Learn. Build. Grow.',
      dates: 'October 3 – 4, 2026',
      venue: '9th Block Seminar Hall',
      registrationFeeUe: 300,
      registrationFeeOther: 450,
      totalCapacity: 500,
      ueCapacity: 200,
      peopleCapacity: 300,
      registrationOpen: false,
      paymentUpiId: 'nextgensoc.dept@upi',
      paymentQrUrl: '/assets/soc_upi_qr.png',
      contactPhone: '+91 98765 43210',
      contactEmail: 'prompttopro@klu.ac.in',
      termsVersion: 'v1.0',
    });
    console.log('✓ Default Event Settings seeded');
  }

  // 2. Seed Master Admin User
  const adminEmail = 'admin@nextgensoc.io';
  const existingAdmin = await db.select().from(users).where(eq(users.email, adminEmail)).limit(1);
  if (existingAdmin.length === 0) {
    await db.insert(users).values({
      id: 'usr_admin_master',
      googleId: 'google_admin_master',
      email: adminEmail,
      name: 'Workshop Lead Admin',
      profileImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      role: 'admin',
    });
    console.log('✓ Master Admin user seeded');
  }

  // 3. Seed Default 2-Day Workshop Schedule
  const existingSchedules = await db.select().from(schedules).limit(1);
  if (existingSchedules.length === 0) {
    await db.insert(schedules).values([
      {
        id: 'sch_day1_1',
        day: 1,
        startTime: '09:00 AM',
        endTime: '10:30 AM',
        title: 'Foundations of Generative AI & Large Language Models',
        description: 'Overview of modern AI models, transformer architectures, token mechanics, and the transition to prompt-driven development.',
        speaker: 'AI & Data Lead Instructor',
        orderIndex: 1,
      },
      {
        id: 'sch_day1_2',
        day: 1,
        startTime: '10:45 AM',
        endTime: '01:00 PM',
        title: 'Prompt Engineering & System Prompt Architecture',
        description: 'Advanced few-shot prompting, chain-of-thought workflows, structured outputs, and prompt chaining.',
        speaker: 'Marcus Thorne (Senior AI Architect)',
        orderIndex: 2,
      },
      {
        id: 'sch_day1_3',
        day: 1,
        startTime: '02:00 PM',
        endTime: '05:00 PM',
        title: 'Building Real-World GenAI Applications & Tool Integration',
        description: 'Hands-on live deployment of an AI-powered assistant with API integration, prompt orchestration, and output validation.',
        speaker: 'Sarah Jenkins (AI Application Engineer)',
        orderIndex: 3,
      },
      {
        id: 'sch_day2_1',
        day: 2,
        startTime: '09:00 AM',
        endTime: '12:30 PM',
        title: 'Modern Data Analytics, SQL & Relational Databases',
        description: 'Mastering SQL queries, database indexing, joins, aggregation, and data preparation for enterprise data analysis.',
        speaker: 'Alex Rivera (Staff Data Engineer)',
        orderIndex: 4,
      },
      {
        id: 'sch_day2_2',
        day: 2,
        startTime: '01:30 PM',
        endTime: '04:30 PM',
        title: 'Data Pipelines, BI Dashboarding & AI Data Workflows',
        description: 'Building end-to-end data pipelines, connecting AI models to analytics dashboards, and translating insights to decisions.',
        speaker: 'Prompt to Pro Operations Team',
        orderIndex: 5,
      },
      {
        id: 'sch_day2_3',
        day: 2,
        startTime: '04:30 PM',
        endTime: '05:30 PM',
        title: 'Career Roadmaps, Portfolio Building & Certification Award',
        description: 'High-growth career tracks in GenAI & Data, portfolio project recommendations, and official certificate distribution.',
        speaker: 'Organizing Committee',
        orderIndex: 6,
      },
    ]);
    console.log('✓ 2-Day Workshop Schedule seeded');
  }

  // 4. Seed Welcome Announcement
  const existingAnnouncements = await db.select().from(announcements).limit(1);
  if (existingAnnouncements.length === 0) {
    await db.insert(announcements).values({
      id: 'ann_welcome',
      title: 'Welcome to Prompt to Pro Workshop 2026',
      content: 'Registration is officially live! Please complete your academic details, submit your UPI fee receipt with UTR, and check your participant portal for real-time verification updates.',
      priority: 'important',
      audience: 'all',
      published: true,
      createdBy: 'usr_admin_master',
    });
    console.log('✓ Welcome Announcement seeded');
  }

  console.log('--- Seeding Completed Successfully ---');
}

// Allow direct execution
if (require.main === module) {
  seedDatabase()
    .then(() => process.exit(0))
    .catch((err) => {
      console.error('Seed failed:', err);
      process.exit(1);
    });
}
