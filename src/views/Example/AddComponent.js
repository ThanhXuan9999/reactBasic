import React from "react";

class AddComponent extends React.Component {

    state = {
        job: '',
        salary: ''
    }

    handleChangeJobs = (event) => {
        this.setState({
            job: event.target.value,
        })
    }

    handleChangeSalary = (event) => {
        this.setState({
            salary: event.target.value,
        })
    }

    handleSubmit = (event) => {

        // .preventDefault() -> ngăn load lại trang
        event.preventDefault()

        if (!this.state.job || !this.state.salary) {
            alert('Hãy nhập đầy đủ thông tin!')
        } else {
            this.props.addNewJob({
                id: Math.floor(Math.random() * 1001),
                job: this.state.job,
                salary: this.state.salary,
            })
        }

        // reset gtri trong input 
        this.setState({
            job: '',
            salary: '',
        })
    }

    render() {
        return (
            <>
                <form action="/action_page.php">
                    <label htmlFor="fname">Job's:</label><br />
                    <input
                        type="text"
                        value={this.state.job}
                        onChange={(event) => this.handleChangeJobs(event)}
                    />
                    <br />
                    <label htmlFor="lname">Salary:</label><br />
                    <input
                        type="text"
                        value={this.state.salary}
                        onChange={(event) => this.handleChangeSalary(event)}
                    />
                    <br />
                    <br />
                    <input
                        type="submit"
                        onClick={(event) => this.handleSubmit(event)}
                    />
                </form>
            </>
        )
    }
}

export default AddComponent