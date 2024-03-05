
import '../Accordion/Accordion.css'

const Accordion = () => {
  
   
    return (
      <div className="my-12">
          <h1 className="text-center font-bold text-3xl md:text-5xl my-4">FAQs</h1>
        <div className="join join-vertical  grid grid-cols-1 md:grid-cols-2">
      
          <div className="collapse collapse-arrow join-item border border-base-300 ">
            <input type="radio" name="my-accordion-4" defaultChecked />
            <div className="collapse-title text-xl font-medium hover:mr-10">
           1. How does biznestai work?
            </div>
            <div className="collapse-content">
              <p>Our platform uses advanced Natural Language Processing (NLP) and Machine Learning (ML) algorithms to analyze your input and generate high-quality content based on your needs. You select the type of content you need and provide a few keywords or prompts, and our AI will take care of the rest!</p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
             2. How does biznestai work?
            </div>
            <div className="collapse-content">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure vel, doloremque, a dolorem porro quam assumenda voluptatem veniam quia, quaerat perferendis obcaecati laborum? At veritatis in quo totam, cupiditate incidunt.</p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
             3. How does biznestai work?
            </div>
            <div className="collapse-content">
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati facilis, temporibus similique iure officia aliquam est asperiores incidunt laboriosam assumenda eum, quae quam, numquam labore suscipit doloribus saepe ex sapiente ipsum accusamus dignissimos et! Accusamus atque saepe impedit iusto, ex esse dolores aut autem itaque, dolorem ab, cumque odit quos!</p>
            </div>
          </div>
        </div>
      </div>
     
  
  
      
    );
  };
  
  export default Accordion;
  