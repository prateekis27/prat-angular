import { Component } from '@angular/core';
import { Routes } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  email: string;
  password: string;
  router: any;
  // tslint:disable-next-line: typedef
  onSubmit(data) {
    // console.log(data);
    // console.log(data.email);
    // console.log(data.password);
    // tslint:disable-next-line: triple-equals
    if (data.email == 'prateekis27@gmail.com' && data.password == '1234') {
      alert('login succesfully');
      // tslint:disable-next-line: no-unused-expression
      // this.router.navigate['../app/welcome/welcome.component.html'];
    } else {
      alert('Wrong credential');
    }
  }
}
