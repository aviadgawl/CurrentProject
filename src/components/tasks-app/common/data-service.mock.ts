import { UserData } from "./entities";
import { Task } from "./entities";

export default class DataService {
    private dataUrl: string

    constructor(url: string) {
    }

    public getUserInfo = function (facebookId: string, cb: (userData: UserData, status: string) => void) {

        cb(new UserData("aviad shua", "www.g.com", "123456"), "ok");

    }

    public saveUser = function (userData: UserData, cb: (status: string) => void) {

        cb("ok");

    }

    public getUserTasks = function (facebookId: string, cb: (tasks: Task[], status: string) => void) {

        let tasks: Task[];
        tasks.push(new Task());
        tasks.push();

        cb(tasks, "ok")

    }

    public saveTask = function (taskData: Task, cb: (status:string) => void) {
        cb("ok");
    }

}