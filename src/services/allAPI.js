
import commonAPI from "./commonAPI";
import serverURL from "./serverURL";
// saveVideoAPI - post method to "http://localhost:3000/uploadvideos" called by add component

export const saveVideo = async (videoDetails) => {
    return await commonAPI("POST", `${serverURL}/uploadVideo`, videoDetails)


}
// getVideoAPI - GET method to "http://localhost:3000/uploadvideos" called by view component

export const getAllVideoAPI = async () => {
    return await commonAPI("GET", `${serverURL}/uploadVideo`, "")


}
// savehistoryAPI - post method to "http://localhost:3000/history" called by videocard component

export const saveHistoryAPI = async (historyDetails) => {
    return await commonAPI("POST", `${serverURL}/history`, historyDetails)


}
// gethistoryAPI - GET method to "http://localhost:3000/uploadvideos" called by history component

export const getAllHistoryAPI = async () => {
    return await commonAPI("GET",`${serverURL}/history`)
}
// delethistoryAPI - delete method to "http://localhost:3000/historyvideos" called by history component when clicked on delete button

export const deleteHistoryAPI = async (id) => {
    return await commonAPI("DELETE", `${serverURL}/history/${id}`,{} )
}
// removevideoAPI - delete method to "http://localhost:3000/uploadvideos" called by video component when clicked on delete button

export const removevideoAPI = async (id) => {
    return await commonAPI("DELETE", `${serverURL}/uploadVideo/${id}`,{} )
}
// savecategoriesAPI - post method to "http://localhost:3000/historycategories" called by categories component when clicked on add button

export const saveCategoriesAPI = async (categoryDetails) => {
    return await commonAPI("POST", `${serverURL}/categories`, categoryDetails)


}

// getcategoriesAPI - GET method to "http://localhost:3000/categories" called by catogory component when component loaded

export const getAllCategoryAPI = async () => {
    return await commonAPI("GET",`${serverURL}/categories`,"")

}
// deletecategoriesAPI - delete method to "http://localhost:3000/category" called by category component when clicked on delete button

export const deleteCategoryAPI = async (id) => {
    return await commonAPI("DELETE", `${serverURL}/categories/${id}`,{} )
}

// updatecategoriesAPI - put method to "http://localhost:3000/category" called by category component when video drop over the category

export const updateCategoryAPI = async (categoryDetails) => {
    return await commonAPI("PUT", `${serverURL}/categories/${categoryDetails.id}`,categoryDetails )
} 
