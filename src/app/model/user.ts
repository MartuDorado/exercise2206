export class User {



constructor (private _name : string, private _age : number, private _email : string, private _genre : string){}

public get name(): string {
  return this._name;
}

public set name(value: string) {
  this._name = value;
}
public get age(): number {
  return this._age;
}

public set age(value: number) {
  this._age = value;
}
public get email(): string {
  return this._email;
}

public set email(value: string) {
  this._email = value;
}
public get genre(): string {
  return this._genre;
}

public set genre(value: string) {
  this._genre = value;
}






}
