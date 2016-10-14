import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let restaurants = [
      {
            id: 1,
            name: 'RA Sushi',
            routeName: 'ra-sushi',
            description: 'An amazing sushi place.',
            cover_photo: './assets/img/ra/ra-sushi-cover-photo.jpg',
            menus: [
                {
                    id: 1,
                    name: 'At a Glance',
                    link_name: 'at-a-glance',
                    items: [
                        {
                            id: 1,
                            name: 'Item 1',
                            description: 'Description of item',
                            price: 12.99,
                            photo: ''
                        },
                        {
                            id: 2,
                            name: 'Item 2',
                            description: 'Description of item',
                            price: 9.99,
                            photo: ''
                        }
                    ]
                },
                {
                    id: 2,
                    name: 'Getting Started',
                    routeName: 'getting-started',
                    items: [
                        {
                            id: 1,
                            name: 'Item 1',
                            description: 'Description of item',
                            price: 12.99,
                            photo: ''
                        }
                    ]
                },
                {
                    id: 3,
                    name: 'Soups & Salads',
                    routeName: 'soups-and-salads',
                    items: [
                        {
                            id: 1,
                            name: 'Item 1',
                            description: 'Description of item',
                            price: 12.99,
                            photo: ''
                        }
                    ]
                },
                {
                    id: 4,
                    name: 'Happy Hour',
                    routeName: 'happy-hour',
                    items: [
                        {
                            id: 1,
                            name: 'Item 1',
                            description: 'Description of item',
                            price: 12.99,
                            photo: ''
                        }
                    ]
                }
            ]
        },
        {
            id: 2,
            name: 'Kelly\'s at Southbridge',
            routeName: 'kellys-at-southbridge',
            description: 'An irish pub in the heart of Old Town Scottsdale.',
            cover_photo: './assets/img/kellys/kellys-cover-photo.jpg',
            menus: [
                {
                    id: 1,
                    name: 'Breakfast',
                    routeName: 'happy-hour',
                    items: [
                        {
                            id: 1,
                            name: 'Item 1',
                            description: 'Description of item',
                            price: 12.99,
                            photo: ''
                        }
                    ]
                },
                {
                    id: 2,
                    name: 'Brunch',
                    routeName: 'brunch',
                    items: [
                        {
                            id: 1,
                            name: 'Item 1',
                            description: 'Description of item',
                            price: 12.99,
                            photo: ''
                        }
                    ]
                },
                {
                    id: 3,
                    name: 'Lunch',
                    routeName: 'lunch',
                    items: [
                        {
                            id: 1,
                            name: 'Item 1',
                            description: 'Description of item',
                            price: 12.99,
                            photo: ''
                        }
                    ]
                },
                {
                    id: 4,
                    name: 'Happy Hour',
                    routeName: 'happy-hour',
                    items: [
                        {
                            id: 1,
                            name: 'Item 1',
                            description: 'Description of item',
                            price: 12.99,
                            photo: ''
                        }
                    ]
                },
                {
                    id: 5,
                    name: 'Dinner',
                    routeName: 'dinner',
                    items: [
                        {
                            id: 1,
                            name: 'Item 1',
                            description: 'Description of item',
                            price: 12.99,
                            photo: ''
                        }
                    ]
                }
            ]
        },
        {
            id: 3,
            name: 'Cold Beers & Cheeseburgers',
            routeName: 'cold-beers-and-cheeseburgers',
            description: 'An amazing restaurant for burger lovers.',
            cover_photo: './assets/img/cb/cb2-cover-photo.jpg' 
        }
    ];
    return {restaurants};
  }
}