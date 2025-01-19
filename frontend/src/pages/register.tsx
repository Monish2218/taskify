import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const RegisterPage = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <Card className="w-96">
        <CardHeader>
          <CardTitle>Register</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Input type="email" placeholder="Email" />
            <Input type="name" placeholder="Name" />
            <Input type="password" placeholder="Password" />
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button>Register</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default RegisterPage;