import React from 'react';
import Header from '../components/molecules/Header/Header.molecule';
import { COLOR } from '../constants/color';
import { MainPageWrapper } from './MainPage.styles';

const MainPage = () => {
    return (
        <MainPageWrapper>
            <Header color={COLOR.WHITE} leftHeading='UPayments' rightHeading='Register'/>
        </MainPageWrapper>
    );
};

export default MainPage;
