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
  protected door: boolean = false;
  protected key: Key;
  private tenants: Person[] = [];

  constructor(key: Key) {
    this.key = key;
  }

  comeIn(person: Person): void {
    if (this.door) {
      this.tenants.push(person);
    }
  }

  abstract openDoor(key: Key): void;
}

class MyHouse extends House {
  openDoor(key: Key): void {
    if (this.key.getSignature() === key.getSignature()) {
      this.door = true;
    }
  }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
