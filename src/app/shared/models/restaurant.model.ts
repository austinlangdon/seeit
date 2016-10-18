import { Menu } from './menu.model';
import { User } from './user.model';

export class Restaurant {
    id: number;
    name: string;
    slug: string;
    description: string;
    cover_photo: string;
    menus: Menu[];
    owner: User;
}