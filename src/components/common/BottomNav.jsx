function BottomNav({
                       currentPage,
                       setCurrentPage,
                   }) {
    return (
        <nav className="bottom-nav">

            <button
                className={
                    currentPage === 'dashboard'
                        ? 'nav-active'
                        : ''
                }
                onClick={() =>
                    setCurrentPage('dashboard')
                }
            >
                🏠
            </button>

            <button>
                💪
            </button>

            <button
                className={
                    currentPage === 'nutrition'
                        ? 'nav-active'
                        : ''
                }
                onClick={() =>
                    setCurrentPage('nutrition')
                }
            >
                🥗
            </button>

            <button>
                📈
            </button>

            <button>
                👤
            </button>

        </nav>
    )
}

export default BottomNav