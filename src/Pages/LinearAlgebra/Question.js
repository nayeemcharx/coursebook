import NavigationBar from "../../Components/NavigationBar"
import QuestionList from "../../Components/QuestionList"

const Question = () => { 
  const item = [
    {
      title: "25th batch final",
      description: false,
      link: "https://drive.google.com/file/d/1VOFgs1V9C_Ja-CXHdM5FcxVizgvSw24c/preview"
    },
    {
      title: "25th batch incourse",
      description: false,
      link: "https://drive.google.com/file/d/1zbj3pOw-ndmDlKcP_ObsuHf5TnLvH3Xz/preview"
    },
    {
      title: "24th batch final",
      description: false,
      link: "https://drive.google.com/file/d/1Uw6nXHMCawv922kMvjbNy7GvGw4OeoiG/preview"
    },
    {
      title: "24th batch incourse",
      description: false,
      link: "https://drive.google.com/file/d/1_vBCWSz_nDaukZXZCpcoTXYj6iehRlLe/preview"
    },
    {
      title: "23th batch final",
      description: false,
      link: "https://drive.google.com/file/d/1KiAACD-eU9-YasjWcqgrr9tb2MnwyIxD/preview"
    },
    {
      title: "23th batch incourse",
      description: false,
      link: "https://drive.google.com/file/d/1zsYeqCDTWaD5Ar71K9EQ9_eCPnxx5_lu/preview"
    }
  ]
  return (
    <div className="Linear-Algebra">
       <NavigationBar className="NavBar" 
        algoPath='/LinearAlgebra'
        quizPath='/LinearAlgebra/Quiz'
        questionPath='/LinearAlgebra/Question'
        />
        <QuestionList items={item}/>
    </div>
  )
}

export default Question

