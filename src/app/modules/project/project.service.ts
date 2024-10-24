import { TProject } from "./project.interface";
import { projectModel } from "./project.model";


const addProject = async (payload : TProject) => {
    const result = projectModel.create(payload)

    return result
}

const getAllProject = async () => {
    const result = await projectModel.find()
    return result
}

const getUpdatedProjectFromDB = async (id: string, payload: Partial<TProject>) => {
    console.log(id)
    try {
        const updatedProject = await projectModel.findOneAndUpdate({ _id: id }, payload, { new: true })
        console.log(updatedProject)
        return updatedProject
    } catch (error) {
        console.log(error)
    }
}

const deletedFromDB = async (id: string) => {
    const result = await projectModel.deleteOne({ _id: id })
    return result
}


export const projectService = {
    addProject,
    getAllProject,
    getUpdatedProjectFromDB,
    deletedFromDB
}