import React, { useCallback, useEffect, useState } from 'react';
import { AnyIfEmpty, useDispatch, useSelector } from 'react-redux';
import { IMainReducer } from '../../store/reducers';


import IconZocial from 'react-native-vector-icons/Zocial';
import IconFeather from 'react-native-vector-icons/Feather';
import IconAnt from 'react-native-vector-icons/AntDesign';
import {
    Container, BoxIconExit, Title,
    BoxTitleAndIcon, ScrollView, BoxInternalCart, ButtonSave,
    BoxPriceTotal, TextPriceCart, TextCart, TextTotalCart, TextButton, ActivityIndicator
} from './styles';
import Account from '../../pages/Account';
import CardOfIndividualGame from '../../components/CardOfIndividualGame';
import { deleteBetOfCart, eraseBetsOfUser } from '../../store/actions'
import { Alert } from 'react-native';
import api from '../../services/api'
import MyBets from '../../pages/MyBets';

interface CartProps {
    navigation: any
}

interface IBet {
    id: number;
    price: number;
    numbers_selecteds: string;
}

interface IBetState {
    color: string;
    date: string;
    numbers_selecteds: string;
    price: number;
    type: string;
    id: number
}

const Cart: React.FC<CartProps> = ({ navigation }) => {

    const gamesRedux = useSelector((state: IMainReducer) => state.gameReducer)
    const betRedux = useSelector((state: IMainReducer) => state.betReducer);
    const userRedux = useSelector((state: IMainReducer) => state.userReducer.user);

    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
    }, [betRedux.myBets])

    const returnGamesInCart = useCallback(() => {

        let itensCart: any = [];

        betRedux.myBets.forEach((bet: any, index: number) => {
            if (bet === undefined) {
                dispatch(deleteBetOfCart(bet));

            } else {

                console.log(bet)
                let price = `(${parseFloat(bet.price).toFixed(2).replace('.', ',')})`;
                const numbers_selecteds = bet.numbers_selecteds
                itensCart.push(
                    <CardOfIndividualGame key={index + 1} onPress={() => dispatch(deleteBetOfCart(bet))} color={bet.color} hasIconTrash={true} numbersSelecteds={numbers_selecteds}
                        price={price} date={bet.date} type={bet.type}
                    ></CardOfIndividualGame>
                )
            }
        })

        return itensCart;

    }, [betRedux.myBets]);

    const returnTotalPrice = useCallback(() => {
        let price = 0;
        betRedux.myBets.forEach((bet) => {
            if (bet === undefined) {
                dispatch(deleteBetOfCart(bet));
            } else {
                price += parseFloat(`${bet.price}`);
            }
        })

        return price.toFixed(2).replace('.', ',');
    }, [betRedux.myBets])

    const handleClickButtonSave = useCallback(async () => {
        setLoading(true);
        if (returnTotalPrice() < '30,00') {
            Alert.alert('O valor de compra é menor do que 30 reais.')
            setLoading(false);
        } else {
            try {
                const config = {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${userRedux.token.token}`
                    }
                }

                let cart: IBet[] = [];

                betRedux.myBets.forEach((bet) => {
                    const currentBet = {
                        id: bet.id,
                        price: bet.price,
                        numbers_selecteds: bet.numbers_selecteds,
                    }
                    cart.push(currentBet)
                })

                await api.post('/bets', { cart: cart, totalPrice: 50 }, config).then(async response => {
                    dispatch(eraseBetsOfUser())
                    setLoading(false);
                    navigation.closeDrawer()
                });
            } catch (error) {
                setLoading(false);
                console.log('=>erro', error)
                Alert.alert('Erro ao salvar dados.')
            }
        }

    }, [betRedux.myBets])

    return (

        <Container>
            <BoxTitleAndIcon>
                <BoxIconExit onPress={() => { navigation.closeDrawer() }}>
                    <IconFeather name='x' size={25} color='#B5C300'></IconFeather>
                </BoxIconExit>
                <IconZocial name='cart' size={35} color='#B5C300'></IconZocial>
                <Title>CART</Title>
            </BoxTitleAndIcon>

            <BoxInternalCart>
                <ScrollView>
                    {returnGamesInCart()}
                </ScrollView>
            </BoxInternalCart>

            <BoxPriceTotal>
                <TextCart>CART</TextCart>
                <TextTotalCart>TOTAL:</TextTotalCart>
                <TextPriceCart>{`R$ ${returnTotalPrice()}`}</TextPriceCart>

            </BoxPriceTotal>
            {loading ?
                <ActivityIndicator size="large" color="#B5C401" />
                :
                <ButtonSave onPress={() => handleClickButtonSave()}>
                    <TextButton style={{ color: '#B5C401', marginLeft: 10 }}>Save</TextButton>
                    <IconAnt name='arrowright' size={30} color='#B5C401'></IconAnt>
                </ButtonSave>
            }

        </Container >

    );
};

export default Cart;