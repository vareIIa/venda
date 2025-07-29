// netlify/functions/send-email.js
const sgMail = require('@sendgrid/mail');

exports.handler = async function (event) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const { email, name } = JSON.parse(event.body);

  if (!email || !name) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Missing email or name' }),
    };
  }

  const msg = {
    to: email,
    from: 'your-verified-email@domain.com', // Replace with your verified SendGrid email
    subject: 'Confirmação de Inscrição - Workshop de Futsal',
    text: `Olá ${name}, sua inscrição foi recebida! Entraremos em contato em até 24h com os detalhes do ingresso. Obrigado!`,
    html: `<p>Olá ${name},</p><p>Sua inscrição foi recebida! Entraremos em contato em até 24h com os detalhes do ingresso.</p><p>Obrigado!</p>`,
  };

  try {
    await sgMail.send(msg);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully' }),
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to send email' }),
    };
  }
};