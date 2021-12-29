import React from "react";
import { Layout } from "../../..";
import { ArrayData } from "../../../../data/array";
import { CommaStringToNumberArray } from "../../../../utils/helper";

const RemoveDuplicatesFromArray = () => {
  const { duplicateArray, removeDuplicatesFromArray, usingFilter } = ArrayData;
  const [input, setInput] = React.useState(duplicateArray.toString());
  const [result, setResult] = React.useState("");
  const handleChange = (e) => {
    const { value } = e.target;
    if (value !== "") {
      setInput(value);
    }
  };

  const execute = () => {
    setResult(removeDuplicatesFromArray(CommaStringToNumberArray(input)));
    console.log("==> result : ", result);
  };

  const arrayText = `[${input.toString()}]`;
  return (
    <Layout>
      <div className="header blogs section__padding">
        <h1>Remove Duplicates</h1>
        <br />
        <div className="code">
          <div className="code__example">
            <h2>Example</h2>
            <br />
            <div style={{ display: "flex" }}>
              <h4>Input :</h4> <br />
              <input
                type="text"
                value={input}
                onChange={handleChange}
                title="Enter comma seperated number value"
              />
              <button type="button" onClick={execute}>
                Execute
              </button>
            </div>
            <br />
            <div>
              <h3>Algorithm</h3>
              <br />
              <h4>Using Filter</h4>
              <br />
              {`${arrayText}.filter((item, index) => {
                    return ${arrayText}.indexOf(item) === index;
                }`}
              <br />
              <br />
              <h4>Using Reduce</h4>
              <br />
              {`${arrayText}.reduce((acc, item) => {
                    if (!acc.includes(item)) acc.push(item);
                    return acc;
                }, [])`}
              <br />
              <br />
              <h4>Using Set</h4>
              <br />
              {`return Set(${arrayText})`}
            </div>
          </div>
          <div className="example__result">
            <h2>Output: </h2>
            <br />
            {result.length > 0 && `${arrayText}`}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default RemoveDuplicatesFromArray;
