const hobbiesArray = [
    { name: 'volleyball', lengthInYearsAtHobby: 25 },
    { name: 'cooking', lengthInYearsAtHobby: 15},
    { name: 'swimming', lengthInYearsAtHobby: 11}
];

function logHobby(oneHobby) {
    console.log(`${oneHobby.name}: A hobby for ${oneHobby.lengthInYearsAtHobby} years`)
}

function logHobbies() {
    hobbiesArray.forEach(hobby => {
        logHobby(hobby);
    });
}

logHobbies();


function returnHobbiesHTML() {
    let hobbyInfo = `
        <ul>
    `;
    hobbiesArray.forEach(hobby => {
        hobbyInfo+= `<li>${hobby.name} ${hobby.lengthInYearsAtHobby}</li>`;
        });
        hobbyInfo+=`</ul>`;
        return hobbyInfo;
}


//BONUS
var hobbiesInfoDiv = document.getElementById("hobbiesInfo");
var myElemDiv = document.createElement('div');
myElemDiv.innerHTML = getHobbiesAsTableHTML();
hobbiesInfoDiv.insertAdjacentElement('afterend', myElemDiv);

function getHobbiesAsTableHTML() {
    let hobbyInfo = `
        <table class="tableStyle">
            <tr><th>Sport</th><th>Years in sport</th></tr>
    `;
    hobbiesArray.forEach(hobby => {
        hobbyInfo+= `<tr>
                        <td>${hobby.name}</td>
                        <td>${hobby.lengthInYearsAtHobby}</td>
                        </tr>`;
        });
        hobbyInfo+=`</table>`;
    
      return  hobbyInfo;
}


