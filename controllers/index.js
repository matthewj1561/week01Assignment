displayName = (req, res) => {
    const data = 'Tarin Wardwell';
    res.status(200).send(data);
};

module.exports = {
    displayName,
};
