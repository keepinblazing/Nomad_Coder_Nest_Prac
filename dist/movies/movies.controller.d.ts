export declare class MoviesController {
    getAll(): string;
    search(seachingYear: string): string;
    getOne(id: string): string;
    create(movieData: any): string;
    remove(id: string): string;
    path(id: string, updateDate: any): any;
}
