import React, { Component } from "react"

import { getProject } from "../api/projects"

export default class ProjectPage extends Component {
  state = {
    data: null
  }

  componentDidMount() {
    const { id } = this.props.match.params
    getProject(id).then(response => {
      this.setState({ data: response })
    })
  }

  getData = () => {
    return new Promise((resolve, reject) => {
      try {
        resolve()
      } catch (e) {
        reject()
      }
    })
  }

  getData2 = async () => {
    await this.getData()
  }

  render() {
    const { data } = this.state

    return (
      <div>
        {data ? (
          <div>
            <h2>Название проекта: {data.name}</h2>
          </div>
        ) : (
          <span>Загрузка...</span>
        )}
      </div>
    )
  }
}
