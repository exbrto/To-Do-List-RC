/* 
-Enter tasks 
    -add button - to enter tasks
-Mark complete
-When tasks are complete, to do a line through/check off
-Be able to delete the whole task

-Input at top/heading of page
-Submit button
-Display the tasks you submitted or entered.
-Check box to mark when task is complete
    -When task is checked, strike a line through
-Delete button, with a warning
*/
// Button for adding task, naming variable for deleteAll, and naming ul
document.querySelector('#addTask').addEventListener('click', addTask);
const thanosSnap = document.querySelector('#removeList');
const toDoList = document.querySelector('.taskList');


// funciton to add list items
function addTask() {
    const listText = document.querySelector('.newTask').value
    const newListItem = document.createElement('li');
    const deleteButton = document.createElement('button');
    const checkBox = document.createElement('input');
    console.log(listText);

    //Adds list-items to the ul 
    document.querySelector('.taskList').appendChild(newListItem);
    newListItem.innerText = listText;
    newListItem.style.listStyle = 'none'
    // newListItem.style.fontFamily = 'Space Grotesk';
    

    // Appends a button at the end of each list-item (will be used to delete li's)
    newListItem.appendChild(deleteButton);
    deleteButton.innerText = '🗑️'
    deleteButton.style.fontSize = '18px';
    deleteButton.addEventListener('click', () => {
        const thanosSnapListItem = confirm('Are you sure you want to delete this task?');
        if (thanosSnapListItem) {
            newListItem.remove();
        }
    
    });

    // Prepends a checkbox in-front of each list-item
    newListItem.prepend(checkBox);
    checkBox.type = 'checkbox';


    // This clears the input where a new task is written
    document.querySelector('.newTask').value = ''

    // Conditional for line-through checkbox, call checkBox input and add style
    checkBox.addEventListener('change', () => {
        if (checkBox.checked) {
            newListItem.style.textDecoration = 'line-through';
            newListItem.style.color = '#0000003f';
        } else {
            newListItem.style.textDecoration = 'none';
            newListItem.style.color = '#d7ffe0';
        }
    });

};

// function to delete the whole list (.removes() will delete all but won't let add to list after), alert() doesn't give yes or no to delete all just an alert
// confirm will give us yes or no pop-up when trying to delete the whole list.
thanosSnap.addEventListener('click', () => {
    const thanosSnapWarning = confirm('Are you sure you want to delete your list?');
    if (thanosSnapWarning) {
        toDoList.innerHTML = '';
    };
});
