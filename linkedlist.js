class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList{

    constructor(){
        this.head = null;
    }

    insert_at_beginning(element){
        const node = new Node(element);
        node.next = this.head;
        this.head = node;
    }

    traverse(){
        let current = this.head;
        let output = "";

        while(current){
            output += current.value + " ";
            current = current.next;
        }

        return output;
    }

}

let list1 = new LinkedList();
list1.insert_at_beginning(4);
list1.insert_at_beginning(2);
list1.insert_at_beginning(3);
console.log(list1.traverse());