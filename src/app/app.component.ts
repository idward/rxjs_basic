import { Component, OnInit } from '@angular/core';
import { mapTo } from 'rxjs/operators';
import { timer, concat } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'rxjs-basic';

  ngOnInit(): void {
    const getPostOne$ = timer(3000).pipe(mapTo({ id: 1 }));
    const getPostTwo$ = timer(1000).pipe(mapTo({ id: 2 }));

    concat(getPostOne$,getPostTwo$).subscribe(res => console.log(res));
  }
}
