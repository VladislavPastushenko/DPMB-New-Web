  export const userRows = [
    {
      id: 1,
      username: "Name Surname",
      avatar:
        "/user.png",
      email: "mail@gmail.com",
      status: "active",
      Seats: "23",
    },
    {
      id: 2,
      username: "Name Surname",
      avatar:
        "/user.png",
      email: "mail@gmail.com",
      status: "active",
      Seats: "23",
    },
    {
      id: 3,
      username: "Name Surname",
      avatar:
        "/user.png",
      email: "mail@gmail.com",
      status: "active",
      Seats: "23",
    },
    {
      id: 4,
      username: "Name Surname",
      avatar:
        "/user.png",
      email: "mail@gmail.com",
      status: "active",
      Seats: "23",
    },
    {
      id: 5,
      username: "Name Surname",
      avatar:
        "/user.png",
      email: "mail@gmail.com",
      status: "active",
      Seats: "23",
    },
    {
      id: 6,
      username: "Name Surname",
      avatar:
        "/user.png",
      email: "mail@gmail.com",
      status: "active",
      Seats: "23",
    },
    {
      id: 7,
      username: "Name Surname",
      avatar:
        "/user.png",
      email: "mail@gmail.com",
      status: "active",
      Seats: "23",
    },
    {
      id: 8,
      username: "Name Surname",
      avatar:
        "/user.png",
      email: "mail@gmail.com",
      status: "active",
      Seats: "23",
    },
    {
      id: 9,
      username: "Name Surname",
      avatar:
        "/user.png",
      email: "mail@gmail.com",
      status: "active",
      Seats: "23",
    },
    {
      id: 10,
      username: "Name Surname",
      avatar:
        "/user.png",
      email: "mail@gmail.com",
      status: "active",
      Seats: "23",
    },
  ];


  export const stopRows = [
    {
      id: 1,
      stopname: "Stop name1",
      buses: [12],
      city: "Brno"
    },
    {
      id: 2,
      stopname: "Stop name2",
      buses: [12, 15],
      city: "Praha"
    },
    {
      id: 3,
      stopname: "Stop name3",
      buses: [71],
      city: "Brno"
    },
    {
      id: 4,
      stopname: "Stop name4",
      buses: [112],
      city: "Praga"
    },
    {
      id: 5,
      stopname: "Stop name5",
      buses: [12, 112],
      city: "Pardubice"
    },
    {
      id: 6,
      stopname: "Stop name6",
      buses: [24],
      city: "Berlin"
    },
    {
      id: 7,
      stopname: "Stop name7",
      buses: [24, 25],
      city: "London"
    },
    {
      id: 8,
      stopname: "Stop name8",
      buses: [12],
      city: "Karlovy Vary"
    },
    {
      id: 9,
      stopname: "Stop name9",
      buses: [12, 24, 112],
      city: "Praha"
    },
    {
      id: 10,
      stopname: "Stop name10",
      buses: [112],
      city: "Amsterdam"
    },
  ];

  export const transportRows = [
    {
      id: 1,
      busnumber: 12,
      stops: ["Stop name1", "Stop name2", "Stop name5", "Stop name8", "Stop name9"]
    },
    {
      id: 2,
      busnumber: 15,
      stops: ["Stop name2"]
    },
    {
      id: 3,
      busnumber: 71,
      stops: ["Stop name3"]
    },
    {
      id: 4,
      busnumber: 112,
      stops: ["Stop name4", "Stop name5", "Stop name9"]
    },
    {
      id: 5,
      busnumber: 24,
      stops: ["Stop name6", "Stop name7", "Stop name9"]
    },
    {
      id: 6,
      busnumber: 25,
      stops: ["Stop name7"]
    },
  ];

  export const reservationRows = [
    {
      id: 1,
      trip: "Brno-Hlavni nadrazi -> Praha-Florenc",
      passangers: ["Ivan Bobrov", "Vika"],
      delay: 60,
      status: "Unpaid"
    },
    {
      id: 2,
      trip: "Praha-Hlavni nadrazi -> Berlin-Station name",
      passangers: ["Vika"],
      delay: 0,
      status: "Paid"
    },
    {
      id: 3,
      trip: "Brno-U Hrand Hotelu -> Praha-Hlavni nadrazi",
      passangers: ["Dimas", "Snezhana", "Vlad", "Vania", "Vika"],
      delay: 40,
      status: "Expired"
    },
    {
      id: 4,
      trip: "Berlin-Station name -> Brno-Hlavni nadrazi",
      passangers: ["Vlad"],
      delay: 0,
      status: "Unpaid"
    },
  ];

  export const tripRows = [
    {
      id: 1,
      from: "Brno-Hlavni nadrazi",
      to: "Praha-Florenc",
      provider: "Regiojet",
      starttime: "16:00",
      finishtime: "19:30",
      seats: "64/64",
      delay: 0
    },
    {
      id: 2,
      from: "Praha-Florenc",
      to: "Brno-Hlavni nadrazi",
      provider: "Regiojet",
      starttime: "18:00",
      finishtime: "21:30",
      seats: "52/64",
      delay: 12
    },
    {
      id: 3,
      from: "Bratislava-Hlavna stanice",
      to: "Praha-Florenc",
      provider: "Flixbus",
      starttime: "09:00",
      finishtime: "11:30",
      seats: "30/64",
      delay: 0
    },
    
  ];

  export const carrierRows = [
    {
      id: 1,
      name: "Regiojet",
    },
    {
      id: 2,
      name: "Flixbus",
    },
    {
      id: 3,
      name: "Ceske drahy",
    },
    
    
  ];

  export const actualreservedRows= [
    {
      id: 1,
      trip: "Berlin-Station name -> Brno-Hlavni nadrazi",
      seats: 12,
      status: "Unpaid"
    },
    {
      id: 2,
      trip: "Berlin-Station name -> Brno-Hlavni nadrazi",
      seats: 44,
      status: "Paid"
    },
    {
      id: 3,
      trip: "Berlin-Station name -> Brno-Hlavni nadrazi",
      seats: 44,
      status: "Paid"
    },
    
  ];