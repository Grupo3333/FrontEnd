import { Action } from "./action";

export interface TokenState {
    tokens: string
}

const initialState = {
    tokens: ""
}
export const tokenReducer = (state: TokenState = initialState, action: Action) => {
    switch (action.type) { //switch vai ficar olhando o atipo da minha action
        case "ADD_TOKEN": {// se o tipo for add token 
            return { tokens: action.payload } // vai fazer minha propriedade tokens receber o payload(token) que contem dentro de actions
        }
        default:
            return state// state:TokenState - tokens: que é uma string=""
    }
}