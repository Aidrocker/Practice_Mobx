import { makeAutoObservable } from 'mobx';

class Counter {
    count = 0;

    constructor() {
        makeAutoObservable(this)
    }

    increment() {
        this.count = this.count + 1;
    }

    dincrement() {
        this.count = this.count - 1;
    }

    get total() {
        return 'Count:' + this.count
    }

}

export default new Counter();