import Button from "@/components/ui/button/button";
import Input from "@/components/ui/input/input";
import ThemeToggle from "@/components/ui/themeToggle";

export default function Home() {
  
  return(
    <>
      <ThemeToggle />
      <div style={{ padding: '20px' }}>
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
        <Button loading>Loading</Button>
        <Input label="Email" helperText="Enter your email" />
        <Input label="Password" error="Required field" />
        <Input label="Username" maxLength={20} />
      </div>
      <div>Dashboard here</div>
    </>
    );
}