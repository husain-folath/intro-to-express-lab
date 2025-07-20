const express=require('express')
const app =express()
// const 
const collectibles = [
  { name: 'shiny ball', price: 5.95 },
  { name: 'autographed picture of a dog', price: 10 },
  { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
];
const shoes = [
    { name: "Birkenstocks", price: 50, type: "sandal" },
    { name: "Air Jordans", price: 500, type: "sneaker" },
    { name: "Air Mahomeses", price: 501, type: "sneaker" },
    { name: "Utility Boots", price: 20, type: "boot" },
    { name: "Velcro Sandals", price: 15, type: "sandal" },
    { name: "Jet Boots", price: 1000, type: "boot" },
    { name: "Fifty-Inch Heels", price: 175, type: "heel" }
];

app.get('/greetings/:userName',(req,res)=>
{
    res.send(`Hello there, ${req.params.userName}!`)
})

app.get('/roll/:rollnumber',(req,res)=>
{
    let number=Number(req.params.rollnumber)
    if(number===number)
    {
        let rolledNumber= Math.floor(Math.random()*number)
        res.send(`You rolled a ${rolledNumber}!`)
    }
    else{
        res.send(`You must specify a number.`)
    }
})

app.get('/collectibles/:collectibleIndex',(req,res)=>
{
    let index= Number(req.params.collectibleIndex)
    if(index===index)
    {
        if(index<collectibles.length)
        {
        res.send(`So, you want the ${collectibles[index].name}? For ${collectibles[index].price}, it can be yours!`)
        }
        else
        {
            res.send(`This item is not yet in stock. Check back soon!`)
        }
    }else
    {
        res.send(`please provide a real ID.`)
    }
})

app.get('/shoes',(req,res)=>{
    let list=``
    let newShoesList = structuredClone(shoes)
    console.log(shoes)
    console.log(newShoesList)
    if(req.query.minPrice)
    {
        newShoesList= newShoesList.filter(shoe =>shoe.price>=req.query.minPrice)
    }
    if(req.query.maxPrice)
    {
        newShoesList= newShoesList.filter(shoe =>shoe.price<=req.query.maxPrice)
    }
    if(req.query.type)
    {
        newShoesList= newShoesList.filter(shoe =>shoe.type===req.query.type)
    }

    // for(let i=0;i<newShoesList.length;i++)
    // {
    //     list+=`${newShoesList[i].name} ${newShoesList[i].price} ${newShoesList[i].name}`
    // }
    res.send(newShoesList)
})
app.listen(3000,()=>
{
    console.log("Working...")
})