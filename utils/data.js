
const users = [
  { username: "AaranParker", email: 'AranP@gmail.com'},
  { username: "AarezNathaniel", email: 'ArazNath@gmail.com'},
  { username: "AaronFarish", email: 'AFarish@gmail.com'},
  { username: "SarahAarman", email: 'ArmanSarah@gmail.com'},
  { username: "AyanTamer", email: 'Ayan_tamer@gmail.com'},
  { username: "Mark-Abbas", email: 'Abas_mark@gmail.com'},
  { username: "Abdallah", email: 'Abouda@gmail.com'},
  { username: "zhi-Zhong", email: 'Zhong_zhi@gmail.com'},
  { username: "JaredHekmat", email: 'hekmat.afandy@gmail.com'},
  { username: "AstridCashi", email: 'asty-cash@gmail.com'},
  { username: "ZohairMurad", email: 'Zozi_mama@gmail.com'},
]

const thoughts = [
  {
    thoughtText: 'Not my only thought',
    username: 'ZohairMurad',
    reactions: [
      {
        reactionBody: 'Wow!',
        username: 'AstridCashi',
      },
    ],
  },

  {
    thoughtText: 'Great thuoght indeedy',
    username: 'zhi-Zhong',
    reactions: [
      {
        reactionBody: 'Indeedo',
        username: 'AyanTamer',
      },
    ],
  },

  {
    thoughtText: 'If you think you will lose. You have lost',
    username: 'Abdallah',
    reactions: [
      {
        reactionBody: 'For out in this world we find. Success begins with a fellow will. It is all in the state of mind.',
        username: 'JaredHekma',
      },
    ],
  },

  {
    thoughtText: 'Great thuoght indeedy',
    username: 'zhi-Zhong',
    reactions: [
      {
        reactionBody: 'Indeedo',
        username: 'AyanTamer',
      },
    ],
  },

  {
    thoughtText: 'If you think you will lose. You have lost',
    username: 'Abdallah',
    reactions: [
      {
        reactionBody: 'For out in this world we find. Success begins with a fellow will. It is all in the state of mind.',
        username: 'JaredHekma',
      },
    ],
  },
]

// const users = []

// // Get a random item given an array
// const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)]

// // Gets a random full name
// const getRandomUser = () =>
//   `${getRandomArrItem(users)} ${getRandomArrItem(users)}`

// // Function to generate random applications that we can add to the database. Includes application tags.
// const getRandomThought = (int) => {
//   let results = []
//   for (let i = 0; i < int; i++) {
//     results.push({
//       published: Math.random() < 0.5,
//       description: getRandomArrItem(appDescriptions),
//       buildSuccess: Math.random() < 0.5,
//       tags: [...getThoughtTags(3)],
//     })
//   }
//   return results
// }

// // Create the tags that will be added to each application
// const getThoughtTags = (int) => {
//   if (int === 1) {
//     return getRandomArrItem(possibleTags)
//   }
//   const results = []
//   for (let i = 0; i < int; i++) {
//     results.push({
//       tagBody: getRandomArrItem(possibleTags),
//       username: getRandomUser(),
//     })
//   }
//   return results
// }

// Export the functions for use in seed.js
//module.exports = { getRandomUser, getRandomThought, getRandomReaction }
