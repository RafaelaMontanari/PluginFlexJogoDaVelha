import React from 'react';
import { SideLink, Actions } from '@twilio/flex-ui';
import imgHashtagOff from './assets/images/hashtagOff.png'
import imgHashtagOn from './assets/images/hashtagOn.png'

const HashtagButton = ({activeView}) => {
    function navigate() {
        Actions.invokeAction('NavigateToView', { viewName: 'jogo-da-velha'});
    }
    return(
        <SideLink
            showLabel={true}
            icon={<img src={imgHashtagOff}/>}
            iconActive={<img src={imgHashtagOn}/>}
            isActive={activeView === 'jogo-da-velha'}
            onClick={navigate}
        >
            Jogo da Velha
        </SideLink>
    );
};

export default HashtagButton;