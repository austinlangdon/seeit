import { Item } from './item.model';

export class Menu {
    id: number;
    name: string;
    slug: string;
    cover_photo: string;
    items: Item[];
}