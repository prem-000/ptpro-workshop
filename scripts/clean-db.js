const { neon } = require('@neondatabase/serverless');
const fs = require('fs');

const env = fs.readFileSync('.env', 'utf8');
const match = env.match(/DATABASE_URL="([^"]+)"/);
const dbUrl = match ? match[1] : null;

if (!dbUrl) {
  console.error("No DATABASE_URL found in .env");
  process.exit(1);
}

const sql = neon(dbUrl);

async function truncateAll() {
  console.log("Truncating all table data while keeping tables and schema intact...");
  
  // Truncate all project tables with CASCADE
  const tables = [
    'attendance',
    'certificates',
    'audit_logs',
    'payments',
    'registrations',
    'terms_acceptances',
    'team_members',
    'teams',
    'snacks_distribution',
    'exam_attempts',
    'exam_questions',
    'exam_settings',
    'problem_statements',
    'announcements',
    'schedules',
    'users',
    'event_settings'
  ];

  for (const table of tables) {
    try {
      await sql(`TRUNCATE TABLE "${table}" CASCADE;`);
      console.log(`✓ Cleaned table: ${table}`);
    } catch (e) {
      console.log(`- ${table}: ${e.message}`);
    }
  }

  // Check table list
  const remainingTables = await sql`
    SELECT table_name 
    FROM information_schema.tables 
    WHERE table_schema = 'public' 
    ORDER BY table_name;
  `;

  console.log("\nTables available in DB:");
  remainingTables.forEach(t => console.log(`  📁 ${t.table_name}`));
}

truncateAll().catch(console.error);
