export const calculateNutrition = (
    food,
    quantityInGrams,
) => {
    const multiplier = quantityInGrams / 100

    return {
        calories:
            food.nutritionPer100g.calories * multiplier,

        protein:
            food.nutritionPer100g.protein * multiplier,

        carbs:
            food.nutritionPer100g.carbs * multiplier,

        fat:
            food.nutritionPer100g.fat * multiplier,

        fiber:
            food.nutritionPer100g.fiber * multiplier,

        sugar:
            food.nutritionPer100g.sugar * multiplier,
    }
}

export const calculateDailyNutrition = (items) => {
    return items.reduce(
        (total, item) => {
            total.calories += item.calories
            total.protein += item.protein
            total.carbs += item.carbs
            total.fat += item.fat
            total.fiber += item.fiber
            total.sugar += item.sugar

            return total
        },
        {
            calories: 0,
            protein: 0,
            carbs: 0,
            fat: 0,
            fiber: 0,
            sugar: 0,
        },
    )
}