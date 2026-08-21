// let x : unknown = 5;
// console.log((x as string).length);


// class Person{
//     public constructor (private name: string){
//         this.name = name;
//     }

//     public getName() : string{
//         return this.name;
//     }
// }   

// const person = new Person("yata");
// console.log(person);



// interface Shape {
//   getArea: () => number;
// }

// class Rectangle implements Shape {

//   public constructor(protected readonly x: number, protected readonly height: number) {}

//   public getArea(): number {
//     return this.x * this.height;
//   }

//   public toString(): string {
//     return `Rectangle[x=${this.x}, height=${this.height}]`;
//   }
// }

// class Square extends Rectangle {
//   public constructor(x: number) {
//     super(x, x);
//   }

//   // this toString replaces the toString from Rectangle
//   public override toString(): string {
//     return `Square[x=${this.x}]`;
//   }
// }

// const mySq = new Square(20);

// console.log(mySq.toString());




// class Rectangle{
//     constructor(
//         protected x: number,
//         protected y: number,
//         protected z: number = 25

//     ){}
// }

// class Square extends Rectangle{
//     constructor(x : number ){
//         super(x, x, x)
//     }
// }


// const a = new Rectangle(5, 10, 25);
// const b = new Square(5);

// console.log(a);
// console.log(b);




// this is the generics example 

// class NamedValue<T>{
//     private _value : T | undefined;

//     constructor (
//         private name: string
//     ){}

//     public setvalue(_value: T) {
//          this._value = _value
//     }

//     public getvalue(): T| undefined{
//         return this._value
//     }

//     public tostring(): string{
//         return `this is name ${this.name} and number ${this._value}`
//     }
// }

// const a = new NamedValue("yata");
// a.setvalue(22);
// console.log(a.tostring());


