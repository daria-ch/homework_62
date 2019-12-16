import React, {Component, Fragment} from 'react';
import mainPic from '../../Assets/main-pic.jpg';


class MainPic extends Component {

    galleryHandler = () => {
        this.props.history.push('/gallery')
    };

    render() {
        const buttonStyle = {
            position: 'absolute',
            top: '10%', right: '10%',
            background: 'transparent',
            border: '2px solid #fff',
            borderRadius: '10px',
            padding: '10px 20px',
            color: '#fff',
            fontWeight: 'bold'
        };

        return (
            <Fragment>
                <div style={{position: 'relative'}}>
                    <img src={mainPic} alt=""
                         style={{width: '100%', height: '100%'}}/>
                    <button style={buttonStyle} onClick={this.galleryHandler}>GALLERY</button>
                </div>
            </Fragment>
        );
    }
}

export default MainPic;