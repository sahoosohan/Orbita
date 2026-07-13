import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center font-sans">
      Hello
      <Button>Click</Button>
      <UserButton/>
    </div>
  );
}
