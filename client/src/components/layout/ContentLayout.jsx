import { useSelector } from "react-redux";

const ContentLayout = ({
  children,
  maxWidth = "max-w-[600px]",
  className = "",
}) => {
  const { asideCollapse } = useSelector((store) => store.page);
  return (
    <div
      className={`h-full ${
        !asideCollapse ? "w-full ml-[60px]" : "w-full ml-[200px]"
      } mt-[80px] p-3 bg-zinc-200/10 border-t ${className}`}
    >
      <div className={`${maxWidth} w-full mx-auto`}>{children}</div>
    </div>
  );
};

export default ContentLayout;
