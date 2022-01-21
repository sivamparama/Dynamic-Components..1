import { Component, VERSION, ViewChild,ComponentFactoryResolver } from '@angular/core';
import { HelloComponent, HiComponent } from './hello.component';
import { HostDirective } from './host.Directive';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  show:any;
  loadcomponent:any;
  @ViewChild(HostDirective,{static:true})childRef:HostDirective;
  components:[HelloComponent,HiComponent];

  constructor(public FactoryRes:ComponentFactoryResolver){

  }

  loadComponent(id){
    console.log(this.childRef)
    
  }
 
}
