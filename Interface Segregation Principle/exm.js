// Lets assume NodeJS support interfaces amd interfaces support multipe inheritance

class animal {
  eat() {}
  sleep() {}
  breathe() {}
}

class animalCanFly {
  fly() {}
}

class animalCanSwim {
  swim() {}
}

class animalCantFlyCantSwim  
 {
  walk() {}
}

// NodeJs does not support multipe inheritance but i want to implement multipe inheritance using  Interface Segregation Principle 
class lion extends animal, animalCantFlyCantSwim {
  walk() {}
  eat() {}
  sleep() {}
  breathe() {}
}


class bird extends animal , animalCanFly {
  fly() {}
  eat() {}
  sleep() {}
  breathe() {}
  walk() {}
}

class fish extends animal , animalCanSwim {
  swim() {}
  eat() {}
  sleep() {}
  breathe() {}
}

class Penguin extends animal , animalCantFlyCantSwim {
  walk() {}
  eat() {}
  sleep() {}
  breathe() {}
}


