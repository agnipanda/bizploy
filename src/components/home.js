import React from 'react'
import PropTypes from 'prop-types'
import Header from './header'
import SearchInput, {createFilter} from 'react-search-input'

const KEYS_TO_FILTERS = ['name','description']

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            presentStatus: this.props.favourites,
            searchTerm: ''
        };
        this.searchUpdated = this.searchUpdated.bind(this)

    }
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
    status = ["btn-lg glyphicon glyphicon-star-empty","btn-lg glyphicon glyphicon-star"];
    flag = 0

    toggleFav(j) {
        let id = j.target.id;

        if(this.state.presentStatus[id] === 0){
            this.state.presentStatus[id] = 1
            this.props.updateFavourites(this.state.presentStatus);
        }
        else {
            this.state.presentStatus[id] = 0
            this.state.favourites = this.state.presentStatus;
            this.props.updateFavourites(this.state.presentStatus);
        }
        this.forceUpdate()
    }

    searchUpdated (term) {
    this.setState({searchTerm: term})
  }

    render() {
        console.log(this.props);
        const {error, isLoaded, items} = this.state;
            let arr = []
            let temp = []
            for (var i = 0; i < items.length; i++) {
                arr.push(
                    <div class="col-md-4">
                      <div class="thumbnail custom-div">
                          <img class="image" src={items[i].image_url} />
                          <div>
                              <a onClick={this.toggleFav.bind(this)} href="#"><span id={i} class={this.status[this.state.presentStatus[i]]}></span></a>
                              <ul>
                                  <li><b>{items[i].name}</b></li><br/>
                                  <li>{items[i].description}</li>
                              </ul>
                          </div>
                      </div>
                    </div>
                )
            }
        const filteredItems = this.state.items.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))

        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <center><p>Loading...._ </p></center>;
        } else {
            return (
                <center class='row'>
                    <Header/>
                        <SearchInput className="search-input" onChange={this.searchUpdated} />
                        <br/>
            {filteredItems.map(items => {
              return (
                  <div class="col-md-4">
                    <div class="thumbnail custom-div">
                        <img class="image" src={items.image_url} />
                        <div>
                            <a onClick={this.toggleFav.bind(this)} href="#"><span id={items.id - 1} class={this.status[this.state.presentStatus[items.id - 1]]}></span></a>
                            <ul>
                                <li><b>{items.name}</b></li><br/>
                                <li>{items.description}</li>
                            </ul>
                        </div>
                    </div>
                  </div>
              )
            })}
            <br/><br/>
                </center>
            );
        }
    }
}

export default Home;
