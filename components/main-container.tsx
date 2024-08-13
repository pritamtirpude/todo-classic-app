import Header from "./header";
import TodoContainer from "./todo-container";

function MainContainer() {
  return (
    <section className="mt-12  size-full  min-h-screen max-w-none px-6 lg:mt-[70px] lg:max-w-[540px] lg:px-0">
      <Header />
      <TodoContainer />
    </section>
  );
}

export default MainContainer;
