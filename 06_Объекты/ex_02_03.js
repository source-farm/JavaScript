
class Group {
    constructor() {
        this.content = [];
    }

    add(value) {
        if (!this.content.includes(value))
            this.content.push(value);
    }

    delete(value) {
        let valueIdx = this.content.indexOf(value);
        if (valueIdx != -1)
            this.content.splice(valueIdx, 1);
    }

    has(value) {
        return this.content.includes(value);
    }
}

class GroupIterator {
    constructor(group) {
        this.group = group;
        this.pos = 0;
    }

    next() {
        let value = {
            value: undefined,
            done: true
        };

        if (this.pos < this.group.content.length)
        {
            value =  {value: this.group.content[this.pos], done: false};
            this.pos += 1;
        }

        return value;
    }
}

Group.prototype[Symbol.iterator] = function() {
    return new GroupIterator(this);
};

let gr = new Group();
gr.add(13);
gr.add(42);
console.log(gr.has(42));
console.log(gr.has(13));
gr.delete(13);
console.log(gr.has(13));
console.log();

let naturals = new Group();
naturals.add(1);
naturals.add(2);
naturals.add(3);
for (let n of naturals) {
    console.log(n);
}
