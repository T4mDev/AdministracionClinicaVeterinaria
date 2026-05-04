const register = (req, res) => {
    res.send('Desde API/veterinarios');
};

const login = (req, res) => {
    res.send('Desde API/veterinarios/login');
};

const profile = (req, res) => {
    res.send('Desde API/veterinarios/profile');
};

export {
    register,
    login,
    profile
};