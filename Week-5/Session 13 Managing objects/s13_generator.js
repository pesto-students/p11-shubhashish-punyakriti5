function* myGenerator(array){
    for (const name of array){
        yield Symbol(name);
    }
}

const array= ["punya","pallavi","pratistha"];
//calling generator function to create generator object which have next()property
const gen=myGenerator(array);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

