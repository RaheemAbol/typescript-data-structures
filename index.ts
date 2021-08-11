/*
class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}
class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    add(val){
        var newNode = new Node(val);
        // if head is null we set the head and tail to be the node
        if(this.length === 0){
            this.head = newNode;
            this.tail = newNode;
        } else {
        // setting tail.next to the new tail
            this.tail.next = newNode;
        // setting the newNode.prev to be the old tail    
            newNode.prev = this.tail;
            // updating this.tail to be the new node
            this.tail = newNode;
        }
        //adding one to the length and then returning the list
        this.length++;
        return this;
    } 
    find(index){
        // edge case making sure we don't go out of bounds
        if(index < 0 || index >= this.length) return null;
         var count, current;
        if(index <= this.length/2){
            count = 0;
            current = this.head;
        // while count is not equal to index we will traverse the list and add one to count
            while(count !== index){
                current = current.next;
                count++;
            }
        } else {
            // to traverse backwards we start from the end by setting the count to the last index in the list and current to the tail
            count = this.length - 1;
            current = this.tail;
            while(count !== index){
            // while count is not equal to index we will set current to the previous index and subtract one
                current = current.prev;
                count--;
            }
        }
        return current;
    }
}

var list = new DoublyLinkedList()
list.add("Head")
list.add("Middle")
list.add("Tail")
console.log(list.find(2))

*/