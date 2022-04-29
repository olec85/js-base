'use strict';
function Post(author, text, date) {
    this.author = author,
    this.text = text,
    this.date = date
}

Post.prototype.edit = function(text) {
    this.text = text;
};

function AttachedPost (author, text, date) {
    Post.call(this, author, text, date);
    this.highlighted = false;
}

AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;

AttachedPost.prototype.makeTextHighlighted = function() {
    this.highlighted = true;
}

const Attached1 = new AttachedPost('admin', 'lorem1 ipsum1', new Date());
console.log(Attached1);
Attached1.makeTextHighlighted();
Attached1.edit('dolor2 sit2');
console.log(Attached1);
