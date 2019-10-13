export class DemoObjectDestructuring {


    public objectDestructuring(): void {

        const jon = {
            firstName: 'Jon',
            lastName: 'Snow',
            age: 35
        };

        // ES 5

        const firstName = jon.firstName;
        console.log(firstName);

        //ES 6

        const {
            firstName: destructuredFirstName,
            lastName: destructuredLastName
        } = jon;
        console.log(destructuredLastName);
    }





}