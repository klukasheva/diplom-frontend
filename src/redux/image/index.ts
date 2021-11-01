import {ActionType, createAction, createReducer} from "typesafe-actions";

interface ImageModalI{
    link: string,
    title: string,
    isOpen: boolean
}
export const ImageModalAction = createAction(
    'image/OPEN_IMAGE_MODAL'
)<Partial<ImageModalI>>()

type ImageModalActionT = ActionType<typeof ImageModalAction>

export const ImageModalReducer  = createReducer<Partial<ImageModalI>, ImageModalActionT>({link: "", title: "", isOpen: false})
.handleAction(ImageModalAction, (state,action) => action.payload)