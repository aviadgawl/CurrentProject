import * as $ from "jquery";
import { UserData } from "./entities";
import { Task } from "./entities";

export default class DataService {
    private dataUrl: string

    constructor(url: string) {
        this.dataUrl = url;
    }

    public getUserInfo = function (facebookId: string, cb: any) {

        $.get(`${this.dataUrl}/users/${facebookId}`, (data, status) => {

            if (data) {

                let parsedData = JSON.parse(data);

                if (parsedData != null) cb(JSON.parse(data), "ok");
                else cb(null, "user not found");
            }
            else cb(null, "error getting the user from the server");

        });
    }

    public saveUser = function (userData: UserData, cb: any) {

        $.ajax({
            type: "POST",
            url: `${this.dataUrl}/users/save`,
            data: JSON.stringify(userData),
            success: cb,
            contentType: "application/json",
            dataType: "json"
        });
    }

    public getUserTasks = function (facebookId: string, cb: any) {
        $.get(`${this.dataUrl}/tasks/${facebookId}`, (data, status) => {
            if (data) cb(JSON.parse(data), "ok");
            else cb(null, "error getting the tasks from the server")
        });
    }

    public saveTask = function (taskData: Task , cb:any) {
        debugger
        $.ajax({
            type: "POST",
            url: `${this.dataUrl}/tasks/save`,
            data: JSON.stringify(taskData),
            success: cb,
            contentType: "application/json",
            dataType: "json"
        });
    }

}