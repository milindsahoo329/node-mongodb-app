exports.allAccess = (req, res) => {
    res.status(200).send("None of the roles restricted");
};

exports.userBoard = (req, res) => {
    res.status(200).send("User Board !!!");
};

exports.adminBoard = (req, res) => {
    res.status(200).send("Admin Board !!!");
};