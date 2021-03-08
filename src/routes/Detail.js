import React from 'react';

class Detail extends React.Component {
    componentDidMount(){
        const { location, history } = this.props;
        if( location.state === undefined) {
            history.push('/')
        }
    }
    render(){
        const { location } = this.props;
        if(location.state) {
            return (
                <>
                <img src={location.state.poster} alt={location.state.title} title={location.state.title} />
                <p>title : { location.state.title }</p>
                <p>summary : { location.state.summary }</p>
                <p>year : { location.state.year }</p>
                <p>genres : { location.state.genres }</p>
                </>
            )
        } else {
            return null;
        }
    }
}

export default Detail;