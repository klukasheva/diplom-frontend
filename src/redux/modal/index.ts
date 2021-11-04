import {ActionType, createAction, createReducer} from "typesafe-actions";


interface ImageModalI{
    link: string,
    title: string,
    isOpen: boolean
}

interface ProductModal {
    isOpen: boolean
}

export const ImageModalAction = createAction(
    'modal/OPEN_IMAGE_MODAL'
)<Partial<ImageModalI>>()

export const ProductModalAction = createAction(
    'modal/CREATE_PRODUCT_MODAL'
)<Partial<ProductModal>>()

type ProductModalActionT = ActionType<typeof ProductModalAction>
type ImageModalActionT = ActionType<typeof ImageModalAction>

export const ProductModalReducer = createReducer<Partial<ProductModal>, ProductModalActionT>({isOpen: false})
    .handleAction(ProductModalAction, (_,action) => action.payload)
export const ImageModalReducer  = createReducer<Partial<ImageModalI>, ImageModalActionT>({link: "", title: "", isOpen: false})
.handleAction(ImageModalAction, (_,action) => action.payload)

