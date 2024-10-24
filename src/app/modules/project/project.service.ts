import { TProject } from "./project.interface";
import { projectModel } from "./project.model";


const addProject = async (payload : TProject) => {
    const result = projectModel.create(payload)

    return result
}

export const projectService = {
    addProject
}