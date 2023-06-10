const awesomeFunction = (req,res,next)=>{
    res.json('LUIS ROJAS HERNANDEZ');
};

const returnAnotherPerson = (req,res,next)=>{
    res.json('Super awesome person');
};
const Valentina = (req,res,next)=>{
    res.json('Hola Soy Valentina');
};

module.exports = {awesomeFunction,returnAnotherPerson,Valentina};