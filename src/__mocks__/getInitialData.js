const staffData = {
  bio: [
    {
      name: "Romeeka Gayhart",
      info: "http://localhost:3001/api/bio/1"
    },
    {
      name: "Brenna Martenson",
      info: "http://localhost:3001/api/bio/4"
    },
    {
      name: "Robbie Jaeger",
      info: "http://localhost:3001/api/bio/7"
    },
  ]
}

const staffInfo = [
  {
    name: 'Great White Buffalo',
    bio: "Meeka is a developer and reformed Luddite, who came to Colorado to attend the gSchool program. She went on to work as a consultant and developer, specializing in Ruby and JavaScript. Prior to her career in tech, Meeka leveraged her background in Anthropology and Spanish working in the solar energy field. Excited by the possibility for programming to create change in the world, she is now an instructor at Turing School. Meeka is passionate about teaching and mentoring early career developers who know how to code and communicate about code, as well as how to collaborate as a team and respect cultural backgrounds in the workplace.",
    image: "http://localhost:3001/meeka.jpg"
  },
  {
    name: 'Brenna',
    bio: "After an undergraduate degree in Linguistics, Brenna knew that she wanted to combine a career in languages with global experience. Eager to see the world, she worked for a brief stint as a flight attendant before turning her focus back towards languages in the form of front end development. Eventually she found her way to Turing School where she worked to solidify these skills on the backend, providing the technical expertise to reach into communities, solve problems, and spread knowledge. As a Teaching Assistant at Turing, Brenna brings these language skills to more students, helping to position a new generation of programmers to solve problems and make the world more accessible to those without access.",
    image: "http://localhost:3001/brenna.jpg"
  },
  {
    name: 'Robbbbbbie',
    bio: "Rock climber and line cook, Robbie was working as a technical writer after college when he realized that user experience and programming must go hand-in-hand for a successful application. Attracted to the versatility of programming to impact a wide breadth of subjects, he sees software as a unique opportunity to bring people tougher to work towards solutions. As a student at Turing School, Robbie learned for himself what went into programming and was eager to share that newfound knowledge with incoming students. Today, Robbie is a teaching assistant at Turing where he gives others the tools necessary to advance their own causes.",
    image: "http://localhost:3001/robbie.jpg"
  }
]


// const getStaffData = url => {
//   return staffData.bio.map((person, i) => {
//     return new Promise((res, rej) => res(staffInfo[i]))
//   })
// }

export const getInitialData = url => {
  return new Promise((res, rej) => 
    process.nextTick(() => res(staffInfo))
  })
}


export default getInitialData
