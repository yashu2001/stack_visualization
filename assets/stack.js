class Stack{
    constructor()
    {
        this.items=[]
    }
    push(data){
        this.items.push(data);
    }
    pop(){
        this.items.pop();
    }
    peek(data){
        return this.items.data[this.items.length-1];
    }
}