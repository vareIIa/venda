// netlify/functions/save-purchase.js
require('dotenv').config();
const { neon } = require('@neondatabase/serverless');

exports.handler = async function (event) {
  console.log('NETLIFY_DATABASE_URL:', process.env.NETLIFY_DATABASE_URL); // Debug log
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: JSON.stringify({ error: 'Method Not Allowed' }) };
  }

  const { name, email, phone, quantity, total } = JSON.parse(event.body);

  // Validation
  if (!name || !email || !phone || !quantity || !total) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Campos obrigatórios ausentes' }),
    };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Formato de e-mail inválido' }),
    };
  }

  try {
    const sql = neon(process.env.NETLIFY_DATABASE_URL);
    await sql`
      INSERT INTO purchases (name, email, phone, quantity, total, payment_status)
      VALUES (${name}, ${email}, ${phone}, ${quantity}, ${total}, 'pending')
    `;
    return {
      statusCode: 201,
      body: JSON.stringify({ message: 'Compra salva com sucesso' }),
    };
  } catch (error) {
    console.error('Erro ao salvar compra:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Falha ao salvar a compra: ' + error.message }),
    };
  }
};