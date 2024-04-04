import Component from "./components";

const SideNavigation = () => {
  return (
    <div className="w-full h-[1024px] relative bg-white overflow-hidden flex flex-row items-start justify-start tracking-[normal] mq450:h-auto">
      <Component />
    </div>
  );
};

export default SideNavigation;
