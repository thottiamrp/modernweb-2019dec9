const hobbiesArray = [
    { name: 'volleyball', lengthInYearsAtHobby: 25 },
    { name: 'cooking', lengthInYearsAtHobby: 15},
    { name: 'swimming', lengthInYearsAtHobby: 11}
];

function printHobbyInfo(hobby) {
    console.log(` ${hobby.name} has been an interest for ${hobby.lengthInYearsAtHobby} years`)
}

for (let hobbyIndex = 0; hobbyIndex < hobbiesArray.length; hobbyIndex++) {
    const hobby = hobbiesArray[hobbyIndex];
    printHobbyInfo(hobby);
}

function returnHobbiesHTML() {
    let hobbyInfo = '';
    hobbiesArray.forEach(hobby => {
        hobbyInfo += (` ${hobby.name} has been a hobby for ${hobby.lengthInYearsAtHobby} years 
        <br>  `);
    });

    return hobbyInfo;
}



