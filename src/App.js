import './App.css';
import Problem1 from "./components/problems/Problem1";
import Problem2 from "./components/problems/Problem2";
import Problem3 from "./components/problems/Problem3";
import Problem4 from "./components/problems/Problem4";
import Problem5 from "./components/problems/Problem5";
import ProblemWrapper from "./components/problems/ProblemWrapper";
import ProblemExtra6 from "./components/problems/ProblemExtra6";
import ProblemExtra7 from "./components/problems/ProblemExtra7";
import ProblemExtra8 from "./components/problems/ProblemExtra8";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <ProblemWrapper name='Problem 1'><Problem1 /></ProblemWrapper>
      <ProblemWrapper name='Problem 2'><Problem2 /></ProblemWrapper>
      <ProblemWrapper name='Problem 3'><Problem3 /></ProblemWrapper>
      <ProblemWrapper name='Problem 4'><Problem4 /></ProblemWrapper>
      <ProblemWrapper name='Problem 5'><Problem5 /></ProblemWrapper>
      <ProblemWrapper name='Problem 6 (extra) the wordrepeater'><ProblemExtra6 /></ProblemWrapper>
      <ProblemWrapper name='Problem 7 (extra) the class adder'><ProblemExtra7 /></ProblemWrapper>
      <ProblemWrapper name='Problem 8 (extra) the hero list'><ProblemExtra8 /></ProblemWrapper>


    </>
  );
}

export default App;
