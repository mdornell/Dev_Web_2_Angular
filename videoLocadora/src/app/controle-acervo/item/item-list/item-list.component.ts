import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from '../../../type/item';

@Component({
    selector: 'app-item-list',
    standalone: true,
    imports: [
        CommonModule
    ],
    templateUrl: './item-list.component.html',
    styleUrl: './item-list.component.scss'
})
export class ItemListComponent {

    @Input() itens: Item[] = [];
    @Output() itemSelected: EventEmitter<Item> = new EventEmitter<Item>();

    constructor(
        private router: Router,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
    }

    onAdd() {
        this.router.navigate(['new'], { relativeTo: this.route });
    }

    onEdit(item: Item) {
        this.router.navigate(['edit', item._id], { relativeTo: this.route });
    }

    onSelected(item: Item) {
        this.itemSelected.emit(item);
    }
}
