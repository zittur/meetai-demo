import { Button } from "@/components/ui/button";

export default function Home() {
    return (
        <div className="flex flex-row items-center justify-center h-screen gap-4">
            <Button variant={"custom2"}>Click me</Button>
            <Button variant={"custom"}>Click me</Button>
        </div>
    );
}
