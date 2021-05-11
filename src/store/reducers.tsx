
import React from 'react';
import { combineReducers } from 'redux';

import { SAVE_DATA_OF_USER, SAVE_BETS_OF_CART, SAVE_GAMES } from './actionTypes';
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
      type: string,
      price: number,
      numbers_selecteds: string,
    }
  ]
}

export interface IMainReducer {
  userReducer: IUserState;
  cartReducer: IBetState;
  gamesReducer: IGameState
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

const MyBetsState: IBetState = {
  myBets: [{
    type: '',
    price: 0,
    numbers_selecteds: '',
  }]
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
      //    console.log('=>reducer', action.user)
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
      //   console.log('=>reducer game', action.games)
      return {
        ...state, games: action.games
      }
    default:
      return state;
  }
};


const mainReducer = combineReducers({
  userReducer,
  gameReducer
});

export default mainReducer;
