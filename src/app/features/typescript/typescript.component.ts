import { DemoSets } from './sets';
import { DemoMaps } from './maps';
import { DemoObjectDestructuring } from './object-destructuring';
import { DemoVariables } from './variables';
import { DemoLet } from './let';
import { Component, OnInit } from '@angular/core';
import { DemoConst } from './const';
import { DemoFatArrow } from './fat-arrow';
import { DemoIteration } from './iteration';
import { DemoPromises } from './promises';

@Component({
  selector: 'app-typescript',
  templateUrl: './typescript.component.html',
  styleUrls: ['./typescript.component.scss']
})
export class TypescriptComponent implements OnInit {

  name = 'Alex'; //string
  age = 31; //int
  married = false; // boolean
  itCompanies: Array<string> = ['IBM', 'Microsoft', 'Google']; //array var 1
  brands: string[] = ['Apple', 'Dell', 'HP'] //array var 2



  constructor() {
    //  this.iterateEnum();
    //  this.getKeysOfStringEnum();
    //  this.iterateEnumKeys();

    // demo with let.ts
    let demoLet: DemoLet = new DemoLet();
    demoLet.testLocalVariables();

    // demo with const.ts
    const demoConst: DemoConst = new DemoConst();
    demoConst.testConst();
    demoConst.mutateObject();
    demoConst.makeObjectImmutable();

    // demo with variables.ts
    const demoVariables: DemoVariables = new DemoVariables();
    demoVariables.declareVariables();

    // demo with fat-arrow.ts
    const demoFatArrow: DemoFatArrow = new DemoFatArrow();
    demoFatArrow.testFatArrow();
    demoFatArrow.testFatArrowWithArguments();

    // demo with object-destructuring.ts
    const demoObjectDestructuring: DemoObjectDestructuring = new DemoObjectDestructuring();
    demoObjectDestructuring.objectDestructuring();

    // demo with iteration.ts
    const demoIteration: DemoIteration = new DemoIteration();
    demoIteration.testFor();
    demoIteration.testForInObject();
    demoIteration.testForInArray();
    demoIteration.testForOf();

    // demo with maps.ts
    const demoMaps: DemoMaps = new DemoMaps();
    demoMaps.testMap();

    // demo with sets.ts
    const demoSets: DemoSets = new DemoSets();
    demoSets.testSets();

    // demo with promises.ts
    const demoPromises: DemoPromises = new DemoPromises();
    // demoPromises.testSuccessPromise();
    // demoPromises.testErrorPromise();
    // demoPromises.promiseChainability();
    // demoPromises.promiseErrorHandling();
     demoPromises.promiseInTypescript();
  }

  ngOnInit() {
  }


}
