import nodemailer from 'nodemailer'

export async function POST(req: Request) {
  const { name, email, company, message } = await req.json()

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: 'joseph.abisaleh@gmail.com',
    subject: `[VecteurAI] Nouveau contact — ${company || name}`,
    html: `
      <h2>Nouveau message VecteurAI</h2>
      <p><strong>Nom:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Entreprise:</strong> ${company || 'Non renseigné'}</p>
      <p><strong>Message:</strong><br>${message}</p>
    `,
  })

  return Response.json({ ok: true })
}
