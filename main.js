const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder');

item.addEventListener('dragstart', dragStart);
item.addEventListener('dragend', dragEnd);

function dragStart(event) {
    event.target.classList.add('hold');
    setTimeout(() => event.target.classList.add('hide'), 0);
}

function dragEnd(event) {
    event.target.classList.remove('hold', 'hide');
}

for (let elem of placeholders) {
    elem.addEventListener('dragover', dragover);
    elem.addEventListener('dragenter', dragenter);
    elem.addEventListener('dragleave', dragleave);
    elem.addEventListener('drop', dragdrop);
}

function dragover(event) {
    event.preventDefault();
}

function dragenter(event) {
    event.target.classList.add('hovered');
}

function dragleave(event) {
    event.target.classList.remove('hovered');
}

function dragdrop(event) {
    event.target.append(item);
    event.target.classList.remove('hovered');
}