// import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useLocation } from "react-router-dom"
import { fetchPosts } from "./DemoSlice";

const DemoPage = ({ number }) => {

  // For Dynamic Routes, get params
  const { sampleParams } = useParams()

  // Get current page location
  const location = useLocation()

  // To call Actions
  const dispatch = useDispatch();
  
  // To select States
  const testSelector = useSelector((state) => state.DemoSlice);
  console.log("CONSOLE", testSelector);

  // useEffect(() => {
  //   if fetch status is idle, dispatch fetch
  // }, [])
  
  return (
    <div>
      DemoPage {number}
      <button onClick={() => dispatch(fetchPosts())}>
        get posts
      </button>
    </div>
  );
};

export default DemoPage;
