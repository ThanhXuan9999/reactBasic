import React from "react";

class ChildComponent extends React.Component {

    state = {
        showJob: false,
    }

    handleShowHide = () => {
        this.setState({
            showJob: !this.state.showJob
        })
    }

    handleClickDelete(item) {
        this.props.handleDeleteElement(item)
    }

    render() {

        let jobList = this.props.jobList
        let { showJob } = this.state
        // let check = showJob === true ? 'showJob = true' : 'showJob = false'

        return (
            <>
                {/* xét đk trc dấu && nếu true thì thực hiện sau dấu && */}
                {/* sau dấu && phải để trong block Fragment */}

                {showJob === false ?
                    <div>
                        <button onClick={() => this.handleShowHide()}>Show</button>
                    </div>

                    :

                    <>
                        <div>
                            {jobList.map((item, index) => {
                                return (
                                    <div key={item.id}>
                                        {item.job} - {item.salary}  <></> <span onClick={() => this.handleClickDelete(item)}>[x]</span>
                                    </div>
                                )
                            })}
                        </div>
                        <div>
                            <button onClick={() => this.handleShowHide()}>Hide</button>
                        </div>
                    </>
                }
            </>
        )

    }
}

// const ChildComponent = (props) => {
//     let { jobList } = props

//     return (
//         <>
//             <div>
//                 {jobList.map((item, index) => {
//                     return (
//                         <div key={item.id}>
//                             {item.name} - {item.salary}
//                         </div>
//                     )
//                 })}
//             </div>
//         </>
//     )
// }

export default ChildComponent