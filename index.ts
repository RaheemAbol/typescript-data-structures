let helloWorld = "hello world";
console.log(helloWorld);



interface Team {
    name: string;
    numOfPlayers: number;
    city: string;
}


const baseBall: Team = {
   name: "Reds",
   numOfPlayers: 14,
   city: "columbus"
}

const basketBall: Team = {
    name: "Bucks",
    numOfPlayers: 12,
    city: "florida"
}

console.log(basketBall.name);