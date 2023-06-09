//insert and search node in a tree
//https://youtu.be/cFRRgwPIk2s
//https://youtu.be/GgDwIm1TlvE

class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearch{
    constructor(){
        this.root = null
    }

    empty(){
        return this.root === null
    }

    //insert.............................
    insert(value){
         const newnode = new Node(value)
         if(this.empty()){
            this.root = newnode
         } else{
            this.insertNode(this.root, newnode)
         }
    }

    insertNode(root, newNode){
        if(newNode.value < root.value){
            if(root.left === null){
                root.left = newNode
            } else{
               this.insertNode(root.left, newNode)
            }
        } else{
            if(root.right === null){
                root.right = newNode
            } else{
                this.insertNode(root.right, newNode)
            }
        }
    }

    //search........................................
    search(root , value){
        if(!root){
            return false
        } else{
           if(root.value === value){
            return value
           } else if(value < root.value){
            return this.search(root.left, value) 
           } else{
            return this.search(root.right, value)
           }
        }
    }
    
    //DFS(Depth First Search Technique)
    //preorder........................................
    preOrder(root){
        if(root){
            console.log(root.value);
            this.preOrder(root.left)
            this.preOrder(root.right)
        }

    }

    //inorder traversal..............................
    inOrder(root){
        if(root){
            this.inOrder(root.left)
            console.log(root.value)
            this.inOrder(root.right)
            }   
            }
   //postoreder traversal........................
   postOrder(root){
    if(root){
        this.postOrder(root.left)
        this.postOrder(root.right)
        console.log(root.value)

   }
 }

 //BFS(Breadth first search technique)
 //level order
 levelOrder(){
    //use optimised queue implementation
    const queue=[]
    queue.push(this.root)
    while(queue.length){
        const current=queue.shift()
        console.log(current.value)
        if(current.left){
            queue.push(current.left)
        }
        if(current.right){
            queue.push(current.right)
            }
        }
    }

    //min and max node in the tree
    min(root){
        if(!root.left){
            return root.value
        }else{
            return this.min(root.left)

        }     
    }

    max(root){
        if(!root.right){
            return root.value
    }else{
        return this.max(root.right)
    }
}

//delete a node from the tree (given its value)
delete(value){
    this.root=this.deleteNode(this.root,value)
}
deleteNode(root,value){
    if(root===null){
        return root
    }
    if(value <root.value){
        root.left=this.deleteNode(root.left,value)
    }else if(value > root.value){
        root.right=this.deleteNode(root.right,value)
    }else{
        if(root.left===null && root.right===null){
            return null
    }
    if(root.left===null){
        return root.right
        }
        if(root.right===null){
            return root.left
            }
            let min=this.min(root.right)
            root.value=min
            root.right=this.deleteNode(root.right,min)
            }
            return root
            }

}

const bst = new BinarySearch()

console.log('Tree is empty ?', bst.empty());


bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.insert(7)


console.log('..search..');
console.log(bst.search(bst.root, 10))
console.log(bst.search(bst.root, 5))
console.log(bst.search(bst.root, 15))
console.log(bst.search(bst.root, 3))
console.log(bst.search(bst.root, 1))
console.log('...DFS...');
console.log('...preorder traversal....');
bst.preOrder(bst.root)
console.log('...inorder traversal....');
bst.inOrder(bst.root)
console.log('...postorder traversal....');
bst.postOrder(bst.root)
console.log('...BFS...')
bst.levelOrder()
// console.log('..max and min node in tree..');
// console.log('min=',bst.min(bst.root));
// console.log('max=',bst.max(bst.root));

// console.log('..deletion(scenario 1)..');
// bst.delete(3)
// bst.levelOrder()

// console.log('..deletion(scenario 2)..');
// bst.delete(15)
// bst.levelOrder()


// console.log('..deletion(scenario 3)..');
// bst.delete(10)
// bst.levelOrder()

