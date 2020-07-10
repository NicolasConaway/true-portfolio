import React from 'react';
import './styles.css';


class Model extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            postItem: null
        }
    }

    setPostStateOnProps() {
        const { post } = this.props
        this.setState({
            postItem: post
        })
    }

    componentDidMount() {
        this.setPostStateOnProps()
    }

    state = {
        isThumbnailClicked: false
    }

    render() {

        const thumbnailClicked = this.state.isThumbnailClicked;
        const { postItem } = this.state

        return (
            <>
                {postItem !== null ?
                    <div>
                        <div className="card__container">
                            <div
                                className="thumbnail__container"
                                onClick={() => this.setState({ isThumbnailClicked: true })}>

                                {thumbnailClicked ?

                                    <div className="model__container">

                                        <a href={postItem.siteLink}
                                            target="_blank"
                                            rel="noopener noreferrer" >
                                            <div className="modelRight">
                                                <p>Site</p>
                                            </div>
                                        </a>

                                        <a href={postItem.githubLink}
                                            target="_blank"
                                            rel="noopener noreferrer" >
                                            <div className="modelLeft">
                                                <p>Github</p>
                                            </div>
                                        </a>

                                    </div>

                                    : <img className="thumbnail" src={postItem.thumbnail} alt={postItem.name} />}

                            </div>

                            <div
                                onClick={() => this.setState({ isThumbnailClicked: false })}
                                className={thumbnailClicked ? "exit" : "noExit"}>

                                <div className="rightX" />
                                <div className="leftX" />
                            </div>

                        </div>
                        <p className="thumbnailName">{postItem.name}</p>
                    </div>

                    : ''}
            </>
        )

    }

}

export default Model;