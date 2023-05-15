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
      link: "DataStructure/Tree"
    },
    {
      title: "Graph",
      description: "Graph",
      link: "DataStructure/Graph"
    },
    {
      title: "Hash Table",
      description: "Hash Table",
      link: "DataStructure/HashTable"
    },
    {
      title: "Heap",
      description: "Heap",
      link: "DataStructure/Heap"
    },
    {
      title: "Segment Tree",
      description: "Segment Tree",
      link: "DataStructure/SegmentTree"
    },
    {
      title: "Fenwick Tree",
      description: "Fenwick Tree",
      link: "DataStructure/FenwickTree"
    },
    {
      title: "Disjoint Set",
      description: "Disjoint Set",
      link: "DataStructure/DisjointSet"
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