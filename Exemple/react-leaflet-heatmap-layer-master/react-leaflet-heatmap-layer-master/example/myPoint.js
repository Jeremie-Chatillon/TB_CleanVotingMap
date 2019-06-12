import { addressPoints as pt } from './realworld.10000';

export const addressPoints = f(pt)



function  f(a){
    return a.map(x => ([x[0], x[1], Math.floor((Math.random() * 5) + 1)]))
}

/*
function  f(){
    return Array.from(
        {length: nb}, () => [
            Math.floor((Math.random() * 1000000000))/1000000000 - 37.0,
            Math.floor((Math.random() * 1000000000))/1000000000 + 175,
            Math.floor((Math.random() * 5) + 1)
        ]
    )
}
*/