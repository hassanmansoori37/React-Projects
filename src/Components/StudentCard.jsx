import PlayGround from "./PlayGround";

function StudentCard () {
    const dataBase = [
{
name: "Hassan",
roll: "409",
batch: "Web & App",
favLang: "JavaScript",
},
{
name: "Ahmed Raza",
roll: "320", 
batch: "Web & App",
favLang: "Python",
},
{
name: "Mudassir",
roll: "321",
batch: "AI",
favLang: "Java",
},
{
name: "Umar",
roll: "108",
batch: "Cyber Security",
favLang: "MongoDB",
},
];
    return (
        <>
        <section className="flex justify-around items-center">
        {dataBase.map((items , index) => (
            <PlayGround key={index} name={items.name} rollNo={items.roll} batch={items.batch} 
            favLang={items.favLang}/>
        ))}
        </section>
        </>
    )
}
export default StudentCard ;