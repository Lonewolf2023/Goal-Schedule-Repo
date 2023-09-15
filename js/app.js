



// or write: let minutes;

const randomDay = () =>{
    const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    return daysOfWeek[Math.floor(Math.random()*7)]
}

//console.log(randomDay()) - Test 1

const randomMinutes = () =>{
    const minutes = [15, 30, 45, 60, 75, 90, 105, 120, 135, 150, 165, 180, 195, 210, 225, 240];
    return minutes[Math.floor(Math.random()*16)];
}
//* May place if statement within the randomMinutes to retrieve 'hours' string. *
//console.log(randomMinutes()) - Test 2


let goals = {
    study: [{
        code: ['Full-Stack (HTML5/CSS/JS)', 'Java', 'Python', 'C++'],
        languages: ['Spanish', 'Japanese', 'French', 'German'],
        healthScience: ['Diet + Nutrition', 'Workout Routines', 'Anatomy']
    }],
    exercise: [{
        physicalTherapy: ['Circuits', 'Aquatics'],
        cardio: ['Bike', 'Elliptical', 'Swim Laps'],
        bodyBuild: ['Abs', 'Chest', 'Back/Neck', 'Legs', 'Arms']
    }],
    meditate: [{
        spiritual: ['Read Bible', 'Reflect/Meditate'],
        social: ['Friends Time', 'Family Time', 'Party Time'],
        personal: ['Social Media', 'Play Video Games', 'Watch TV', 'Singing', 'Dancing', 'Art(2D/3D/Digital)']
    }]
}

const randomGoal = goal => Math.floor(Math.random()* goal);

let todaysGoals = [];

for (let task in goals){
    let taskIndex = randomGoal(goals[task].length);

switch(task){
    case 'study':
        todaysGoals.push(`Study ${goals[task][taskIndex]} - ${randomMinutes()}`);
    break;
    case 'exercise':
        todaysGoals.push(`Exercise Challenge: ${goals[task][taskIndex]} - ${randomMinutes()}`);
    break;
    case 'meditate':
        todaysGoals.push(`Meditate/Relax ${goals[task][taskIndex]} - ${randomMinutes()}`);
    break;
    default: 
        todaysGoals.push(`Time to go for a random run!`)
    }
}

const fullMessage = message =>{
    let fullSchedule = todaysGoals.join('\n')
    console.log(fullSchedule)
}
console.log(randomDay())
fullMessage(todaysGoals);


// Retreive 1st and 3rd key seperately, 2nd requires ALL keys.



