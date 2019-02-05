import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  notes = [
    {
      'title': 'Zakupy',
      'content': 'Ziemniaki, pierczarki, kurczak'
    },
    {
      'title': 'Auto',
      'content': 'Muszę umyć auto bo jest brudne w cholerę'
    },
    {
      'title': 'xxxx',
      'content': 'Muszę umyć auto bo jest brudne w cholerę'
    },
    {
      'title': 'xxxx',
      'content': 'Muszę umyć auto bo jest brudne w cholerę'
    },
    {
      'title': 'xxxx',
      'content': 'Muszę umyć auto bo jest brudne w cholerę'
    },
    {
      'title': 'xxxx',
      'content': 'Muszę umyć auto bo jest brudne w cholerę'
    },
    {
      'title': 'xxxx',
      'content': 'Muszę umyć auto bo jest brudne w cholerę'
    },
    {
      'title': 'xxxx',
      'content': 'Muszę umyć auto bo jest brudne w cholerę'
    },
    {
      'title': 'xxxx',
      'content': 'Muszę umyć auto bo jest brudne w cholerę'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
