import React from 'react'

const TopicCard = ({topicTitile, diffcult, Image}) => {
  return (
    <div className="ag-courses_item">
      <a href="#" className="ag-courses-item_link">
        <div className="ag-courses-item_bg"></div>

        <div className="Topic-Title">
          {topicTitile}
        </div>

        <div className="Topic-Diff-Box">
          Difficulties:
          <span className="Topic-diff-Value">
            {diffcult}
          </span>
        </div>
      </a>
    </div>
  )
}

TopicCard.defaultProps = {
    topicTitile: 'Topic Title',
    diffcult: 'Topic Diffculty',
    Image: 'Image'
}

export default TopicCard