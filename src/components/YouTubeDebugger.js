import React from 'react';


class YoutubeDebugger extends React.Component {

    constructor() {
        super();
        this.state = {
            errors: [],
            user: null,
            settings: {
                bitrate: 8,
                video: {
                    resolution: '1080p'
                }
            }
        }
    }

    clickHandler = (e) => {
        if (e.target.matches('.bitrate')) {
            this.setState({
                settings: {
                    bitrate: 12
                }
                // settings.bitrate: 12
            })
        } if (e.target.matches('.resolution')) {
            this.setState({
                settings: {
                    video: {
                        resolution: '720p'
                    }
                }
            })
        }
    }

    render() {
        return (
            <div>
                <button className="bitrate" onClick={this.clickHandler}>{this.state.settings.bitrate}</button>
                <button className="resolution" onClick={this.clickHandler}>{this.state.settings.video.resolution}</button>
            </div>
        )
    }
}

export default YoutubeDebugger;