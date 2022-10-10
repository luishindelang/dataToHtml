import React from "react";
import Box from "./Box";

export default function Content({ content, obj, olfObj }) {
  var arr = [];

  function mapObj(object) {
    for (const [key, value] of Object.entries(object)) {
      arr.push(key);
    }
  }

  mapObj(obj);

  if (content == undefined && olfObj == undefined) {
    return (
      <>
        <Box>
          {arr.map((key) => (
            <Content content={key} obj={obj[key]} olfObj={obj} />
          ))}
        </Box>
      </>
    );
  } else {
    return (
      <>
        <div>
          {typeof obj == "object" ? (
            <div>
              {content} :
              <Box>
                {arr.map((key) => (
                  <Content content={key} obj={obj[key]} olfObj={obj}></Content>
                ))}
              </Box>
            </div>
          ) : (
            <div>
              {content} : {olfObj[content]}
            </div>
          )}
        </div>
      </>
    );
  }
}
