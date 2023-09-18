//randomDay function allows us to select a random day ranging from (Monday - Sunday)

const randomDay = () =>{
    const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    return daysOfWeek[Math.floor(Math.random()*7)]
}

//console.log(randomDay()) - Test 1 (Prints random days of the week)

//randomHours allows us to retreive any random number of minutes within the array, yet we divide the array values by 60 in order to convert minutes to hours.

const randomHours = () =>{
    const minutes = [15, 30, 45, 60, 75, 90, 105, 120, 135, 150, 165, 180, 195, 210, 225, 240];
    let hours = minutes[Math.floor(Math.random()*16)]/60 + ' hrs';
    return hours;
}
//console.log(randomMinutes()) - Test 2 (Prints random hours)

const goals = {
    study: {
        code: ['Full-Stack (HTML5/CSS/JS)', 'Java', 'Python', 'C++'],
        foreignLanguages: ['Spanish', 'Japanese', 'French', 'German'],
        healthScience: ['Diet + Nutrition', 'Workout Routines', 'Anatomy']
    },
    exercise: {
        physicalTherapy: ['Circuits', 'Aquatics'],
        cardio: ['Bike', 'Elliptical', 'Swim Laps'],
        bodyBuilding: ['Abs', 'Chest', 'Back/Neck', 'Legs', 'Arms']
    },
    meditate: {
        spiritual: ['Read Bible', 'Reflect/Meditate'],
        social: ['Hang Out', 'Family Time', 'Party Time'],
        personal: ['Social Media', 'Play Video Games', 'Watch TV', 'Singing', 'Dancing', 'Art (2D/3D/Digital)']
    }
}
// Helper function that allows us to select values within the array above.
const randomGoal = goal => Math.floor(Math.random()* goal);

//This empty array is what we are going to use to store our goal schedule
let todaysGoals = [];

// Viewing the "goals" object, we need access to the values of the arrays for our random goals schedule to truly generate any random values/outcome.  The arrays are being contained within a key, from another key; therefore we need a for... in loop, within a for... in loop.

for (let task in goals){

    switch(task){
        case 'study':
            for(let newStudy in goals.study){
                //studyIndex allows us to get access within the array's values SEPERATELY.  Due to the array being part of an OBJECT, we must impliment ".length" by setting up studyIndex varialbe, like so.
                let studyIndex = randomGoal(goals.study[newStudy].length);
                todaysGoals.push(`Study: ${newStudy} - ${goals[task][newStudy][studyIndex]} - ${randomHours()}`)
            }
        break;
        case 'exercise':
            for (let newExercise in goals.exercise){
                let exerIndex = randomGoal(goals.exercise[newExercise].length);
                todaysGoals.push(`Exercise: ${newExercise} - ${goals[task][newExercise][exerIndex]} - ${randomHours()}`)
            }
        break;
        case 'meditate':
            for (let newMeditate in goals.meditate){
                let medIndex = randomGoal(goals.meditate[newMeditate].length);
                todaysGoals.push(`Meditate: ${newMeditate} - ${goals[task][newMeditate][medIndex]} - ${randomHours()}`)
            }
        break;
        default: 
            todaysGoals.push(`Time to go for a random run!`)
        }

}

//fullMessage function allows us to view our printed message from each seperate line per sub-key; within our empty todaysGoals array.
const fullMessage = message =>{
    let fullSchedule = todaysGoals.join('\n')
    console.log(fullSchedule)
}

//Prints the application's message (Goal Planner)
console.log(`${randomDay()}'s Goal Challenges:`)
fullMessage(todaysGoals);






