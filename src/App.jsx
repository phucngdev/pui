import React from "react";
import Form from "./components/form/Form";
import Input from "./components/input/index";
import Button from "./components/button";
import Breadcrumb from "./components/breadcrumb";
import message from "./components/message";
import {
  UserIcon,
  LockIcon,
  EyeIcon,
  EyeInvisibleIcon,
  HomeIcon,
} from "./icons/index";
import GridDemo from "./components/grid/demo";
import {
  SearchIcon,
  EditIcon,
  LoadingIcon,
  InfoIcon,
  WarningIcon,
  ErrorIcon,
  SuccessIcon,
  DeleteIcon,
} from "./icons";

function App() {
  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    // Simulate login
    message.loading("Đang đăng nhập...");
    setTimeout(() => {
      message.success("Đăng nhập thành công!");
      console.log("Form values:", values);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <GridDemo></GridDemo>
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Breadcrumb Examples */}
        <section className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Ví dụ về Breadcrumb</h2>
          <div className="space-y-6">
            {/* Basic Breadcrumb */}
            <div>
              <h3 className="text-lg font-medium mb-2">Breadcrumb cơ bản</h3>
              <Breadcrumb
                items={[
                  { title: "Trang chủ", href: "/" },
                  { title: "Components", href: "/components" },
                  { title: "Breadcrumb" },
                ]}
              />
            </div>

            {/* Custom Separator */}
            <div>
              <h3 className="text-lg font-medium mb-2">
                Dấu phân cách tùy chỉnh
              </h3>
              <Breadcrumb
                items={[
                  { title: "Trang chủ", href: "/" },
                  { title: "Components", href: "/components" },
                  { title: "Breadcrumb" },
                ]}
                separator=">"
              />
            </div>

            {/* With Icons */}
            <div>
              <h3 className="text-lg font-medium mb-2">Sử dụng với Icon</h3>
              <Breadcrumb
                items={[
                  { title: <HomeIcon />, href: "/" },
                  { title: "Components", href: "/components" },
                  { title: "Breadcrumb" },
                ]}
              />
            </div>

            {/* Custom Styling */}
            <div>
              <h3 className="text-lg font-medium mb-2">Tùy chỉnh Style</h3>
              <Breadcrumb
                items={[
                  { title: "Trang chủ", href: "/" },
                  { title: "Components", href: "/components" },
                  { title: "Breadcrumb" },
                ]}
                className="custom-breadcrumb"
                style={{ marginBottom: "20px" }}
              />
            </div>
          </div>
        </section>

        {/* Basic Buttons */}
        <section className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Basic Buttons</h2>
          <div className="flex flex-wrap gap-4">
            <Button onClick={() => message.info("Default Button")}>
              Default Button
            </Button>
            <Button
              type="primary"
              onClick={() => message.success("Primary Button")}
            >
              Primary Button
            </Button>
            <Button
              type="dashed"
              onClick={() => message.warning("Dashed Button")}
            >
              Dashed Button
            </Button>
            <Button type="text" onClick={() => message.info("Text Button")}>
              Text Button
            </Button>
            <Button type="link" onClick={() => message.info("Link Button")}>
              Link Button
            </Button>
          </div>
        </section>

        {/* Button Sizes */}
        <section className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Button Sizes</h2>
          <div className="flex flex-wrap items-center gap-4">
            <Button size="small" onClick={() => message.info("Small Button")}>
              Small Button
            </Button>
            <Button onClick={() => message.info("Default Button")}>
              Default Button
            </Button>
            <Button size="large" onClick={() => message.info("Large Button")}>
              Large Button
            </Button>
          </div>
        </section>

        {/* Button with Icons */}
        <section className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Buttons with Icons</h2>
          <div className="flex flex-wrap gap-4">
            <Button
              icon={<SearchIcon />}
              onClick={() => message.info("Search clicked")}
            >
              Search
            </Button>
            <Button
              icon={<EditIcon />}
              onClick={() => message.info("Edit clicked")}
            >
              Edit
            </Button>
            <Button
              icon={<DeleteIcon />}
              onClick={() => message.error("Delete clicked")}
            >
              Delete
            </Button>
            <Button
              icon={<InfoIcon />}
              onClick={() => message.info("Info clicked")}
            >
              Info
            </Button>
            <Button
              icon={<WarningIcon />}
              onClick={() => message.warning("Warning clicked")}
            >
              Warning
            </Button>
            <Button
              icon={<ErrorIcon />}
              onClick={() => message.error("Error clicked")}
            >
              Error
            </Button>
            <Button
              icon={<SuccessIcon />}
              onClick={() => message.success("Success clicked")}
            >
              Success
            </Button>
          </div>
        </section>

        {/* Icon Only Buttons */}
        <section className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Icon Only Buttons</h2>
          <div className="flex flex-wrap gap-4">
            <Button
              icon={<SearchIcon />}
              onClick={() => message.info("Search clicked")}
            />
            <Button
              icon={<EditIcon />}
              onClick={() => message.info("Edit clicked")}
            />
            <Button
              icon={<DeleteIcon />}
              onClick={() => message.error("Delete clicked")}
            />
            <Button
              icon={<InfoIcon />}
              onClick={() => message.info("Info clicked")}
            />
            <Button
              icon={<WarningIcon />}
              onClick={() => message.warning("Warning clicked")}
            />
            <Button
              icon={<ErrorIcon />}
              onClick={() => message.error("Error clicked")}
            />
            <Button
              icon={<SuccessIcon />}
              onClick={() => message.success("Success clicked")}
            />
          </div>
        </section>

        {/* Loading Buttons */}
        <section className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Loading Buttons</h2>
          <div className="flex flex-wrap gap-4">
            <Button loading onClick={() => message.info("Loading...")}>
              Loading
            </Button>
            <Button
              type="primary"
              loading
              onClick={() => message.success("Loading...")}
            >
              Loading
            </Button>
            <Button
              type="dashed"
              loading
              onClick={() => message.warning("Loading...")}
            >
              Loading
            </Button>
            <Button
              type="text"
              loading
              onClick={() => message.info("Loading...")}
            >
              Loading
            </Button>
            <Button
              type="link"
              loading
              onClick={() => message.info("Loading...")}
            >
              Loading
            </Button>
          </div>
        </section>

        {/* Disabled Buttons */}
        <section className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Disabled Buttons</h2>
          <div className="flex flex-wrap gap-4">
            <Button disabled onClick={() => message.info("Disabled")}>
              Disabled
            </Button>
            <Button
              type="primary"
              disabled
              onClick={() => message.success("Disabled")}
            >
              Disabled
            </Button>
            <Button
              type="dashed"
              disabled
              onClick={() => message.warning("Disabled")}
            >
              Disabled
            </Button>
            <Button
              type="text"
              disabled
              onClick={() => message.info("Disabled")}
            >
              Disabled
            </Button>
            <Button
              type="link"
              disabled
              onClick={() => message.info("Disabled")}
            >
              Disabled
            </Button>
          </div>
        </section>

        {/* Danger Buttons */}
        <section className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Danger Buttons</h2>
          <div className="flex flex-wrap gap-4">
            <Button danger onClick={() => message.error("Danger clicked")}>
              Danger
            </Button>
            <Button
              type="primary"
              danger
              onClick={() => message.error("Danger clicked")}
            >
              Danger
            </Button>
            <Button
              type="dashed"
              danger
              onClick={() => message.error("Danger clicked")}
            >
              Danger
            </Button>
            <Button
              type="text"
              danger
              onClick={() => message.error("Danger clicked")}
            >
              Danger
            </Button>
            <Button
              type="link"
              danger
              onClick={() => message.error("Danger clicked")}
            >
              Danger
            </Button>
          </div>
        </section>

        {/* Ghost Buttons */}
        <section className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Ghost Buttons</h2>
          <div className="flex flex-wrap gap-4">
            <Button ghost onClick={() => message.info("Ghost clicked")}>
              Ghost
            </Button>
            <Button
              type="primary"
              ghost
              onClick={() => message.success("Ghost clicked")}
            >
              Ghost
            </Button>
            <Button
              type="dashed"
              ghost
              onClick={() => message.warning("Ghost clicked")}
            >
              Ghost
            </Button>
            <Button
              type="text"
              ghost
              onClick={() => message.info("Ghost clicked")}
            >
              Ghost
            </Button>
            <Button
              type="link"
              ghost
              onClick={() => message.info("Ghost clicked")}
            >
              Ghost
            </Button>
          </div>
        </section>

        {/* Block Buttons */}
        <section className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Block Buttons</h2>
          <div className="space-y-4">
            <Button block onClick={() => message.info("Block Button clicked")}>
              Block Button
            </Button>
            <Button
              type="primary"
              block
              onClick={() => message.success("Block Button clicked")}
            >
              Block Button
            </Button>
            <Button
              type="dashed"
              block
              onClick={() => message.warning("Block Button clicked")}
            >
              Block Button
            </Button>
          </div>
        </section>

        {/* Button Groups */}
        <section className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Button Groups</h2>
          <div className="flex flex-wrap gap-4">
            <div className="flex">
              <Button onClick={() => message.info("Left clicked")}>Left</Button>
              <Button onClick={() => message.info("Middle clicked")}>
                Middle
              </Button>
              <Button onClick={() => message.info("Right clicked")}>
                Right
              </Button>
            </div>
            <div className="flex">
              <Button
                type="primary"
                onClick={() => message.success("Left clicked")}
              >
                Left
              </Button>
              <Button
                type="primary"
                onClick={() => message.success("Middle clicked")}
              >
                Middle
              </Button>
              <Button
                type="primary"
                onClick={() => message.success("Right clicked")}
              >
                Right
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
