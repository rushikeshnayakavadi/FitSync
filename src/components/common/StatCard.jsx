function StatCard({ label, value, target, unit }) {
    return (
        <div className="stat-card">
            <span className="stat-label">{label}</span>

            <div className="stat-value">
                {value}
                <span>{unit}</span>
            </div>

            <span className="stat-target">
        / {target} {unit}
      </span>
        </div>
    )
}

export default StatCard