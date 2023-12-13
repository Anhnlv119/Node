import {userService, getUserList, deleteUser, createNewUser, getUser, updateUser} from '../service/userService'

const handleHome = async (req, res) =>{
    let userList = await getUserList();
    return (res.render("user.ejs", {userList}))
}

const handleCreatNewUser = async (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    let username = req.body.username;

    await createNewUser(email, password, username)

    
    return res.redirect("/user")
}

const handelDeleteUser = async (req, res) => {
    await deleteUser(req.params.id)
    return res.redirect("/user")
}

const handleGetUser = async (req, res) => {
    let user = await getUser(req.params.id)
    let userData = {};
    if (user && user.length > 0 ){
        userData = user[0];
    }

    return res.render("updateUser.ejs", {userData})
}

const handelUpdateUser = async (req, res) => {
    let id = req.body.id;
    let email = req.body.email;
    let username = req.body.username;
    console.log("req", req.body)
    await updateUser(email, username, id)
    return res.redirect("/user")
}


export {handleHome, handleCreatNewUser, handelDeleteUser, handleGetUser, handelUpdateUser}