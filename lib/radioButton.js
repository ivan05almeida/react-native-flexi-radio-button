import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback
} from 'react-native';

export default class RadioButton extends Component{
    constructor(props, context){
        super(props, context)
    }

    componentWillReceiveProps(nextProps){
		this.setState({
			selectedIndex: nextProps.selectedIndex
		})
	}

    getRadioStyle(){
        return {
          height: this.context.size,
	        width: this.context.size,
          backgroundColor: '#fff',
	        borderRadius: this.context.size / 2,
        }
    }

    getRadioDotStyle(){
        return {
            height: this.context.size / 2,
            width: this.context.size / 2,
            borderRadius: this.context.size / 4,
            backgroundColor: this.props.color || this.props.activeColor,
        }
    }

    isSelected(){
        if(this.props.isSelected)
            return <View style={this.getRadioDotStyle()}/>
    }
    render(){
        var {children} = this.props
        return(
            <View style={{opacity: this.props.disabled?0.4:1, flex:1}}>
                <TouchableWithoutFeedback
                    disabled={this.props.disabled}
                    onPress={() => this.context.onSelect(this.props.index, this.props.value)}
                >
                    <View style={[styles.container, this.props.style]}>
                        <View style={[styles.radio, this.getRadioStyle()]}>
                            {this.isSelected()}
                        </View>
                        <View style={styles.item}>
                            {children}
                        </View>
                    </View>
            </TouchableWithoutFeedback>
          </View>
        )
    }
}

RadioButton.contextTypes = {
        onSelect: PropTypes.func.isRequired,
        size: PropTypes.number.isRequired,
        thickness: PropTypes.number.isRequired,
        color: PropTypes.string.isRequired,
        highlightColor: PropTypes.string
    }

let styles = StyleSheet.create({
  container:{
	  flexGrow: 1,
	  flexDirection: 'row',
    alignItems: 'center',
	  padding: 10,
  },
  radio:{
	  alignItems: 'center',
	  justifyContent: 'center',
  },
  item: {
    flex:1,
    flexDirection: 'row',
    marginLeft: 5,
    alignItems: 'flex-start',
	  justifyContent: 'center',
  }
})
