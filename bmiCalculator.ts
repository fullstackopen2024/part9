const calculateBmi = (height: number, weight: number) => {
    const heightInMetersSquared = Math.pow(height / 100, 2);
    const BMI = weight / heightInMetersSquared;

    if (BMI < 16.0) {
        return 'Underweight (Severe thinness)';
    } else if (BMI >= 16.0 && BMI < 17.0) {
        return 'Underweight (Moderate thinness)';
    } else if (BMI >= 17.0 && BMI < 18.5) {
        return 'Underweight (Mild thinness)';
    } else if (BMI >= 18.5 && BMI < 25.0) {
        return 'Normal range';
    } else if (BMI >= 25.0 && BMI < 30.0) {
        return 'Overweight (Pre-obese)';
    } else if (BMI >= 30.0 && BMI < 35.0) {
        return 'Obese (Class I)';
    } else if (BMI >= 35.0 && BMI < 40.0) {
        return 'Obese (Class II)';
    }

    return 'Obese (Class III)';
};


const height: number = Number(process.argv[2])
const weight: number = Number(process.argv[3])
console.log(calculateBmi(height, weight))