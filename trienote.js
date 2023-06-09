//https://youtu.be/Sc80DNJfQs0
//node
//trie
//methods-insert,contains,start with prefix

class Node{
    constructor(){//speciality of node written
        this.children={}
        this.isWordEnd=false
    }
}
class Trie{ 
    constructor(){  
        this.root=new Node()//trie have empty root node

    }

    //methods
    insert(word){
        let curr=this.root//curr is the container for current data
        for(let i=0;i<word.length;i++){
            let charToInsert=word[i]
            if(!(charToInsert in curr.children)){//checking if that letter already exist in trie
                curr.children[charToInsert]=new Node()//create a new node   
            }
            curr=curr.children[charToInsert]//move to the next node
        }
        curr.isWordEnd=true
    }

    //method2
    contains(word){
        let curr=this.root
        for(let i=0;i<word.length;i++){
            let charToFind=word[i]
            if(!(charToFind in curr.children)){//checking if that letter already exist in trie
                return false
            }
            curr=curr.children[charToFind]

    }
    return curr.isWordEnd
}

//method3
startWithPrefix(prefix){
    let curr=this.root
    for(let i=0;i<prefix.length;i++){
        let charToFind=prefix[i]
        if(!(charToFind in curr.children)){//checking if that letter already exist in trie
            return false
        }
        curr=curr.children[charToFind]

}
return true

}
//method 4
getWords() {
    const words = [];

    const traverse = (node, prefix) => {
      if (node.isWordEnd) {
        words.push(prefix);
      }

      for (let char in node.children) {
        traverse(node.children[char], prefix + char);
      }
    };

    traverse(this.root, '');

    return words;
  }

  //method 5
  getWordsWithPrefix(prefix) {
    const words = [];

    const traverse = (node, word) => {
      if (node.isWordEnd) {
        words.push(word);
      }

      for (let char in node.children) {
        traverse(node.children[char], word + char);
      }
    };

    let curr = this.root;
    let prefixMatch = true;
    for (let i = 0; i < prefix.length; i++) {
      let charToFind = prefix[i];
      if (!(charToFind in curr.children)) {
        prefixMatch = false;
        break;
      }
      curr = curr.children[charToFind];
    }

    if (prefixMatch) {
      traverse(curr, prefix);
    }

    return words;
  }
  //method 6
  findLongestCommonPrefix() {
    let curr = this.root;
    let prefix = '';

    while (Object.keys(curr.children).length === 1) {
      const char = Object.keys(curr.children)[0];
      prefix += char;
      curr = curr.children[char];
    }

    return prefix;
  }
}
const myNode=new Trie()
myNode.insert("meenu")
myNode.insert("menu")
myNode.insert("merut")
console.log(myNode.startWithPrefix("m"));
console.log(myNode.contains("hari"));
console.log(myNode.getWords());
console.log(myNode. getWordsWithPrefix("m"));
console.log(myNode. getWordsWithPrefix("h"));
console.log('longest common prefix is',myNode. findLongestCommonPrefix() );


// getWords() is a method of the Trie class that returns an array of all the words stored in the trie.

// const words = []; initializes an empty array called words that will store the words retrieved from the trie.

// const traverse = (node, prefix) => { ... } defines a recursive helper function called traverse. It takes two parameters: node represents the current node being traversed, and prefix holds the current word being formed.

// if (node.isWordEnd) { words.push(prefix); } checks if the current node marks the end of a word (isWordEnd is true). If so, it adds the prefix to the words array, indicating that a complete word has been found.

// for (let char in node.children) { ... } iterates over each character (char) in the children object of the current node. Each character represents a possible path to follow in the trie.

// traverse(node.children[char], prefix + char); recursively calls the traverse function, passing in the child node corresponding to the current character and updating the prefix by appending the current character.

// traverse(this.root, ''); initiates the traversal process by calling the traverse function with the root node of the trie and an empty string as the initial prefix.

// Finally, the method returns the words array, which contains all the words retrieved from the trie.

// In summary, the getWords method uses a recursive traversal approach to explore all possible paths in the trie and collect the words along the way. It starts from the root node, recursively visits each child node, and keeps track of the formed word by updating the prefix variable. When it reaches the end of a word, it adds it to the words array.




