import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-table',
  template: `
    <p>
      table works!
    </p>
    <div>
      <ng-content></ng-content>
    </div>
  `,
  styles: [],
})
export class TableComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
