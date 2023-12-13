import express from "express"
import { handleHome, handleCreatNewUser, handelDeleteUser, handleGetUser, handelUpdateUser } from "../controller/homeController"

const router = express.Router()

const initWebRoutes = (app) => {
    router.get("/user", handleHome);

    router.post("/user/create-user", handleCreatNewUser)

    router.post("/user/delete-user/:id", handelDeleteUser)
    
    router.post("/user/edit-user/:id", handleGetUser)

    router.post("/user/update-user", handelUpdateUser)
    return app.use("/", router);
}

export default initWebRoutes;