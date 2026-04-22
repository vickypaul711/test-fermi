import Button from "@/components/ui/button/button";
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
      </div>
      <div>Dashboard here</div>
    </>
    );
}