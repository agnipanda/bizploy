import React from 'react'
import PropTypes from 'prop-types'

class Favourites extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            items: this.props.items,
            presentStatus: this.props.presentStatus,
        };
    }

    toggleFav(j) {
        let id = j.target.id;
        this.state.presentStatus[id] = 0
        this.forceUpdate()
    }

    render () {
        const {items,presentStatus} = this.state;
        let arr = []
        let temp = []
        for (var i = 0; i < items.length; i++) {
            if(this.state.presentStatus[i] == 1){
                arr.push(
                    <div class="col-md-4">
                      <div class="thumbnail custom-div">
                          <img class="image" src={items[i].image_url} />
                          <div>
                              <a onClick={this.removeFav.bind(this)} href="#"><span id={i} class="btn-lg glyphicon glyphicon-star"></span></a>
                              <ul>
                                  <li><b>{items[i].name}</b></li><br/>
                                  <li>{items[i].description}</li>
                              </ul>
                          </div>
                      </div>
                    </div>
                )
            }
        }
        return(
            {arr}
        )
    }
}

export default Favourites;
