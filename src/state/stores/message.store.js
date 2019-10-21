import { observable, decorate, action } from 'mobx';

class MessageStore {
  chatMembers = true; // members of a group/team
  overviewPane = true;

  // private message // Dm panel
  OpenDm = () => {
    this.chatMembers = false;
  };

  CloseDm = () => {
    this.chatMembers = true;
  };

  // overview panel
  OpenOverviewPane = () => {
    this.overviewPane = true;
  };

  CloseOverviewPane = () => {
    this.overviewPane = false;
  };
}

const DecoratedMessageStore = decorate(MessageStore, {
  //observables here
  chatMembers: observable,
  overviewPane: observable,

  //actions here
  OpenDM: action,
  CloseDM: action,
  OpenOverviewPane: action,
  CloseOverviewPane: action,
});

const store = new DecoratedMessageStore();

export default store;
