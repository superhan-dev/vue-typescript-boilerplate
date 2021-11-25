import { ActionContext, ActionTree, GetterTree, MutationTree } from "vuex";

export const state = {
  counter: 0
}
export type State = typeof state;

export enum MutationTypes {
  SET_COUNTER = 'SET_COUNTER',
  RESET_COUNTER = 'RESET_COUNTER'
}

export type Mutations<S = State> = {
  [MutationTypes.SET_COUNTER](state: S, payload: number): void
  [MutationTypes.RESET_COUNTER](state: S, payload: number): void
}

export const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.SET_COUNTER](state, payload: number) {
    state.counter = payload
  },
  [MutationTypes.RESET_COUNTER](state) {
    state.counter = 0;
  }
}

export enum ActionTypes {
  GET_COUNTER = 'GET_COUNTER'
}

// commit의 타입을 정의한다.
// Mutation에서 넘어오는 commit을 키 값으로 받아와 
// commit안에 key와 일치하는 값을 매핑하고 payload를
// Mutation의 속

// ReturnTypa을 탬플릿으로 정의할 수 있는 반환값을 정의한다.
type AugmentActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>
} & Omit<ActionContext<State, State>, 'commit'>

export interface Actions {
  [ActionTypes.GET_COUNTER](
    { commit }: AugmentActionContext,
    payload: number
  ): Promise<number>
}

// actions에서 사용되는 commit을 어떻게 처리할 것인가?
// 현재는 commit 의 타입은 any가 되어있으므로 타입스크립트 사용에 적절하지 않다.
export const actions: ActionTree<State, State> & Actions = {
  [ActionTypes.GET_COUNTER]({ commit }) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const data = 256
        commit(MutationTypes.SET_COUNTER, data)
        resolve(data)
      }, 500)
    })
  }
}

export type Getters = {
  doubledCounter(state: State): number
}

export const getters: GetterTree<State, State> & Getters = {
  doubledCounter: (state) => {
    return state.counter * 2;
  }
}