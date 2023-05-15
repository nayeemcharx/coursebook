import NavigationBar from "../../Components/NavigationBar"
import AlgorithmList from "../../Components/AlgorithmList"

const DataStructure = () => {
  const item = [
    {
      title: "Stack",
      description: "Stack",
      link: "https://www.desmos.com/calculator/4qjxqjzq2j"
    },
    {
      title: "Queue",
      description: "Queue",
      link: "https://www.desmos.com/calculator/4qjxqjzq2j"
    },
    {
      title: "Linked List",
      description: "Linked List",
      link: "https://www.desmos.com/calculator/4qjxqjzq2j"
    },
    {
      title: "Tree",
      description: "Tree",
      link: "https://www.desmos.com/calculator/4qjxqjzq2j"
    },
    {
      title: "Graph",
      description: "Graph",
      link: "https://www.desmos.com/calculator/4qjxqjzq2j"
    },
    {
      title: "Hash Table",
      description: "Hash Table",
      link: "https://www.desmos.com/calculator/4qjxqjzq2j"
    },
    {
      title: "Heap",
      description: "Heap",
      link: "https://www.desmos.com/calculator/4qjxqjzq2j"
    },
    {
      title: "Trie",
      description: "Trie",
      link: "https://www.desmos.com/calculator/4qjxqjzq2j"
    },
    {
      title: "B-Tree",
      description: "B-Tree",
      link: "https://www.desmos.com/calculator/4qjxqjzq2j"
    },
    {
      title: "B+ Tree",
      description: "B+ Tree",
      link: "https://www.desmos.com/calculator/4qjxqjzq2j"
    },
    {
      title: "Red-Black Tree",
      description: "Red-Black Tree",
      link: "https://www.desmos.com/calculator/4qjxqjzq2j"
    },
    {
      title: "AVL Tree",
      description: "AVL Tree",
      link: "https://www.desmos.com/calculator/4qjxqjzq2j"
    },
    {
      title: "Splay Tree",
      description: "Splay Tree",
      link: "https://www.desmos.com/calculator/4qjxqjzq2j"
    },
    {
      title: "Segment Tree",
      description: "Segment Tree",
      link: "https://www.desmos.com/calculator/4qjxqjzq2j"
    },
    {
      title: "Fenwick Tree",
      description: "Fenwick Tree",
      link: "https://www.visualgo.net/en/fenwicktree"
    },
    {
      title: "Disjoint Set",
      description: "Disjoint Set",
      link: "https://www.desmos.com/calculator/4qjxqjzq2j"
    },
    {
      title: "Sparse Table",
      description: "Sparse Table",
      link: "https://www.desmos.com/calculator/4qjxqjzq2j"
    }]

  return (
    <div className="Datastructure">
        <NavigationBar className="NavBar"
        algoPath='/DataStructure'
        quizPath='/DataStructure/Quiz'
        questionPath='/DataStructure/Question'
        />
        <AlgorithmList items={item}/>
    </div>
  )
}

export default DataStructure