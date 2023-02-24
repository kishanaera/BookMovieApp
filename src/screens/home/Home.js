import React, {Component} from "react";

class Home extends Component {
    constructor() {
        super();
        this.state = {
            subscriberList: []
        }
    }
    addSubcriber = (newSubscriber) => {
        let subscriberList = this.state.subscriberList;
        if(subscriberList.length > 0) {
            newSubscriber.id = subscriberList[subscriberList.length -1].id + 1;
        }
        else {
            newSubscriber.id = 1;
        }
        subscriberList.push(newSubscriber);
        this.setState({subscriberList: subscriberList});
        console.log(this.state.subscriberList);
    }
    render() {
        return(
            <AddSubscribers addSubcriberHandler={this.addSubcriberHandler} />
        )
    }
}
export default Home;