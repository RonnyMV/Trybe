const users =[
    { firstName: 'Homer', lastName: 'Simpson', isDriver: true},
    { firstName: 'Marge', lastName: 'Simpson', isDriver: false},
    { firstName: 'Bart', lastName: 'Simpson', isDriver: true},
    { firstName: 'Lisa', lastName: 'Simpson', isDriver: true},
  ]

  const findUserCantDrive = users.find(user => { return user.isDriver === false});

  console.log(`${findUserCantDrive.firstName} ${findUserCantDrive.lastName} não pode dirigir`)


