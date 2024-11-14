import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ItemService } from '../../service/item/item.service';
import { Item } from '../../type/item';
import { ItemListComponent } from "./item-list/item-list.component";

@Component({
    selector: 'app-item',
    standalone: true,
    imports: [
        ItemListComponent,
        CommonModule
    ],
    templateUrl: './item.component.html',
    styleUrl: './item.component.scss'
})
export class ItemComponent {

    itens$: Observable<Item[]>;
    itemSelected: Item | null = null

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private itemService: ItemService
    ) {
        this.itens$ = this.itemService.list();
    }

    ngOnInit() {
    }

    onSelected(item: Item) {
        this.itemSelected = item;
    }

    onDelete() {
        if (this.itemSelected?._id) {
            this.itemService.remove(this.itemSelected).
                subscribe(() => {
                    this.itens$ = this.itemService.list();
                });
        }
        this.itemSelected = null;
    }

}
