import Content from "../components/Content";

export default function index() {
  // const obj = {
  //   a: "1",
  //   b: "2",
  //   c: ["aa", { a: "1", b: "2" }],
  // };

  // const obj = ["a", "b", ["a", { a: "1", b: "2" }, "b"]];

  // const obj = {
  //   a: "1",
  //   b: "2",
  //   c: { a: "1" },
  // };

  const obj = "hallo";

  return (
    <>
      <div>
        <Content obj={obj} />
      </div>
    </>
  );
}
