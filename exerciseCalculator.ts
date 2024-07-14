interface Result {
    periodLength: number,
    trainingDays: number,
    success: boolean,
    rating: number,
    ratingDescription: string,
    target: number,
    average: number
}

const inputArray = [3, 0, 2, 4.5, 0, 3, 1]


const exerciseCalculator = (inputArray: number[], targetHours: number): Result => {
    const periodLength = inputArray.length;
    const trainingDays = inputArray.filter(value => value > 0).length;
    const averageHoursPerDay = inputArray.reduce((acc, current) => acc += current) / periodLength;
    const success = averageHoursPerDay >= targetHours;
    const rating = averageHoursPerDay >= targetHours ? 3 : averageHoursPerDay + 1 >= targetHours ? 2 : 1;
    const ratingDescription = rating == 3 ? 'you are doing great!' : rating == 2 ? 'not too bad but could be better' : 'you need to do better'

    return {
        periodLength: periodLength,
        trainingDays: trainingDays,
        success: success,
        rating: rating,
        ratingDescription: ratingDescription,
        target: targetHours,
        average: averageHoursPerDay
    };
};

console.log(exerciseCalculator(inputArray, 2))