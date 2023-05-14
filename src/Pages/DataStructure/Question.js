import NavigationBar from "../../Components/NavigationBar"
import QuestionList from "../../Components/QuestionList"
const Question = () => { 
  const item = [
    {
      title: "25th batch final",
      description: false,
      link: "https://drive.google.com/file/d/1SzaCZJxVb06Er7bhjq6VnYNbqnUAiGy9/preview"
    },
    {
      title: "25th batch incourse",
      description: false,
      link: "https://drive.google.com/file/d/1OjH9eMxsoOrZZBaUAXemddAbkcuv0kYi/preview"
    },
    {
      title: "24th batch final",
      description: false,
      link: "https://drive.google.com/file/d/1PgUKrvNM-lAkMDTC-bPn5JMT8ug5-9_b/preview"
    },
    {
      title: "24th batch incourse",
      description: false,
      link: "https://drive.google.com/file/d/1Okh6stllUP_Pc2-zmPpK7KRIc6-3lTIT/preview"
    },
    {
      title: "23th batch final",
      description: false,
      link: "https://drive.google.com/file/d/1u4UUBwVyj8lcvxqjG1woWYwM8-T6koD0/preview"
    },
    {
      title: "23th batch incourse",
      description: false,
      link: "https://drive.google.com/file/d/1nMwprg7acwRGOZqnpQSyz_yc9ypR8pQV/preview"
    }
  ]
  return (
    <div className="Linear-Algebra">
        <NavigationBar className="NavBar"
        algoPath='/DataStructure'
        quizPath='/DataStructure/Quiz'
        questionPath='/DataStructure/Question'
        />
        <QuestionList items={item}/>
    </div>
  )
}

export default Question

