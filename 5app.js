'use strict';
class Post {
    constructor(author, text, date) {
        this.author = author,
        this.text = text,
        this.date = date
    }

    edit(text) {

        this.text = text
    }
}

class AttachedPost extends Post {

    constructor(author, text, date) {
        super(author, text, date);
        this.highlighted = false;
    }
    makeTextHighlighted() {
        this.highlighted = true;
    }
}

const Attached1 = new AttachedPost('admin', 'lorem1 ipsum1', new Date());
console.log(Attached1);
Attached1.makeTextHighlighted();
Attached1.edit('dolor2 sit2');
console.log(Attached1);