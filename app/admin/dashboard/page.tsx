'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { collection, getDocs, orderBy, query } from 'firebase/firestore'
import { db } from '@/lib/firebase'

interface WaitlistEntry {
  id: string
  email: string
  timestamp: any
  status: string
}

export default function AdminDashboard() {
  const [waitlistData, setWaitlistData] = useState<WaitlistEntry[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const router = useRouter()

  useEffect(() => {
    // Check authentication
    const isAuthenticated = sessionStorage.getItem('adminAuthenticated')
    if (!isAuthenticated) {
      router.push('/admin/login')
      return
    }

    fetchWaitlistData()
  }, [router])

  const fetchWaitlistData = async () => {
    try {
      const waitlistRef = collection(db, 'waitlist')
      const q = query(waitlistRef, orderBy('timestamp', 'desc'))
      const querySnapshot = await getDocs(q)
      
      const data: WaitlistEntry[] = []
      querySnapshot.forEach((doc) => {
        data.push({
          id: doc.id,
          email: doc.data().email,
          timestamp: doc.data().timestamp,
          status: doc.data().status
        })
      })
      
      setWaitlistData(data)
    } catch (err) {
      setError('Failed to fetch waitlist data')
      console.error('Error fetching waitlist:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = () => {
    sessionStorage.removeItem('adminAuthenticated')
    router.push('/admin/login')
  }

  const formatDate = (timestamp: any) => {
    if (!timestamp) return 'N/A'
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp)
    return date.toLocaleString()
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-xl text-gray-900 dark:text-white">Loading...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Floris Admin Dashboard</h1>
            <button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium"
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-blue-500 rounded-md flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">Total Waitlist</dt>
                      <dd className="text-lg font-medium text-gray-900 dark:text-white">{waitlistData.length}</dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-green-500 rounded-md flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">Active Subscribers</dt>
                      <dd className="text-lg font-medium text-gray-900 dark:text-white">
                        {waitlistData.filter(entry => entry.status === 'pending').length}
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-purple-500 rounded-md flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">Latest Signup</dt>
                      <dd className="text-lg font-medium text-gray-900 dark:text-white">
                        {waitlistData.length > 0 ? formatDate(waitlistData[0].timestamp).split(',')[0] : 'N/A'}
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Waitlist Table */}
          <div className="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-md">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">Waitlist Subscribers</h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500 dark:text-gray-400">
                All emails that have signed up for the Floris waitlist
              </p>
            </div>
            
            {error && (
              <div className="px-4 py-3 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-400">
                <div className="text-sm text-red-700 dark:text-red-400">{error}</div>
              </div>
            )}

            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Email
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Signup Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      ID
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                  {waitlistData.map((entry) => (
                    <tr key={entry.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                        {entry.email}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          entry.status === 'pending' 
                            ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' 
                            : 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                        }`}>
                          {entry.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                        {formatDate(entry.timestamp)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400 font-mono">
                        {entry.id}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {waitlistData.length === 0 && !loading && (
              <div className="text-center py-12">
                <div className="text-gray-500 dark:text-gray-400">No waitlist entries found</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
} 