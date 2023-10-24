class Key {
  private signature = Math.random();

  getSignature(): number {
    return this.signature;
  }
}

class Person {
  private myKey: Key;
  constructor(private key: Key) {
    this.myKey = key;
  }

  getKey(): Key {
    return this.myKey;
  }
}

abstract class House {
  door: boolean = false;
  key: Key;
  tenants: Person[] = [];

  comeIn(person: Person) {
    if (this.door) {
      this.tenants.push(person);
    }
  }

  abstract openDoor(key: Key): boolean;
}

class MyHouse extends House {
  key: Key;
  constructor(key: Key) {
    super();
    this.key = key;
  }

  openDoor(key: Key): boolean {
    if (this.key === key) {
      return (this.door = true);
    }
    return false;
  }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
