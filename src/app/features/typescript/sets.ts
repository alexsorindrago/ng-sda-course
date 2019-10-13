export class DemoSets {

    public testSets(): void {

        // add version 1
        let set = new Set();
        set.add('APPLE');
        set.add('ORANGE');
        set.add('MANGO');

        // add version 2
        let set2 = new Set()
        .add('APPLE')
        .add('ORANGE')
        .add('MANGO');

        //add version 3
        let set3 = new Set(['APPLE', 'ORANGE', 'MANGO']);

        // has
        console.log(set.has('APPLE'));

        // delete
        set.delete('APPLE');

        // size
        console.log(set.size);

        set.clear();
        console.log(set.size);

        // iteration
        for (let entry of set2){
            console.log(entry);
        }
    }
}