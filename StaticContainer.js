import React, { Component, Children, PropTypes } from 'react';

export default class extends Component {

    static propTypes = {
        shouldUpdate: PropTypes.bool.isRequired
    };

    static defaultProps ={
        shouldUpdate:false
    };


    shouldComponentUpdate(nextProps) {
        return nextProps.shouldUpdate;
    }

    render() {
        const child = this.props.children;
        return (child === null || child === false) ? null : Children.only(child);
    }

}
