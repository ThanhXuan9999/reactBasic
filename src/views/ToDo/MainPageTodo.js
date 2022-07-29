import React from "react";
import './main.scss'
import AddTodo from "./AddTodo";
import { toast } from 'react-toastify';

// tên class phải viết hoa ko sẽ lỗi
class MainPageTodo extends React.Component {

    state = {
        title: [
            { id: 2344, name: 'xuan' },
            { id: 6533, name: 'khanh duy' }
        ],
        editTodo: {}
    }

    pushData = (data) => {
        this.setState({
            title: [...this.state.title, data]
        })
    }

    handleDeleteTodo = (item) => {
        let getTodo = this.state.title
        let currentTodo = getTodo.filter((element) => item.id !== element.id)

        this.setState({
            title: currentTodo
        })

        toast.success(`Delete Todo Success`)

    }

    handleEditTodo = (item) => {
        let { title, editTodo } = this.state
        let isEmptyObj = Object.keys(editTodo).length === 0

        if (isEmptyObj === false && editTodo.id === item.id) {
            let titleCopy = [...title]
            let indexOf = titleCopy.findIndex(item => item.id === editTodo.id)

            titleCopy[indexOf].name = editTodo.name

            this.setState({
                title: titleCopy,
                editTodo: {}
            })

            toast.success(`Edit Todo Success`)

            return
        }

        this.setState({
            editTodo: item
        })
    }

    handleOnChangeEditTodo = (event) => {
        let editTodoCopy = this.state.editTodo
        editTodoCopy.name = event.target.value

        this.setState({
            editTodo: editTodoCopy
        })
    }

    render() {
        let { title, editTodo } = this.state
        let isEmptyObj = Object.keys(editTodo).length === 0
        // console.log('>>> check isEmptyObj: ', isEmptyObj)

        return (
            <>
                <div className="divMain-container">
                    <AddTodo
                        pushData={this.pushData}
                    />

                    <div className="showList-container">
                        {title.map((item) => {
                            return <>
                                <div key={item.id} className="todo-child">
                                    {isEmptyObj === true ?
                                        <span>
                                            (ID) {item.id} - {item.name}
                                            {/* <input value={item.name} /> */}
                                        </span>
                                        :
                                        <>
                                            {item.id === editTodo.id ?
                                                <span>
                                                    (ID) {item.id} - <input
                                                        value={editTodo.name}
                                                        onChange={(event) => this.handleOnChangeEditTodo(event)}
                                                    />
                                                </span>
                                                :
                                                <span>
                                                    (ID) {item.id} - {item.name}
                                                </span>
                                            }
                                        </>

                                    }

                                    <button className="edit" onClick={() => this.handleEditTodo(item)}>
                                        {isEmptyObj === false && item.id === editTodo.id ?
                                            'Save' : 'Edit'
                                        }
                                    </button>
                                    <button className="edit" onClick={() => this.handleDeleteTodo(item)}>
                                        Delete
                                    </button>
                                </div>
                            </>
                        })}
                    </div>
                </div>
            </>
        )
    }

}

export default MainPageTodo