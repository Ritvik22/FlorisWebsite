import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/firebase'
import { collection, addDoc, query, where, getDocs } from 'firebase/firestore'

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    // Validate input
    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

    // Check if email already exists
    const waitlistRef = collection(db, 'waitlist')
    const q = query(waitlistRef, where('email', '==', email))
    const querySnapshot = await getDocs(q)

    if (!querySnapshot.empty) {
      return NextResponse.json(
        { error: 'Email already registered for waitlist' },
        { status: 400 }
      )
    }

    // Add email to waitlist
    const docRef = await addDoc(waitlistRef, {
      email: email,
      timestamp: new Date(),
      status: 'pending'
    })

    console.log('Waitlist submission added:', { email, id: docRef.id })

    return NextResponse.json(
      { message: 'Successfully joined the waitlist!' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error handling waitlist submission:', error)
    return NextResponse.json(
      { error: 'Failed to join waitlist' },
      { status: 500 }
    )
  }
} 