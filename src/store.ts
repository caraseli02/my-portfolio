// store.ts
import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'

// define your typings for the store state
export interface State {
    count: number
}

// define injection key
export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
    state: {
        count: 0
    },
    mutations: {
        INCREMENT_COUNT(state: State) {
            state.count++
        }
    },
    actions: {
        incrementCount(context) {
            context.commit("INCREMENT_COUNT")
        }
    }
})