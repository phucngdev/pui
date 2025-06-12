import React from "react";
import Input from "./components/input/index";
import {
  UserIcon,
  EmailIcon,
  LockIcon,
  SearchIcon,
  EditIcon,
  DeleteIcon,
  LoadingIcon,
  CheckIcon,
  CloseIcon,
  InfoIcon,
  WarningIcon,
  ErrorIcon,
  SuccessIcon,
  EyeIcon,
  EyeInvisibleIcon,
} from "./icons/index";

function App() {
  const icons = [
    { name: "UserIcon", component: UserIcon },
    { name: "EmailIcon", component: EmailIcon },
    { name: "LockIcon", component: LockIcon },
    { name: "SearchIcon", component: SearchIcon },
    { name: "EditIcon", component: EditIcon },
    { name: "DeleteIcon", component: DeleteIcon },
    { name: "LoadingIcon", component: LoadingIcon },
    { name: "CheckIcon", component: CheckIcon },
    { name: "CloseIcon", component: CloseIcon },
    { name: "InfoIcon", component: InfoIcon },
    { name: "WarningIcon", component: WarningIcon },
    { name: "ErrorIcon", component: ErrorIcon },
    { name: "SuccessIcon", component: SuccessIcon },
    { name: "EyeIcon", component: EyeIcon },
    { name: "EyeInvisibleIcon", component: EyeInvisibleIcon },
  ];

  return (
    <div className="container mx-auto p-8">
      <Input prefix={<SearchIcon color="#000" />} placeholder="Placeholder" />
      <h1 className="text-2xl font-bold mb-6">Icon Showcase</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {icons.map((icon) => (
          <div
            key={icon.name}
            className="flex flex-col items-center p-4 border rounded-lg hover:shadow-md transition-shadow"
          >
            <div className="mb-2">
              <icon.component size={24} />
            </div>
            <span className="text-sm text-gray-600">{icon.name}</span>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <h2 className="text-xl font-bold mb-4">Icon Sizes</h2>
        <div className="flex items-center gap-8">
          <div className="flex flex-col items-center">
            <SearchIcon size={16} />
            <span className="text-sm mt-2">16px</span>
          </div>
          <div className="flex flex-col items-center">
            <SearchIcon size={24} />
            <span className="text-sm mt-2">24px</span>
          </div>
          <div className="flex flex-col items-center">
            <SearchIcon size={32} />
            <span className="text-sm mt-2">32px</span>
          </div>
          <div className="flex flex-col items-center">
            <SearchIcon size={48} />
            <span className="text-sm mt-2">48px</span>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-xl font-bold mb-4">Icon Colors</h2>
        <div className="flex items-center gap-8">
          <div className="flex flex-col items-center">
            <SearchIcon color="#1890ff" />
            <span className="text-sm mt-2">Primary</span>
          </div>
          <div className="flex flex-col items-center">
            <SearchIcon color="#52c41a" />
            <span className="text-sm mt-2">Success</span>
          </div>
          <div className="flex flex-col items-center">
            <SearchIcon color="#faad14" />
            <span className="text-sm mt-2">Warning</span>
          </div>
          <div className="flex flex-col items-center">
            <SearchIcon color="#ff4d4f" />
            <span className="text-sm mt-2">Error</span>
          </div>
          <div className="flex flex-col items-center">
            <SearchIcon color="#000000" />
            <span className="text-sm mt-2">Black</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
