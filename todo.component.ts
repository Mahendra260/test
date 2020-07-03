import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todolist=[];
  constructor() { }

  ngOnInit(): void {

    this.todolist=[
      {
        id: 1,
        title: "todolist one",
        completed: false
      },
      {
        id: 2,
        title: "todolist two",
        completed: false
      },
      {
        id: 3,
        title: "todolist three",
        completed: false
      }
    ];

console.log(this.todolist)
  }
  delete(event){
    this.todolist.filter(todo=>todo===event.id)
  }

}
