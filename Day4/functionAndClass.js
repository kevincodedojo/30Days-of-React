//------------------Function-------------------

// const getUserInfo = (firstName, lastName, country, title, skills) => {
//   return `${firstName} ${lastName}, a ${title} develeper based in ${country}, He knows ${skills.join(
//     ", "
//   )}`;
// };
// const skills = ["HTML", "CSS", "JavaScript", "React", "Node", "Python"];
// console.log(
//   getUserInfo("Asabeneh", "Yetayeh", "Finland", "FullStack Developer", skills)
// );

//------------------Class-------------------

class Parent {
  constructor(firstName, lastName, country, title) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.country = country;
    this.title = title;
  }
  getPersonInfo() {
    return `${this.firstName} ${this.lastName} is a ${this.title} developer based in ${this.country}`;
  }
  parentMethod() {
    return "This is a parent method";
  }
}

const p1 = new Parent("Asabeneh", "Yetayeh", "Finland", "FullStack Developer");

class Child extends Parent {
  constructor(firstName, lastName, country, title, skills) {
    super(firstName, lastName, country, title);
    this.skills = skills;
  }
  getSkills() {
    let len = this.skills.length;
    return len > 0 ? this.skills.join(" ") : "No skills found";
  }
  childMethod() {
    return "This is a child method";
  }
}

const skills = ["HTML", "CSS", "JavaScript", "React", "Node", "Python"];

const child = new Child(
  "Asabeneh",
  "Yetayeh",
  "Finland",
  "FullStack Developer",
  skills
);
console.log(child.getPersonInfo());
// console.log(child.getSkills());
// console.log(child.childMethod());
