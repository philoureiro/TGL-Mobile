import { SAVE_DATA_OF_USER, SAVE_BETS_OF_CART, SAVE_GAMES, DELETE_BET_OF_CART, ERASE_BETS_OF_USER} from './actionTypes';
import {IGameState, IUserState, IBetState} from './reducers'


interface IGame {
  numbers_selecteds: string;
  color: string;
  price: number;
  date: string;
  type: string;
}

export const saveDataOfUser = (dataUser: IUserState) => {
  return (
    {
      type: SAVE_DATA_OF_USER,
      user: {
        refreshToken: false,
        token: {
          token: dataUser.user.token.token,
          type: dataUser.user.token.type
        },
        email: dataUser.user.email,
        id: dataUser.user.id,
        username: dataUser.user.username
      }
    }
  )
};

export const saveGames = (dataGames: IGameState) => {
  return (
    {
      type: SAVE_GAMES,
      games: dataGames,
  
    })
};


export const saveBets = (betsInCart: IGame) => {
  return (
    {
      type: SAVE_BETS_OF_CART,
      bet: betsInCart
    })
};

export const deleteBetOfCart = (bet: IGame) => {
  return (
    {
      type: DELETE_BET_OF_CART,
      bet: bet
    })
};

export const eraseBetsOfUser = () =>{
  return {
    type: ERASE_BETS_OF_USER,
  }
}