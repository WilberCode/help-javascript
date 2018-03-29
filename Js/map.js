let companies = [
  {name: 'pepito', category: 'me', start: 95, end: 182},
  {name: 'juanito', category: 'me', start: 65, end: 156},
  {name: 'machito', category: 'hola', start: 65, end: 192},
  {name: 'throught', category: 'me', start: 52, end: 182},
  {name: 'though', category: 'hola', start: 82, end: 154}
]

const retailCompanies = companies.filter(company => company.category === 'me')

console.log(retailCompanies)

const starts = companies.filter(start => start.start >= 60)

console.log(starts)

const testMap = companies.map(company => `${company.name} [${company.start}-${company.end}]`)

console.log(testMap)

let ages = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 23, 24, 25, 26, 27, 28, 28, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39]
let getMap = ages
  .map(age => Math.sqrt(age))
  .map(age => age * 2)

console.log(getMap)
