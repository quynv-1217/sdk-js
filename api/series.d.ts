import { Series, SeriesFull, Post, Request, PagedResource } from '../types/api';
export declare const getSeriesFeed: (params?: Request | undefined) => Promise<PagedResource<Series>>;
export declare const getSeries: (hashId: string) => Promise<SeriesFull>;
export declare const createSeries: (values: object) => import("axios").AxiosPromise<any>;
export declare const edit: (hashId: string) => Promise<any>;
export declare const updateSeries: (hashId: string, values: object) => import("axios").AxiosPromise<any>;
export declare const deleteSeries: (hashId: string) => import("axios").AxiosPromise<any>;
export declare const getPosts: (hashId: string, params?: Request | undefined) => Promise<PagedResource<Post>>;
export declare const addPost: (postId: string, series: string) => import("axios").AxiosPromise<any>;
export declare const removePost: (postId: string, series: string) => import("axios").AxiosPromise<any>;
export declare const movePostBefore: (nextPostId: string, postId: string, series: string) => import("axios").AxiosPromise<any>;
