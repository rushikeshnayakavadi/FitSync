import Navbar from './components/common/Navbar'
import BottomNav from './components/common/BottomNav'
import Dashboard from './pages/Dashboard/Dashboard'

function App() {
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