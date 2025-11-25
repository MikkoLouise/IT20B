class Stack{

    constructor(){
        this.data ={};
        this.topIndex = -1;
    }

    push(element){
        this.topIndex++;
        this.data[this.topIndex] = element;
    }

    traverse(){
        let output = "";

        for(let i=0; i<=this.topIndex; i++){
            output += this.data[i] + " ";
        }

        console.log(output);
    }

    
}

//
stack1 = new Stack();

stack1.push(4);
stack1.push(2);
stack1.push(3);
stack1.traverse();