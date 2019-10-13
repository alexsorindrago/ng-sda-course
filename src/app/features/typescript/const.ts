export class DemoConst {

    public testConst(): void {
        const treshold =2 ;

        // treshold = 3;  // tyre erro
    }

    public mutateObject(): void {
        const myReference = {};
        console.log(myReference);

        myReference['myProperty'] = 'hello';
        console.log(myReference);
    }

    public makeObjectImmutable(): void {
        const immutableObject = Object.freeze({immutableProperty:2});
      //  immutableObject.newProperty = 123; // will compile error
      // immutableObject.immutableProperty = 3; // will compile error
        console.log(immutableObject);
    }
}