import {ProductSlideI} from "./components/slides/ProductSlide";

export interface AdditionalImage{
    id: number,
    link: string
}

export interface Address {
    street: string,
    apartmentNumber: number,
    houseNumber: number,
    floorNumber: number,
    entranceNumber: number,
    city: 'Гомель' | 'Рогачев'
}
export interface BasketProduct{
    products: ProductSlideI[],
    address: Address,
    customerName: string,
    phoneNumber:string
    offerDetails: string
}
