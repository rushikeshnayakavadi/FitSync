import { useState } from 'react'

import Navbar from './components/common/Navbar'
import BottomNav from './components/common/BottomNav'
import Dashboard from './pages/Dashboard/Dashboard'
import Nutrition from './pages/Nutrition/Nutrition'
import Onboarding from './pages/auth/Onboarding'

function App() {
    const [profile, setProfile] = useState(() => {
        const savedProfile =
            localStorage.getItem('fitsyncProfile')

        return savedProfile
            ? JSON.parse(savedProfile)
            : null
    })

    const [currentPage, setCurrentPage] =
        useState('dashboard')

    if (!profile) {
        return (
            <Onboarding
                onComplete={setProfile}
            />
        )
    }

    return (
        <div className="app">

            <Navbar />

            <main className="main-content">

                {currentPage === 'dashboard' && (
                    <Dashboard />
                )}

                {currentPage === 'nutrition' && (
                    <Nutrition />
                )}

            </main>

            <BottomNav
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />

        </div>
    )
}

export default App