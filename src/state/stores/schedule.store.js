import { observable, decorate, action } from 'mobx';
// getting electron api
const electron = window.require('electron');
const Renderer = require('electron').ipcRenderer;

class SchedulerStore {
  workWeekend = false;
  showModal = false;
  organized = false;
  hours = null;

  setHours = () => {
    Renderer.send('retrieve-details');
    Renderer.on('read-details', (event, arg) => {
      this.hours = arg.hours;
      console.log(arg.hours, 'hours');
    });

    this.organized = true;
  };

  setSchedule = () => {};

  setWeekend = () => {
    this.work_weekend = true;
  };

  open_modal = () => {
    this.showModal = true;
  };

  close_modal = () => {
    this.showModal = false;
  };
}

const DecoratedSchedulerStore = decorate(SchedulerStore, {
  //observables
  showModal: observable,
  workWeekend: observable,
  organized: observable,

  //actions
  set_Hours: action,
  open_modal: action,
  close_modal: action,
});

const store = new DecoratedSchedulerStore();

export default store;
