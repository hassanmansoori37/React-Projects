import PlayGround from "./PlayGround";

function StudentCard () {
    const dataBase = [
{
name: "Ali",
roll: "101",
batch: "Web & App",
favLang: "JavaScript",
},
{
name: "Zain",
roll: "102",
batch: "Web & App",
favLang: "Python",
},
{
name: "Sara",
roll: "103",
batch: "AI",
favLang: "Java",
},
{
name: "Ahmed",
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