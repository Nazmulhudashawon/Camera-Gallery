const Getquery = async () => {
    const res = await fetch("https://camerabuzz.onrender.com/products");
    const data = await res.json();
    return data;
};

export default Getquery;