import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let restaurants = [
      {
            id: 1,
            name: 'RA Sushi',
            slug: 'ra-sushi',
            description: 'An amazing sushi place.',
            cover_photo: './assets/img/ra/ra-sushi-cover-photo.jpg',
            menus: [
                {
                    id: 1,
                    name: 'At a Glance',
                    slug: 'at-a-glance',
                    cover_photo: './assets/img/ra-sushi/cover-at-a-glance.jpg',
                    items: [
                        {
                            id: 1,
                            name: 'Item 1',
                            description: 'Description of item',
                            price: 12.99,
                            cover_photo: ''
                        },
                        {
                            id: 2,
                            name: 'Item 2',
                            description: 'Description of item',
                            price: 9.99,
                            cover_photo: ''
                        }
                    ]
                },
                {
                    id: 2,
                    name: 'Getting Started',
                    slug: 'getting-started',
                    cover_photo: './assets/img/ra-sushi/cover-getting-started.jpeg',
                    items: [
                        {
                            id: 1,
                            name: 'Item 1',
                            description: 'Description of item',
                            price: 12.99,
                            cover_photo: ''
                        }
                    ]
                },
                {
                    id: 3,
                    name: 'Soups & Salads',
                    slug: 'soups-and-salads',
                    cover_photo: './assets/img/ra-sushi/cover-soups-and-salads.jpg',
                    items: [
                        {
                            id: 1,
                            name: 'Item 1',
                            description: 'Description of item',
                            price: 12.99,
                            cover_photo: ''
                        }
                    ]
                },
                {
                    id: 4,
                    name: 'Happy Hour',
                    slug: 'happy-hour',
                    cover_photo: './assets/img/ra-sushi/cover-happyhour.jpeg',
                    items: [
                        {
                            id: 1,
                            name: 'Item 1',
                            description: 'Description of item',
                            price: 12.99,
                            cover_photo: ''
                        }
                    ]
                }
            ]
        },
        {
            id: 2,
            name: 'Kelly\'s at Southbridge',
            slug: 'kellys-at-southbridge',
            description: 'An irish pub in the heart of Old Town Scottsdale.',
            cover_photo: './assets/img/kellys/kellys-cover-photo.jpg',
            menus: [
                {
                    id: 1,
                    name: 'Breakfast',
                    slug: 'happy-hour',
                    items: [
                        {
                            id: 1,
                            name: 'Item 1',
                            description: 'Description of item',
                            price: 12.99,
                            cover_photo: ''
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
                            cover_photo: ''
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
                            cover_photo: ''
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
                            cover_photo: ''
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
                            cover_photo: ''
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