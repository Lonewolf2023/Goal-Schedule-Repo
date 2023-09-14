



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
        codes: ['Full-Stack (HTML5/CSS/JS)', 'Java', 'Python', 'C++'],
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

