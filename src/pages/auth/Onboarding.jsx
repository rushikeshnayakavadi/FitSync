import { useState } from 'react'

function Onboarding({ onComplete }) {
    const [step, setStep] = useState(1)

    const [profile, setProfile] = useState({
        name: '',
        age: '',
        height: '',
        weight: '',
        goal: '',
        foodPreference: '',
    })

    const updateProfile = (field, value) => {
        setProfile((current) => ({
            ...current,
            [field]: value,
        }))
    }

    const nextStep = () => {
        setStep((current) => current + 1)
    }

    const previousStep = () => {
        setStep((current) => current - 1)
    }

    const finishOnboarding = () => {
        localStorage.setItem('fitsyncProfile', JSON.stringify(profile))
        onComplete(profile)
    }

    return (
        <main className="onboarding">

            <div className="onboarding-header">
                <span className="logo">FitSync</span>

                <span>
          Step {step} of 3
        </span>
            </div>

            <div className="onboarding-card">

                {step === 1 && (
                    <>
                        <p className="eyebrow">ABOUT YOU</p>

                        <h1>Let's get to know you.</h1>

                        <p className="onboarding-description">
                            We'll use these details to personalize your
                            fitness tracking.
                        </p>

                        <div className="form-group">
                            <label>Name</label>

                            <input
                                type="text"
                                placeholder="Your name"
                                value={profile.name}
                                onChange={(e) =>
                                    updateProfile('name', e.target.value)
                                }
                            />
                        </div>

                        <div className="form-row">

                            <div className="form-group">
                                <label>Age</label>

                                <input
                                    type="number"
                                    placeholder="23"
                                    value={profile.age}
                                    onChange={(e) =>
                                        updateProfile('age', e.target.value)
                                    }
                                />
                            </div>

                            <div className="form-group">
                                <label>Height (cm)</label>

                                <input
                                    type="number"
                                    placeholder="175"
                                    value={profile.height}
                                    onChange={(e) =>
                                        updateProfile('height', e.target.value)
                                    }
                                />
                            </div>

                        </div>

                        <div className="form-group">
                            <label>Weight (kg)</label>

                            <input
                                type="number"
                                placeholder="70"
                                value={profile.weight}
                                onChange={(e) =>
                                    updateProfile('weight', e.target.value)
                                }
                            />
                        </div>

                        <button
                            className="primary-button"
                            onClick={nextStep}
                        >
                            Continue
                        </button>
                    </>
                )}

                {step === 2 && (
                    <>
                        <p className="eyebrow">YOUR GOAL</p>

                        <h1>What are you working towards?</h1>

                        <div className="selection-grid">

                            {[
                                ['lose-fat', 'Lose Fat'],
                                ['build-muscle', 'Build Muscle'],
                                ['recomposition', 'Body Recomposition'],
                                ['maintain', 'Maintain Weight'],
                            ].map(([value, label]) => (
                                <button
                                    key={value}
                                    className={
                                        profile.goal === value
                                            ? 'selection-card selected'
                                            : 'selection-card'
                                    }
                                    onClick={() =>
                                        updateProfile('goal', value)
                                    }
                                >
                                    {label}
                                </button>
                            ))}

                        </div>

                        <div className="navigation-buttons">

                            <button
                                className="secondary-button"
                                onClick={previousStep}
                            >
                                Back
                            </button>

                            <button
                                className="primary-button"
                                onClick={nextStep}
                                disabled={!profile.goal}
                            >
                                Continue
                            </button>

                        </div>
                    </>
                )}

                {step === 3 && (
                    <>
                        <p className="eyebrow">NUTRITION</p>

                        <h1>What's your food preference?</h1>

                        <div className="selection-grid">

                            {[
                                ['vegetarian', '🥦 Vegetarian'],
                                ['non-vegetarian', '🍗 Non-Vegetarian'],
                                ['eggetarian', '🥚 Eggetarian'],
                            ].map(([value, label]) => (
                                <button
                                    key={value}
                                    className={
                                        profile.foodPreference === value
                                            ? 'selection-card selected'
                                            : 'selection-card'
                                    }
                                    onClick={() =>
                                        updateProfile(
                                            'foodPreference',
                                            value,
                                        )
                                    }
                                >
                                    {label}
                                </button>
                            ))}

                        </div>

                        <div className="navigation-buttons">

                            <button
                                className="secondary-button"
                                onClick={previousStep}
                            >
                                Back
                            </button>

                            <button
                                className="primary-button"
                                onClick={finishOnboarding}
                                disabled={!profile.foodPreference}
                            >
                                Finish Setup
                            </button>

                        </div>
                    </>
                )}

            </div>
        </main>
    )
}

export default Onboarding