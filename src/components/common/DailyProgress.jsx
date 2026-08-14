import StatCard from './StatCard'

function DailyProgress() {
    return (
        <section className="section">
            <div className="section-header">
                <div>
                    <p className="eyebrow">TODAY</p>
                    <h2>Daily Progress</h2>
                </div>

                <span className="progress-percent">78%</span>
            </div>

            <div className="progress-bar">
                <div
                    className="progress-fill"
                    style={{ width: '78%' }}
                />
            </div>

            <div className="stats-grid">
                <StatCard
                    label="Calories"
                    value="1,820"
                    target="2,400"
                    unit="kcal"
                />

                <StatCard
                    label="Protein"
                    value="128"
                    target="160"
                    unit="g"
                />
            </div>
        </section>
    )
}

export default DailyProgress