import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const CustomPopover = ({ children }) => {
  return (
    <Popover>
      <PopoverTrigger>{children[0]}</PopoverTrigger>
      <PopoverContent>{children[1]}</PopoverContent>
    </Popover>
  );
};

export default CustomPopover;
