//1 задача
let population = ['18','329','35','51'];

console.log(population)
console.log(population.length === 4)

function percentageOfWorld1(population, total_population){
    return (population/total_population)*100;
}

const world_population = 7794;
const percentage = 
console.log(percentageOfWorld1);

//2 задача

let neighbours = ['Uzbekistan', 'Kyrgyzstan', 'Tajikistan']
neighbours.push("Утопия") //добавление
neighbours.pop() //удаление

console.log(neighbours)

if(neighbours === 'Germany'){
    console.log('Вероятно, это не центрально-европейская страна')
}

//3 задача

const index = neighbours.indexOf('Uzbekistan')
neighbours[index] = 'England'
console.log(neighbours)

//4 задача

let myCountry = {
    country: 'Япония',
    capital: 'Токио',
    language: 'японский',
    population: 126800000,
    neighbours: ['Россия', 'Китай', 'Южная Корея'],
}
console.log(`В ${myCountry.country} ${myCountry.population} ${myCountry.language} жителей, ${myCountry.neighbours.length} соседние страны и столица ${myCountry.capital}.`);

// Увеличение населения на 2 миллиона
myCountry.population += 2000000;

// Уменьшение населения на 2 миллиона
myCountry['population'] -= 2000000;

//5 задача

myCountry.describe = function(){
    console.log(`В ${myCountry.country} ${myCountry.population} ${myCountry.language} жителей, ${myCountry.neighbours.length} соседние страны и столица ${myCountry.capital}.`)
    console.log(this.country) //this
}
myCountry.describe()

myCountry.checkIsland = function(){
    this.isIsland = (this.neighbours.length === 0) ? true : false;
}

myCountry.checkIsland();
console.log(myCountry.isIsland);

//6

for(let i=50;i++;i>length){
    console.log('В настоящее время голосует избиратель номер 1')
}

//7

const populations = [1441, 1317, 330, 126];

function percentageOfWorld1(population) {
  return (population / 7900) * 100; 
}

//Вычислите массив percentages2 с помощью цикла for и функции percentageOfWorld1
const percentages2 = [];
for (let i = 0; i < populations.length; i++) {
  const percentage = percentageOfWorld1(populations[i]);
  percentages2.push(percentage);
}

// Убедитесь, что процент2 такой же, как и предыдущий массив процентов
const percentages = [18.24, 16.65, 4.18, 1.59];
console.log(percentages2); // [18.24, 16.65, 4.18, 1.59]
console.log(percentages2.every((val, i) => val === percentages[i])); // true

//8

const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Kazakhstan']];

// Вход в соседние страны для консоли
for (let i = 0; i < listOfNeighbours.length; i++) {
  for (let j = 0; j < listOfNeighbours[i].length; j++) {
    console.log(`Neighbour: ${listOfNeighbours[i][j]}`);
  }
}

//9

const Populations = [1441, 1317, 330, 126];
const percentages3 = [];

// Вычислите процент для каждого населения с помощью цикла while
let i = 0;
while (i < Populations.length) {
  const percentage = percentageOfWorld1(Populations[i]);
  percentages3.push(percentage);
  i++;
}

console.log(percentages3);

//10

// Определите стрелочную функцию calcAverage для вычисления среднего балла
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// Рассчитайте средние баллы для обеих команд с помощью функции calcAverage
const avgYesylData1 = calcAverage(44, 23, 71);
const avgYertysData1 = calcAverage(65, 54, 49);
const avgYesylData2 = calcAverage(85, 54, 41);
const avgYertysData2 = calcAverage(23, 34, 27);

// Определите функцию checkWinner для определения победителя на основе средних оценок
const checkWinner = (avgYesyl, avgYertys) => {
  if (avgYesyl >= 2 * avgYertys) {
    console.log(`Yesyl win (${avgYesyl} vs. ${avgYertys})`);
  } else if (avgYertys >= 2 * avgYesyl) {
    console.log(`Yertys win (${avgYertys} vs. ${avgYesyl})`);
  } else {
    console.log("No team wins!");
  }
};

// Используйте функцию checkWinner для определения победителя для обоих наборов данных
checkWinner(avgYesylData1, avgYertysData1); 
checkWinner(avgYesylData2, avgYertysData2); 
