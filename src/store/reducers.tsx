
import React from 'react';
import { combineReducers } from 'redux';

import { SAVE_DATA_OF_USER, SAVE_BETS_OF_CART, SAVE_GAMES, DELETE_BET_OF_CART, ERASE_BETS_OF_USER } from './actionTypes';
export interface IUserState {
  user: {
    refreshToken: boolean,
    token: {
      token: string,
      type: string
    },
    email: string,
    id: number,
    username: string
  }
}

export interface IGameState {
  games: [{
    id: number,
    type: string,
    description: string,
    price: number,
    color: string,
    range: number,
    max_number: number,
    min_cart_value: number,
  }]
}

export interface IBetState {
  myBets: [
    {
      id: number,
      price: number,
      color: string,
      numbers_selecteds: string,
    }
  ]
}

export interface IMainReducer {
  userReducer: IUserState;
  betReducer: IBetState;
  gameReducer: IGameState
}

const UserState: IUserState = {
  user: {
    refreshToken: false,
    token: {
      token: '',
      type: ''
    },
    email: '',
    id: 0,
    username: ''
  }
};

const MyBetsState: any = {
  myBets: []
}

const GamesState: IGameState = {
  games: [{
    id: 0,
    type: '',
    description: '',
    price: 0,
    color: '',
    range: 0,
    max_number: 0,
    min_cart_value: 0,
  }]
}

export const userReducer = (state: IUserState = UserState,
  action: any) => {
  switch (action.type) {
    case SAVE_DATA_OF_USER:
      // console.log('=>reducer', action.user)
      // const payload = action
      return {
        ...state, user: action.user
      }
    default:
      return state;
  }
};


export const gameReducer = (state: IGameState = GamesState,
  action: any) => {
  switch (action.type) {
    case SAVE_GAMES:
      //console.log('=>reducer game', action.games)
      return {
        ...state, games: action.games
      }
    default:
      return state;
  }
};


export const betReducer = (state: IBetState = MyBetsState,
  action: any) => {
  switch (action.type) {
    case SAVE_BETS_OF_CART:
      const arrayBets = state.myBets;

      //console.log('typeeeee =>', typeof action.bet.numbers_selecteds);
      arrayBets.push(action.bet)

      return {
        ...state, myBets: arrayBets
      }

    case DELETE_BET_OF_CART:
      const array = state.myBets.filter(bet => action.bet !== bet);
      //console.log(array)
      return {
        ...state, myBets: array
      }

    case ERASE_BETS_OF_USER:
      return {
        ...state, myBets: []
      }

    default:
      return state;
  }
}

const mainReducer = combineReducers({
  betReducer,
  userReducer,
  gameReducer,

});

export default mainReducer;
