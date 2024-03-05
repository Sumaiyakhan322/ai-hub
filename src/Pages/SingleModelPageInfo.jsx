import { useParams } from "react-router-dom";
import { getSingleProject } from "../data/project";

const SingleModelPageInfo = () => {
  const { modelId } = useParams();
  const model = getSingleProject(modelId)
  console.log(model)
  console.log(modelId);
  return (
    <div className="text-center text-green-500 text-4xl h-screen">
      This is single model page - Coming soon....
    </div>
  );
};

export default SingleModelPageInfo;
