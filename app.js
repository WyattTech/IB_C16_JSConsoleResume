//Console Resume
let fullName = "April Wyatt";
let career = "Full Stack Web Designer";
let description = "I love bread! ";
console.log("Name:  " + " " + " " + fullName.toUpperCase());
console.log("Career: " + " " + career);
console.log("Description: " + " " + " " + description);
console.log(" ");
//Previous Work History Multi patterns: function with an Array with Objects and a Conditional
let mpe = "My Previous Experience:";
console.log(mpe);
function displayPosition(company, title, description) {
  console.log(
    "Company: " +
      " " +
      company +
      " " +
      " " +
      "Job Title: " +
      " " +
      title +
      " " +
      " " +
      "Description: " +
      " " +
      description
  );
}

let jobArr = [
  {
    company: "SS&C",
    title: "Provider Data Analyst",
    description: "Added provider fee schedules to healthcare databases",
  },
  {
    company: "Space Force LLC",
    title: "Moon Cycle Analyst",
    description: "Monitored the tide by the ocean",
  },
  {
    company: "Taco World",
    title: "Taco Buffet Analyst",
    description: "Food taster",
  },
];

for (let i = 0; i < jobArr.length; i++) {
  displayPosition(jobArr[i].company, jobArr[i].title, jobArr[i].description);
}

//Skills Function with
let skill$ = "My Skills:";
console.log(" ");
console.log(skill$);

function displaySkill(skill, bool) {
   console.log(" " + skill);
  } 
 
let skillArr = [
  "Creativity",
  "Critical Thinking",
  "Organization",
  "Stellar Customer Service with Eyerolls",
  "YouTube Critic",
  "Professional Remote Amazon Shopper"   
];

//const bool = "BAM:";

const skill = skillArr;
let bool = "BAM: ";

//console.log(skillArr);


for (let i = 0; i < skillArr.length; i++) {
  displaySkill(skillArr[i]);
}
if ("BAM:" === "BAM:"){
   console.log(bool + " Top notch professional daydreamer");
   console.log(bool + " Collector of stuff to go with my stuff");
}



