import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-event-tumbnail',
    template: `
    <div style="margin-top:30px">
    Event: {{event?.name}}
  </div>
  <div>
    Date: {{event.date}}
  </div>
  <div [ngClass]="getStartTimeClass()" [ngSwitch]="event?.time">
    Time: {{event.time}}
    <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
    <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
    <span *ngSwitchDefault>(Normal Start)</span>
  </div>
  <div [hidden]="!event?.location">
    Address: {{event?.location?.address}}, {{event?.location?.city}}, {{event?.location?.country}}
    </div>
    <div [hidden]="!event?.onlineUrl" >Online Url: {{event?.onlineUrl}}</div>
`,
    styles: [ `
      .green { color: #003300 !important; }
      .bold { dont-weight: bold; }
      ` ]
})
export class EventTumbnailComponent {
    // tslint:disable-next-line:semicolon
    @Input() event: any

    getStartTimeClass(){
      if( this.event && this.event.time ==='8:00 am')
        return 'green bold'
      return ''
    }
}
