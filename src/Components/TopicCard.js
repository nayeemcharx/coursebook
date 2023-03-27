import React from 'react'

const TopicCard = ({topicTitile, topicDescription, Image}) => {
  return (
    <div className='topic-card'>
        <div className='topic-title'>topicTitile</div>
        <div className='topic-description'>topicDescription</div>
        <div className='topic-image'>Image</div>
    </div>
  )
}

TopicCard.defaultProps = {
    topicTitile: 'Topic Title',
    topicDescription: 'Topic Description',
    Image: 'Image'
}

export default TopicCard