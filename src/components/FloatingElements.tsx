import { Wifi, Signal, Globe, Zap, Star, Radio } from "lucide-react";

const icons = [
  { Icon: Wifi, className: "top-[10%] left-[5%] text-primary/20 animate-[pulse_4s_ease-in-out_infinite]", size: 32 },
  { Icon: Signal, className: "top-[20%] right-[8%] text-accent/15 animate-[pulse_5s_ease-in-out_infinite_1s]", size: 28 },
  { Icon: Globe, className: "bottom-[15%] left-[10%] text-accent/10 animate-[pulse_6s_ease-in-out_infinite_2s]", size: 36 },
  { Icon: Zap, className: "top-[60%] right-[5%] text-primary/15 animate-[pulse_4.5s_ease-in-out_infinite_0.5s]", size: 24 },
  { Icon: Star, className: "top-[40%] left-[3%] text-accent/10 animate-[pulse_5.5s_ease-in-out_infinite_1.5s]", size: 20 },
  { Icon: Radio, className: "bottom-[30%] right-[12%] text-primary/10 animate-[pulse_5s_ease-in-out_infinite_3s]", size: 26 },
];

const FloatingElements = () => (
  <>
    {icons.map((item, i) => (
      <item.Icon
        key={i}
        size={item.size}
        className={`absolute hidden md:block pointer-events-none ${item.className}`}
      />
    ))}
  </>
);

export default FloatingElements;
