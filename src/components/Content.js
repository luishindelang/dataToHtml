import React from "react";
import Box from "./Box";

export default function Content({ objKey, obj }) {
  if (Array.isArray(obj)) {
    if (objKey == undefined) {
      return (
        <>
          <Box>
            {obj.map((value) => (
              <Content objKey={obj.indexOf(value)} obj={value} />
            ))}
          </Box>
        </>
      );
    }
    return (
      <>
        <div>
          {objKey} :
          <Box>
            {obj.map((value) =>
              typeof value == "object" ? (
                <Content objKey={obj.indexOf(value)} obj={value} />
              ) : (
                <div>
                  {obj.indexOf(value)} :{value}
                </div>
              )
            )}
          </Box>
        </div>
      </>
    );
  } else if (typeof obj == "object") {
    var arr = [];
    for (const [key, value] of Object.entries(obj)) {
      arr.push(key);
    }

    if (objKey == undefined) {
      return (
        <>
          <Box>
            {arr.map((key) => (
              <Content objKey={key} obj={obj[key]} />
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
                {objKey} :
                <Box>
                  {arr.map((key) => (
                    <Content objKey={key} obj={obj[key]} />
                  ))}
                </Box>
              </div>
            ) : (
              <div>
                {objKey} : {obj}
              </div>
            )}
          </div>
        </>
      );
    }
  } else {
    return (
      <>
        <Box>{obj}</Box>
      </>
    );
  }
}
