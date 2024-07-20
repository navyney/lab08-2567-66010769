
import Header from "./../component/header";
import Task from "./../component/task";
import TaskInput from "./../component/taskinput";
import Footer from "./../component/footer";

export default function Home() {
      const task =[
        {word: 1,title:"Read a book",COMP: true},
        {word: 2,title:"Take a shower",COMP: false},
        {word: 3,title:"Sleep",COMP: false},
      ];
    


  return (
    // Main container
    <div className="container mx-auto">
      {/* header section */}
      <Header />
      {/* tasks container */}
      <div style={{ maxWidth: "400px" }} className="mx-auto">
        {/* task input */}
        <TaskInput />
        {/* task */}
       <Task {...task[0]}/>
        {/* task */}
        <Task {...task[1]}/>
        {/* task */}
        <Task {...task[2]}/>
        </div>
      {/* //footer section */}
      <Footer year="2023" name = "Boontharika Korkitrotjana" id= "660610769"/>
    </div>
  );
}
