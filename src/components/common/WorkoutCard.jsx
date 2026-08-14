function WorkoutCard() {
    return (
        <section className="workout-card">
            <div className="workout-top">
                <div>
                    <p className="eyebrow">TODAY'S WORKOUT</p>
                    <h2>Chest + Triceps</h2>
                    <p>5 exercises · 15 sets</p>
                </div>

                <span className="workout-icon">💪</span>
            </div>

            <button className="primary-button">
                Start Workout
            </button>
        </section>
    )
}

export default WorkoutCard