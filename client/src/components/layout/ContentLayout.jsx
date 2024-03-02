const ContentLayout = ({ children, maxWidth = "max-w-[600px]" }) => {
  return (
    <div className=" h-full ml-[200px] mt-[80px] p-3 bg-zinc-200/10 border-t">
      <div className={`${maxWidth} w-full mx-auto`}>{children}</div>
    </div>
  );
};

export default ContentLayout;
