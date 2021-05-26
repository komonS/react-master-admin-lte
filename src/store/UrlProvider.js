import React, { createContext, useReducer } from "react"
export const UrlContext = createContext({})


const initialState = {
    url:"http://10.20.30.27:3000/",
    ldap:"http://sciintra/sci-api/ldap/api/",
    host:"http://10.20.30.27/meeting-back-end-master/",
    url_pm:"http://10.20.30.27:3005/",
    host_pm:"http://10.20.31.27:8181/ProjectManagement/",
    flow:"http://localhost/workflow/api/"
}



const urlReducer = (state, action) => {
    switch (action.type) {
        case "GET_URL":
            return {
                ...state, // copy state 
                url: action.payload // set state counter
            }
    }
}

export const UrlProvider = ({ children }) => {
    const [urlState, urlDispatch] = useReducer(
        urlReducer,
        initialState
    )

    const {url,ldap,host,url_pm,host_pm,flow} = urlState

    const getUrl = payload =>
        urlDispatch({ type: "GET_URL", payload }) // ส่ง type ADD_COUNTER และ payload เพื่อให้ conterReducer ไปใช้งานต่อ
    return (
        <UrlContext.Provider value={{ url, getUrl,ldap,host,url_pm,host_pm,flow }}>
            {children}
        </UrlContext.Provider>
    )
}