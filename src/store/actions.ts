import { SAVE_DATA_OF_USER, SAVE_BETS_OF_CART, SAVE_GAMES} from './actionTypes';
import {IGameState, IUserState} from './reducers'

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



