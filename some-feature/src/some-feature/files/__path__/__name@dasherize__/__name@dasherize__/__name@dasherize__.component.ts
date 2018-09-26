import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { <%=classify(name)%>Service } from '../<%=dasherize(name)%>.service';

@Component({
  selector: 'nd-<%=dasherize(name)%>',
  templateUrl: './<%=dasherize(name)%>.component.html',
  styleUrls: ['./<%=dasherize(name)%>.component.css'],
})
export class <%=classify(name)%>Component {
  <%=camelize(name)%>Fetch$: Observable<any>;

  constructor(private <%=camelize(name)%>Service: <%=classify(name)%>Service) {
    this.init();
  }

  private init() {
    this.get<%=classify(name)%> ();
  }

  private get<%=classify(name)%>() {
    this.<%=camelize(name)%>Fetch$ = this.<%=camelize(name)%>Service.get<%=classify(name)%>();
  }

}
