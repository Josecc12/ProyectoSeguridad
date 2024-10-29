'use server'


import openDb from './db';

export async function saveEmail(email:string) {
  const db = await openDb();
  await db.exec('CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, email TEXT)');
  await db.run('INSERT INTO users (email) VALUES (?)', email);
}
