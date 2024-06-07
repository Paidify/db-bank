function getNextSequenceValue(db, sequenceName) {
  const sequenceDocument = db.counters.findOneAndUpdate(
    { _id: sequenceName },
    { $inc: { seq: 1 } },
    { returnDocument: "after" } // return the updated document
  );
  return sequenceDocument.seq;
}

function initializeDatabase(
  databaseName,
  initialCardFranchises,
  initialCardTypes,
  initialOwners,
  initialCards
) {
  db = db.getSiblingDB(databaseName);

  db.createCollection("card_franchises");
  db.createCollection("card_types");
  db.createCollection("owners");
  db.createCollection("cards");
  db.createCollection("deals");
  db.createCollection("counters");

  db.counters.insertMany([
    {
      _id: "card_id",
      seq: 0,
    },
    {
      _id: "deal_id",
      seq: 0,
    },
    {
      _id: "card_franchise_id",
      seq: 0,
    },
    {
      _id: "card_type_id",
      seq: 0,
    },
    {
      _id: "owner_id",
      seq: 0,
    },
  ]);

  initialCardFranchises.forEach((cardFranchise) => {
    cardFranchise.franchise_id = getNextSequenceValue(db, "card_franchise_id");
    db.users.insertOne(cardFranchise);
  });

  initialCardTypes.forEach((cardType) => {
    cardType.type_id = getNextSequenceValue(db, "card_type_id");
    db.users.insertOne(cardType);
  });

  initialOwners.forEach((owner) => {
    owner.owner_id = getNextSequenceValue(db, "owner_id");
    db.users.insertOne(owner);
  });

  initialCards.forEach((card) => {
    card.card_id = getNextSequenceValue(db, "card_id");
    db.users.insertOne(card);
  });
}

const franchises = [
  {
    // 1
    franchise: "Visa",
  },
  {
    // 2
    franchise: "Mastercard",
  },
  {
    // 3
    franchise: "American Express",
  },
  {
    // 4
    franchise: "Discover",
  },
  {
    // 5
    franchise: "JCB",
  },
];

const cardTypes = [
  {
    // 1
    type: "Credit",
  },
  {
    // 2
    type: "Debit",
  },
];

// East bank

const ownersEast = [
  {
    // 1
    name: "Gustavo Marques",
    email: "gustavmarq@email.com",
    DNI: "ZTFL",
  },
  {
    // 2
    name: "Rosana Heras",
    email: "rosanahe@email.com",
    DNI: "DQCK",
  },
  {
    // 3
    name: "Minerva Ibañez",
    email: "minervaiba@email.com",
    DNI: "QSAI",
  },
  {
    // 4
    name: "Braulio Reyes",
    email: "braurey@email.com",
    DNI: "FGXS",
  },
  {
    // 5
    name: "Benjamin Dorado",
    email: "benjamindor@email.com",
    DNI: "COLK",
  },
  {
    // 6
    name: "Jairo Velasco",
    email: "valascoje@email.com",
    DNI: "QUSG",
  },
  {
    // 7
    name: "Laila Vallejo",
    email: "vallejola@email.com",
    DNI: "KJND",
  },
  {
    // 8
    name: "Eladio Galan",
    email: "galaneladio@email.com",
    DNI: "LPKO",
  },
  {
    // 9
    name: "Gerard Robles",
    email: "roblesger@email.com",
    DNI: "KALA",
  },
  {
    // 10
    name: "Emma Carrasco",
    email: "emmacarr@email.com",
    DNI: "DOOM",
  },
];

const cardsEast = [
  {
    // 1
    owner: "Gustavo Marques",
    owner_id: 1,
    exp_month: "11",
    exp_year: "2026",
    cvv: "111",
    amount: 999999834,
    card_number: 5370141525202878,
    card_franchise_id: 5,
    card_type_id: 1,
  },
  {
    // 2
    owner: "Rosana Heras",
    owner_id: 2,
    exp_month: "11",
    exp_year: "2026",
    cvv: "111",
    amount: 6478000,
    card_number: 4306520326571889,
    card_franchise_id: 4,
    card_type_id: 1,
  },
  {
    // 3
    owner: "Minerva Ibañez",
    owner_id: 3,
    exp_month: "11",
    exp_year: "2026",
    cvv: "111",
    amount: 1452450,
    card_number: 340755566623152,
    card_franchise_id: 3,
    card_type_id: 1,
  },
  {
    // 4
    owner: "Braulio Reyes",
    owner_id: 4,
    exp_month: "11",
    exp_year: "2026",
    cvv: "111",
    amount: 66494600,
    card_number: 318764543364205,
    card_franchise_id: 3,
    card_type_id: 1,
  },
  {
    // 5
    owner: "Benjamin Dorado",
    owner_id: 5,
    exp_month: "11",
    exp_year: "2026",
    cvv: "111",
    amount: 66494600,
    card_number: 4349207403874582,
    card_franchise_id: 4,
    card_type_id: 2,
  },
  {
    // 6
    owner: "Jairo Velasco",
    owner_id: 6,
    exp_month: "11",
    exp_year: "2026",
    cvv: "111",
    amount: 66494600,
    card_number: 4423550273702360,
    card_franchise_id: 4,
    card_type_id: 2,
  },
  {
    // 7
    owner: "Jairo Velasco",
    owner_id: 6,
    exp_month: "11",
    exp_year: "2026",
    cvv: "111",
    amount: 66494600,
    card_number: 5149314645105467,
    card_franchise_id: 5,
    card_type_id: 1,
  },
  {
    // 8
    owner: "Laila Vallejo",
    owner_id: 7,
    exp_month: "11",
    exp_year: "2026",
    cvv: "111",
    amount: 66494600,
    card_number: 5482364317747786,
    card_franchise_id: 5,
    card_type_id: 2,
  },
  {
    // 9
    owner: "Eladio Galan",
    owner_id: 8,
    exp_month: "11",
    exp_year: "2026",
    cvv: "111",
    amount: 66494600,
    card_number: 333539781030378,
    card_franchise_id: 3,
    card_type_id: 2,
  },
  {
    // 10
    owner: "Gerard Robles",
    owner_id: 9,
    exp_month: "11",
    exp_year: "2026",
    cvv: "111",
    amount: 66494600,
    card_number: 313152334401187,
    card_franchise_id: 3,
    card_type_id: 1,
  },
  {
    // 11
    owner: "Gerard Robles",
    owner_id: 9,
    exp_month: "11",
    exp_year: "2026",
    cvv: "111",
    amount: 66494600,
    card_number: 4320493551765118,
    card_franchise_id: 4,
    card_type_id: 1,
  },
  {
    // 12
    owner: "Emma Carrasco",
    owner_id: 10,
    exp_month: "11",
    exp_year: "2026",
    cvv: "111",
    amount: 66494600,
    card_number: 5043081460614574,
    card_franchise_id: 5,
    card_type_id: 2,
  },
];

// Western bank

const ownersWestern = [
  {
    name: "Jairo Velasco",
    email: "valascoje@email.com",
    DNI: "QUSG",
  },
  {
    name: "Laura Guirado",
    email: "lauragui@email.com",
    DNI: "WQOD",
  },
  {
    name: "George Elvira",
    email: "elvirageor@email.com",
    DNI: "NDHC",
  },
  {
    name: "Noel Montiel",
    email: "montielno@email.com",
    DNI: "TEZN",
  },
  {
    name: "Yago Hurtado",
    email: "hurtaya@email.com",
    DNI: "UTNF",
  },
  {
    name: "Iris Mata",
    email: "irismata@email.com",
    DNI: "MJHD",
  },
  {
    name: "Gonzalo Pascual",
    email: "gonzapascua@email.com",
    DNI: "DFCS",
  },
  {
    name: "Constantin Rosales",
    email: "constarosa@email.com",
    DNI: "BFGD",
  },
  {
    name: "Alejandra Cardenas",
    email: "alejacarde@email.com",
    DNI: "OIUN",
  },
  {
    name: "Laila Vallejo",
    email: "vallejola@email.com",
    DNI: "KJND",
  },
];

const cardsWestern = [
  {
    owner: "Jairo Velasco",
    owner_id: 1,
    exp_month: "06",
    exp_year: "2026",
    cvv: "111",
    amount: 888888888,
    card_number: 4620740023715600,
    card_franchise_id: 4,
    card_type_id: 1,
  },
  {
    owner: "Laura Guirado",
    owner_id: 2,
    exp_month: "06",
    exp_year: "2026",
    cvv: "111",
    amount: 77777777,
    card_number: 371259480212784,
    card_franchise_id: 3,
    card_type_id: 1,
  },
  {
    owner: "Jairo Velasco",
    owner_id: 1,
    exp_month: "11",
    exp_year: "2026",
    cvv: "111",
    amount: 5555004,
    card_number: 5806832232635512,
    card_franchise_id: 5,
    card_type_id: 2,
  },
  {
    owner: "George Elvira",
    owner_id: 3,
    exp_month: "11",
    exp_year: "2026",
    cvv: "111",
    amount: 844664000,
    card_number: 5958653768403539,
    card_franchise_id: 5,
    card_type_id: 2,
  },
  {
    owner: "George Elvira",
    owner_id: 3,
    exp_month: "11",
    exp_year: "2026",
    cvv: "111",
    amount: 66494600,
    card_number: 370796017085174,
    card_franchise_id: 3,
    card_type_id: 1,
  },
  {
    owner: "Noel Montiel",
    owner_id: 4,
    exp_month: "11",
    exp_year: "2026",
    cvv: "111",
    amount: 66494600,
    card_number: 377603885242502,
    card_franchise_id: 3,
    card_type_id: 2,
  },
  {
    owner: "Yago Hurtado",
    owner_id: 5,
    exp_month: "11",
    exp_year: "2026",
    cvv: "111",
    amount: 66494600,
    card_number: 4836601666376383,
    card_franchise_id: 4,
    card_type_id: 1,
  },
  {
    owner: "Iris Mata",
    owner_id: 6,
    exp_month: "11",
    exp_year: "2026",
    cvv: "111",
    amount: 66494600,
    card_number: 4519821152550363,
    card_franchise_id: 4,
    card_type_id: 2,
  },
  {
    owner: "Gonzalo Pascual",
    owner_id: 7,
    exp_month: "11",
    exp_year: "2026",
    cvv: "111",
    amount: 66494600,
    card_number: 5607916683032606,
    card_franchise_id: 5,
    card_type_id: 1,
  },
  {
    owner: "Constantin Rosales",
    owner_id: 8,
    exp_month: "11",
    exp_year: "2026",
    cvv: "111",
    amount: 66494600,
    card_number: 5899032626112122,
    card_franchise_id: 5,
    card_type_id: 2,
  },
  {
    owner: "Alejandra Cardenas",
    owner_id: 9,
    exp_month: "11",
    exp_year: "2026",
    cvv: "111",
    amount: 66494600,
    card_number: 376438587134473,
    card_franchise_id: 3,
    card_type_id: 2,
  },
  {
    owner: "Laila Vallejo",
    owner_id: 10,
    exp_month: "11",
    exp_year: "2026",
    cvv: "111",
    amount: 66494600,
    card_number: 378764543364205,
    card_franchise_id: 3,
    card_type_id: 1,
  },
];

// Initialize the database

initializeDatabase("east_bank", franchises, cardTypes, ownersEast, cardsEast);

initializeDatabase(
  "western_bank",
  franchises,
  cardTypes,
  ownersWestern,
  cardsWestern
);
