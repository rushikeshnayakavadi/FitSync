import { useMemo, useState } from 'react'

import foods from '../../data/foods/foods'
import {
    calculateNutrition,
    calculateDailyNutrition,
} from '../../services/nutritionCalculator'
import { quantityOptions } from '../../utils/quantityOptions'

function Nutrition() {
    const [selectedItems, setSelectedItems] = useState([])

    const addFood = (foodId) => {
        const food = foods.find(
            (item) => item.id === foodId,
        )

        if (!food) return

        const quantity = 100

        const nutrition = calculateNutrition(
            food,
            quantity,
        )

        setSelectedItems((current) => [
            ...current,
            {
                id: Date.now(),
                foodId: food.id,
                name: food.name,
                quantity,
                ...nutrition,
            },
        ])
    }

    const updateQuantity = (id, quantity) => {
        setSelectedItems((current) =>
            current.map((item) => {
                if (item.id !== id) return item

                const food = foods.find(
                    (foodItem) =>
                        foodItem.id === item.foodId,
                )

                const nutrition = calculateNutrition(
                    food,
                    quantity,
                )

                return {
                    ...item,
                    quantity,
                    ...nutrition,
                }
            }),
        )
    }

    const dailyNutrition = useMemo(
        () =>
            calculateDailyNutrition(selectedItems),
        [selectedItems],
    )

    return (
        <section className="nutrition-page">

            <div className="welcome">
                <p className="eyebrow">NUTRITION</p>
                <h1>Today's Food</h1>
                <p>Select what you ate today.</p>
            </div>

            <div className="food-selector">

                <label>Select Food</label>

                <select
                    defaultValue=""
                    onChange={(e) => {
                        if (e.target.value) {
                            addFood(e.target.value)
                            e.target.value = ''
                        }
                    }}
                >
                    <option value="">
                        Choose a food
                    </option>

                    {foods.map((food) => (
                        <option
                            key={food.id}
                            value={food.id}
                        >
                            {food.name}
                        </option>
                    ))}
                </select>

            </div>

            <div className="selected-foods">

                {selectedItems.map((item) => (
                    <div
                        className="selected-food"
                        key={item.id}
                    >
                        <div>
                            <strong>{item.name}</strong>

                            <p>
                                {Math.round(item.calories)} kcal ·{' '}
                                {item.protein.toFixed(1)}g protein
                            </p>
                        </div>

                        <select
                            value={item.quantity}
                            onChange={(e) =>
                                updateQuantity(
                                    item.id,
                                    Number(e.target.value),
                                )
                            }
                        >
                            {quantityOptions.map(
                                (quantity) => (
                                    <option
                                        key={quantity}
                                        value={quantity}
                                    >
                                        {quantity}g
                                    </option>
                                ),
                            )}
                        </select>
                    </div>
                ))}

            </div>

            <div className="nutrition-summary">

                <p className="eyebrow">
                    TODAY'S TOTAL
                </p>

                <h2>
                    {Math.round(
                        dailyNutrition.calories,
                    )}{' '}
                    kcal
                </h2>

                <div className="macro-grid">

                    <div>
                        <span>Protein</span>
                        <strong>
                            {dailyNutrition.protein.toFixed(1)}g
                        </strong>
                    </div>

                    <div>
                        <span>Carbs</span>
                        <strong>
                            {dailyNutrition.carbs.toFixed(1)}g
                        </strong>
                    </div>

                    <div>
                        <span>Fat</span>
                        <strong>
                            {dailyNutrition.fat.toFixed(1)}g
                        </strong>
                    </div>

                    <div>
                        <span>Fiber</span>
                        <strong>
                            {dailyNutrition.fiber.toFixed(1)}g
                        </strong>
                    </div>

                </div>

            </div>

        </section>
    )
}

export default Nutrition