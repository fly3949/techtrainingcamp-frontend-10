import React from 'react'
import './index.scss'
import Player from '../Player'
import { IVideo } from '../../types/video'

interface IProps {
  video: IVideo;
}

interface IState {
}

class Video extends React.Component<IProps, IState> {
  render () {
    const { url } = this.props.video

    return (
      <div className='video'>
        <Player url={url} />
      </div>
    )
  }
}

export default Video
