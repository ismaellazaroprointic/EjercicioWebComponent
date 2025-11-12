"use strict";
const arrays1 = [1, 34, 67, 100];
console.log(arrays1[2]);
const arrays2 = [...arrays1];
arrays2[2] = 100000;
console.log(arrays1[2]);
