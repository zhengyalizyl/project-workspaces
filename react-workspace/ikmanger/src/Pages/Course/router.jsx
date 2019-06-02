import React, { Component } from 'react'
import { BrowserRouter, Link,Route,Switch ,Redirect} from "react-router-dom";
import CourseAdd from "./CourseAdd";
import CourseCateory from "./CourseCateory";
import CourseList from "./CourseList";
import CourseTopic from "./CourseTopic";
 class CourseRouter extends Component {
    render() {
        console.log(this.props)
        return (
            <Switch>
                <Route path="/course/cateory" component={CourseCateory}></Route>
                <Route path="/course/topic" component={CourseTopic}></Route>
                <Route path="/course/list" component={CourseList}></Route>
                <Route path="/course/add" component={CourseAdd}></Route>
                <Redirect exact from="/course" to="/course/list"></Redirect>
            </Switch>
        )
    }
}
export default CourseRouter;