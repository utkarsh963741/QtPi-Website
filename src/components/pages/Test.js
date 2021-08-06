import React from 'react'
import '../../App.css'
import VideoPlayer from '../home-components/VideoPlayer'

export default function Test()
{
    return (
        <div className="test">
            <h1>Test</h1>
            <VideoPlayer sizeX="600px" sizeY="520px">
                hello
            </VideoPlayer>
        </div>
    )
}