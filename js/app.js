const randomDay = () =>{
    const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    return daysOfWeek[Math.floor(Math.random()*7)]
}

//console.log(randomDay()) - Test 1

const randomMinutes = () =>{
    const minutes = [15, 30, 45, 60, 75, 90, 105, 120, 135, 150, 165, 180, 195, 210, 225, 240];
    let hours = minutes[Math.floor(Math.random()*16)]/60 + ' hrs';
    return hours;
}
//console.log(randomMinutes()) - Test 2

const goals = {
    study: {
        code: ['Full-Stack (HTML5/CSS/JS)', 'Java', 'Python', 'C++'],
        languages: ['Spanish', 'Japanese', 'French', 'German'],
        healthScience: ['Diet + Nutrition', 'Workout Routines', 'Anatomy']
    },
    exercise: {
        physicalTherapy: ['Circuits', 'Aquatics'],
        cardio: ['Bike', 'Elliptical', 'Swim Laps'],
        bodyBuild: ['Abs', 'Chest', 'Back/Neck', 'Legs', 'Arms']
    },
    meditate: {
        spiritual: ['Read Bible', 'Reflect/Meditate'],
        social: ['Hang Out', 'Family Time', 'Party Time'],
        personal: ['Social Media', 'Play Video Games', 'Watch TV', 'Singing', 'Dancing', 'Art (2D/3D/Digital)']
    }
}

const randomGoal = goal => Math.floor(Math.random()* goal);

let todaysGoals = [];

for (let task in goals){


    switch(task){
        case 'study':
            for(let newStudy in goals.study){
                let studyIndex = randomGoal(goals.study[newStudy].length);
                todaysGoals.push(`Study: ${goals[task][newStudy][studyIndex]} - ${randomMinutes()}`)
            }
        break;
        case 'exercise':
            for (let newExercise in goals.exercise){
                let exerIndex = randomGoal(goals.exercise[newExercise].length);
                todaysGoals.push(`Exercise: ${goals[task][newExercise][exerIndex]} - ${randomMinutes()}`)
            }
        break;
        case 'meditate':
            for (let newMeditate in goals.meditate){
                let medIndex = randomGoal(goals.meditate[newMeditate].length);
                todaysGoals.push(`Meditate: ${goals[task][newMeditate][medIndex]} - ${randomMinutes()}`)
            }
        break;
        default: 
            todaysGoals.push(`Time to go for a random run!`)
        }

}

const fullMessage = message =>{
    let fullSchedule = todaysGoals.join('\n')
    console.log(fullSchedule)
}

console.log(`${randomDay()}'s Goal Challenges:`)
fullMessage(todaysGoals);


// Retreive 1st and 3rd key seperately, 2nd requires ALL keys.



