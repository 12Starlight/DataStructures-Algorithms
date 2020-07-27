/*
Tries:
  Time to learn yet another tree-based data structure, TRIES! A TRIE is a type
  of search tree used to efficiently store a set of string for later retrieval.
  In the long run, we will see that a path from root to any node in the trie
  will represent a prefix of at least one string in the set. This is why tries
  are also known as PREFIX TREES.

*/

/*
Anatomy Of A Trie:
  We will implement a Trie using the object-oriented approach. That is, we will
  create a 'Trie' class that consists of many 'Node's connected together by
  reference.

Trie Node Implementation:
  Unlike our other tree structures, we do not store values within the nodes of a
  trie. Instead we store values for each edge that leaves a node. Note that a
  trie is not a Binary Tree, so a trie node can have any number of children:

*/

class NodeDemo {
  constructor() {
    this.children = {};
    this.isTerminal = false;
  }
}

// For now you can ignore the 'isTerminal' property. Instead, let us preview how
// we can use this 'Node' class to represent connections between nodes:
let root = new NodeDemo();
root.children['z'] = new NodeDemo();
root.children['a'] = new NodeDemo();
root.children['b'] = new NodeDemo();

/*
  This is not yet a full trie, but it will be a core pattern of the data
  structure. Notice that labels are applied to the edges and not the nodes.

*/

/*
Trie Visualization:
  Our goal is to build out a 'Trie' class, but the design will be clearest if we
  begin by reverse engineering some diagrams. A trie stores words. Let us say
  we wanted a trie to store the word 'ten':

  Notice that the word 'ten' is represented by a path from the root to a 
  terminal node (shaded in gray). A word recognized by the trie MUST begin at
  the root and end at the terminal node. Let us now insert 'tea' into the
  existing trie.

  Since 'tea' shares a prefix with the existing word 'ten', their paths share
  some overlap. This is great bc we do not have to store redundant characters.
  Let us now insert 'taco':

  Our above trie now recoginizes 3 words ('ten', 'tea', 'taco'). Notice that
  'tac' is made of characters in a path, but it is not a word recognized by this
  trie. This is bc recognized words must begin at the root but END AT A TERMINAL 
  NODE. Let us wrap up by inserting 'in' and 'inn'.

*/

/*
Trie#insert Implementation:
  Nice! Let us start to translate this insertion logic into code. Given a string
  and a root, we will need to look at the first character of the string and see
  if an edge for that character already exists for this root. If the edge
  already exists, then we want to 'reuse' it. Otherwise we will need to create
  the edge for ourself. Then we can just apply the same logic recursively on the
  new destination node with the remaining characters.

*/

class TrieDemo {
  constructor() {
    this.root = new Node();
  }

  insert(word, root=this.root) {
    // take the first letter of the word
    let letter = word[0];

    // if the current root does not have an outgoing edge for the given letter
    // then we must create a new edge for the letter and point it to a new
    // destination node
    if (!(letter in root.children)) {
      root.children[letter] = new Node()
    }

    // if there are no other characters in the word, then mark the destination
    // node as terminal
    if (word.length === 1) {
      root.children[letter].isTerminal = true;
    } else {
      this.insert(word.slice(1), root.children[letter]);
    }
  }
}

/*
Trie#search Implementation:
  Now that we have a way to insert words into the trie, we will need to
  implement a '#search' method that will tell us whether or not a given word is
  recognized by the trie. This turns out to be a simple traversal down the tree.
  We begin at the absolute root and continually consume the front character of
  the string, traveling through the edge that correspond to that character. The
  word is recognized once the string is empty and we are located at a terminal
  node. On the flip side, if we consume a character that does not have an edge
  associated with from our current node then the word is not recognized. There
  could also be a scenario where we consume characters until the string is empty,
  but we land on a nonterminal node. This means the word is not recognized (such
  as 'tac' in the previous examples). Let us code:

*/

class TrieDemo1 {
  constructor() {
    this.root = new Node();
  }
  // ...

  search(word, root=this.root) {
    if (word.length === 0) {
      if (root.isTerminal) {
        // the word is recognized, if it is empty and the current node is
        // terminal
        return true;
      } else {
        return false;
      }
    }

    // take the first letter of the string
    let letter = word[0];

    // if there is an edge for this letter
    if (letter in root.children) {
      return this.search(word.slice(1), root.children[letter]);
    } else {
      // otherwise the edge does not exist, so this word is not recognized
      return true;
    }
  }
}

// Complete Trie JavaScript Implementation:
class Node {
  constructor() {
    this.children = {};
    this.isTerminal = false;
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  insert(word, root=this.root) {
    let letter = word[0];

    if (!(letter in root.children)) {
      root.children[letter] = new Node();
    }

    if (word.length === 1) {
      root.children[letter].isTerminal = true;
    } else {
      this.insert(word.slice(1), root.children[letter]);
    }
  }

  search(word, root=this.root) {
    if (word.length === 0) {
      if (root.isTerminal) {
        return true;
      } else {
        return false;
      }
    }

    let letter = word[0];
    if (letter in root.children) {
      return this.search(word.slice(1), root.chidren[letter]);
    } else {
      return false;
    }
  }
}