//code evolution(note)
//https://youtu.be/Yy7T4bLhqUg
class Grap{
    constructor(){
        this.adjacencyList = {}//empty object
    }

    //making vertex in the object
    advertex(vertix){
        if(!this.adjacencyList[vertix]){
            this.adjacencyList[vertix] = new Set()//for better performance we write set instead of []array
        }
    }

    addedge(vertix1, vertix2){
        if(!this.adjacencyList[vertix1]){
            this.advertex(vertix1)
        }
         if(!this.adjacencyList[vertix2]){
            this.advertex(vertix2)
         }
         this.adjacencyList[vertix1].add(vertix2)//add is a method available on set ds
         this.adjacencyList[vertix2].add(vertix1)//since this is undirected graph ,show reverse connection btwn vertx
    }

    //display adjacency list
    display(){
        for(let vertix in this.adjacencyList){
            console.log(vertix +' -> ' + [...this.adjacencyList[vertix]]);
        }
    }
    hasEdge(vertex1,vertex2){
        return(
            this.adjacencyList[vertex1].has(vertex2) &&
            this.adjacencyList[vertex2].has(vertex1)    
        )

    }
 }

 const graph = new Grap()
 graph.advertex("A")
 graph.advertex("B")
 graph.advertex("c")

 graph.addedge("A", "B")
 graph.addedge("B", "C")

 graph.display()
 console.log(graph.hasEdge("A","B"));


