import { useState } from 'react'

import Navbar from './components/common/Navbar'
import BottomNav from './components/common/BottomNav'
import Dashboard from './pages/Dashboard/Dashboard'
import Onboarding from './pages/auth/Onboarding'

function App() {
    const [profile, setProfile] = useState(() => {
        const savedProfile = localStorage.getItem('fitsyncProfile')

        return savedProfile
            ? JSON.parse(savedProfile)
            : null
    })

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
                <Dashboard />
            </main>

            <BottomNav />

        </div>
    )
}

export default App