export class RestaurantListConfig {
    type: string = 'all';
    filters: {
        name?: string,
        tag?: string,
        author?: string,
        favorited?: string,
        limit?: number,
        offset?: number
    } = {};
} 