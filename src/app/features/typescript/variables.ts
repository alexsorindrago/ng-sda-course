export class DemoVariables {

    name = 'Alex'; //string
    age = 31; //int
    married = false; // boolean
    itCompanies: Array<string> = ['IBM', 'Microsoft', 'Google']; //array var 1
    brands: string[] = ['Apple', 'Dell', 'HP'] //array var 2

    public declareVariables(): void {
        console.log(this.itCompanies);
    }

}