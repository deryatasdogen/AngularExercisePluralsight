import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-event-tumbnail',
    template: `
    <div style="margin-top:30px">
    Event: {{event.name}}
  </div>
  <div>
    Date: {{event.date}}
  </div>
  <div>
    Time: {{event.time}}
  </div>
  <div>
    Address: {{event.location.address}}, {{event.location.city}}, {{event.location.country}}
    </div>
`,
    styles: [    ]
})
export class EventTumbnailComponent {
    // tslint:disable-next-line:semicolon
    @Input() event: any
}
