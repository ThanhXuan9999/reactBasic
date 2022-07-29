import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from './AddComponent'

class MyComponent extends React.Component {

    state = {
        jobList: [
            { id: 'job1', job: 'NodeJS', salary: 5000 },
            { id: 'job2', job: 'ReactJS', salary: 10000 },
            { id: 'job3', job: 'FullStack', salary: 15000 },

        ]
    }


    handleSubmit = (props) => {

        this.setState({
            jobList: [...this.state.jobList, props]
        })
    }

    handleDeleteElement = (item) => {
        let jobList = this.state.jobList
        let currentJobList = jobList.filter(element => element.id !== item.id)

        this.setState({
            jobList: currentJobList,
        })
    }


    render() {
        return (
            <>
                <AddComponent
                    addNewJob={this.handleSubmit}
                />

                <ChildComponent
                    jobList={this.state.jobList}
                    handleDeleteElement={this.handleDeleteElement}
                />
            </>
        )

    }
}

export default MyComponent