import { observable, computed } from "mobx";

export default class BookStore {
  @observable books = [
    {
      id: 0,
      title: "The Dummies Guide to MobX",
      author: "Nigel Jones"
    },
    {
      id: 1,
      title: "Toilet Trouble",
      author: "I. P. Freely"
    }
  ];

  @computed
  get numberOfBooks() {
    return this.books.length;
  }
};