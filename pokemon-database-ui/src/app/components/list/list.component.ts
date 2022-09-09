import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Listeable } from 'src/app/interfaces/Listeable';
import { RestRetrieverService } from 'src/app/services/rest-retriever.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public itemList!: Listeable[];

  constructor(private listRetriever: RestRetrieverService, private router: Router) { }

  ngOnInit(): void {
    this.listRetriever.getList(this.router.url).subscribe((list: Listeable[]) => {
      this.itemList = list;
    });
  }

}
