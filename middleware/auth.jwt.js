const cookieAuth =  async (req, res, next) => {
  const token = req.cookies.token;
  try {
    const myHeaders = new Headers();
    myHeaders.append("x-auth-token", token);
    console.log("Tokenn", token)
    const raw = "";

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    await fetch("http://52.158.43.53:8080/api/auth", requestOptions)
      .then((response) => {
        if (!response.ok) {
          {
            res.clearCookie("token");
            res.clearCookie("card");
            return res.redirect("/");
          }
        }
      })
      .then((result) => {
        if(result.status){
          return next();
        } else {
            res.clearCookie("token");
            res.clearCookie("card");
            return res.redirect("/");
        }
      })
      .catch((error) => console.error(error));

    next();
  } catch (err) {
    await res.clearCookie("token");
    await res.clearCookie("card");
    return res.redirect("/");
  }
};

module.exports = cookieAuth;
