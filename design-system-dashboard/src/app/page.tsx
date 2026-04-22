import Button from "@/components/ui/button/button";
import Card, { CardBody, CardFooter, CardHeader } from "@/components/ui/card/card";
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
        <div style={{ padding: '20px' }}>
      <Card>
        <CardHeader>Default Card</CardHeader>
        <CardBody>This is a simple card</CardBody>
        <CardFooter>Footer content</CardFooter>
      </Card>

      <Card variant="elevated">
        <CardHeader>Elevated Card</CardHeader>
        <CardBody>With shadow</CardBody>
      </Card>
    </div>
      </div>
      <div>Dashboard here</div>
    </>
    );
}