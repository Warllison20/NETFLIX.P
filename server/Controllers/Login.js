const controllerLogin = {
    index: (req, res)=> {
        res.render("login", {title: "Login"})
      },

}

module.exports = controllerLogin