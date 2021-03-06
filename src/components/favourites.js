import React from 'react';
import PropTypes from 'prop-types';
import Header from './header'
class Favourites extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            presentStatus: this.props.favourites,
        };
    }

    // removeFav(j) {
    //     let id = j.target.id;
    //     this.state.presentStatus[id] = 0
    //     this.forceUpdate()
    // }
    componentDidMount() {
        fetch("https://api.punkapi.com/v2/beers/")
        .then(res => res.json())
        .then((result) => {
            this.setState({
                isLoaded: true,
                items: result
            });
        }, (error) => {
            this.setState({
                isLoaded: true,
                error
            });
        })
    }

    render () {
        console.log(this.state.presentStatus);
        const {error, isLoaded, items} = this.state;
        let arr = [];
        for (var i = 0; i < items.length; i++) {
            if(this.state.presentStatus[i] === 1){
                arr.push(
                    <div class="col-md-4">
                      <div class="thumbnail custom-div">
                          <img class="image" src={items[i].image_url} />
                          <div>
                              <a><span id={i} class="btn-lg glyphicon glyphicon-star"></span></a>
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
        if (error) {
            return <div>Error: {error.message}</div>;
        }
        else if (!isLoaded) {
            return <center><p>Loading...._ </p></center>;
        }
        else {
            return(
                <center class='row'>
                    <Header/>
                    {arr}
                </center>
            )
        }
    }
}

export default Favourites;
