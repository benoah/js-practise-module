import { surname, name, age, home, occupation } from "./components/constants.js";
import sayBye from "./components/sayBye.js";
import sayHi from "./components/sayHi.js";
import walk from "./components/walk.js";

const person = {
  name: name,
  surname: surname,
  age: age,
  home: home,
  occupation: occupation,
  talk: (name) => sayHi(name),
  goodbye: (name) => sayBye(name),
  walking: (name) => walk(name),
}

person.talk(name);
person.goodbye(name);
person.walking(name);
