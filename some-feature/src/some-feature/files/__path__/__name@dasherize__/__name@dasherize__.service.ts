import { Injectable} from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class <%=classify(name)%>Service {
private <%=camelize(name)%>Fetch$: BehaviorSubject<any> = new BehaviorSubject ([]);

  constructor(private http: HttpClient, private <%=camelize(name)%>Service: <%=classify(name)%>Service) {}

  public get<%=classify(name)%>() {
    return  this.<%=camelize(name)%>Fetch$.asObservable();
  }
}
