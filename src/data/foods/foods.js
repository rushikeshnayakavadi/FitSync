const foods = [
    {
        id: 'oats',
        name: 'Oats',
        category: 'breakfast',
        preferences: ['vegetarian', 'non-vegetarian', 'eggetarian'],
        nutritionPer100g: {
            calories: 389,
            protein: 16.9,
            carbs: 66.3,
            fat: 6.9,
            fiber: 10.6,
            sugar: 0.9,
        },
    },

    {
        id: 'whey',
        name: 'Whey Protein',
        category: 'protein',
        preferences: ['vegetarian', 'non-vegetarian', 'eggetarian'],
        nutritionPer100g: {
            calories: 400,
            protein: 80,
            carbs: 10,
            fat: 5,
            fiber: 0,
            sugar: 4,
        },
    },

    {
        id: 'peanut-butter',
        name: 'Peanut Butter',
        category: 'fat',
        preferences: ['vegetarian', 'non-vegetarian', 'eggetarian'],
        nutritionPer100g: {
            calories: 588,
            protein: 25,
            carbs: 20,
            fat: 50,
            fiber: 6,
            sugar: 9,
        },
    },

    {
        id: 'milk',
        name: 'Milk',
        category: 'dairy',
        preferences: ['vegetarian', 'non-vegetarian', 'eggetarian'],
        nutritionPer100g: {
            calories: 61,
            protein: 3.2,
            carbs: 4.8,
            fat: 3.3,
            fiber: 0,
            sugar: 5,
        },
    },

    {
        id: 'rice',
        name: 'Cooked Rice',
        category: 'carbs',
        preferences: ['vegetarian', 'non-vegetarian', 'eggetarian'],
        nutritionPer100g: {
            calories: 130,
            protein: 2.7,
            carbs: 28,
            fat: 0.3,
            fiber: 0.4,
            sugar: 0.1,
        },
    },

    {
        id: 'paneer',
        name: 'Paneer',
        category: 'protein',
        preferences: ['vegetarian', 'non-vegetarian', 'eggetarian'],
        nutritionPer100g: {
            calories: 265,
            protein: 18.3,
            carbs: 1.2,
            fat: 20.8,
            fiber: 0,
            sugar: 1.2,
        },
    },

    {
        id: 'chicken',
        name: 'Chicken Breast',
        category: 'protein',
        preferences: ['non-vegetarian'],
        nutritionPer100g: {
            calories: 165,
            protein: 31,
            carbs: 0,
            fat: 3.6,
            fiber: 0,
            sugar: 0,
        },
    },

    {
        id: 'egg',
        name: 'Whole Egg',
        category: 'protein',
        preferences: ['non-vegetarian', 'eggetarian'],
        nutritionPer100g: {
            calories: 143,
            protein: 12.6,
            carbs: 0.7,
            fat: 9.5,
            fiber: 0,
            sugar: 0.4,
        },
    },

    {
        id: 'dal',
        name: 'Dal',
        category: 'protein',
        preferences: ['vegetarian', 'non-vegetarian', 'eggetarian'],
        nutritionPer100g: {
            calories: 116,
            protein: 9,
            carbs: 20,
            fat: 0.4,
            fiber: 7.9,
            sugar: 1.8,
        },
    },

    {
        id: 'chole',
        name: 'Chole',
        category: 'protein',
        preferences: ['vegetarian', 'non-vegetarian', 'eggetarian'],
        nutritionPer100g: {
            calories: 164,
            protein: 8.9,
            carbs: 27.4,
            fat: 2.6,
            fiber: 7.6,
            sugar: 4.8,
        },
    },

    {
        id: 'rajma',
        name: 'Rajma',
        category: 'protein',
        preferences: ['vegetarian', 'non-vegetarian', 'eggetarian'],
        nutritionPer100g: {
            calories: 127,
            protein: 8.7,
            carbs: 22.8,
            fat: 0.5,
            fiber: 6.4,
            sugar: 0.3,
        },
    },
]

export default foods