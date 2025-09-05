import { Col, Row } from "antd";
import Header from "./Header";
import TodoSection from "./TodoSection";
import TaskStatus from "./TaskStatus";
import CompletedTask from "./CompletedTask";

const DashboardPage = () => {
  return (
    <div style={{ padding: 20 }}>
      <Header />
      <Row
        gutter={16}
        style={{ marginTop: 20 }}
        className="border border-[#bec2ca] "
      >
        <div className="flex w-full bg-[#f4f8ff] gap-5 justify-between p-4">
          <div className="flex-1 outline-none shadow-xl outline-[#bec2ca] p-4 rounded-md bg-white">
            <TodoSection />
          </div>
          <div className="flex-1 gap-4 flex flex-col">
            <TaskStatus />
            <CompletedTask />
          </div>
        </div>
      </Row>
    </div>
  );
};
export default DashboardPage;
