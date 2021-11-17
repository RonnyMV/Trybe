const users =[
  { firstName: 'Homer', lastName: 'Simpson', isDriver: true},
  { firstName: 'Marge', lastName: 'Simpson', isDriver: true},
  { firstName: 'Bart', lastName: 'Simpson', isDriver: true},
  { firstName: 'Lisa', lastName: 'Simpson', isDriver: true},
]

const everyUserCanDrive = users.every(user => user.isDriver === true)

console.log (`Todos os usuários podem dirigir? Resposta: ${everyUserCanDrive}`)