import { observable } from "mobx";

class Store {

  @observable books = [
    {
      id: 0,
      title: "The Dummies Guide to MobX",
      author: "Nigel Jones"
    }
  ];

};

export default Store;