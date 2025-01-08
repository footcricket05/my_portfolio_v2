import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const body = await req.json()
  const { name, email, message } = body

  // Here you would typically send an email or save to a database
  // For this example, we'll just log the data
  console.log('Contact form submission:', { name, email, message })

  // Simulate a delay
  await new Promise(resolve => setTimeout(resolve, 1000))

  // Return a success response
  return NextResponse.json({ message: 'Message sent successfully' })
}

