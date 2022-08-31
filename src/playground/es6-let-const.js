var nameVar = 'Marko';
var nameVar = 'Ivo';
console.log('nameVar', nameVar);

const nameconst = 'Marta';
nameconst = 'Ivana';
console.log('nameconst', nameconst);

const nameConst = 'Franjo';
console.log('nameConst', nameConst);

// Block scoping 

var fullName = 'Mario Novakovic'; 
{

    if(fullName) {
        firstName = fullName.split(' ')[0];

        console.log(firstName);
    }
    
    console.log(firstName);
}
console.log(firstName);