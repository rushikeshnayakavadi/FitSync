import DailyProgress from '../../components/common/DailyProgress'
import WorkoutCard from '../../components/common/WorkoutCard'

function Dashboard() {
    return (
        <section className="dashboard">

            <div className="welcome">
                <p className="eyebrow">FRIDAY, AUGUST 14</p>

                <h1>Good evening 👋</h1>

                <p>
                    Stay consistent. Small progress adds up.
                </p>
            </div>

            <DailyProgress />

            <WorkoutCard />

        </section>
    )
}

export default Dashboard