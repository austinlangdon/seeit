export class RestaurantListConfig {
    type: string = 'all';
    filters: {
        tag?: string,
        author?: string,
        favorited?: string,
        limit?: number,
        offset?: number
    } = {};
} 