import {Component, inject} from '@angular/core';
import {TestService1Service} from "../test-service-1.service";

@Component({
  selector: 'app-test-component-1',
  standalone: true,
  imports: [],
  templateUrl: './test-component-1.component.html',
  styleUrl: './test-component-1.component.css'
})
export class TestComponent1Component {


  private myService = inject(TestService1Service);




  testString="Test String 1";


  testNumber= 23;

  testStrings=[
    'string1',
    'string2',
    'string3',
    'string4',
    'string5'
  ]

  stringIndex=0;
  testString=this.testStrings[this.stringIndex];


  getServiceString(){
    return this.myService.getString();
  }

  onClickIncrementNumber() {

    this.testNumber= this.testNumber+1;

  }


  onClickChangeString(){
    this.stringIndex=(this.stringIndex+1)%this.testStrings.length;
    this.testString=this.testStrings[this.stringIndex];
  }
}
