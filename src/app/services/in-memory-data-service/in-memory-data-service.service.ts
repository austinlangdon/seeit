import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let restaurants = [
      {
            id: 1,
            name: 'RA Sushi',
            description: 'An amazing sushi place.',
            cover_photo: './app/shared/imgs/ra/ra-sushi-cover-photo.jpg',
            menus: [
                {
                    id: 1,
                    name: 'At a Glance',
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
            description: 'An irish pub in the heart of Old Town Scottsdale.',
            cover_photo: './app/shared/imgs/kellys/kellys-cover-photo.jpg',
            menus: [
                {
                    id: 1,
                    name: 'Breakfast',
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
            description: 'An amazing restaurant for burger lovers.',
            cover_photo: './app/shared/imgs/cb/cb2-cover-photo.jpg' 
        }
    ];
    return {restaurants};
  }
}