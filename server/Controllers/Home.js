const Home = {
  index: (req, res)=> {
      res.render("home", {title: "Home"})
    },

}

module.exports = Home