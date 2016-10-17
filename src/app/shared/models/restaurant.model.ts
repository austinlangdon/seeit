import { Menu } from './menu.model';

export class Restaurant {
    id: number;
    name: string;
    slug: string;
    description: string;
    cover_photo: string;
    menus: Menu[];
}