import React from 'react';
import { VERSION } from '@twilio/flex-ui';
import { FlexPlugin } from 'flex-plugin';
import { View } from '@twilio/flex-ui';
import { ViewCollection } from '@twilio/flex-ui';
import { SideNav } from '@twilio/flex-ui';
import HashtagButton from './hashtagButton';
import HashtagView from './hashtagView';
import Scoreboard from './scoreboard'

import CustomTaskListContainer from './components/CustomTaskList/CustomTaskList.Container';
import reducers, { namespace } from './states';

const PLUGIN_NAME = 'JogodaVelhaPlugin';

export default class JogodaVelhaPlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  /**
   * This code is run when your plugin is being started
   * Use this to modify any UI components or attach to the actions framework
   *
   * @param flex { typeof import('@twilio/flex-ui') }
   * @param manager { import('@twilio/flex-ui').Manager }
   */
  init(flex, manager) {
    this.registerReducers(manager);

    const options = { sortOrder: 2 };
    SideNav.Content.add(
      <HashtagButton key="hashtag-button" />, options
    );
    ViewCollection.Content.add(
      <View name="jogo-velha" key="jogo-velha">
        <HashtagView />
      </View>
    );
    ViewCollection.Content.add(
      <View name="scoreboard" key="scoreboard">
      <Scoreboard />
    </View>
    )
  }

  /**
   * Registers the plugin reducers
   *
   * @param manager { Flex.Manager }
   */
  registerReducers(manager) {
    if (!manager.store.addReducer) {
      // eslint: disable-next-line
      console.error(`You need FlexUI > 1.9.0 to use built-in redux; you are currently on ${VERSION}`);
      return;
    }

    manager.store.addReducer(namespace, reducers);
  }
}
