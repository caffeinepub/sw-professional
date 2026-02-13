import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Product {
    id: bigint;
    cta: string;
    name: string;
    howToUse: string;
    shortDescription: string;
    benefits: Array<string>;
}
export interface backendInterface {
    getProductById(id: bigint): Promise<Product | null>;
    getProducts(): Promise<Array<Product>>;
}
